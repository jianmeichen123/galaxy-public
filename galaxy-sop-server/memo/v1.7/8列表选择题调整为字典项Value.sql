/*团队成员 性别字段调整为字典项*/
update fx_db.information_listdata a inner join fx_db.information_dictionary t2 on  t2.name = a.field_3  and t2.parent_id = 1342
set a.field_3 = t2.id where a.title_id = 1303 and a.code = 'team-members';

/*团队成员 学历字段调整为字典项*/
update fx_db.information_listdata a inner join fx_db.information_dictionary t2 on  t2.name = a.field_5  and t2.parent_id = 1371
set a.field_5 = t2.id where a.title_id = 1303 and a.code = 'team-members';

/*团队成员 职位字段调整为字典项*/
update fx_db.information_listdata a inner join fx_db.information_dictionary t2 on  t2.name = a.field_2  and t2.parent_id = 1351
set a.field_2 = t2.id where a.title_id = 1303 and a.code = 'team-members';

UPDATE fx_db.information_listdata a INNER JOIN fx_db.information_dictionary t2 ON  t2.name 

 = a.field_4  AND t2.parent_id = 2159
SET a.field_4 = t2.id WHERE a.title_id = 1303 AND a.code = 'study-experience';



/*综合竞争比较 措施的有效性是否验证字段调整为字典项*/
UPDATE fx_db.information_listdata a INNER JOIN fx_db1.information_dictionary t2 ON  t2.name 
 = a.field_5  AND t2.parent_id = 1941
SET a.field_5 = t2.id 
 WHERE a.title_id = 1548 ;


/*股权结构 股东类型字段调整为字典项*/
update fx_db.information_listdata a inner join fx_db.information_dictionary t2 on  t2.name = a.field_3  and t2.parent_id = 2091
set a.field_3 = t2.id where a.title_id = 1906 ;

/*投资人情况 投资人类型字段调整为字典项*/
update fx_db.information_listdata a inner join fx_db.information_dictionary t2 on  t2.name = a.field_1  and t2.parent_id = 2101
set a.field_1 = t2.id where a.title_id = 1908 ;
