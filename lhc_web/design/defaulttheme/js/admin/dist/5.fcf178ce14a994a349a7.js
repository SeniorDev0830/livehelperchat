(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[5],{62:function(e,a,t){"use strict";t.r(a);var l=t(14),n=t.n(l),c=t(2),r=t.n(c),s=t(0),m=t.n(s),o=t(15),i=t.n(o),d=t(63),u=t(24),p=t.n(u),E=m.a.memo((function(e){var a=e.message,t=e.index,l=e.totalMessages,c=Object(s.useState)(!1),r=n()(c,2),o=r[0],i=r[1],d=Object(s.useState)(t+1==l),u=n()(d,2),E=u[0],b=u[1];Object(s.useEffect)((function(){}),[]);return m.a.createElement("div",{className:"row pb-2 mb-2 border-bottom"+(0==t?" border-top pt-2":"")},m.a.createElement("div",{className:"col-6 action-image",onClick:function(){return b(!E)}},m.a.createElement("span",{title:"Expand message "+a.id},m.a.createElement("i",{className:"material-icons"},E?"expand_less":"expand_more")),m.a.createElement("b",null,a.from_name),m.a.createElement("small",null," <",a.from_address,">"),m.a.createElement("small",null,m.a.createElement("span",{className:"text-muted action-image",onClick:function(e){e.stopPropagation(),i(!o)}},m.a.createElement("i",{className:"material-icons"},o?"expand_less":"expand_more")))),m.a.createElement("div",{className:"col-6 text-right text-muted"},m.a.createElement("small",{className:"pr-2"},a.udate_front," | ",a.udate_ago," ago."),m.a.createElement("i",{className:"material-icons settings text-muted"},"reply"),m.a.createElement("div",{className:"dropdown float-right"},m.a.createElement("i",{className:"material-icons settings text-muted",id:"message-id-"+a.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"more_vert"),m.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"message-id-"+a.id},m.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),m.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),m.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here")))),o&&m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("ul",{className:"fs13 text-muted"},m.a.createElement("li",null,"from: ",m.a.createElement("b",null,a.from_name)," <",a.from_address,">"),m.a.createElement("li",null,"to: ",a.toaddress),m.a.createElement("li",null,"reply-to: ",a.reply_toaddress),m.a.createElement("li",null,"mailed-by: ",a.from_host))),m.a.createElement("div",{className:"col-6"},m.a.createElement("ul",{className:"fs13 text-muted"},m.a.createElement("li",null,"Accepted at: ",a.accept_time_front),m.a.createElement("li",null,"Accepted by: ",a.plain_user_name),m.a.createElement("li",null,"Responded by: ",a.plain_user_name))))),E&&m.a.createElement("div",{className:"col-12 pt-2 pb-2"},p()(a.body_front,{replace:function(e){if(e.attribs){Object.assign({},e.attribs);e.attribs.class&&(e.attribs.className=e.attribs.class,delete e.attribs.class),e.attribs.style&&(delete e.attribs.style,e.attribs.style={fontSize:"15px",textAlign:"center"},console.log(e.attribs)),e.name&&e.name}}})),t+1==l&&m.a.createElement("div",{className:"btn-group mt-2",role:"group","aria-label":"Mail actions"},m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},m.a.createElement("i",{className:"material-icons"},"reply"),"Reply"),m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},m.a.createElement("i",{className:"material-icons"},"forward"),"Forward")))}));function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){r()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function v(e,a){switch(a.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return f({},e,{},a.value);case"update_messages":return a.messages.lmsop=e.lmsop||a.value.lmsop,(e=f({},e,{},a.value)).messages.push(a.messages),e;case"update_history":return e=f({},e,{},a.value),""!=a.history.msg&&e.messages.unshift(a.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}a.default=function(e){Object(s.useRef)(null),Object(s.useRef)(null);var a=Object(s.useRef)(null),t=Object(s.useReducer)(v,{messages:[],operators:[],conv:null,loaded:!1,old_message_id:0,last_message:"",last_message_id:0,lmsop:0,lgsync:0}),l=n()(t,2),c=l[0],r=l[1];Object(s.useEffect)((function(){return i.a.post(WWW_DIR_JAVASCRIPT+"mailconv/loadmainconv/"+e.chatId).then((function(e){r({type:"update",value:{conv:e.data.conv,messages:e.data.messages,loaded:!0}})})).catch((function(e){})),function(){}}),[]),Object(s.useEffect)((function(){if(1==c.loaded)a.current}),[c.loaded]);var o=Object(d.a)("mail_chat");o.t,o.i18n;return 0==c.loaded?m.a.createElement("span",null,"..."):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-7 chat-main-left-column"},m.a.createElement("h1",{className:"pb-2"},m.a.createElement("i",{className:"material-icons"},1==c.conv.start_type?"call_made":"call_received"),c.conv.subject),m.a.createElement("div",null,c.messages.map((function(a,t){return m.a.createElement(E,{key:"msg_mail_"+e.chatId+"_"+t,totalMessages:c.messages.length,index:t,message:a})})))),m.a.createElement("div",{className:"chat-main-right-column col-5"},m.a.createElement("div",{role:"tabpanel"},m.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:a},m.a.createElement("li",{role:"presentation",className:"nav-item"},m.a.createElement("a",{className:"nav-link active",href:"#mail-chat-info-"+e.chatId,"aria-controls":"#mail-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},m.a.createElement("i",{className:"material-icons mr-0"},"info_outline"))),m.a.createElement("li",{role:"presentation",className:"nav-item"},m.a.createElement("a",{className:"nav-link",href:"#mail-chat-"+e.chatId,"aria-controls":"#mail-chat-"+e.chatId,role:"tab","data-toggle":"tab",title:"Operators"},m.a.createElement("i",{className:"material-icons mr-0"},"face")))),m.a.createElement("div",{className:"tab-content"},m.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"mail-chat-"+e.chatId},"Other info"),m.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"mail-chat-info-"+e.chatId},c.conv&&m.a.createElement("table",{className:"table table-sm"},m.a.createElement("tr",null,m.a.createElement("td",null,"Sender"),m.a.createElement("td",null,c.conv.from_address," <",c.conv.from_name,">")),m.a.createElement("tr",null,m.a.createElement("td",null,"Status"),m.a.createElement("td",null,!c.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-pending"},"mail_outline"),"Pending"),1==c.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-active"},"mail_outline"),"Active"),2==c.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-closed"},"mail_outline"),"Closed"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Department"),m.a.createElement("td",null,c.conv.department_name)),m.a.createElement("tr",null,m.a.createElement("td",null,"Received"),m.a.createElement("td",null,c.conv.udate_front)),m.a.createElement("tr",null,m.a.createElement("td",null,"ID"),m.a.createElement("td",null,c.conv.id)),c.conv.accept_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Accepted at"),m.a.createElement("td",null,c.conv.accept_time_front)),c.conv.cls_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Closed at"),m.a.createElement("td",null,c.conv.cls_time_front)),m.a.createElement("tr",null,m.a.createElement("td",null,"Chat owner"),m.a.createElement("td",null,c.conv.plain_user_name)))))))))}}}]);