package com.galaxyinternet.hologram.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.galaxyinternet.common.utils.WebUtils;
import com.galaxyinternet.dao.hologram.InformationFixedTableDao;
import com.galaxyinternet.dao.hologram.InformationListdataDao;
import com.galaxyinternet.dao.hologram.InformationResultDao;
import com.galaxyinternet.framework.core.dao.BaseDao;
import com.galaxyinternet.framework.core.service.impl.BaseServiceImpl;
import com.galaxyinternet.framework.core.utils.StringEx;
import com.galaxyinternet.model.hologram.FixedTableModel;
import com.galaxyinternet.model.hologram.InformationData;
import com.galaxyinternet.model.hologram.InformationFixedTable;
import com.galaxyinternet.model.hologram.InformationListdata;
import com.galaxyinternet.model.hologram.InformationModel;
import com.galaxyinternet.model.hologram.InformationResult;
import com.galaxyinternet.model.hologram.TableModel;
import com.galaxyinternet.model.user.User;
import com.galaxyinternet.service.hologram.InformationDataService;

@Service
public class InformationDataServiceImpl extends BaseServiceImpl<InformationData>implements InformationDataService
{

	@Autowired
	private InformationResultDao resultDao;
	@Autowired
	private InformationFixedTableDao fixdTableDao;
	@Autowired
	private InformationListdataDao listdataDao;

	@Override
	public void save(InformationData data)
	{
		saveResult(data);
		saveListData(data);
		saveFixedTable(data);
	}
	private void saveResult(InformationData data)
	{
		String projectId = data.getProjectId();
		List<InformationModel> list = data.getInfoModeList();
		if(projectId == null || list == null || list.size() ==0)
		{
			return;
		}
		
		InformationResult entity = null;
		List<InformationResult> entityList = new ArrayList<>();
		Set<String> titleIds = new HashSet<>();
		for(InformationModel model : list)
		{
			titleIds.add(model.getTitleId());
			entity = new InformationResult();
			entity.setProjectId(projectId);
			entity.setTitleId(model.getTitleId());
			if(!StringEx.isNullOrEmpty(model.getValue()))
			{
				entity.setContentChoose(model.getValue());
			}
			if(!StringEx.isNullOrEmpty(model.getRemark1()))
			{
				entity.setContentDescribe1(model.getRemark1());
			}
			if(!StringEx.isNullOrEmpty(model.getRemark2()))
			{
				entity.setContentDescribe2(model.getRemark2());
			}
			entityList.add(entity);
		}
		InformationResult query = new InformationResult();
		query.setProjectId(projectId);
		query.setTitleIds(titleIds);
		resultDao.delete(query);
		//插入数据
		if(entityList.size() > 0)
		{
			resultDao.insertInBatch(entityList);
		}
		
	}
	private void saveFixedTable(InformationData data)
	{
		String projectId = data.getProjectId();
		List<FixedTableModel> list = data.getInfoFixedTableList();
		if(projectId == null || list == null || list.size() ==0)
		{
			return;
		}
		String titleId = null;
		InformationFixedTable entity = null;
		List<InformationFixedTable> insertEntityList = new ArrayList<>();
		List<InformationFixedTable> updateEntityList = new ArrayList<>();
		Set<String> titleIds = new HashSet<>();
		User user = WebUtils.getUserFromSession();
		Long userId = user != null ? user.getId() : null;
		Long now = new Date().getTime();
		for(FixedTableModel model : list)
		{
			titleIds.add(model.getTitleId());
			entity = new InformationFixedTable();
			entity.setProjectId(projectId);
			entity.setTitleId(model.getTitleId());
			entity.setRowNo(model.getRowNo());
			entity.setColNo(model.getColNo());
			entity.setType(model.getType());
			entity.setContent(model.getValue());
			entity.setCreatedTime(now);
			entity.setCreateId(userId+"");
			insertEntityList.add(entity);
		}
		InformationFixedTable infoFixedTable=new InformationFixedTable();
		infoFixedTable.setTitleId(titleId);
		//插入数据
		if(insertEntityList.size() > 0)
		{
			int delete = fixdTableDao.delete(infoFixedTable);
			if(delete>=0){
				fixdTableDao.insertInBatch(insertEntityList);
			}
		}
		
	}
	private void saveListData(InformationData data)
	{
		String projectId = data.getProjectId();
		List<TableModel> list = data.getInfoTableModelList();
		if(projectId == null || list == null || list.size() ==0)
		{
			return;
		}
		InformationListdata entity = null;
		List<InformationListdata> insertEntityList = new ArrayList<>();
		List<InformationListdata> updateEntityList = new ArrayList<>();
		Set<String> titleIds = new HashSet<>();
		
		for(TableModel model : list)
		{
			titleIds.add(model.getTitleId()+"");
			entity = new InformationListdata();
			entity.setProjectId(Long.valueOf(projectId));
			entity.setTitleId(Long.valueOf(model.getTitleId()));
			entity.setCode(model.getCode());
			entity.setParentId(model.getParentId());
			entity.setField1(model.getField1());
			entity.setField2(model.getField2());
			entity.setField3(model.getField3());
			entity.setField4(model.getField4());
			entity.setField5(model.getField5());
			entity.setField6(model.getField6());
			entity.setField7(model.getField7());
			entity.setField8(model.getField8());
			entity.setField9(model.getField9());
			entity.setField10(model.getField10());
			
			User user = WebUtils.getUserFromSession();
			Long userId = user != null ? user.getId() : null;
			Long now = new Date().getTime();
			if(model.getId() == null)
			{
				entity.setCreatedTime(now);
				entity.setCreateId(userId);
				insertEntityList.add(entity);
			}
			else
			{
				entity.setId(model.getId());
				entity.setUpdatedTime(now);
				entity.setUpdateId(userId);
				updateEntityList.add(entity);
				listdataDao.updateById(entity);
			}
		}
		//插入数据
		if(insertEntityList.size() > 0)
		{
			listdataDao.insertInBatch(insertEntityList);
		}
		//删除数据
		if(data.getDeletedRowIds() != null && data.getDeletedRowIds().size() > 0)
		{
			InformationListdata query = new InformationListdata();
			query.setIds(data.getDeletedRowIds());
			listdataDao.delete(query);
		}
	}

	@Override
	protected BaseDao<InformationData, Long> getBaseDao()
	{
		// TODO Auto-generated method stub
		return null;
	}

}
