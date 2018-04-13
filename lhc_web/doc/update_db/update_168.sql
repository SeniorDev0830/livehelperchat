ALTER TABLE `lh_departament` ADD `bot_configuration` text NOT NULL, COMMENT='';
CREATE TABLE `lh_departament_availability` ( `id` bigint(20) NOT NULL AUTO_INCREMENT, `dep_id` int(11) NOT NULL, `hour` int(11) NOT NULL, `hourminute` int(11) NOT NULL, `minute` int(11) NOT NULL, `time` int(11) NOT NULL, `ymdhi` bigint(20) NOT NULL, `ymd` int(11) NOT NULL, `status` int(11) NOT NULL, PRIMARY KEY (`id`), KEY `ctime` (`ymdhi`), KEY `dep_id` (`dep_id`),  KEY `hourminute` (`hourminute`), KEY `ctime` (`ctime`)) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
