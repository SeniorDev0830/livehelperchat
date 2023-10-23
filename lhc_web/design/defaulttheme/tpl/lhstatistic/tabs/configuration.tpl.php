<br>

<?php if (isset($updated)) : $msg = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Updated'); ?>
    <?php include(erLhcoreClassDesign::designtpl('lhkernel/alert_success.tpl.php'));?>
<?php endif; ?>

<h5>Default checked charts for &quot;Statistic&quot;</h5>
<form action="" method="post">
<div class="row">
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="active" <?php if (in_array('active',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Chat numbers by status')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="unanswered" <?php if (in_array('unanswered',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Unanswered chat numbers')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="msgtype" <?php if (in_array('msgtype',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Message types')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="proactivevsdefault" <?php if (in_array('proactivevsdefault',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Proactive chats number vs visitors initiated')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="subject" <?php if (in_array('subject',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Number of chats by subject')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="canned" <?php if (in_array('canned',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Canned messages statistic')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="thumbs" <?php if (in_array('thumbs',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Number of Thumbs Up/Down')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="country" <?php if (in_array('country',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Number of chats by country')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="usermsg" <?php if (in_array('usermsg',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Number of messages by user')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="avgduration" <?php if (in_array('avgduration',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Number of chats per hour, average chat duration')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="waitmonth" <?php if (in_array('waitmonth',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Average wait time in seconds (maximum of 10 minutes)')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="chatbyuser" <?php if (in_array('chatbyuser',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Number of chats by user')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="chatbyuserparticipant" <?php if (in_array('chatbyuserparticipant',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Number of chats by user (participant)')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="msgdelop" <?php if (in_array('msgdelop',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Message delivery statistic (operator)')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="msgdelbot" <?php if (in_array('msgdelbot',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Message delivery statistic (bot)')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="chatbytransferuser" <?php if (in_array('chatbytransferuser',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Number of chats by transfer operator')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="chatbydep" <?php if (in_array('chatbydep',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Number of chats by department')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="waitbyoperator" <?php if (in_array('waitbyoperator',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','AVG visitor wait time by operator')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chart_type[]" value="avgdurationop" <?php if (in_array('avgdurationop',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Average chat duration by user in seconds')?></label></div>
    <div class="col-4"><label title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Usefull if you prefill usernames always')?>"><input type="checkbox" name="chart_type[]" value="nickgroupingdate" <?php if (in_array('nickgroupingdate',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Unique group field records grouped by date')?></label></div>
    <div class="col-4"><label title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Usefull if you prefill usernames always')?>"><input type="checkbox" name="chart_type[]" value="nickgroupingdatenick" <?php if (in_array('nickgroupingdatenick',$configuration['statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Chats number grouped by date and group field')?></label></div>
</div>

<h5><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Default checked charts for'); ?> &quot;<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Chats statistic'); ?>&quot;</h5>
<div class="row">
    <div class="col-4"><label><input type="checkbox" name="chat_chart_type[]" value="active" <?php if (in_array('active',$configuration['chat_statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Chat numbers by status')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chat_chart_type[]" value="unanswered" <?php if (in_array('unanswered',$configuration['chat_statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Unanswered chat numbers')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chat_chart_type[]" value="msgtype" <?php if (in_array('msgtype',$configuration['chat_statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Message types')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chat_chart_type[]" value="proactivevsdefault" <?php if (in_array('proactivevsdefault',$configuration['chat_statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Proactive chats number vs visitors initiated')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chat_chart_type[]" value="waitmonth" <?php if (in_array('waitmonth',$configuration['chat_statistic'])) : ?>checked="checked"<?php endif;?>><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Average wait time in seconds (maximum of 10 minutes)')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chat_chart_type[]" value="total_chats" <?php if (in_array('total_chats',$configuration['chat_statistic'])) : ?>checked="checked"<?php endif;?>><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Total chats')?></label></div>
    <div class="col-4"><label><input type="checkbox" name="chat_chart_type[]" value="by_channel" <?php if (in_array('by_channel',$configuration['chat_statistic'])) : ?>checked="checked"<?php endif;?>><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Total chats by channel')?></label></div>
    <div class="col-4"><label title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Usefull if you prefill usernames always')?>"><input type="checkbox" name="chat_chart_type[]" value="nickgroupingdate" <?php if (in_array('nickgroupingdate',$configuration['chat_statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Unique group field records grouped by date')?></label></div>
    <div class="col-4"><label title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Usefull if you prefill usernames always')?>"><input type="checkbox" name="chat_chart_type[]" value="nickgroupingdatenick" <?php if (in_array('nickgroupingdatenick',$configuration['chat_statistic'])) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Chats number grouped by date and group field')?></label></div>
</div>

<h5><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Department statistic generation'); ?></h5>

<div class="row">
    <div class="col-3">
        <div class="form-group">
            <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Average chat duration should be calculated for the last'); ?></label>
            <select class="form-control form-control-sm" name="avg_chat_duration">
                <option value="<?php echo 5*60?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 5*60) : ?>selected="selected"<?php endif;?> >5 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','minutes'); ?></option>
                <option value="<?php echo 10*60?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 10*60) : ?>selected="selected"<?php endif;?> >10 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','minutes'); ?></option>
                <option value="<?php echo 20*60?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 20*60) : ?>selected="selected"<?php endif;?> >20 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','minutes'); ?></option>
                <option value="<?php echo 30*60?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 30*60) : ?>selected="selected"<?php endif;?> >30 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','minutes'); ?></option>
                <option value="<?php echo 3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 3600) : ?>selected="selected"<?php endif;?> >1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hour'); ?></option>
                <option value="<?php echo 2*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 2*3600) : ?>selected="selected"<?php endif;?> >2 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hours'); ?></option>
                <option value="<?php echo 4*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 4*3600) : ?>selected="selected"<?php endif;?> >4 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hours'); ?></option>
                <option value="<?php echo 8*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 8*3600) : ?>selected="selected"<?php endif;?> >8 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hours'); ?></option>
                <option value="<?php echo 16*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 16*3600) : ?>selected="selected"<?php endif;?> >16 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hours'); ?></option>
                <option value="<?php echo 1*24*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 1*24*3600) : ?>selected="selected"<?php endif;?> >1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','day'); ?></option>
                <option value="<?php echo 2*24*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 2*24*3600) : ?>selected="selected"<?php endif;?> >2 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','days'); ?></option>
                <option value="<?php echo 3*24*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 3*24*3600) : ?>selected="selected"<?php endif;?> >3 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','days'); ?></option>
                <option value="<?php echo 4*24*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 4*24*3600) : ?>selected="selected"<?php endif;?> >4 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','days'); ?></option>
                <option value="<?php echo 7*24*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 7*24*3600) : ?>selected="selected"<?php endif;?> >1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','week'); ?></option>
                <option value="<?php echo 2*7*24*3600?>" <?php if (isset($configuration['avg_chat_duration']) && $configuration['avg_chat_duration'] == 2*7*24*3600) : ?>selected="selected"<?php endif;?> >2 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','weeks'); ?></option>
                <option value="<?php echo 4*7*24*3600?>" <?php if (!isset($configuration['avg_chat_duration']) || $configuration['avg_chat_duration'] == 4*7*24*3600) : ?>selected="selected"<?php endif;?> >4 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','weeks'); ?></option>
            </select>
        </div>
    </div>
    <div class="col-3">
        <div class="form-group">
            <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Average wait time should be calculated for the last'); ?></label>
            <select class="form-control form-control-sm" name="avg_wait_time">
                <option value="<?php echo 5*60?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 5*60) : ?>selected="selected"<?php endif;?> >5 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','minutes'); ?></option>
                <option value="<?php echo 10*60?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 10*60) : ?>selected="selected"<?php endif;?> >10 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','minutes'); ?></option>
                <option value="<?php echo 20*60?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 20*60) : ?>selected="selected"<?php endif;?> >20 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','minutes'); ?></option>
                <option value="<?php echo 30*60?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 30*60) : ?>selected="selected"<?php endif;?> >30 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','minutes'); ?></option>
                <option value="<?php echo 3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 3600) : ?>selected="selected"<?php endif;?> >1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hour'); ?></option>
                <option value="<?php echo 2*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 2*3600) : ?>selected="selected"<?php endif;?> >2 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hours'); ?></option>
                <option value="<?php echo 4*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 4*3600) : ?>selected="selected"<?php endif;?> >4 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hours'); ?></option>
                <option value="<?php echo 8*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 8*3600) : ?>selected="selected"<?php endif;?> >8 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hours'); ?></option>
                <option value="<?php echo 16*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 16*3600) : ?>selected="selected"<?php endif;?> >16 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','hours'); ?></option>
                <option value="<?php echo 1*24*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 1*24*3600) : ?>selected="selected"<?php endif;?> >1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','day'); ?></option>
                <option value="<?php echo 2*24*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 2*24*3600) : ?>selected="selected"<?php endif;?> >2 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','days'); ?></option>
                <option value="<?php echo 3*24*3600?>" <?php if (!isset($configuration['avg_wait_time']) || $configuration['avg_wait_time'] == 3*24*3600) : ?>selected="selected"<?php endif;?> >3 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','days'); ?></option>
                <option value="<?php echo 4*24*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 4*24*3600) : ?>selected="selected"<?php endif;?> >4 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','days'); ?></option>
                <option value="<?php echo 7*24*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 7*24*3600) : ?>selected="selected"<?php endif;?> >1 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','week'); ?></option>
                <option value="<?php echo 2*7*24*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 2*7*24*3600) : ?>selected="selected"<?php endif;?> >2 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','weeks'); ?></option>
                <option value="<?php echo 4*7*24*3600?>" <?php if (isset($configuration['avg_wait_time']) && $configuration['avg_wait_time'] == 2*7*24*3600) : ?>selected="selected"<?php endif;?> >4 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','weeks'); ?></option>
            </select>
        </div>
    </div>
    <div class="col-3">
        <div class="form-group">
            <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Work hours starts at'); ?></label>
            <select class="form-control form-control-sm" name="work_hours_starts">
            <?php for ($i = 0; $i <= 23; $i++) : ?>
                <option <?php if ($configuration['work_hours_starts'] == $i) : ?>selected="selected"<?php endif;?> value="<?php echo $i?>"><?php echo $i?> h.</option>
            <?php endfor; ?>
            </select>
        </div>
    </div>
    <div class="col-3">
        <div class="form-group">
            <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Work hours ends at'); ?></label>
            <select class="form-control form-control-sm" name="work_hours_ends">
                <?php for ($i = 0; $i <= 23; $i++) : ?>
                    <option <?php if ($configuration['work_hours_ends'] == $i) : ?>selected="selected"<?php endif;?> value="<?php echo $i?>"><?php echo $i?> h.</option>
                <?php endfor; ?>
            </select>
        </div>
    </div>

</div>

    <h5><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Collect canned messages usage statistic'); ?></h5>
    <div class="row">
        <div class="col-12"><label><input class="me-1" type="checkbox" name="canned_stats" value="on" <?php if (isset($configuration['canned_stats']) && $configuration['canned_stats'] == 1) : ?>checked="checked"<?php endif;?> ><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/statistic','Collect canned messages usage statistic')?></label></div>
    </div>

    <?php include(erLhcoreClassDesign::designtpl('lhkernel/csfr_token.tpl.php'));?>

<input class="btn btn-secondary" type="submit" value="Store" name="StoreStatistic" />

</form>