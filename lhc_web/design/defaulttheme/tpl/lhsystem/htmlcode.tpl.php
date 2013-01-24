<h1 class="attr-header"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/htmlcode','HTML code');?></h1>
<p>
<select id="LocaleID" class="default-select">
    <?php foreach ($locales as $locale ) : ?>
    <option value="<?php echo $locale?>/"><?php echo $locale?></option>
    <?php endforeach; ?>    
</select>
</p>

<p class="explain"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('system/htmlcode','Copy code from textarea to page where you want your status to appear');?></p>
<textarea style="width:100%;height:50px;font-size:11px;" id="HMLTContent" onclick="$(this).select()"><?php echo htmlspecialchars('<script type="text/javascript" src="http://'.$_SERVER['HTTP_HOST'].erLhcoreClassDesign::baseurl('chat/getstatus').'"></script>')?></textarea>


<script type="text/javascript">

var default_site_access = '<?php echo erConfigClassLhConfig::getInstance()->getSetting( 'site', 'default_site_access' ); ?>/';


$('#LocaleID').change(function(){    
    var siteAccess = $('#LocaleID').val() == default_site_access ? '' : $('#LocaleID').val();
    $('#HMLTContent').html('&lt;script type=&quot;text/javascript&quot; src=&quot;http://<?php echo $_SERVER['HTTP_HOST']?><?php echo erLhcoreClassDesign::baseurldirect()?>'+siteAccess+'chat/getstatus'+'&quot;&gt;&lt;/script&gt;');
});


var siteAccess = $('#LocaleID').val() == default_site_access ? '' : $('#LocaleID').val();
$('#HMLTContent').html('&lt;script type=&quot;text/javascript&quot; src=&quot;http://<?php echo $_SERVER['HTTP_HOST']?><?php echo erLhcoreClassDesign::baseurldirect()?>'+siteAccess+'chat/getstatus'+'&quot;&gt;&lt;/script&gt;');
</script>