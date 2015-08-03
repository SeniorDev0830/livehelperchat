<div class="panel panel-default panel-dashboard">
	<div class="panel-heading">
		<a href="<?php echo erLhcoreClassDesign::baseurl('chat/unreadchats')?>"><i class="material-icons chat-unread">chat</i> <?php include(erLhcoreClassDesign::designtpl('lhfront/dashboard/panels/titles/unread_chats.tpl.php'));?> ({{unread_chats.list.length}}{{unread_chats.list.length == lhc.limitu ? '+' : ''}})</a>
	</div>
	<div>
					
		<?php $optinsPanel = array('panelid' => 'unreadd','limitid' => 'limitu'); ?>
		<?php include(erLhcoreClassDesign::designtpl('lhfront/dashboard/panels/parts/options.tpl.php'));?>
					
		<div class="panel-list" ng-if="unread_chats.list.length > 0">
			<table class="table table-condensed mb0 table-small table-fixed">
				<thead>
					<tr>
						<th width="50%"><i title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Visitor');?>" class="material-icons">face</i></th>
						<th width="30%"><i title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Time ago');?>" class="material-icons">access_time</i></th>
						<th width="20%"><i title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Department');?>" class="material-icons">home</i></th>
					</tr>
				</thead>
				<tr ng-repeat="chat in unread_chats.list track by chat.id">
					<td>
						<div data-chat-id="{{chat.id}}" data-toggle="popover" data-placement="top" class="abbr-list" ><span ng-if="chat.country_code != undefined"><img ng-src="<?php echo erLhcoreClassDesign::design('images/flags');?>/{{chat.country_code}}.png" alt="{{chat.country_name}}" title="{{chat.country_name}}" />&nbsp;</span><a title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Open in a new window');?>" class="material-icons" ng-click="lhc.startChatNewWindow(chat.id,chat.nick)">open_in_new</a><a ng-click="lhc.previewChat(chat.id)" class="material-icons">info</a><a ng-click="lhc.startChat(chat.id,chat.nick)" title="{{chat.nick}}"> {{chat.nick}} </a></div>
						
						<div id="popover-title-{{chat.id}}" class="hide">
						  {{chat.nick}} [{{chat.id}}]
						</div>
						
						<div id="popover-content-{{chat.id}}" class="hide">
						    <i class="material-icons">access_time</i>{{chat.time_created_front}}<br/>
							<i class="material-icons">account_box</i>{{chat.plain_user_name}}<br />
							<i class="material-icons">home</i>{{chat.department_name}}
						</div>
						
					</td>
					<td>
						<div class="abbr-list" title="{{chat.unread_time.hours}} <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','h.');?> {{chat.unread_time.minits}} <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','m.');?> {{chat.unread_time.seconds}} <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','s.');?> <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','ago');?>.">{{chat.unread_time.hours}} <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','h.');?> {{chat.unread_time.minits}} <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','m.');?> {{chat.unread_time.seconds}} <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','s.');?> <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','ago');?>.</div>
					</td>
					<td>
						<div class="abbr-list" title="{{chat.department_name}}">{{chat.department_name}}</div>
					</td>
				</tr>
			</table>
		</div>

		<div ng-if="unread_chats.list.length == 0" class="m10 alert alert-info">
			<i class="material-icons">search</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Nothing found')?>...</div>

	</div>
</div>
