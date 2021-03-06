package com.galaxyinternet.common.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
/**
 * 数据权限控制，name为资源标识
 * @author wangsong
 *
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface GalaxyResource 
{
	String name() default "";
	
	String[] table() default {"sop_project"};
}
