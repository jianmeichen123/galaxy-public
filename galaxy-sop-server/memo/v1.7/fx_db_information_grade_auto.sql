-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: 10.9.11.232    Database: fx_db
-- ------------------------------------------------------
-- Server version	5.6.23-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `information_grade_auto`
--

DROP TABLE IF EXISTS `information_grade_auto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `information_grade_auto` (
  `ID` bigint(20) NOT NULL COMMENT '自动评分ID 表主键',
  `parent_id` bigint(20) DEFAULT NULL COMMENT '父节点ID',
  `title_relate_id` bigint(20) DEFAULT NULL COMMENT '''标题ID 关联的标题表information_title_relate的ID''',
  `dict_id` bigint(20) DEFAULT NULL,
  `process_mode` int(1) DEFAULT NULL COMMENT '处理方式，1：权重（例如 30，要求计算的时候用原有得分乘以这个百分比）、2：选项对应分数（录入 5，要求如果选择这个选项那么对应分数为此值）、3：n*分数（多选项，每多选一个增加一定分数，计算方法是用选项个数乘以grade字段的值） 4、总分-n*分数（多选项，每多选择一个减少一定分数、计算方法是用这道题的最高分数 减去 选项个数乘以grade字段的值的乘积） 5: 根据选择的数据四舍五入计算分数；',
  `grade` bigint(20) DEFAULT NULL,
  `grade_remark` varchar(200) DEFAULT NULL COMMENT '备注',
  `index_no` double(7,3) DEFAULT NULL COMMENT '显示顺序',
  `is_valid` int(1) DEFAULT NULL,
  `created_time` bigint(20) DEFAULT NULL,
  `create_id` bigint(20) DEFAULT NULL,
  `updated_time` bigint(20) DEFAULT NULL,
  `updated_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='测评报告 自动打分表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `information_grade_auto`
--

