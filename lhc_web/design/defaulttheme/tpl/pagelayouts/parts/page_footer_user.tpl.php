<div class="mt-1 p-1 border-top">
        <p class="float-right small"><a target="_blank" href="http://livehelperchat.com">Live Helper Chat &copy; <?php echo date('Y')?></a></p>
        <p class="small"><a href="<?php if (isset($Result['theme']) !== false && $Result['theme']->widget_copyright_url != '') : ?><?php echo htmlspecialchars($Result['theme']->widget_copyright_url) ?><?php else : ?><?php echo erLhcoreClassModelChatConfig::fetch('customer_site_url')->current_value?><?php endif;?>" target="_blank"><?php if (isset($Result['theme'])) : ?><?php echo htmlspecialchars($Result['theme']->name_company)?><?php else : ?><?php echo htmlspecialchars(erLhcoreClassModelChatConfig::fetch('customer_company_name')->current_value)?><?php endif;?></a></p>
</div>