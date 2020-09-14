

var revealM = {
		cancelcolorbox : function() {
			$('#myModal').foundation('reveal', 'close');
		},

		initializeModal : function(selector) {
			var modelSelector = selector != undefined ? selector : 'myModal';
			if ($('#'+modelSelector).length == 0) {

				var prependTo = null;
				if ($('#widget-layout').length == 0) {
					prependTo = $('body');
				} else {
					prependTo = $('#widget-layout');
				};
				prependTo.prepend('<div id="'+modelSelector+'" style="padding-right:0px !important;" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"></div>');
			};
		},

		revealModal : function(params) {

			var delayShow = false;
			if ($('body').hasClass('modal-open')) {
				delayShow = true;
				$('#myModal').modal('hide');
			} else {
				$('#myModal').modal('dispose');
			}

			revealM.initializeModal('myModal');

            var mparams = {'show':true, 'focus': !($('#admin-body').length > 0), 'backdrop': !($('#admin-body').length > 0)};

			if (typeof params['iframe'] === 'undefined') {

				if (typeof params['loadmethod'] !== 'undefined' && params['loadmethod'] == 'post')
				{
					jQuery.post(params['url'], params['datapost'], function(data){
						if (delayShow === false) {
							if (typeof params['showcallback'] !== 'undefined') {
								$('#myModal').on('shown.bs.modal',params['showcallback']);
							}

							if (typeof params['hidecallback'] !== 'undefined') {
								$('#myModal').on('hide.bs.modal',params['hidecallback']);
							}

							$('#myModal').html(data).modal(mparams);

                            revealM.setCenteredDraggable();

						} else {
							setTimeout(function(){
								$('#myModal').modal('dispose');
								
								if (typeof params['showcallback'] !== 'undefined') {
									$('#myModal').on('shown.bs.modal',params['showcallback']);
								}

								if (typeof params['hidecallback'] !== 'undefined') {
									$('#myModal').on('hide.bs.modal',params['hidecallback']);
								}

								$('#myModal').html(data).modal(mparams);

                                revealM.setCenteredDraggable();

							},500);
						}
					});
				} else {
					jQuery.get(params['url'], function(data){

						if (delayShow === false) {

							if (typeof params['showcallback'] !== 'undefined') {
								$('#myModal').on('shown.bs.modal',params['showcallback']);
							}

							if (typeof params['hidecallback'] !== 'undefined') {
								$('#myModal').on('hide.bs.modal',params['hidecallback']);
							}

							$('#myModal').html(data).modal(mparams);

                            revealM.setCenteredDraggable();

						} else {
							setTimeout(function(){
								$('#myModal').modal('dispose');

								if (typeof params['showcallback'] !== 'undefined') {
									$('#myModal').on('shown.bs.modal',params['showcallback']);
								}

								if (typeof params['hidecallback'] !== 'undefined') {
									$('#myModal').on('hide.bs.modal',params['hidecallback']);
								}


								$('#myModal').html(data).modal(mparams);

                                revealM.setCenteredDraggable();

							},500);
						}
					});
				}
			} else {
				var header = '';
				var prependeBody = '';
				if (typeof params['hideheader'] === 'undefined') {
					header = '<div class="modal-header"><h4 class="modal-title" id="myModalLabel"><span class="material-icons">info</span>'+(typeof params['title'] === 'undefined' ? '' : params['title'])+'</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
				} else {
					prependeBody = (typeof params['title'] === 'undefined' ? '' : '<b>'+params['title']+'</b>') + '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
				}
				var additionalModalBody = typeof params['modalbodyclass'] === 'undefined' ? '' : ' '+params['modalbodyclass'];

				$('#myModal').html('<div class="modal-dialog modal-dialog-scrollable modal-xl"><div class="modal-content">'+header+'<div class="modal-body'+additionalModalBody+'">'+prependeBody+'<iframe src="'+params['url']+'" frameborder="0" style="width:100%" height="'+params['height']+'" /></div></div></div>').modal(mparams);

                revealM.setCenteredDraggable();

				if (typeof params['showcallback'] !== 'undefined') {
					$('#myModal').on('shown.bs.modal',params['showcallback']);
				}

				if (typeof params['hidecallback'] !== 'undefined') {
					$('#myModal').on('hide.bs.modal',params['hidecallback']);
				}
			}
		},

        setCenteredDraggable : function(){
            if ($('#admin-body').length > 0) {
                var modalContent = $('#myModal .modal-dialog');
                var positions = revealM.getPositions();
                modalContent.draggabilly({
                    handle: ".modal-header"
                }).css({
                    top: ((positions.height - modalContent.height()) / 2),
                    left: ((positions.width - modalContent.width()) / 2)
                });
            }
        },

        getPositions : function() {
		    return {
		        width: (window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth
                    || 0),
                height: (window.innerHeight
                    || document.documentElement.clientHeight
                    || document.body.clientHeight
                    || 0)
            }
        }

};

module.exports = revealM;