(window.webpackJsonpLiveHelperChat=window.webpackJsonpLiveHelperChat||[]).push([[4],{29:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.analyticEvents=void 0;var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),_domEventsHandler=__webpack_require__(2),_helperFunctions=__webpack_require__(1);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _analyticEvents=function(){function _analyticEvents(){_classCallCheck(this,_analyticEvents),this.params={}}return _createClass(_analyticEvents,[{key:"setParams",value:function(e,t){this.params=e,this.attributes=t,this.initMonitoring()}},{key:"initMonitoring",value:function initMonitoring(){var _this=this;this.params.ga.events.forEach((function(item){_this.attributes.eventEmitter.addListener(item.ev,(function(params){if("hideInvitation"!=item.ev||void 0===params||!params.full){var label=item.el;if("showInvitation"!=item.ev&&"readInvitation"!=item.ev&&"fullInvitation"!=item.ev&&"cancelInvitation"!=item.ev||void 0===params||!params.name){if("botTrigger"==item.ev)return void 0!==params&&params.trigger&&params.trigger.length>0?void params.trigger.forEach((function(triggerLabel){var js=_this.params.ga.js.replace("{{eventCategory}}",JSON.stringify(item.ec)).replace("{{eventAction}}",JSON.stringify(item.ea)).replace("{{eventLabel}}",JSON.stringify(triggerLabel)).replace("{{eventInternal}}",JSON.stringify(item.ev));try{eval(js)}catch(e){console.log(e)}})):void 0}else label=label||params.name;var js=_this.params.ga.js.replace(/\{\{eventCategory\}\}/g,JSON.stringify(item.ec)).replace(/\{\{eventAction\}\}/g,JSON.stringify(item.ea)).replace(/\{\{eventLabel\}\}/g,JSON.stringify(label)).replace(/\{\{eventInternal\}\}/g,JSON.stringify(item.ev));console.log(js);try{eval(js)}catch(e){console.log(e)}}}))}))}}]),_analyticEvents}(),analyticEvents=new _analyticEvents;exports.analyticEvents=analyticEvents}}]);