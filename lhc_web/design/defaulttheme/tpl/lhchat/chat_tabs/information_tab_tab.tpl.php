<li role="presentation" class="nav-item"><a class="nav-link<?php if ($chatTabsOrderDefault == 'information_tab_tab') print ' active';?>"  href="#main-user-info-tab-<?php echo $chat->id?>" aria-controls="main-user-info-tab-<?php echo $chat->id?>" role="tab" data-bs-toggle="tab" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Visitor')?>"><i class="material-icons me-0">info_outline</i></a></li>