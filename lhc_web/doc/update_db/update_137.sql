CREATE TABLE `lh_abstract_proactive_chat_variables` ( `id` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `identifier` varchar(50) NOT NULL, `store_timeout` int(11) NOT NULL, PRIMARY KEY (`id`), KEY `identifier` (`identifier`)) DEFAULT CHARSET=utf8;
CREATE TABLE `lh_abstract_proactive_chat_event` ( `id` int(11) NOT NULL AUTO_INCREMENT, `vid_id` int(11) NOT NULL, `ev_id` int(11) NOT NULL, `ts` int(11) NOT NULL, `val` varchar(50) NOT NULL, PRIMARY KEY (`id`), KEY `vid_id` (`vid_id`)) DEFAULT CHARSET=utf8;