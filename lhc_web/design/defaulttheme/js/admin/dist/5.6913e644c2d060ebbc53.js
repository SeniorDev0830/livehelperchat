(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[5],{64:function(e,a,t){"use strict";t.r(a);var n=t(14),c=t.n(n),r=t(2),s=t.n(r),l=t(0),o=t.n(l),i=t(15),m=t.n(i),u=t(65),p=(t(24),o.a.memo((function(e){e.message,e.index;return o.a.createElement("p",null,"Mail chat message")})));function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){s()(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function h(e,a){switch(a.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return f({},e,{},a.value);case"update_messages":return a.messages.lmsop=e.lmsop||a.value.lmsop,(e=f({},e,{},a.value)).messages.push(a.messages),e;case"update_history":return e=f({},e,{},a.value),""!=a.history.msg&&e.messages.unshift(a.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}a.default=function(e){Object(l.useRef)(null),Object(l.useRef)(null);var a=Object(l.useRef)(null),n=Object(l.useReducer)(h,{messages:[],operators:[],conv:{},has_more_messages:!1,old_message_id:0,last_message:"",last_message_id:0,lmsop:0,lgsync:0}),r=c()(n,2),s=r[0],i=r[1];Object(l.useEffect)((function(){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/loadmainconv/"+e.chatId).then((function(e){i({type:"update",value:{conv:e.data.chat,messages:e.data.messages}})})).catch((function(e){}));var n=a.current,c=t(27),r=n.querySelectorAll('[data-toggle="tab"]');return r.length>0&&Array.prototype.forEach.call(r,(function(e){new c.Tab(e)})),function(){}}),[]);var d=Object(u.a)("mail_chat");d.t,d.i18n;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-7 chat-main-left-column"},o.a.createElement("div",null,s.messages.map((function(a,t){return o.a.createElement(p,{key:"msg_mail_"+e.chatId+"_"+t,index:t,message:a})})))),o.a.createElement("div",{className:"chat-main-right-column col-5"},o.a.createElement("div",{role:"tabpanel"},o.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:a},o.a.createElement("li",{role:"presentation",className:"nav-item"},o.a.createElement("a",{className:"nav-link active",href:"#mail-chat-info-"+e.chatId,"aria-controls":"#mail-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},o.a.createElement("i",{className:"material-icons mr-0"},"info_outline"))),o.a.createElement("li",{role:"presentation",className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#mail-chat-"+e.chatId,"aria-controls":"#mail-chat-"+e.chatId,role:"tab","data-toggle":"tab",title:"Operators"},o.a.createElement("i",{className:"material-icons mr-0"},"face")))),o.a.createElement("div",{className:"tab-content"},o.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"mail-chat-"+e.chatId},"Other info"),o.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"mail-chat-info-"+e.chatId},"Main chat info"))))))}}}]);