package com.galaxyinternet.common.taglib;

import java.util.List;

import org.apache.commons.lang.StringUtils;

import com.galaxyinternet.common.enums.DictEnum;
import com.galaxyinternet.common.utils.WebUtils;
import com.galaxyinternet.dao.soptask.SopTaskDao;
import com.galaxyinternet.framework.cache.Cache;
import com.galaxyinternet.model.hologram.InformationListdata;
import com.galaxyinternet.model.project.Project;
import com.galaxyinternet.model.resource.PlatformResource;
import com.galaxyinternet.model.soptask.SopTask;
import com.galaxyinternet.model.user.User;
import com.galaxyinternet.service.ProjectService;
import com.galaxyinternet.service.hologram.InformationListdataService;
import com.galaxyinternet.utils.SopConstatnts;
import com.google.gson.Gson;

public class FXFunctionTags
{

    public static boolean hasRoles(String roleIds)
    {
        if(StringUtils.isNotBlank(roleIds)){
            String[] ids = roleIds.split(",");
            for(String id : ids){
                if(WebUtils.hasRole(new Long(id))){
                    return true;
                }
            }
        }
        return false;
    }
	public static boolean hasRole(Long roleId)
	{
		return WebUtils.hasRole(roleId);
	}
	public static boolean isCreatedByUser(String recordType, Long id)
	{
		User user = WebUtils.getUserFromSession();
		if(user != null && recordType != null && id != null)
		{
			if(recordType.equalsIgnoreCase("project"))
			{
				ProjectService projectService = WebUtils.getBean(ProjectService.class);
				if(projectService != null)
				{
					Project query = new Project();
					query.setCreateUid(user.getId());
					query.setId(id);
					long count = projectService.queryCount(query);
					return count > 0L;
				}
			}
		}
		return false;
	}
	public static boolean inOwnDepart(String recordType, Long id)
	{
		User user = WebUtils.getUserFromSession();
		if(user != null && recordType != null && id != null)
		{
			if(recordType.equalsIgnoreCase("project"))
			{
				ProjectService projectService = WebUtils.getBean(ProjectService.class);
				if(projectService != null)
				{
					Project query = new Project();
					query.setProjectDepartid(user.getDepartmentId());
					query.setId(id);
					long count = projectService.queryCount(query);
					return count > 0L;
				}
			}
		}
		return false;
	}
	
	public static boolean isDepart(Long depId)
	{
		if(depId != null)
		{
			User user = WebUtils.getUserFromSession();
			if(user != null && user.getDepartmentId() != null)
			{
				return user.getDepartmentId().equals(depId);
			}
		}
		return false;
	}
	@SuppressWarnings("unchecked")
	public static boolean isTransfering(Long projectId)
	{
		Cache cache = WebUtils.getBean(Cache.class);
		if(projectId != null && cache != null)
		{
			Object obj = cache.get(SopConstatnts.Redis._transfer_projects_key_);
			if(obj != null)
			{
				List<Long> projectIds = (List<Long>)obj;
				return projectIds.contains(projectId);
			}
		}
		return false;
	}
	public static String getTransferingPids()
	{
		Cache cache = WebUtils.getBean(Cache.class);
		if(cache != null)
		{
			Object obj = cache.get(SopConstatnts.Redis._transfer_projects_key_);
			if(obj != null)
			{
				String result = new Gson().toJson(obj);
				if(result != null)
				{
					result = result.replaceAll("\\[|\\]", "");
				}
				return result;
			}
		}
		return "";
	}
	/**
	 * 绿色通道 - 尽职调查阶段
	 * @param projectId
	 * @return
	 */
	public static boolean isPrivilege_6(Long projectId)
	{
		ProjectService projectService = WebUtils.getBean(ProjectService.class);
		if(projectService == null)
		{
			return false;
		}
		
		Project project = projectService.queryById(projectId);
		if(project == null || project.getGreanChannel() == null)
		{
			return false;
		}
		
		String[] stages = project.getGreanChannel().split(",");
		for(String stage : stages)
		{
			if("6".equals(stage))
			{
				return true;
			}
		}
		return false;
	}



	/**
	 * 项目 中 是否 有待办任务
	 * @param projectId
	 * @return
	 */
	public static boolean isForTask(Long projectId)
	{
		SopTaskDao sopTaskDao = WebUtils.getBean(SopTaskDao.class);
		User user = WebUtils.getUserFromSession();
		if(sopTaskDao == null || user == null)
		{
			return false;
		}

		SopTask sopTask  = new SopTask();
		sopTask.setProjectId(projectId);
		sopTask.setAssignUid(user.getId());
		sopTask.setTaskStatus(DictEnum.taskStatus.待完工.getCode());
		List<SopTask> taskList = sopTaskDao.selectXXXXXX(sopTask);

		if(taskList == null || taskList.isEmpty())
		{
			return false;
		}

		return true;
	}
	
	public static boolean hasPremission(String resourceMark)
	{
		User user = WebUtils.getUserFromSession();
		List<PlatformResource> resources = user.getAllResourceToUser();
		if(resources != null && resources.size() >0)
		{
			for(PlatformResource resource : resources)
			{
				if(resourceMark != null && resourceMark.equals(resource.getResourceMark()))
				{
					return true;
				}
			}
		}
		return false;
	}
	
	public static String dataScope(String resourceMark)
	{
		User user = WebUtils.getUserFromSession();
		List<PlatformResource> resources = user.getAllResourceToUser();
		if(resources != null && resources.size() >0)
		{
			for(PlatformResource resource : resources)
			{
				if(resourceMark != null && resourceMark.equals(resource.getResourceMark()))
				{
					List<Long> userIds = resource.getUserIds();
					if(userIds != null && userIds.size()>0)
					{
						return StringUtils.join(userIds,",");
					}
				}
			}
		}
		return "";
	}
	
	public static String reloadCondition(String resourceMark)
	{
		User user = WebUtils.getUserFromSession();
		List<PlatformResource> resources = user.getAllResourceToUser();
		if(resources != null && resources.size() >0)
		{
			for(PlatformResource resource : resources)
			{
				if(resourceMark != null && resourceMark.equals(resource.getResourceMark()))
				{
				  if(null!=resource.getSpId()){
						 return resource.getSpId().toString();
				  }
				}
			}
		}
		return "";
	}
	public static String reloadDepts(String resourceMark)
	{
		User user = WebUtils.getUserFromSession();
		List<PlatformResource> resources = user.getAllResourceToUser();
		if(resources != null && resources.size() >0)
		{
			for(PlatformResource resource : resources)
			{
				if(resourceMark != null && resourceMark.equals(resource.getResourceMark()))
				{
				  if(null!=resource.getSpId()){
						List<Long> depIds = resource.getDepIds();
					   if(null!=depIds&&depIds.size()>0){
						
						return StringUtils.join(depIds,",");
					   }
				  }
				}
			}
		}
		return "";
	}

	/**
	 * 当前用户是否是协作人
	 * @param recordType
	 * @param id
	 * @return
	 */
	public static boolean isCooperative(Long id)
	{
		User user = WebUtils.getUserFromSession();
		if(user != null && id != null)
		{
			InformationListdataService service = WebUtils.getBean(InformationListdataService.class);
			if(service != null)
			{
				InformationListdata query = new InformationListdata();
				query.setProjectId(id);
				query.setTitleId(1103L);
				query.setField1(user.getId()+"");
				query.setField5("1");
				long count = service.queryCount(query);
				return count > 0L;
			}
		}
		return false;
	}
}
