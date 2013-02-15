<h1 class="attr-header"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Pending chats list');?></h1> 

<?php if ($pages->items_total > 0) { ?>
<table class="lentele" cellpadding="0" cellspacing="0" width="100%">
    <thead>
        <tr>
            <th width="1%">ID</th>
            <th><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Information');?></th>
        </tr>
    </thead>
    <?php foreach (erLhcoreClassChat::getPendingChats($pages->items_per_page,$pages->low) as $chat) : ?>
    <tr>
        <td><?php echo $chat['id']?></td>
        <td>
          <img class="action-image" align="absmiddle" onclick="lhinst.startChatNewWindow('<?php echo $chat['id'];?>','<?php echo htmlspecialchars($chat['nick']);?>')" src="<?php echo erLhcoreClassDesign::design('images/icons/application_add.png');?>" alt="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Open in new window');?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Open in new window');?>">
	      <a title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Reject chat');?>" href="<?php echo erLhcoreClassDesign::baseurl('chat/delete')?>/<?php echo $chat['id']?>"><img class="action-image" align="absmiddle" src="<?php echo erLhcoreClassDesign::design('images/icons/cancel.png');?>" alt="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Reject chat');?>" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Reject chat');?>"></a>
	      <?php echo $chat['id'];?>. <?php echo htmlspecialchars($chat['nick']);?> (<?php echo date('Y-m-d H:i:s',$chat['time']);?>) (<?php echo $chat['name'];?>)
        </td>
    </tr>
    <?php endforeach; ?>    
</table>

<?php if (isset($pages)) : ?>
    <?php include(erLhcoreClassDesign::designtpl('lhkernel/paginator.tpl.php')); ?>
<?php endif;?>

<?php } else { ?>
<p><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/pendingchats','Empty...');?></p>
<?php } ?>
