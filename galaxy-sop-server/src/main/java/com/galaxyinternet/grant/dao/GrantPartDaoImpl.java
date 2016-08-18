package com.galaxyinternet.grant.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import com.galaxyinternet.dao.GrantPartDao;
import com.galaxyinternet.framework.core.constants.SqlId;
import com.galaxyinternet.framework.core.dao.impl.BaseDaoImpl;
import com.galaxyinternet.framework.core.exception.DaoException;
import com.galaxyinternet.framework.core.utils.BeanUtils;
import com.galaxyinternet.model.GrantPart;

@Repository("grantPartDao")
public class GrantPartDaoImpl extends BaseDaoImpl<GrantPart, Long> implements GrantPartDao{

	@Override
	public double sumBelongToActualMoney(Long partId) {
		Assert.notNull(partId);
		try {
			return sqlSessionTemplate.selectOne(getSqlName("sumBelongToActualMoney"), partId);
		} catch (Exception e) {
			throw new DaoException(String.format("计算实际拨款总金额出错！语句：%s", getSqlName("sumBelongToActualMoney")), e);
		}
	}

	@Override
	public List<GrantPart> selectHasActualMoney(GrantPart part) {
		try {
			Map<String, Object> params = BeanUtils.toMap(part);
			return sqlSessionTemplate.selectList(getSqlName("selectHasActualMoney"), params);
		} catch (Exception e) {
			throw new DaoException(String.format("查询对象列表出错！语句：%s", getSqlName("selectHasActualMoney")), e);
		}
	}

}
