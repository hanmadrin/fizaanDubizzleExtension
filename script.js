!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).io=e()}(this,(function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function a(t,e){return a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},a(t,e)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(t,e,n){return u=c()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&a(i,n.prototype),i},u.apply(null,arguments)}function h(t){var e="function"==typeof Map?new Map:void 0;return h=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,s(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},h(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}function p(t){var e=c();return function(){var n,r=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function d(t,e,n){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}},d(t,e,n||t)}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}var g=Object.create(null);g.open="0",g.close="1",g.ping="2",g.pong="3",g.message="4",g.upgrade="5",g.noop="6";var m=Object.create(null);Object.keys(g).forEach((function(t){m[g[t]]=t}));for(var k={type:"error",data:"parser error"},b="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),w="function"==typeof ArrayBuffer,_=function(t,e,n){var r,i=t.type,o=t.data;return b&&o instanceof Blob?e?n(o):A(o,n):w&&(o instanceof ArrayBuffer||(r=o,"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer))?e?n(o):A(new Blob([o]),n):n(g[i]+(o||""))},A=function(t,e){var n=new FileReader;return n.onload=function(){var t=n.result.split(",")[1];e("b"+t)},n.readAsDataURL(t)},E="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",O="undefined"==typeof Uint8Array?[]:new Uint8Array(256),R=0;R<E.length;R++)O[E.charCodeAt(R)]=R;var T="function"==typeof ArrayBuffer,C=function(t,e){if("string"!=typeof t)return{type:"message",data:S(t,e)};var n=t.charAt(0);return"b"===n?{type:"message",data:B(t.substring(1),e)}:m[n]?t.length>1?{type:m[n],data:t.substring(1)}:{type:m[n]}:k},B=function(t,e){if(T){var n=function(t){var e,n,r,i,o,s=.75*t.length,a=t.length,c=0;"="===t[t.length-1]&&(s--,"="===t[t.length-2]&&s--);var u=new ArrayBuffer(s),h=new Uint8Array(u);for(e=0;e<a;e+=4)n=O[t.charCodeAt(e)],r=O[t.charCodeAt(e+1)],i=O[t.charCodeAt(e+2)],o=O[t.charCodeAt(e+3)],h[c++]=n<<2|r>>4,h[c++]=(15&r)<<4|i>>2,h[c++]=(3&i)<<6|63&o;return u}(t);return S(n,e)}return{base64:!0,data:t}},S=function(t,e){return"blob"===e&&t instanceof ArrayBuffer?new Blob([t]):t},N=String.fromCharCode(30);function x(t){if(t)return function(t){for(var e in x.prototype)t[e]=x.prototype[e];return t}(t)}x.prototype.on=x.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},x.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},x.prototype.off=x.prototype.removeListener=x.prototype.removeAllListeners=x.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n,r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i=0;i<r.length;i++)if((n=r[i])===e||n.fn===e){r.splice(i,1);break}return 0===r.length&&delete this._callbacks["$"+t],this},x.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){r=0;for(var i=(n=n.slice(0)).length;r<i;++r)n[r].apply(this,e)}return this},x.prototype.emitReserved=x.prototype.emit,x.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},x.prototype.hasListeners=function(t){return!!this.listeners(t).length};var L="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function P(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.reduce((function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e}),{})}var j=setTimeout,q=clearTimeout;function I(t,e){e.useNativeTimers?(t.setTimeoutFn=j.bind(L),t.clearTimeoutFn=q.bind(L)):(t.setTimeoutFn=setTimeout.bind(L),t.clearTimeoutFn=clearTimeout.bind(L))}var D,F=function(t){o(r,t);var n=p(r);function r(t,i,o){var s;return e(this,r),(s=n.call(this,t)).description=i,s.context=o,s.type="TransportError",s}return r}(h(Error)),M=function(t){o(i,t);var n=p(i);function i(t){var r;return e(this,i),(r=n.call(this)).writable=!1,I(f(r),t),r.opts=t,r.query=t.query,r.readyState="",r.socket=t.socket,r}return r(i,[{key:"onError",value:function(t,e,n){return d(s(i.prototype),"emitReserved",this).call(this,"error",new F(t,e,n)),this}},{key:"open",value:function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this}},{key:"close",value:function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}},{key:"send",value:function(t){"open"===this.readyState&&this.write(t)}},{key:"onOpen",value:function(){this.readyState="open",this.writable=!0,d(s(i.prototype),"emitReserved",this).call(this,"open")}},{key:"onData",value:function(t){var e=C(t,this.socket.binaryType);this.onPacket(e)}},{key:"onPacket",value:function(t){d(s(i.prototype),"emitReserved",this).call(this,"packet",t)}},{key:"onClose",value:function(t){this.readyState="closed",d(s(i.prototype),"emitReserved",this).call(this,"close",t)}}]),i}(x),U="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),V={},H=0,K=0;function Y(t){var e="";do{e=U[t%64]+e,t=Math.floor(t/64)}while(t>0);return e}function z(){var t=Y(+new Date);return t!==D?(H=0,D=t):t+"."+Y(H++)}for(;K<64;K++)V[U[K]]=K;function W(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function $(t){for(var e={},n=t.split("&"),r=0,i=n.length;r<i;r++){var o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}var J=!1;try{J="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){}var X=J;function G(t){var e=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!e||X))return new XMLHttpRequest}catch(t){}if(!e)try{return new(L[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}function Q(){}var Z=null!=new G({xdomain:!1}).responseType,tt=function(t){o(s,t);var n=p(s);function s(t){var r;if(e(this,s),(r=n.call(this,t)).polling=!1,"undefined"!=typeof location){var i="https:"===location.protocol,o=location.port;o||(o=i?"443":"80"),r.xd="undefined"!=typeof location&&t.hostname!==location.hostname||o!==t.port,r.xs=t.secure!==i}var a=t&&t.forceBase64;return r.supportsBinary=Z&&!a,r}return r(s,[{key:"name",get:function(){return"polling"}},{key:"doOpen",value:function(){this.poll()}},{key:"pause",value:function(t){var e=this;this.readyState="pausing";var n=function(){e.readyState="paused",t()};if(this.polling||!this.writable){var r=0;this.polling&&(r++,this.once("pollComplete",(function(){--r||n()}))),this.writable||(r++,this.once("drain",(function(){--r||n()})))}else n()}},{key:"poll",value:function(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}},{key:"onData",value:function(t){var e=this;(function(t,e){for(var n=t.split(N),r=[],i=0;i<n.length;i++){var o=C(n[i],e);if(r.push(o),"error"===o.type)break}return r})(t,this.socket.binaryType).forEach((function(t){if("opening"===e.readyState&&"open"===t.type&&e.onOpen(),"close"===t.type)return e.onClose({description:"transport closed by the server"}),!1;e.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}},{key:"doClose",value:function(){var t=this,e=function(){t.write([{type:"close"}])};"open"===this.readyState?e():this.once("open",e)}},{key:"write",value:function(t){var e=this;this.writable=!1,function(t,e){var n=t.length,r=new Array(n),i=0;t.forEach((function(t,o){_(t,!1,(function(t){r[o]=t,++i===n&&e(r.join(N))}))}))}(t,(function(t){e.doWrite(t,(function(){e.writable=!0,e.emitReserved("drain")}))}))}},{key:"uri",value:function(){var t=this.query||{},e=this.opts.secure?"https":"http",n="";!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=z()),this.supportsBinary||t.sid||(t.b64=1),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(n=":"+this.opts.port);var r=W(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}},{key:"request",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(t,{xd:this.xd,xs:this.xs},this.opts),new et(this.uri(),t)}},{key:"doWrite",value:function(t,e){var n=this,r=this.request({method:"POST",data:t});r.on("success",e),r.on("error",(function(t,e){n.onError("xhr post error",t,e)}))}},{key:"doPoll",value:function(){var t=this,e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(function(e,n){t.onError("xhr poll error",e,n)})),this.pollXhr=e}}]),s}(M),et=function(t){o(i,t);var n=p(i);function i(t,r){var o;return e(this,i),I(f(o=n.call(this)),r),o.opts=r,o.method=r.method||"GET",o.uri=t,o.async=!1!==r.async,o.data=void 0!==r.data?r.data:null,o.create(),o}return r(i,[{key:"create",value:function(){var t=this,e=P(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;var n=this.xhr=new G(e);try{n.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders)for(var r in n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0),this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&n.setRequestHeader(r,this.opts.extraHeaders[r])}catch(t){}if("POST"===this.method)try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{n.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=function(){4===n.readyState&&(200===n.status||1223===n.status?t.onLoad():t.setTimeoutFn((function(){t.onError("number"==typeof n.status?n.status:0)}),0))},n.send(this.data)}catch(e){return void this.setTimeoutFn((function(){t.onError(e)}),0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)}},{key:"onError",value:function(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}},{key:"cleanup",value:function(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=Q,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}}},{key:"onLoad",value:function(){var t=this.xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}},{key:"abort",value:function(){this.cleanup()}}]),i}(x);if(et.requestsCount=0,et.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",nt);else if("function"==typeof addEventListener){addEventListener("onpagehide"in L?"pagehide":"unload",nt,!1)}function nt(){for(var t in et.requests)et.requests.hasOwnProperty(t)&&et.requests[t].abort()}var rt="function"==typeof Promise&&"function"==typeof Promise.resolve?function(t){return Promise.resolve().then(t)}:function(t,e){return e(t,0)},it=L.WebSocket||L.MozWebSocket,ot="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),st=function(t){o(i,t);var n=p(i);function i(t){var r;return e(this,i),(r=n.call(this,t)).supportsBinary=!t.forceBase64,r}return r(i,[{key:"name",get:function(){return"websocket"}},{key:"doOpen",value:function(){if(this.check()){var t=this.uri(),e=this.opts.protocols,n=ot?{}:P(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=ot?new it(t,e,n):e?new it(t,e):new it(t)}catch(t){return this.emitReserved("error",t)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}}},{key:"addEventListeners",value:function(){var t=this;this.ws.onopen=function(){t.opts.autoUnref&&t.ws._socket.unref(),t.onOpen()},this.ws.onclose=function(e){return t.onClose({description:"websocket connection closed",context:e})},this.ws.onmessage=function(e){return t.onData(e.data)},this.ws.onerror=function(e){return t.onError("websocket error",e)}}},{key:"write",value:function(t){var e=this;this.writable=!1;for(var n=function(n){var r=t[n],i=n===t.length-1;_(r,e.supportsBinary,(function(t){try{e.ws.send(t)}catch(t){}i&&rt((function(){e.writable=!0,e.emitReserved("drain")}),e.setTimeoutFn)}))},r=0;r<t.length;r++)n(r)}},{key:"doClose",value:function(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}},{key:"uri",value:function(){var t=this.query||{},e=this.opts.secure?"wss":"ws",n="";this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(n=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=z()),this.supportsBinary||(t.b64=1);var r=W(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+n+this.opts.path+(r.length?"?"+r:"")}},{key:"check",value:function(){return!(!it||"__initialize"in it&&this.name===i.prototype.name)}}]),i}(M),at={websocket:st,polling:tt},ct=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,ut=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ht(t){var e=t,n=t.indexOf("["),r=t.indexOf("]");-1!=n&&-1!=r&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));for(var i,o,s=ct.exec(t||""),a={},c=14;c--;)a[ut[c]]=s[c]||"";return-1!=n&&-1!=r&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a.pathNames=function(t,e){var n=/\/{2,9}/g,r=e.replace(n,"/").split("/");"/"!=e.substr(0,1)&&0!==e.length||r.splice(0,1);"/"==e.substr(e.length-1,1)&&r.splice(r.length-1,1);return r}(0,a.path),a.queryKey=(i=a.query,o={},i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,n){e&&(o[e]=n)})),o),a}var ft=function(n){o(a,n);var s=p(a);function a(n){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(this,a),r=s.call(this),n&&"object"===t(n)&&(o=n,n=null),n?(n=ht(n),o.hostname=n.host,o.secure="https"===n.protocol||"wss"===n.protocol,o.port=n.port,n.query&&(o.query=n.query)):o.host&&(o.hostname=ht(o.host).host),I(f(r),o),r.secure=null!=o.secure?o.secure:"undefined"!=typeof location&&"https:"===location.protocol,o.hostname&&!o.port&&(o.port=r.secure?"443":"80"),r.hostname=o.hostname||("undefined"!=typeof location?location.hostname:"localhost"),r.port=o.port||("undefined"!=typeof location&&location.port?location.port:r.secure?"443":"80"),r.transports=o.transports||["polling","websocket"],r.readyState="",r.writeBuffer=[],r.prevBufferLen=0,r.opts=i({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},o),r.opts.path=r.opts.path.replace(/\/$/,"")+"/","string"==typeof r.opts.query&&(r.opts.query=$(r.opts.query)),r.id=null,r.upgrades=null,r.pingInterval=null,r.pingTimeout=null,r.pingTimeoutTimer=null,"function"==typeof addEventListener&&(r.opts.closeOnBeforeunload&&addEventListener("beforeunload",(function(){r.transport&&(r.transport.removeAllListeners(),r.transport.close())}),!1),"localhost"!==r.hostname&&(r.offlineEventListener=function(){r.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",r.offlineEventListener,!1))),r.open(),r}return r(a,[{key:"createTransport",value:function(t){var e=i({},this.opts.query);e.EIO=4,e.transport=t,this.id&&(e.sid=this.id);var n=i({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new at[t](n)}},{key:"open",value:function(){var t,e=this;if(this.opts.rememberUpgrade&&a.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((function(){e.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}},{key:"setTransport",value:function(t){var e=this;this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(function(t){return e.onClose("transport close",t)}))}},{key:"probe",value:function(t){var e=this,n=this.createTransport(t),r=!1;a.priorWebsocketSuccess=!1;var i=function(){r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",(function(t){if(!r)if("pong"===t.type&&"probe"===t.data){if(e.upgrading=!0,e.emitReserved("upgrading",n),!n)return;a.priorWebsocketSuccess="websocket"===n.name,e.transport.pause((function(){r||"closed"!==e.readyState&&(f(),e.setTransport(n),n.send([{type:"upgrade"}]),e.emitReserved("upgrade",n),n=null,e.upgrading=!1,e.flush())}))}else{var i=new Error("probe error");i.transport=n.name,e.emitReserved("upgradeError",i)}})))};function o(){r||(r=!0,f(),n.close(),n=null)}var s=function(t){var r=new Error("probe error: "+t);r.transport=n.name,o(),e.emitReserved("upgradeError",r)};function c(){s("transport closed")}function u(){s("socket closed")}function h(t){n&&t.name!==n.name&&o()}var f=function(){n.removeListener("open",i),n.removeListener("error",s),n.removeListener("close",c),e.off("close",u),e.off("upgrading",h)};n.once("open",i),n.once("error",s),n.once("close",c),this.once("close",u),this.once("upgrading",h),n.open()}},{key:"onOpen",value:function(){if(this.readyState="open",a.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause)for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},{key:"onPacket",value:function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}},{key:"onHandshake",value:function(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}},{key:"resetPingTimeout",value:function(){var t=this;this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((function(){t.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}},{key:"onDrain",value:function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}},{key:"flush",value:function(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){var t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}},{key:"getWritablePackets",value:function(){if(!(this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;for(var t,e=1,n=0;n<this.writeBuffer.length;n++){var r=this.writeBuffer[n].data;if(r&&(e+="string"==typeof(t=r)?function(t){for(var e=0,n=0,r=0,i=t.length;r<i;r++)(e=t.charCodeAt(r))<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}(t):Math.ceil(1.33*(t.byteLength||t.size))),n>0&&e>this.maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}},{key:"write",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"send",value:function(t,e,n){return this.sendPacket("message",t,e,n),this}},{key:"sendPacket",value:function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){(n=n||{}).compress=!1!==n.compress;var i={type:t,data:e,options:n};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}}},{key:"close",value:function(){var t=this,e=function(){t.onClose("forced close"),t.transport.close()},n=function n(){t.off("upgrade",n),t.off("upgradeError",n),e()},r=function(){t.once("upgrade",n),t.once("upgradeError",n)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(function(){t.upgrading?r():e()})):this.upgrading?r():e()),this}},{key:"onError",value:function(t){a.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}},{key:"onClose",value:function(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}},{key:"filterUpgrades",value:function(t){for(var e=[],n=0,r=t.length;n<r;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}}]),a}(x);ft.protocol=4;var lt="function"==typeof ArrayBuffer,pt=Object.prototype.toString,dt="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===pt.call(Blob),yt="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===pt.call(File);function vt(t){return lt&&(t instanceof ArrayBuffer||function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}(t))||dt&&t instanceof Blob||yt&&t instanceof File}function gt(e,n){if(!e||"object"!==t(e))return!1;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)if(gt(e[r]))return!0;return!1}if(vt(e))return!0;if(e.toJSON&&"function"==typeof e.toJSON&&1===arguments.length)return gt(e.toJSON(),!0);for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&gt(e[o]))return!0;return!1}function mt(t){var e=[],n=t.data,r=t;return r.data=kt(n,e),r.attachments=e.length,{packet:r,buffers:e}}function kt(e,n){if(!e)return e;if(vt(e)){var r={_placeholder:!0,num:n.length};return n.push(e),r}if(Array.isArray(e)){for(var i=new Array(e.length),o=0;o<e.length;o++)i[o]=kt(e[o],n);return i}if("object"===t(e)&&!(e instanceof Date)){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(s[a]=kt(e[a],n));return s}return e}function bt(t,e){return t.data=wt(t.data,e),t.attachments=void 0,t}function wt(e,n){if(!e)return e;if(e&&e._placeholder)return n[e.num];if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]=wt(e[r],n);else if("object"===t(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(e[i]=wt(e[i],n));return e}var _t;!function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"}(_t||(_t={}));var At=function(){function t(n){e(this,t),this.replacer=n}return r(t,[{key:"encode",value:function(t){return t.type!==_t.EVENT&&t.type!==_t.ACK||!gt(t)?[this.encodeAsString(t)]:(t.type=t.type===_t.EVENT?_t.BINARY_EVENT:_t.BINARY_ACK,this.encodeAsBinary(t))}},{key:"encodeAsString",value:function(t){var e=""+t.type;return t.type!==_t.BINARY_EVENT&&t.type!==_t.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e}},{key:"encodeAsBinary",value:function(t){var e=mt(t),n=this.encodeAsString(e.packet),r=e.buffers;return r.unshift(n),r}}]),t}(),Et=function(n){o(a,n);var i=p(a);function a(t){var n;return e(this,a),(n=i.call(this)).reviver=t,n}return r(a,[{key:"add",value:function(t){var e;if("string"==typeof t)(e=this.decodeString(t)).type===_t.BINARY_EVENT||e.type===_t.BINARY_ACK?(this.reconstructor=new Ot(e),0===e.attachments&&d(s(a.prototype),"emitReserved",this).call(this,"decoded",e)):d(s(a.prototype),"emitReserved",this).call(this,"decoded",e);else{if(!vt(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");(e=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,d(s(a.prototype),"emitReserved",this).call(this,"decoded",e))}}},{key:"decodeString",value:function(t){var e=0,n={type:Number(t.charAt(0))};if(void 0===_t[n.type])throw new Error("unknown packet type "+n.type);if(n.type===_t.BINARY_EVENT||n.type===_t.BINARY_ACK){for(var r=e+1;"-"!==t.charAt(++e)&&e!=t.length;);var i=t.substring(r,e);if(i!=Number(i)||"-"!==t.charAt(e))throw new Error("Illegal attachments");n.attachments=Number(i)}if("/"===t.charAt(e+1)){for(var o=e+1;++e;){if(","===t.charAt(e))break;if(e===t.length)break}n.nsp=t.substring(o,e)}else n.nsp="/";var s=t.charAt(e+1);if(""!==s&&Number(s)==s){for(var c=e+1;++e;){var u=t.charAt(e);if(null==u||Number(u)!=u){--e;break}if(e===t.length)break}n.id=Number(t.substring(c,e+1))}if(t.charAt(++e)){var h=this.tryParse(t.substr(e));if(!a.isPayloadValid(n.type,h))throw new Error("invalid payload");n.data=h}return n}},{key:"tryParse",value:function(t){try{return JSON.parse(t,this.reviver)}catch(t){return!1}}},{key:"destroy",value:function(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}],[{key:"isPayloadValid",value:function(e,n){switch(e){case _t.CONNECT:return"object"===t(n);case _t.DISCONNECT:return void 0===n;case _t.CONNECT_ERROR:return"string"==typeof n||"object"===t(n);case _t.EVENT:case _t.BINARY_EVENT:return Array.isArray(n)&&n.length>0;case _t.ACK:case _t.BINARY_ACK:return Array.isArray(n)}}}]),a}(x),Ot=function(){function t(n){e(this,t),this.packet=n,this.buffers=[],this.reconPack=n}return r(t,[{key:"takeBinaryData",value:function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=bt(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}},{key:"finishedReconstruction",value:function(){this.reconPack=null,this.buffers=[]}}]),t}(),Rt=Object.freeze({__proto__:null,protocol:5,get PacketType(){return _t},Encoder:At,Decoder:Et});function Tt(t,e,n){return t.on(e,n),function(){t.off(e,n)}}var Ct=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),Bt=function(t){o(i,t);var n=p(i);function i(t,r,o){var s;return e(this,i),(s=n.call(this)).connected=!1,s.receiveBuffer=[],s.sendBuffer=[],s.ids=0,s.acks={},s.flags={},s.io=t,s.nsp=r,o&&o.auth&&(s.auth=o.auth),s.io._autoConnect&&s.open(),s}return r(i,[{key:"disconnected",get:function(){return!this.connected}},{key:"subEvents",value:function(){if(!this.subs){var t=this.io;this.subs=[Tt(t,"open",this.onopen.bind(this)),Tt(t,"packet",this.onpacket.bind(this)),Tt(t,"error",this.onerror.bind(this)),Tt(t,"close",this.onclose.bind(this))]}}},{key:"active",get:function(){return!!this.subs}},{key:"connect",value:function(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}},{key:"open",value:function(){return this.connect()}},{key:"send",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.unshift("message"),this.emit.apply(this,e),this}},{key:"emit",value:function(t){if(Ct.hasOwnProperty(t))throw new Error('"'+t+'" is a reserved event name');for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];n.unshift(t);var i={type:_t.EVENT,data:n,options:{}};if(i.options.compress=!1!==this.flags.compress,"function"==typeof n[n.length-1]){var o=this.ids++,s=n.pop();this._registerAckCallback(o,s),i.id=o}var a=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable,c=this.flags.volatile&&(!a||!this.connected);return c||(this.connected?(this.notifyOutgoingListeners(i),this.packet(i)):this.sendBuffer.push(i)),this.flags={},this}},{key:"_registerAckCallback",value:function(t,e){var n=this,r=this.flags.timeout;if(void 0!==r){var i=this.io.setTimeoutFn((function(){delete n.acks[t];for(var r=0;r<n.sendBuffer.length;r++)n.sendBuffer[r].id===t&&n.sendBuffer.splice(r,1);e.call(n,new Error("operation has timed out"))}),r);this.acks[t]=function(){n.io.clearTimeoutFn(i);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(n,[null].concat(r))}}else this.acks[t]=e}},{key:"packet",value:function(t){t.nsp=this.nsp,this.io._packet(t)}},{key:"onopen",value:function(){var t=this;"function"==typeof this.auth?this.auth((function(e){t.packet({type:_t.CONNECT,data:e})})):this.packet({type:_t.CONNECT,data:this.auth})}},{key:"onerror",value:function(t){this.connected||this.emitReserved("connect_error",t)}},{key:"onclose",value:function(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}},{key:"onpacket",value:function(t){if(t.nsp===this.nsp)switch(t.type){case _t.CONNECT:if(t.data&&t.data.sid){var e=t.data.sid;this.onconnect(e)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case _t.EVENT:case _t.BINARY_EVENT:this.onevent(t);break;case _t.ACK:case _t.BINARY_ACK:this.onack(t);break;case _t.DISCONNECT:this.ondisconnect();break;case _t.CONNECT_ERROR:this.destroy();var n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n)}}},{key:"onevent",value:function(t){var e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}},{key:"emitEvent",value:function(t){if(this._anyListeners&&this._anyListeners.length){var e,n=v(this._anyListeners.slice());try{for(n.s();!(e=n.n()).done;){e.value.apply(this,t)}}catch(t){n.e(t)}finally{n.f()}}d(s(i.prototype),"emit",this).apply(this,t)}},{key:"ack",value:function(t){var e=this,n=!1;return function(){if(!n){n=!0;for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];e.packet({type:_t.ACK,id:t,data:i})}}}},{key:"onack",value:function(t){var e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}},{key:"onconnect",value:function(t){this.id=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}},{key:"emitBuffered",value:function(){var t=this;this.receiveBuffer.forEach((function(e){return t.emitEvent(e)})),this.receiveBuffer=[],this.sendBuffer.forEach((function(e){t.notifyOutgoingListeners(e),t.packet(e)})),this.sendBuffer=[]}},{key:"ondisconnect",value:function(){this.destroy(),this.onclose("io server disconnect")}},{key:"destroy",value:function(){this.subs&&(this.subs.forEach((function(t){return t()})),this.subs=void 0),this.io._destroy(this)}},{key:"disconnect",value:function(){return this.connected&&this.packet({type:_t.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}},{key:"close",value:function(){return this.disconnect()}},{key:"compress",value:function(t){return this.flags.compress=t,this}},{key:"volatile",get:function(){return this.flags.volatile=!0,this}},{key:"timeout",value:function(t){return this.flags.timeout=t,this}},{key:"onAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}},{key:"prependAny",value:function(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}},{key:"offAny",value:function(t){if(!this._anyListeners)return this;if(t){for(var e=this._anyListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}},{key:"listenersAny",value:function(){return this._anyListeners||[]}},{key:"onAnyOutgoing",value:function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}},{key:"prependAnyOutgoing",value:function(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}},{key:"offAnyOutgoing",value:function(t){if(!this._anyOutgoingListeners)return this;if(t){for(var e=this._anyOutgoingListeners,n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}},{key:"listenersAnyOutgoing",value:function(){return this._anyOutgoingListeners||[]}},{key:"notifyOutgoingListeners",value:function(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){var e,n=v(this._anyOutgoingListeners.slice());try{for(n.s();!(e=n.n()).done;){e.value.apply(this,t.data)}}catch(t){n.e(t)}finally{n.f()}}}}]),i}(x);function St(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}St.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},St.prototype.reset=function(){this.attempts=0},St.prototype.setMin=function(t){this.ms=t},St.prototype.setMax=function(t){this.max=t},St.prototype.setJitter=function(t){this.jitter=t};var Nt=function(n){o(s,n);var i=p(s);function s(n,r){var o,a;e(this,s),(o=i.call(this)).nsps={},o.subs=[],n&&"object"===t(n)&&(r=n,n=void 0),(r=r||{}).path=r.path||"/socket.io",o.opts=r,I(f(o),r),o.reconnection(!1!==r.reconnection),o.reconnectionAttempts(r.reconnectionAttempts||1/0),o.reconnectionDelay(r.reconnectionDelay||1e3),o.reconnectionDelayMax(r.reconnectionDelayMax||5e3),o.randomizationFactor(null!==(a=r.randomizationFactor)&&void 0!==a?a:.5),o.backoff=new St({min:o.reconnectionDelay(),max:o.reconnectionDelayMax(),jitter:o.randomizationFactor()}),o.timeout(null==r.timeout?2e4:r.timeout),o._readyState="closed",o.uri=n;var c=r.parser||Rt;return o.encoder=new c.Encoder,o.decoder=new c.Decoder,o._autoConnect=!1!==r.autoConnect,o._autoConnect&&o.open(),o}return r(s,[{key:"reconnection",value:function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}},{key:"reconnectionAttempts",value:function(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}},{key:"reconnectionDelay",value:function(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}},{key:"randomizationFactor",value:function(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}},{key:"reconnectionDelayMax",value:function(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}},{key:"timeout",value:function(t){return arguments.length?(this._timeout=t,this):this._timeout}},{key:"maybeReconnectOnOpen",value:function(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}},{key:"open",value:function(t){var e=this;if(~this._readyState.indexOf("open"))return this;this.engine=new ft(this.uri,this.opts);var n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;var i=Tt(n,"open",(function(){r.onopen(),t&&t()})),o=Tt(n,"error",(function(n){r.cleanup(),r._readyState="closed",e.emitReserved("error",n),t?t(n):r.maybeReconnectOnOpen()}));if(!1!==this._timeout){var s=this._timeout;0===s&&i();var a=this.setTimeoutFn((function(){i(),n.close(),n.emit("error",new Error("timeout"))}),s);this.opts.autoUnref&&a.unref(),this.subs.push((function(){clearTimeout(a)}))}return this.subs.push(i),this.subs.push(o),this}},{key:"connect",value:function(t){return this.open(t)}},{key:"onopen",value:function(){this.cleanup(),this._readyState="open",this.emitReserved("open");var t=this.engine;this.subs.push(Tt(t,"ping",this.onping.bind(this)),Tt(t,"data",this.ondata.bind(this)),Tt(t,"error",this.onerror.bind(this)),Tt(t,"close",this.onclose.bind(this)),Tt(this.decoder,"decoded",this.ondecoded.bind(this)))}},{key:"onping",value:function(){this.emitReserved("ping")}},{key:"ondata",value:function(t){this.decoder.add(t)}},{key:"ondecoded",value:function(t){this.emitReserved("packet",t)}},{key:"onerror",value:function(t){this.emitReserved("error",t)}},{key:"socket",value:function(t,e){var n=this.nsps[t];return n||(n=new Bt(this,t,e),this.nsps[t]=n),n}},{key:"_destroy",value:function(t){for(var e=0,n=Object.keys(this.nsps);e<n.length;e++){var r=n[e];if(this.nsps[r].active)return}this._close()}},{key:"_packet",value:function(t){for(var e=this.encoder.encode(t),n=0;n<e.length;n++)this.engine.write(e[n],t.options)}},{key:"cleanup",value:function(){this.subs.forEach((function(t){return t()})),this.subs.length=0,this.decoder.destroy()}},{key:"_close",value:function(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}},{key:"disconnect",value:function(){return this._close()}},{key:"onclose",value:function(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}},{key:"reconnect",value:function(){var t=this;if(this._reconnecting||this.skipReconnect)return this;var e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{var n=this.backoff.duration();this._reconnecting=!0;var r=this.setTimeoutFn((function(){e.skipReconnect||(t.emitReserved("reconnect_attempt",e.backoff.attempts),e.skipReconnect||e.open((function(n){n?(e._reconnecting=!1,e.reconnect(),t.emitReserved("reconnect_error",n)):e.onreconnect()})))}),n);this.opts.autoUnref&&r.unref(),this.subs.push((function(){clearTimeout(r)}))}}},{key:"onreconnect",value:function(){var t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}]),s}(x),xt={};function Lt(e,n){"object"===t(e)&&(n=e,e=void 0);var r,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=t;n=n||"undefined"!=typeof location&&location,null==t&&(t=n.protocol+"//"+n.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?n.protocol+t:n.host+t),/^(https?|wss?):\/\//.test(t)||(t=void 0!==n?n.protocol+"//"+t:"https://"+t),r=ht(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";var i=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+e,r.href=r.protocol+"://"+i+(n&&n.port===r.port?"":":"+r.port),r}(e,(n=n||{}).path||"/socket.io"),o=i.source,s=i.id,a=i.path,c=xt[s]&&a in xt[s].nsps;return n.forceNew||n["force new connection"]||!1===n.multiplex||c?r=new Nt(o,n):(xt[s]||(xt[s]=new Nt(o,n)),r=xt[s]),i.query&&!n.query&&(n.query=i.queryKey),r.socket(i.path,n)}return i(Lt,{Manager:Nt,Socket:Bt,io:Lt,connect:Lt}),Lt}));

class ChromeStorage{
    constructor(name){
        if(typeof name!=='string') throw new Error ('unknown value for a storage key');
        this.name = name;
    }
    async GET() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(this.name, (result) => { resolve(result[this.name]); }); 
        }); 
    }
    async SET(db) {
        return new Promise((resolve, reject) => {
            const obj = {};
            obj[this.name]=db;
            chrome.storage.local.set(obj, function() {resolve(db)});
        });
    }
}
class ChromeStorageDB{
    constructor({name,attributes}){
        let storageSetup =  this.#constructionCheck({name,attributes});
        /*db name (a string)*/
        this.name = storageSetup.name;
        /*
        attributes has 5 parameter
        type: ('string','number','boolean') -defalut 'number' 
        autoIncrement: (true,false) - default false
        primaryKey: (true,false) - default false
        allowNull: (true,false) - default false
        default: ('string','number','boolean',null) - default null
        */
        this.attributes = storageSetup.attributes;
    }   
    #constructionCheck({name,attributes}){
        if(!name) throw new Error ('storage must have a name value(string)');
        if(!attributes) throw new Error ('storage must have some attributes(object)');

        let attributeKeys = Object.keys(attributes);
        if(attributeKeys.length == 0) throw new Error ('attributes must have 1 or more keys');
        /* if(attributeKeys.length != [...new Set(attributeKeys)].length) throw new Error ('each attribute must be unique')*/
        for(let i=0;i<attributeKeys.length;i++){
            let attribute = attributes[attributeKeys[i]];
            if(typeof attribute.type == 'undefined') attribute.type = 'number';
            if(typeof attribute.autoIncrement == 'undefined') attribute.autoIncrement = false;
            if(typeof attribute.primaryKey == 'undefined') attribute.primaryKey = false;
            if(typeof attribute.allowNull == 'undefined') attribute.allowNull = false;
            if(typeof attribute.default == 'undefined') attribute.default = null;
            
            if(!(attribute.type=='number' || attribute.type=='boolean' || attribute.type=='string' /*|| attribute.type=='object' || attribute.type=='array'*/)) throw new Error ('unknown attribute type')
            if(!(attribute.autoIncrement === true || attribute.autoIncrement === false)) throw new Error ('unknown value for autoIncrement');
            if(!(attribute.primaryKey === true || attribute.primaryKey === false)) throw new Error ('unknown value for primaryKey');
            if(!(attribute.allowNull === true || attribute.allowNull === false)) throw new Error ('unknown value for allowNull');
            
            if(attribute.type!='number' && attribute.autoIncrement) throw new Error('autoIncrement is only for number data type');
            if(attribute.primaryKey && attribute.default!=null) throw new Error('primaryKey with default value is not possible');

            if(attribute.default!=null && typeof attribute.default != attribute.type) throw new Error('default value should be equal to key type')
        }
        return {name,attributes};
    }
    async #build(){
        let thisDB = await this.#getDB();
        if(typeof thisDB!='object' || !Array.isArray(thisDB)) {
            await this.#setDB([]);
            thisDB = await this.#getDB();
        }
    }
    async #getDB() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(this.name, (result) => { resolve(result[this.name]); }); 
        }); 
    }
    async #setDB(db) {
        return new Promise((resolve, reject) => {
            let obj = {};
            obj[this.name]=db;
            chrome.storage.local.set(obj, function() {resolve(true)});
        });
    }
    #POSTCheck = (row) => {
        if(typeof row !='object' && Array.isArray(row)) throw new Error ('New row is not enough to get entried');
        if(!row) throw new Error('Row is just empty');
        let rowKeys = Object.keys(row);
        if(!rowKeys.length) throw new Error('Row is  empty');

        let attributes = this.attributes;
        let attributesKeys = Object.keys(attributes);
        for(let i=0;i<attributesKeys.length;i++){
            let attribute = attributes[attributesKeys[i]];
            if(!attribute.autoIncrement){
                if(typeof(row[attributesKeys[i]])!=attribute.type || typeof(row[attributesKeys[i]])=='undefined'){
                    if(typeof(row[attributesKeys[i]])!='undefined') throw new Error (`wrong data type for '${attributesKeys[i]}' key`);
                    if(attribute.primaryKey) throw new Error (`Primary key '${attributesKeys[i]}' must be a valid data`);
                    if(attribute.default==null && !attribute.allowNull) throw new Error (`No valid data provided for '${attributesKeys[i]}' key`);
                    row[attributesKeys[i]] = attribute.default;
                }
            }
        }
        return row;
    }
    async POST(row){
        await this.#build();
        let db = await this.#getDB();
        row = this.#POSTCheck(row);
        let attributes = this.attributes;
        let attributesKeys = Object.keys(attributes);
        for(let i=0;i<attributesKeys.length;i++){
            let attribute = attributes[attributesKeys[i]];
            if(attribute.autoIncrement){
                row[attributesKeys[i]] = 1;
                if(db.length!=0){
                    row[attributesKeys[i]] = (db[db.length-1].id)+1;
                }
            }
            if(attribute.primaryKey){
                if(db.find( data => {return data[attributesKeys[i]] === row[attributesKeys[i]]} ) != undefined)
                throw new Error (`primaryKey '${attributesKeys[i]}' value is not unique`);
                // console.log(`primaryKey '${attributesKeys[i]}' value is not unique`);
            }
        }
        db.push(row);
        await this.#setDB(db);
        return db;
    }
    async GET(where){
        await this.#build();
        where = this.#WHERECheck(where);
        const db = await this.#getDB();
        if(where==null) return db; 
        return this.#whereReturn({db,where,logic:true})
    }
    async DELETE(where){
        await this.#build();
        where = this.#WHERECheck(where);
        if(where==null) return 0;
        const db = await this.#getDB();
        const results = this.#whereReturn({db,where,logic:false});
        await this.#setDB(results);
        return results;
    }
    #WHERECheck(where){
        if(where===undefined) return null;

        if(where!=null)
            if(typeof where!='object' || Array.isArray(where))
                throw new Error('where key got unexpected value');
        let whereKeys = Object.keys(where);
        if(whereKeys.length==0) return null;
        let attributes = this.attributes;
        let attributeKeys = Object.keys(attributes);
        for(let i=0;i<whereKeys.length;i++){
            let whereKeyValues = where[whereKeys[i]];
            if(!attributeKeys.includes(whereKeys[i]))
                throw new Error('where key got keys that are not availabale on attribute keys.');
            if(!whereKeyValues)
                throw new Error('you must be valid object as where key value');
            if(!Array.isArray(whereKeyValues))
                throw new Error('where key value got unexpected value');
            if(whereKeyValues.length==0)
                throw new Error('where key value atleast need one item');
            whereKeyValues.forEach(whereKeyValue => {
                let whereKeyValueKeys = Object.keys(whereKeyValue);
                if(whereKeyValueKeys.length!=2)
                    throw new Error('where key value keys must have 2 key');
                if(typeof whereKeyValue.operation != 'string')
                    throw new Error('opeartion value must be string');
                if(typeof whereKeyValue.value != attributes[whereKeys[i]].type)
                    throw new Error('value type must match');   
            });
        }
        return where;
    }

    #SETCheck(set){
        if(set===undefined || set===null) return null;
        if(set!=null)
            if(typeof set!='object' || Array.isArray(set))
                throw new Error('set key got invalid value');
        const setKeys = Object.keys(set);
        if(setKeys.length==0) throw new Error('must have 1 or more keys in set');
        
        const attributes = this.attributes;
        const attributeKeys = Object.keys(attributes);
        for(let i=0;i<setKeys.length;i++){
            const setKey = setKeys[i];
            if(!attributeKeys.includes(setKeys) && typeof set[setKey] != attributes[setKey].type) 
               throw new Error('set keys value is not defined as key value'); 
            if(attributes[setKey].autoIncrement) throw new Error('autoIncrement should not be changed');
            if(attributes[setKey].primaryKey) throw new Error('primaryKey should not be changed');
        }
        return set;     
    }
    #whereReturn({db,where,logic,hook}){
        if(typeof logic !='boolean') throw new Error('there must be a boolean logic value');
        if(hook == undefined) hook = null;
        const dbLength = db.length;
        let result = [];
        for(let j=0;j<dbLength;j++){
            let row = db[j];
            const whereKeys = Object.keys(where);
            let interKey = true;
            for(let i=0; i<whereKeys.length;i++){
                const whereKey = whereKeys[i];
                const whereKeyValues = where[whereKey];
                let intraKey = false;
                for(let k=0;k<whereKeyValues.length;k++){
                    const operation = whereKeyValues[k].operation;
                    const value = whereKeyValues[k].value;
                    switch(operation){
                        case 'equal':
                            intraKey = intraKey || row[whereKey]===value;
                        break;
                        case 'notEqual':
                            intraKey = intraKey || row[whereKey]!==value;
                        break;
                        default:
                            throw new Error('invalid operation')
                        break;
                    }
                }
                interKey = interKey && intraKey;
            }
            if((interKey && logic) || (!interKey && !logic)){
                if(hook===null){
                    result.push(row);
                }else{
                    row = hook(row);
                }  
            }           
        }
        if(hook===null) return result; else return db;
    }
    async PUT({set,where}){
        await this.#build();
        where = this.#WHERECheck(where);
        set = this.#SETCheck(set);
        if(where==null) return 0;
        let db = await this.#getDB();
        const hook = (row)=>{
            const setKeys = Object.keys(set);
            const setValues = Object.values(set);
            for(let i=0;i<setKeys.length;i++){
                row[setKeys[i]] = setValues[i];
            }
            return row;
        }
        db = this.#whereReturn({db,where,logic:true,hook});
        
        await this.#setDB(db);
        return db;
    }
}
const fbSubDom = 'www';
const essentials = {
    sleep: (ms)=>{
        return new Promise(resolve=>{
            setTimeout(resolve, ms);
        });
    }
}
const mondayFetch = async (query) => {
    const metaInformationDB = new ChromeStorage('metaInformation'); 
    const metaInformation = await metaInformationDB.GET();
    const mondayResponse = await fetch (
        `https://api.monday.com/v2`,
        {
            cache: "no-cache",
            method: 'post',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': metaInformation.defaultAPI,
                'API-Version' : '2023-07'
            },
            body: JSON.stringify({query})
        }
    );
    return mondayResponse;
}
const fixedData = {
    metaInformation: {
        deviceId:{
            title: 'Device Id',
            type: 'text',
            defaultValue: '1-1',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        position: {
            title: 'Position',
            type: 'text',
            defaultValue: 1,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        extensionSwitch:{
            title: 'Extension Switch',
            type: 'checkbox',
            defaultValue: false,
            point: 'checked',
            interactive: true,
            requiredToStart: true,
        },
        skipSendingNewMessages:{
            title: 'Skip Sending New Messages',
            type: 'checkbox',
            defaultValue: false,
            point: 'checked',
            interactive: true,
            requiredToStart: false,
        },
        debugModeSwitch:{
            title: 'Debug Switch',
            type: 'checkbox',
            defaultValue: false,
            point: 'checked',
            interactive: true,
            requiredToStart: false,
        },
        hourlyMessageLimit:{
            title: 'Hourly Message Limit',
            type: 'number',
            defaultValue: 3,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        hourlyNewMessageLimit:{
            title: 'Hourly New Message Limit',
            type: 'number',
            defaultValue: 3,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        hourlyReplyMessageLimit:{
            title: 'Hourly Reply Message Limit',
            type: 'number',
            defaultValue: 3,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        readMessageLimitCount:{
            title: 'Read Message Limit Count',
            type: 'number',
            defaultValue: 10,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        checkMessageDaysLimit:{
            title: 'Check message days limit',
            type: 'number',
            defaultValue: 3,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        messagingStartTime:{
            title: 'Messaging Start Time(24 HOURS)',
            type: 'number',
            defaultValue: 8,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        messagingEndTime:{
            title: 'Messaging End Time(24 HOURS)',
            type: 'number',
            defaultValue: 19,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        defaultAPI:{
            title: 'Default API',
            type: 'text',
            defaultValue: 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3MjU1MTMxNiwidWlkIjozMDI3MzE5NCwiaWFkIjoiMjAyMi0wNy0yN1QyMzowMzowNC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6ODg0NzExMCwicmduIjoidXNlMSJ9.OsVnuCUSnm-FF21sjAND10cWEKN9-UIqIkNx6Rz8Bfo',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        googleAPIKey:{
            title: 'Google API Key',
            type: 'text',
            defaultValue: `${'A  I  z  a S     y      A c    7    h    h 8 r m      L A 2    0    m M    G    b F 1    o k N    y    A c C    4    s g    P    G b   S    Q'.replace(/ /g,'')}`,
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        domain:{
            title: 'Domain',
            type: 'text',
            defaultValue: 'https://xentola.com',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        accountEmail:{
            title: 'Account Email',
            type: 'text',
            defaultValue: '',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },
        accountPassword:{
            title: 'Account Password',
            type: 'text',
            defaultValue: '',
            point: 'value',
            interactive: true,
            requiredToStart: true,
        },

    },
    workingUrls:{
        messages:  `https://${fbSubDom}.facebook.com/messages/t`,
        home: `https://${fbSubDom}.facebook.com/`,
        itemSuffix: `https://${fbSubDom}.facebook.com/marketplace/item/`,
        unknownMessageSuffix: `https://${fbSubDom}.facebook.com/messages/t/`,
        sellerMessageSuffix: `https://${fbSubDom}.facebook.com/marketplace/`,
    },
    workingSelectors:{
        messages:{
            allMarketplaceMessages: '[aria-label="Marketplace"] div>div[role="row"]:has([role="gridcell"]:first-child):has([role="gridcell"]:nth-child(2))',
            loadingMessages: '[role="progressbar"][aria-label="Loading..."]',
            moreMessagesButton: '[href^="/messages/?pageNum"]',
            unseenMessages: `.${'_55wp _7om2 _5b6o _67iu _67ix _2ycx aclb del_area async_del abb touchable _592p _25mv'.split(' ').join('.')}`,
            marketplaceMessagesBlock: '[aria-label="Chats"] [role="row"] span:not(:has(*)):not(:empty)',
            timeStamp : '[data-sigil="timestamp"]',
        },
        newMessage:{
            messageInput: 'form [name="message"]',
            sendButton: '[type="submit"][value="Send"]',
            seeConversationButton: '[type="submit"][value="See Conversation"]',
            askForDetailsButton: '[type="submit"][value="Ask for Details"]',
        },
        content:{
            console: 'CONTENT_CONSOLE',
        },
        readMessage:{
            postUrl : 'a[href^="https://www.facebook.com/marketplace/item/"]',
            olderMessage : '[href^="/messages/read/?tid=cid.g."]',
            SingleMessages : '[role="row"] > div > [data-scope="messages_table"][role="gridcell"]',
            messageDataHolder: ':scope > span,.messageAttachments',
            neutralMessages : '[role="row"] > [data-scope="messages_table"][role="gridcell"]',
            // messageBox: '[role="navigation"] + [role="main"] [data-pagelet="MWInboxDetail"] > [aria-label^="Conversation titled"]'
            messageBox: '[role="navigation"] + [role="main"]  [aria-label^="Conversation "][role="main"]'
        },
        sendUnsentMessage:{
            sold: `.${'_a58 _9_7 _2rgt _1j-g _2rgt'.split(' ').join('.')}`,
            messageInput: 'form [name="message"]',
            sendButton: 'button[type="submit"][value="Send"]',
        }
    },
    limits:{
        loadMessages: 10,
        soldButValidAsSellerMessageCount: 2,
        // lastUnreadMesaage: (86400*3),
    },
    mondayFetch:{
        appraisalCounterBoard : 1255820475,
        borEffortBoardId : 1250230293,
        systemArchiveBoardId : 3353179014,
        myAccountId : 30273194,
        columnValuesIds:{
            borEffortBoard:{
                person : 'person',
                url: 'text7',
                status: 'status',
                date: 'date4',
                fbCode: 'text84',
                vin: 'text6',
            },
            appraisalCounterBoard:{
                status: 'status',
            },
            systemArchiveBoard:{
                status: 'status',
            }

        },
        statuses: {
            borEffortBoard:{
                unVerified: 5,
                verified: 1,
                bad: 4,
                verifiedWithVin: 17,
            }
        }
    },
    
};
const contentScripts = {
    accountInfo : async()=>{
        const accountInfoDB = new ChromeStorage('accountInfo');
        let id = '';
        let name = '';
        try{
            const infos = JSON.parse(document.body.textContent.match(/{"ACCOUNT_ID":.+?}/)[0]);
            id = infos.ACCOUNT_ID;
            name = infos.NAME;
            await accountInfoDB.SET({id, name});
        }catch(e){
            const infos = await accountInfoDB.GET();
            id = infos.id;
            name = infos.name;
        }

        return {id, name};
    },
    isUserLoggedIn: ()=>{
        // return getCookie('c_user')==''?false:true;
        let result = '';
        let name = 'c_user' + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                result = c.substring(name.length, c.length);
            }
        }
        return result==''?false:true;
    },
    isProgramReady: async()=>{
        let values = await new ChromeStorage('metaInformation').GET();
        values = values==null?{}:values;
        const metas = fixedData.metaInformation;
        const metaKeys = Object.keys(metas);
        for(let i=0;i<metaKeys.length;i++){
            const metaKey = metaKeys[i];
            const meta = metas[metaKey];
            if(meta.requiredToStart){
                if(values[metaKey]===undefined || values[metaKey]===false){
                    console.log('meta not found', metaKey,values[metaKey]);
                    return false;
                }
            }
        }
        return true;
    },
    setupConsoleBoard: ()=>{
        if(document.getElementById(fixedData.workingSelectors.content.console)){
            document.getElementById(fixedData.workingSelectors.content.console).remove();
        }
        const consoleBoard =  document.createElement('div');
        consoleBoard.id = fixedData.workingSelectors.content.console;
        const header = document.createElement('div');
        header.id = fixedData.workingSelectors.content.console+'header';
        header.innerText = 'Starting Console...';
        const dynamic = document.createElement('div');
        dynamic.id = fixedData.workingSelectors.content.console+'dynamic';
        const standard = document.createElement('div');
        standard.id = fixedData.workingSelectors.content.console+'standard';
        consoleBoard.append(header,dynamic,standard);
        dragElement(consoleBoard);
        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
            elmnt.onmousedown = dragMouseDown;
            }
        
            function dragMouseDown(e) {
            e = e || window.event;
            // e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            }
        
            function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }
        
            function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            }
        }
        document.body.appendChild(consoleBoard);
    },
    clearConsole: ()=>{
        const consoleBoardStandard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
        consoleBoardStandard.innerHTML = '';
    },
    showDataOnConsole: (data)=>{
        const standard = document.getElementById(fixedData.workingSelectors.content.console  +'standard');
        const content = document.createElement('div');
        content.classList.add('font-sub');
        content.innerText = data;
        standard.appendChild(content);
        console.log(data);
    },
    showDataOnConsoleDynamic:(data)=>{
        const consoleBoardDynamic = document.getElementById(fixedData.workingSelectors.content.console+'dynamic');
        consoleBoardDynamic.innerText = data;
        console.log(data);
    },
    showConsoleError: ()=>{
        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
        consoleBoard.classList.add('consoleAlert');
        const refreshButton = document.createElement('button');
        refreshButton.classList.add('buttons');
        refreshButton.innerText = 'Refresh';
        refreshButton.onclick = ()=>{
            window.location.reload();
        };
        consoleBoard.appendChild(refreshButton);
    },
    showDebugButton: (name,callback)=>{
        const consoleBoardStandard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
        const button = document.createElement('button');
        button.classList.add('buttons');
        button.innerText = name;
        button.onclick = callback;
        consoleBoardStandard.appendChild(button);
    },
    showWorkingStep: async (step)=>{
        const workingStepDB = new ChromeStorage('workingStep');
        const workingStep = await workingStepDB.GET();
        const consoleBoarHeader = document.getElementById(fixedData.workingSelectors.content.console+'header');
        consoleBoarHeader.innerText = step || workingStep;
    },
    pageRedirection: async (url,message)=>{
        // show data on console
        contentScripts.showDataOnConsole('Redirection:'+url);
        contentScripts.showDataOnConsole('Message:'+message);
        const redirectionMessagesDB = new ChromeStorage('redirectionMessages');
        const isRedirectionAllowed = async (message)=>{
            let messages = await redirectionMessagesDB.GET();
            if(messages!=null){
                messages.unshift(message);
                messages = messages.slice(0,10);
                await redirectionMessagesDB.SET(messages);
                if(messages.length>5){
                    if(messages[0]==message && messages[1]==message && messages[2]==message && messages[3]==message && messages[4]==message ){
                        return false;
                    }else{
                        return true;
                    }
                }else{
                    return true;
                }
            }else{
                await redirectionMessagesDB.SET([`${message}`]);
                return true;
            }
        }
        if(await isRedirectionAllowed(message)){
            const metaInformationDB = new ChromeStorage('metaInformation');
            const metaInformation = await metaInformationDB.GET();
            const debugModeSwitch = metaInformation.debugModeSwitch;
            if(debugModeSwitch){
                const button = document.createElement('button');
                button.innerText = 'Redirect';
                button.onclick = ()=>{
                    window.location.href = url;
                }
                const standard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
                standard.appendChild();
            }else{
                window.location.href = url;
            }
            
        }else{
            const messages = await redirectionMessagesDB.GET();
            for(let i=0;i<messages.length;i++){
                contentScripts.showDataOnConsole(messages[i]);
            }
            const button = document.createElement('button');
            button.innerText = 'Continue or Try again';
            button.onclick = ()=>{
                redirectionMessagesDB.SET([]);
                contentScripts.showDataOnConsole("Error data cleared");
                contentScripts.pageRedirection(url,message);
            }
            const standard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
            standard.appendChild(button);
            return false;
        }
    },
    getItemIdByMessageId: async (fb_message_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const itemIdDataJSON = await fetch(`${domain}/extension/getItemIdByMessageId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_message_id: `${fb_message_id}`})
        });
        const itemIdData = await itemIdDataJSON.json();
        return itemIdData.item_id;
    },
    markItemAsLinkGone: async (item_id)=>{
        console.log('marking item as link gone');
        if(item_id){
            const query = `
                query{
                    items(ids: [${item_id}]){
                        board{
                            id
                        }
                    }
                }
            `;
            const boardDataJSON = await mondayFetch(query);
            const boardData = await boardDataJSON.json();
            const boardId = boardData.data.items[0].board.id;
            if(boardId==fixedData.mondayFetch.borEffortBoardId || boardId==fixedData.mondayFetch.appraisalCounterBoard){
                const columnId = boardId==fixedData.mondayFetch.borEffortBoardId?fixedData.mondayFetch.columnValuesIds.borEffortBoard.status:fixedData.mondayFetch.columnValuesIds.appraisalCounterBoard.status;
                const query = `
                    mutation {
                        change_simple_column_value(
                            item_id: ${item_id}, 
                            board_id: ${boardId}, 
                            column_id: "${columnId}", 
                            value: "Link Gone") {
                            id
                        }
                    }
                `;
                const itemDataJSON = await mondayFetch(query);
                const itemData = await itemDataJSON.json();
                const query1 = `
                    mutation {
                        archive_item(item_id: ${item_id}) {
                            id
                        }
                    }
                `;
                const itemDataJSON1 = await mondayFetch(query1);
                const itemData1 = await itemDataJSON1.json();
            }
            const metaInformationDB = new ChromeStorage('metaInformation');
            const metaInfromation = await metaInformationDB.GET();
            
            const serverLinkGoneUpdate = await fetch(`${metaInfromation.domain}/extension/serverLinkGoneUpdate`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    item_id: `${item_id}`,
                    fb_id: `${(await contentScripts.accountInfo()).fb_id}`
                })
            });
        }
    },
    markItemAsSecondMessage: async (item_id)=>{
        console.log('marking item as second message');
        if(item_id){
            const query = `
                query{
                    items(ids: [${item_id}]){
                        board{
                            id
                        }
                    }
                }
            `;
            const boardDataJSON = await mondayFetch(query);
            const boardData = await boardDataJSON.json();
            const boardId = boardData.data.items[0].board.id;
            if(boardId==fixedData.mondayFetch.borEffortBoardId){
                const columnId = fixedData.mondayFetch.columnValuesIds.borEffortBoard.status;
                const query = `
                    mutation {
                        change_simple_column_value(
                            item_id: ${item_id}, 
                            board_id: ${boardId}, 
                            column_id: "${columnId}", 
                            value: "2nd 1st Msg") {
                            id
                        }
                    }
                `;
                const itemDataJSON = await mondayFetch(query);
                const itemData = await itemDataJSON.json();
            }
        }
    },
    readCurrentMessage: async (onlyLast)=>{
        contentScripts.showDataOnConsole('Reading current message');
        const accountInfo = await contentScripts.accountInfo();
        let messagesData = [];
        const messageBox = await contentScripts.getElementBySelector({
            data:{
                selector: fixedData.workingSelectors.readMessage.messageBox,
                type: 'querySelectorAll',
                isMonoExpected: true,
            },
            instant: true,
            required: true,

        });
        const messages = messageBox.querySelectorAll(fixedData.workingSelectors.readMessage.SingleMessages);
        if(messages.length==0){
            contentScripts.showDataOnConsole('No messages found');
            contentScripts.showConsoleError();
            throw new Error('No messages found');
        }
        const getSender = (senderElement)=>{
            const senderElementText = senderElement.innerText;
            if(senderElementText == 'You sent' || senderElementText.includes('You replied to')){
                return 'me';
            }else{
                return 'seller';
            }
        };
        const retrieveImage = async (imageElement)=>{
            const initialTime = new Date().getTime();
            const isTimeOverSpent = ()=>{
                const timeLimit = 60*1*1000;
                const timeNow = new Date().getTime();
                if(timeNow-initialTime>=timeLimit){
                    return true;
                }else{
                    return false;
                }
            };
            const timeStatusGenerator = ()=>{
                const timeLimit = 60*1*1000;
                const timeNow = new Date().getTime();
                return `${Math.floor((timeNow-initialTime)/1000)}/${Math.floor(timeLimit/1000)} seconds used searching for messages`;
            };
            imageElement.click();
            const imageViewer = await contentScripts.getElementBySelector({
                data:{
                    selector: '[aria-label="Media viewer"] img:not([referrerpolicy])',
                    type: 'querySelectorAll',
                    isMonoExpected: true,
                },
                instant: false,
                maxTimeOut: 10,
                required: true,
                name: 'Image Viewer'
            });
            const imageUrl = imageViewer.src;
            const closeButton = await contentScripts.getElementBySelector({
                data:{
                    selector: '[aria-label="Media viewer"] [aria-label="Close"]',
                    type: 'querySelectorAll',
                    isMonoExpected: true,
                },
                instant: false,
                maxTimeOut: 10,
                required: true,
                name: 'Close Button'
            });
            closeButton.click();
            while(true){
                contentScripts.showDataOnConsoleDynamic(timeStatusGenerator());
                if(isTimeOverSpent()){
                    contentScripts.showDataOnConsole('Image not loaded');
                    contentScripts.showConsoleError();
                    throw new Error('Image not loaded');
                }
                const imageViewer = document.querySelector('[aria-label="Media viewer"]');
                if(!imageViewer){
                    break;
                }
                await essentials.sleep(1000);
            }
            return imageUrl;
        };
        const singleMessageReader = async (sender,holder)=>{
            // const sender = getSender(singleMessage.firstElementChild);
            let defaultdata = {
                sent_from: sender,
                timestamp: `${(new Date()).getTime()}`,
                fb_id: accountInfo.id,
                status: 'done',
            };

            // audio elements
            const audioElements = holder.querySelectorAll('[aria-label="Audio scrubber"]');
            if(audioElements.length!=0){
                const datas = [];
                for(let i=0;i<audioElements.length;i++){
                    const audio = audioElements[i];
                    const data = {
                        ...defaultdata,
                        type: 'text',
                        message: "ERROR:: SELLER SENT A AUDIO CLIP AND AUTOMATION PROGRAM WAS UNABLE TO READ"
                    }
                    datas.push(data);
                }
                return datas;
            }
            // gif elements
            const gifElements = holder.querySelectorAll('a[href^="/messenger_photo/"] img[alt]');
            if(gifElements.length!=0){
                const datas = [];
                for(let i=0;i<gifElements.length;i++){  
                    const gif = gifElements[i];
                    console.log(gif);
                    const data = {
                        ...defaultdata,
                        type: 'image',
                        message: gif.src
                    }
                    datas.push(data);
                }
                return datas;
            }
            // file elements
            const fileElements = holder.querySelectorAll('a[download]');
            if(fileElements.length!=0){
                const datas = [];
                for(let i=0;i<fileElements.length;i++){
                    const file = fileElements[i];
                    const data = {
                        ...defaultdata,
                        type: 'file',
                        message: file.href
                    }
                    datas.push(data);
                }
                return datas;
            }
            // video elements
            const videoElements = holder.querySelectorAll('video');
            if(videoElements.length!=0){
                const datas = [];
                for(let i=0;i<videoElements.length;i++){
                    const video = videoElements[i];
                    const data = {
                        ...defaultdata,
                        type: 'video',
                        message: video.getAttribute('src')
                    }
                    datas.push(data);
                }
                return datas;
            }

            // image elements
            const imageElements = holder.querySelectorAll('[href^="/messenger_media/"] img');
            if(imageElements.length!=0){
                const datas = [];
                for(let i=0;i<imageElements.length;i++){
                    const image = imageElements[i];
                    const data = {
                        ...defaultdata,
                        type: 'image',
                        message: await retrieveImage(image)
                    }
                    datas.push(data);
                }
                return datas;
            }

            // like elements
            const likeElements = holder.querySelectorAll('svg title');
            if(likeElements.length!=0){
                const datas = [];
                for(let i=0;i<likeElements.length;i++){
                    const like = likeElements[i];
                    const data = {
                        ...defaultdata,
                        type: 'text',
                        message: `::${like.textContent}::`
                    }
                    datas.push(data);
                }
                return datas;
            }

            // text elements
            const textElements = holder.querySelectorAll('div:not(:has(*)):not(:empty)');
            if(textElements.length!=0){
                const datas = [];
                for(let i=0;i<textElements.length;i++){
                    const text = textElements[i];
                    const data = {
                        ...defaultdata,
                        type: 'text',
                        message: text.innerText
                    }
                    datas.push(data);
                }
                return datas;
            }

            // icon elements
            const iconElements = holder.querySelectorAll('img');
            if(iconElements.length!=0){
                const datas = [];
                for(let i=0;i<iconElements.length;i++){
                    const icon = iconElements[i];
                    const data = {
                        ...defaultdata,
                        type: 'image',
                        message: icon.src
                    }
                    datas.push(data);
                }
                return datas;
            }

            console.log(holder)
        }
        for(let i=0;i<messages.length;i++){
            const singleMessage = messages[i];
            const messageHolder = await contentScripts.getElementBySelector({
                data:{
                    selector: ':scope > div:has(:nth-child(3))',
                    type: 'querySelectorAll',
                    isMonoExpected: true,
                    validator: (element)=>{
                        if(element.childElementCount==3){
                            return true;
                        }else{
                            return false;
                        }
                    }
                },
                parent: singleMessage,
                instant: true,
                required: false,
                name: 'Message Data Holder',
                debug: false
            });
            if(messageHolder!=null){
                // midle child
                let messageDataHolder = messageHolder.children[1].firstChild;
                messageDataHolder = messageDataHolder.querySelector(":scope > :not(:empty)");
                const messageSender = getSender(singleMessage.firstElementChild);
                const messageData = await singleMessageReader(messageSender,messageDataHolder);
                if(messageData!=null){
                    messagesData = [...messagesData,...messageData];
                }
            }else{  
                console.log('Not a Message Section');
            }
            continue;
            
        }
        console.table(messagesData)
        return messagesData;
    },
    getFileTypeFromUrl: (url)=>{
        console.log(url);
        url = new URL(url);
        const path = url.pathname;
        const urlData = path.split('.');
        const type = urlData[urlData.length-1];
        const imageTypes = ['jpg','jpeg','png','gif','bmp','svg','webp'];
        if(imageTypes.includes(type)){
            return 'image';
        }else{
            return 'file';
        }
    },
    retrieveAttachementUrl: async (image)=>{
        image.click();
        let url = '';
        while(true){
            await essentials.sleep(5000);
            contentScripts.showDataOnConsole('Waiting for image to load');
            if(window.location.href.includes(`https://${fbSubDom}.facebook.com/messages/attachment_preview`) || window.location.href.includes(`https://${fbSubDom}.facebook.com/messages/attachment_confirm`)){
                const attachmentLinks = [...document.querySelectorAll('a')].filter((a)=>a.innerText=='Download'||a.innerText=='Open');
                const closeLinks = [...document.querySelectorAll('a')].filter((a)=>a.innerText=='Close'||a.innerText=='Cancel');
                if(attachmentLinks.length==1 && closeLinks.length!=0){
                    url = attachmentLinks[0].href;
                    if(url==''){
                        console.log('url is empty. Most likely this is a GIF Image');
                        url = document.querySelector('#rootcontainer img.img').src;
                    }
                    closeLinks[closeLinks.length-1].click();
                    break;
                }else{
                    // The link you followed may be broken, or the page may have been removed.
                    if(document.body.innerText.includes('link you followed may be broken')){
                        console.log('we know this is a bug');
                        
                        url = image.querySelector('img').getAttribute('src');
                        history.back();
                        break;
                    }else{
                        console.log('we know this is a bug but what????');
                    }
                }
            }else{
                contentScripts.showDataOnConsole('Waiting for page to load');
            }
        }
        while(true){
            await essentials.sleep(5000);
            contentScripts.showDataOnConsole('Waiting for image to close');
            if(window.location.href.includes(`https://${fbSubDom}.facebook.com/messages/read/`)){

                break;
            }
        }
        return url;
    },
    sendMessagesToServer: async (messageData)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const messageDataJSON = await fetch(`${domain}/extension/sendMessagesToServer`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({messageData})
        });
        const messageDataResponse = await messageDataJSON.json();
        if(messageDataResponse.restored){
            if(messageData.length>0){
                const item_id = messageData[0].item_id;
                const query = `
                    query{
                        items(ids: [${item_id}]){
                            board{
                                id
                            }
                        }
                    }
                `;
                const boardDataJSON = await mondayFetch(query);
                const boardData = await boardDataJSON.json();
                const boardId = boardData.data.items[0].board.id;
                if(boardId==fixedData.mondayFetch.systemArchiveBoardId){
                    const columnId = fixedData.mondayFetch.columnValuesIds.systemArchiveBoard.status;
                    const query = `
                        mutation {
                            change_simple_column_value(
                                item_id: ${item_id}, 
                                board_id: ${boardId}, 
                                column_id: "${columnId}", 
                                value: "Restored") {
                                id
                            }
                        }
                    `;
                    try{
                        const itemDataJSON = await mondayFetch(query);
                        const itemData = await itemDataJSON.json();
                        const itemId = itemData.data.change_simple_column_value.id;
                    }catch(e){
                        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                        const removeLeadButton  = document.createElement('button');
                        removeLeadButton.innerText = 'Remove Lead';
                        removeLeadButton.onclick = async ()=>{
                            await contentScripts.markItemAsLinkGone(item_id);
                        };
                        consoleBoard.appendChild(removeLeadButton);
                    }
                    
                }
            }
        }
        return messageDataResponse;
    },
    sellerMessageCount: async (fb_post_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const messageCountJSON = await fetch(`${domain}/extension/sellerMessageCount`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_post_id: `${fb_post_id}`})
        });
        const messageCountResponse = await messageCountJSON.json();
        console.log(messageCountResponse);
        console.log(messageCountResponse.count);
        return messageCountResponse.count;
    },
    isCurrentMessageValid: async (fb_post_id)=>{
        // "You named the conversation"
        // "You changed the conversation picture"
        // "waiting for your response about this listing"
        // "changed the listing title"
        // "reduced the price"
        // "changed the listing description"
        // "left the group"
        // " sold "
        // "removed the item from Marketplace"
        const invalidIndicators = [
            "left the group",
            "removed the item from Marketplace",
            " sold ",
        ]
        const messageBox = document.querySelector(fixedData.workingSelectors.readMessage.messageBox);
        const neutralMessages = messageBox.querySelectorAll(fixedData.workingSelectors.readMessage.neutralMessages);
        for(let i=0;i<neutralMessages.length;i++){
            const neutralMessage = neutralMessages[i];
            const message = neutralMessage.innerText;
            console.log(message);
            for(let j=0;j<invalidIndicators.length;j++){
                const indicator = invalidIndicators[j];
                if(message.includes(indicator)){
                    if(indicator.includes('sold')){
                        // TODO:: check if the item is sold to us
                        const sellerMessageCount = await contentScripts.sellerMessageCount(fb_post_id);
                        if(sellerMessageCount>fixedData.limits.soldButValidAsSellerMessageCount){
                            return true;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    },
    lastMessageOnServerByPostId: async (fb_post_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const itemLastMessageDataJSON = await fetch(`${metaInfromation.domain}/extension/lastMessageOnServerByPostId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_post_id: `${fb_post_id}`})
        });
        const itemLastMessageData = await itemLastMessageDataJSON.json();
        return itemLastMessageData.message;
    },
    itemIdByPostId: async (fb_post_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const itemIdDataJSON = await fetch(`${metaInfromation.domain}/extension/itemIdByPostId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_post_id: `${fb_post_id}`})
        });
        const itemIdData = await itemIdDataJSON.json();
        return itemIdData.item_id;
    },
    postIdByItemId: async (item_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const postIdDataJSON = await fetch(`${metaInfromation.domain}/extension/postIdByItemId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({item_id: `${item_id}`})
        });
        const postIdData = await postIdDataJSON.json();
        return postIdData.fb_post_id;
    },
    isValidTimeToSendFirstMessage:  async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const firstMessageTimeDB = new ChromeStorage('firstMessageTime');
        const metaInfromation = await metaInformationDB.GET();
        const messagingStartHour = metaInfromation.messagingStartTime;
        const messagingEndHour = metaInfromation.messagingEndTime;  
        const time = new Date().getTime()/1000;

        const americanHour = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getHours();
        const hourlyMessageLimit = metaInfromation.hourlyMessageLimit;
        const minimumDuration = 3600/hourlyMessageLimit;
        const firstMessageTime = (await firstMessageTimeDB.GET()) || 0;
        console.log('firstMessageTime',minimumDuration-(time-firstMessageTime));
        if(americanHour>=messagingStartHour && americanHour<=messagingEndHour){
            if(time-firstMessageTime>=minimumDuration){
                return {
                    status: true,
                    waitingTime: 0
                };
            }else{
                return {
                    status: true,
                    waitingTime: minimumDuration-(time-firstMessageTime)
                };
            }
        }else{
            return {
                status: false,
                waitingTime: 60*5
            };
        }
    },
    isValidTimeToSendUnsentMessage: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const messagingStartHour = metaInfromation.messagingStartTime;
        const messagingEndHour = metaInfromation.messagingEndTime;  

        const americanHour = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getHours();
        return (americanHour>=messagingStartHour && americanHour<=messagingEndHour);
    },
    getUnsentMessagePostIds : async ()=>{
        const fb_id = (await contentScripts.accountInfo()).id;
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const unsentMessagesDataJSON = await fetch(`${domain}/extension/getUnsentMessagePostIds`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id: `${fb_id}`})
        });
        const unsentMessagesData = await unsentMessagesDataJSON.json();
        return unsentMessagesData.post_ids;
    },
    getUnsentMessagesByPostId: async (fb_post_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const unsentMessagesDataJSON = await fetch(`${domain}/extension/getUnsentMessagesByPostId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_post_id: `${fb_post_id}`})
        });
        const unsentMessagesData = await unsentMessagesDataJSON.json();
        return unsentMessagesData.messages;
    },
    isValidMessageInSellerMessage: async (fb_post_id)=>{
        // "left the group"
        // "Sold"
        // "removed the item from Marketplace"
        const isUnavailable = window.location.href.includes('?unavailable_product=1');
        if(isUnavailable){
            return false;
        }
        const {sold} = contentScripts.getItmInformationDetailsFromMarketplaceItemPage();
        
        if (sold){
            const sellerMessageCount = await contentScripts.sellerMessageCount(fb_post_id);
            if(sellerMessageCount>fixedData.limits.soldButValidAsSellerMessageCount){
                return true;
            }else{
                return false;
            }
        }
        return true;
        // return !(error || removed || sold);
    },
    markMessageAsSent: async ( messageId)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const markMessageAsSentJSON = await fetch(`${domain}/extension/markMessageAsSent`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message_id:`${messageId}`})
        });
        const markMessageAsSent = await markMessageAsSentJSON.json();
        return markMessageAsSent;
    },
    markItemMessagesdone: async (itemId)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const markItemMessagesdoneJSON = await fetch(`${domain}/extension/markItemMessagesdone`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({item_id:`${itemId}`})
        });
        const markItemMessagesdone = await markItemMessagesdoneJSON.json();
        return markItemMessagesdone;
    },
    waitWithVisual: async (waitingTime)=>{
        waitingTime = parseInt(waitingTime);
        let stopTimer = false;
        const timer = document.createElement('div');
        timer.classList.add('font-header');
        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
        consoleBoard.replaceChildren(timer);
        const stopButton = document.createElement('button');
        stopButton.innerText = 'Stop';
        stopButton.classList.add('btn','btn-danger','btn-sm');
        stopButton.addEventListener('click',()=>{
            stopTimer = true;
        }); 
        consoleBoard.appendChild(stopButton);
        for(let i = waitingTime;i>=0;i--){
            timer.innerText = `Waiting for ${i} seconds`;
            await essentials.sleep(1000);
            if(stopTimer){
                break;
            }
        }
    },
    hasRepliesToSend: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const fb_id = (await contentScripts.accountInfo()).id;
        const hasRepliesToSendJSON = await fetch(`${domain}/extension/hasRepliesToSend`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id:`${fb_id}`})
        });
        const hasRepliesToSend = await hasRepliesToSendJSON.json();
        return hasRepliesToSend;
    },
    hasUnsentFirstMessage: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const fb_id = (await contentScripts.accountInfo()).id;
        const hasUnsentFirstMessageJSON = await fetch(`${domain}/extension/hasUnsentFirstMessage`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id:`${fb_id}`})
        });
        const hasUnsentFirstMessage = await hasUnsentFirstMessageJSON.json();
        return hasUnsentFirstMessage;
    },
    hasNewRawItem: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const hasNewRawItemJSON = await fetch(`${domain}/extension/hasNewRawItem`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const hasNewRawItem = await hasNewRawItemJSON.json();
        return hasNewRawItem;
    },
    hasSecondMessageToSend: async ()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const fb_id = (await contentScripts.accountInfo()).id;
        const hasSecondMessageToSendJSON = await fetch(`${domain}/extension/hasSecondMessageToSend`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id:`${fb_id}`})
        });
        const hasSecondMessageToSend = await hasSecondMessageToSendJSON.json();
        return hasSecondMessageToSend;
    },
    setSecondMessage: async (item_id)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInfromation = await metaInformationDB.GET();
        const domain = metaInfromation.domain;
        const fb_id = (await contentScripts.accountInfo()).id;
        const setSecondMessageJSON = await fetch(`${domain}/extension/setSecondMessage`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fb_id:`${fb_id}`,item_id:`${item_id}`})
        });
        const setSecondMessage = await setSecondMessageJSON.json();
        return setSecondMessage;
    },
    updateFirstMessageTime: async()=>{
        const firstMessageTimeDB = new ChromeStorage('firstMessageTime');
        await firstMessageTimeDB.SET(new Date().getTime()/1000);
    },
    sendNewSellerMessage: async ()=>{ 
        const sendNewSellerMessageDB = new ChromeStorage('sendNewSellerMessage');
        const sendNewSellerMessage = await sendNewSellerMessageDB.GET();
        const workingStepDB = new ChromeStorage('workingStep');
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await new ChromeStorage('metaInformation').GET();
        const skipSendingNewMessages = metaInformation.skipSendingNewMessages;
        if(skipSendingNewMessages){
            await sendNewSellerMessageDB.SET(null);
            await workingStepDB.SET('collectUnseenMessage');
            contentScripts.pageRedirection(fixedData.workingUrls.messages,'skipping sending new messages');
            return;
        }
        // else{
        //     const hasRepliesToSend = await contentScripts.hasRepliesToSend();
        //     const hasSecondMessageToSend = await contentScripts.hasSecondMessageToSend();
        //     // if(hasRepliesToSend.status || hasSecondMessageToSend.status){
        //     if(hasRepliesToSend.status){
        //         await sendNewSellerMessageDB.SET(null);
        //         await workingStepDB.SET('collectUnseenMessage');
        //         contentScripts.pageRedirection(fixedData.workingUrls.messages,'has replies or second message to send');
        //         return;
        //     }
        // }

        if(sendNewSellerMessage==null){
            const domain = metaInformation.domain;
            const newPostJSON = await fetch(`${domain}/extension/newPostId`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fb_id: `${(await contentScripts.accountInfo()).id}`,
                    fb_user_name: `${(await contentScripts.accountInfo()).name}`
                })
            });
            if(newPostJSON.status==200){
                const newPost = await newPostJSON.json();
                newPost.has_unsent_message = true;
                await sendNewSellerMessageDB.SET(newPost);
                contentScripts.pageRedirection(fixedData.workingUrls.home,'New Post to message');
            }else if(newPostJSON.status==201){
                contentScripts.showDataOnConsole((await newPostJSON.json()).message)
            }
            else{
                contentScripts.showDataOnConsole('No raw Item to work With');
                await contentScripts.waitWithVisual(60*5);
                await sendNewSellerMessageDB.SET(null);
                await workingStepDB.SET('collectUnseenMessage');               
                contentScripts.pageRedirection(fixedData.workingUrls.messages,'No raw Item to work With');
            }
        }else{
            if(sendNewSellerMessage.fb_post_id){
                contentScripts.showDataOnConsole('fb post id collected');
                await essentials.sleep(5000); 
                // const markAsLinkGone = async ()=>{
                //     contentScripts.showDataOnConsole('marking as "Link Gone"');
                //     const query1 = `
                //         mutation {
                //             change_simple_column_value(
                //                 item_id: ${sendNewSellerMessage.item_id}, 
                //                 board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                //                 column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.status}", 
                //                 value: "Link Gone") {
                //                 id
                //             }
                //         }
                //     `;
                //     try{
                //         const LinkGoneDataJSON = await mondayFetch(query1);
                        
                //         const LinkGoneData = await LinkGoneDataJSON.json();
                        
                //         await sendNewSellerMessageDB.SET(null);               
                //         contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                //     }catch(e){
                //         contentScripts.showDataOnConsole('Error marking as "Link Gone"');
                //     }
                // }
                const markAsFirstMessage = async (message)=>{
                    contentScripts.showDataOnConsole('marking as "First Message"');
                    
                    const query = `
                        mutation {
                            change_simple_column_value(
                                item_id: ${sendNewSellerMessage.item_id}, 
                                board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.status}", 
                                value: "1st MSG") {
                                id
                            }
                        }
                    `;
                    const formatDateToMondayAmerican = ()=>{
                        const americanTime = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}));
                        let month = '' + (americanTime.getMonth() + 1);
                        let day = '' + americanTime.getDate();
                        let year = americanTime.getFullYear();
                    
                        if (month.length < 2) 
                            month = '0' + month;
                        if (day.length < 2) 
                            day = '0' + day;
                    
                        return [year, month, day].join('-');
                    }
                    const query2 = `
                        mutation {
                            change_simple_column_value(
                                item_id: ${sendNewSellerMessage.item_id}, 
                                board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.date}", 
                                value: "${formatDateToMondayAmerican()}") {
                                id
                            }
                        }
                    `;
                    try{
                        const firstMessageDataJSON = await mondayFetch(query);
                        const dateDataJSON = await mondayFetch(query2);
                        const dateData = await dateDataJSON.json();
                        const firstMessageData = await firstMessageDataJSON.json();
                        const metaInformation = await metaInformationDB.GET();
                        const domain = metaInformation.domain;
                        const saveFirstMessageActionJSON = await fetch(`${domain}/extension/saveFirstMessageAction`,{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                item_id: `${sendNewSellerMessage.item_id}`,
                                fb_post_id: `${sendNewSellerMessage.fb_post_id}`,
                                fb_id: `${(await contentScripts.accountInfo()).id}`,
                                fb_user_name: `${(await contentScripts.accountInfo()).name}`,
                                messageText: message
                            })
                        });
                        if(saveFirstMessageActionJSON.status==200){
                            await contentScripts.messageCountEligible(true);
                            console.log('first message action saved');
                            await sendNewSellerMessageDB.SET(null);       
                            await workingStepDB.SET('collectUnseenMessage');
                            contentScripts.pageRedirection(fixedData.workingUrls.home,'Message Sent and unseen messages started');
                        }else{
                            contentScripts.showDataOnConsole('Error marking as "1st Message"');
                        }
                        
                    }catch(e){
                        contentScripts.showDataOnConsole('Error marking as "1st Message"');
                    }
                }
                if(window.location.href.indexOf('unavailable-product')!=-1){
                    console.log('unavailable-product');
                    // markAsLinkGone replacement
                    await contentScripts.markItemAsLinkGone(sendNewSellerMessage.item_id);
                    await sendNewSellerMessageDB.SET(null);               
                    contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                    // await markAsLinkGone();
                }else{
                    if(window.location.href==`${fixedData.workingUrls.itemSuffix}${sendNewSellerMessage.fb_post_id}`){
                        
                        // if(document.querySelector(fixedData.workingSelectors.newMessage.seeConversationButton)){
                        //     await markAsFirstMessage();
                        //     await contentScripts.updateFirstMessageTime();
                        // }else if(document.querySelector(fixedData.workingSelectors.newMessage.askForDetailsButton)){
                        //     const accountInfo = await contentScripts.accountInfo();
                        //     const metaInformation = await metaInformationDB.GET();
                        //     const domain = metaInformation.domain;
                        //     const messageTextJSON = await fetch(`${domain}/extension/firstMessageText`,{
                        //         method: 'POST',
                        //         headers: {
                        //             'Content-Type': 'application/json'
                        //         }
                        //     });
                        //     const messageText = await messageTextJSON.json();
                        //     await contentScripts.sendMessagesToServer([
                        //         {
                        //             item_id : sendNewSellerMessage.item_id,
                        //             type: 'text',
                        //             sent_from:'me',
                        //             message: messageText,
                        //             timestamp: `${parseInt(new Date().getTime())}`,
                        //             fb_id: accountInfo.id,
                        //             status: 'unsent',
                        //         }
                        //     ]);
                        //     await markAsFirstMessage(messageText);
                        // }else if(!document.querySelector('form [name="message"]')){
                        //     // markAsLinkGone replacement
                        //     await contentScripts.markItemAsLinkGone(sendNewSellerMessage.item_id);
                        //     await sendNewSellerMessageDB.SET(null);               
                        //     contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                        //     // await markAsLinkGone();
                        // }else if(document.querySelector('form [name="message"]')){
                        //     contentScripts.showDataOnConsole('sending message');
                        //     const message = document.querySelector(fixedData.workingSelectors.newMessage.messageInput);
                        //     const button = document.querySelector(fixedData.workingSelectors.newMessage.sendButton);
                        //     const metaInformation = await metaInformationDB.GET();
                        //     const domain = metaInformation.domain;
                        //     const messageTextJSON = await fetch(`${domain}/extension/firstMessageText`,{
                        //         method: 'POST',
                        //         headers: {
                        //             'Content-Type': 'application/json'
                        //         }
                        //     });
                        //     const messageText = await messageTextJSON.json();
                        //     message.value = messageText;
                        //     button.click();
                        //     let i =0;
                        //     while(true){
                        //         if(document.querySelector(fixedData.workingSelectors.newMessage.seeConversationButton)){
                        //             break;
                        //         }
                        //         await essentials.sleep(5000);
                        //         contentScripts.showDataOnConsole(`waiting for message to send ${++i}`);
                        //         if(i>20){
                        //             const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                        //             const tryAgainButton = document.createElement('button');
                        //             tryAgainButton.innerText = 'Try Again';
                        //             tryAgainButton.onclick = async ()=>{
                        //                 contentScripts.pageRedirection(window.location.href,'Trying to send first message Again');
                        //             }
                        //             const removeLeadButton = document.createElement('button');
                        //             removeLeadButton.innerText = 'Remove Lead';
                        //             removeLeadButton.onclick = async ()=>{
                        //                 await sendNewSellerMessageDB.SET(null); 
                        //                 contentScripts.pageRedirection(fixedData.workingUrls.home,'Message Sent and unseen messages started');
                        //             };
                        //             consoleBoard.append(tryAgainButton,removeLeadButton);
                        //             return null;
                        //         }
                        //     }
                        //     await markAsFirstMessage(messageText);
                        //     await contentScripts.updateFirstMessageTime();
                        // }else{
                        //     contentScripts.showDataOnConsole('something unexpected happening!');
                        // }

                        if(document.querySelector(fixedData.workingSelectors.newMessage.askForDetailsButton)){
                            const accountInfo = await contentScripts.accountInfo();
                            const metaInformation = await metaInformationDB.GET();
                            const domain = metaInformation.domain;
                            const messageTextJSON = await fetch(`${domain}/extension/firstMessageText`,{
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                            const messageText = await messageTextJSON.json();
                            await contentScripts.sendMessagesToServer([
                                {
                                    item_id : sendNewSellerMessage.item_id,
                                    type: 'text',
                                    sent_from:'me',
                                    message: messageText,
                                    timestamp: `${parseInt(new Date().getTime())}`,
                                    fb_id: accountInfo.id,
                                    status: 'unsent',
                                }
                            ]);
                            await markAsFirstMessage(messageText);
                        }else if(!document.querySelector('form [name="message"]')){
                            // markAsLinkGone replacement
                            await contentScripts.markItemAsLinkGone(sendNewSellerMessage.item_id);
                            await sendNewSellerMessageDB.SET(null);               
                            contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                            // await markAsLinkGone();
                        }else if(document.querySelector('form [name="message"]')){
                            const accountInfo = await contentScripts.accountInfo();
                            const metaInformation = await metaInformationDB.GET();
                            const domain = metaInformation.domain;
                            const messageTextJSON = await fetch(`${domain}/extension/firstMessageText`,{
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            });
                            const messageText = await messageTextJSON.json();
                            await contentScripts.sendMessagesToServer([
                                {
                                    item_id : sendNewSellerMessage.item_id,
                                    type: 'text',
                                    sent_from:'me',
                                    message: messageText,
                                    timestamp: `${parseInt(new Date().getTime())}`,
                                    fb_id: accountInfo.id,
                                    status: 'unsent',
                                }
                            ]);
                            await markAsFirstMessage(messageText);
                        }else{
                            contentScripts.showDataOnConsole('something unexpected happening!');
                            const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                            const tryAgainButton = document.createElement('button');
                            tryAgainButton.innerText = 'Try Again';
                            tryAgainButton.onclick = async ()=>{
                                contentScripts.pageRedirection(window.location.href,'Trying to send first message Again');
                            }
                            const removeLeadButton = document.createElement('button');
                            removeLeadButton.innerText = 'Remove Lead';
                            removeLeadButton.onclick = async ()=>{
                                await contentScripts.markItemAsLinkGone(sendNewSellerMessage.item_id);
                                await sendNewSellerMessageDB.SET(null);               
                                contentScripts.pageRedirection(fixedData.workingUrls.home,'Link gone getting new one');
                            };
                            consoleBoard.append(tryAgainButton,removeLeadButton);
                        }

                    }else{
                        contentScripts.pageRedirection(`${fixedData.workingUrls.itemSuffix}${sendNewSellerMessage.fb_post_id}`,'Not on item page');
                    }
                }                
            }else{
                contentScripts.showDataOnConsole('fb post id not collected');
                const processUrlAndContinue = async(url)=>{
                    // get digits from url
                    const postId = url.match(/\d+/g).map(Number)[0];
                    sendNewSellerMessage.fb_post_id = `${postId}`;
                    await sendNewSellerMessageDB.SET(sendNewSellerMessage);
                    contentScripts.pageRedirection(`${fixedData.workingUrls.itemSuffix}${postId}`,'Redirecting to post page');
                }
                const setNameOnMondayAndCollectURL = async ()=>{
                    const query1 = `
                        query{
                            items(ids: [${sendNewSellerMessage.item_id}]){
                                column_values(ids:["${fixedData.mondayFetch.columnValuesIds.borEffortBoard.url}"]){
                                    value
                                }
                            }
                        }
                    `;
                    const urlDataJSON = await mondayFetch(query1);
                    const urlData = await urlDataJSON.json();
                    const url = urlData.data.items[0].column_values[0].value;
                    const query2 = `
                        mutation{
                            change_simple_column_value(board_id:${fixedData.mondayFetch.borEffortBoardId},
                            item_id:${sendNewSellerMessage.item_id},
                            column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.person}",
                            value: "${fixedData.mondayFetch.myAccountId}") 
                            {
                                id
                            }
                        }
                    `;
                    const itemDataJSON = await mondayFetch(query2);
                    const itemData = await itemDataJSON.json();
                    const item = itemData.data.change_simple_column_value;
                    return url;
                }
                try{
                    await processUrlAndContinue(await setNameOnMondayAndCollectURL());
                }catch(e){
                    const contentConsole = document.getElementById(fixedData.workingSelectors.contentConsole);
                    const collectAgainButton = document.createElement('button');
                    collectAgainButton.innerText = 'Collect & Set Again';
                    collectAgainButton.addEventListener('click',async ()=>{
                        try{
                            await processUrlAndContinue(await setNameOnMondayAndCollectURL());
                        }catch(e){
                            contentScripts.showDataOnConsole('Error Collecting URL');
                        }
                    });
                    contentConsole.appendChild(collectAgainButton);
                }
            }
        }
        

    },
    getElementBySelector: async ({parent,data, instant, maxTimeOut=1, required,name,debug=true}) => {
        const {type, isMonoExpected, selector, innerText, value, validator} = data;
        let count = 0;
        let result = null;
        do{
            count++;
            if(count<=maxTimeOut){
                if(!instant){
                    await essentials.sleep(1000);
                }
                if(debug){
                    contentScripts.showDataOnConsoleDynamic(`${count} Seconds Waiting for element : ${name || selector}`)
                }
            }else{
                break;
            }
            let elements = null;
            if(parent){
                elements = parent[type](selector);
            }else{
                elements = document[type](selector);
            }

            if(isMonoExpected){
                if(elements.length==1){  
                    if(validator){
                        if(validator(elements[0])){
                            result = elements[0];
                            break;
                        }
                    }else if(innerText){
                        if(elements[0].innerText.includes(innerText)){
                            result = elements[0];
                            break;
                        }
                    }else if(value){
                        if(elements[0].value.includes(value)){
                            result = elements[0];
                            break;
                        }
                    }else{
                        result = elements[0];
                        break;
                    }
                }else if(elements.length>1){
                    if(validator){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(validator(elements[i])){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length===1){
                            result = filteredElements[0];
                            break;
                        }
                    }else if(innerText){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            console.log(elements[i].innerText,innerText)
                            if(elements[i].innerText.includes(innerText)){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length===1){
                            result = filteredElements[0];
                            break;
                        }
                    }else if(value){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(elements[i].value.includes(value)){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length===1){
                            result = filteredElements[0];
                            break;
                        }
                    }
                }
            }else{
                if(elements.length>0){
                    if(validator){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(validator(elements[i])){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length>0){
                            result = filteredElements;
                            break;
                        }
                    }else if(innerText){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(elements[i].innerText.includes(innerText)){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length>0){
                            result = filteredElements;
                            break;
                        }
                    }else if(value){
                        const filteredElements = [];
                        for(let i=0;i<elements.length;i++){
                            if(elements[i].value.includes(value)){
                                filteredElements.push(elements[i]);
                            }
                        }
                        if(filteredElements.length>0){
                            result = filteredElements;
                            break;
                        }
                    }else{
                        result = elements;
                        break;
                    }
                }
            }
        }while(!instant);
        if(required && !result){
            contentScripts.showDataOnConsoleDynamic(`Element not found and required: ${name ||selector}`);
            contentScripts.showConsoleError();
            throw new Error({parent,data, instant, maxTimeOut, required,name});
        }else{
            if(!result){
                contentScripts.showDataOnConsoleDynamic(`Element not found: ${name ||selector}`);
                return null;
            }else{
                if(debug){
                    contentScripts.showDataOnConsoleDynamic(``)
                }
                return result;
            }
        }
    },
    collectUnseenMessage: async()=>{
        await contentScripts.showWorkingStep('Collecting unseen messages');
        const workingStepDB = new ChromeStorage('workingStep');
        const metaInformationDB = new ChromeStorage('metaInformation');
        if(window.location.href==fixedData.workingUrls.messages){
            contentScripts.clearConsole();
            contentScripts.showDataOnConsole('On message page');
            const marketplaceMessageBlock = await contentScripts.getElementBySelector({
                data: {
                    type: 'querySelectorAll',
                    isMonoExpected: true,
                    selector: fixedData.workingSelectors.messages.marketplaceMessagesBlock,
                    innerText: 'Marketplace'
                },
                instant: false,
                maxTimeOut: 10,
                required: true,
                name: 'Marketplace Messages Block'
            });
            marketplaceMessageBlock.click();
            contentScripts.showDataOnConsole('Marketplace Messages Block Clicked');
            // waiting for marketplace message section to load
            await contentScripts.getElementBySelector({
                data: {
                    type: 'querySelectorAll',
                    isMonoExpected: false,
                    selector: fixedData.workingSelectors.messages.allMarketplaceMessages
                },
                instant: false,
                maxTimeOut: 30,
                required: true,
                name: 'All Marketplace Messages'
            });

            // waiting for targeted marketplace messages to load
            const getMessageTimeInDay  = async(messageElement)=>{
                const timeElement = await contentScripts.getElementBySelector({
                    parent: messageElement,
                    data: {
                        type: 'querySelectorAll',
                        isMonoExpected: true,
                        selector: 'span:not(:has(*)):not(:empty)',
                        validator: (element)=>{
                            const text = element.innerText;
                            const regex = /^\d{1,2}[mhdwy]$/;
                            if(regex.test(text)){
                                return true;
                            }else{
                                return false;
                            }
                        }
                    },
                    instant: false,
                    maxTimeOut: 10,
                    required: true,
                    name: 'Message Time Element'
                });
                const abbreToDay = {
                    m: 0,
                    h: 0,
                    d: 1,
                    w: 7,
                    y: 365
                };
                const timeElementText = timeElement.innerText;
                const timeElementTextNumber = parseInt(timeElementText);
                const timeElementTextAbbre = timeElementText.match(/[mhdwy]/g)[0];
                const timeElementTextInDay = timeElementTextNumber*abbreToDay[timeElementTextAbbre];
                return timeElementTextInDay;
            };
            await (async ()=>{
                const initialTime = new Date().getTime();
                const isTimeOverSpent = ()=>{
                    const timeLimit = 60*1*1000;
                    const timeNow = new Date().getTime();
                    if(timeNow-initialTime>=timeLimit){
                        return true;
                    }else{
                        return false;
                    }
                };
                const timeStatusGenerator = ()=>{
                    const timeLimit = 60*1*1000;
                    const timeNow = new Date().getTime();
                    return `${Math.floor((timeNow-initialTime)/1000)}/${Math.floor(timeLimit/1000)} seconds used searching for messages`;
                };
                const reachedMessageBottom = ()=>{
                    const rendomMarketplaceMessage = document.querySelector(fixedData.workingSelectors.messages.allMarketplaceMessages);
                    const nearestAllMarketPlaceMessageHolder = rendomMarketplaceMessage.parentElement.parentElement;
                    const emptyChild = nearestAllMarketPlaceMessageHolder.querySelector(':scope > :empty');
                    if(emptyChild){
                        const isEmptyChildLastChild = emptyChild.parentElement.lastChild==emptyChild;
                        if(isEmptyChildLastChild){
                            contentScripts.showDataOnConsole('Reached Message Bottom');
                            return true;
                        }else{
                            const isEmptyChild3rdLastChild = emptyChild.parentElement.children[emptyChild.parentElement.children.length-3]==emptyChild;
                            if(isEmptyChild3rdLastChild){
                                // contentScripts.showDataOnConsole('Can still scroll down');
                                return false;
                            }else{
                                contentScripts.showDataOnConsole('Empty Child should be 3rd last child');
                                contentScripts.showConsoleError();
                                throw new Error('Error in finding empty child');
                            }
                        }
                    }else{
                        contentScripts.showDataOnConsole('Could not find scrolling end point');
                        contentScripts.showConsoleError();
                        throw new Error('No empty child found');
                    }
                };
                const scrollDown = ()=>{
                    const nearestScrollableParent = (()=>{
                        const rendomMarketplaceMessage = document.querySelector(fixedData.workingSelectors.messages.allMarketplaceMessages);
                        // overflow-y : scroll
                        let element = rendomMarketplaceMessage;
                        const maximumDistance = 5;
                        let currentDistance = 0;
                        while(element){
                            const style = window.getComputedStyle(element);
                            if(style.overflowY=='scroll'){
                                return element;
                            }else{
                                if(currentDistance>maximumDistance){
                                    return null;
                                }else{
                                    element = element.parentElement;
                                    currentDistance++;
                                }
                            }
                        }
                    })();
                    if(nearestScrollableParent){
                        contentScripts.showDataOnConsole('Scrolling Down');
                        nearestScrollableParent.scrollTop = nearestScrollableParent.scrollHeight;
                    }else{
                        contentScripts.showDataOnConsole('Could not find scrolling parent');
                        contentScripts.showConsoleError();
                        throw new Error('No scrolling parent found');
                    }
                };
                
                const isLastMessageOlderThenTargeted = async()=>{
                    const metaInformationDB = new ChromeStorage('metaInformation');
                    const metaInformation = await metaInformationDB.GET();
                    const checkMessageDaysLimit = metaInformation.checkMessageDaysLimit;

                    const allMessages = document.querySelectorAll(fixedData.workingSelectors.messages.allMarketplaceMessages);
                    const lastMessage = allMessages[allMessages.length-1];
                    const lastMessageTimeInDay = await getMessageTimeInDay(lastMessage);
                    if(lastMessageTimeInDay>checkMessageDaysLimit){
                        contentScripts.showDataOnConsole('Last message is older than targeted');
                        return true;
                    }else{
                        contentScripts.showDataOnConsole('Last message is not older than targeted');
                        return false;
                    }
                };
                const getChildIndex = (parent,child)=>{
                    var childrenArray = Array.from(parent.children);
                    var childIndex = childrenArray.indexOf(child);
                    return childIndex;
                };
                const isAllMessagesLoaded = ()=>{
                    const rendomMarketplaceMessage = document.querySelector(fixedData.workingSelectors.messages.allMarketplaceMessages);
                    const nearestAllMarketPlaceMessageHolder = rendomMarketplaceMessage.parentElement.parentElement;
                    const loadingMessages = nearestAllMarketPlaceMessageHolder.querySelectorAll(fixedData.workingSelectors.messages.loadingMessages); 
                    const allChildren = nearestAllMarketPlaceMessageHolder.children;
                    let loadingMessageCount = 0;
                    for(let i=0;i<allChildren.length;i++){
                        const child = allChildren[i];
                        const messageLoading = child.querySelector(fixedData.workingSelectors.messages.loadingMessages);
                        const isAnchor = child.childElementCount === 0 && child.textContent.trim() === '';
                        if(messageLoading){
                            loadingMessageCount++;
                        }else if(isAnchor){
                            contentScripts.showDataOnConsole(`Anchor found at: ${i+1}/${allChildren.length} index`);
                            break;
                        }
                    }
                    if(loadingMessageCount>0){
                        contentScripts.showDataOnConsoleDynamic(`${loadingMessageCount} Message still loading`);
                        return false;
                    }else{
                        contentScripts.showDataOnConsole('Message all loaded');
                        return true;
                    }
                        
                };
                while(!await isLastMessageOlderThenTargeted()){
                    contentScripts.showDataOnConsoleDynamic(timeStatusGenerator());
                    if(reachedMessageBottom()){
                        break;
                    }
                    scrollDown();   
                    if(isTimeOverSpent()){
                        contentScripts.showDataOnConsole('Time Over Spent');
                        contentScripts.showConsoleError();
                        throw new Error('Time Over Spent looking for messages');
                    }
                    await essentials.sleep(5000);
                }
                while(!isAllMessagesLoaded()){
                    contentScripts.showDataOnConsoleDynamic(timeStatusGenerator());  
                    if(isTimeOverSpent()){
                        contentScripts.showDataOnConsole('Time Over Spent');
                        contentScripts.showConsoleError();
                        throw new Error('Time Over Spent looking for messages');
                    }
                    await essentials.sleep(5000);
                }
                // clear console
                contentScripts.clearConsole();
                contentScripts.showDataOnConsole("All targeted messages loaded");
            })();

            // get unseen messages
            const unseenMessageIds = await (async()=>{
                const metaInformationDB = new ChromeStorage('metaInformation');
                const metaInformation = await metaInformationDB.GET();
                const checkMessageDaysLimit = metaInformation.checkMessageDaysLimit;

                const allMarketplaceMessages = document.querySelectorAll(fixedData.workingSelectors.messages.allMarketplaceMessages);
                const ids = [];
                for(let i=0;i<allMarketplaceMessages.length;i++){
                    const message = allMarketplaceMessages[i];
                    const unseenMessageUrl = message.querySelector('a[href*="/messages/t/"]:has(div [aria-label="Mark as read"])');
                    if(unseenMessageUrl){
                        const messageTimeInDay = await getMessageTimeInDay(message);
                        if(checkMessageDaysLimit>=messageTimeInDay){
                            // console.log(`${checkMessageDaysLimit}>=${messageTimeInDay}`)
                            const url = unseenMessageUrl.href;
                            const messageIdRegex = /\/messages\/t\/(\d+)/;
                            const messageIdMatch = url.match(messageIdRegex);
                            const messageId = messageIdMatch[1];
                            ids.push(messageId);
                        }
                    } 
                }
                return ids;
            })();
            if(unseenMessageIds.length==0){
                await workingStepDB.SET('prepareOutgoingMessage');
                contentScripts.showDataOnConsole(`Unseen Messages: ${unseenMessageIds.length}`);
                contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending message');
            }else{
                await workingStepDB.SET('readUnseenMessage');
                const readUnseenMessageDB = new ChromeStorage('readUnseenMessage');
                await readUnseenMessageDB.SET(unseenMessageIds);
                contentScripts.showDataOnConsole(`Unseen Messages: ${unseenMessageIds.length}`);
                contentScripts.pageRedirection(`${fixedData.workingUrls.unknownMessageSuffix}${unseenMessageIds[0]}`,'start reading Unseen Message');
            }
            return;
        }else{
            await contentScripts.pageRedirection(fixedData.workingUrls.messages,'Not on message page');
        }
    },
    getCarVinFromText : (text)=>{
        text = text+'';
        text = text.toUpperCase();
        text = text.replace(/[^A-Z0-9]/g, '');
        const vinRegex = /([A-HJ-NPR-Z\d]{8})([X\d]{1})([E-HJ-NPR-TV]{1})([A-HJ-NPR-Z\d]{2})([\d]{5})/;
        const vinMatch = vinRegex.exec(text);
        let vin = '';
        if(vinMatch){
            vin = vinMatch[0];
            const beforeCheckDigit = vin.substring(0, 8);
            const checkDigit = vin.substring(8, 9)=="X"?"10":parseInt(vin.substring(8, 9));
            const afterCheckDigit = vin.substring(9);
            const stringWithoutCheckDigit = beforeCheckDigit + afterCheckDigit;
            const changeLetterToNumberValue = (letter)=>{
                // no i,O,Q
                letter = letter.replace(/[AJ]/g, '1');
                letter = letter.replace(/[BKS]/g, '2');
                letter = letter.replace(/[CLT]/g, '3');
                letter = letter.replace(/[DMU]/g, '4');
                letter = letter.replace(/[ENV]/g, '5');
                letter = letter.replace(/[FW]/g, '6');
                letter = letter.replace(/[GPX]/g, '7');
                letter = letter.replace(/[HY]/g, '8');
                letter = letter.replace(/[RZ]/g, '9');
                return letter;
            };
            const numberWithoutCheckDigit = changeLetterToNumberValue(stringWithoutCheckDigit);
            const numberWeights = [8, 7, 6, 5, 4, 3, 2, 10, 9, 8, 7, 6, 5, 4, 3, 2];
            const numberArray = numberWithoutCheckDigit.split('');
            let sum = 0;
            for(let i=0; i<numberArray.length; i++){
                sum += numberArray[i]*numberWeights[i];
            }
            const checkDigitCalculatedValue = sum%11;
            if(checkDigitCalculatedValue==checkDigit){
                return vin;
            }else{
                console.log('Wrong Vin');
                return null;
            }
        }else{
            console.log('No vin found');
            return null;
        }
    },
    itemNeedVin: async(item_id)=>{
        const query =`
            query{
                boards(ids:[${fixedData.mondayFetch.borEffortBoardId}]){
                    items(limit:1,ids:[${item_id}]){
                        column_values(ids:["${fixedData.mondayFetch.columnValuesIds.borEffortBoard.vin}"]){
                            id,  
                            value
                        }
                    }
                }
            }
        `;
        const mondayFetchData = await mondayFetch(query);
        const mondayFetchJSON = await mondayFetchData.json();
        const itemExists = mondayFetchJSON.data.boards[0].items.length!=0;
        if(itemExists){
            const vin = mondayFetchJSON.data.boards[0].items[0].column_values[0].value;
            return vin==null;
        }else{
            return false;
        }
        
    },
    getVinFromMessageData: async(messageData)=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await metaInformationDB.GET();
        // where message type is text get message
        console.log('getting vin from texts');
        let vin = null;
        let messageTexts = '';
        for(let i=0;i<messageData.length;i++){
            const message = messageData[i];
            if(message.type=='text'){
                messageTexts += message.message;
            }
        }
        vin = contentScripts.getCarVinFromText(messageTexts);
        messageTexts = '';
        if(vin==null){
            console.log('getting image data');
            const apiKey = metaInformation.googleAPIKey;
            for(let i=0;i<messageData.length;i++){
                const message = messageData[i];
                if(message.type=='image'){
                    const imageData = await contentScripts.getTextFromImage({
                        url:message.message,
                        apiKey: apiKey
                    });
                    console.log(`image data: ${imageData}`);
                    messageTexts += imageData;
                    if(contentScripts.getCarVinFromText(messageTexts)!=null){
                        console.log('vin found');
                        const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
                        consoleBoard.style.backgroundColor = 'green';
                        await contentScripts.waitWithVisual(5);
                        break;
                    }
                }
            }
            vin = contentScripts.getCarVinFromText(messageTexts);
        }
        return vin;
    },
    readUnseenMessage: async ()=>{
        contentScripts.showWorkingStep('Reading Unseen Messages');
        const workingStepDB = new ChromeStorage('workingStep');
        const readUnseenMessageDB = new ChromeStorage('readUnseenMessage');
        const readUnseenMessage = await readUnseenMessageDB.GET();
        console.log(readUnseenMessage);

        
        const afterReadingMessage = async ()=>{
            readUnseenMessage.shift();
            await readUnseenMessageDB.SET(readUnseenMessage);
            if(readUnseenMessage.length==0){
                await workingStepDB.SET('prepareOutgoingMessage');
                await readUnseenMessageDB.SET(null);
                contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending message');
            }else{
                contentScripts.pageRedirection(`${fixedData.workingUrls.unknownMessageSuffix}${readUnseenMessage[0]}`,`unseen message : ${readUnseenMessage[0]}`);
            }
        }
        if(readUnseenMessage.length==0){
            await workingStepDB.SET('prepareOutgoingMessage');
            await readUnseenMessageDB.SET(null);
            contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending message');
        }else{
            if(window.location.href!=`${fixedData.workingUrls.unknownMessageSuffix}${readUnseenMessage[0]}`){
                contentScripts.pageRedirection(`${fixedData.workingUrls.unknownMessageSuffix}${readUnseenMessage[0]}`,'Redirecting to message page');
            }else{
                contentScripts.showDataOnConsole('reading message');
                const metaInformationDB = new ChromeStorage('metaInformation');
                const metaInfromation = await metaInformationDB.GET();
                await (async()=>{
                    const initialTime = new Date().getTime();
                    const isTimeOverSpent = ()=>{
                        const timeLimit = 60*1*1000;
                        const timeNow = new Date().getTime();
                        if(timeNow-initialTime>=timeLimit){
                            return true;
                        }else{
                            return false;
                        }
                    };
                    const timeStatusGenerator = ()=>{
                        const timeLimit = 60*1*1000;
                        const timeNow = new Date().getTime();
                        return `${Math.floor((timeNow-initialTime)/1000)}/${Math.floor(timeLimit/1000)} seconds used loading message`;
                    };
                    let isMessageLoading = true;
                    const messageBox = await contentScripts.getElementBySelector({
                        data: {
                            type: 'querySelectorAll',
                            isMonoExpected: true,
                            selector: fixedData.workingSelectors.readMessage.messageBox,
                        },
                        instant: false,
                        maxTimeOut: 30,
                        required: true,
                        name: 'Message Box'
                    });
                    while(isMessageLoading){
                        contentScripts.showDataOnConsoleDynamic(timeStatusGenerator());
                        const messageLoading = messageBox.querySelector('[role="progressbar"][aria-label="Loading..."]');
                        isMessageLoading = messageLoading?true:false;
                        if(isTimeOverSpent()){
                            contentScripts.showDataOnConsole('Time Over Spent');
                            contentScripts.showConsoleError();
                            throw new Error('Time Over Spent looking for messages');
                        }
                        await essentials.sleep(5000);
                    } 
                    contentScripts.showDataOnConsoleDynamic('');
                    contentScripts.showDataOnConsole('Message Loaded');                    
                })();


                // await contentScripts.readCurrentMessage();
                // await readUnseenMessageDB.SET(["6537134306402458"]);
                // return;

                const messageBox = document.querySelector(fixedData.workingSelectors.readMessage.messageBox);
                let postUrl = messageBox.querySelector(fixedData.workingSelectors.readMessage.postUrl);
                if(!postUrl){
                    await essentials.sleep(5000);
                    postUrl = messageBox.querySelector(fixedData.workingSelectors.readMessage.postUrl);
                }
                const itemData = {fb_message_id:`${readUnseenMessage[0]}`};
                if(postUrl){
                    const postId = postUrl.href.match(/\d+/g)[0];
                    itemData.fb_post_id = `${postId}`;
                    itemData.fb_id = `${(await contentScripts.accountInfo()).id}`;
                    const isValidMessageIdJSON = await fetch(`${metaInfromation.domain}/extension/isValidMessageId`,{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(itemData)
                    });
                    if(isValidMessageIdJSON.status==200){
                        const validData = await isValidMessageIdJSON.json();
                        const valid = validData.valid;
                        if(valid){
                            await essentials.sleep(2000);
                            // const item_id = await contentScripts.itemIdByPostId(itemData.fb_post_id);
                            const isMessageValid = await contentScripts.isCurrentMessageValid(itemData.fb_post_id);
                            if(isMessageValid){
                                contentScripts.showDataOnConsole('message is valid to read or write');
                                const messageDatas = await contentScripts.readCurrentMessage();
                                const lastMessageFromServer = await contentScripts.lastMessageOnServerByPostId(itemData.fb_post_id);
                                const item_id = await contentScripts.itemIdByPostId(itemData.fb_post_id);
                                if(item_id==null){
                                    contentScripts.showDataOnConsole('item_id not found');
                                    await afterReadingMessage();
                                    return;
                                }
                                let newMessageDatas = [];
                                for(let i = messageDatas.length-1;i>=0;i--){
                                    const messageData = messageDatas[i];
                                    messageData.item_id = `${item_id}`;
                                    const message = messageData.message;
                                    if(message.replace(/[^a-zA-Z0-9]/g,'')==lastMessageFromServer.replace(/[^a-zA-Z0-9]/g,'')){
                                        break;
                                    }else{
                                        newMessageDatas = [messageData].concat(newMessageDatas);
                                    }
                                }
                                // console.log(newMessageDatas);
                                // const readUnseenMessageCountDB = new ChromeStorage('readUnseenMessageCount');
                                // const readUnseenMessageCount = await readUnseenMessageCountDB.GET() || 0;
                                // for(let i=0;i<newMessageDatas.length;i++){
                                //     if(newMessageDatas[i].type=='image'){
                                //         if(newMessageDatas[i].message.includes('https://scontent.fdac')){
                                //             if(readUnseenMessageCount<2){
                                //                 await readUnseenMessageCountDB.SET(readUnseenMessageCount+1);
                                //                 contentScripts.pageRedirection(window.location.href,'redirecting to collect better image');
                                //                 return null;
                                //             }
                                //         }
                                //     }
                                // }
                                // await readUnseenMessageCountDB.SET(0);
                                await contentScripts.sendMessagesToServer(newMessageDatas);




                                // read vin from message --start
                                if(newMessageDatas.length>0){
                                    const needVin = await contentScripts.itemNeedVin(item_id);
                                    if(needVin){
                                        const vin  = await contentScripts.getVinFromMessageData(newMessageDatas);
                                        if(vin!=null){
                                            const query1 = `
                                                mutation{
                                                    change_simple_column_value(board_id:${fixedData.mondayFetch.borEffortBoardId},item_id:${item_id},column_id: ${fixedData.mondayFetch.columnValuesIds.borEffortBoard.vin}, value: "${vin}") {
                                                        id
                                                    }
                                                }
                                            `;
                                            const vinUpdateResponse = await mondayFetch(query1);
                                            // const vinUpdate = vinUpdateResponse.data.change_simple_column_value.id;
                                            console.log('vin added to item')
                                            const query2 = `
                                                mutation{
                                                    change_simple_column_value(board_id:${fixedData.mondayFetch.borEffortBoardId},item_id:${item_id},column_id: ${fixedData.mondayFetch.columnValuesIds.borEffortBoard.status}, value: "Auto Vin") {
                                                        id
                                                    }
                                                }
                                            `;
                                            const statusUpdateResponse = await mondayFetch(query2);
                                            // const statusUpdate = statusUpdateResponse.data.change_simple_column_value.id;
                                            console.log('status changed to Auto Vin')
                                        }
                                    }
                                }
                                //read vin from message --end



                            }else{
                                contentScripts.showDataOnConsole('message is not valid to read or write');
                                await contentScripts.markItemAsLinkGone();
                            }
                            await afterReadingMessage();
                        }else{
                            await afterReadingMessage();
                        }
                    }else{
                        contentScripts.showDataOnConsole('Error in checking message validity');
                        contentScripts.showConsoleError();
                    }
                }else{
                    const itemId = await contentScripts.getItemIdByMessageId(readUnseenMessage[0]);
                    if(itemId){
                        await contentScripts.markItemAsLinkGone(itemId);
                    }
                    await afterReadingMessage();
                }
            }
        }
    },
    // sendUnsentMessage: async ()=>{
    //     // Sorry, something went wrong.
    //     const workingStepDB = new ChromeStorage('workingStep');
    //     const metaInformationDB = new ChromeStorage('metaInformation');
    //     const sendUnsentMessageDB = new ChromeStorage('sendUnsentMessage');
    //     let sendUnsentMessage = await sendUnsentMessageDB.GET();
    //     const metaInfromation = await metaInformationDB.GET();
    //     // const fb_id = (await contentScripts.accountInfo()).id;
    //     const afterSendingMessage = async ()=>{
    //         sendUnsentMessage.shift();
    //         if(sendUnsentMessage.length==0){
    //             await workingStepDB.SET(null);
    //             await sendUnsentMessageDB.SET(null);
    //             contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
    //         }else{
    //             await sendUnsentMessageDB.SET(sendUnsentMessage);
    //             const fb_post_id = sendUnsentMessage[0];
    //             contentScripts.pageRedirection(fixedData.workingUrls.home,'Redirecting to seller message page');
    //         }
    //     }
    //     if(sendUnsentMessage==null){
    //         const hasRepliesToSend = await contentScripts.hasRepliesToSend();
    //         console.log(hasRepliesToSend);
    //         if(hasRepliesToSend.status){
    //             contentScripts.showDataOnConsole('has replies to send');
    //             sendUnsentMessage = await contentScripts.getUnsentMessagePostIds();
    //             // console.log('unsent message post ids',sendUnsentMessage);
    //             // console.log(sendUnsentMessage);
    //             // console.log(`item_id: ${hasRepliesToSend.item_id}`);
    //             // const fb_post_id = await contentScripts.postIdByItemId(hasRepliesToSend.item_id);
    //             // console.log(`fb_post_id: ${fb_post_id}`);
    //             // sendUnsentMessage =[fb_post_id];
    //             // console.log(`postIds to send: ${sendUnsentMessage}`);
    //             await sendUnsentMessageDB.SET(sendUnsentMessage);
    //         }else{
    //             // contentScripts.showDataOnConsole('no replies but checking for second message');
    //             // const hasSecondMessageToSend = await contentScripts.hasSecondMessageToSend();
    //             // if(hasSecondMessageToSend.status){
    //             //     contentScripts.showDataOnConsole('has second message to send');
    //             //     await contentScripts.setSecondMessage(hasSecondMessageToSend.item_id);
    //             //     await contentScripts.markItemAsSecondMessage(hasSecondMessageToSend.item_id);
    //             //     const fb_post_id = await contentScripts.postIdByItemId(hasSecondMessageToSend.item_id);
    //             //     sendUnsentMessage = [fb_post_id];
    //             //     await sendUnsentMessageDB.SET(sendUnsentMessage);
    //             // }else{
    //                 contentScripts.showDataOnConsole('no second message to send');
    //                 await workingStepDB.SET(null);
    //                 await sendUnsentMessageDB.SET([]);
    //                 contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
    //             // }
                
    //         }
    //     }
    //     if(sendUnsentMessage.length!=0){
    //         const fb_post_id = sendUnsentMessage[0];
    //         if(window.location.href!=`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`){
    //             if(fb_post_id==null){
    //                 await afterSendingMessage();
    //             }else{
    //                 contentScripts.pageRedirection(`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`,'Redirecting to seller message page');
    //             }
    //         }else{
    //             const validTosendMessage = await contentScripts.isValidMessageInSellerMessage(fb_post_id);
    //             if(validTosendMessage){
    //                 const messages = await contentScripts.getUnsentMessagesByPostId(fb_post_id);
    //                 if(messages.length!=0){
    //                     await essentials.sleep(5000);
    //                     for(let i=0;i<messages.length;i++){
    //                         const messageData = messages[i];
    //                         if(messageData==null){
    //                             await afterSendingMessage();
    //                         }else{
    //                             const message = messageData.message;
    //                             const all_content = document.body.innerText.replace(/[^a-zA-Z0-9]/g,'');
    //                             const message_content = message.replace(/[^a-zA-Z0-9]/g,'');
    //                             if(all_content.includes(message_content)){
    //                                 await contentScripts.markMessageAsSent(messageData.id); 
    //                                 await contentScripts.updateFirstMessageTime();
    //                                 await contentScripts.messageCountEligible(true);
    //                                 if(i==messages.length-1){
    //                                     // updateFirstMessageTime
    //                                     await afterSendingMessage();
    //                                 }
    //                             }else{
    //                                 await essentials.sleep(5000);
    //                                 const messageInput = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.messageInput);
    //                                 messageInput.value = message;
    //                                 const sendButton = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.sendButton);
    //                                 sendButton.click();
    //                                 const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
    //                                 const markAsLinkGoneButton = document.createElement('button');
    //                                 markAsLinkGoneButton.innerText = 'Mark as link gone';
    //                                 consoleBoard.append(markAsLinkGoneButton);
    //                                 markAsLinkGoneButton.onclick = async ()=>{
    //                                     const item_id = await contentScripts.itemIdByPostId(fb_post_id);
    //                                     await contentScripts.markItemAsLinkGone(item_id);
    //                                     await contentScripts.markItemMessagesdone(item_id);
    //                                     await afterSendingMessage();
    //                                 };
    //                                 break;
    //                             }
    //                         }
    //                     }
    //                     contentScripts.showDataOnConsole('program should not be stucked here');
    //                 }else{
    //                     await afterSendingMessage();
    //                 }
                    
    //             }else{
    //                 const item_id = await contentScripts.itemIdByPostId(fb_post_id);
    //                 await contentScripts.markItemAsLinkGone(item_id);
    //                 await contentScripts.markItemMessagesdone(item_id);
    //                 await afterSendingMessage();
    //             }
                
    //         }

    //     }else{
    //         console.log('redirecting to home to start sending new message');
    //         await workingStepDB.SET(null);
    //         await sendUnsentMessageDB.SET(null);
    //         contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
    //     }
    // },
    messageCountEligible: async (input)=>{
        const workingStepDB = new ChromeStorage('workingStep');
        const messageCountDB = new ChromeStorage('messageCount');
        const workingStep = await workingStepDB.GET();
        let messageCounts = await messageCountDB.GET();
        const currentHour = parseInt(new Date().getTime()/1000/3600);
        if(messageCounts==null){
            messageCounts = {
                [currentHour]: {new:0,reply:0},
                [currentHour-1]: {new:0,reply:0},
                [currentHour-2]: {new:0,reply:0},
            }
            await messageCountDB.SET(messageCounts);
        }else{
            const keys = Object.keys(messageCounts);
            for(let i=0;i<keys.length;i++){
                const key = keys[i];
                if(key<currentHour-2){
                    delete messageCounts[key];
                }
            }
            if(messageCounts[currentHour]==null){
                messageCounts[currentHour] = {new:0,reply:0};
            }
            if(messageCounts[currentHour-1]==null){
                messageCounts[currentHour-1] = {new:0,reply:0};
            }
            if(messageCounts[currentHour-2]==null){
                messageCounts[currentHour-2] = {new:0,reply:0};
            }
            await messageCountDB.SET(messageCounts);
        }
        const eligibility = async (type)=>{
            if(type=='new'){
                if(messageCounts[currentHour-1].new+messageCounts[currentHour-2].new-2 > messageCounts[currentHour-1].reply+messageCounts[currentHour-2].reply){
                    return false;
                }else{
                    return true;
                }
            }else if(type=='reply'){
               const hasRepliesToSend = await contentScripts.hasRepliesToSend();
               if(hasRepliesToSend.status){
                    return true;
               }else{
                    return false;
               }
            }
        };
        contentScripts.showDataOnConsole(workingStep);
        if(input){
            if(workingStep == undefined || workingStep == null){
                messageCounts[currentHour].new++;
            }else if(workingStep == 'sendUnsentMessage'){
                messageCounts[currentHour].reply++;
            }else{
                contentScripts.showDataOnConsole('This is not possible!!!!!');
            }
        }else{
            if(workingStep == undefined || workingStep == null){
                return {
                    status: await eligibility('new'),
                    totalStatus: (await eligibility('new'))||(await eligibility('reply')),
                }
            }else if(workingStep == 'sendUnsentMessage'){
                return {
                    status: await eligibility('reply'),
                    // totalStatus: (await eligibility('new'))||(await eligibility('reply')),
                }
            }else{
                contentScripts.showDataOnConsole('This is not possible!!!!!');
            }
        }
    },
    setupAccountControl: async ()=>{
        const metaInformation = new ChromeStorage('metaInformation');
        const metaInformationValues = await metaInformation.GET();
        const deviceId = metaInformationValues.deviceId;
        const domain = metaInformationValues.domain;
        const accountControlData = await fetch(`${domain}/extension/getAccountControlByDeviceId`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                deviceId: deviceId,
            }),
        });
        const accountControl = await accountControlData.json();
        
        let hourlyLimitData = accountControl.hourlyLimitData;
        hourlyLimitData = JSON.parse(hourlyLimitData);

        metaInformationValues.extensionSwitch = accountControl.mainSwitch;
        metaInformationValues.debugModeSwitch = accountControl.debugSwitch;
        metaInformationValues.checkMessageDaysLimit = accountControl.readMessageDays;
        metaInformationValues.readMessageLimitCount = accountControl.readMessageLimit;

        const americanHour = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getHours();
        const hourlyLimitExists = hourlyLimitData[`h${americanHour}`]!=null;
        if(hourlyLimitExists){
            const newMessageLimit = hourlyLimitData[`h${americanHour}`].n;
            const replyMessageLimit = hourlyLimitData[`h${americanHour}`].r;

            metaInformationValues.hourlyMessageLimit = newMessageLimit + replyMessageLimit;
            metaInformationValues.hourlyNewMessageLimit = newMessageLimit;
            metaInformationValues.hourlyReplyMessageLimit = replyMessageLimit;
            metaInformationValues.messagingStartTime = americanHour;
            metaInformationValues.messagingEndTime = americanHour;

        }else{
            metaInformationValues.hourlyMessageLimit = 0;
            metaInformationValues.hourlyNewMessageLimit = 0;
            metaInformationValues.hourlyReplyMessageLimit = 0;
            metaInformationValues.messagingStartTime = 0;
            metaInformationValues.messagingEndTime = 0;
        }
        await metaInformation.SET(metaInformationValues);
    },
    americanHour: ()=>{
        return new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})).getHours();
    },
    programTimeController: async ()=>{
        // status = true means program is running
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await metaInformationDB.GET();
        const messagingStartHour = parseInt(metaInformation.messagingStartTime);
        const hourlyMessageLimit = metaInformation.hourlyMessageLimit;
        const minimumDuration = 3600/hourlyMessageLimit/100*90;
        const time = new Date().getTime()/1000;
        const timeDoneThisHour = (new Date().getMinutes())*60 + new Date().getSeconds();
        const timeLeftThisHour = 3600 - timeDoneThisHour;
        const messageTime = await contentScripts.messageTime();
        
        if(messagingStartHour==0){
            return {
                status: false,
            }
        }else{
            if(hourlyMessageLimit==0){
                return {
                    status: true,
                    waitingTime: timeLeftThisHour+100
                }
            }else{
                return {
                    status: true,
                    waitingTime: minimumDuration-(time-messageTime)
                }
            }
        }
    },
    messageTime: async (input)=>{
        const messageTimeDB = new ChromeStorage('messageTime');
        let messageTime = await messageTimeDB.GET();
        if(messageTime == null){
            messageTime = 0;
        }
        if(input){
            messageTime = new Date().getTime()/1000;
        }
        await messageTimeDB.SET(messageTime);
        return messageTime;
    },
    messageCounter: async(input)=>{
        const messageCounterDB = new ChromeStorage('messageCounter');
        let messageCounter = await messageCounterDB.GET();
        
        const workingStepDB = new ChromeStorage('workingStep');
        const workingStep = await workingStepDB.GET();
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await metaInformationDB.GET();
        const currentHour = metaInformation.messagingStartTime;
        if(messageCounter==null){
            console.log('program will be here once in a lifetime');
            messageCounter = {
                [currentHour]: {new:0,reply:0,total:0},
                [currentHour-1]: {new:0,reply:0,total:0},
                [currentHour-2]: {new:0,reply:0,total:0},
            };
        }
        const hours = Object.keys(messageCounter);
        for(let i=0;i<hours.length;i++){
            const hour = hours[i];
            if(hour!=currentHour-2 && hour!=currentHour-1 && hour!=currentHour){
                console.log('hour changes');
                delete messageCounter[hour];
            }
        }
        if(messageCounter[currentHour]==null){
            messageCounter[currentHour] = {new:0,reply:0,total:0};
        }
        if(messageCounter[currentHour-1]==null){
            messageCounter[currentHour-1] = {new:0,reply:0,total:0};
        }
        if(messageCounter[currentHour-2]==null){
            messageCounter[currentHour-2] = {new:0,reply:0,total:0};
        }
        if(input){
            console.log('message counter is increasing');
            await contentScripts.messageTime(true);
            messageCounter[currentHour].total++;
            if(workingStep == 'sendFirstMessage'){
                messageCounter[currentHour].new++;
            }else if(workingStep == 'sendReplyMessage'){
                messageCounter[currentHour].reply++;
            }else{
                console.log('believe me: Program is not working properly');
            }
        }
        await messageCounterDB.SET(messageCounter);
        console.log(messageCounter);
        return messageCounter;
    },
    prepareOutgoingMessage: async()=>{
        console.log('preparing outgoing message');
        const timeController = await contentScripts.programTimeController();
        if(timeController.status){
            await contentScripts.waitWithVisual(timeController.waitingTime);
        }else{
            console.log('program is not running');
            return false;
        }
        const workingStepDB = new ChromeStorage('workingStep');
        const metaInformationDB = new ChromeStorage('metaInformation');
        const sendOutgoingMessageDB = new ChromeStorage('sendOutgoingMessage');
        const metaInformation = await metaInformationDB.GET();
        const serverCount = {new:metaInformation.hourlyNewMessageLimit,reply:metaInformation.hourlyReplyMessageLimit,total:metaInformation.hourlyMessageLimit};

        const currentHour = metaInformation.messagingStartTime;
        const localCounts = await contentScripts.messageCounter();
        console.log(`currentHour: ${currentHour}`);
        const localCount = localCounts[currentHour];
        console.log('localCount',localCount);
        if(serverCount.total>localCount.total){
            console.log('have slot for sending message this hour');
            const balanceLogic = localCounts[currentHour-1].new+localCounts[currentHour-2].new-2 <= localCounts[currentHour-1].reply+localCounts[currentHour-2].reply;
            console.log(localCounts);
            console.log('balanceLogic',balanceLogic);
            if(serverCount.new>localCount.new && balanceLogic){  
                console.log('have slot for sending new message this hour');
                const hasUnsentFirstMessage = await contentScripts.hasUnsentFirstMessage();
                if(hasUnsentFirstMessage.status){
                    console.log('has unsent first message');
                    await sendOutgoingMessageDB.SET(hasUnsentFirstMessage);
                    await workingStepDB.SET('sendFirstMessage');
                    await contentScripts.pageRedirection(fixedData.workingUrls.home,'will send first message now');
                    return true;
                }else{
                    console.log('dont have unsent first message');
                    const hasNewRawItem = await contentScripts.hasNewRawItem();
                    if(hasNewRawItem.status){
                        console.log('has new raw item');
                        const query1 = `
                            query{
                                items(ids: [${hasNewRawItem.item_id}]){
                                    column_values(ids:["${fixedData.mondayFetch.columnValuesIds.borEffortBoard.url}"]){
                                        value
                                    }
                                }
                            }
                        `;
                        const urlDataJSON = await mondayFetch(query1);
                        const urlData = await urlDataJSON.json();
                        const url = urlData.data.items[0].column_values[0].value;
                        const fb_post_id = url.match(/\d+/g).map(Number)[0];
                        const initiateItemMessaging = await fetch(`${metaInformation.domain}/extension/initiateItemMessaging`,{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                item_id: `${hasNewRawItem.item_id}`,
                                fb_post_id: `${fb_post_id}`,
                                fb_id: `${(await contentScripts.accountInfo()).id}`,
                                fb_user_name: `${(await contentScripts.accountInfo()).name}`
                            }),
                        });
                        const initiateItemMessagingData = await initiateItemMessaging.json();
                        if(initiateItemMessagingData.status){
                            console.log('initiated item messaging');
                            await sendOutgoingMessageDB.SET(initiateItemMessagingData);
                            await workingStepDB.SET('sendFirstMessage');
                            await contentScripts.pageRedirection(fixedData.workingUrls.home,'will send first message now');
                            return true;
                        }else{
                            console.log('initiation failed!! Try again');
                            return false;
                            // initiation failed
                        }
                    }else{
                        console.log('dont have raw item to send first message');
                        const hasRepliesToSend = await contentScripts.hasRepliesToSend();
                        if(hasRepliesToSend.status){
                            console.log('has replies to send');
                            await sendOutgoingMessageDB.SET(hasRepliesToSend);
                            await workingStepDB.SET('sendReplyMessage');
                            await contentScripts.pageRedirection(fixedData.workingUrls.home,'will send reply message now');
                            return true;
                        }else{
                            console.log('dont have replies to send');
                            await contentScripts.waitWithVisual(600);
                            return false;
                        }
                    }
                }
            }else if(serverCount.reply>localCount.reply || serverCount.total>localCount.total){
                const hasRepliesToSend = await contentScripts.hasRepliesToSend();
                if(hasRepliesToSend.status){
                    console.log('has replies to send');
                    await sendOutgoingMessageDB.SET(hasRepliesToSend);
                    await workingStepDB.SET('sendReplyMessage');
                    await contentScripts.pageRedirection(fixedData.workingUrls.home,'will send reply message now');
                    return true;
                }else{
                    console.log('dont have replies to send');
                    await contentScripts.waitWithVisual(360);
                    await workingStepDB.SET('collectUnseenMessage');
                    await contentScripts.pageRedirection(fixedData.workingUrls.home,'will collect unseen message now');
                    return false;
                }
            }
        }else{
            console.log(metaInformation);
            console.log(localCount);
            console.log(typeof(serverCount.total), typeof(localCount.total));
            console.log('dont have slot for sending message this hour');
            await contentScripts.waitWithVisual(600);
            await workingStepDB.SET('collectUnseenMessage');
            await contentScripts.pageRedirection(fixedData.workingUrls.home,'will collect unseen message now');
            return false;
        }
    },
    getItmInformationDetailsFromMarketplaceItemPage: ()=>{
        const jsonScripts = document.querySelectorAll('script[type="application/json"]');
        let jsonData = null;
        for(let i=0;i<jsonScripts.length;i++){
            const fullText = jsonScripts[i].textContent;
            // find "marketplace_product_details_page"
            if(fullText.includes('marketplace_product_details_page')){
                jsonData = JSON.parse(fullText);
                break;
            }
        }
        if(jsonData){ 
            const findNestedKeyValue = (obj, targetKey)=>{
                for (const key in obj) {
                  if (obj.hasOwnProperty(key)) {
                    const value = obj[key];
                    if (key === targetKey) {
                      return value;
                    } else if (typeof value === 'object') {
                      const result = findNestedKeyValue(value, targetKey);
                      if (result !== undefined) {
                        return result;
                      }
                    }
                  }
                }
                return undefined;
            }
            const marketplaceProductDetailsPage = findNestedKeyValue(jsonData, 'marketplace_product_details_page');
            if(marketplaceProductDetailsPage) {
                try{
                    const item = marketplaceProductDetailsPage.target;
                    const messageThread = item.seller_message_thread?.thread_key?.thread_fbid || null;
                    console.log(item);
                    return {
                        sold: item.is_sold,
                        messageThread: messageThread,
                    }
                }catch(e){
                    return null;
                }
            }else{
                console.log('script not found')
                return null;
            }
        }
    },
    simulateTextAreaMessageEntry : (textArea,message)=>{
        const event = new Event('input', { bubbles: true });
        textArea.innerText = message;
        textArea.dispatchEvent(event);
    },
    sendOutgoingMessage: async()=>{
        const workingStepDB = new ChromeStorage('workingStep');
        const metaInformationDB = new ChromeStorage('metaInformation');
        const sendOutgoingMessageDB = new ChromeStorage('sendOutgoingMessage');
        let sendOutgoingMessage = await sendOutgoingMessageDB.GET();
        const metaInfromation = await metaInformationDB.GET();
        const workingStep = await workingStepDB.GET();
        
        // const afterSendingMessage = async ()=>{
        //     sendUnsentMessage.shift();
        //     if(sendUnsentMessage.length==0){
        //         await workingStepDB.SET(null);
        //         await sendUnsentMessageDB.SET(null);
        //         contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
        //     }else{
        //         await sendUnsentMessageDB.SET(sendUnsentMessage);
        //         const fb_post_id = sendUnsentMessage[0];
        //         contentScripts.pageRedirection(fixedData.workingUrls.home,'Redirecting to seller message page');
        //     }
        // }
        // contentScripts.showWorkingStep();
        // console.log('sendOutgoingMessage',sendOutgoingMessage);
        // return;
        
        
        
        //DELETE LATER STARTS
        // sendOutgoingMessage = {
        //     fb_post_id: 2234656630067530,
        //     item_id: 5279571305,
        //     id: sendOutgoingMessage.id,
        //     message: 'test message',
        //     status: true,
        // }
        // DELETE LATER ENDS



        if(sendOutgoingMessage==null){
            console.log('already sent message');
            contentScripts.pageRedirection(fixedData.workingUrls.home,'already sent message');
        }else if(sendOutgoingMessage.status){

            const fb_post_id = sendOutgoingMessage.fb_post_id;
            const item_id = sendOutgoingMessage.item_id;
            const id = sendOutgoingMessage.id;
            const message = sendOutgoingMessage.message;
            if(!window.location.href.includes(`${fixedData.workingUrls.sellerMessageSuffix}`)){
                contentScripts.pageRedirection(`${fixedData.workingUrls.sellerMessageSuffix}item/${fb_post_id}/`,'We are not even in the marketplace url');
                return false;
            }else{
                let validTosendMessage = true;
                if(window.location.href.includes('?unavailable_product=1')){
                    validTosendMessage = false;
                }else{
                    if(!window.location.href.includes(`${fixedData.workingUrls.sellerMessageSuffix}item/${fb_post_id}/`)){
                        contentScripts.pageRedirection(`${fixedData.workingUrls.sellerMessageSuffix}item/${fb_post_id}/`,'reditect to item page');
                        return false;
                    }
                    validTosendMessage = await contentScripts.isValidMessageInSellerMessage(fb_post_id);
                }
                if(validTosendMessage){
                    // sending message
                    console.log('will send message now');
                    const {messageThread} = contentScripts.getItmInformationDetailsFromMarketplaceItemPage();
                    if(!messageThread){
                        contentScripts.showDebugButton('Mark As LinkGone',async ()=>{
                            console.log('marking as link gone');
                            await contentScripts.markItemAsLinkGone(item_id);
                            await contentScripts.markItemMessagesdone(item_id);
                            console.log('found a message that is not valid, grabbing new one');
                            await workingStepDB.SET('prepareOutgoingMessage');
                            contentScripts.pageRedirection(fixedData.workingUrls.home,'will grab another unsent message');
                            return false;
                        });
                        const mainFeed = await contentScripts.getElementBySelector({
                            data :{
                                type: 'querySelectorAll',
                                selector: 'div[aria-label="Collection of Marketplace items"]',
                                isMonoExpected: true,
                            },
                            instant: false,
                            maxTimeOut: 10,
                            required: true,
                            name: 'mainFeed',
                        });
                        const messageOpeningButton = await contentScripts.getElementBySelector({
                            data :{
                                type: 'querySelectorAll',
                                selector: 'div[aria-label="Message"]',
                                isMonoExpected: true,
                                innerText: "Message",
                                parent: mainFeed,
                            },
                            instant: false,
                            maxTimeOut: 10,
                            required: true,
                            name: 'messageOpeningButton',
                        });
                        messageOpeningButton.click();
                        const messageDialog = await contentScripts.getElementBySelector({
                            data :{
                                type: 'querySelectorAll',
                                selector: 'div[role="dialog"][aria-label^="Message "]',
                                isMonoExpected: true,
                            },
                            instant: false,
                            maxTimeOut: 10,
                            required: true,
                            name: 'messageDialog',
                        });
                        const messageTextArea = await contentScripts.getElementBySelector({
                            data :{
                                type: 'querySelectorAll',
                                selector: 'label[aria-label="Please type your message to the seller"] textarea',
                                isMonoExpected: true,
                                parent: messageDialog,
                            },
                            instant: false,
                            maxTimeOut: 10,
                            required: true,
                            name: 'messageTextArea',
                        });
                        contentScripts.simulateTextAreaMessageEntry(messageTextArea,message);
                        // aria-label="Send message" not aria-disabled="true"
                        const sendButton = await contentScripts.getElementBySelector({
                            data :{
                                type: 'querySelectorAll',
                                selector: 'div[aria-label="Send message"]:not([aria-disabled="true"])',
                                isMonoExpected: true,
                                parent: messageDialog,
                            },
                            instant: false,
                            maxTimeOut: 10,
                            required: true,
                            name: 'sendButton',
                        });
                        sendButton.click();
                        const messageAgainButton = await contentScripts.getElementBySelector({
                            // aria-label="Message Again"
                            data :{
                                type: 'querySelectorAll',
                                selector: 'div[aria-label="Message Again"]',
                                isMonoExpected: false,
                                parent: messageDialog,
                            },
                            instant: false,
                            maxTimeOut: 15,
                            required: true,
                            name: 'sendButton',
                        });
                        if(messageAgainButton.length!=0){
                            const validMessageId = await contentScripts.validMessageId
                            contentScripts.pageRedirection(`${fixedData.workingUrls.sellerMessageSuffix}item/${fb_post_id}/`,'first message sent need to check');
                            return false;
                        }else{
                            contentScripts.showDataOnConsole('sending message taking too much time');
                            contentScripts.showConsoleError();
                            throw new Error('message not sent');
                        }
                    }

                    // NEED TO UPDATE LATER
                    window.history.pushState('page2', 'Title', `/messages/t/${messageThread}`);
                    window.history.pushState('page2', 'Title', `/messages/t/${messageThread}`);
                    window.history.back();
                    
                    const messageSent = async()=>{
                        if(workingStep=='sendFirstMessage'){
                            contentScripts.showDataOnConsole('marking as "First Message"');
                            const query = `
                                mutation {
                                    change_simple_column_value(
                                        item_id: ${item_id}, 
                                        board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                        column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.status}", 
                                        value: "1st MSG") {
                                        id
                                    }
                                }
                            `;
                            const formatDateToMondayAmerican = ()=>{
                                const americanTime = new Date(new Date().toLocaleString('en-US', {timeZone: 'America/New_York'}));
                                let month = '' + (americanTime.getMonth() + 1);
                                let day = '' + americanTime.getDate();
                                let year = americanTime.getFullYear();
                            
                                if (month.length < 2) 
                                    month = '0' + month;
                                if (day.length < 2) 
                                    day = '0' + day;
                            
                                return [year, month, day].join('-');
                            }
                            const query1 = `
                                mutation {
                                    change_simple_column_value(
                                        item_id: ${item_id}, 
                                        board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                        column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.fbCode}", 
                                        value: "${(await contentScripts.accountInfo()).name}") {
                                        id
                                    }
                                }
                            `;
                            const query2 = `
                                mutation {
                                    change_simple_column_value(
                                        item_id: ${item_id}, 
                                        board_id: ${fixedData.mondayFetch.borEffortBoardId}, 
                                        column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.date}", 
                                        value: "${formatDateToMondayAmerican()}") {
                                        id
                                    }
                                }
                            `;
                            const query3 = `
                                mutation{
                                    change_simple_column_value(board_id:${fixedData.mondayFetch.borEffortBoardId},
                                    item_id:${item_id},
                                    column_id: "${fixedData.mondayFetch.columnValuesIds.borEffortBoard.person}",
                                    value: "${fixedData.mondayFetch.myAccountId}") 
                                    {
                                        id
                                    }
                                }
                            `;
                            // const itemDataJSON = await mondayFetch(query2);
                            // const itemData = await itemDataJSON.json();
                            const firstMessageDataJSON = await mondayFetch(query);
                            const fbCodeJSON = await mondayFetch(query1);
                            const dateDataJSON = await mondayFetch(query2);
                            const personDataJSON = await mondayFetch(query3);

                            const dateData = await dateDataJSON.json();
                            const fbCode = await fbCodeJSON.json();
                            const firstMessageData = await firstMessageDataJSON.json();
                            const personData = await personDataJSON.json();
                            const metaInformation = await metaInformationDB.GET();
                            const domain = metaInformation.domain;
                            
                        }
                        await contentScripts.markMessageAsSent(id);
                        await contentScripts.messageCounter(true);
                        await workingStepDB.SET('collectUnseenMessage');
                        await contentScripts.pageRedirection(fixedData.workingUrls.home,'will collect unseen message now');
                        return true;
                    }
                    const linkGone = async ()=>{
                        console.log('marking as link gone');
                        await contentScripts.markItemAsLinkGone(item_id);
                        await contentScripts.markItemMessagesdone(item_id);
                        console.log('found a message that is not valid, grabbing new one');
                        await workingStepDB.SET('prepareOutgoingMessage');
                        contentScripts.pageRedirection(fixedData.workingUrls.home,'will grab another unsent message');
                        return false;
                    };
                    const textarea = document.createElement('textarea');
                    // width 390px height 100px
                    textarea.style.width = '390px';
                    textarea.style.height = '100px';
                    textarea.value = message;
                    const consoleBoardStandard = document.getElementById(fixedData.workingSelectors.content.console+'standard');
                    consoleBoardStandard.append(textarea);
                    contentScripts.showDebugButton('messageSent',messageSent);
                    contentScripts.showDebugButton('linkGone',linkGone);

                    // return;
                    // message loaded- copied from message reading section...
                    await (async()=>{
                        const initialTime = new Date().getTime();
                        const isTimeOverSpent = ()=>{
                            const timeLimit = 60*1*1000;
                            const timeNow = new Date().getTime();
                            if(timeNow-initialTime>=timeLimit){
                                return true;
                            }else{
                                return false;
                            }
                        };
                        const timeStatusGenerator = ()=>{
                            const timeLimit = 60*1*1000;
                            const timeNow = new Date().getTime();
                            return `${Math.floor((timeNow-initialTime)/1000)}/${Math.floor(timeLimit/1000)} seconds used loading message`;
                        };
                        let isMessageLoading = true;
                        const messageBox = await contentScripts.getElementBySelector({
                            data: {
                                type: 'querySelectorAll',
                                isMonoExpected: true,
                                selector: fixedData.workingSelectors.readMessage.messageBox,
                            },
                            instant: false,
                            maxTimeOut: 30,
                            required: true,
                            name: 'Message Box'
                        });
                        while(isMessageLoading){
                            contentScripts.showDataOnConsoleDynamic(timeStatusGenerator());
                            const messageLoading = messageBox.querySelector('[role="progressbar"][aria-label="Loading..."]');
                            isMessageLoading = messageLoading?true:false;
                            if(isTimeOverSpent()){
                                contentScripts.showDataOnConsole('Time Over Spent');
                                contentScripts.showConsoleError();
                                throw new Error('Time Over Spent looking for messages');
                            }
                            await essentials.sleep(5000);
                        } 
                        contentScripts.showDataOnConsoleDynamic('');
                        contentScripts.showDataOnConsole('Message Loaded');                    
                    })();
                    console.log("message loaded")


                    const all_content = document.body.innerText.replace(/[^a-zA-Z0-9]/g,'');
                    const message_content = message.replace(/[^a-zA-Z0-9]/g,'');
                    console.log(all_content.includes(message_content));
                    // return;
                    if(all_content.includes(message_content)){
                        console.log('message already sent');
                        await messageSent();
                    }else{
                        console.log('sending message');
                        await essentials.sleep(5000);
                        // CODE::::type and send message
                        const windowPosition = await chrome.runtime.sendMessage({action: "windowPosition"});
                        await fetch('http://localhost:7373/api/extension/clickAndType',{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                text: message,
                                position: {
                                    x: windowPosition.left+(windowPosition.width/2),
                                    y: (windowPosition.top+windowPosition.height)-30,
                                },
                            }),
                        });
                        await essentials.sleep(1000);
                        if(document.querySelector('div[aria-label="Message"][contenteditable="true"]').innerText != message){
                            console.log('message not typed');
                        }
                        // clicking send button
                        // aria-label="Press enter to send"
                        const sendButton = document.querySelector('div[aria-label="Press enter to send"]');
                        sendButton.click();
                        await essentials.sleep(5000);
                        const messageThreadUrl = `https://${fbSubDom}.facebook.com/messages/t/${messageThread}`;
                        contentScripts.pageRedirection(messageThreadUrl,'will check if message sent');
                        return;
                    }
                }else{
                    console.log('marking as link gone');
                    await contentScripts.markItemAsLinkGone(item_id);
                    await contentScripts.markItemMessagesdone(item_id);
                    console.log('found a message that is not valid, grabbing new one');
                    await workingStepDB.SET('prepareOutgoingMessage');
                    contentScripts.pageRedirection(fixedData.workingUrls.home,'will grab another unsent message');
                    return false;
                }
            }
        }else{
            console.log('Program should not be here unless fatal error');
        }
        
        // if(sendUnsentMessage.length!=0){
        //     const fb_post_id = sendUnsentMessage[0];
        //     if(window.location.href!=`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`){
        //         if(fb_post_id==null){
        //             await afterSendingMessage();
        //         }else{
        //             contentScripts.pageRedirection(`${fixedData.workingUrls.sellerMessageSuffix}${fb_post_id}/`,'Redirecting to seller message page');
        //         }
        //     }else{
        //         const validTosendMessage = contentScripts.isValidMessageInSellerMessage();
        //         if(validTosendMessage){
        //             const messages = await contentScripts.getUnsentMessagesByPostId(fb_post_id);
        //             if(messages.length!=0){
        //                 await essentials.sleep(5000);
        //                 for(let i=0;i<messages.length;i++){
        //                     const messageData = messages[i];
        //                     if(messageData==null){
        //                         await afterSendingMessage();
        //                     }else{
        //                         const message = messageData.message;
        //                         const all_content = document.body.innerText.replace(/[^a-zA-Z0-9]/g,'');
        //                         const message_content = message.replace(/[^a-zA-Z0-9]/g,'');
        //                         if(all_content.includes(message_content)){
        //                             await contentScripts.markMessageAsSent(messageData.id);
        //                             await contentScripts.updateFirstMessageTime();
        //                             await contentScripts.messageCountEligible(true);
        //                             if(i==messages.length-1){
        //                                 // updateFirstMessageTime
        //                                 await afterSendingMessage();
        //                             }
        //                         }else{
        //                             await essentials.sleep(5000);
        //                             const messageInput = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.messageInput);
        //                             messageInput.value = message;
        //                             const sendButton = document.querySelector(fixedData.workingSelectors.sendUnsentMessage.sendButton);
        //                             sendButton.click();
        //                             const consoleBoard = document.getElementById(fixedData.workingSelectors.content.console);
        //                             const markAsLinkGoneButton = document.createElement('button');
        //                             markAsLinkGoneButton.innerText = 'Mark as link gone';
        //                             consoleBoard.append(markAsLinkGoneButton);
        //                             markAsLinkGoneButton.onclick = async ()=>{
        //                                 const item_id = await contentScripts.itemIdByPostId(fb_post_id);
        //                                 await contentScripts.markItemAsLinkGone(item_id);
        //                                 await contentScripts.markItemMessagesdone(item_id);
        //                                 await afterSendingMessage();
        //                             };
        //                             break;
        //                         }
        //                     }
        //                 }
        //                 contentScripts.showDataOnConsole('program should not be stucked here');
        //             }else{
        //                 await afterSendingMessage();
        //             }
                    
        //         }else{
        //             const item_id = await contentScripts.itemIdByPostId(fb_post_id);
        //             await contentScripts.markItemAsLinkGone(item_id);
        //             await contentScripts.markItemMessagesdone(item_id);
        //             await afterSendingMessage();
        //         }
                
        //     }

        // }else{
        //     console.log('redirecting to home to start sending new message');
        //     await workingStepDB.SET(null);
        //     await sendUnsentMessageDB.SET(null);
        //     contentScripts.pageRedirection(fixedData.workingUrls.home,'start sending new message');
        // }
    },
    getTextFromImage: async({url,apiKey})=>{
        const base64EncodedImageFromUrl = async (url) => {
            const response = await fetch(url);
            const blob = await response.blob();
            return await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
        }
        const base64Data = await base64EncodedImageFromUrl(url);
        // console.log(a.replace(/^data:image\/?[A-z]*;base64,/,''));

        if(base64Data.match(/^data:image\/?[A-z]*;base64,/)){
            const textDataJSON = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "requests": [
                        {
                            "image": {
                                "content": base64Data.replace(/^data:image\/?[A-z]*;base64,/,'')
                            },
                            "features": [
                                {
                                    "type": "DOCUMENT_TEXT_DETECTION"
                                }
                            ]
                        }
                    ]
                })
            });
            const textData = await textDataJSON.json();
            if(textData.responses[0].fullTextAnnotation!=null){
                return textData.responses[0].fullTextAnnotation.text;
            }else{
                return '';
            }
        }else{
            return '';
        }
        
    },
    startWorking: async()=>{
        await contentScripts.showWorkingStep(`Program is starting up!`);
        const workingStepDB = new ChromeStorage('workingStep');
        await workingStepDB.SET('collectUnseenMessage');
        await contentScripts.pageRedirection(fixedData.workingUrls.messages,'will collect unseen message now');
    },
    positionWindow: async()=>{
        const metaInformationDB = new ChromeStorage('metaInformation');
        const metaInformation = await metaInformationDB.GET() || {};
        if(metaInformation.position!=null){
            // 1 means left top
            // 2 means right bottom
            // 3 means right top
            // 4 means left bottom
            const position = metaInformation.position;
            const display = await chrome.system.display.getInfo();
            let displayInfo = null;
            if (display.length > 0) {
                const primaryDisplay = display.find(display => display.isPrimary);
                console.log(primaryDisplay)
                if (primaryDisplay) {
            
                  displayInfo = primaryDisplay.workArea;
                }
            }
            if(displayInfo!=null){
                const height = displayInfo.height/2;
                const width = displayInfo.width/2;
                let left = displayInfo.left;
                let top = displayInfo.top;
                switch(position){
                    case "1":
                        left = displayInfo.left;
                        top = displayInfo.top;
                    break;
                    case "2":
                        left = displayInfo.left;
                        top = displayInfo.top+height;
                    break;
                    case "3":
                        left = displayInfo.left+width;
                        top = displayInfo.top;
                    break;
                    case "4":
                        left = displayInfo.left+width;
                        top = displayInfo.top+height;
                    break;
                }
                // update current window position
                const windowPosition = {
                    left: left,
                    top: top,
                    width: width,
                    height: height,
                }
                console.log('windowPosition',windowPosition)
                await chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, windowPosition);

            }

        }
    },
    windowPosition: async()=>{
        const windowPosition = await chrome.windows.get(chrome.windows.WINDOW_ID_CURRENT);
        console.log(windowPosition)
        return windowPosition;
    }
};

