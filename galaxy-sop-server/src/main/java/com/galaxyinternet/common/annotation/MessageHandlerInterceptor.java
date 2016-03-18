package com.galaxyinternet.common.annotation;

import java.lang.reflect.Method;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.galaxyinternet.framework.core.constants.Constants;
import com.galaxyinternet.framework.core.thread.GalaxyThreadPool;
import com.galaxyinternet.model.operationLog.OperationLogType;
import com.galaxyinternet.model.operationLog.OperationLogs;
import com.galaxyinternet.model.operationMessage.OperationMessage;
import com.galaxyinternet.model.operationMessage.OperationType;
import com.galaxyinternet.model.user.User;
import com.galaxyinternet.platform.constant.PlatformConst;
import com.galaxyinternet.service.OperationLogsService;
import com.galaxyinternet.service.OperationMessageService;

/**
 * @description 消息提醒拦截器
 * @author keifer
 * @used 1.在你的controller中的方法中加入注解,如<br/>
 *       "@Logger(writeOperationScope=LogType.MESSAGE)，表示记录"消息提醒"功能产生的日志,默认值。
 *       如果是此操作该属性可以不写<br/>
 *       "@Logger(writeOperationScope=LogType.LOG)，表示记录sop中"日志操作"功能产生的日志<br/>
 *       "@Logger(writeOperationScope=LogType.ALL)，表示记录上面2则功能产生的日志<br/>
 *       2.在方法处理前或后，在reqeust中设置操作的项目名称。例如：ControllerUtils.
 *       setRequestParamsForMessageTip(request,"星河互联创业项目",68) <br/>
 *       注意：如果url里处理多个业务逻辑，分别需
 *       要记录，在枚举类的url后面加上UrlNumber中的数字,UrlNumber.one.name()如。ControllerUtils.
 *       setRequestParamsForMessageTip(request,"星河互联创业项目",68,UrlNumber.one)即可。
 *       3.需要在springmvc配置文件中添加如下配置 <br/>
 *       {@code
 * <mvc:interceptors>
		<mvc:interceptor>
			<mvc:mapping path="/**" />
			<bean class="com.galaxyinternet.common.annotation.MessageHandlerInterceptor" />
		</mvc:interceptor>
	</mvc:interceptors> 
}
 */
public class MessageHandlerInterceptor extends HandlerInterceptorAdapter {

	@Autowired
	OperationMessageService operationMessageService;
	@Autowired
	OperationLogsService operationLogsService;

	@SuppressWarnings("unchecked")
	@Override
	public void afterCompletion(final HttpServletRequest request, HttpServletResponse response, Object handler,
			Exception ex) throws Exception {
		if (handler instanceof HandlerMethod) {
			HandlerMethod handlerMethod = (HandlerMethod) handler;
			Method method = handlerMethod.getMethod();
			final Logger logger = method.getAnnotation(Logger.class);
			if (logger != null) {
				final Map<String, Object> map = (Map<String, Object>) request
						.getAttribute(PlatformConst.REQUEST_SCOPE_MESSAGE_TIP);
				String uniqueKey = getUniqueKey(request, map);
				final OperationType type = OperationType.getObject(uniqueKey);
				final OperationLogType operLogType = OperationLogType.getObject(uniqueKey);
				if (null != type || null != operLogType) {

					final User user = (User) request.getSession().getAttribute(Constants.SESSION_USER_KEY);

					GalaxyThreadPool.getExecutorService().execute(new Runnable() {
						@Override
						public void run() {
							LogType logType = logger.writeOperationScope();
							if (logType == LogType.MESSAGE) {
								operationMessageService.insert(populateOperationMessage(type, user, request, map));
							} else if (logType == LogType.ALL) {
								try {
									operationMessageService.insert(populateOperationMessage(type, user, request, map));
								} catch (Exception e) {
									e.printStackTrace();
								}
								try {
									operationLogsService.insert(populateOperationLog(operLogType, user, request, map));
								} catch (Exception e) {
									e.printStackTrace();
								}
							} else if (logType == LogType.LOG) {
								operationLogsService.insert(populateOperationLog(operLogType, user, request, map));
							}
						}
					});
				}
			}
		}
		super.afterCompletion(request, response, handler, ex);
	}

	private String getUniqueKey(HttpServletRequest request, Map<String, Object> map) {
		String uniqueKey = request.getRequestURL().toString();
		if (null != map && !map.isEmpty()) {
			if (map.containsKey(PlatformConst.REQUEST_SCOPE_URL_NUMBER)) {
				uniqueKey = uniqueKey + "/" + map.get(PlatformConst.REQUEST_SCOPE_URL_NUMBER);
			}
		}
		return uniqueKey;
	}

	private OperationLogs populateOperationLog(OperationLogType type, User user, HttpServletRequest request,
			Map<String, Object> map) {
		OperationLogs entity = new OperationLogs();
		entity.setOperationContent(type.getContent());
		entity.setOperationType(type.getType());
		entity.setUid(user.getId());
		entity.setUname(user.getRealName());
		entity.setDepartName(user.getDepartmentName());
		entity.setUserDepartid(user.getDepartmentId());
		entity.setSopstage(type.getSopstage());
		if (null != map && !map.isEmpty()) {
			entity.setProjectName(String.valueOf(map.get(PlatformConst.REQUEST_SCOPE_PROJECT_NAME)));
			entity.setProjectId(Long.valueOf(String.valueOf(map.get(PlatformConst.REQUEST_SCOPE_PROJECT_ID))));
		}
		return entity;
	}

	private OperationMessage populateOperationMessage(OperationType type, User user, HttpServletRequest request,
			Map<String, Object> map) {
		OperationMessage entity = new OperationMessage();
		entity.setContent(type.getContent());
		entity.setDepartment(user.getDepartmentName());
		entity.setOperatorId(user.getId());
		entity.setOperator(user.getRealName());
		entity.setRole(user.getRole());
		entity.setType(type.getType());
		if (null != map && !map.isEmpty()) {
			entity.setProjectName(String.valueOf(map.get(PlatformConst.REQUEST_SCOPE_PROJECT_NAME)));
			entity.setProjectId(Long.valueOf(String.valueOf(map.get(PlatformConst.REQUEST_SCOPE_PROJECT_ID))));
		}
		Integer module = type.getModule();
		entity.setModule(module == null ? OperationType.getModule(user.getRoleId()) : module);
		return entity;
	}

}
