"use strict";(self.webpackChunkLHCReactAPPAdmin=self.webpackChunkLHCReactAPPAdmin||[]).push([[707],{4707:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(885),i=a(4942),c=a(7294),s=a(9669),r=a.n(s),l=a(6793),o=a(9778);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){switch(t.type){case"attr":return-1===(i=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[i]=d(d({},e.chats[i]),t.value),e=d({},e));case"attr_remove":return-1===(i=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[i]=d(d({},e.chats[i]),t.value),e=d({},e));case"attr_remove_mail":return-1===(i=e.mails.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.mails[i]=d(d({},e.mails[i]),t.value),e=d({},e));case"update":return d(d({},e),t.value);case"add":if(-1===(i=e.chats.findIndex((function(e){return e.id==t.value.id}))))if(!0===t.static_order){var a=e.chats.findIndex((function(e){return e.id>t.value.id}));-1===a?e.chats.push(t.value):e.chats.splice(a,0,t.value)}else e.chats.unshift(t.value);else e.chats[i].active=!0,e.chats[i].mn=0,e.chats[i].support_chat=!1;return d({},e);case"add_mail":return-1===(i=e.mails.findIndex((function(e){return e.id==t.value.id})))?e.mails.unshift(t.value):e.mails[i].active=!0,d({},e);case"remove":return-1===(i=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(i,1),d({},e));case"remove_mail":return-1===(i=e.mails.findIndex((function(e){return e.id==t.id})))?e:(e.mails.splice(i,1),d({},e));case"update_chat":return-1===(i=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[i]=d(d({},e.chats[i]),t.value),d({},e));case"update_mail":return-1===(i=e.mails.findIndex((function(e){return e.id==t.id})))?e:(e.mails[i]=d(d({},e.mails[i]),t.value),d({},e));case"msg_received":if(-1===(i=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[i].msg=t.value.msg;var n=document.getElementById("chat-tab-link-"+t.id);return null!==n&&n.classList.contains("active")?e.chats[i].active=!0:e.chats[i].active=!1,e.chats[i].mn=0==e.chats[i].active?e.chats[i].mn?e.chats[i].mn+t.value.mn:t.value.mn:0,!1===t.static_order&&e.chats.splice(0,0,e.chats.splice(i,1)[0]),d({},e);case"refocus_mail":if(-1!==(i=e.chats.findIndex((function(e){return 1==e.active})))&&(e.chats[i].active=!1),-1!==(i=e.mails.findIndex((function(e){return 1==e.active})))){if(t.id==e.mails[i].id)return e;e.mails[i].active=!1}return-1!==(i=e.mails.findIndex((function(e){return e.id==t.id})))&&(e.mails[i].active=!0),d({},e);case"refocus":var i;if(-1!==(i=e.mails.findIndex((function(e){return 1==e.active})))&&(e.mails[i].active=!1),-1!==(i=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[i].id)return e;e.chats[i].active=!1}return-1!==(i=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[i].active=!0,e.chats[i].mn=0,e.chats[i].support_chat=!1),d({},e);case"group_offline":return e.group_offline=t.value,d({},e);default:throw new Error("Unknown action!")}}const f=function(e){var t=(0,c.useReducer)(m,{chats:[],mails:[],group_offline:!1}),a=(0,n.Z)(t,2),i=a[0],s=a[1],u=(0,c.useRef)(i);(0,c.useEffect)((function(){u.current=i}),[i]);var d=function(){var e=[];return i.chats.map((function(t,a){return e.push(t.id)})),e},f=function(e){r().get(WWW_DIR_JAVASCRIPT+"front/tabs/(id)/"+(void 0!==e?e.join("/"):d().join("/"))).then((function(e){e.data.map((function(e,t){var a=document.getElementById("node-js-indicator-"+e.id);null!==a&&(e.live_status="wifi"==a.textContent),s({type:"update_chat",id:e.id,value:e})}))}))},h=function(e){r().get(WWW_DIR_JAVASCRIPT+"front/tabs/(idmail)/"+(void 0!==e?e.join("/"):d().join("/"))).then((function(e){e.data.map((function(e,t){s({type:"update_mail",id:e.id,value:e})}))}))};document.getElementById("tabs")||(0,o.Z)((function(){i.chats&&0!=i.chats.length&&r().get(WWW_DIR_JAVASCRIPT+"front/tabs/(id)/"+d().join("/")).then((function(e){e.data.map((function(e,t){var a=document.getElementById("node-js-indicator-"+e.id);if(null!==a&&(e.live_status="wifi"==a.textContent),i.chats&&0!=i.chats.length){var n=i.chats.findIndex((function(t){return t.id==e.id}));-1!==n&&(i.chats[n].lmsg_id!==e.lmsg_id?e.mn=1:e.mn=i.chats[n].mn)}s({type:"update_chat",id:e.id,value:e})}))}))}),1e3),(0,c.useEffect)((function(){function t(t,a){a.focus&&(s({type:"attr_remove",id:!0,attr:"active",value:{active:!1}}),s({type:"attr_remove_mail",id:!0,attr:"active",value:{active:!1}})),s({type:"add",static_order:e.static_order,value:{id:t,active:a.focus}}),f([t])}function a(t,a){s({type:"add",value:{id:t,static_order:e.static_order,active:!1,mn:1}}),f([t])}function n(e){i(e)}function i(e,t){s({type:"attr_remove_mail",id:!0,attr:"active",value:{active:!1}}),s({type:"attr_remove",id:!0,attr:"active",value:{active:!1}}),s({type:"add_mail",value:{id:e.replace("mc",""),active:!0}}),h([e.replace("mc","")])}function c(e){s({type:"remove",id:e})}function r(e){s({type:"remove_mail",id:e.replace("mc","")})}function l(e){"string"!=typeof e||-1===e.indexOf("mc")?s({type:"refocus",id:e}):o(e.replace("mc",""))}function o(e){s({type:"refocus_mail",id:e})}function d(t){s({type:"group_offline",value:lhinst.hidenicknamesstatus}),Object.keys(t.result_status).map((function(e){s({type:"update_chat",id:t.result_status[e].chat_id,value:t.result_status[e]})})),"false"!==t.result&&Object.keys(t.result).map((function(a){s({type:"msg_received",id:t.result[a].chat_id,value:{msg:t.result[a].msg,mn:t.result[a].mn},order_chats:e.static_order})}))}function m(e){s({type:"update_chat",id:e.id,value:{tp:"true",tx:e.txt}})}function v(e){s({type:"update_chat",id:e.id,value:{tp:"false"}})}function _(e){s({type:"update_chat",id:e.id,value:{live_status:e.status}})}function b(e,t){var a=u.current.chats.findIndex((function(e){return 1==e.active}));-1!==a&&(u.current.chats.length-1>a&&0==t?p(u.current.chats[a+1]):a>0&&1==t&&p(u.current.chats[a-1]))}if(ee.addListener("chatStartTab",t),ee.addListener("chatTabPreload",(function(e,a){u.current.chats&&0!=u.current.chats.length&&-1!==u.current.chats.findIndex((function(t){return t.id==e}))||t(e,a)})),ee.addListener("chatStartBackground",a),ee.addListener("removeSynchroChat",c),ee.addListener("chatTabClicked",l),ee.addListener("chatTabFocused",l),ee.addListener("chatAdminSync",d),ee.addListener("supportUnreadChat",(function(e){e.id&&1==e.unread&&s({type:"update_chat",id:e.id,value:{support_chat:!0}})})),ee.addListener("nodeJsTypingVisitor",m),ee.addListener("nodeJsTypingVisitorStopped",v),ee.addListener("nodeJsVisitorStatus",_),ee.addListener("activateNextTab",b),ee.addListener("unloadMailChat",r),ee.addListener("mailChatTabLoaded",i),ee.addListener("mailChatTabClicked",o),ee.addListener("mailChatContentLoaded",n),localStorage){var g;if(null!==(g=localStorage.getItem("achat_id"))&&""!==g){var y=g.split(",").map(Number);1==e.static_order&&y.sort((function(e,t){return e-t}));var E=[];y.forEach((function(e){var t=document.getElementById("chat-tab-link-"+e);parseInt(e)>0&&E.push({id:parseInt(e),active:null!==t&&t.classList.contains("active")})})),s({type:"update",value:{chats:E}}),y.length>0&&f(y),setTimeout((function(){y.forEach((function(e){var t=document.getElementById("chat-tab-link-"+e);null!==t&&t.classList.contains("active")&&l(parseInt(e))}))}),1e3)}null!==(g=localStorage.getItem("machat_id"))&&""!==g&&(y=g.split(","),E=[],y.forEach((function(e){var t=document.getElementById("chat-tab-link-mc"+e);if(null!==t){var a=t.classList.contains("active");E.push({id:parseInt(e),active:a})}})),s({type:"update",value:{mails:E}}),y.length>0&&h(y),setTimeout((function(){y.forEach((function(e){var t=document.getElementById("chat-tab-link-mc"+e);null!==t&&t.classList.contains("active")&&o(parseInt(e))}))}),1e3))}return function(){ee.removeListener("chatStartTab",t),ee.removeListener("chatStartBackground",a),ee.removeListener("removeSynchroChat",c),ee.removeListener("chatTabClicked",l),ee.removeListener("chatTabFocused",l),ee.removeListener("chatAdminSync",d),ee.removeListener("supportUnreadChat",d),ee.removeListener("nodeJsTypingVisitor",m),ee.removeListener("nodeJsTypingVisitorStopped",v),ee.removeListener("nodeJsVisitorStatus",_),ee.removeListener("activateNextTab",b),ee.removeListener("unloadMailChat",r),ee.removeListener("mailChatTabLoaded",i),ee.removeListener("mailChatTabClicked",o),ee.removeListener("mailChatContentLoaded",n)}}),[]);var p=function(e){null!==document.getElementById("chat-tab-link-"+e.id)?($("#chat-tab-link-"+e.id).click(),new bootstrap.Tab(document.querySelector("#chat-tab-link-"+e.id)).show()):document.location=WWW_DIR_JAVASCRIPT+"front/default/(cid)/"+e.id+"/#!#chat-id-"+e.id},v=(0,l.$)("chat_tabs"),_=v.t;return v.i18n,c.createElement(c.Fragment,null,(!i.chats||0==i.chats.length)&&c.createElement("div",{className:"text-center text-muted p-2"},c.createElement("span",{className:"material-icons"},"chat"),_("chat_tabs.open_chats")),i.chats.map((function(e,t){return c.createElement("div",{title:e.id,onClick:function(){return p(e)},className:"p-1 action-image chat-tabs-row"+(e.active?" chat-tab-active":"")+(e.vwa?" long-response-chat":"")},c.createElement("div",{className:"fs12"},c.createElement("span",{className:"material-icons"+(1==e.pnd_rsp?" text-danger":" text-success")},1==e.pnd_rsp?"call_received":"call_made"),e.adicons&&e.adicons.map((function(t,a){return c.createElement("span",{onClick:function(a){return function(e,t,a){e.preventDefault(),e.stopPropagation(),t.has_popup&&lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"chat/icondetailed/"+a.id+"/"+t.icon_id})}(a,t,e)},style:{color:t.color},className:"material-icons",title:t.title},t.icon)})),e.aicons&&Object.keys(e.aicons).map((function(t,a){return c.createElement("span",{style:{color:e.aicons[t].c?e.aicons[t].c:"#1d548e;"},className:"material-icons",title:e.aicons[t].i},e.aicons[t].i)})),e.vwa&&c.createElement("span",{title:e.vwa,className:"material-icons text-danger"},"timer"),e.support_chat&&c.createElement("span",{className:"whatshot blink-ani text-warning material-icons"},"whatshot"),c.createElement("i",{className:"material-icons "+("boolean"==typeof e.live_status?!0===e.live_status?"icon-user-online":"icon-user-offline":2==e.us?"icon-user-away":0==e.us?"icon-user-online":"icon-user-offline")},"boolean"==typeof e.live_status?!0===e.live_status?"wifi":"wifi_off":2==e.us?"wifi_1_bar":0==e.us?"wifi":"wifi_off"),c.createElement("i",{className:"material-icons icon-user-online "+(1==e.um?"icon-user-offline":"icon-user-online")},"send"),e.cc&&c.createElement("img",{title:e.cn,src:e.cc,alt:""})," ",(0==i.group_offline||!(0!=e.us))&&c.createElement("span",{className:(e.mn>0||0==e.cs?"font-weight-bold ":"")+(0==e.cs?"text-danger":"")},e.nick||e.id),e.mn>0&&c.createElement("span",{className:"msg-nm ps-1"},"(",e.mn,")"),e.lmsg&&c.createElement("span",{className:"text-muted"}," ",e.lmsg),c.createElement("button",{type:"button",onClick:function(t){return function(e,t){e.preventDefault(),e.stopPropagation(),lhinst.removeDialogTab(t.id,$("#tabs"),!0),lhinst.channel&&lhinst.channel.postMessage({action:"close_chat",args:{chat_id:t.id}})}(t,e)},className:"float-end btn-link m-0 ms-1 p-0 btn btn-xs"},c.createElement("i",{className:"material-icons me-0"},"close")),e.dep&&c.createElement("span",{className:"float-end text-muted text-truncate mw-80px"},0==e.cs&&c.createElement("span",{title:_("chat_tabs.pending_status"),className:"material-icons chat-pending"},"chat"),1==e.cs&&c.createElement("span",{title:_("chat_tabs.active_status"),className:"material-icons chat-active"},"chat"),5==e.cs&&c.createElement("span",{title:_("chat_tabs.bot_status"),className:"material-icons chat-active"},"android"),2==e.cs&&c.createElement("span",{title:_("chat_tabs.closed_status"),className:"material-icons chat-closed"},"chat"),c.createElement("span",{className:"material-icons",title:e.dep},"home"),e.dep),e.co==confLH.user_id&&c.createElement("span",{className:"float-end text-muted"},c.createElement("span",{title:_("chat_tabs.chat_owner"),className:"material-icons"},"account_box"))),(e.msg||"true"==e.tp&&e.tx)&&c.createElement("div",{className:"fs13 text-muted pt-1"},c.createElement("span",{title:"true"==e.tp&&e.tx?e.tx:e.msg,className:"d-inline-block text-truncate mw-100 "+(e.mn>0?"font-weight-bold":"")+("true"==e.tp&&e.tx?" font-italic":"")},"true"==e.tp&&e.tx?e.tx:e.msg)))})),i.mails.map((function(e,t){return c.createElement("div",{title:e.id,onClick:function(){return function(e){$("#chat-tab-link-mc"+e.id).click(),new bootstrap.Tab(document.querySelector("#chat-tab-link-mc"+e.id)).show()}(e)},className:"p-1 action-image chat-tabs-row"+(e.active?" chat-tab-active":"")},c.createElement("div",{className:"fs12"},c.createElement("span",{title:e.from_name},c.createElement("i",{className:"material-icons"},"mail_outline"),e.from_address),c.createElement("button",{type:"button",onClick:function(t){return function(e,t){e.preventDefault(),e.stopPropagation(),lhinst.removeDialogTabMail("mc"+t.id,$("#tabs"),!0)}(t,e)},className:"float-end btn-link m-0 ms-1 p-0 btn btn-xs"},c.createElement("i",{className:"material-icons me-0"},"close")),e.dep&&c.createElement("span",{className:"float-end text-muted text-truncate mw-80px"},c.createElement("span",{className:"material-icons"},"home"),e.dep),e.co==confLH.user_id&&c.createElement("span",{className:"float-end text-muted"},c.createElement("span",{title:_("chat_tabs.chat_owner"),className:"material-icons"},"account_box"))),c.createElement("span",{title:e.nick,className:"fs13 text-muted pt-1 d-inline-block text-truncate mw-100"},e.nick))})))}},9778:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const i=function(e,t){var a=(0,n.useRef)();(0,n.useEffect)((function(){a.current=e}),[e]),(0,n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}}}]);
//# sourceMappingURL=707.69a8de6c3fd96bf5573a.js.map