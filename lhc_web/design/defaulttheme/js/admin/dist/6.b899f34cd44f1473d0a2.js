(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[6],{81:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a.n(n),r=a(2),c=a.n(r),s=a(0),i=a.n(s),o=a(15),m=a.n(o),u=a(62),d=a(16),p=a.n(d),f=i.a.memo((function(e){var t=e.children,a=Object(s.useState)(!1),n=l()(a,2),r=n[0],c=n[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"pb-2"},i.a.createElement("button",{onClick:function(){return c(!r)},className:"btn btn-sm btn-outline-secondary"},"...")),r&&t)})),v=a(78),g=a(68),b=a.n(g),h=a(70),E=a.n(h),_=a(3),y=a.n(_),N=a(4),R=a.n(N),k=a(28),w=a.n(k),A=a(71),O=a.n(A),I=a(73),P=a.n(I),j=a(75),D=a.n(j),W=a(80);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var T=function(e){O()(l,e);var t,a,n=(t=l,function(){var e,a=D()(t);if(C()){var n=D()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return P()(this,e)});function l(e){var t;return y()(this,l),t=n.call(this,e),c()(w()(t),"state",{hightlight:!1,files:[],uploading:!1,uploadProgress:{},successfullUploaded:!1}),t.fileInputRef=i.a.createRef(),t.dropAreaRef=i.a.createRef(),t.openFileDialog=t.openFileDialog.bind(w()(t)),t.onFilesAddedUI=t.onFilesAddedUI.bind(w()(t)),t.onDragOver=t.onDragOver.bind(w()(t)),t.onDragLeave=t.onDragLeave.bind(w()(t)),t.onDrop=t.onDrop.bind(w()(t)),t.onPaste=t.onPaste.bind(w()(t)),t.onFilesAdded=t.onFilesAdded.bind(w()(t)),t.uploadFiles=t.uploadFiles.bind(w()(t)),t.sendRequest=t.sendRequest.bind(w()(t)),t}return R()(l,[{key:"onFilesAdded",value:function(e){var t=this.props.t,a=new RegExp("(.|/)(zip|doc|pdf)$","i"),n=[];e.forEach((function(e){a.test(e.type)||a.test(e.name)||n.push(e.name+": "+t("file.incorrect_type")),e.size>1e5&&n.push(e.name+": "+t("file.to_big_file"))})),n.length>0?alert(n.join("\n")):this.setState({files:e})}},{key:"componentDidUpdate",value:function(e,t){this.state.files.length>0&&0==this.state.uploading&&this.uploadFiles()}},{key:"uploadFiles",value:(a=E()(b.a.mark((function e(){var t,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({uploadProgress:{},uploading:!0}),t=[],this.state.files.forEach((function(e){t.push(a.sendRequest(e))})),e.prev=3,e.next=6,Promise.all(t);case 6:this.setState({successfullUploaded:!0,uploading:!1,files:[]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),this.setState({successfullUploaded:!0,uploading:!1,files:[]});case 12:case"end":return e.stop()}}),e,this,[[3,9]])}))),function(){return a.apply(this,arguments)})},{key:"sendRequest",value:function(e){var t=this;this.props.t;return new Promise((function(a,n){var l=new XMLHttpRequest;l.upload.addEventListener("progress",(function(a){a.lengthComputable&&(x({},t.state.uploadProgress)[e.name]={state:"pending",percentage:a.loaded/a.total*100})})),l.upload.addEventListener("load",(function(n){x({},t.state.uploadProgress)[e.name]={state:"done",percentage:100},a(l.response)})),l.upload.addEventListener("error",(function(a){var r=x({},t.state.uploadProgress);r[e.name]={state:"error",percentage:0},t.setState({uploadProgress:r}),n(l.response)}));var r=new FormData;r.append("files",e,e.name),l.open("POST",WWW_DIR_JAVASCRIPT+"mailconv/uploadimage"),l.send(r)}))}},{key:"openFileDialog",value:function(){this.state.uploading||this.fileInputRef.current.click()}},{key:"onFilesAddedUI",value:function(e){var t=e.target.files,a=this.fileListToArray(t);this.onFilesAdded(a)}},{key:"onDragOver",value:function(e){e.preventDefault(),this.state.uploading}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.dropAreaRef.current&&(e.dropAreaRef.current.ondragover=e.onDragOver,e.dropAreaRef.current.ondragleave=e.onDragLeave,e.dropAreaRef.current.ondrop=e.onDrop)}),1e3)}},{key:"componentWillUnmount",value:function(){this.dropAreaRef.current&&(this.dropAreaRef.current.ondragover=null,this.dropAreaRef.current.ondragleave=null,this.dropAreaRef.current.ondrop=null)}},{key:"onPaste",value:function(e){var t=e&&e.clipboardData&&e.clipboardData.items;if(t&&t.length){for(var a=[],n=0;n<t.length;n++){var l=t[n].getAsFile&&t[n].getAsFile();l&&a.push(l)}a.length>0&&this.onFilesAdded(a)}}},{key:"onDragLeave",value:function(e){}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.state.uploading){var t=e.dataTransfer.files,a=this.fileListToArray(t);this.onFilesAdded(a)}}},{key:"fileListToArray",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e.item(a));return t}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{onChange:this.onFilesAddedUI,ref:this.fileInputRef,id:"fileupload",type:"file",name:"files[]",multiple:!0,className:"d-none"}),i.a.createElement("div",{ref:this.dropAreaRef,onClick:this.openFileDialog,className:"border action-image ml-2 px-2 text-secondary"},i.a.createElement("i",{className:"material-icons"},"attach_file")," Drop or choose your files"))}}]),l}(s.PureComponent),F=Object(W.a)()(T),q=i.a.memo((function(e){var t=Object(s.useState)(!1),a=l()(t,2),n=a[0],r=a[1],c=Object(s.useState)(null),o=l()(c,2),u=(o[0],o[1],Object(s.useState)(null)),d=l()(u,2),p=d[0],f=d[1],g=Object(s.useState)(null),b=l()(g,2),h=b[0],E=b[1],_=Object(s.useState)(!1),y=l()(_,2),N=y[0],R=y[1];return Object(s.useEffect)((function(){1==n&&0==N&&m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/getreplydata/"+e.message.id).then((function(e){R(!0),f(e.data.intro),E(e.data.signature)}))}),[n]),1==e.replyMode&&0==n&&r(!0),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-12 mt-2 pt-3 pb-2"},!n&&i.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Mail actions"},i.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return r(!0)}},i.a.createElement("i",{className:"material-icons"},"reply"),"Reply"),i.a.createElement("button",{disabled:1==e.message.response_type,type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return e.noReplyRequired()}},i.a.createElement("i",{className:"material-icons"},"done"),"No reply required"),i.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary"},i.a.createElement("i",{className:"material-icons"},"forward"),"Forward")),n&&N&&i.a.createElement("div",{className:"shadow p-2"},i.a.createElement(v.a,{tinymceScriptSrc:"/design/defaulttheme/js/tinymce/js/tinymce/tinymce.min.js",initialValue:"<p></p>"+p+"<blockquote>"+e.message.body_front+"</blockquote>"+h,onInit:function(){tinyMCE.get("reply-to-mce-"+e.message.id).focus()},id:"reply-to-mce-"+e.message.id,init:{height:320,automatic_uploads:!0,file_picker_types:"image",images_upload_url:WWW_DIR_JAVASCRIPT+"mailconv/uploadimage",paste_data_images:!0,relative_urls:!1,browser_spellcheck:!0,paste_as_text:!0,contextmenu:!1,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor image lhfiles","searchreplace visualblocks code fullscreen","media table paste help","print preview importcss searchreplace autolink save autosave directionality visualblocks visualchars fullscreen media template codesample charmap pagebreak nonbreaking anchor toc advlist lists wordcount textpattern noneditable help charmap emoticons"],toolbar_mode:"wrap",toolbar:"undo redo | fontselect formatselect fontsizeselect | table | paste pastetext | subscript superscript | bold italic underline strikethrough | forecolor backcolor |                             alignleft aligncenter alignright alignjustify | lhfiles insertfile image pageembed template link anchor codesample |                             bullist numlist outdent indent | removeformat permanentpen | charmap emoticons | fullscreen print preview paste code | help"}}),i.a.createElement("div",{className:"float-right"},i.a.createElement("a",{className:"action-image",onClick:function(){r(!1),e.cancelReply()}},i.a.createElement("i",{className:"material-icons"},"delete"))),i.a.createElement("div",{className:"btn-group mt-1",role:"group","aria-label":"Mail actions"},i.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-primary",onClick:function(){console.log(tinyMCE.get("reply-to-mce-"+e.message.id).getContent())}},i.a.createElement("i",{className:"material-icons"},"send"),"Send"),i.a.createElement(F,{message:e.message})))))})),J=i.a.memo((function(e){var t=e.message,a=e.index,n=e.totalMessages,r=e.noReplyRequired,c=e.mode,o=e.addLabel,m=Object(s.useState)(!1),u=l()(m,2),v=u[0],g=u[1],b=Object(s.useState)(a+1==n),h=l()(b,2),E=h[0],_=h[1],y=Object(s.useState)(!1),N=l()(y,2),R=N[0],k=N[1];Object(s.useEffect)((function(){}),[]);return i.a.createElement("div",{className:"row pb-2 mb-2 border-bottom border-secondary"+(0==a&&"preview"!==c?" border-top pt-2":"")},i.a.createElement("div",{className:"col-7 action-image",onClick:function(){return _(!E)}},i.a.createElement("span",{title:"Expand message "+t.id},i.a.createElement("i",{className:"material-icons"},E?"expand_less":"expand_more")),i.a.createElement("b",null,t.from_name),i.a.createElement("small",null," <",t.from_address,"> "),i.a.createElement("small",{className:t.status&&1!=t.status?t.cls_time?"chat-closed":"chat-active":"chat-pending"},i.a.createElement("i",{className:"material-icons"},"mail_outline"),t.status&&1!=t.status?"Responded":"Pending response")),i.a.createElement("div",{className:"col-5 text-right text-muted"},i.a.createElement("small",{className:"pr-1"},t.subjects&&t.subjects.map((function(e,t){return i.a.createElement("span",{className:"badge badge-info mr-1"},e.name)})),i.a.createElement("i",{title:"Add/Remove label",onClick:function(){return o(t)},className:"material-icons action-image text-muted"},"label")," |"),i.a.createElement("small",{className:"pr-2"},t.udate_front," | ",t.udate_ago," ago."),"preview"!==c&&i.a.createElement("i",{onClick:function(e){e.stopPropagation(),k(!0)},className:"material-icons settings text-muted"},"reply"),i.a.createElement("i",{onClick:function(e){e.stopPropagation(),g(!v)},className:"material-icons settings text-muted"},v?"expand_less":"expand_more"),"preview"!==c&&i.a.createElement("div",{className:"dropdown float-right"},i.a.createElement("i",{className:"material-icons settings text-muted",id:"message-id-"+t.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"more_vert"),i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"message-id-"+t.id},i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.stopPropagation(),k(!0)}},i.a.createElement("i",{className:"material-icons text-muted"},"reply"),"Reply"),i.a.createElement("a",{className:"dropdown-item",href:"#"},i.a.createElement("i",{className:"material-icons text-muted"},"forward"),"Forward"),i.a.createElement("a",{className:"dropdown-item",target:"_blank",href:WWW_DIR_JAVASCRIPT+"mailconv/mailprint/"+t.id},i.a.createElement("i",{className:"material-icons text-muted"},"print"),"Print"),i.a.createElement("a",{className:"dropdown-item",href:WWW_DIR_JAVASCRIPT+"mailconv/apimaildownload/"+t.id},i.a.createElement("i",{className:"material-icons text-muted"},"cloud_download"),"Download"),i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return r(t)}},i.a.createElement("i",{className:"material-icons text-muted"},"done"),"No reply required")))),v&&i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Message information"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"from:")," ",i.a.createElement("b",null,t.from_name)," <",t.from_address,">"),i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"to:")," ",t.to_data_front),t.cc_data_front&&i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"cc:")," ",t.cc_data_front),t.bcc_data_front&&i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"bcc:")," ",t.bcc_data_front),i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"reply-to:")," ",t.reply_to_data_front),i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"mailed-by:")," ",t.from_host))),i.a.createElement("div",{className:"col-6"},i.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},t.accept_time_front&&i.a.createElement("li",null,"Accepted at: ",t.accept_time_front),t.plain_user_name&&i.a.createElement("li",null,"Accepted by: ",i.a.createElement("b",null,t.plain_user_name)),t.wait_time&&i.a.createElement("li",null,"Accept wait time: ",t.wait_time_pending),t.lr_time&&t.response_time&&i.a.createElement("li",null,"Response wait time: ",t.wait_time_response),t.lr_time&&i.a.createElement("li",null,"Response type: ",1==t.response_type?"No response required":2==t.response_type?"Our response message":"Responeded by e-mail"),t.interaction_time&&i.a.createElement("li",null,"Interaction time: ",t.interaction_time_duration),t.cls_time&&i.a.createElement("li",null,"Close time: ",t.cls_time_front))))))),E&&i.a.createElement("div",{className:"col-12 mail-message-body pt-2 pb-2"},p()(t.body_front,{replace:function(e){if(e.attribs){Object.assign({},e.attribs);if(e.attribs.class&&(e.attribs.className=e.attribs.class,delete e.attribs.class),e.name&&"blockquote"===e.name)return e.attribs.style&&(e.attribs.style=(t=e.attribs.style,a={},t.split(";").forEach((function(e){var t=e.split(":"),n=l()(t,2),r=n[0],c=n[1];if(r){var s=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")}(r.trim());a[s]=c.trim()}})),a)),i.a.createElement("blockquote",e.attribs,i.a.createElement(f,null,Object(d.domToReact)(e.children)))}var t,a}}),t.attachments&&t.attachments.length>0&&i.a.createElement("div",{className:"pt-2"},t.attachments.map((function(e){return i.a.createElement("a",{className:"btn btn-sm btn-outline-info mr-1",href:e.download_url,title:e.description},e.name)})))),"preview"!==c&&(a+1==n||R)&&i.a.createElement(q,{cancelReply:function(e){return k(!1)},replyMode:R,lastMessage:a+1==n,message:t,noReplyRequired:function(){return r(t)}}))}));function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function L(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return M({},e,{},t.value);case"update_message":var a=e.messages.findIndex((function(e){return e.id==t.message.id}));return e.messages[a]=t.message,t.conv&&(e.conv=t.conv),e=M({},e);case"update_messages":return t.messages.lmsop=e.lmsop||t.value.lmsop,(e=M({},e,{},t.value)).messages.push(t.messages),e;case"update_history":return e=M({},e,{},t.value),""!=t.history.msg&&e.messages.unshift(t.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}t.default=function(e){Object(s.useRef)(null),Object(s.useRef)(null);var t=Object(s.useRef)(null),a=Object(s.useReducer)(L,{messages:[],operators:[],conv:null,loaded:!1,saving_remarks:!1,old_message_id:0,last_message:"",remarks:"",last_message_id:0,lmsop:0,lgsync:0}),n=l()(a,2),r=n[0],c=n[1],o=function(){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/loadmainconv/"+e.chatId+"/(mode)/"+(""!=e.mode?e.mode:"normal")).then((function(t){c({type:"update",value:{conv:t.data.conv,messages:t.data.messages,loaded:!0}}),"preview"!==e.mode&&function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("machat_id",t.join(",")))}catch(e){}}(e.chatId)})).catch((function(e){}))},d=function(e){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+e.url})};Object(s.useEffect)((function(){var t=setTimeout((function(){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/saveremarks/"+e.chatId,{data:r.remarks}).then((function(e){c({type:"update",value:{saving_remarks:!1}})}))}),500);return function(){return clearTimeout(t)}}),[r.remarks]);Object(s.useEffect)((function(){return o(),function(){!function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1!==t.indexOf(e)&&t.splice(t.indexOf(e),1),localStorage.setItem("machat_id",t.join(","))}catch(e){}}(e.chatId)}}),[]),Object(s.useEffect)((function(){if(1==r.loaded)t.current}),[r.loaded]);var p=Object(u.a)("mail_chat");p.t,p.i18n;return 0==r.loaded?i.a.createElement("span",null,"..."):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"chat-main-left-column "+("preview"==e.mode?"col-12":"col-7")},"preview"!==e.mode&&i.a.createElement("h1",{className:"pb-2"},i.a.createElement("i",{className:"material-icons"},1==r.conv.start_type?"call_made":"call_received"),r.conv.subject),i.a.createElement("div",null,r.messages.map((function(t,a){return i.a.createElement(J,{mode:e.mode,key:"msg_mail_"+e.chatId+"_"+a+"_"+t.id,totalMessages:r.messages.length,index:a,message:t,noReplyRequired:function(e){return function(e){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apinoreplyrequired/"+e.id).then((function(e){c({type:"update_message",message:e.data.message,conv:e.data.conv})})).catch((function(e){}))}(t)},addLabel:function(e){return function(e){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"mailconv/apilabelmessage/"+e.id,hidecallback:function(){m.a.get(WWW_DIR_JAVASCRIPT+"mailconv/apigetlabels/"+e.id).then((function(e){c({type:"update_message",message:e.data.message})})).catch((function(e){}))}})}(t)}})})))),i.a.createElement("div",{className:"chat-main-right-column "+("preview"==e.mode?"d-none":"col-5")},i.a.createElement("div",{role:"tabpanel"},i.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:t},i.a.createElement("li",{role:"presentation",className:"nav-item"},i.a.createElement("a",{className:"nav-link active",href:"#mail-chat-info-"+e.chatId,"aria-controls":"#mail-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},i.a.createElement("i",{className:"material-icons mr-0"},"info_outline"))),i.a.createElement("li",{role:"presentation",className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#mail-chat-remarks-"+e.chatId,"aria-controls":"#mail-chat-remarks-"+e.chatId,role:"tab","data-toggle":"tab",title:"Remarks"},i.a.createElement("i",{className:"material-icons mr-0"},"mode_edit")))),i.a.createElement("div",{className:"tab-content"},i.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"mail-chat-remarks-"+e.chatId},i.a.createElement("div",{className:"material-icons pb-1 text-success"+(r.saving_remarks?" text-warning":"")},"mode_edit"),i.a.createElement("div",null,r.conv&&i.a.createElement("textarea",{placeholder:"Enter your remarks here.",onKeyUp:function(e){return t=e.target.value,void c({type:"update",value:{saving_remarks:!0,remarks:t}});var t},class:"form-control mh150",defaultValue:r.conv.remarks}))),i.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"mail-chat-info-"+e.chatId},i.a.createElement("div",{className:"pb-2"},i.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return e=!1,r.messages.forEach((function(t){2!=t.status&&(e=!0)})),void((0==e||confirm("There is still unresponded messages, are you sure you want to close this conversation?"))&&m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apicloseconversation/"+r.conv.id).then((function(e){c({type:"update",value:{conv:e.data.conv,messages:e.data.messages}}),document.getElementById("chat-tab-link-mc"+r.conv.id)&&lhinst.removeDialogTabMail("mc"+r.conv.id,$("#tabs"),!0)})).catch((function(e){})));var e}},i.a.createElement("i",{className:"material-icons"},"close"),"Close")),r.conv&&i.a.createElement("table",{className:"table table-sm"},i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2"},i.a.createElement("i",{className:"material-icons action-image",onClick:function(){return d({url:"mailconv/mailhistory/"+e.chatId})}},"history"),i.a.createElement("a",{className:"material-icons action-image",onClick:function(){return d({url:"mailconv/transfermail/"+e.chatId})},title:"Transfer chat"},"supervisor_account"),i.a.createElement("a",{className:"text-dark material-icons",target:"_blank",href:WWW_DIR_JAVASCRIPT+"mailconv/mailprintcovnersation/"+e.chatId},"print"),i.a.createElement("a",{className:"material-icons mr-0",onClick:function(e){confirm("Are you sure?")&&m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apideleteconversation/"+r.conv.id).then((function(e){document.getElementById("chat-tab-link-mc"+r.conv.id)?lhinst.removeDialogTabMail("mc"+r.conv.id,$("#tabs"),!0):document.location=WWW_DIR_JAVASCRIPT+"mailconv/conversations"})).catch((function(e){}))},title:"Delete chat"},"delete"))),i.a.createElement("tr",null,i.a.createElement("td",null,"Sender"),i.a.createElement("td",null,r.conv.from_name," <",r.conv.from_address,">")),i.a.createElement("tr",null,i.a.createElement("td",null,"Status"),i.a.createElement("td",null,!r.conv.status&&i.a.createElement("span",null,i.a.createElement("i",{className:"material-icons chat-pending"},"mail_outline"),"Pending"),1==r.conv.status&&i.a.createElement("span",null,i.a.createElement("i",{className:"material-icons chat-active"},"mail_outline"),"Active"),2==r.conv.status&&i.a.createElement("span",null,i.a.createElement("i",{className:"material-icons chat-closed"},"mail_outline"),"Closed"))),i.a.createElement("tr",null,i.a.createElement("td",null,"Department"),i.a.createElement("td",null,r.conv.department_name)),i.a.createElement("tr",null,i.a.createElement("td",null,"Received"),i.a.createElement("td",null,r.conv.udate_front)),i.a.createElement("tr",null,i.a.createElement("td",null,"ID"),i.a.createElement("td",null,r.conv.id)),r.conv.accept_time&&i.a.createElement("tr",null,i.a.createElement("td",null,"Accepted at"),i.a.createElement("td",null,r.conv.accept_time_front," | Wait time ",r.conv.wait_time_pending)),r.conv.response_time&&i.a.createElement("tr",null,i.a.createElement("td",null,"Responded at"),i.a.createElement("td",null,r.conv.lr_time_front," | Wait time ",r.conv.wait_time_response)),r.conv.cls_time&&i.a.createElement("tr",null,i.a.createElement("td",null,"Closed at"),i.a.createElement("td",null,r.conv.cls_time_front)),r.conv.interaction_time&&i.a.createElement("tr",null,i.a.createElement("td",null,"Interaction time"),i.a.createElement("td",null,r.conv.interaction_time_duration)),r.conv.priority&&i.a.createElement("tr",null,i.a.createElement("td",null,"Priority"),i.a.createElement("td",null,r.conv.priority)),i.a.createElement("tr",null,i.a.createElement("td",null,"Chat owner"),i.a.createElement("td",null,r.conv.plain_user_name)))))))))}}}]);