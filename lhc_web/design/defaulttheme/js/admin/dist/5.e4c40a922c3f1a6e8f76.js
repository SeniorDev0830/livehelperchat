(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[5],{62:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a.n(n),c=a(2),s=a.n(c),r=a(0),m=a.n(r),i=a(15),o=a.n(i),u=a(63),d=a(16),p=a.n(d),E=m.a.memo((function(e){var t=e.children,a=Object(r.useState)(!1),n=l()(a,2),c=n[0],s=n[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"pb-2"},m.a.createElement("button",{onClick:function(){return s(!c)},className:"btn btn-sm btn-outline-secondary"},"...")),c&&t)})),b=m.a.memo((function(e){var t=e.message,a=e.index,n=e.totalMessages,c=e.noReplyRequired,s=Object(r.useState)(!1),i=l()(s,2),o=i[0],u=i[1],b=Object(r.useState)(a+1==n),f=l()(b,2),v=f[0],_=f[1];Object(r.useEffect)((function(){}),[]);return m.a.createElement("div",{className:"row pb-2 mb-2 border-bottom"+(0==a?" border-top pt-2":"")},m.a.createElement("div",{className:"col-8 action-image",onClick:function(){return _(!v)}},m.a.createElement("span",{title:"Expand message "+t.id},m.a.createElement("i",{className:"material-icons"},v?"expand_less":"expand_more")),m.a.createElement("b",null,t.from_name),m.a.createElement("small",null," <",t.from_address,"> "),m.a.createElement("small",{className:t.status&&1!=t.status?"chat-active":"chat-pending"},m.a.createElement("i",{className:"material-icons"},"mail_outline"),t.status&&1!=t.status?"Responded":"Pending response")),m.a.createElement("div",{className:"col-4 text-right text-muted"},m.a.createElement("small",{className:"pr-2"},t.udate_front," | ",t.udate_ago," ago."),m.a.createElement("i",{className:"material-icons settings text-muted"},"reply"),m.a.createElement("i",{onClick:function(e){e.stopPropagation(),u(!o)},className:"material-icons settings text-muted"},o?"expand_less":"expand_more"),m.a.createElement("div",{className:"dropdown float-right"},m.a.createElement("i",{className:"material-icons settings text-muted",id:"message-id-"+t.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"more_vert"),m.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"message-id-"+t.id},m.a.createElement("a",{className:"dropdown-item",href:"#"},m.a.createElement("i",{className:"material-icons text-muted"},"reply"),"Reply"),m.a.createElement("a",{className:"dropdown-item",href:"#"},m.a.createElement("i",{className:"material-icons text-muted"},"forward"),"Forward"),m.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return c(t)}},m.a.createElement("i",{className:"material-icons text-muted"},"done"),"No reply required")))),o&&m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Message information"),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-6"},m.a.createElement("ul",{className:"fs13 mb-0"},m.a.createElement("li",null,"from: ",m.a.createElement("b",null,t.from_name)," <",t.from_address,">"),m.a.createElement("li",null,"to: ",t.toaddress),m.a.createElement("li",null,"reply-to: ",t.reply_toaddress),m.a.createElement("li",null,"mailed-by: ",t.from_host))),m.a.createElement("div",{className:"col-6"},m.a.createElement("ul",{className:"fs13 mb-0"},t.accept_time_front&&m.a.createElement("li",null,"Accepted at: ",t.accept_time_front),t.plain_user_name&&m.a.createElement("li",null,"Accepted by: ",t.plain_user_name),t.wait_time&&m.a.createElement("li",null,"Accept wait time: ",t.wait_time_pending),t.lr_time&&t.response_time&&m.a.createElement("li",null,"Response wait time: ",t.wait_time_response),t.lr_time&&m.a.createElement("li",null,"Response type: ",1==t.response_type?"No response required":2==t.response_type?"Our response message":"Responeded by e-mail"),t.interaction_time&&m.a.createElement("li",null,"Interaction time: ",t.interaction_time_duration),t.cls_time&&m.a.createElement("li",null,"Close time: ",t.cls_time_front))))))),v&&m.a.createElement("div",{className:"col-12 mail-message-body pt-2 pb-2"},p()(t.body_front,{replace:function(e){if(e.attribs){Object.assign({},e.attribs);if(e.attribs.class&&(e.attribs.className=e.attribs.class,delete e.attribs.class),e.name&&"blockquote"===e.name)return e.attribs.style&&(e.attribs.style=(t=e.attribs.style,a={},t.split(";").forEach((function(e){var t=e.split(":"),n=l()(t,2),c=n[0],s=n[1];if(c){var r=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")}(c.trim());a[r]=s.trim()}})),a)),m.a.createElement("blockquote",e.attribs,m.a.createElement(E,null,Object(d.domToReact)(e.children)))}var t,a}})),a+1==n&&m.a.createElement("div",{className:"col-12 mt-2 pt-3 pb-2"},m.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Mail actions"},m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},m.a.createElement("i",{className:"material-icons"},"reply"),"Reply"),m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return c(t)}},m.a.createElement("i",{className:"material-icons"},"done"),"No reply required"),m.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},m.a.createElement("i",{className:"material-icons"},"forward"),"Forward"))))}));function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){s()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return v({},e,{},t.value);case"update_message":var a=e.messages.findIndex((function(e){return e.id==t.message.id}));return e.messages[a]=t.message,e=v({},e);case"update_messages":return t.messages.lmsop=e.lmsop||t.value.lmsop,(e=v({},e,{},t.value)).messages.push(t.messages),e;case"update_history":return e=v({},e,{},t.value),""!=t.history.msg&&e.messages.unshift(t.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}t.default=function(e){Object(r.useRef)(null),Object(r.useRef)(null);var t=Object(r.useRef)(null),a=Object(r.useReducer)(_,{messages:[],operators:[],conv:null,loaded:!1,old_message_id:0,last_message:"",last_message_id:0,lmsop:0,lgsync:0}),n=l()(a,2),c=n[0],s=n[1];Object(r.useEffect)((function(){return o.a.post(WWW_DIR_JAVASCRIPT+"mailconv/loadmainconv/"+e.chatId).then((function(e){s({type:"update",value:{conv:e.data.conv,messages:e.data.messages,loaded:!0}})})).catch((function(e){})),function(){}}),[]),Object(r.useEffect)((function(){if(1==c.loaded)t.current}),[c.loaded]);var i=Object(u.a)("mail_chat");i.t,i.i18n;return 0==c.loaded?m.a.createElement("span",null,"..."):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-7 chat-main-left-column"},m.a.createElement("h1",{className:"pb-2"},m.a.createElement("i",{className:"material-icons"},1==c.conv.start_type?"call_made":"call_received"),c.conv.subject),m.a.createElement("div",null,c.messages.map((function(t,a){return m.a.createElement(b,{key:"msg_mail_"+e.chatId+"_"+a+"_"+t.id,totalMessages:c.messages.length,index:a,message:t,noReplyRequired:function(e){return function(e){o.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apinoreplyrequired/"+e.id).then((function(e){s({type:"update_message",message:e.data.message})})).catch((function(e){}))}(t)}})})))),m.a.createElement("div",{className:"chat-main-right-column col-5"},m.a.createElement("div",{role:"tabpanel"},m.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:t},m.a.createElement("li",{role:"presentation",className:"nav-item"},m.a.createElement("a",{className:"nav-link active",href:"#mail-chat-info-"+e.chatId,"aria-controls":"#mail-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},m.a.createElement("i",{className:"material-icons mr-0"},"info_outline"))),m.a.createElement("li",{role:"presentation",className:"nav-item"},m.a.createElement("a",{className:"nav-link",href:"#mail-chat-"+e.chatId,"aria-controls":"#mail-chat-"+e.chatId,role:"tab","data-toggle":"tab",title:"Operators"},m.a.createElement("i",{className:"material-icons mr-0"},"face")))),m.a.createElement("div",{className:"tab-content"},m.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"mail-chat-"+e.chatId},"Other info"),m.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"mail-chat-info-"+e.chatId},m.a.createElement("div",{className:"pb-2"},m.a.createElement("a",{className:"material-icons mr-0",onClick:function(){return e=!1,c.messages.forEach((function(t){2!=t.status&&(e=!0)})),void((0==e||confirm("There is still unresponded messages, are you sure you want to close this conversation?"))&&o.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apicloseconversation/"+c.conv.id).then((function(e){s({type:"update",value:{conv:e.data.conv,messages:e.data.messages}})})).catch((function(e){})));var e}},"close")),c.conv&&m.a.createElement("table",{className:"table table-sm"},m.a.createElement("tr",null,m.a.createElement("td",null,"Sender"),m.a.createElement("td",null,c.conv.from_address," <",c.conv.from_name,">")),m.a.createElement("tr",null,m.a.createElement("td",null,"Status"),m.a.createElement("td",null,!c.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-pending"},"mail_outline"),"Pending"),1==c.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-active"},"mail_outline"),"Active"),2==c.conv.status&&m.a.createElement("span",null,m.a.createElement("i",{className:"material-icons chat-closed"},"mail_outline"),"Closed"))),m.a.createElement("tr",null,m.a.createElement("td",null,"Department"),m.a.createElement("td",null,c.conv.department_name)),m.a.createElement("tr",null,m.a.createElement("td",null,"Received"),m.a.createElement("td",null,c.conv.udate_front)),m.a.createElement("tr",null,m.a.createElement("td",null,"ID"),m.a.createElement("td",null,c.conv.id)),c.conv.accept_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Accepted at"),m.a.createElement("td",null,c.conv.accept_time_front," | Wait time ",c.conv.wait_time_pending)),c.conv.response_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Responded at"),m.a.createElement("td",null,c.conv.lr_time_front," | Wait time ",c.conv.wait_time_response)),c.conv.cls_time&&m.a.createElement("tr",null,m.a.createElement("td",null,"Closed at"),m.a.createElement("td",null,c.conv.cls_time_front)),m.a.createElement("tr",null,m.a.createElement("td",null,"Chat owner"),m.a.createElement("td",null,c.conv.plain_user_name)))))))))}}}]);