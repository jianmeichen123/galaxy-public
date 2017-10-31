package com.galaxyinternet.common.interceptor;

import java.util.List;

public class AuthContext {
	private static ThreadLocal<AuthContext> tl = new ThreadLocal<>();

	public static AuthContext get() {
		AuthContext ctx = tl.get();
		if (tl.get() == null) {
			ctx = new AuthContext();
			tl.set(ctx);
		}
		return ctx;
	}

	public static void remove() {
		tl.remove();
	}

	private String pageId;
	private List<Long> userIds;

	public String getPageId() {
		return pageId;
	}

	public void setPageId(String pageId) {
		this.pageId = pageId;
	}

	public List<Long> getUserIds() {
		return userIds;
	}

	public void setUserIds(List<Long> userIds) {
		this.userIds = userIds;
	}

}
