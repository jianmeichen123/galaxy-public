INSERT INTO `power`.`resource` (`Id`,`parent_id`,`resource_code`,`resource_name`,`resource_type`,`resource_url`,`resource_order`,`resource_desc`,`product_type`,`is_del`,`is_outtage`,`create_time`,`create_id`,`update_time`,`update_id`,`company_id`,`style`)
 VALUES('1190','0','project_search_overall','全局搜索', '3', NULL,'117000', '创投项目全局搜索功能','0','0','0', NULL, NULL, NULL,NULL,'1',NULL) ;

 
 INSERT INTO `power`.`resource` (`Id`,`parent_id`,`resource_code`,`resource_name`,`resource_type`,`resource_url`,`resource_order`,`resource_desc`,`product_type`,`is_del`,`is_outtage`,`create_time`,`create_id`,`update_time`,`update_id`,`company_id`,`style`)
 VALUES('1191','1190','project_search_sop','全局搜索-创投项目', '3', NULL,'117001', '创投项目全局搜索功能-创投项目','0','0','0', NULL, NULL, NULL,NULL,'1',NULL) ;

/*
-- Query: SELECT * FROM power.resource where id = 1015
-- Date: 2018-01-04 16:48
*/
INSERT INTO `power`.`resource` (`Id`,`parent_id`,`resource_code`,`resource_name`,`resource_type`,`resource_order`,`resource_desc`,`product_type`,`is_del`,`is_outtage`,`company_id`) VALUES (1015,1001,'project_delete','删除项目',2,1114,'可操作项目详情页的删除功能',0,0,0,1);

INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('1016', '1001', 'project_transfer', '移交项目', '2', '1115', '可操作项目详情页的移交功能', '0', '0', '0', '1');
INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('1017', '1001', 'project_batch_transfer', '批量移交项目', '2', '1116', '可操作项目列表的批量移交项目功能', '0', '0', '0', '1');
INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('1018', '1001', 'project_assign', '指派项目', '2', '1117', '可操作项目详情页的指派功能', '0', '0', '0', '1');
INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('1019', '1001', 'project_batch_assign', '批量指派项目', '2', '1118', '可操作项目列表的批量指派项目功能', '0', '0', '0', '1');





UPDATE `power`.`resource` SET `resource_name`='项目（移动端）' WHERE `Id`='5021';

INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('5022', '5021', 'app_project_add', '添加项目', '3', '11201', '创投项目添加功能权限', '1', '0', '0', '1');
INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('5023', '5021', 'app_project_update', '编辑项目', '3', '11202', '创投项目编辑功能权限', '1', '0', '0', '1');
INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('5024', '5021', 'app_project_delete', '删除项目', '3', '11203', '创投项目删除功能权限', '1', '0', '0', '1');
INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('5025', '5021', 'app_project_transfer', '移交项目', '3', '11204', '创投项目移交功能权限', '1', '0', '0', '1');
INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('5026', '5021', 'app_project_batch_transfer', '批量移交项目', '3', '11205', '创投项目批量移交功能权限', '1', '0', '0', '1');
INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('5027', '5021', 'app_project_assign', '指派项目', '3', '11206', '创投项目指派功能权限', '1', '0', '0', '1');
INSERT INTO `power`.`resource` (`Id`, `parent_id`, `resource_code`, `resource_name`, `resource_type`, `resource_order`, `resource_desc`, `product_type`, `is_del`, `is_outtage`, `company_id`) VALUES ('5028', '5021', 'app_project_batch_assign', '批量指派项目', '3', '11207', '创投项目批量指派功能权限', '1', '0', '0', '1');



UPDATE `power`.`resource` SET `is_del`='1' WHERE `Id`='1006';
UPDATE `power`.`resource` SET `is_del`='1' WHERE `Id`='1007';
UPDATE `power`.`resource` SET `is_del`='1' WHERE `Id`='1008';
UPDATE `power`.`resource` SET `is_del`='1' WHERE `Id`='1009';
UPDATE `power`.`resource` SET `is_del`='1' WHERE `Id`='1010';
UPDATE `power`.`resource` SET `is_del`='1' WHERE `Id`='1011';
UPDATE `power`.`resource` SET `is_del`='1' WHERE `Id`='1012';
UPDATE `power`.`resource` SET `is_del`='1' WHERE `Id`='1013';


INSERT INTO `power`.`data_scope`(`sp_name`,`is_del`,`is_outtage`,`create_time`,`create_id`,`update_time`,`update_id`,`company_id`)
VALUES ('所有人（含离职人员）',0,0,UNIX_TIMESTAMP(NOW())*1000,NULL,UNIX_TIMESTAMP(NOW())*1000,NULL,1);
 
