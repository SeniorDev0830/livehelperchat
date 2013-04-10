<?php include(erLhcoreClassDesign::designtpl('lhquestionary/embed_button.tpl.php'));?>
<h1><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/new','New question');?></h1>

<?php if (isset($errors)) : ?>
		<?php include(erLhcoreClassDesign::designtpl('lhkernel/validation_error.tpl.php'));?>
<?php endif; ?>

<form action="<?php echo erLhcoreClassDesign::baseurl('faq/new')?>" method="post">

<?php include(erLhcoreClassDesign::designtpl('lhfaq/form.tpl.php'));?>

<br>
<ul class="button-group radius">
     <li><input type="submit" class="small button" name="Save" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/new','Save');?>"/></li>
     <li><input type="submit" class="small button" name="Cancel" value="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('faq/new','Cancel');?>"/></li>
</ul>

</form>