<?php
header('content-type: application/json; charset=utf-8');

$db = ezcDbInstance::get();
$db->beginTransaction();

try {
    if ($Params['user_parameters_unordered']['mode'] == 'chat') {
        if ($Params['user_parameters_unordered']['scope'] == erLhcoreClassModelTransfer::SCOPE_MAIL) {
            $chat = erLhcoreClassModelMailconvConversation::fetch($Params['user_parameters']['transfer_id']);
            $transferLegacy = erLhcoreClassTransfer::getTransferByChat($chat->id, erLhcoreClassModelTransfer::SCOPE_MAIL);
        } else {
            $chat = erLhcoreClassModelChat::fetch($Params['user_parameters']['transfer_id']);
            $transferLegacy = erLhcoreClassTransfer::getTransferByChat($chat->id, erLhcoreClassModelTransfer::SCOPE_CHAT);
        }
        if (is_array($transferLegacy)) {
            $chatTransfer = erLhcoreClassModelTransfer::fetchAndLock($transferLegacy['id']);
        } else {
            exit;
        }
        
    } else {    

    	$chatTransfer = erLhcoreClassTransfer::getSession()->load( 'erLhcoreClassModelTransfer', $Params['user_parameters']['transfer_id']);

    	if ($chatTransfer->transfer_scope == erLhcoreClassModelTransfer::SCOPE_CHAT) {
            $chat = erLhcoreClassModelChat::fetch($chatTransfer->chat_id);
        } else {
            $chat = erLhcoreClassModelMailconvConversation::fetch($chatTransfer->chat_id);
        }

    }
} catch (Exception $e) {
	exit;
}

// Set new chat owner
$currentUser = erLhcoreClassUser::instance();
$userData = $currentUser->getUserData(true);

// Old chat user
$oldUserId = $chat->user_id;

if  ($chatTransfer->dep_id > 0) {
	$chat->dep_id = $chatTransfer->dep_id;

    if ($chatTransfer->transfer_scope == erLhcoreClassModelTransfer::SCOPE_CHAT) {
        erLhAbstractModelAutoResponder::updateAutoResponder($chat);
    }

	// User does not have access to chat in this department, that mean we do not have to do anything
	if (!erLhcoreClassChat::hasAccessToRead($chat)){
		exit;
	} else {
        $chat->user_id = $currentUser->getUserID();

        if (!in_array($chat->status_sub, array(erLhcoreClassModelChat::STATUS_SUB_SURVEY_COMPLETED, erLhcoreClassModelChat::STATUS_SUB_USER_CLOSED_CHAT, erLhcoreClassModelChat::STATUS_SUB_SURVEY_SHOW, erLhcoreClassModelChat::STATUS_SUB_CONTACT_FORM))) {
            $chat->status_sub = erLhcoreClassModelChat::STATUS_SUB_OWNER_CHANGED;
        }

        $chat->user_typing  = time();
        $chat->usaccept = $userData->hide_online;

        $msg = $chatTransfer->transfer_scope == erLhcoreClassModelTransfer::SCOPE_CHAT ? (new erLhcoreClassModelmsg()) : (new erLhcoreClassModelMailconvMessageInternal());
        $msg->chat_id = $chat->id;
        $msg->user_id = -1;
        $msg->name_support = $userData->name_support;

        erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $userData->id));

        $chat->user_typing_txt = (string)$msg->name_support.' '.htmlspecialchars_decode(erTranslationClassLhTranslation::getInstance()->getTranslation('chat/accepttrasnfer','has joined the chat!'),ENT_QUOTES);
        $msg->msg = (string)$msg->name_support.' '.erTranslationClassLhTranslation::getInstance()->getTranslation('chat/accepttrasnfer','has accepted a transferred chat!');

    }

}