LOCK TABLES `information_grade_auto` WRITE;
/*!40000 ALTER TABLE `information_grade_auto` DISABLE KEYS */;
INSERT INTO `information_grade_auto` VALUES (1,0,1001,1122,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2,0,1001,1123,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(3,0,1001,1124,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(4,0,1001,1125,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(5,0,1001,1126,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(6,0,1001,1127,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(7,0,1001,1128,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(8,0,1031,1122,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(9,0,1031,1123,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(10,0,1031,1124,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(11,0,1031,1125,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(12,0,1031,1126,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(13,0,1031,1127,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(14,0,1031,1128,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(15,0,1071,1122,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(16,0,1071,1123,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(17,0,1071,1124,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(18,0,1071,1125,1,25,NULL,NULL,0,NULL,NULL,NULL,NULL),(19,0,1071,1126,1,45,NULL,NULL,0,NULL,NULL,NULL,NULL),(20,0,1071,1127,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(21,0,1071,1128,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(22,0,1091,1122,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(23,0,1091,1123,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(24,0,1091,1124,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(25,0,1091,1125,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(26,0,1091,1126,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(27,0,1091,1127,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(28,0,1091,1128,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(29,0,1110,1122,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(30,0,1110,1123,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(31,0,1110,1124,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(32,0,1110,1125,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(33,0,1110,1126,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(34,0,1110,1127,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(35,0,1110,1128,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(36,0,1116,1122,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(37,0,1116,1123,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(38,0,1116,1124,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(39,0,1116,1125,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(40,0,1116,1126,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(41,0,1116,1127,1,25,NULL,NULL,0,NULL,NULL,NULL,NULL),(42,0,1116,1128,1,25,NULL,NULL,0,NULL,NULL,NULL,NULL),(43,0,1001,1129,NULL,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(44,0,1001,1130,NULL,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(45,0,1001,1139,NULL,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(46,0,1001,1140,NULL,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(47,0,1031,1129,NULL,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(48,0,1031,1130,NULL,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(49,0,1031,1139,NULL,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(50,0,1031,1140,NULL,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(51,0,1071,1129,NULL,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(52,0,1071,1130,NULL,45,NULL,NULL,0,NULL,NULL,NULL,NULL),(53,0,1071,1139,NULL,45,NULL,NULL,0,NULL,NULL,NULL,NULL),(54,0,1071,1140,NULL,45,NULL,NULL,0,NULL,NULL,NULL,NULL),(55,0,1091,1129,NULL,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(56,0,1091,1130,NULL,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(57,0,1091,1139,NULL,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(58,0,1091,1140,NULL,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(59,0,1110,1129,NULL,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(60,0,1110,1130,NULL,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(61,0,1110,1139,NULL,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(62,0,1110,1140,NULL,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(63,0,1116,1129,NULL,25,NULL,NULL,0,NULL,NULL,NULL,NULL),(64,0,1116,1130,NULL,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(65,0,1116,1139,NULL,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(66,0,1116,1140,NULL,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(101,1,1002,0,1,20,'模式评测',NULL,0,NULL,NULL,NULL,NULL),(102,1,1010,0,1,20,'创新性评测',NULL,0,NULL,NULL,NULL,NULL),(103,1,1013,0,1,10,'市场地位领先性评测',NULL,0,NULL,NULL,NULL,NULL),(104,1,1016,0,1,10,'机会评测',NULL,0,NULL,NULL,NULL,NULL),(105,1,1019,0,1,10,'产品服务评测',NULL,0,NULL,NULL,NULL,NULL),(106,1,1022,0,1,10,'收入模式评测',NULL,0,NULL,NULL,NULL,NULL),(107,1,1023,0,1,10,'销售方式评测',NULL,0,NULL,NULL,NULL,NULL),(108,1,1024,0,1,10,'技术领先性评测',NULL,0,NULL,NULL,NULL,NULL),(109,8,1032,0,1,25,'团队核心能力评测',NULL,0,NULL,NULL,NULL,NULL),(110,8,1041,NULL,1,25,'CEO评测',0.000,0,NULL,NULL,NULL,NULL),(111,8,1052,NULL,1,25,'团队综合评测',NULL,0,NULL,NULL,NULL,NULL),(112,8,1055,NULL,1,25,'核心团队能力满足度评测',NULL,0,NULL,NULL,NULL,NULL),(113,15,1072,NULL,1,13,'关键运营数据评测',NULL,0,NULL,NULL,NULL,NULL),(114,15,1073,NULL,1,12,'通过运营数据的重要发现（剔除非主营业务）',NULL,0,NULL,NULL,NULL,NULL),(115,15,1074,NULL,1,13,'通过运营数据判断该项目的投资阶段',NULL,0,NULL,NULL,NULL,NULL),(116,15,1075,NULL,1,12,'客户及收入评测（剔除非主营业务）',NULL,0,NULL,NULL,NULL,NULL),(117,15,1076,NULL,1,13,'增资评测',NULL,0,NULL,NULL,NULL,NULL),(118,15,1080,NULL,1,12,'成本及投入效率评测',NULL,0,NULL,NULL,NULL,NULL),(119,15,1081,NULL,1,13,'获客成本',NULL,0,NULL,NULL,NULL,NULL),(120,15,1082,NULL,1,12,'运营策略评测',NULL,0,NULL,NULL,NULL,NULL),(121,22,1092,NULL,1,25,'竞争格局评测',NULL,0,NULL,NULL,NULL,NULL),(122,22,1094,NULL,1,25,'竞争优势评测',NULL,0,NULL,NULL,NULL,NULL),(123,22,1097,NULL,1,25,'竞争壁垒评测',NULL,0,NULL,NULL,NULL,NULL),(124,22,1103,NULL,1,25,'竞争威胁评测',NULL,0,NULL,NULL,NULL,NULL),(125,29,1111,NULL,1,100,'本轮融资可以满足公司经营的时长',NULL,0,NULL,NULL,NULL,NULL),(126,29,1112,NULL,1,100,'融资假设的关键运营数据指标达成可行性',NULL,0,NULL,NULL,NULL,NULL),(127,29,1113,NULL,1,100,'融资估值合理性',NULL,0,NULL,NULL,NULL,NULL),(128,29,1114,NULL,1,100,'到隔一轮的融资估值及时间表',NULL,0,NULL,NULL,NULL,NULL),(129,29,1115,NULL,1,100,'融资障碍度',NULL,0,NULL,NULL,NULL,NULL),(130,36,1117,NULL,1,100,'法务方面是否存在上市硬伤',NULL,0,NULL,NULL,NULL,NULL),(131,36,1118,NULL,1,100,'财务方面是否存在上市硬伤',NULL,0,NULL,NULL,NULL,NULL),(132,36,1119,NULL,1,100,'上市是否存在政策限制',NULL,0,NULL,NULL,NULL,NULL),(1001,101,1004,0,2,20,'商业模式-符合公司战略方向',1.000,0,NULL,NULL,NULL,NULL),(1002,101,1004,0,2,10,'商业模式-符合公司重点项目',2.000,0,NULL,NULL,NULL,NULL),(1003,101,1004,0,2,0,'商业模式-不符合公司要求',3.000,0,NULL,NULL,NULL,NULL),(1004,101,1007,1192,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(1005,101,1007,1193,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(1006,101,1007,1194,2,20,NULL,3.000,0,NULL,NULL,NULL,NULL),(1007,101,1007,1195,2,30,NULL,4.000,0,NULL,NULL,NULL,NULL),(1008,101,1009,2125,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(1009,101,1009,2125,2,0,NULL,2.000,0,NULL,NULL,NULL,NULL),(1010,103,1014,1202,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(1011,103,1014,1203,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(1012,103,1014,1204,2,10,NULL,3.000,0,NULL,NULL,NULL,NULL),(1013,103,1014,1205,2,0,NULL,4.000,0,NULL,NULL,NULL,NULL),(1014,103,1015,1212,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(1015,103,1015,1213,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(1016,103,1015,1214,2,10,NULL,3.000,0,NULL,NULL,NULL,NULL),(1017,103,1015,1215,2,0,NULL,4.000,0,NULL,NULL,NULL,NULL),(1018,104,1017,1232,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(1019,104,1017,1233,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(1020,104,1018,2128,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(1021,104,1018,2129,2,0,NULL,2.000,0,NULL,NULL,NULL,NULL),(1022,106,1028,NULL,2,100,'收入模式合理',1.000,0,NULL,NULL,NULL,NULL),(1023,106,1028,NULL,2,70,'收入模式较为合理',2.000,0,NULL,NULL,NULL,NULL),(1024,106,1028,NULL,2,50,'收入模式一般',3.000,0,NULL,NULL,NULL,NULL),(1025,106,1028,NULL,2,20,'收入模式不合理',4.000,0,NULL,NULL,NULL,NULL),(1026,107,1029,NULL,2,100,'销售模式合理',1.000,0,NULL,NULL,NULL,NULL),(1027,107,1029,NULL,2,70,'销售模式较为合理',2.000,0,NULL,NULL,NULL,NULL),(1028,107,1029,NULL,2,50,'销售模式一般',3.000,0,NULL,NULL,NULL,NULL),(1029,107,1029,NULL,2,20,'销售模式不合理',4.000,0,NULL,NULL,NULL,NULL),(1030,108,1025,1302,2,30,NULL,1.000,0,NULL,NULL,NULL,NULL),(1031,108,1025,1303,2,15,NULL,2.000,0,NULL,NULL,NULL,NULL),(1032,108,1025,1304,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(1033,108,1026,1312,2,30,NULL,1.000,0,NULL,NULL,NULL,NULL),(1034,108,1026,1313,2,15,NULL,2.000,0,NULL,NULL,NULL,NULL),(1035,108,1026,1314,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(1036,108,1027,1322,2,40,NULL,1.000,0,NULL,NULL,NULL,NULL),(1037,108,1027,1322,2,0,NULL,2.000,0,NULL,NULL,NULL,NULL),(1038,109,1033,0,2,20,'如果大于等于5个核心能力',1.000,0,NULL,NULL,NULL,NULL),(1039,109,1033,0,2,10,'3-5个核心能力',2.000,0,NULL,NULL,NULL,NULL),(1040,109,1033,0,2,5,'1-3个核心能力',3.000,0,NULL,NULL,NULL,NULL),(1041,109,1033,0,2,0,'选择其他',4.000,0,NULL,NULL,NULL,NULL),(1042,109,1036,1442,2,20,'1 三年以上',1.000,0,NULL,NULL,NULL,NULL),(1043,109,1036,1443,2,10,'2 三年以下',2.000,0,NULL,NULL,NULL,NULL),(1044,109,1036,1444,2,0,'3 未曾磨合',3.000,0,NULL,NULL,NULL,NULL),(1045,109,1037,1452,2,10,'1 全职',1.000,0,NULL,NULL,NULL,NULL),(1046,109,1037,1453,2,0,'2 有兼职情况',2.000,0,NULL,NULL,NULL,NULL),(1047,110,1044,1562,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(1048,110,1044,1563,2,5,NULL,2.000,0,NULL,NULL,NULL,NULL),(1049,110,1044,1564,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(1050,110,1045,1572,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(1051,110,1045,1573,2,6,NULL,2.000,0,NULL,NULL,NULL,NULL),(1052,110,1045,1574,2,3,NULL,3.000,0,NULL,NULL,NULL,NULL),(1053,110,1045,1575,2,0,NULL,4.000,0,NULL,NULL,NULL,NULL),(1054,110,1047,1602,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(1055,110,1047,1603,2,5,NULL,2.000,0,NULL,NULL,NULL,NULL),(1056,110,1047,1604,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(1057,110,1048,1642,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(1058,110,1048,1643,2,5,NULL,2.000,0,NULL,NULL,NULL,NULL),(1059,110,1048,1644,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(1060,110,1050,1652,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(1061,110,1050,1653,2,5,NULL,2.000,0,NULL,NULL,NULL,NULL),(1062,110,1050,1654,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(1063,111,1054,1722,2,40,NULL,1.000,0,NULL,NULL,NULL,NULL),(1064,111,1054,1723,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(1065,111,1054,1724,2,10,NULL,3.000,0,NULL,NULL,NULL,NULL),(1066,112,1056,NULL,3,2,'该项目需要核心团队具有的能力',NULL,0,NULL,NULL,NULL,NULL),(1067,112,1057,NULL,3,2,'核心创始团队已经具有的能力',NULL,0,NULL,NULL,NULL,NULL),(1068,112,1058,NULL,4,2,'核心创始团队尚缺少的能力',NULL,0,NULL,NULL,NULL,NULL),(1069,112,1059,NULL,2,10,'符合公司要求或期望',1.000,0,NULL,NULL,NULL,NULL),(1070,112,1059,NULL,2,5,'较为符合公司要求或期望',2.000,0,NULL,NULL,NULL,NULL),(1071,112,1059,NULL,2,0,'其余',3.000,0,NULL,NULL,NULL,NULL),(1072,112,1060,2147,2,20,NULL,1.000,0,NULL,NULL,NULL,NULL),(1073,112,1060,2148,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(1074,112,1060,2149,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(1075,115,1089,1802,2,100,NULL,1.000,0,NULL,NULL,NULL,NULL),(1076,115,1089,1803,2,90,NULL,2.000,0,NULL,NULL,NULL,NULL),(1077,115,1089,1804,2,70,NULL,3.000,0,NULL,NULL,NULL,NULL),(1078,115,1089,1805,2,60,NULL,4.000,0,NULL,NULL,NULL,NULL),(1079,115,1089,1806,2,50,NULL,5.000,0,NULL,NULL,NULL,NULL),(1080,115,1089,1807,2,40,NULL,6.000,0,NULL,NULL,NULL,NULL),(1081,115,1089,1808,2,20,NULL,7.000,0,NULL,NULL,NULL,NULL),(1082,116,1090,NULL,2,100,'客户及收入符合期望',1.000,0,NULL,NULL,NULL,NULL),(1083,116,1090,NULL,2,80,'较符合',2.000,0,NULL,NULL,NULL,NULL),(1084,116,1090,NULL,2,60,'一般情况',3.000,0,NULL,NULL,NULL,NULL),(1085,116,1090,NULL,2,20,'不理想',4.000,0,NULL,NULL,NULL,NULL),(1086,117,1077,NULL,2,50,'拐点在6个月内',1.000,0,NULL,NULL,NULL,NULL),(1087,117,1077,NULL,2,30,'6-12个月',2.000,0,NULL,NULL,NULL,NULL),(1088,117,1077,NULL,2,20,'12-18个月',3.000,0,NULL,NULL,NULL,NULL),(1089,117,1077,NULL,2,0,'18个月以上',4.000,0,NULL,NULL,NULL,NULL),(1090,117,1078,NULL,2,20,'驱动力符合公司要求',1.000,0,NULL,NULL,NULL,NULL),(1091,117,1078,NULL,2,10,'一般',2.000,0,NULL,NULL,NULL,NULL),(1092,117,1078,NULL,2,0,'不符合要求',3.000,0,NULL,NULL,NULL,NULL),(1093,117,1079,NULL,4,5,'每增加1个分值减少5分，得分=30-5n（n为个数）',NULL,0,NULL,NULL,NULL,NULL),(1094,118,1130,NULL,2,100,'成本及投入效率符合达到业界最佳',1.000,0,NULL,NULL,NULL,NULL),(1095,118,1130,NULL,2,80,'领先',2.000,0,NULL,NULL,NULL,NULL),(1096,118,1130,NULL,2,60,'一般',3.000,0,NULL,NULL,NULL,NULL),(1097,118,1130,NULL,2,0,'远落后与业界',4.000,0,NULL,NULL,NULL,NULL),(1098,119,1131,NULL,2,100,'成本及投入效率符合达到业界最佳',1.000,0,NULL,NULL,NULL,NULL),(1099,119,1131,NULL,2,80,'领先',2.000,0,NULL,NULL,NULL,NULL),(1100,119,1131,NULL,2,60,'一般',3.000,0,NULL,NULL,NULL,NULL),(1101,119,1131,NULL,2,0,'远落后与业界',4.000,0,NULL,NULL,NULL,NULL),(1102,120,1083,1962,2,25,NULL,1.000,0,NULL,NULL,NULL,NULL),(1103,120,1083,1963,2,15,NULL,2.000,0,NULL,NULL,NULL,NULL),(1104,120,1083,1964,2,5,NULL,3.000,0,NULL,NULL,NULL,NULL),(1105,120,1083,1965,2,0,NULL,4.000,0,NULL,NULL,NULL,NULL),(1106,120,1084,1832,2,25,NULL,1.000,0,NULL,NULL,NULL,NULL),(1107,120,1084,1833,2,0,NULL,2.000,0,NULL,NULL,NULL,NULL),(1108,121,1093,1842,2,20,NULL,1.000,0,NULL,NULL,NULL,NULL),(1109,121,1093,1843,2,40,NULL,2.000,0,NULL,NULL,NULL,NULL),(1110,121,1093,1844,2,60,NULL,3.000,0,NULL,NULL,NULL,NULL),(1111,121,1093,1845,2,80,NULL,4.000,0,NULL,NULL,NULL,NULL),(1112,121,1093,1846,2,100,NULL,5.000,0,NULL,NULL,NULL,NULL),(1113,122,1095,1202,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(1114,122,1095,1203,2,40,NULL,2.000,0,NULL,NULL,NULL,NULL),(1115,122,1095,1204,2,30,NULL,3.000,0,NULL,NULL,NULL,NULL),(1116,122,1095,1205,2,10,NULL,4.000,0,NULL,NULL,NULL,NULL),(1117,122,1096,NULL,2,50,'若核心竞争力为业界绝对领先',1.000,0,NULL,NULL,NULL,NULL),(1118,122,1096,NULL,2,30,'核心亮点在业界较为领先',2.000,0,NULL,NULL,NULL,NULL),(1119,122,1096,NULL,2,10,'核心亮点在业界为一般',3.000,0,NULL,NULL,NULL,NULL),(1120,123,1098,1852,2,20,NULL,1.000,0,NULL,NULL,NULL,NULL),(1121,123,1098,1853,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(1122,123,1098,1854,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(1123,123,1100,NULL,3,5,'每增加1选项分值增加5分，得分=5n',NULL,0,NULL,NULL,NULL,NULL),(1124,123,1101,NULL,2,20,'时间窗为1年内',1.000,0,NULL,NULL,NULL,NULL),(1125,123,1101,NULL,2,10,'2-3年内',2.000,0,NULL,NULL,NULL,NULL),(1126,123,1101,NULL,2,0,'年以上',3.000,0,NULL,NULL,NULL,NULL),(1127,123,1102,1872,2,25,NULL,1.000,0,NULL,NULL,NULL,NULL),(1128,123,1102,1873,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(1129,123,1102,1874,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(1130,124,1105,NULL,5,NULL,'胜算度四舍五入取值',NULL,0,NULL,NULL,NULL,NULL),(1131,124,1106,NULL,2,0,'对手为BAT',1.000,0,NULL,NULL,NULL,NULL),(1132,124,1106,NULL,2,10,'界知名公司',2.000,0,NULL,NULL,NULL,NULL),(1133,124,1106,NULL,2,20,'一般公司',3.000,0,NULL,NULL,NULL,NULL),(1134,124,1106,NULL,2,30,'无对手',4.000,0,NULL,NULL,NULL,NULL),(1135,124,1107,NULL,2,0,'对手为BAT',1.000,0,NULL,NULL,NULL,NULL),(1136,124,1107,NULL,2,10,'界知名公司',2.000,0,NULL,NULL,NULL,NULL),(1137,124,1107,NULL,2,20,'一般公司',3.000,0,NULL,NULL,NULL,NULL),(1138,124,1107,NULL,2,30,'无对手',4.000,0,NULL,NULL,NULL,NULL),(1139,124,1108,NULL,2,10,'异化策略符合公司要求',1.000,0,NULL,NULL,NULL,NULL),(1140,124,1108,NULL,2,5,'较为符合',2.000,0,NULL,NULL,NULL,NULL),(1141,124,1108,NULL,2,0,'不符合',3.000,0,NULL,NULL,NULL,NULL),(1142,124,1109,1932,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(1143,124,1109,1933,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(1144,124,1109,1934,2,20,NULL,3.000,0,NULL,NULL,NULL,NULL),(1145,125,1123,NULL,2,20,'融资时间合理',1.000,0,NULL,NULL,NULL,NULL),(1146,125,1123,NULL,2,0,'不合理',2.000,0,NULL,NULL,NULL,NULL),(1147,126,1124,NULL,2,20,'可行性高',1.000,0,NULL,NULL,NULL,NULL),(1148,126,1124,NULL,2,10,'一般',2.000,0,NULL,NULL,NULL,NULL),(1149,126,1124,NULL,2,0,'不可行',3.000,0,NULL,NULL,NULL,NULL),(1150,127,1125,NULL,2,20,'合理',1.000,0,NULL,NULL,NULL,NULL),(1151,127,1125,NULL,2,0,'不合理',2.000,0,NULL,NULL,NULL,NULL),(1152,128,1126,NULL,2,20,'符合要求',1.000,0,NULL,NULL,NULL,NULL),(1153,128,1126,NULL,2,0,'不符合公司要求',2.000,0,NULL,NULL,NULL,NULL),(1154,130,1120,2131,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(1155,130,1120,2132,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(1156,131,1121,2134,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(1157,131,1121,2135,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(1158,132,1122,2137,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(1159,132,1122,2138,2,40,NULL,2.000,0,NULL,NULL,NULL,NULL),(2001,0,9001,1122,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2002,0,9001,1123,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2003,0,9001,1124,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2004,0,9001,1125,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2005,0,9001,1126,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2006,0,9001,1127,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2007,0,9001,1128,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2008,0,9031,1122,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2009,0,9031,1123,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2010,0,9031,1124,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2011,0,9031,1125,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2012,0,9031,1126,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2013,0,9031,1127,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2014,0,9031,1128,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2015,0,9071,1122,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2016,0,9071,1123,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2017,0,9071,1124,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2018,0,9071,1125,1,25,NULL,NULL,0,NULL,NULL,NULL,NULL),(2019,0,9071,1126,1,45,NULL,NULL,0,NULL,NULL,NULL,NULL),(2020,0,9071,1127,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2021,0,9071,1128,1,30,NULL,NULL,0,NULL,NULL,NULL,NULL),(2022,0,9091,1122,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2023,0,9091,1123,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2024,0,9091,1124,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2025,0,9091,1125,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2026,0,9091,1126,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2027,0,9091,1127,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2028,0,9091,1128,1,15,NULL,NULL,0,NULL,NULL,NULL,NULL),(2029,0,9110,1122,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2030,0,9110,1123,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2031,0,9110,1124,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2032,0,9110,1125,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(2033,0,9110,1126,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(2034,0,9110,1127,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(2035,0,9110,1128,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(2036,0,9116,1122,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2037,0,9116,1123,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2038,0,9116,1124,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2039,0,9116,1125,1,5,NULL,NULL,0,NULL,NULL,NULL,NULL),(2040,0,9116,1126,1,10,NULL,NULL,0,NULL,NULL,NULL,NULL),(2041,0,9116,1127,1,25,NULL,NULL,0,NULL,NULL,NULL,NULL),(2042,0,9116,1128,1,25,NULL,NULL,0,NULL,NULL,NULL,NULL),(2101,2001,9002,0,1,20,'模式评测',NULL,0,NULL,NULL,NULL,NULL),(2102,2001,9010,0,1,20,'创新性评测',NULL,0,NULL,NULL,NULL,NULL),(2103,2001,9013,0,1,10,'市场地位领先性评测',NULL,0,NULL,NULL,NULL,NULL),(2104,2001,9016,0,1,10,'机会评测',NULL,0,NULL,NULL,NULL,NULL),(2105,2001,9019,0,1,10,'产品服务评测',NULL,0,NULL,NULL,NULL,NULL),(2106,2001,9022,0,1,10,'收入模式评测',NULL,0,NULL,NULL,NULL,NULL),(2107,2001,9023,0,1,10,'销售方式评测',NULL,0,NULL,NULL,NULL,NULL),(2108,2001,9024,0,1,10,'技术领先性评测',NULL,0,NULL,NULL,NULL,NULL),(2109,2008,9032,0,1,25,'团队核心能力评测',NULL,0,NULL,NULL,NULL,NULL),(2110,2008,9041,NULL,1,25,'CEO评测',0.000,0,NULL,NULL,NULL,NULL),(2111,2008,9052,NULL,1,25,'团队综合评测',NULL,0,NULL,NULL,NULL,NULL),(2112,2008,9055,NULL,1,25,'核心团队能力满足度评测',NULL,0,NULL,NULL,NULL,NULL),(2113,2015,9072,NULL,1,13,'关键运营数据评测',NULL,0,NULL,NULL,NULL,NULL),(2114,2015,9073,NULL,1,12,'通过运营数据的重要发现（剔除非主营业务）',NULL,0,NULL,NULL,NULL,NULL),(2115,2015,9074,NULL,1,13,'通过运营数据判断该项目的投资阶段',NULL,0,NULL,NULL,NULL,NULL),(2116,2015,9075,NULL,1,12,'客户及收入评测（剔除非主营业务）',NULL,0,NULL,NULL,NULL,NULL),(2117,2015,9076,NULL,1,13,'增资评测',NULL,0,NULL,NULL,NULL,NULL),(2118,2015,9080,NULL,1,12,'成本及投入效率评测',NULL,0,NULL,NULL,NULL,NULL),(2119,2015,9081,NULL,1,13,'获客成本',NULL,0,NULL,NULL,NULL,NULL),(2120,2015,9082,NULL,1,12,'运营策略评测',NULL,0,NULL,NULL,NULL,NULL),(2121,2022,9092,NULL,1,25,'竞争格局评测',NULL,0,NULL,NULL,NULL,NULL),(2122,2022,9094,NULL,1,25,'竞争优势评测',NULL,0,NULL,NULL,NULL,NULL),(2123,2022,9097,NULL,1,25,'竞争壁垒评测',NULL,0,NULL,NULL,NULL,NULL),(2124,2022,9103,NULL,1,25,'竞争威胁评测',NULL,0,NULL,NULL,NULL,NULL),(2125,2029,9111,NULL,1,100,'本轮融资可以满足公司经营的时长',NULL,0,NULL,NULL,NULL,NULL),(2126,2029,9112,NULL,1,100,'融资假设的关键运营数据指标达成可行性',NULL,0,NULL,NULL,NULL,NULL),(2127,2029,9113,NULL,1,100,'融资估值合理性',NULL,0,NULL,NULL,NULL,NULL),(2128,2029,9114,NULL,1,100,'到隔一轮的融资估值及时间表',NULL,0,NULL,NULL,NULL,NULL),(2129,2029,9115,NULL,1,100,'融资障碍度',NULL,0,NULL,NULL,NULL,NULL),(2130,2036,9117,NULL,1,100,'法务方面是否存在上市硬伤',NULL,0,NULL,NULL,NULL,NULL),(2131,2036,9118,NULL,1,100,'财务方面是否存在上市硬伤',NULL,0,NULL,NULL,NULL,NULL),(2132,2036,9119,NULL,1,100,'上市是否存在政策限制',NULL,0,NULL,NULL,NULL,NULL),(3001,2101,9004,0,2,20,'商业模式-符合公司战略方向',1.000,0,NULL,NULL,NULL,NULL),(3002,2101,9004,0,2,10,'商业模式-符合公司重点项目',2.000,0,NULL,NULL,NULL,NULL),(3003,2101,9004,0,2,0,'商业模式-不符合公司要求',3.000,0,NULL,NULL,NULL,NULL),(3004,2101,9007,1192,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(3005,2101,9007,1193,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(3006,2101,9007,1194,2,20,NULL,3.000,0,NULL,NULL,NULL,NULL),(3007,2101,9007,1195,2,30,NULL,4.000,0,NULL,NULL,NULL,NULL),(3008,2101,9009,2125,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(3009,2101,9009,2125,2,0,NULL,2.000,0,NULL,NULL,NULL,NULL),(3010,2103,9014,1202,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(3011,2103,9014,1203,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(3012,2103,9014,1204,2,10,NULL,3.000,0,NULL,NULL,NULL,NULL),(3013,2103,9014,1205,2,0,NULL,4.000,0,NULL,NULL,NULL,NULL),(3014,2103,9015,1212,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(3015,2103,9015,1213,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(3016,2103,9015,1214,2,10,NULL,3.000,0,NULL,NULL,NULL,NULL),(3017,2103,9015,1215,2,0,NULL,4.000,0,NULL,NULL,NULL,NULL),(3018,2104,9017,1232,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(3019,2104,9017,1233,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(3020,2104,9018,2128,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(3021,2104,9018,2129,2,0,NULL,2.000,0,NULL,NULL,NULL,NULL),(3022,2106,9028,NULL,2,100,'收入模式合理',1.000,0,NULL,NULL,NULL,NULL),(3023,2106,9028,NULL,2,70,'收入模式较为合理',2.000,0,NULL,NULL,NULL,NULL),(3024,2106,9028,NULL,2,50,'收入模式一般',3.000,0,NULL,NULL,NULL,NULL),(3025,2106,9028,NULL,2,20,'收入模式不合理',4.000,0,NULL,NULL,NULL,NULL),(3026,2107,9029,NULL,2,100,'销售模式合理',1.000,0,NULL,NULL,NULL,NULL),(3027,2107,9029,NULL,2,70,'销售模式较为合理',2.000,0,NULL,NULL,NULL,NULL),(3028,2107,9029,NULL,2,50,'销售模式一般',3.000,0,NULL,NULL,NULL,NULL),(3029,2107,9029,NULL,2,20,'销售模式不合理',4.000,0,NULL,NULL,NULL,NULL),(3030,2108,9025,1302,2,30,NULL,1.000,0,NULL,NULL,NULL,NULL),(3031,2108,9025,1303,2,15,NULL,2.000,0,NULL,NULL,NULL,NULL),(3032,2108,9025,1304,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(3033,2108,9026,1312,2,30,NULL,1.000,0,NULL,NULL,NULL,NULL),(3034,2108,9026,1313,2,15,NULL,2.000,0,NULL,NULL,NULL,NULL),(3035,2108,9026,1314,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(3036,2108,9027,1322,2,40,NULL,1.000,0,NULL,NULL,NULL,NULL),(3037,2108,9027,1322,2,0,NULL,2.000,0,NULL,NULL,NULL,NULL),(3038,2109,9033,0,2,20,'如果大于等于5个核心能力',1.000,0,NULL,NULL,NULL,NULL),(3039,2109,9033,0,2,10,'3-5个核心能力',2.000,0,NULL,NULL,NULL,NULL),(3040,2109,9033,0,2,5,'1-3个核心能力',3.000,0,NULL,NULL,NULL,NULL),(3041,2109,9033,0,2,0,'选择其他',4.000,0,NULL,NULL,NULL,NULL),(3042,2109,9036,1442,2,20,'1 三年以上',1.000,0,NULL,NULL,NULL,NULL),(3043,2109,9036,1443,2,10,'2 三年以下',2.000,0,NULL,NULL,NULL,NULL),(3044,2109,9036,1444,2,0,'3 未曾磨合',3.000,0,NULL,NULL,NULL,NULL),(3045,2109,9037,1452,2,10,'1 全职',1.000,0,NULL,NULL,NULL,NULL),(3046,2109,9037,1453,2,0,'2 有兼职情况',2.000,0,NULL,NULL,NULL,NULL),(3047,2110,9044,1562,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(3048,2110,9044,1563,2,5,NULL,2.000,0,NULL,NULL,NULL,NULL),(3049,2110,9044,1564,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(3050,2110,9045,1572,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(3051,2110,9045,1573,2,6,NULL,2.000,0,NULL,NULL,NULL,NULL),(3052,2110,9045,1574,2,3,NULL,3.000,0,NULL,NULL,NULL,NULL),(3053,2110,9045,1575,2,0,NULL,4.000,0,NULL,NULL,NULL,NULL),(3054,2110,9047,1602,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(3055,2110,9047,1603,2,5,NULL,2.000,0,NULL,NULL,NULL,NULL),(3056,2110,9047,1604,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(3057,2110,9048,1642,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(3058,2110,9048,1643,2,5,NULL,2.000,0,NULL,NULL,NULL,NULL),(3059,2110,9048,1644,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(3060,2110,9050,1652,2,10,NULL,1.000,0,NULL,NULL,NULL,NULL),(3061,2110,9050,1653,2,5,NULL,2.000,0,NULL,NULL,NULL,NULL),(3062,2110,9050,1654,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(3063,2111,9054,1722,2,40,NULL,1.000,0,NULL,NULL,NULL,NULL),(3064,2111,9054,1723,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(3065,2111,9054,1724,2,10,NULL,3.000,0,NULL,NULL,NULL,NULL),(3066,2112,9056,NULL,3,2,'该项目需要核心团队具有的能力',NULL,0,NULL,NULL,NULL,NULL),(3067,2112,9057,NULL,3,2,'核心创始团队已经具有的能力',NULL,0,NULL,NULL,NULL,NULL),(3068,2112,9058,NULL,4,2,'核心创始团队尚缺少的能力',NULL,0,NULL,NULL,NULL,NULL),(3069,2112,9059,NULL,2,10,'符合公司要求或期望',1.000,0,NULL,NULL,NULL,NULL),(3070,2112,9059,NULL,2,5,'较为符合公司要求或期望',2.000,0,NULL,NULL,NULL,NULL),(3071,2112,9059,NULL,2,0,'其余',3.000,0,NULL,NULL,NULL,NULL),(3072,2112,9060,2147,2,20,NULL,1.000,0,NULL,NULL,NULL,NULL),(3073,2112,9060,2148,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(3074,2112,9060,2149,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(3075,2115,9089,1802,2,100,NULL,1.000,0,NULL,NULL,NULL,NULL),(3076,2115,9089,1803,2,90,NULL,2.000,0,NULL,NULL,NULL,NULL),(3077,2115,9089,1804,2,70,NULL,3.000,0,NULL,NULL,NULL,NULL),(3078,2115,9089,1805,2,60,NULL,4.000,0,NULL,NULL,NULL,NULL),(3079,2115,9089,1806,2,50,NULL,5.000,0,NULL,NULL,NULL,NULL),(3080,2115,9089,1807,2,40,NULL,6.000,0,NULL,NULL,NULL,NULL),(3081,2115,9089,1808,2,20,NULL,7.000,0,NULL,NULL,NULL,NULL),(3082,2116,9090,NULL,2,100,'客户及收入符合期望',1.000,0,NULL,NULL,NULL,NULL),(3083,2116,9090,NULL,2,80,'较符合',2.000,0,NULL,NULL,NULL,NULL),(3084,2116,9090,NULL,2,60,'一般情况',3.000,0,NULL,NULL,NULL,NULL),(3085,2116,9090,NULL,2,20,'不理想',4.000,0,NULL,NULL,NULL,NULL),(3086,2117,9077,NULL,2,50,'拐点在6个月内',1.000,0,NULL,NULL,NULL,NULL),(3087,2117,9077,NULL,2,30,'6-12个月',2.000,0,NULL,NULL,NULL,NULL),(3088,2117,9077,NULL,2,20,'12-18个月',3.000,0,NULL,NULL,NULL,NULL),(3089,2117,9077,NULL,2,0,'18个月以上',4.000,0,NULL,NULL,NULL,NULL),(3090,2117,9078,NULL,2,20,'驱动力符合公司要求',1.000,0,NULL,NULL,NULL,NULL),(3091,2117,9078,NULL,2,10,'一般',2.000,0,NULL,NULL,NULL,NULL),(3092,2117,9078,NULL,2,0,'不符合要求',3.000,0,NULL,NULL,NULL,NULL),(3093,2117,9079,NULL,4,5,'每增加1个分值减少5分，得分=30-5n（n为个数）',NULL,0,NULL,NULL,NULL,NULL),(3094,2118,9130,NULL,2,100,'成本及投入效率符合达到业界最佳',1.000,0,NULL,NULL,NULL,NULL),(3095,2118,9130,NULL,2,80,'领先',2.000,0,NULL,NULL,NULL,NULL),(3096,2118,9130,NULL,2,60,'一般',3.000,0,NULL,NULL,NULL,NULL),(3097,2118,9130,NULL,2,0,'远落后与业界',4.000,0,NULL,NULL,NULL,NULL),(3098,2119,9131,NULL,2,100,'成本及投入效率符合达到业界最佳',1.000,0,NULL,NULL,NULL,NULL),(3099,2119,9131,NULL,2,80,'领先',2.000,0,NULL,NULL,NULL,NULL),(3100,2119,9131,NULL,2,60,'一般',3.000,0,NULL,NULL,NULL,NULL),(3101,2119,9131,NULL,2,0,'远落后与业界',4.000,0,NULL,NULL,NULL,NULL),(3102,2120,9083,1962,2,25,NULL,1.000,0,NULL,NULL,NULL,NULL),(3103,2120,9083,1963,2,15,NULL,2.000,0,NULL,NULL,NULL,NULL),(3104,2120,9083,1964,2,5,NULL,3.000,0,NULL,NULL,NULL,NULL),(3105,2120,9083,1965,2,0,NULL,4.000,0,NULL,NULL,NULL,NULL),(3106,2120,9084,1832,2,25,NULL,1.000,0,NULL,NULL,NULL,NULL),(3107,2120,9084,1833,2,0,NULL,2.000,0,NULL,NULL,NULL,NULL),(3108,2121,9093,1842,2,20,NULL,1.000,0,NULL,NULL,NULL,NULL),(3109,2121,9093,1843,2,40,NULL,2.000,0,NULL,NULL,NULL,NULL),(3110,2121,9093,1844,2,60,NULL,3.000,0,NULL,NULL,NULL,NULL),(3111,2121,9093,1845,2,80,NULL,4.000,0,NULL,NULL,NULL,NULL),(3112,2121,9093,1846,2,100,NULL,5.000,0,NULL,NULL,NULL,NULL),(3113,2122,9095,1202,2,50,NULL,1.000,0,NULL,NULL,NULL,NULL),(3114,2122,9095,1203,2,40,NULL,2.000,0,NULL,NULL,NULL,NULL),(3115,2122,9095,1204,2,30,NULL,3.000,0,NULL,NULL,NULL,NULL),(3116,2122,9095,1205,2,10,NULL,4.000,0,NULL,NULL,NULL,NULL),(3117,2122,9096,NULL,2,50,'若核心竞争力为业界绝对领先',1.000,0,NULL,NULL,NULL,NULL),(3118,2122,9096,NULL,2,30,'核心亮点在业界较为领先',2.000,0,NULL,NULL,NULL,NULL),(3119,2122,9096,NULL,2,10,'核心亮点在业界为一般',3.000,0,NULL,NULL,NULL,NULL),(3120,2123,9098,1852,2,20,NULL,1.000,0,NULL,NULL,NULL,NULL),(3121,2123,9098,1853,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(3122,2123,9098,1854,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(3123,2123,9100,NULL,3,5,'每增加1选项分值增加5分，得分=5n',NULL,0,NULL,NULL,NULL,NULL),(3124,2123,9101,NULL,2,20,'时间窗为1年内',1.000,0,NULL,NULL,NULL,NULL),(3125,2123,9101,NULL,2,10,'2-3年内',2.000,0,NULL,NULL,NULL,NULL),(3126,2123,9101,NULL,2,0,'年以上',3.000,0,NULL,NULL,NULL,NULL),(3127,2123,9102,1872,2,25,NULL,1.000,0,NULL,NULL,NULL,NULL),(3128,2123,9102,1873,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(3129,2123,9102,1874,2,0,NULL,3.000,0,NULL,NULL,NULL,NULL),(3130,2124,9105,NULL,5,NULL,'胜算度四舍五入取值',NULL,0,NULL,NULL,NULL,NULL),(3131,2124,9106,NULL,2,0,'对手为BAT',1.000,0,NULL,NULL,NULL,NULL),(3132,2124,9106,NULL,2,10,'界知名公司',2.000,0,NULL,NULL,NULL,NULL),(3133,2124,9106,NULL,2,20,'一般公司',3.000,0,NULL,NULL,NULL,NULL),(3134,2124,9106,NULL,2,30,'无对手',4.000,0,NULL,NULL,NULL,NULL),(3135,2124,9107,NULL,2,0,'对手为BAT',1.000,0,NULL,NULL,NULL,NULL),(3136,2124,9107,NULL,2,10,'界知名公司',2.000,0,NULL,NULL,NULL,NULL),(3137,2124,9107,NULL,2,20,'一般公司',3.000,0,NULL,NULL,NULL,NULL),(3138,2124,9107,NULL,2,30,'无对手',4.000,0,NULL,NULL,NULL,NULL),(3139,2124,9108,NULL,2,10,'异化策略符合公司要求',1.000,0,NULL,NULL,NULL,NULL),(3140,2124,9108,NULL,2,5,'较为符合',2.000,0,NULL,NULL,NULL,NULL),(3141,2124,9108,NULL,2,0,'不符合',3.000,0,NULL,NULL,NULL,NULL),(3142,2124,9109,1932,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(3143,2124,9109,1933,2,10,NULL,2.000,0,NULL,NULL,NULL,NULL),(3144,2124,9109,1934,2,20,NULL,3.000,0,NULL,NULL,NULL,NULL),(3145,2125,9123,NULL,2,20,'融资时间合理',1.000,0,NULL,NULL,NULL,NULL),(3146,2125,9123,NULL,2,0,'不合理',2.000,0,NULL,NULL,NULL,NULL),(3147,2126,9124,NULL,2,20,'可行性高',1.000,0,NULL,NULL,NULL,NULL),(3148,2126,9124,NULL,2,10,'一般',2.000,0,NULL,NULL,NULL,NULL),(3149,2126,9124,NULL,2,0,'不可行',3.000,0,NULL,NULL,NULL,NULL),(3150,2127,9125,NULL,2,20,'合理',1.000,0,NULL,NULL,NULL,NULL),(3151,2127,9125,NULL,2,0,'不合理',2.000,0,NULL,NULL,NULL,NULL),(3152,2128,9126,NULL,2,20,'符合要求',1.000,0,NULL,NULL,NULL,NULL),(3153,2128,9126,NULL,2,0,'不符合公司要求',2.000,0,NULL,NULL,NULL,NULL),(3154,2130,9120,2131,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(3155,2130,9120,2132,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(3156,2131,9121,2134,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(3157,2131,9121,2135,2,30,NULL,2.000,0,NULL,NULL,NULL,NULL),(3158,2132,9122,2137,2,0,NULL,1.000,0,NULL,NULL,NULL,NULL),(3159,2132,9122,2138,2,40,NULL,2.000,0,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `information_grade_auto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-09  9:35:30
