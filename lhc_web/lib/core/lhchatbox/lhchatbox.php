<?php

class erLhcoreClassChatbox {

    /**
     * Gets pending chats
     */
    public static function getInstance($identifier = 'default')
    {
    	if ($identifier == '' || $identifier == 'default') {
	    	$identifier = 'default';
			$items = self::getList(array('filter' => array('identifier' => $identifier)));
			if (empty($items)) {
				$chatbox = new erLhcoreClassModelChatbox();
				$chatbox->identifier = $identifier;
				$chatbox->name = 'Default chatbox';

				$chat = new erLhcoreClassModelChat();
				$chat->status = erLhcoreClassModelChat::STATUS_CHATBOX_CHAT;
				$chat->time = time();
				$chat->setIP();
				$chat->hash = erLhcoreClassChat::generateHash();
				$chat->nick = 'Manager';

				// Assign default department
				$departments = erLhcoreClassModelDepartament::getList();
				$ids = array_keys($departments);
				$id = array_shift($ids);
				$chat->dep_id = $id;

				// Store chat
				erLhcoreClassChat::getSession()->save($chat);

				$chatbox->chat_id = $chat->id;
				$chatbox->saveThis();

				return $chatbox;
			} else {
				return array_shift($items);
			}
    	}
    }

    public static function getVisitorName() {
    	if (isset($_SESSION['lhc_chatbox_nick'])) {
    		return $_SESSION['lhc_chatbox_nick'];
    	} else {
    		$_SESSION['lhc_chatbox_nick'] = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/chat','Visitor').'_'.mt_rand(0, 1000);
    		return $_SESSION['lhc_chatbox_nick'];
    	}
    }

    // Cleanup chats
    public static function cleanupChatbox($chat) {

    	$db = ezcDbInstance::get();
    	$stmt = $db->prepare('SELECT id FROM `lh_msg` WHERE chat_id = :chat_id ORDER BY id DESC LIMIT 30,1');
    	$stmt->bindValue(':chat_id',$chat->id);
    	$stmt->execute();
    	$msg_id = $stmt->fetchColumn();

    	if ($msg_id !== false) {
			$stmt = $db->prepare('DELETE FROM `lh_msg` WHERE id < :id AND chat_id = :chat_id');
    		$stmt->bindValue(':chat_id',$chat->id);
    		$stmt->bindValue(':id',$msg_id);
    		$stmt->execute();
    	}
    }

