<?php if (erConfigClassLhConfig::getInstance()->getDirLanguage('dir_language') == 'ltr' || erConfigClassLhConfig::getInstance()->getDirLanguage('dir_language') == '') : ?>
<link rel="stylesheet" type="text/css" href="<?php echo erLhcoreClassDesign::designCSS('vendor/bootstrap/css/bootstrap.min.css;vendor/bootstrap/css/bootstrap-theme.min.css;css/app.css;css/override.css;css/fontello.css;css/datepicker.css;vendor/metisMenu/metisMenu.min.css');?>" />
<?php else : ?>
<link rel="stylesheet" type="text/css" href="<?php echo erLhcoreClassDesign::designCSS('vendor/bootstrap/css/bootstrap.min.css;vendor/bootstrap/css/bootstrap-theme.min.css;css/bootstrap-rtl.min.css;css/app.css;css/app-rtl.css;css/override_rtl.css;css/fontello.css;css/datepicker.css;vendor/metisMenu/metisMenu.min.css');?>" />
<?php endif;?>
<?php echo isset($Result['additional_header_css']) ? $Result['additional_header_css'] : ''?>