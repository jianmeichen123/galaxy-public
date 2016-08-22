package com.galaxyinternet.grant.dao;

import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import com.galaxyinternet.dao.GrantTotalDao;
import com.galaxyinternet.framework.core.dao.impl.BaseDaoImpl;
import com.galaxyinternet.framework.core.exception.DaoException;
import com.galaxyinternet.model.GrantTotal;


@Repository("grantTotalDao")
public class GrantTotalDaoImpl extends BaseDaoImpl<GrantTotal, Long> implements GrantTotalDao{

	@Override
	public Double sumPlanMoney(Long projectId) {
		Assert.notNull(projectId);
		try {
			return sqlSessionTemplate.selectOne(getSqlName("sumPlanMoney"), projectId);
		} catch (Exception e) {
			e.printStackTrace();
			throw new DaoException(String.format("计算实际拨款总金额出错！语句：%s", getSqlName("sumPlanMoney")), e);
		}
	}

}
