<?php

$tpl = erLhcoreClassTemplate::getInstance( 'lhform/viewcollected.tpl.php');

$collected = erLhAbstractModelFormCollected::fetch((int)$Params['user_parameters']['collected_id']);
$object_trans = $collected->form->getModuleTranslations();

erLhcoreClassFormRenderer::setCollectedInformation($collected->content_array);
erLhcoreClassFormRenderer::setCollectedObject($collected);

$tpl->set('collected',$collected);
$tpl->set('form',$collected->form);
$tpl->set('content',$collected->form->content_rendered);

$Result['content'] = $tpl->fetch();

$Result['path'] = array();
$Result['path'][] =  $object_trans['path'];
$Result['path'][] = array('url' => erLhcoreClassDesign::baseurl('abstract/list').'/Form','title' => $object_trans['name']);
$Result['path'][] = array('url' => erLhcoreClassDesign::baseurl('form/collected').'/'.$collected->form->id,'title' => $collected->form);
$Result['path'][] = array('title' => erTranslationClassLhTranslation::getInstance()->getTranslation('form/viewcollected','Collected information'));

?>