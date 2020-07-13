<?php

$tpl = erLhcoreClassTemplate::getInstance('lhmailconv/editmailbox.tpl.php');

$item =  erLhcoreClassModelMailconvMailbox::fetch($Params['user_parameters']['id']);

if (isset($Params['user_parameters_unordered']['action']) && $Params['user_parameters_unordered']['action'] == 'sync') {
    erLhcoreClassMailconvParser::syncMailbox($item);
}

if (ezcInputForm::hasPostData()) {

    if (isset($_POST['Cancel_action'])) {
        erLhcoreClassModule::redirect('mailconv/mailbox');
        exit ;
    }

    $Errors = erLhcoreClassMailconvValidator::validateMailbox($item);

    if (count($Errors) == 0) {
        try {
            $item->saveThis();

            if (isset($_POST['Update_page'])) {
                $tpl->set('updated',true);
            } else {
                erLhcoreClassModule::redirect('mailconv/mailbox');
                exit;
            }

        } catch (Exception $e) {
            $tpl->set('errors',array($e->getMessage()));
        }

    } else {
        $tpl->set('errors',$Errors);
    }
}

$tpl->setArray(array(
    'item' => $item,
    'tab' => '',
));

$Result['content'] = $tpl->fetch();

$Result['path'] = array(
    array(
        'url' => erLhcoreClassDesign::baseurl('system/configuration') . '#!#mailconv',
        'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconv','Mail conversation')
    ),
    array(
        'url' => erLhcoreClassDesign::baseurl('mailconv/mailbox'),
        'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconv', 'Mailbox')
    ),
    array(
        'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconv', 'Edit')
    )
);

?>