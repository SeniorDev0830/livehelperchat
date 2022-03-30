<h1><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Send an e-mail');?></h1>

<?php if (isset($updated)) :
    $msg = erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','E-mail was sent.');

    if (isset($outcome['copy']) && $outcome['copy']['success'] == true) {
        $msg .= ' ' . erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvmb','Sent e-mail copy was created in a sent folder.');
    }
?>

    <?php include(erLhcoreClassDesign::designtpl('lhkernel/alert_success.tpl.php'));?>

    <?php if (isset($outcome['copy'])) : ?>
        <?php if ($outcome['copy']['success'] == false) : ?>
            <?php $errors = [$outcome['copy']['reason']]; ?>
            <?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
        <?php endif; ?>
    <?php endif; ?>

<?php endif; ?>

<?php if (isset($errors)) : ?>
    <?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
<?php endif; ?>

<?php if (isset($updated)) : ?>
<a class="btn btn-sm btn-outline-secondary" href="<?php echo erLhcoreClassDesign::baseurl('mailconv/sendemail')?>?new=1"><span class="material-icons">mail</span> <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Send a new e-mail');?></a>
<?php endif; ?>

<?php if (isset($updated) && isset($outcome['copy']['success']) && $outcome['copy']['success'] == true && isset($outcome['copy']['message_id'])) : ?>
    <div class="py-2"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Ticket');?>: <span id="ticket-progress"><span class="material-icons lhc-spin">cached</span><span id="ticket-progress-text"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Working');?>...</span></span></div>
    <script>
        (function intervalStarter() {
                var counter = 0;
                var scheduled = 0;
                var interval = setInterval(function () {
                $.postJSON(WWW_DIR_JAVASCRIPT + 'mailconv/geticketbymessageid/',{'scheduled': scheduled, 'counter': counter, 'mailbox_id': <?php echo $item->mailbox_id?>, 'message_id': <?php echo json_encode($outcome['copy']['message_id'])?>}, function (data) {
                    if (data.found == true) {
                        $('#ticket-progress').html(data.conversation);
                        clearInterval(interval);
                    } else {
                        if (data.scheduled == 1) {
                            scheduled = 1;
                        }
                        $('#ticket-progress-text').html(data.progress);
                    }
                });
                counter = counter + 1;
            }, 2000);
        })();
    </script>

<?php endif; ?>

<?php if (!isset($updated)) : ?>

<form action="<?php echo erLhcoreClassDesign::baseurl('mailconv/sendemail')?>" id="sendemail-form" ng-non-bindable method="post" autocomplete="new-password">

    <?php include(erLhcoreClassDesign::designtpl('lhkernel/csfr_token.tpl.php'));?>

    <div class="form-group">
        <input type="text" id="new-mailbox-id" autocomplete="new-password" value="<?php echo htmlspecialchars((string)$item->mailbox_front)?>" class="form-control form-control-sm" name="mailbox_id" list="mailbox_list">
        <datalist id="mailbox_list" autocomplete="new-password">
            <?php foreach (erLhcoreClassModelMailconvMailbox::getList(array('filter' => array('active' => 1))) as $mailbox) : ?>
                <option value="<?php echo htmlspecialchars($mailbox->mail)?>"><?php echo htmlspecialchars($mailbox->name)?></option>
            <?php endforeach; ?>
        </datalist>
    </div>

    <div class="form-group">
        <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Subject');?></label>
        <input type="text" class="form-control form-control-sm" name="subject" value="<?php echo htmlspecialchars($item->subject)?>" />
    </div>

    <div class="row">
        <div class="col-6">
            <div class="form-group">
                <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Recipient E-mail');?></label>
                <input type="text" class="form-control form-control-sm" name="from_address" value="<?php echo htmlspecialchars($item->from_address)?>" />
            </div>
        </div>
        <div class="col-6">
            <div class="form-group">
                <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Recipient Name');?></label>
                <input type="text" class="form-control form-control-sm" name="from_name" value="<?php echo htmlspecialchars($item->from_name)?>" />
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-6">
            <div class="form-group">
                <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Reply to e-mail');?></label>
                <input type="text" placeholder="If not filled we will use mailbox e-mail" class="form-control form-control-sm" name="to_data" value="<?php echo htmlspecialchars($item->to_data)?>" />
            </div>
        </div>
        <div class="col-6">
            <div class="form-group">
                <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Reply to name');?></label>
                <input type="text" placeholder="If not filled we will use mailbox name" class="form-control form-control-sm" name="reply_to_data" value="<?php echo htmlspecialchars($item->reply_to_data)?>" />
            </div>
        </div>
    </div>

    <?php include(erLhcoreClassDesign::designtpl('lhmailconv/parts/body.tpl.php'));?>

    <input type="hidden" name="send_status" id="id_send_status" value="0">

    <div class="btn-group mt-2">
        <button name="SendEmail" onclick="$('.send-buttons').attr('disabled','disabled').text('Sending...');$('#sendemail-form').submit()" class="send-buttons btn btn-sm btn-primary" type="submit"><i class="material-icons">send</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Send as closed');?></button>
        <button name="SendEmailActive" onclick="$('.send-buttons').attr('disabled','disabled').text('Sending...');$('#id_send_status').val(1);$('#sendemail-form').submit()" class="send-buttons btn btn-sm btn-outline-secondary" type="submit"><i class="material-icons text-success">send</i><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconvrt','Send as Active');?></button>
    </div>

</form>
<?php endif; ?>