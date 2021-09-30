"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[218],{2218:(e,t,i)=>{i.r(t),i.d(t,{default:()=>A});var a=i(8926),n=i.n(a),s=i(4575),r=i.n(s),o=i(3913),c=i.n(o),l=i(1506),u=i.n(l),h=i(2205),d=i.n(h),p=i(8585),f=i.n(p),m=i(9754),g=i.n(m),v=i(9713),y=i.n(v),w=i(7757),R=i.n(w),b=i(7294);function k(){function e(e,t){return new Promise(((i,a)=>{const n=new XMLHttpRequest;n.open("GET",e),n.responseType="arraybuffer",n.onload=()=>{i(WebAssembly.instantiate(n.response,t))},n.onerror=a,n.send()}))}let t=null,i=5242880;function a(e){const t=i;return i+=e,t}function n(e){postMessage({type:"internal-error",data:e})}let s=null,r=null,o=null;onmessage=i=>{const c=i.data;switch(c.type){case"init":const{wasmURL:i,shimURL:u}=c.data;Promise.resolve().then((()=>(self.WebAssembly&&!function(){const e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),t=new WebAssembly.Module(e);return 0!==new WebAssembly.Instance(t,{}).exports.test(4)}()&&delete self.WebAssembly,self.WebAssembly||importScripts(u),t=new WebAssembly.Memory({initial:256,maximum:256}),{memory:t,pow:Math.pow,exit:n,powf:Math.pow,exp:Math.exp,sqrtf:Math.sqrt,cos:Math.cos,log:Math.log,sin:Math.sin,sbrk:a}))).then((t=>function(t,i){if(!WebAssembly.instantiateStreaming)return e(t,i);const a=fetch(t,{credentials:"same-origin"});return WebAssembly.instantiateStreaming(a,i).catch((a=>{if(a.message&&a.message.indexOf("Argument 0 must be provided and must be a Response")>0)return e(t,i);throw a}))}(i,{env:t}))).then((e=>{s=e.instance.exports,postMessage({type:"init",data:null})})).catch((e=>{postMessage({type:"init-error",data:e.toString()})}));break;case"start":if(!function(e){if(r=s.vmsg_init(e),!r)return!1;const i=new Uint32Array(t.buffer,r,1)[0];return o=new Float32Array(t.buffer,i),!0}(c.data))return postMessage({type:"error",data:"vmsg_init"});break;case"data":if(l=c.data,o.set(l),!(s.vmsg_encode(r,l.length)>=0))return postMessage({type:"error",data:"vmsg_encode"});break;case"stop":const h=function(){if(s.vmsg_flush(r)<0)return null;const e=new Uint32Array(t.buffer,r+4,1)[0],i=new Uint32Array(t.buffer,r+8,1)[0],a=new Uint8Array(t.buffer,e,i),n=new Blob([a],{type:"audio/mpeg"});return s.vmsg_free(r),r=null,o=null,n}();if(!h)return postMessage({type:"error",data:"vmsg_flush"});postMessage({type:"stop",data:h})}var l}}const U=class{constructor(e={},t=null){this.wasmURL=new URL(e.wasmURL||"/static/js/vmsg.wasm",location).href,this.shimURL=new URL(e.shimURL||"/static/js/wasm-polyfill.js",location).href,this.onStop=t,this.pitch=e.pitch||0,this.stream=null,this.audioCtx=null,this.gainNode=null,this.pitchFX=null,this.encNode=null,this.worker=null,this.workerURL=null,this.blob=null,this.blobURL=null,this.resolve=null,this.reject=null,Object.seal(this)}close(){this.encNode&&this.encNode.disconnect(),this.encNode&&(this.encNode.onaudioprocess=null),this.stream&&this.stopTracks(),this.audioCtx&&this.audioCtx.close(),this.worker&&this.worker.terminate(),this.workerURL&&URL.revokeObjectURL(this.workerURL),this.blobURL&&URL.revokeObjectURL(this.blobURL)}initAudio(){return(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?function(e){return navigator.mediaDevices.getUserMedia(e)}:function(e){const t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(i,a){t.call(navigator,e,i,a)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))})({audio:!0}).then((e=>{this.stream=e;const t=this.audioCtx=new(window.AudioContext||window.webkitAudioContext),i=t.createMediaStreamSource(e),a=this.gainNode=(t.createGain||t.createGainNode).call(t);a.gain.value=1,i.connect(a);const n=this.pitchFX=new N(t);n.setPitchOffset(this.pitch);const s=this.encNode=(t.createScriptProcessor||t.createJavaScriptNode).call(t,0,1,1);n.output.connect(s),a.connect(0===this.pitch?s:n.input)}))}initWorker(){if(!this.stream)throw new Error("missing audio initialization");const e=new Blob(["(",k.toString(),")()"],{type:"application/javascript"}),t=this.workerURL=URL.createObjectURL(e),i=this.worker=new Worker(t),{wasmURL:a,shimURL:n}=this;return i.postMessage({type:"init",data:{wasmURL:a,shimURL:n}}),new Promise(((e,t)=>{i.onmessage=i=>{const a=i.data;switch(a.type){case"init":e();break;case"init-error":t(new Error(a.data));break;case"error":case"internal-error":console.error("Worker error:",a.data),this.reject&&this.reject(a.data);break;case"stop":this.blob=a.data,this.blobURL=URL.createObjectURL(a.data),this.onStop&&this.onStop(),this.resolve&&this.resolve(this.blob)}}}))}init(){return this.initAudio().then(this.initWorker.bind(this))}startRecording(){if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");this.blob=null,this.blobURL&&URL.revokeObjectURL(this.blobURL),this.blobURL=null,this.resolve=null,this.reject=null,this.worker.postMessage({type:"start",data:this.audioCtx.sampleRate}),this.encNode.onaudioprocess=e=>{const t=e.inputBuffer.getChannelData(0);this.worker.postMessage({type:"data",data:t})},this.encNode.connect(this.audioCtx.destination)}stopRecording(){if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");return this.encNode.disconnect(),this.encNode.onaudioprocess=null,this.stopTracks(),this.worker.postMessage({type:"stop",data:null}),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}stopTracks(){this.stream.getTracks&&this.stream.getTracks().forEach((e=>e.stop()))}},L=.05,G=.1;function x(e,t,i,a){for(var n=t*e.sampleRate,s=n+(t-2*i)*e.sampleRate,r=e.createBuffer(1,s,e.sampleRate),o=r.getChannelData(0),c=0;c<n;++c)o[c]=a?(n-c)/s:c/n;for(c=n;c<s;++c)o[c]=0;return r}function N(e){this.context=e;var t=(e.createGain||e.createGainNode).call(e),i=(e.createGain||e.createGainNode).call(e);this.input=t,this.output=i;var a=e.createBufferSource(),n=e.createBufferSource(),s=e.createBufferSource(),r=e.createBufferSource();this.shiftDownBuffer=x(e,G,L,!1),this.shiftUpBuffer=x(e,G,L,!0),a.buffer=this.shiftDownBuffer,n.buffer=this.shiftDownBuffer,s.buffer=this.shiftUpBuffer,r.buffer=this.shiftUpBuffer,a.loop=!0,n.loop=!0,s.loop=!0,r.loop=!0;var o=(e.createGain||e.createGainNode).call(e),c=(e.createGain||e.createGainNode).call(e),l=(e.createGain||e.createGainNode).call(e);l.gain.value=0;var u=(e.createGain||e.createGainNode).call(e);u.gain.value=0,a.connect(o),n.connect(c),s.connect(l),r.connect(u);var h=(e.createGain||e.createGainNode).call(e),d=(e.createGain||e.createGainNode).call(e),p=(e.createDelay||e.createDelayNode).call(e),f=(e.createDelay||e.createDelayNode).call(e);o.connect(h),c.connect(d),l.connect(h),u.connect(d),h.connect(p.delayTime),d.connect(f.delayTime);var m=e.createBufferSource(),g=e.createBufferSource(),v=function(e,t,i){for(var a=.1*e.sampleRate,n=a+0*e.sampleRate,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0),o=.05*e.sampleRate,c=o,l=a-o,u=0;u<a;++u){var h;h=u<c?Math.sqrt(u/o):u>=l?Math.sqrt(1-(u-l)/o):1,r[u]=h}for(u=a;u<n;++u)r[u]=0;return s}(e);m.buffer=v,g.buffer=v,m.loop=!0,g.loop=!0;var y=(e.createGain||e.createGainNode).call(e),w=(e.createGain||e.createGainNode).call(e);y.gain.value=0,w.gain.value=0,m.connect(y.gain),g.connect(w.gain),t.connect(p),t.connect(f),p.connect(y),f.connect(w),y.connect(i),w.connect(i);var R=e.currentTime+.05,b=R+G-L;a.start(R),n.start(b),s.start(R),r.start(b),m.start(R),g.start(b),this.mod1=a,this.mod2=n,this.mod1Gain=o,this.mod2Gain=c,this.mod3Gain=l,this.mod4Gain=u,this.modGain1=h,this.modGain2=d,this.fade1=m,this.fade2=g,this.mix1=y,this.mix2=w,this.delay1=p,this.delay2=f,this.setDelay(.1)}N.prototype.setDelay=function(e){this.modGain1.gain.setTargetAtTime(.5*e,0,.01),this.modGain2.gain.setTargetAtTime(.5*e,0,.01)},N.prototype.setPitchOffset=function(e){e>0?(this.mod1Gain.gain.value=0,this.mod2Gain.gain.value=0,this.mod3Gain.gain.value=1,this.mod4Gain.gain.value=1):(this.mod1Gain.gain.value=1,this.mod2Gain.gain.value=1,this.mod3Gain.gain.value=0,this.mod4Gain.gain.value=0),this.setDelay(.1*Math.abs(e))};var M=i(7139);var S=new U({wasmURL:window.lhcChat.staticJS.chunk_js+"/vmsg.8c4a15f2.wasm",shimURL:"https://unpkg.com/wasm-polyfill.js@0.2.0/wasm-polyfill.js"}),P=function(e){d()(l,e);var t,i,a,s,o=(a=l,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g()(a);if(s){var i=g()(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return f()(this,e)});function l(e){var t;return r()(this,l),t=o.call(this,e),y()(u()(t),"state",{isLoading:!1,isRecording:!1,isPlaying:!1,recording:null,audioDuration:0,currentTime:0}),t.startRecording=t.startRecording.bind(u()(t)),t.stopRecording=t.stopRecording.bind(u()(t)),t.playRecord=t.playRecord.bind(u()(t)),t.stopPlayRecord=t.stopPlayRecord.bind(u()(t)),t.sendRecord=t.sendRecord.bind(u()(t)),t.durationInterval=null,t.playInterval=null,t}return c()(l,[{key:"startRecording",value:(i=n()(R().mark((function e(){var t=this;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.stopPlayRecord(),this.setState({isLoading:!0,audioDuration:0,recording:null,isPlaying:!1,currentTime:0}),e.prev=2,e.next=5,S.initAudio();case 5:return e.next=7,S.initWorker();case 7:S.startRecording(),this.setState({isLoading:!1,isRecording:!0}),this.durationInterval=setInterval((function(){t.setState({audioDuration:t.state.audioDuration+1}),t.state.audioDuration>=t.props.maxSeconds&&t.stopRecording()}),1e3),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),alert("Sorry but voice messages are not supported on your browser!"),this.setState({isLoading:!1});case 16:case"end":return e.stop()}}),e,this,[[2,12]])}))),function(){return i.apply(this,arguments)})},{key:"stopRecording",value:(t=n()(R().mark((function e(){var t;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.stopRecording();case 2:t=e.sent,this.audio=new Audio,this.audio.src=URL.createObjectURL(t),this.setState({isLoading:!1,isRecording:!1,recording:t}),clearInterval(this.durationInterval);case 7:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"playRecord",value:function(){var e=this;this.audio.currentTime=0,this.audio.play(),this.setState({isPlaying:!0}),this.playInterval=setInterval((function(){e.setState({currentTime:Math.round(e.audio.currentTime)}),(e.audio.ended||e.audio.paused)&&e.stopPlayRecord()}),1e3)}},{key:"stopPlayRecord",value:function(){this.state.isPlaying&&(clearInterval(this.playInterval),this.audio.currentTime=0,this.audio.pause(),this.setState({isPlaying:!1,currentTime:0}))}},{key:"sendRecord",value:function(){var e=this,t=this.props.t;this.props.progress(t("file.uploading"));var i=new XMLHttpRequest,a=new FormData;a.append("files",this.state.recording,"record.mp3"),i.open("POST",this.props.base_url+"/file/uploadfile/"+this.props.chat_id+"/"+this.props.hash),i.upload.addEventListener("load",(function(t){e.props.progress("100%"),e.props.onCompletion(),e.props.cancel()})),i.send(a)}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.stopPlayRecord(),this.state.isRecording&&S.stopRecording()}},{key:"pad",value:function(e){return e<10?"0"+e:e}},{key:"render",value:function(){var e=this,t=this.state,i=(t.isLoading,t.isRecording),a=t.recording,n=t.isPlaying,s=this.props.t;return b.createElement("div",{className:"text-nowrap"},b.createElement("i",{className:"material-icons pointer text-danger fs25",title:s("voice.cancel_voice_message"),onClick:function(){return e.props.cancel()}},""),!i&&b.createElement("i",{className:"material-icons fs25 pointer text-danger mr-0",title:s("voice.record_voice_message"),onClick:this.startRecording},""),i&&b.createElement("i",{className:"material-icons fs25 pointer text-danger mr-0",title:s("voice.stop_recording"),onClick:this.stopRecording},""),a&&!1===n&&b.createElement("i",{className:"material-icons pointer text-success mr-0 fs25",title:s("voice.play_recorded"),onClick:this.playRecord},""),a&&!0===n&&b.createElement("i",{className:"material-icons pointer text-success mr-0 fs25",title:s("voice.stop_playing_recorded"),onClick:this.stopPlayRecord},""),b.createElement("span",{className:"fs12 px-1"},i?"":n?this.pad(this.state.currentTime)+":":"",i||!a?this.props.maxSeconds-this.state.audioDuration+" s.":this.pad(this.state.audioDuration)+(n?"":"s.")),a&&b.createElement("i",{className:"material-icons pointer text-success mr-0 fs25",title:s("voice.send"),onClick:this.sendRecord},""))}}]),l}(b.PureComponent);const A=(0,M.Z)()(P)}}]);
//# sourceMappingURL=218.26c8da703dc4e9f54a5a.js.map