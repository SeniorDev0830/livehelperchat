<?
/**
 * Msg
 * Status - 
 * 0 - Pending delivery
 * 1 - Delivered
 * 
 * user_id - administartor user_id,
 * If 0 web user
 * 
 * */

class erLhcoreClassModelmsg {
        
   public function getState()
   {
       return array(
               'id'         => $this->id,
               'msg'        => $this->msg,
               'status'     => $this->status,
               'time'       => $this->time,
               'chat_id'    => $this->chat_id,
               'user_id'    => $this->user_id,
               'name_support'    => $this->name_support
              );
   }
   
   public function setState( array $properties )
   {
       foreach ( $properties as $key => $val )
       {
           $this->$key = $val;
       }
   }
         
    public $id = null;
    public $nick = '';
    public $status = 0;
    public $time = '';
    public $chat_id = null;
    public $user_id = null;
    public $name_support = '';
}

?>