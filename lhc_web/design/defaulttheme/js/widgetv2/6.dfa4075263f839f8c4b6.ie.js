(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[6],{481:function(t,e,a){"use strict";a.r(e),a.d(e,"nodeJSChat",(function(){return d}));var n=a(5),i=a.n(n),s=a(6),c=a.n(s),o=a(3),h=a(11),d=new(function(){function t(){var e=this;i()(this,t),this.socket=null,o.a.eventEmitter.addListener("endedChat",(function(){null!==e.socket&&e.socket.destroy()}))}return c()(t,[{key:"bootstrap",value:function(t,e,n){var i=n(),s=i.chatwidget.getIn(["chatData","id"]),c=(i.chatwidget.getIn(["chatData","hash"]),i.chatwidget.getIn(["chat_ui","sync_interval"])),d={hostname:t.hostname,path:t.path,autoReconnectOptions:{initialDelay:5e3,randomness:5e3}};""!=t.port&&(d.port=parseInt(t.port)),1==t.secure&&(d.secure=!0),t.instance_id>0&&t.instance_id;var r=a(490),g=this.socket=r.connect(d),_=null;function l(e){1==e.status?t.instance_id>0?g.publish("chat_"+t.instance_id+"_"+s,{op:"vt",msg:e.msg}):g.publish("chat_"+s,{op:"vt",msg:e.msg}):t.instance_id>0?g.publish("chat_"+t.instance_id+"_"+s,{op:"vts"}):g.publish("chat_"+s,{op:"vts"})}function u(e){t.instance_id>0?g.publish("chat_"+t.instance_id+"_"+s,{op:"vt",msg:"✉️ "+e.msg}):g.publish("chat_"+s,{op:"vt",msg:"✉️ "+e.msg})}function p(e){t.instance_id>0?g.publish("chat_"+t.instance_id+"_"+s,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"}):g.publish("chat_"+s,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"})}function m(){(_=t.instance_id>0?g.subscribe("chat_"+t.instance_id+"_"+s):g.subscribe("chat_"+s)).on("subscribeFail",(function(t){console.error("Failed to subscribe to the sample channel due to error: "+t)})),_.on("subscribe",(function(){g.publish(t.instance_id>0?"chat_"+t.instance_id+"_"+s:"chat_"+s,{op:"vi_online",status:!0})})),_.watch((function(a){if("ot"==a.op)1==a.data.status?e({type:"chat_status_changed",data:{text:a.data.ttx}}):e({type:"chat_status_changed",data:{text:""}});else if("cmsg"==a.op||"schange"==a.op){var i=n();i.chatwidget.hasIn(["chatData","id"])&&e(Object(h.d)({chat_id:i.chatwidget.getIn(["chatData","id"]),hash:i.chatwidget.getIn(["chatData","hash"]),lmgsid:i.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:i.chatwidget.get("theme")}))}else if("schange"==a.op){var s=n();s.chatwidget.hasIn(["chatData","id"])&&e(Object(h.b)({chat_id:s.chatwidget.getIn(["chatData","id"]),hash:s.chatwidget.getIn(["chatData","hash"]),mode:s.chatwidget.get("mode"),theme:s.chatwidget.get("theme")}))}else if("vo"==a.op){var c=n();c.chatwidget.hasIn(["chatData","id"])&&g.publish(t.instance_id>0?"chat_"+t.instance_id+"_"+c.chatwidget.getIn(["chatData","id"]):"chat_"+c.chatwidget.getIn(["chatData","id"]),{op:"vi_online",status:!0})}})),o.a.eventEmitter.addListener("visitorTyping",l),o.a.eventEmitter.addListener("messageSend",u),o.a.eventEmitter.addListener("messageSendError",p),e({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),e({type:"CHAT_ADD_OVERRIDE",data:"typing"})}g.on("error",(function(t){console.error(t)})),g.on("close",(function(){null!==_&&_.destroy(),o.a.eventEmitter.removeListener("visitorTyping",l),o.a.eventEmitter.removeListener("messageSend",u),o.a.eventEmitter.removeListener("messageSendError",p),e({type:"CHAT_UI_UPDATE",data:{sync_interval:c}}),e({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})})),g.on("deauthenticate",(function(){var e=n(),a=e.chatwidget.getIn(["chatData","id"]);window.lhcAxios.post(window.lhcChat.base_url+"nodejshelper/tokenvisitor/"+a+"/"+e.chatwidget.getIn(["chatData","hash"]),null,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){g.emit("login",{hash:e.data,chanelName:t.instance_id>0?"chat_"+t.instance_id+"_"+a:"chat_"+a},(function(t){t&&(console.log(t),g.destroy())}))}))})),g.on("connect",(function(e){if(e.isAuthenticated&&s>0)m();else{var a=n(),i=a.chatwidget.getIn(["chatData","id"]);window.lhcAxios.post(window.lhcChat.base_url+"nodejshelper/tokenvisitor/"+i+"/"+a.chatwidget.getIn(["chatData","hash"]),null,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){g.emit("login",{hash:e.data,chanelName:t.instance_id>0?"chat_"+t.instance_id+"_"+i:"chat_"+i},(function(t){t?(console.log(t),g.destroy()):m()}))}))}}))}}]),t}())}}]);
//# sourceMappingURL=6.dfa4075263f839f8c4b6.ie.js.map