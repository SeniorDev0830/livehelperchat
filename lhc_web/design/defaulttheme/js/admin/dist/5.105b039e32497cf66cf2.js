(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[5],{64:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t.n(n),c=t(2),r=t.n(c),s=t(0),m=t.n(s),o=t(15),i=t.n(o),u=t(65),d=(t(24),m.a.memo((function(e){var a=e.message,t=e.index,n=e.totalMessages,c=Object(s.useState)(!1),r=l()(c,2),o=r[0],i=r[1],u=Object(s.useState)(!0),d=l()(u,2),E=d[0],p=d[1];return Object(s.useEffect)((function(){}),[]),m.a.createElement("div",{className:"row pb-4"},m.a.createElement("div",{className:"col-6"},m.a.createElement("span",{className:"action-image",title:"Expand message "+a.id,onClick:function(){return p(!E)}},m.a.createElement("i",{className:"material-icons"},E?"expand_less":"expand_more")),m.a.createElement("b",null,a.from_name),m.a.createElement("small",null," <",a.from_address,">"),m.a.createElement("small",null,m.a.createElement("span",{className:"text-muted action-image",onClick:function(){return i(!o)}},m.a.createElement("i",{className:"material-icons"},o?"expand_less":"expand_more")))),m.a.createElement("div",{className:"col-6 text-right text-muted"},m.a.createElement("small",{className:"pr-2"},a.udate_front," | ",a.udate_ago," ago."),m.a.createElement("i",{className:"material-icons settings text-muted"},"reply"),m.a.createElement("div",{className:"dropdown"},m.a.createElement("button",{className:"btn btn-secondary dropdown-toggle",type:"button",id:"message-id-"+a.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown button"),m.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"message-id-"+a.id},m.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),m.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),m.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here")))),o&&m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("ul",{className:"fs13 text-muted"},m.a.createElement("li",null,"from: ",m.a.createElement("b",null,a.from_name)," <",a.from_address,">"),m.a.createElement("li",null,"to: ",a.toaddress),m.a.createElement("li",null,"mailed-by: ",a.from_host))),m.a.createElement("div",{className:"col-6"},m.a.createElement("ul",{className:"fs13 text-muted"},m.a.createElement("li",null,"Accepted at: ",a.accept_time_front),m.a.createElement("li",null,"Accepted by: ",a.plain_user_name),m.a.createElement("li",null,"Responded by: ",a.plain_user_name))))),E&&m.a.createElement("div",{className:"col-12 pt-2 pb-2"},a.alt_body),t+1==n&&m.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Mail actions"},m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},m.a.createElement("i",{className:"material-icons"},"reply"),"Reply"),m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},m.a.createElement("i",{className:"material-icons"},"forward"),"Forward")))})));function E(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?E(Object(t),!0).forEach((function(a){r()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){switch(a.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return p({},e,{},a.value);case"update_messages":return a.messages.lmsop=e.lmsop||a.value.lmsop,(e=p({},e,{},a.value)).messages.push(a.messages),e;case"update_history":return e=p({},e,{},a.value),""!=a.history.msg&&e.messages.unshift(a.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}a.default=function(e){Object(s.useRef)(null),Object(s.useRef)(null);var a=Object(s.useRef)(null),n=Object(s.useReducer)(b,{messages:[],operators:[],conv:null,loaded:!1,old_message_id:0,last_message:"",last_message_id:0,lmsop:0,lgsync:0}),c=l()(n,2),r=c[0],o=c[1];Object(s.useEffect)((function(){return i.a.post(WWW_DIR_JAVASCRIPT+"mailconv/loadmainconv/"+e.chatId).then((function(e){o({type:"update",value:{conv:e.data.conv,messages:e.data.messages,loaded:!0}})})).catch((function(e){})),function(){}}),[]),Object(s.useEffect)((function(){if(1==r.loaded){var e=a.current,n=t(27),l=e.querySelectorAll('[data-toggle="tab"]');l.length>0&&Array.prototype.forEach.call(l,(function(e){new n.Tab(e)}))}}),[r.loaded]);var E=Object(u.a)("mail_chat");E.t,E.i18n;return 0==r.loaded?m.a.createElement("span",null,"..."):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-7 chat-main-left-column"},m.a.createElement("h1",{className:"border-bottom"},m.a.createElement("i",{className:"material-icons"},1==r.conv.start_type?"call_made":"call_received"),r.conv.subject),m.a.createElement("div",null,r.messages.map((function(a,t){return m.a.createElement(d,{key:"msg_mail_"+e.chatId+"_"+t,totalMessages:r.messages.length,index:t,message:a})})))),m.a.createElement("div",{className:"chat-main-right-column col-5"},m.a.createElement("div",{role:"tabpanel"},m.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:a},m.a.createElement("li",{role:"presentation",className:"nav-item"},m.a.createElement("a",{className:"nav-link active",href:"#mail-chat-info-"+e.chatId,"aria-controls":"#mail-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},m.a.createElement("i",{className:"material-icons mr-0"},"info_outline"))),m.a.createElement("li",{role:"presentation",className:"nav-item"},m.a.createElement("a",{className:"nav-link",href:"#mail-chat-"+e.chatId,"aria-controls":"#mail-chat-"+e.chatId,role:"tab","data-toggle":"tab",title:"Operators"},m.a.createElement("i",{className:"material-icons mr-0"},"face")))),m.a.createElement("div",{className:"tab-content"},m.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"mail-chat-"+e.chatId},"Other info"),m.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"mail-chat-info-"+e.chatId},r.conv&&m.a.createElement("table",{className:"table table-sm"},m.a.createElement("tr",null,m.a.createElement("td",null,"Sender"),m.a.createElement("td",null,r.conv.from_address," <",r.conv.from_name,">")),m.a.createElement("tr",null,m.a.createElement("td",null,"Status"),m.a.createElement("td",null,!r.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-pending"},"mail_outline"),"Pending"),1==r.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-active"},"mail_outline"),"Active"),2==r.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-closed"},"mail_outline"),"Closed"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Department"),m.a.createElement("td",null,r.conv.department_name)),m.a.createElement("tr",null,m.a.createElement("td",null,"Received"),m.a.createElement("td",null,r.conv.udate_front)),m.a.createElement("tr",null,m.a.createElement("td",null,"ID"),m.a.createElement("td",null,r.conv.id)),r.conv.accept_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Accepted at"),m.a.createElement("td",null,r.conv.accept_time_front)),r.conv.cls_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Closed at"),m.a.createElement("td",null,r.conv.cls_time_front)),m.a.createElement("tr",null,m.a.createElement("td",null,"Chat owner"),m.a.createElement("td",null,r.conv.plain_user_name)))))))))}}}]);