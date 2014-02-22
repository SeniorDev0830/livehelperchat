<div class="text-center">
<ul class="bb-list inline-list">	
	<li><a href="#" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/bbcodeinsert','Image');?>" class="icon-picture" data-bb-code=" [img]<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/bbcodeinsert','Link title image');?>[/img] "></a></li>
	<li><a href="#" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/bbcodeinsert','Link');?>" class="icon-link" data-bb-code=" [url=http://example.com]<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/bbcodeinsert','Link title');?>[/url] "></a></li>
	<li><a href="#" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/bbcodeinsert','Bold');?>" data-bb-code=" [b][/b] "><strong>B</strong></a></li>
	<li><a href="#" title="<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/bbcodeinsert','Italic');?>" data-bb-code=" [i][/i] "><em>I</em></a></li>
	<li><a href="#" data-bb-code=" :) "><img src="<?php echo erLhcoreClassDesign::design('images/smileys/emoticon_smile.png');?>" alt=":)" title=":)" /></a></li>
	<li><a href="#" data-bb-code=" :D: "><img src="<?php echo erLhcoreClassDesign::design('images/smileys/emoticon_happy.png');?>" alt=":D:" title=":D:" /></a></li>
	<li><a href="#" data-bb-code=" :( "><img src="<?php echo erLhcoreClassDesign::design('images/smileys/emoticon_unhappy.png');?>" alt=":(" title=":(" /></a></li>
	<li><a href="#" data-bb-code=" :o: "><img src="<?php echo erLhcoreClassDesign::design('images/smileys/emoticon_surprised.png');?>" alt=":o:" title=":o:" /></a></li>
	<li><a href="#" data-bb-code=" :p: "><img src="<?php echo erLhcoreClassDesign::design('images/smileys/emoticon_tongue.png');?>" alt=":p:" title=":p:" /></a></li>
	<li><a href="#" data-bb-code=" ;) "><img src="<?php echo erLhcoreClassDesign::design('images/smileys/emoticon_wink.png');?>" alt=";)" title=";)" /></a></li>
</ul>
<script>$('.bb-list a').click(function(){
	var caretPos = document.getElementById("CSChatMessage").selectionStart;
    var textAreaTxt = jQuery("#CSChatMessage").val();
    var txtToAdd = $(this).attr('data-bb-code');
    jQuery("#CSChatMessage").val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );   
    $('#bbcodeReveal').foundation('reveal', 'close');
    return false; 
});</script>
<a class="close-reveal-modal">&#215;</a>
</div>