(window.webpackJsonpLiveHelperChat=window.webpackJsonpLiveHelperChat||[]).push([[2],{30:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.needhelpWidget=void 0;var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),n=(i(3),i(4)),o=i(1);e.needhelpWidget=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.attributes={},this.hidden=!1,this.widgetOpen=!1,this.invitationOpen=!1,this.nhOpen=!1,this.cont=new n.UIConstructorIframe("lhc_needhelp_widget_v2",o.helperFunctions.getAbstractStyle({zindex:"2147483640",width:"320px",height:"135px",position:"fixed",display:"none",bottom:"70px",right:"45px"}),null,"iframe"),this.loadStatus={main:!1,theme:!1,status:!1}}return s(t,[{key:"checkLoadStatus",value:function(){console.log(this.loadStatus),1==this.loadStatus.theme&&1==this.loadStatus.main&&1==this.loadStatus.status&&(this.cont.elmDomDoc.body.style.display="")}},{key:"init",value:function(t,e){var i=this;this.attributes=t,(this.attributes.widgetDimesions.value.wbottom>0||this.attributes.widgetDimesions.value.wright>0)&&this.cont.massRestyle({bottom:70+this.attributes.widgetDimesions.value.wbottom+"px",right:45+this.attributes.widgetDimesions.value.wright+"px"}),this.cont.tmpl=e.html.replace("{dev_type}",!0===this.attributes.isMobile?"lhc-mobile":"lhc-desktop"),this.cont.bodyId="need-help",this.cont.constructUIIframe(""),this.cont.elmDomDoc.body.style.display="none",this.cont.elmDom.className+=!0===this.attributes.isMobile?" lhc-mobile":" lhc-desktop",this.cont.attachUserEventListener("click",(function(e){t.eventEmitter.emitEvent("nhClicked",[{sender:"closeButton"}]),t.eventEmitter.emitEvent("showWidget",[{sender:"closeButton"}])}),"start-chat-btn","nhstrt");var s=this;this.cont.attachUserEventListener("click",(function(e){t.eventEmitter.emitEvent("nhClosed",[{sender:"closeButton"}]),e.stopPropagation(),s.hide(!0)}),"close-need-help-btn","nhcls"),e.dimensions&&this.cont.massRestyle(e.dimensions),this.cont.insertCssRemoteFile({onload:function(){i.loadStatus.main=!0,i.checkLoadStatus()},crossOrigin:"anonymous",href:this.attributes.staticJS.widget_css},!0),1==this.attributes.isMobile&&this.cont.insertCssRemoteFile({crossOrigin:"anonymous",href:this.attributes.staticJS.widget_mobile_css}),this.attributes.theme>0?this.cont.insertCssRemoteFile({onload:function(){i.loadStatus.theme=!0,i.checkLoadStatus()},crossOrigin:"anonymous",href:LHC_API.args.lhc_base_url+"/widgetrestapi/themeneedhelp/"+this.attributes.theme+"?v="+this.attributes.theme_v},!0):(this.loadStatus.theme=!0,this.checkLoadStatus()),t.sload.subscribe((function(t){t&&(console.log("status"),i.loadStatus.status=!0,i.checkLoadStatus())})),t.eventEmitter.addListener("showInvitation",(function(){i.invitationOpen=!0,i.hide()})),t.eventEmitter.addListener("chatStarted",(function(){i.hide(!0)})),t.eventEmitter.addListener("hideInvitation",(function(){i.invitationOpen=!1,i.show()})),t.eventEmitter.addListener("cancelInvitation",(function(){i.invitationOpen=!1,i.show()})),setTimeout((function(){t.widgetStatus.subscribe((function(t){1==t?(i.widgetOpen=!0,i.hide()):(i.widgetOpen=!1,i.show())})),t.onlineStatus.subscribe((function(t){if(0==t){var e=i.hidden;i.hide(),!1===e&&(i.hidden=!1)}else i.show()}))}),e.delay)}},{key:"hide",value:function(t){void 0!==t&&!0===t&&(this.attributes.userSession.hnh=Math.round(Date.now()/1e3),this.attributes.storageHandler.storeSessionInformation(this.attributes.userSession.getSessionAttributes()),this.hidden=!0),this.cont.hide(),1==this.nhOpen&&this.attributes.eventEmitter.emitEvent("nhHide",[]),this.nhOpen=!1}},{key:"show",value:function(){1!=this.hidden&&1!=this.widgetOpen&&1!=this.invitationOpen&&0!=this.attributes.onlineStatus.value&&(!1===this.attributes.hideOffline?(this.cont.show(),0==this.nhOpen&&this.attributes.eventEmitter.emitEvent("nhShow",[]),this.nhOpen=!0):(this.cont.hide(),1==this.nhOpen&&this.attributes.eventEmitter.emitEvent("nhHide",[]),this.nhOpen=!1))}}]),t}()}}]);