    public static function getList($paramsSearch = array(), $class = 'erLhcoreClassModelChatbox', $tableName = 'lh_chatbox')
    {
	       $paramsDefault = array('limit' => 32, 'offset' => 0);

	       $params = array_merge($paramsDefault,$paramsSearch);

	       $session = erLhcoreClassChatbox::getSession();
	       $q = $session->createFindQuery( $class );

	       $conditions = array();

	       if (!isset($paramsSearch['smart_select'])) {
			      if (isset($params['filter']) && count($params['filter']) > 0)
			      {
			           foreach ($params['filter'] as $field => $fieldValue)
			           {
			               $conditions[] = $q->expr->eq( $field, $q->bindValue($fieldValue) );
			           }
			      }

			      if (isset($params['filterin']) && count($params['filterin']) > 0)
			      {
			           foreach ($params['filterin'] as $field => $fieldValue)
			           {
			               $conditions[] = $q->expr->in( $field, $fieldValue );
			           }
			      }

			      if (isset($params['filterlt']) && count($params['filterlt']) > 0)
			      {
			           foreach ($params['filterlt'] as $field => $fieldValue)
			           {
			               $conditions[] = $q->expr->lt( $field, $q->bindValue($fieldValue) );
			           }
			      }

			      if (isset($params['filtergt']) && count($params['filtergt']) > 0)
			      {
			           foreach ($params['filtergt'] as $field => $fieldValue)
			           {
			               $conditions[] = $q->expr->gt( $field,$q->bindValue( $fieldValue ));
			           }
			      }

			      if (isset($params['customfilter']) && count($params['customfilter']) > 0)
			      {
				      	foreach ($params['customfilter'] as $fieldValue)
				      	{
				      		$conditions[] = $fieldValue;
				      	}
			      }

			      if (count($conditions) > 0)
			      {
			          $q->where(
			                     $conditions
			          );
			      }

				 if (isset($params['use_index'])) {
		      		$q->useIndex( $params['use_index'] );
		      	 }

			      $q->limit($params['limit'],$params['offset']);

			      $q->orderBy(isset($params['sort']) ? $params['sort'] : 'id DESC' );
	      } else {

		      	$q2 = $q->subSelect();
		      	$q2->select( 'id' )->from( $tableName );

		      	if (isset($params['filter']) && count($params['filter']) > 0)
		      	{
		      		foreach ($params['filter'] as $field => $fieldValue)
		      		{
		      			$conditions[] = $q2->expr->eq( $field, $q->bindValue($fieldValue) );
		      		}
		      	}

		      	if (isset($params['filterin']) && count($params['filterin']) > 0)
		      	{
		      		foreach ($params['filterin'] as $field => $fieldValue)
		      		{
		      			$conditions[] = $q2->expr->in( $field, $fieldValue );
		      		}
		      	}

		      	if (isset($params['filterlt']) && count($params['filterlt']) > 0)
		      	{
		      		foreach ($params['filterlt'] as $field => $fieldValue)
		      		{
		      			$conditions[] = $q2->expr->lt( $field, $q->bindValue($fieldValue) );
		      		}
		      	}

		      	if (isset($params['filterlte']) && count($params['filterlte']) > 0)
		      	{
		      		foreach ($params['filterlte'] as $field => $fieldValue)
		      		{
		      			$conditions[] = $q2->expr->lte( $field, $q->bindValue($fieldValue) );
		      		}
		      	}

		      	if (isset($params['filtergt']) && count($params['filtergt']) > 0)
		      	{
		      		foreach ($params['filtergt'] as $field => $fieldValue)
		      		{
		      			$conditions[] = $q2->expr->gt( $field,$q->bindValue( $fieldValue) );
		      		}
		      	}

		      	if (isset($params['filtergte']) && count($params['filtergte']) > 0)
		      	{
		      		foreach ($params['filtergte'] as $field => $fieldValue)
		      		{
		      			$conditions[] = $q2->expr->gte( $field,$q->bindValue( $fieldValue) );
		      		}
		      	}

		      	if (isset($params['customfilter']) && count($params['customfilter']) > 0)
		      	{
		      		foreach ($params['customfilter'] as $fieldValue)
		      		{
		      			$conditions[] = $fieldValue;
		      		}
		      	}


		      	if (count($conditions) > 0)
		      	{
		      		$q2->where(
		      				$conditions
		      		);
		      	}

		      	if (isset($params['use_index'])) {
		      		$q2->useIndex( $params['use_index'] );
		      	}

		      	$q2->limit($params['limit'],$params['offset']);
		      	$q2->orderBy(isset($params['sort']) ? $params['sort'] : 'id DESC');

		      	$q->innerJoin( $q->alias( $q2, 'items' ), $tableName . '.id', 'items.id' );
		      	$q->orderBy(isset($params['sort']) ? $params['sort'] : 'id DESC' );
	      }

	      $objects = $session->find( $q );

	      return $objects;
    }



    public static function getCount($params = array(), $table = 'lh_chatbox', $operation = 'COUNT(id)')
    {
    	$session = erLhcoreClassChatbox::getSession();
    	$q = $session->database->createSelectQuery();
    	$q->select( $operation )->from( $table );
    	$conditions = array();

    	if (isset($params['filter']) && count($params['filter']) > 0)
    	{
    		foreach ($params['filter'] as $field => $fieldValue)
    		{
    			$conditions[] = $q->expr->eq( $field, $q->bindValue($fieldValue) );
    		}
    	}

    	if (isset($params['filterin']) && count($params['filterin']) > 0)
    	{
    		foreach ($params['filterin'] as $field => $fieldValue)
    		{
    			$conditions[] = $q->expr->in( $field, $fieldValue );
    		}
    	}

    	if (isset($params['filterlt']) && count($params['filterlt']) > 0)
    	{
    		foreach ($params['filterlt'] as $field => $fieldValue)
    		{
    			$conditions[] = $q->expr->lt( $field, $q->bindValue($fieldValue) );
    		}
    	}

    	if (isset($params['filtergt']) && count($params['filtergt']) > 0)
    	{
    		foreach ($params['filtergt'] as $field => $fieldValue)
    		{
    			$conditions[] = $q->expr->gt( $field,$q->bindValue( $fieldValue ));
    		}
    	}

    	if (isset($params['customfilter']) && count($params['customfilter']) > 0)
    	{
    		foreach ($params['customfilter'] as $fieldValue)
    		{
    			$conditions[] = $fieldValue;
    		}
    	}

    	if ( count($conditions) > 0 )
    	{
	    	$q->where( $conditions );
    	}

    	if (isset($params['use_index'])) {
    		$q->useIndex( $params['use_index'] );
    	}

    	$stmt = $q->prepare();
    	$stmt->execute();
    	$result = $stmt->fetchColumn();

    	return $result;
    }

   public static function generateHash()
   {
       return sha1(mt_rand().time());
   }

   public static function getSession()
   {
        if ( !isset( self::$persistentSession ) )
        {
            self::$persistentSession = new ezcPersistentSession(
                ezcDbInstance::get(),
                new ezcPersistentCodeManager( './pos/lhchatbox' )
            );
        }
        return self::$persistentSession;
   }

   private static $persistentSession;
}

?>