(self.webpackChunk=self.webpackChunk||[]).push([[737],{737:e=>{var t={cancelcolorbox:function(){$("#myModal").foundation("reveal","close")},initializeModal:function(e){var t=null!=e?e:"myModal";0==$("#"+t).length&&(0==$("#widget-layout").length?$("body"):$("#widget-layout")).prepend('<div id="'+t+'" class="modal bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"></div>')},hideCallback:!1,modalInstance:null,previousHideListener:null,previousShowListener:null,revealModal:function(e){t.modalInstance&&t.modalInstance.hide(),void 0!==e.hidecallback?t.hideCallback=!0:t.hideCallback=!1,t.initializeModal("myModal");var o={show:!0,focus:!($("#admin-body").length>0),backdrop:!($("#admin-body").length>0)||void 0!==e.backdrop&&1==e.backdrop};if(void 0===e.iframe)void 0!==e.loadmethod&&"post"==e.loadmethod?jQuery.post(e.url,e.datapost,(function(a){$("#myModal").html(a),t.modalInstance=new bootstrap.Modal("#myModal",o),t.setShowHideCallbacks(e),t.modalInstance.show(),t.setCenteredDraggable()})):jQuery.get(e.url,(function(a){$("#myModal").html(a),t.modalInstance=new bootstrap.Modal("#myModal",o),t.setShowHideCallbacks(e),t.modalInstance.show(),t.setCenteredDraggable()}));else{var a="",l="";void 0===e.hideheader?a='<div class="modal-header"><h4 class="modal-title" id="myModalLabel"><span class="material-icons">info</span>'+(void 0===e.title?"":e.title)+'</h4><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>':l=(void 0===e.title?"":"<b>"+e.title+"</b>")+'<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';var d=void 0===e.modalbodyclass?"":" "+e.modalbodyclass;$("#myModal").html('<div class="modal-dialog modal-dialog-scrollable modal-xl"><div class="modal-content">'+a+'<div class="modal-body'+d+'">'+l+'<iframe src="'+e.url+'" frameborder="0" style="width:100%" height="'+e.height+'" /></div></div></div>'),t.modalInstance=new bootstrap.Modal("#myModal",o),t.setShowHideCallbacks(e),t.modalInstance.show(),t.setCenteredDraggable()}},setShowHideCallbacks:function(e){t.previousHideListener&&document.getElementById("myModal")&&(document.getElementById("myModal").removeEventListener("hide.bs.modal",t.previousHideListener),t.previousHideListener=null),t.previousShowListener&&document.getElementById("myModal")&&(document.getElementById("myModal").removeEventListener("show.bs.modal",t.previousShowListener),t.previousShowListener=null),void 0!==e.showcallback&&document.getElementById("myModal")&&(document.getElementById("myModal").addEventListener("show.bs.modal",e.showcallback),t.previousShowListener=e.showcallback),void 0!==e.hidecallback&&document.getElementById("myModal")&&(t.previousHideListener=e.hidecallback,document.getElementById("myModal").addEventListener("hide.bs.modal",e.hidecallback))},setCenteredDraggable:function(){if($("#admin-body").length>0&&!$("html").attr("data-mobile")){var e=$("#myModal .modal-dialog"),o=t.rememberPositions(),a=t.getPositions();(null===o||parseInt(o[1])>a.width||parseInt(o[0])>a.height||parseInt(o[0])<0||e.width()+parseInt(o[1])<0)&&(o=[(a.height-e.height())/2,(a.width-e.width())/2]),e.draggabilly({handle:".modal-header",containment:"#admin-body"}).css({top:parseInt(o[0]),left:parseInt(o[1])}).on("dragEnd",(function(o,a){t.rememberPositions(e.position().top,e.position().left)}))}},rememberPositions:function(e,t){if(sessionStorage)if(e&&t)try{var o=sessionStorage.setItem("mpos",e+","+t)}catch(e){}else try{if(null!==(o=sessionStorage.getItem("mpos")))return o.split(",")}catch(e){}return null},getPositions:function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0}}};e.exports=t}}]);