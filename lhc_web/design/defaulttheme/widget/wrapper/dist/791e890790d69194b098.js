"use strict";(self.webpackChunkLiveHelperChat=self.webpackChunkLiveHelperChat||[]).push([[213],{7213:function(t,e,s){s.r(e),s.d(e,{msgSnippetWidget:function(){return h}});var i=s(5671),n=s(3144),o=(s(7761),s(3031)),a=s(2137),h=function(){function t(e){(0,i.Z)(this,t),this.attributes={},this.hidden=!1,this.widgetOpen=!1,this.invitationOpen=!1,this.nhOpen=!1,this.msop=null,this.msg=null,this.cont=new o.a((e||"lhc")+"_msgsnippet_widget_v2",a.a.getAbstractStyle({zindex:"2147483639",width:"300px",height:"200px",position:"fixed",display:"none"}),{translate:"no"},"iframe"),this.loadStatus={main:!1,theme:!1,status:!1}}return(0,n.Z)(t,[{key:"checkLoadStatus",value:function(){1==this.loadStatus.theme&&1==this.loadStatus.main&&1==this.loadStatus.status&&(this.cont.elmDomDoc.body.style.display="",this.fitContent())}},{key:"renderBody",value:function(){var t=this;if(this.cont.tmpl=this.msg.replace("{dev_type}",!0===this.attributes.isMobile?"lhc-mobile":"lhc-desktop").replace("{msg_body}",this.settings.msg_body).replace("{operator_profile}",this.settings.operator_profile),this.cont.bodyId="msgsnippet",null===this.cont.constructUIIframe("",this.attributes.staticJS.dir))return null;this.cont.elmDomDoc.body.style.display="none",this.cont.elmDom.className+=!0===this.attributes.isMobile?" notranslate lhc-mobile":" notranslate lhc-desktop",this.cont.attachUserEventListener("click",(function(e){t.attributes.eventEmitter.emitEvent("msgSnippetClicked",[{event:e,sender:"closeButton"}]),t.attributes.eventEmitter.emitEvent("showWidget",[{event:e}])}),"start-chat-btn","msgsnippetstart");var e=this;this.cont.attachUserEventListener("click",(function(s){t.attributes.eventEmitter.emitEvent("msgsnippetClosed",[{sender:"closeButton"}]),s.stopPropagation(),e.hide(!0)}),"close-need-help-btn","msgsnippetclose"),this.cont.insertCssRemoteFile({onload:function(){t.loadStatus.main=!0,t.checkLoadStatus()},crossOrigin:"anonymous",href:this.attributes.staticJS.widget_css},!0),1==this.attributes.isMobile&&this.cont.insertCssRemoteFile({crossOrigin:"anonymous",href:this.attributes.staticJS.widget_mobile_css}),this.attributes.theme?this.cont.insertCssRemoteFile({onload:function(){t.loadStatus.theme=!0,t.checkLoadStatus()},id:"lhc-theme-msgsnippet",crossOrigin:"anonymous",href:this.attributes.LHC_API.args.lhc_base_url+"/widgetrestapi/theme/"+this.attributes.theme+"?v="+this.attributes.theme_v},!0):(this.loadStatus.theme=!0,this.checkLoadStatus()),this.attributes.sload.subscribe((function(e){e&&(t.loadStatus.status=!0,t.checkLoadStatus())})),this.attributes.eventEmitter.emitEvent("showMsgSnippet",[{sender:"closeButton"}]),this.attributes.eventEmitter.addListener("unread_message",(function(e){e.msop&&(e.msop==t.msop&&e.msg_body?t.showSnippet(e,!0):(t.msop=e.msop,a.a.makeRequest(t.attributes.LHC_API.args.lhc_base_url+t.attributes.lang+"widgetrestapi/getmessagesnippet",{params:t.attributes.userSession.getSessionAttributes()},(function(e){t.msop=e.msop,t.msg=e.msg,t.showSnippet(e,!0)}))))})),this.attributes.eventEmitter.addListener("hide_msg_snippet",(function(){t.hide(!0)})),this.attributes.widgetStatus.subscribe((function(e){1==e?(t.widgetOpen=!0,t.hide(!0)):(t.widgetOpen=!1,t.show())})),this.attributes.eventEmitter.addListener("reloadWidget",(function(){t.cont.insertCssRemoteFile({onload:function(){t.loadStatus.theme=!0,t.checkLoadStatus()},id:"lhc-theme-msgsnippet",crossOrigin:"anonymous",href:t.attributes.LHC_API.args.lhc_base_url+"/widgetrestapi/theme/"+t.attributes.theme+"?v="+Date.now()},!0)}))}},{key:"init",value:function(t,e){var s=this;this.attributes=t,this.settings=e,this.settings.msg&&(this.msg=this.settings.msg),this.settings.msop&&(this.msop=this.settings.msop),!this.msg||this.settings.msop&&this.msop!==this.settings.msop?a.a.makeRequest(this.attributes.LHC_API.args.lhc_base_url+this.attributes.lang+"widgetrestapi/getmessagesnippet",{params:this.attributes.userSession.getSessionAttributes()},(function(t){s.msop=t.msop,s.msg=t.msg,s.settings.operator_profile=t.operator_profile,s.renderBody()})):this.renderBody()}},{key:"hide",value:function(t){void 0!==t&&!0===t&&(this.hidden=!0),this.cont.hide(),1==this.nhOpen&&this.attributes.eventEmitter.emitEvent("msgSnippetHide",[]),this.attributes.msgsnippet_status.next(!1),this.nhOpen=!1}},{key:"showSnippet",value:function(t,e){1==e&&(this.hidden=!1,this.show()),this.cont.elmDomDoc.getElementById("messages-scroll").innerHTML=t.msg_body,t.operator_profile&&(this.cont.elmDomDoc.getElementById("operator-profile-snippet").innerHTML=t.operator_profile),this.fitContent()}},{key:"fitContent",value:function(){var t=this.cont.elmDomDoc.getElementById("messages-scroll").offsetHeight,e={bottom:70+this.attributes.widgetDimesions.value.wbottom-(91-t)+"px",right:65+this.attributes.widgetDimesions.value.wright+"px"};"bottom_left"==this.attributes.position_placement||"full_height_left"==this.attributes.position_placement?e={bottom:70+this.attributes.widgetDimesions.value.wbottom-(91-t)+"px",left:65+this.attributes.widgetDimesions.value.wright+"px"}:"middle_left"==this.attributes.position_placement?e={bottom:"calc(50% + 35px)",left:65+this.attributes.widgetDimesions.value.wright+"px"}:"middle_right"==this.attributes.position_placement&&(e={bottom:"calc(50% + 35px)",right:65+this.attributes.widgetDimesions.value.wright+"px"}),this.cont.massRestyle(e)}},{key:"show",value:function(){1!=this.hidden&&1!=this.widgetOpen&&1!=this.invitationOpen&&0!=this.attributes.onlineStatus.value&&(!1===this.attributes.hideOffline?(this.cont.show(),0==this.nhOpen&&(this.attributes.eventEmitter.emitEvent("msgSnippetShow",[]),this.attributes.msgsnippet_status.next(!0)),this.nhOpen=!0):(this.cont.hide(),1==this.nhOpen&&(this.attributes.eventEmitter.emitEvent("msgSnippetHide",[]),this.attributes.msgsnippet_status.next(!1)),this.nhOpen=!1))}}]),t}()}}]);
//# sourceMappingURL=791e890790d69194b098.js.map