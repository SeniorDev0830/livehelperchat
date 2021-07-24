<?php

class erLhcoreClassMailconvWorkflow {

    public static function closeConversation($params) {

        $conv = $params['conv'];

        if (!isset($params['force_update']) && $conv->status == erLhcoreClassModelMailconvConversation::STATUS_CLOSED) {
            return;
        }

        if (isset($params['user_id']) && is_numeric($params['user_id'])) {
            if ($conv->user_id == 0) {
                $conv->user_id = $params['user_id'];
            }
        }

        if ($conv->cls_time == 0) {
            $conv->cls_time = time();
        }

        if ($conv->accept_time == 0) {
            $conv->accept_time = time();
        }

        $conv->wait_time = $conv->accept_time - $conv->pnd_time;

        if ($conv->lr_time == 0) {
            $conv->lr_time = time();
        }

        $conv->response_time = $conv->lr_time - $conv->accept_time;
        $conv->interaction_time = $conv->cls_time - $conv->accept_time;
        $conv->status = erLhcoreClassModelMailconvConversation::STATUS_CLOSED;
        $messages = erLhcoreClassModelMailconvMessage::getList(['limit' => false, 'sort' => 'udate ASC', 'filter' => ['conversation_id' => $conv->id]]);
        $conv->conv_duration = self::getConversationDuration($messages);
        $conv->saveThis();

        foreach ($messages as $message) {

            if ($message->status != erLhcoreClassModelMailconvMessage::STATUS_RESPONDED)
            {
                $message->status = erLhcoreClassModelMailconvMessage::STATUS_RESPONDED;
                $message->response_type = erLhcoreClassModelMailconvMessage::RESPONSE_NOT_REQUIRED;
            }

            if ($message->lr_time == 0) {
                $message->lr_time = time();
            }

            if ($message->cls_time == 0) {
                $message->cls_time = time();
            }

            // Happens if operator replies being invisible so no accept_time is set
            if ($message->accept_time == 0) {
                $message->accept_time = $message->ctime;
            }

            if ($message->response_time == 0) {
                $message->response_time = $message->lr_time - $message->accept_time;
            }

            if ($message->interaction_time == 0) {
                $message->interaction_time = $message->cls_time - $message->accept_time;
            }

            if ($message->wait_time == 0) {
                $message->wait_time = $message->accept_time - $message->ctime;
            }

            // We can't do that because auto responder
            // might send an e-mail just
            /*if ($message->user_id == 0) {
                $message->user_id = $conv->user_id;
            }*/

            $message->updateThis();
        }
    }

    public static function getConversationDuration($messages) {
        $previousMessage = null;
        $timeToAdd = 0;
        foreach ($messages as $message) {

            if ($previousMessage == null) {
                $previousMessage = $message;
                continue;
            }

            // Include difference only between different messages
            if (($previousMessage->response_type == erLhcoreClassModelMailconvMessage::RESPONSE_INTERNAL && in_array($message->response_type,array(
                    erLhcoreClassModelMailconvMessage::RESPONSE_NORMAL,
                    erLhcoreClassModelMailconvMessage::RESPONSE_NOT_REQUIRED,
                    erLhcoreClassModelMailconvMessage::RESPONSE_UNRESPONDED
                ))) ||
                ($message->response_type == erLhcoreClassModelMailconvMessage::RESPONSE_INTERNAL && in_array($previousMessage->response_type,array(
                    erLhcoreClassModelMailconvMessage::RESPONSE_NORMAL,
                    erLhcoreClassModelMailconvMessage::RESPONSE_NOT_REQUIRED,
                    erLhcoreClassModelMailconvMessage::RESPONSE_UNRESPONDED
                )))) {
                $diff = $message->udate - $previousMessage->udate;

                if ($previousMessage->conv_duration == 0) {
                    $previousMessage->conv_duration = $diff;
                    $previousMessage->updateThis(array('update' => array('conv_duration')));
                }

                $timeToAdd += $diff;
            }

            $previousMessage = $message;
        }
        return $timeToAdd;
    }
}

?>