const popupSetup = async()=>{
    // const accountControllerView = accountController({});
    // const popupHolder = document.createElement('div');
    // popupHolder.className = 'h-500px overflow-y-auto'
    // popupHolder.append(accountControllerView);
    // document.body.append(popupHolder);
    
    console.log('popup');
    document.body.id ="POPUP";
    const metas = fixedData.metaInformation;
    const popupMetaDB = new ChromeStorage('metaInformation');
    let popupMetaValues = await popupMetaDB.GET();
    popupMetaValues = popupMetaValues==null?{}:popupMetaValues;
    const metaKeys = Object.keys(metas);
    for(let i=0;i<metaKeys.length;i++){
        const metaKey = metaKeys[i];
        const meta = metas[metaKey];
        if(meta.interactive==true){
            const label = document.createElement('label');
            label.innerText = meta.title;
            const input = document.createElement('input');
            input.setAttribute('type', meta.type);
            input.setAttribute('id', metaKey);
            // input.setAttribute('placeholder', meta.title);
            // input.setAttribute(meta.point, meta.defaultValue);
            if(popupMetaValues[metaKey]==null){
                popupMetaValues[metaKey] = meta.defaultValue;
            }
            input[meta.point] = popupMetaValues[metaKey];
            document.body.append(label,input);
        }else{
            // readd only
            const label = document.createElement('label');
            label.innerText = `${meta.title}: ${popupMetaValues[metaKey]}`;
            document.body.append(label);
        }
    }
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save';
    saveButton.addEventListener('click', async ()=>{
        for(let i=0;i<metaKeys.length;i++){
            if(metas[metaKeys[i]].interactive==true){
                const metaKey = metaKeys[i];
                const meta = metas[metaKey];
                popupMetaValues[metaKey] = document.getElementById(metaKey)[meta.point];
            }
        }
        await popupMetaDB.SET(popupMetaValues);
        window.close();
    });
    document.body.appendChild(saveButton);
     
}
const contentSetup = async()=>{
    contentScripts.setupConsoleBoard();
    const indexNames = [
        // "by_verification_feature_asc_property-for-sale-residential.com",
        // "by_verification_feature_asc_property-for-sale-commercial.com",
        // "by_verification_feature_asc_property-for-sale-land.com",
        // "by_verification_feature_asc_property-for-sale-multiple-units.com",
        
        // "property-for-rent-residential.com",
        "property-for-rent-commercial.com",
        "property-for-rent-rooms-for-rent-flatmates.com",
        "property-for-rent-short-term-daily.com",
        "property-for-rent-short-term.com"
    ];

    const neighborhoodIds = [
        65196,
        64702,
        64598,
        64360,
        63825,
        63824,
        63817,
        63784,
        63744,
        63622,
        63355,
        63155,
        63139,
        63073,
        62746,
        62596,
        62559,
        62347,
        97,
        96,
        92,
        91,
        89,
        85,
        84,
        81,
        80,
        68,
        67,
        65227,
        65224,
        65223,
        65212,
        65209,
        65202,
        65201,
        65200,
        65195,
        65194,
        65191,
        65189,
        65188,
        65187,
        65183,
        65181,
        65180,
        65176,
        65174,
        65171,
        65166,
        65160,
        65159,
        65157,
        65151,
        65148,
        65145,
        65144,
        65142,
        65138,
        65134,
        65132,
        65131,
        65130,
        65128,
        65126,
        65122,
        65121,
        65119,
        65117,
        65115,
        65111,
        65110,
        65109,
        65108,
        65107,
        65105,
        65103,
        65076,
        65071,
        65070,
        65069,
        65068,
        65066,
        65064,
        65063,
        65037,
        65031,
        65030,
        65029,
        65022,
        65020,
        65019,
        65018,
        65017,
        65016,
        65015,
        65013,
        65012,
        65009,
        65008,
        65001,
        65000,
        64999,
        64997,
        64993,
        64988,
        64978,
        64943,
        64911,
        64902,
        64894,
        64834,
        64804,
        64803,
        64760,
        64759,
        64755,
        64754,
        64753,
        64749,
        64748,
        64735,
        64732,
        64729,
        64723,
        64722,
        64711,
        64692,
        64690,
        64689,
        64688,
        64687,
        64686,
        64685,
        64684,
        64683,
        64682,
        64679,
        64678,
        64672,
        64671,
        64667,
        64662,
        64661,
        64660,
        64659,
        64658,
        64657,
        64655,
        64654,
        64653,
        64652,
        64651,
        64648,
        64647,
        64646,
        64645,
        64644,
        64642,
        64641,
        64640,
        64639,
        64638,
        64637,
        64634,
        64628,
        64627,
        64622,
        64615,
        64614,
        64613,
        64612,
        64611,
        64609,
        64608,
        64607,
        64597,
        64594,
        64584,
        64580,
        64578,
        64572,
        64569,
        64564,
        64558,
        64557,
        64556,
        64555,
        64554,
        64553,
        64552,
        64549,
        64545,
        64544,
        64528,
        64526,
        64525,
        64521,
        64510,
        64509,
        64499,
        64496,
        64493,
        64490,
        64489,
        64488,
        64482,
        64478,
        64477,
        64475,
        64474,
        64466,
        64458,
        64457,
        64450,
        64445,
        64441,
        64437,
        64435,
        64432,
        64423,
        64420,
        64419,
        64418,
        64417,
        64414,
        64413,
        64411,
        64410,
        64405,
        64403,
        64400,
        64398,
        64395,
        64391,
        64390,
        64389,
        64379,
        64378,
        64377,
        64375,
        64370,
        64358,
        64357,
        64351,
        64339,
        64334,
        64331,
        64325,
        64318,
        64314,
        64312,
        64309,
        64305,
        64304,
        64303,
        64286,
        64283,
        64281,
        64278,
        64277,
        64275,
        64273,
        64266,
        64257,
        64249,
        64248,
        64244,
        64241,
        64240,
        64233,
        64226,
        64218,
        64217,
        64215,
        64214,
        64212,
        64210,
        64208,
        64207,
        64206,
        64194,
        64193,
        64192,
        64178,
        64174,
        64172,
        64159,
        64156,
        64151,
        64150,
        64147,
        64146,
        64143,
        64135,
        64133,
        64132,
        64129,
        64127,
        64124,
        64122,
        64121,
        64116,
        64109,
        64107,
        64100,
        64089,
        64075,
        64074,
        64072,
        64070,
        64069,
        64062,
        64061,
        64060,
        64058,
        64051,
        64046,
        64045,
        64044,
        64036,
        64034,
        64028,
        64027,
        64024,
        64,
        63990,
        63962,
        63942,
        63912,
        63911,
        63878,
        63875,
        63871,
        63867,
        63866,
        63863,
        63861,
        63854,
        63853,
        63852,
        63851,
        63836,
        63835,
        63834,
        63833,
        63832,
        63830,
        63828,
        63826,
        63823,
        63819,
        63818,
        63816,
        63814,
        63811,
        63808,
        63803,
        63802,
        63801,
        63799,
        63798,
        63797,
        63796,
        63785,
        63779,
        63777,
        63774,
        63773,
        63772,
        63771,
        63768,
        63757,
        63754,
        63753,
        63750,
        63749,
        63748,
        63747,
        63742,
        63731,
        63717,
        63712,
        63708,
        63707,
        63704,
        63703,
        63702,
        63700,
        63698,
        63696,
        63686,
        63685,
        63681,
        63680,
        63679,
        63678,
        63677,
        63676,
        63670,
        63668,
        63660,
        63659,
        63655,
        63640,
        63635,
        63634,
        63633,
        63625,
        63618,
        63617,
        63614,
        63608,
        63607,
        63605,
        63604,
        63603,
        63600,
        63599,
        63590,
        63589,
        63586,
        63585,
        63584,
        63571,
        63570,
        63566,
        63565,
        63562,
        63560,
        63556,
        63555,
        63549,
        63545,
        63536,
        63534,
        63533,
        63532,
        63529,
        63528,
        63527,
        63526,
        63525,
        63524,
        63523,
        63522,
        63521,
        63520,
        63519,
        63518,
        63517,
        63515,
        63514,
        63507,
        63505,
        63499,
        63498,
        63497,
        63492,
        63485,
        63478,
        63474,
        63466,
        63425,
        63423,
        63422,
        63419,
        63416,
        63412,
        63398,
        63395,
        63389,
        63385,
        63382,
        63381,
        63380,
        63378,
        63348,
        63315,
        63312,
        63311,
        63310,
        63309,
        63307,
        63305,
        63304,
        63303,
        63297,
        63292,
        63289,
        63288,
        63287,
        63285,
        63281,
        63279,
        63267,
        63261,
        63260,
        63249,
        63246,
        63239,
        63238,
        63228,
        63227,
        63206,
        63201,
        63200,
        63198,
        63195,
        63184,
        63183,
        63180,
        63178,
        63177,
        63176,
        63175,
        63174,
        63132,
        63128,
        63113,
        63108,
        63103,
        63100,
        62782,
        62763,
        62760,
        62704,
        62700,
        62694,
        62681,
        62674,
        62673,
        62672,
        62669,
        62663,
        62662,
        62661,
        62618,
        62616,
        62615,
        62599,
        62597,
        62587,
        62583,
        62582,
        62580,
        62577,
        62576,
        62573,
        62571,
        62566,
        62560,
        62558,
        62557,
        62556,
        62555,
        62554,
        62537,
        62535,
        62511,
        62510,
        62509,
        62503,
        62498,
        62497,
        62489,
        62482,
        62481,
        62479,
        62478,
        62476,
        62475,
        62474,
        62473,
        62465,
        62464,
        62463,
        62462,
        62461,
        62457,
        62445,
        62434,
        62427,
        62426,
        62425,
        62422,
        62415,
        62403,
        62402,
        62401,
        62398,
        62396,
        62395,
        62394,
        62392,
        62391,
        62372,
        62371,
        62370,
        62356,
        62352,
        62328,
        62325,
        62323,
        62307,
        62306,
        62301,
        62299,
        62296,
        62295,
        62294,
        62291,
        62290,
        62288,
        62285,
        62284,
        62283,
        62281,
        62280,
        62275,
        62273,
        62271,
        62270,
        62257,
        62255,
        62254,
        62251,
        62250,
        62246,
        62245,
        62244,
        62242,
        62240,
        62239,
        62234,
        62229,
        62226,
        62225,
        62223,
        62222,
        62221,
        62220,
        62219,
        62216,
        62215,
        62214,
        62211,
        62210,
        62208,
        62207,
        62206,
        62202,
        62200,
        62196,
        62194,
        62191,
        62190,
        62189,
        62184,
        62183,
        62182,
        62181,
        62180,
        62179,
        62178,
        62177,
        62171,
        62168,
        62167,
        62166,
        62164,
        62154,
        62152,
        62137,
        62131,
        62130,
        62126,
        62119,
        62117,
        62115,
        62108,
        62103,
        62094,
        62092,
        62091,
        62090,
        62088,
        62078,
        62077,
        62076,
        62075,
        62074,
        62073,
        62071,
        62069,
        62059,
        62058,
        62056,
        62055,
        62053,
        62049,
        62048,
        62040,
        62038,
        62034,
        62032,
        62027,
        62024,
        62023,
        62021,
        62020,
        62019,
        62018,
        62016,
        62015,
        62014,
        62013,
        62012,
        62011,
        62008,
        62007,
        62006,
        62005,
        62004,
        62002,
        62001,
        62000,
        61999,
        61998,
        61997,
        61996,
        61995,
        61994,
        61992,
        61991,
        61990,
        61989,
        61,
        60352,
        60325,
        60320,
        60319,
        60318,
        60314,
        60311,
        60290,
        60288,
        60287,
        60285,
        60283,
        60282,
        60281,
        60280,
        60278,
        60276,
        60275,
        60274,
        60273,
        60271,
        60270,
        60269,
        60267,
        60266,
        60264,
        60263,
        60262,
        60261,
        60260,
        60259,
        60258,
        60257,
        60256,
        60254,
        60253,
        60252,
        60251,
        60250,
        60249,
        60248,
        60246,
        60245,
        60244,
        60236,
        60235,
        60234,
        60233,
        60232,
        60230,
        60228,
        60227,
        60224,
        60210,
        60209,
        60208,
        60206,
        60204,
        60203,
        60202,
        60199,
        60198,
        60197,
        60195,
        60194,
        60193,
        60192,
        60191,
        60188,
        60187,
        60185,
        60183,
        60182,
        60179,
        60177,
        60176,
        60167,
        60158,
        60157,
        60155,
        60154,
        60152,
        60151,
        60150,
        60148,
        60146,
        60144,
        60143,
        60142,
        60141,
        60140,
        60138,
        60137,
        60136,
        60086,
        60079,
        60078,
        60075,
        60072,
        60070,
        60069,
        60065,
        60064,
        60033,
        60032,
        60031,
        60030,
        60029,
        60027,
        60025,
        60024,
        60023,
        60022,
        60021,
        60020,
        60019,
        60018,
        57492,
        57411,
        57393,
        57392,
        57391,
        57390,
        57388,
        57387,
        57386,
        57385,
        57384,
        57383,
        57382,
        57381,
        57380,
        57378,
        57377,
        57376,
        57375,
        57374,
        57373,
        57372,
        57371,
        57369,
        57368,
        57367,
        57366,
        57363,
        57360,
        57356,
        57353,
        57352,
        57350,
        57348,
        57347,
        57346,
        57342,
        57337,
        57333,
        57329,
        57328,
        57324,
        57323,
        57319,
        57318,
        57315,
        57,
        53,
        139,
        138,
        137,
        136,
        132,
        131,
        130,
        129,
        127,
        124,
        123,
        121,
        120,
        118,
        117,
        116,
        115,
        64703,
        63732,
        63156,
        63140,
        63074,
        62747,
        98,
        87,
        86,
        65221,
        65216,
        65215,
        65214,
        65203,
        65198,
        65170,
        65163,
        65150,
        65146,
        65143,
        65141,
        65140,
        65137,
        65133,
        65129,
        65124,
        65120,
        65100,
        65096,
        65092,
        65088,
        65085,
        65078,
        65067,
        65060,
        65054,
        65047,
        65045,
        65039,
        65036,
        65033,
        65028,
        65002,
        64880,
        64844,
        64757,
        64751,
        64744,
        64739,
        64738,
        64700,
        64696,
        64695,
        64670,
        64669,
        64664,
        64633,
        64625,
        64621,
        64595,
        64592,
        64591,
        64589,
        64587,
        64585,
        64567,
        64533,
        64531,
        64523,
        64519,
        64518,
        64515,
        64512,
        64459,
        64454,
        64449,
        64425,
        64416,
        64407,
        64406,
        64376,
        64368,
        64354,
        64346,
        64317,
        64302,
        64292,
        64250,
        64229,
        64228,
        64203,
        64153,
        64117,
        64071,
        64067,
        64054,
        64047,
        64029,
        63877,
        63872,
        63848,
        63800,
        63791,
        63782,
        63766,
        63764,
        63723,
        63720,
        63711,
        63710,
        63709,
        63695,
        63690,
        63673,
        63649,
        63648,
        63638,
        63631,
        63623,
        63611,
        63558,
        63487,
        63467,
        63424,
        63420,
        63410,
        63409,
        63396,
        63394,
        63383,
        63364,
        63359,
        63357,
        63337,
        63298,
        63284,
        63259,
        63253,
        63232,
        63223,
        63217,
        63194,
        63192,
        63191,
        63190,
        63189,
        63187,
        63114,
        63096,
        62695,
        62637,
        62624,
        62622,
        62567,
        62564,
        62520,
        62507,
        62449,
        62376,
        62375,
        62368,
        62367,
        62365,
        62364,
        62363,
        62321,
        62151,
        62109,
        62099,
        62098,
        62083,
        62051,
        60190,
        57493,
        57379,
        57357,
        57325,
        64704,
        63157,
        63141,
        63075,
        62748,
        94,
        74,
        72,
        71,
        65228,
        65218,
        65192,
        65185,
        65172,
        65158,
        65155,
        65147,
        65125,
        65123,
        65102,
        65101,
        65098,
        65097,
        65094,
        65093,
        65090,
        65089,
        65080,
        65079,
        65077,
        65059,
        65052,
        65048,
        65043,
        65026,
        65023,
        64905,
        64809,
        64758,
        64736,
        64728,
        64727,
        64726,
        64725,
        64717,
        64699,
        64694,
        64691,
        64681,
        64677,
        64676,
        64668,
        64619,
        64618,
        64616,
        64565,
        64504,
        64503,
        64501,
        64456,
        64438,
        64431,
        64430,
        64429,
        64424,
        64421,
        64397,
        64388,
        64373,
        64369,
        64364,
        64347,
        64343,
        64330,
        64324,
        64315,
        64313,
        64293,
        64289,
        64287,
        64282,
        64280,
        64276,
        64274,
        64264,
        64259,
        64256,
        64254,
        64251,
        64247,
        64237,
        64227,
        64199,
        64198,
        64197,
        64196,
        64195,
        64173,
        64171,
        64170,
        64169,
        64168,
        64163,
        64161,
        64148,
        64123,
        64115,
        64049,
        64033,
        64030,
        64018,
        63940,
        63936,
        63933,
        63927,
        63926,
        63925,
        63924,
        63923,
        63922,
        63921,
        63920,
        63919,
        63918,
        63917,
        63916,
        63915,
        63914,
        63913,
        63910,
        63909,
        63908,
        63907,
        63906,
        63905,
        63904,
        63903,
        63902,
        63901,
        63900,
        63899,
        63897,
        63896,
        63895,
        63894,
        63893,
        63892,
        63891,
        63890,
        63889,
        63888,
        63887,
        63886,
        63885,
        63884,
        63883,
        63882,
        63881,
        63880,
        63868,
        63862,
        63847,
        63846,
        63838,
        63822,
        63813,
        63793,
        63786,
        63776,
        63769,
        63741,
        63740,
        63738,
        63737,
        63736,
        63735,
        63725,
        63724,
        63694,
        63683,
        63669,
        63667,
        63664,
        63662,
        63656,
        63651,
        63646,
        63644,
        63639,
        63621,
        63620,
        63596,
        63595,
        63594,
        63593,
        63592,
        63564,
        63553,
        63546,
        63544,
        63541,
        63530,
        63516,
        63513,
        63512,
        63511,
        63510,
        63509,
        63508,
        63504,
        63479,
        63475,
        63472,
        63470,
        63469,
        63468,
        63431,
        63397,
        63375,
        63358,
        63353,
        63346,
        63336,
        63334,
        63329,
        63293,
        63273,
        63252,
        63251,
        63242,
        63241,
        63234,
        63233,
        63230,
        63220,
        63207,
        63204,
        63172,
        63171,
        63136,
        63130,
        63124,
        63097,
        63095,
        63094,
        63093,
        63092,
        63091,
        63090,
        63089,
        63088,
        63087,
        63086,
        63085,
        63084,
        63083,
        63082,
        63081,
        63080,
        63079,
        63078,
        63077,
        63076,
        62759,
        62758,
        62757,
        62756,
        62755,
        62754,
        62753,
        62752,
        62751,
        62750,
        62749,
        62712,
        62691,
        62689,
        62677,
        62675,
        62654,
        62653,
        62610,
        62591,
        62589,
        62585,
        62575,
        62572,
        62562,
        62538,
        62505,
        62499,
        62496,
        62472,
        62446,
        62442,
        62441,
        62430,
        62408,
        62369,
        62362,
        62327,
        62315,
        62272,
        62256,
        62253,
        62252,
        62249,
        62237,
        62218,
        62193,
        62165,
        62143,
        62139,
        62118,
        62110,
        62097,
        62084,
        62082,
        62041,
        62031,
        61984,
        60277,
        60133,
        60067,
        58,
        57457,
        57345,
        57344,
        57316,
        57304,
        55,
        113,
        106,
        65075,
        64998,
        64705,
        63158,
        63142,
        57497,
        90,
        83,
        69,
        66,
        65222,
        65220,
        65211,
        65190,
        65179,
        65135,
        65072,
        65021,
        65003,
        64710,
        64680,
        64665,
        64543,
        64537,
        64516,
        64511,
        64436,
        64426,
        64320,
        64301,
        64239,
        64216,
        64184,
        64183,
        64182,
        64181,
        64180,
        64179,
        64162,
        64144,
        64137,
        64126,
        64064,
        64025,
        63943,
        63935,
        63855,
        63831,
        63815,
        63795,
        63746,
        63728,
        63645,
        63641,
        63543,
        63464,
        63463,
        63462,
        63461,
        63460,
        63459,
        63438,
        63437,
        63436,
        63433,
        63421,
        63388,
        63377,
        63376,
        63370,
        63368,
        63341,
        63335,
        63188,
        63131,
        63121,
        63120,
        63119,
        63117,
        63105,
        63099,
        63098,
        63,
        62783,
        62781,
        62780,
        62779,
        62778,
        62777,
        62776,
        62775,
        62774,
        62707,
        62685,
        62671,
        62670,
        62668,
        62667,
        62666,
        62665,
        62652,
        62639,
        62570,
        62504,
        62390,
        62373,
        62360,
        62355,
        62349,
        62348,
        62317,
        62268,
        62267,
        62238,
        62224,
        62142,
        62132,
        62125,
        62080,
        62070,
        62063,
        60268,
        60181,
        114,
        63319,
        63159,
        63143,
        78,
        73,
        65219,
        65199,
        65168,
        65086,
        65040,
        65038,
        65005,
        64779,
        64743,
        64733,
        64626,
        64596,
        64573,
        64502,
        64471,
        64470,
        64469,
        64468,
        64467,
        64465,
        64367,
        64322,
        64295,
        64290,
        64269,
        64231,
        64205,
        64202,
        64110,
        64106,
        64101,
        64096,
        64091,
        64086,
        64085,
        64082,
        64081,
        64078,
        64020,
        63865,
        63837,
        63718,
        63591,
        63457,
        63455,
        63448,
        63445,
        63442,
        63439,
        63430,
        63428,
        63365,
        63351,
        63338,
        63257,
        63209,
        63129,
        63107,
        63106,
        62698,
        62617,
        62353,
        62292,
        62282,
        62089,
        62087,
        62017,
        61982,
        57365,
        57330,
        64874,
        63160,
        63144,
        65099,
        65095,
        65091,
        65087,
        65042,
        64663,
        64546,
        64498,
        64464,
        64404,
        64353,
        64329,
        64279,
        64270,
        64158,
        64139,
        63966,
        63839,
        63745,
        63713,
        63693,
        63588,
        63582,
        63551,
        63482,
        63456,
        63306,
        63210,
        63196,
        63179,
        63170,
        63169,
        63168,
        63167,
        63166,
        63165,
        63164,
        63163,
        63162,
        63161,
        63154,
        63153,
        63152,
        63151,
        63150,
        63149,
        63148,
        63147,
        63146,
        63145,
        62688,
        62608,
        62553,
        62361,
        62259,
        62003,
        60322,
        57343,
        65167,
        65136,
        65082,
        65058,
        65049,
        65044,
        65011,
        65006,
        64888,
        64731,
        64697,
        64693,
        64601,
        64542,
        64532,
        64494,
        64447,
        64443,
        64412,
        64399,
        64341,
        64321,
        64308,
        64307,
        64299,
        64291,
        64267,
        64230,
        64222,
        64220,
        64211,
        64102,
        64097,
        64092,
        64087,
        64065,
        64032,
        63873,
        63849,
        63778,
        63699,
        63692,
        63688,
        63658,
        63630,
        63629,
        63628,
        63627,
        63626,
        63601,
        63552,
        63489,
        63488,
        63477,
        63476,
        63454,
        63452,
        63449,
        63446,
        63443,
        63440,
        63415,
        63390,
        63350,
        63349,
        63340,
        63316,
        63256,
        63254,
        63236,
        63225,
        63216,
        63215,
        63213,
        63212,
        63211,
        63135,
        63133,
        63126,
        63118,
        62676,
        62651,
        62650,
        62612,
        62600,
        62569,
        62536,
        62487,
        62486,
        62485,
        62324,
        62309,
        62213,
        62127,
        62067,
        62009,
        60312,
        64451,
        63321,
        63320,
        65213,
        65177,
        65156,
        65153,
        65139,
        65127,
        65084,
        65055,
        65014,
        65010,
        65007,
        65004,
        64885,
        64643,
        64606,
        64570,
        64551,
        64540,
        64539,
        64538,
        64506,
        64495,
        64453,
        64452,
        64442,
        64393,
        64338,
        64337,
        64310,
        64300,
        64263,
        64177,
        64155,
        64066,
        64053,
        64021,
        64016,
        64003,
        63829,
        63726,
        63672,
        63663,
        63661,
        63613,
        63531,
        63480,
        63471,
        63427,
        63418,
        63400,
        63314,
        63271,
        63266,
        63235,
        63231,
        63229,
        63224,
        62743,
        62711,
        62579,
        62451,
        62437,
        62436,
        62428,
        62261,
        62201,
        62113,
        62062,
        62061,
        62060,
        62052,
        61993,
        64535,
        63790,
        63789,
        63788,
        65204,
        65024,
        64675,
        64541,
        64534,
        64522,
        64479,
        64461,
        64394,
        64372,
        64140,
        64104,
        64031,
        63856,
        63763,
        63762,
        63761,
        63760,
        63759,
        63758,
        63701,
        63568,
        63567,
        63557,
        63362,
        62773,
        62690,
        62686,
        62594,
        62322,
        62260,
        62243,
        62030,
        57339,
        57327,
        57326,
        57313,
        142,
        63322,
        61983,
        65104,
        65081,
        65065,
        64961,
        64649,
        64636,
        64610,
        64536,
        64505,
        64472,
        64311,
        64191,
        64190,
        64189,
        64188,
        64187,
        64186,
        64185,
        64134,
        63937,
        63770,
        63756,
        63675,
        63674,
        63503,
        63495,
        63481,
        63361,
        63294,
        63244,
        63226,
        63203,
        63134,
        63110,
        63109,
        62791,
        62588,
        62578,
        62258,
        62188,
        62186,
        62185,
        62085,
        56,
        52,
        65226,
        65050,
        64486,
        64485,
        64366,
        64079,
        64004,
        63751,
        63657,
        63637,
        63615,
        63408,
        63173,
        62298,
        60265,
        63323,
        65178,
        65149,
        65046,
        65032,
        64879,
        64875,
        64737,
        64624,
        64590,
        64568,
        64428,
        64409,
        64387,
        64386,
        64385,
        64384,
        64383,
        64382,
        64381,
        64380,
        64352,
        64333,
        64297,
        64294,
        64288,
        64253,
        64252,
        64238,
        64166,
        64165,
        64138,
        64111,
        64068,
        64048,
        64041,
        64038,
        63941,
        63934,
        63870,
        63827,
        63805,
        63804,
        63734,
        63733,
        63730,
        63729,
        63727,
        63682,
        63643,
        63572,
        63506,
        63496,
        63494,
        63491,
        63465,
        63403,
        63384,
        63356,
        63111,
        62680,
        62607,
        62603,
        62565,
        62467,
        62456,
        62438,
        62433,
        62377,
        62350,
        62293,
        62287,
        62286,
        62102,
        62086,
        57506,
        64761,
        64484,
        64483,
        62517,
        62516,
        95,
        65225,
        65217,
        65207,
        65118,
        65106,
        65074,
        64752,
        64724,
        64666,
        64635,
        64632,
        64623,
        64620,
        64605,
        64604,
        64588,
        64579,
        64550,
        64500,
        64492,
        64487,
        64480,
        64462,
        64455,
        64440,
        64439,
        64422,
        64392,
        64365,
        64345,
        64344,
        64335,
        64271,
        64245,
        64235,
        64234,
        64157,
        64130,
        64113,
        64108,
        64105,
        64103,
        64099,
        64098,
        64093,
        64088,
        64080,
        64076,
        64059,
        64057,
        64019,
        64017,
        63939,
        63876,
        63858,
        63806,
        63792,
        63775,
        63765,
        63755,
        63705,
        63684,
        63654,
        63653,
        63616,
        63493,
        63453,
        63451,
        63450,
        63447,
        63444,
        63441,
        63371,
        63333,
        63332,
        63331,
        63330,
        63299,
        63262,
        63247,
        63123,
        63122,
        63116,
        63101,
        62787,
        62785,
        62784,
        62715,
        62699,
        62697,
        62647,
        62646,
        62645,
        62644,
        62643,
        62642,
        62631,
        62630,
        62629,
        62628,
        62627,
        62626,
        62625,
        62621,
        62620,
        62611,
        62609,
        62592,
        62552,
        62532,
        62531,
        62527,
        62526,
        62525,
        62521,
        62519,
        62518,
        62513,
        62506,
        62493,
        62492,
        62491,
        62490,
        62488,
        62447,
        62435,
        62429,
        62416,
        62407,
        62406,
        62405,
        62359,
        62357,
        62314,
        62313,
        62312,
        62311,
        62310,
        62308,
        62303,
        62302,
        62266,
        62265,
        62264,
        62263,
        62095,
        62065,
        62057,
        62054,
        62046,
        62045,
        62035,
        60184,
        60080,
        60074,
        57507,
        57389,
        57322,
        133,
        125,
        62459,
        65114,
        65062,
        64747,
        64566,
        64560,
        64529,
        64508,
        64402,
        64371,
        64272,
        64246,
        64225,
        64204,
        64055,
        64039,
        63780,
        63666,
        63642,
        63535,
        63426,
        62762,
        62664,
        62593,
        62410,
        62331,
        62297,
        62209,
        62138,
        57336,
        65205,
        65056,
        64599,
        64463,
        64349,
        64200,
        64090,
        63938,
        63859,
        63850,
        63719,
        63650,
        63647,
        63624,
        63483,
        63387,
        63313,
        63264,
        62679,
        62601,
        62539,
        62460,
        62409,
        62319,
        62278,
        63324,
        62289,
        65208,
        65197,
        65182,
        65175,
        65152,
        65083,
        65035,
        64745,
        64709,
        64708,
        64603,
        64600,
        64581,
        64571,
        64497,
        64491,
        64473,
        64460,
        64396,
        64363,
        64356,
        64323,
        64306,
        64296,
        64265,
        64260,
        64201,
        64176,
        64152,
        64149,
        64125,
        64073,
        64023,
        63978,
        63860,
        63781,
        63716,
        63619,
        63602,
        63563,
        63548,
        63484,
        63417,
        63413,
        63391,
        63347,
        63345,
        63343,
        63282,
        63263,
        63258,
        63185,
        63137,
        62705,
        62683,
        62678,
        62598,
        62561,
        62541,
        62471,
        62448,
        62397,
        62358,
        62329,
        62318,
        62316,
        62277,
        62205,
        62192,
        62081,
        64255,
        64063,
        63928,
        64476,
        63325,
        65186,
        65113,
        65112,
        64996,
        64987,
        64985,
        64959,
        64954,
        64833,
        64756,
        64734,
        64698,
        64650,
        64631,
        64630,
        64629,
        64602,
        64577,
        64559,
        64524,
        64513,
        64448,
        64434,
        64427,
        64408,
        64361,
        64359,
        64350,
        64342,
        64328,
        64319,
        64258,
        64243,
        64145,
        64131,
        64128,
        64084,
        64052,
        64022,
        63874,
        63812,
        63714,
        63691,
        63550,
        63501,
        63486,
        63407,
        63300,
        63290,
        63237,
        63218,
        63193,
        63138,
        63127,
        63125,
        63112,
        63104,
        62660,
        62568,
        62540,
        62469,
        62466,
        62304,
        62029,
        62028,
        62022,
        128,
        65206,
        65061,
        63326,
        65165,
        65162,
        65161,
        65073,
        65057,
        65034,
        65027,
        65025,
        64742,
        64740,
        64674,
        64617,
        64586,
        64575,
        64527,
        64517,
        64514,
        64355,
        64348,
        64336,
        64332,
        64326,
        64298,
        64285,
        64284,
        64268,
        64262,
        64236,
        64232,
        64219,
        64154,
        64136,
        64056,
        64042,
        64037,
        64035,
        63991,
        63869,
        63845,
        63842,
        63841,
        63715,
        63706,
        63687,
        63671,
        63587,
        63561,
        63392,
        63366,
        63363,
        63328,
        63327,
        63302,
        63301,
        63274,
        63265,
        63245,
        63221,
        63199,
        62790,
        62789,
        62602,
        62584,
        62515,
        62514,
        62512,
        62502,
        62495,
        62484,
        62483,
        62470,
        62444,
        62432,
        62431,
        62420,
        62419,
        62400,
        62346,
        62345,
        62344,
        62343,
        62342,
        62340,
        62339,
        62338,
        62337,
        62336,
        62335,
        62334,
        62333,
        62332,
        62320,
        62300,
        62197,
        62172,
        62157,
        62140,
        62104,
        60321,
        60317,
        60313,
        60289,
        60272,
        60207,
        60156,
        60,
        57334,
        65116,
        65053,
        65051,
        65041,
        64656,
        64593,
        64576,
        64507,
        64213,
        64118,
        64095,
        63794,
        63767,
        63752,
        63743,
        63722,
        63721,
        63689,
        63665,
        63598,
        63583,
        63559,
        63429,
        63318,
        63317,
        63295,
        63291,
        63222,
        62792,
        62708,
        62454,
        62374,
        60147,
        60076,
        64673,
        64481,
        64415,
        62354,
        65210,
        64746,
        64701,
        64444,
        64362,
        64340,
        64327,
        64094,
        64040,
        63240,
        62687,
        62641,
        62399,
        62305,
        62274,
        64574,
        64077,
        63879,
        63393,
        63354,
        62623,
        62604,
        62175,
        62174,
        63898,
        63404,
        62468,
        63581,
        63580,
        63579,
        63578,
        63577,
        63576,
        63575,
        63574,
        63573,
        63406,
        63405,
        63243,
        62742,
        62741,
        62740,
        62739,
        62738,
        62737,
        62736,
        62735,
        62734,
        62733,
        62732,
        62731,
        62730,
        62729,
        62728,
        62727,
        62726,
        62725,
        62724,
        62723,
        62722,
        62721,
        62720,
        62719,
        62718,
        62717,
        62716,
        62714,
        62713,
        62706,
        62703,
        62702,
        62701,
        62064,
        62010
    ];
    const fetchNumbers = async (purpose,query)=>{
        const res = await fetch(`https://dubizzle.com/en/${purpose}/svc/api/v1/graphql/`, {
            "headers": {
              "accept": "application/json",
              "accept-language": "en",
              "cache-control": "must-revalidate, max-age=0, no-cache, no-store",
              "content-type": "application/json;charset=UTF-8",
              "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-access-token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM3NzA3NWFlLTNiYWYtNDMwOS1iNjAwLTA1NWVhNzI1OWQ1NSIsImlzcyI6ImR1Yml6emxlLmNvbSIsImF1ZCI6WyJkdWJpenpsZS5jb20iXSwic3ViIjoiYzc3MDc1YWUtM2JhZi00MzA5LWI2MDAtMDU1ZWE3MjU5ZDU1IiwiZXhwIjoxNzAzNzk0ODY0LCJpYXQiOjE3MDM3MDg0NjQsImp0aSI6IjZlZWJiNTNkLTA4NWUtNDlhMC04NTg5LTAzODhhNzkyZGMwOSIsInR5cCI6IkFjY2VzcyBKV1QgVG9rZW4iLCJmbGFncyI6eyJsb2dnZWRfaW4iOmZhbHNlLCJpc19zdGFmZiI6ZmFsc2UsImlzX3N1cGVydXNlciI6ZmFsc2UsImlzX3Byb3BlcnR5X2FnZW50IjpmYWxzZSwiaXNfbGFuZGxvcmQiOmZhbHNlLCJpc19tb3RvcnNfYWdlbnQiOmZhbHNlLCJpc19qb2JzX2FnZW50IjpmYWxzZSwiaXNfbGVhZF9ibG9jayI6ZmFsc2UsImlzX2xlYWRfc29mdF9ibG9jayI6ZmFsc2UsImlzX2NoYXRfYmxvY2siOmZhbHNlLCJpc19jaGF0X3NvZnRfYmxvY2siOmZhbHNlLCJoYXNfY2FsbF90cmFja2luZyI6ZmFsc2UsImNhbl9yZXBvcnQiOnRydWUsImhpZGVfcHVibGljX3Byb2ZpbGUiOmZhbHNlLCJpc19tb3RvcnNfYWdlbnRfZW1wbG95ZWVfdXNlciI6ZmFsc2V9LCJ1c2VyX2RhdGEiOnsidXNlcl9pZCI6bnVsbCwiZ2VuZGVyIjpudWxsLCJuYXRpb25hbGl0eSI6bnVsbCwiZWR1Y2F0aW9uIjpudWxsLCJyb2xlIjpudWxsLCJkb2IiOm51bGwsImFnZSI6bnVsbCwiZmlyc3RfbmFtZSI6IiIsImxhc3RfbmFtZSI6IiIsImVtYWlsIjoiIiwicGhvbmUiOiIiLCJ2ZXJpZmljYXRpb25fc3RhdHVzIjoibm90X2FwcGxpZWQiLCJ2ZXJpZmljYXRpb25fc3RhcnRfZGF0ZSI6bnVsbH19.eeQBRm8JCylPIDqMUFfBHz3cXmzmJWdHQ_gC3HOtD1p05MdnaodAAd7eRq7bXVoSylo8x-5RV4o8xbXV5b4ZDkh4SQusOmYCDaDLcs1WEWhMNFj_Gwnd5lUnobvMNRXOm3v-f4GUUcx9-Ash9n9ZjKsN1_hYGFdwSl_1dHCQqbHOqZHSOKNTq-FcO2cc9RpBmmOtDhyA9PoeBWiBZTRG-qQy1LoH78a6Xvs4GRjBRa7eMmfxfCubE7jPLncdKqcW0Z4nTMCFt_tNRLSVly8BzLz3DW1ZuC5LCsXwiT3lNXpEGT8PPVVG1RNX4oAgvjaHw2d7bkydS0Vx2fk8ecKkJxex61dxcNBZgMdIJUS_2XLhT2bSmyzS-DKmLWw_G85Ev2U63o0pKjCwMXWtvuVSiaDmsj000qoqIZbUdx_gDu87ywJgf2tseoC5dU5PtP8vJC2j4c89bkZEGSNif8Us6Pac_uXmeniD81qF9GyT85ssZsAMuAQMvUeuueLFwlo8AojtdbfPuKJVm6nTfnWP2C60YVU5Kw6N9g4e7s9ja7HNFkHD-3cPVvKNDCjoS5jl1GP67hzBut0QLtBzbHysHXapdIMOdqIzochLJjNtQ7Imh5YVsRxbFcX_mNzJdzv_nOQYqG8QtMPg_jSSZXI0iUgSgyjhzNF65I1egMX2Zr0"
            },
            "referrer": `https://dubizzle.com/${purpose}/`,
            "referrerPolicy": "origin-when-cross-origin",
            "body": JSON.stringify({query}),
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        const data = (await res.json()).data;
        const keys = Object.keys(data);
        const result = {};
        keys.forEach(key=>{
            result[key] = data[key].cta?.phone_number?.phone_number || '';
        })
        return result;
    };
    const fetchListings = async(indexName,neighborhoodId,page,hitsPerPage)=>{
        const result = [];
        const data = await fetch("https://wd0ptz13zs-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.11.0)%3B%20Browser%20(lite)&x-algolia-api-key=6215b7bc0b9a929db64d9fb9ee902648&x-algolia-application-id=WD0PTZ13ZS", {
            "credentials": "omit",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0",
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.5",
                "content-type": "application/x-www-form-urlencoded",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "cross-site"
            },
            "referrer": "https://dubizzle.com/",
            "body": JSON.stringify({
                "requests": [
                    {
                        "indexName": `${indexName}`,
                        "query": "",
                        // "params": "page=1&attributesToHighlight=%5B%5D&hitsPerPage=35&attributesToRetrieve=%5B%22id%22%2C%22category_id%22%2C%22objectID%22%2C%22name%22%2C%22property_reference%22%2C%22price%22%2C%22featured_listing%22%2C%22has_tour_url%22%2C%22has_video_url%22%2C%22is_verified%22%2C%22listed_by%22%2C%22categories%22%2C%22agent%22%2C%22bedrooms%22%2C%22bathrooms%22%2C%22size%22%2C%22neighborhoods%22%2C%22city%22%2C%22building%22%2C%22photos%22%2C%22promoted%22%2C%22trucheck_verified_at%22%2C%22tour_360%22%2C%22verification_state%22%2C%22photos_count%22%2C%22added%22%2C%22video_url%22%2C%22has_dld_history%22%2C%22tour_url%22%2C%22highlighted_ad%22%2C%22has_whatsapp_number%22%2C%22has_agents_whatsapp%22%2C%22has_sms_number%22%2C%22short_url%22%2C%22absolute_url%22%2C%22id%22%2C%22category_id%22%2C%22badges%22%2C%22room_type%22%2C%22uuid%22%2C%22can_chat%22%2C%22is_premium_ad%22%2C%22description_short%22%2C%22_geoloc%22%2C%22completion_status%22%2C%22is_verified_user%22%2C%22agent_profile%22%2C%22payment_frequency%22%2C%22furnished%22%2C%22is_developer_listing%22%5D&filters=(%22neighborhoods.ids%22%3D61984)%20AND%20(%22categories_v2.slug_paths%22%3A%22property-for-sale%22)%20AND%20(%22categories_v2.slug_paths%22%3A%22property-for-sale%2Fresidential%22)"
                        params : (()=>{
                            const paramsObj = {
                                page: page,
                                attributesToHighlight: [],
                                hitsPerPage: hitsPerPage,
                                attributesToRetrieve: [
                                    "id",
                                    "absolute_url",
                                    // "state" -> active
                                    "name",
                                    "property_info",//->purpose
                                    "price",
                                    "payment_frequency",
                                    "property_reference",
                                    // "phoneNumber"->""
                                    "agent",
                                    "size",
                                    "bathrooms",
                                    "bedrooms",
                                    "neighborhoods",//location
                                    "city",//location
                                    "building",//location
                                    // "permit_number",//-> "" 
                                    "completion_status",
                                    "furnished",
                                    "verification_state",
                                    "added",
                                    "categories",
                                    "category_id",
        
        
        
                                    // "is_verified",
                                    // "agent",
                                    // "featured_listing",
                                    
                                    
                                    
                                    
                                    // "listed_by",
                                    // "has_tour_url",
                                    // "has_video_url",
                                    // "photos",
                                    // "promoted",
                                    // "trucheck_verified_at",
                                    // "tour_360",
                                    // "photos_count",
                                    // "video_url",
                                    // "has_dld_history",
                                    // "tour_url",
                                    // "highlighted_ad",
                                    // "has_whatsapp_number",
                                    // "has_agents_whatsapp",
                                    // "has_sms_number",
                                    // "short_url",
                                    // "badges",
                                    // "room_type",
                                    // "uuid",
                                    // "can_chat",
                                    // "is_premium_ad",
                                    // "description_short",
                                    // "_geoloc",
                                    // "is_verified_user",
                                    // "is_developer_listing"
                                ],
                                filters: [
                                    `(neighborhoods.ids=${neighborhoodId})`,
                                    // "(categories_v2.slug_paths:property-for-sale)",
                                    // "(categories_v2.slug_paths:property-for-sale/residential)"
                                ].join(" AND ")
                            };
                            return Object.keys(paramsObj).map((key)=>{
                                return `${key}=${paramsObj[key]}`;
                            }).join("&");
                        })(),
                    }
                ]
            }),
            "method": "POST",
            "mode": "cors"
        });
        const res = await data.json();
        const {hits} = res.results[0];
        
        hits.map((item) => {
            result.push({
                // https://www.bayut.com/property/details-8321482.html
                url: item.absolute_url.en,
                state: "active",
                title: item.name.en,
                // property_info[] which item has id="purpose"
                purpose: ((property_info)=>{
                    // let purpose = "for-";
                    // for(let i = property_info.length - 1; i >= 0; i--){
                    //     if(item.property_info[i].id == "purpose"){
                    //         purpose += item.property_info[i].value.en.toLowerCase();
                    //         break;
                    //     }
                    // }
                    // return purpose;
                    return item.absolute_url.en.split("/")[3];
                })(item.property_info),
                price: item.price,
                rentFrequency: item.payment_frequency?.en || "",
                referenceNumber: item.property_reference,
                category_id: item.category_id,
            
                phoneNumber: "",
                agency: item.agent?.name.en || "",
                area: ((area)=>{
                    return area ? `${area} sqft` : null;
                })(item.size),
                baths: item.bathrooms,
                rooms: item.bedrooms,
                location: ((city,neighborhood,building)=>{
                    let location = "";
                    if(city){
                        location += city.name.en;
                    }
                    if(neighborhood){
                        location += ", " + neighborhood.name.en;
                    }
                    if(building){
                        location += ", " + building.name.en;
                    }
                    return location;
                })(item.city,item.neighborhoods,item.building),
                permitNumber: "",
                completionStatus: item.completion_status,
                furnishingStatus: item.furnished?"furnished":"unfurnished",
                verification: item.verification_state,
                postCreatedAt: `${item.added}`,
                externalID: item.id,
                category: ((categories)=>{
                    let category = "";
                    if(categories){
                        if(categories.name){
                            const values = categories.name.en;//array
                            if(values){
                                category = values.join(", ");
                            }
                        }
                    }
                    return category;
                })(item.categories),
                // type: item.type,
                // occupancyStatus: item.occupancyStatus,
            });
        });
        if(result.length!=0){
            let graphqlQuery = `query{
                ${result.map((item)=>{
                    return `id${item.externalID} :listing(listingId: ${item.externalID}, categoryId: ${item.category_id}){
                        cta(userId:0, siteId:0,language:"en", includeContact:["phone_number"])
                    }`
                }).join("")}
            }`;
            
            const phoneNumbers = await fetchNumbers(result[0].purpose,graphqlQuery);
            result.map((item)=>{
                item.phoneNumber = phoneNumbers[`id${item.externalID}`];
            });
        }
        return {
            listings: result,
            total: res.results[0].nbHits,
        }
    };
    // getListingCount();
    const scrapListings = async(slug,page)=>{
        // const slugIndexDB  = new ChromeStorage('slugIndex');
        // const slugIndex = await slugIndexDB.GET() || 0;
        // const pageIndexDB  = new ChromeStorage('pageIndex');


        // const maxHit = 20;
        // for(let i =slugIndex;i<locationSlugs.length;i++){
        //     const index = indexes[i];
        //     const {total} = await fetchListings(index,page=1,hitsPerPage=1);
        //     const maxPage = Math.ceil(total/maxHit);
        //     const pageIndex = await pageIndexDB.GET() || 0;
        //     for(let j=pageIndex;j<maxPage;j++){
        //         console.log(`${i}/${locationSlugs.length} ${j}/${maxPage}`);
        //         contentScripts.showDataOnConsoleDynamic(`${i}/${locationSlugs.length} ${j}/${maxPage}`);
        //         const {listings} = await fetchListings(locationSlug,page=j,hitsPerPage=maxHit);
        //         await saveListings(listings);
        //         await pageIndexDB.SET(j+1);
        //         // await slugIndexDB.SET(i+1);
        //     }
        //     await pageIndexDB.SET(0);
        //     await slugIndexDB.SET(i+1);
        // }

        const indexNameIndexDB  = new ChromeStorage('indexNameIndex');
        const indexNameIndex = await indexNameIndexDB.GET() || 0;
        const neighborhoodIdIndexDB  = new ChromeStorage('neighborhoodIdIndex');
        const neighborhoodIdIndex = await neighborhoodIdIndexDB.GET() || 0;
        const pageIndexDB  = new ChromeStorage('pageIndex');
        const maxHit = 50;
        for(let i =indexNameIndex;i<indexNames.length;i++){
            const indexName = indexNames[i];
            for(let j=neighborhoodIdIndex;j<neighborhoodIds.length;j++){
                const neighborhoodId = neighborhoodIds[j];
                const {total} = await fetchListings(indexName,neighborhoodId,page=1,hitsPerPage=1);
                const maxPage = Math.ceil(total/maxHit);
                const pageIndex = await pageIndexDB.GET() || 0;
                for(let k=pageIndex;k<maxPage;k++){
                    console.log(`${i}/${indexNames.length} ${j}/${neighborhoodIds.length} ${k}/${maxPage}`);
                    contentScripts.showDataOnConsoleDynamic(`${i}/${indexNames.length} ${j}/${neighborhoodIds.length} ${k}/${maxPage}`);
                    const {listings} = await fetchListings(indexName,neighborhoodId,page=k,hitsPerPage=maxHit);
                    // console.log(listings);
                    // return;
                    // console.log(listings);
                    // return;
                    await saveListings(listings);
                    await pageIndexDB.SET(k+1);
                    // await slugIndexDB.SET(i+1);
                }
                await pageIndexDB.SET(0);
                await neighborhoodIdIndexDB.SET(j+1);
            }
            await neighborhoodIdIndexDB.SET(0);
            await indexNameIndexDB.SET(i+1);
        }
        console.log('done')
    }
    const saveListings = async(listings)=>{
        // upload listings to localhost
        const resultJson = await fetch('http://localhost:3131/addDubizzle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({listings})
        });
        const result = await resultJson.json();
        if(result.status === 'success'){
            return true;
        }

        throw new Error('saveListings');
    };
    await scrapListings();
}
(async ()=>{
    if(typeof window=== 'undefined'){
        console.log('background');
        
        
        chrome.runtime.onMessage.addListener(
            function(request, sender, sendResponse) {
              switch(request.action){
                case 'userLogout':
                  chrome.cookies.remove({"url": 'https://facebook.com', "name": 'c_user'}, function(cookie) {
                      sendResponse('success');
                  });
                  return true;
                break;
                case 'positionWindow':
                    console.log('positionWindow')
                    contentScripts.positionWindow().then(()=>{
                        sendResponse('success');
                    });
                    return true;
                break;
                case 'windowPosition':
                    console.log('windowPosition')
                    contentScripts.windowPosition().then((windowPosition)=>{
                        sendResponse(windowPosition);
                    })
                    return true;
                break;
              }
            }
        );
    }else{
        if(window.location.href.includes('chrome-extension')){
           
            await popupSetup();
        }else{

            await contentSetup();
        }
    }
})();
