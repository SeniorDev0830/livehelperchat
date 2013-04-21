<p><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','If there are no options to choose from to user will be shown text field where he will be able to enter his own answer.') ?></p>

<?php if (isset($errors)) : ?>
	<?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
<?php endif; ?>

<form action="<?php echo erLhcoreClassDesign::baseurl('questionary/edit')?>/<?php echo $question->id?><?php $option->id > 0 ? print "/(option_id)/{$option->id}" : ''?>/(tab)/voting" method="post">

    <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','Option');?></label>
    <input type="text" value="<?php echo htmlspecialchars($option->option_name)?>" name="Option"  placeholder="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','Enter name...');?>" />

    <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','Option position');?></label>
    <input type="text" value="<?php echo htmlspecialchars($option->priority)?>" name="Priority" />

	<ul class="button-group radius">
      <li><input type="submit" class="small button" name="UpdateO" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','Save');?>"/></li>
      <li><input type="submit" class="small button" name="CancelO" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','Cancel');?>"/></li>
    </ul>

</form>

<?php $optionsItems = erLhcoreClassQuestionary::getList(array('sort' => 'priority DESC','filter' => array('question_id' => $question->id)),'erLhcoreClassModelQuestionOption','lh_question_option'); if (!(empty($optionsItems))) : ?>
<table class="twelve" cellpadding="0" cellspacing="0">
<thead>
<tr>
    <th width="1%">ID</th>
    <th><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','Option');?></th>
    <th class="one"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','Position');?></th>
    <th width="1%">&nbsp;</th>
    <th width="1%">&nbsp;</th>
</tr>
</thead>
<?php foreach ($optionsItems as $optionsItem) : ?>
<tr>
        <td><?php echo $optionsItem->id?></td>
        <td><?php echo htmlspecialchars($optionsItem->option_name)?></td>
        <td><?php echo $optionsItem->priority?></td>
        <td nowrap><a class="small button round" href="<?php echo erLhcoreClassDesign::baseurl('questionary/edit')?>/<?php echo $question->id?>/(option_id)/<?php echo $optionsItem->id?>/(tab)/voting"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','Edit');?></a></td>
        <td nowrap><a onclick="return confirm('<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('kernel/message','Are you sure?');?>')" class="small alert button round" href="<?php echo erLhcoreClassDesign::baseurl('questionary/deleteoption')?>/<?php echo $optionsItem->id?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/edit','Delete');?></a></td>
</tr>
<?php endforeach;?>
</table>
<?php endif;?>