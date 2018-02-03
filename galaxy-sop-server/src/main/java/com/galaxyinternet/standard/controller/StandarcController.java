package com.galaxyinternet.standard.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.galaxyinternet.common.utils.WebUtils;
import com.galaxyinternet.framework.core.model.Page;
import com.galaxyinternet.framework.core.model.PageRequest;
import com.galaxyinternet.framework.core.model.ResponseData;
import com.galaxyinternet.model.Standard;
import com.galaxyinternet.model.Standard.StandardStatus;
import com.galaxyinternet.service.StandardService;

@Controller
@RequestMapping("/galaxy/standard")
public class StandarcController
{
	private static final Logger logger = LoggerFactory.getLogger(StandarcController.class);
	@Autowired
	private StandardService service;

	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView index()
	{
		ModelAndView mv = new ModelAndView("standard/index");
		return mv;
	}

	@RequestMapping(value = "/search", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseData<Standard> search(@RequestBody PageRequest pageable)
	{
		ResponseData<Standard> data = new ResponseData<>();
		try
		{
			Page<Standard> page = service.queryPageList(new Standard(), pageable);
			List<Standard> list = page.getContent();
			if(list != null && list.size()>0)
			{
				for(Standard item : list)
				{
					item.setStatusDesc(StandardStatus.getDesc(item.getStatus()));
				}
			}
			data.setPageList(page);
		} catch (Exception e)
		{
			if (logger.isDebugEnabled())
			{
				logger.error("查询失败", e);
			}
		}

		return data;
	}

	@RequestMapping(value = "/get/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseData<Standard> get(@PathVariable Long id)
	{
		ResponseData<Standard> data = new ResponseData<>();
		try
		{
			Standard entity =service.queryById(id);
			data.setEntity(entity);
		} catch (Exception e)
		{
			if (logger.isDebugEnabled())
			{
				logger.error(String.format("查询失败,Id:%s", id), e);
			}
		}
		return data;
	}
	
	@RequestMapping(value = "/getByCode/{code}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseData<Standard> getByCode(@PathVariable String code)
	{
		ResponseData<Standard> data = new ResponseData<>();
		try
		{
			Standard query = new Standard();
			query.setModuleCode(code);
			Standard entity =service.queryOne(query);
			data.setEntity(entity);
		} catch (Exception e)
		{
			if (logger.isDebugEnabled())
			{
				logger.error(String.format("查询失败,Code:%s", code), e);
			}
		}
		return data;
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseData<Standard> save(@RequestBody Standard vo)
	{
		ResponseData<Standard> data = new ResponseData<>();
		try
		{
			Assert.notNull(vo,"信息不完整");
			Assert.notNull(vo.getId(), "ID为空");
			Assert.notNull(vo.getStandardDetails(), "内容为空");
			Standard entity = new Standard();
			entity.setId(vo.getId());
			entity.setStandardDetails(vo.getStandardDetails());
			entity.setUpdatedId(WebUtils.getUserFromSession().getId());
			entity.setUpdatedTime(System.currentTimeMillis());
			service.updateById(entity);
		} catch (Exception e)
		{
			if (logger.isDebugEnabled())
			{
				logger.error(String.format("保存失败,Code:%s", vo), e);
			}
		}
		return data;
	}

}
