(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2:function(a,l){var o={cancelcolorbox:function(){$("#myModal").foundation("reveal","close")},initializeModal:function(a){var l=null!=a?a:"myModal";if(0==$("#"+l).length){(0==$("#widget-layout").length?$("body"):$("#widget-layout")).prepend('<div id="'+l+'" style="padding-right:0px !important;" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"></div>')}},revealModal:function(a){var l=!1;$("body").hasClass("modal-open")?(l=!0,$("#myModal").modal("hide")):$("#myModal").modal("dispose"),o.initializeModal("myModal");var d={show:!0,focus:!($("#admin-body").length>0),backdrop:!($("#admin-body").length>0)};if(void 0===a.iframe)void 0!==a.loadmethod&&"post"==a.loadmethod?jQuery.post(a.url,a.datapost,(function(e){!1===l?(void 0!==a.showcallback&&$("#myModal").on("shown.bs.modal",a.showcallback),void 0!==a.hidecallback&&$("#myModal").on("hide.bs.modal",a.hidecallback),$("#myModal").html(e).modal(d),o.setCenteredDraggable()):setTimeout((function(){$("#myModal").modal("dispose"),void 0!==a.showcallback&&$("#myModal").on("shown.bs.modal",a.showcallback),void 0!==a.hidecallback&&$("#myModal").on("hide.bs.modal",a.hidecallback),$("#myModal").html(e).modal(d),o.setCenteredDraggable()}),500)})):jQuery.get(a.url,(function(e){!1===l?(void 0!==a.showcallback&&$("#myModal").on("shown.bs.modal",a.showcallback),void 0!==a.hidecallback&&$("#myModal").on("hide.bs.modal",a.hidecallback),$("#myModal").html(e).modal(d),o.setCenteredDraggable()):setTimeout((function(){$("#myModal").modal("dispose"),void 0!==a.showcallback&&$("#myModal").on("shown.bs.modal",a.showcallback),void 0!==a.hidecallback&&$("#myModal").on("hide.bs.modal",a.hidecallback),$("#myModal").html(e).modal(d),o.setCenteredDraggable()}),500)}));else{var e="",i="";void 0===a.hideheader?e='<div class="modal-header"><h4 class="modal-title" id="myModalLabel"><span class="material-icons">info</span>'+(void 0===a.title?"":a.title)+'</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>':i=(void 0===a.title?"":"<b>"+a.title+"</b>")+'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';var t=void 0===a.modalbodyclass?"":" "+a.modalbodyclass;$("#myModal").html('<div class="modal-dialog modal-dialog-scrollable modal-xl"><div class="modal-content">'+e+'<div class="modal-body'+t+'">'+i+'<iframe src="'+a.url+'" frameborder="0" style="width:100%" height="'+a.height+'" /></div></div></div>').modal(d),o.setCenteredDraggable(),void 0!==a.showcallback&&$("#myModal").on("shown.bs.modal",a.showcallback),void 0!==a.hidecallback&&$("#myModal").on("hide.bs.modal",a.hidecallback)}},setCenteredDraggable:function(){if($("#admin-body").length>0){var a=$("#myModal .modal-dialog"),l=o.getPositions();a.draggabilly({handle:".modal-header"}).css({top:(l.height-a.height())/2,left:(l.width-a.width())/2})}},getPositions:function(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight||0}}};a.exports=o}}]);