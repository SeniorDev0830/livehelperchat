<?php include(erLhcoreClassDesign::designtpl('lhfaq/embed_button.tpl.php'));?>
<h1><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('questionary/list','FAQ');?></h1>

<?php if ($pages->items_total > 0) : ?>
	<table class="twelve" cellpadding="0" cellspacing="0">
	<thead>
	<tr>
	    <th width="1%">ID</th>
	    <th><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/list','Name');?></th>
	    <th class="one"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/list','Active');?></th>
	    <th nowrap width="1%" ></th>
	    <th nowrap width="1%" ></th>
	</tr>
	</thead>
	<?php foreach ($items as $item) : ?>
	    <tr>
	        <td><?php echo $item->id; ?></td>
	        <td><a href="<?php echo erLhcoreClassDesign::baseurl('faq/view')?>/<?php echo $item->id; ?>"><?php echo htmlspecialchars($item->question)?></a></td>
	        <td><?php if ($item->active == 1) : ?><b><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/list','Y');?></b><?php else : ?><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/list','N');?><?php endif;?></td>
	        <td nowrap><a class="tiny button round" href="<?php echo erLhcoreClassDesign::baseurl('faq/view')?>/<?php echo $item->id?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/list','Edit item');?></a></td>
	        <td nowrap class="right"><a onclick="return confirm('<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('kernel/message','Are you sure?');?>')" class="tiny alert button round" href="<?php echo erLhcoreClassDesign::baseurl('faq/delete')?>/<?php echo $item->id; ?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/list','Delete this question');?></a></td>
	    </tr>
	<?php endforeach; ?>
</table>
<?php endif; ?>

<?php if (isset($pages)) : ?>
    <?php include(erLhcoreClassDesign::designtpl('lhkernel/paginator.tpl.php')); ?>
<?php endif;?>

<a href="<?php echo erLhcoreClassDesign::baseurl('faq/new')?>" class="button small"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/list','New question');?></a>