if ($chatTransfer->transfer_to_user_id == $currentUser->getUserID()){
    
    if ($chat->user_id == 0 || $chat->status != erLhcoreClassModelChat::STATUS_OPERATORS_CHAT)
    {
        $chat->user_id = $currentUser->getUserID();

        if (!in_array($chat->status_sub, array(erLhcoreClassModelChat::STATUS_SUB_SURVEY_COMPLETED, erLhcoreClassModelChat::STATUS_SUB_USER_CLOSED_CHAT, erLhcoreClassModelChat::STATUS_SUB_SURVEY_SHOW, erLhcoreClassModelChat::STATUS_SUB_CONTACT_FORM))) {
            $chat->status_sub = erLhcoreClassModelChat::STATUS_SUB_OWNER_CHANGED;
        }

        $chat->user_typing  = time();
        $chat->usaccept = $userData->hide_online;

        $msg = $chatTransfer->transfer_scope == erLhcoreClassModelTransfer::SCOPE_CHAT ? (new erLhcoreClassModelmsg()) : (new erLhcoreClassModelMailconvMessageInternal());
        $msg->chat_id = $chat->id;
        $msg->user_id = -1;
        $msg->name_support = $userData->name_support;

        erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.before_msg_admin_saved', array('msg' => & $msg, 'chat' => & $chat, 'user_id' => $userData->id));

        $chat->user_typing_txt = (string)$msg->name_support.' '.htmlspecialchars_decode(erTranslationClassLhTranslation::getInstance()->getTranslation('chat/accepttrasnfer','has joined the chat!'),ENT_QUOTES);
        $msg->msg = (string)$msg->name_support.' '.erTranslationClassLhTranslation::getInstance()->getTranslation('chat/accepttrasnfer','has accepted a transferred chat!');
    }

	// Change department if user cannot read current department, so chat appears in right menu
	$filter = erLhcoreClassUserDep::parseUserDepartmetnsForFilter($currentUser->getUserID(), $currentUser->cache_version);
	if ($filter !== true && !in_array($chat->dep_id, $filter)) {
		$dep_id = erLhcoreClassUserDep::getDefaultUserDepartment();
		if ($dep_id > 0) {
			$chat->dep_id = $dep_id;

            if (!in_array($chat->status_sub, array(erLhcoreClassModelChat::STATUS_SUB_SURVEY_COMPLETED, erLhcoreClassModelChat::STATUS_SUB_USER_CLOSED_CHAT, erLhcoreClassModelChat::STATUS_SUB_SURVEY_SHOW, erLhcoreClassModelChat::STATUS_SUB_CONTACT_FORM))) {
                $chat->status_sub = erLhcoreClassModelChat::STATUS_SUB_OWNER_CHANGED;
            }

            if ($chatTransfer->transfer_scope == erLhcoreClassModelTransfer::SCOPE_CHAT) {
                erLhAbstractModelAutoResponder::updateAutoResponder($chat);
            }
		}
	}
}

if ( !erLhcoreClassChat::hasAccessToRead($chat) )
{
	if ($currentUser->getUserID() == $chatTransfer->transfer_to_user_id) {
		$dep_id = erLhcoreClassUserDep::getDefaultUserDepartment();
		if ($dep_id > 0) {
			$chat->dep_id = $dep_id;

            if (!in_array($chat->status_sub, array(erLhcoreClassModelChat::STATUS_SUB_SURVEY_COMPLETED, erLhcoreClassModelChat::STATUS_SUB_USER_CLOSED_CHAT, erLhcoreClassModelChat::STATUS_SUB_SURVEY_SHOW, erLhcoreClassModelChat::STATUS_SUB_CONTACT_FORM))) {
                $chat->status_sub = erLhcoreClassModelChat::STATUS_SUB_OWNER_CHANGED;
            }

            if ($chatTransfer->transfer_scope == erLhcoreClassModelTransfer::SCOPE_CHAT) {
                erLhAbstractModelAutoResponder::updateAutoResponder($chat);
            }
		}
	} else {
		exit; // User does not have permission to assign chat to himself
	}
}

// Store system message
if (isset($msg) && ($msg instanceof erLhcoreClassModelmsg || $msg instanceof erLhcoreClassModelMailconvMessageInternal)) {
	$chat->last_user_msg_time = $msg->time = time();
    $msg->saveThis();
    $chat->last_msg_id = $msg->id;
}

// All ok, we can make changes
$chat->updateThis();
erLhcoreClassTransfer::getSession()->delete($chatTransfer);

if ($chat->user_id > 0 && $oldUserId != $chat->user_id) {
    erLhcoreClassChat::updateActiveChats($chat->user_id);
}

if ($oldUserId != $chat->user_id && $oldUserId > 0) {
    erLhcoreClassChat::updateActiveChats($oldUserId);
}

erLhcoreClassChatEventDispatcher::getInstance()->dispatch('chat.chat_transfer_accepted',array('chat' => & $chat));

// Commit all the changes
$db->commit();

if ($Params['user_parameters_unordered']['postaction'] == 'singlewindow') {
	erLhcoreClassModule::redirect('chat/single/' . $chat->id);
	exit;
}

echo erLhcoreClassChat::safe_json_encode(array('error' => 'false', 'chat_id' => $chat->id, 'scope' => $chatTransfer->transfer_scope));
exit;
?>