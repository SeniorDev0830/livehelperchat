<?php if ($currentUser->hasAccessTo('lhchat','use')) : ?>

    <?php
    $optinsPanel = array('panelid' => 'mcd','limitid' => 'limitmc');
    if (!$currentUser->hasAccessTo('lhchat','my_chats_filter')) {
        $optinsPanel['hide_department_filter'] = true;
        $optinsPanel['limits_width'] = 12;
    }
    ?>

    <lhc-widget icon_class="chat-active"
                list_identifier="my-chats"
                type="my_chats"
                optionsPanel=<?php echo json_encode($optinsPanel)?>
                www_dir_flags="<?php echo erLhcoreClassDesign::design('images/flags');?>"
                expand_identifier="my_chats_widget_exp"
                status_id="<?php echo erLhcoreClassUser::instance()->getUserID()?>"
                status_key="user_id"
                panel_list_identifier="mcd-panel-list"></lhc-widget>

    <?php /*<div class="card card-dashboard card-my-chats" ng-class="{'has-chats' : my_chats.list.length > 0}" data-panel-id="my_chats" ng-init="lhc.getToggleWidget('my_chats_widget_exp')">
        <div class="card-header">
            <a href="<?php echo erLhcoreClassDesign::baseurl('chat/list')?>/(user_id)/<?php echo erLhcoreClassUser::instance()->getUserID()?>"><i class="material-icons chat-active">account_box</i> <span class="d-none d-lg-inline"><?php include(erLhcoreClassDesign::designtpl('lhfront/dashboard/panels/titles/my_active_chats.tpl.php'));?></span> ({{my_chats.list.length}}{{my_chats.list.length == lhc.limitmc ? '+' : ''}})</a>

            <a title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('pagelayout/pagelayout','collapse/expand')?>" ng-click="lhc.toggleWidget('my_chats_widget_exp')" class="fs24 float-end material-icons exp-cntr">{{lhc.toggleWidgetData['my_chats_widget_exp'] == false ? 'expand_less' : 'expand_more'}}</a>

            <?php $takenTimeAttributes = 'my_chats.tt';?>
            <?php include(erLhcoreClassDesign::designtpl('lhfront/dashboard/panels/parts/taken_time.tpl.php'));?>
        </div>

        <div ng-if="lhc.toggleWidgetData['my_chats_widget_exp'] !== true">

            <?php
            $optinsPanel = array('panelid' => 'mcd','limitid' => 'limitmc');
            if (!$currentUser->hasAccessTo('lhchat','my_chats_filter')) {
                $optinsPanel['hide_department_filter'] = true;
                $optinsPanel['limits_width'] = 12;
            }
            ?>
            <?php include(erLhcoreClassDesign::designtpl('lhfront/dashboard/panels/parts/options.tpl.php'));?>


            <?php include(erLhcoreClassDesign::designtpl('lhfront/dashboard/panels/bodies/my_chats.tpl.php'));?>

            <div ng-if="!my_chats || my_chats.list.length == 0" class="m-1 alert alert-light"><i class="material-icons">search</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/syncadmininterface','Chats assigned to you will appear here. List includes pending and active chats.')?></div>

        </div>
    </div>*/ ?>


<?php endif; ?>