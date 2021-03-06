package com.galaxyinternet.gateway.route;

import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.InputStreamEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.message.BasicHeader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.galaxyinternet.framework.core.constants.Constants;
import com.galaxyinternet.model.user.User;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;

public class MessageRoute extends ZuulFilter
{
	private static final Logger logger = LoggerFactory.getLogger(MessageRoute.class);
	public static final String CONTENT_ENCODING = "Content-Encoding";
	private String endpoint;
	private CloseableHttpClient httpClient;

	public MessageRoute()
	{
		Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
				.register("http", PlainConnectionSocketFactory.getSocketFactory())
				.register("https", SSLConnectionSocketFactory.getSocketFactory()).build();
		PoolingHttpClientConnectionManager cm = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
		cm.setMaxTotal(200);
		cm.setDefaultMaxPerRoute(20);
		RequestConfig requestConfig = RequestConfig.custom().setConnectionRequestTimeout(3000).setConnectTimeout(3000)
				.setSocketTimeout(3000).build();
		this.httpClient = HttpClients.custom().setConnectionManager(cm).setDefaultRequestConfig(requestConfig).build();

	}

	@Override
	public boolean shouldFilter()
	{
		HttpServletRequest request = RequestContext.getCurrentContext().getRequest();
		String uri = request.getRequestURI();
		if (StringUtils.isEmpty(uri))
		{
			return false;
		}
		return uri.indexOf("/message") != -1;
	}

	@Override
	public Object run() throws ZuulException
	{
		RequestContext ctx = RequestContext.getCurrentContext();
		HttpServletRequest request = ctx.getRequest();
		String originalUri = request.getRequestURI();
		try
		{
			Header[] headers = buildZuulRequestHeaders(request);
			String path = originalUri.substring(originalUri.indexOf("/message") + 8);
			URL url = new URL(endpoint + path);
			String method = request.getMethod();
			HttpRequestBase httpRequest = null;
			if ("post".equalsIgnoreCase(method))
			{
				HttpPost postRequest = new HttpPost(url.toString());
				postRequest.setEntity(new InputStreamEntity(request.getInputStream()));
				httpRequest = postRequest;
			} else if ("get".equalsIgnoreCase(method))
			{
				httpRequest = new HttpGet(url.toString());
			}
			httpRequest.setHeaders(headers);
			HttpResponse response = httpClient.execute(httpRequest, HttpClientContext.create());
			setResponse(response);

		} catch (Exception e)
		{
			if(logger.isErrorEnabled())
			{
				logger.error(String.format("Proxy URL: %s, Error: %s", originalUri,e.getMessage()));
			}
		}
		return null;
	}

	@Override
	public String filterType()
	{
		return "route";
	}

	@Override
	public int filterOrder()
	{
		return 0;
	}

	Header[] buildZuulRequestHeaders(HttpServletRequest request)
	{

		ArrayList<BasicHeader> headers = new ArrayList<>();
		Enumeration<String> headerNames = request.getHeaderNames();
		while (headerNames.hasMoreElements())
		{
			String name = ((String) headerNames.nextElement()).toLowerCase();
			String value = request.getHeader(name);
			if (isValidHeader(name))
			{
				headers.add(new BasicHeader(name, value));
			}
		}
		String sessionId = request.getSession().getId();
		headers.add(new BasicHeader("sessionId", sessionId));
		User user = (User)request.getSession().getAttribute(Constants.SESSION_USER_KEY);
		if(user != null)
		{
			headers.add(new BasicHeader("guserid", user.getId()+""));
		}
		return headers.toArray(new Header[headers.size()]);
	}

	boolean isValidHeader(String name)
	{
		if (name.toLowerCase().contains("content-length"))
		{
			return false;
		}

		if (name.toLowerCase().equals("host"))
		{
			return false;
		}
		
		if (name.toLowerCase().equals("x-requested-with"))
		{
			return false;
		}
		if (name.toLowerCase().equals("referer"))
		{
			return false;
		}
		if (name.toLowerCase().equals("cookie"))
		{
			return false;
		}
		if (name.toLowerCase().equals("origin"))
		{
			return false;
		}
		if (name.toLowerCase().equals("guserid"))
		{
			return false;
		}
		if (name.toLowerCase().equals("sessionid"))
		{
			return false;
		}

		if (!RequestContext.getCurrentContext().getResponseGZipped())
		{
			if (name.toLowerCase().contains("accept-encoding"))
			{
				return false;
			}
		}
		return true;
	}

	void setResponse(HttpResponse response) throws Exception
	{
		RequestContext context = RequestContext.getCurrentContext();
		context.setResponseStatusCode(response.getStatusLine().getStatusCode());
		HttpServletResponse resp = context.getResponse();

		Header[] headers = response.getAllHeaders();
		if (headers != null && headers.length > 0)
		{
			for (Header header : headers)
			{
				if (isValidHeader(header))
				{
					resp.addHeader(header.getName(), header.getValue());
				}
			}
		}
		HttpEntity entity = response.getEntity();
		if (entity != null)
		{
			ServletOutputStream outputStream = resp.getOutputStream();
			entity.writeTo(outputStream);
			outputStream.flush();
		}

	}

	boolean isValidHeader(Header header)
	{
		switch (header.getName().toLowerCase())
		{
		case "connection":
		case "content-length":
		case "content-encoding":
		case "server":
		case "transfer-encoding":
			return false;
		default:
			return true;
		}
	}

	public String getEndpoint()
	{
		return endpoint;
	}

	public void setEndpoint(String endpoint)
	{
		this.endpoint = endpoint;
	}

}
