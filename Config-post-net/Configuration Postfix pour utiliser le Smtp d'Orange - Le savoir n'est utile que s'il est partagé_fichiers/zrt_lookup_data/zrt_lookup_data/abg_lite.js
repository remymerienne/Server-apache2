(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var n=ca(this);function da(a,b){if(b)a:{var c=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}} 
da("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(h||"")+"_"+g++,h)}function c(h,e){this.g=h;ba(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",g=0;return b});function ea(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}} 
var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},q;if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var r;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;r=ia.a;break a}catch(a){}r=!1}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=q; 
function w(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}function ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b} 
da("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.s=!1;var f=this.j();try{e(f.resolve,f.reject)}catch(k){f.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(f){f(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var f=this;this.i(function(){f.l()})}this.g.push(e)};var g=n.setTimeout;c.prototype.i=function(e){g(e,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var f=0;f<e.length;++f){var k= 
e[f];e[f]=null;try{k()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(e){this.i(function(){throw e;})};b.prototype.j=function(){function e(l){return function(m){k||(k=!0,l.call(f,m))}}var f=this,k=!1;return{resolve:e(this.C),reject:e(this.l)}};b.prototype.C=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.F(e);else{a:switch(typeof e){case "object":var f=null!=e;break a;case "function":f=!0;break a;default:f=!1}f?this.v(e):this.m(e)}}; 
b.prototype.v=function(e){var f=void 0;try{f=e.then}catch(k){this.l(k);return}"function"==typeof f?this.G(f,e):this.m(e)};b.prototype.l=function(e){this.u(2,e)};b.prototype.m=function(e){this.u(1,e)};b.prototype.u=function(e,f){if(0!=this.h)throw Error("Cannot settle("+e+", "+f+"): Promise already settled in state"+this.h);this.h=e;this.i=f;2===this.h&&this.D();this.A()};b.prototype.D=function(){var e=this;g(function(){if(e.B()){var f=n.console;"undefined"!==typeof f&&f.error(e.i)}},1)};b.prototype.B= 
function(){if(this.s)return!1;var e=n.CustomEvent,f=n.Event,k=n.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof f?e=new f("unhandledrejection",{cancelable:!0}):(e=n.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};b.prototype.A=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)h.h(this.g[e]);this.g=null}};var h=new c;b.prototype.F= 
function(e){var f=this.j();e.H(f.resolve,f.reject)};b.prototype.G=function(e,f){var k=this.j();try{e.call(f,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,f){function k(p,t){return"function"==typeof p?function(u){try{l(p(u))}catch(E){m(E)}}:t}var l,m,v=new b(function(p,t){l=p;m=t});this.H(k(e,l),k(f,m));return v};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.H=function(e,f){function k(){switch(l.h){case 1:e(l.i);break;case 2:f(l.i);break;default:throw Error("Unexpected state: "+ 
l.h);}}var l=this;null==this.g?h.h(k):this.g.push(k);this.s=!0};b.resolve=d;b.reject=function(e){return new b(function(f,k){k(e)})};b.race=function(e){return new b(function(f,k){for(var l=ea(e),m=l.next();!m.done;m=l.next())d(m.value).H(f,k)})};b.all=function(e){var f=ea(e),k=f.next();return k.done?d([]):new b(function(l,m){function v(u){return function(E){p[u]=E;t--;0==t&&l(p)}}var p=[],t=0;do p.push(void 0),t++,d(k.value).H(v(p.length-1),m),k=f.next();while(!k.done)})};return b});var x=this||self; 
function la(a){return a};var ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},na=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in d&&b.call(void 0,d[g],g,a)};function oa(a){oa[" "](a);return a}oa[" "]=function(){};var pa={},y=null;var sa="undefined"!==typeof Uint8Array;var z="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ta(a,b){Object.isFrozen(a)||(z?a[z]|=b:void 0!==a.I?a.I|=b:Object.defineProperties(a,{I:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}function ua(a){var b;z?b=a[z]:b=a.I;return null==b?0:b}function A(a){ta(a,1);return a};function va(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var wa=Object.freeze(A([])),xa="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function ya(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};function za(a){var b=Aa;b=void 0===b?Ba:b;return Ca(a,b)}function Da(a,b){if(null!=a){if(Array.isArray(a))a=Ca(a,b);else if(va(a)){var c={},d;for(d in a)c[d]=Da(a[d],b);a=c}else a=b(a);return a}}function Ca(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Da(c[d],b);Array.isArray(a)&&ua(a)&1&&A(c);return c} 
function Aa(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":if(a&&!Array.isArray(a)&&sa&&null!=a&&a instanceof Uint8Array){var b;void 0===b&&(b=0);if(!y){y={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var h=c.concat(d[g].split(""));pa[g]=h;for(var e=0;e<h.length;e++){var f=h[e];void 0===y[f]&&(y[f]=e)}}}b=pa[b];c=Array(Math.floor(a.length/ 
3));d=b[64]||"";for(g=h=0;h<a.length-2;h+=3){var k=a[h],l=a[h+1];f=a[h+2];e=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|f>>6];f=b[f&63];c[g++]=e+k+l+f}e=0;f=d;switch(a.length-h){case 2:e=a[h+1],f=b[(e&15)<<2]||d;case 1:a=a[h],c[g]=b[a>>2]+b[(a&3)<<4|e>>4]+f+d}a=c.join("")}}return Array.isArray(a)?za(a):a}function Ba(a){return sa&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a};function C(a,b,c){return-1===b?null:b>=a.i?a.g?a.g[b]:void 0:(void 0===c?0:c)&&a.g&&(c=a.g[b],null!=c)?c:a.o[b+a.h]}function D(a,b){a=C(a,b);a=null==a?a:!!a;return null==a?!1:a}function Ea(a){var b=Fa;a.j||(a.j={});var c=a.j[1];if(c)return c;var d=C(a,1,!1);if(null==d)return c;b=new b(d);c=a.o;if(Array.isArray(c)&&ua(c)&2){c=b.o;if(!Array.isArray(c))throw Error("cannot mark non-array as immutable");ta(c,2)}return a.j[1]=b}function Ga(a,b){a=C(a,b);return null==a?0:a} 
function Ha(a,b){a=C(a,b);return null==a?"":a};function Ia(a,b,c){a||(a=Ja);Ja=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.h=(d?0:-1)-(this.constructor.g||0);this.j=void 0;this.o=a;a:{d=this.o.length;a=d-1;if(d&&(d=this.o[a],va(d))){this.i=a-this.h;this.g=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.h,(d=this.o[a])?Array.isArray(d)&&A(d):this.o[a]=wa;else{d=this.g||(this.g=this.o[this.i+this.h]={});var g=d[a];g?Array.isArray(g)&&A(g): 
d[a]=wa}}Ia.prototype.toJSON=function(){return za(this.o)};var Ja;function G(){Ia.apply(this,arguments)}w(G,Ia);if(xa){var Ka={};Object.defineProperties(G,(Ka[Symbol.hasInstance]=ya(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),Ka))};function H(){G.apply(this,arguments)}w(H,G);if(xa){var La={};Object.defineProperties(H,(La[Symbol.hasInstance]=ya(Object[Symbol.hasInstance]),La))};function Fa(a){H.call(this,a,-1,Ma)}w(Fa,H);var Ma=[28];function Na(a){H.call(this,a,-1,Oa)}w(Na,H);var Oa=[21];var I;function K(a,b){this.g=b===Pa?a:""}K.prototype.toString=function(){return this.g+""};var Pa={};function Qa(a){if(void 0===I){var b=null;var c=x.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:la,createScript:la,createScriptURL:la})}catch(d){x.console&&x.console.error(d.message)}I=b}else I=b}a=(b=I)?b.createScriptURL(a):a;return new K(a,Pa)};/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function Ra(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var Sa={passive:!0},Ta=Ra(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});x.addEventListener("test",null,b)}catch(c){}return a});function Ua(a){return a?a.passive&&Ta()?a:a.capture||!1:!1}function L(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Ua(d))};function M(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function Va(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Wa(b,a)[0]||null);return a||null} 
function Wa(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var g=a.getElementsByClassName(b);return g}g=a.getElementsByTagName("*");if(b){var h={};for(c=d=0;a=g[c];c++){var e=a.className,f;if(f="function"==typeof e.split)f=0<=ma(e.split(/\s+/),b);f&&(h[d++]=a)}h.length=d;return h}return g}function Xa(a){a&&a.parentNode&&a.parentNode.removeChild(a)};var Ya=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Za(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}function N(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function $a(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function ab(a,b,c,d){bb(a,b,void 0===c?null:c,void 0===d?!1:d)}function bb(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);var g=$a("IMG",a.document);if(c||d){var h=function(e){c&&c(e);if(d){e=a.google_image_requests;var f=ma(e,g);0<=f&&Array.prototype.splice.call(e,f,1)}g.removeEventListener&&g.removeEventListener("load",h,Ua());g.removeEventListener&&g.removeEventListener("error",h,Ua())};L(g,"load",h);L(g,"error",h)}g.src=b;a.google_image_requests.push(g)};var cb=0;function db(a){return(a=eb(a))&&a.getAttribute("data-jc-version")||"unknown"}function eb(a){var b=document.currentScript;return(b=void 0===b?null:b)&&b.getAttribute("data-jc")===String(a)?b:document.querySelector('[data-jc="'+a+'"]')} 
function fb(){var a=void 0===a?.01:a;if(!(Math.random()>a)){var b=eb(60);a="https://"+(b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com")+"/pagead/gen_204?id=jca&jc=60&version="+db(60)+"&sample="+a;b=window;var c=void 0===c?!1:c;var d;if(d=b.navigator)d=b.navigator.userAgent,d=/Chrome/.test(d)&&!/Edge/.test(d)?!0:!1;d&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):ab(b,a,void 0,c)}};var gb=document,O=window;function hb(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function mb(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:hb(a).match(/\S+/g)||[],b=0<=ma(a,b));return b}function P(a,b){if(a.classList)a.classList.add(b);else if(!mb(a,b)){var c=hb(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};function nb(a){this.g=(this.serializedAttributionData=a)?new Na(a):null;this.isMutableImpression=null!=C(this.g,1)&&!!D(Ea(this.g),33);this.V=!!D(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=C(this.g,1);this.O=!!D(this.g,4);this.S=!!D(this.g,6);this.N=!!D(this.g,13);this.creativeIndexSuffix=1<Ga(this.g,8)?Ga(this.g,7).toString():"";this.W=!!D(this.g,17);this.U=!!D(this.g,18);this.M=!!D(this.g,14);this.enableMultiplexThirdPartyAttribution=!!D(this.g,32);this.D=!!D(this.g,15);this.X=!!D(this.g, 
31);this.T=1==D(this.g,9);this.openAttributionInline=1==D(this.g,10);this.isMobileDevice=!!D(this.g,12);this.v=null;this.R=(a=gb.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.G=""!==this.creativeIndexSuffix)&&void 0===O.goog_multislot_cache&&(O.goog_multislot_cache={});if(this.G&&!this.R){if(a=O.goog_multislot_cache.hd,void 0===a){a=!1;var b=gb.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect(); 
150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.F=a;this.A=M("abgcp"+this.creativeIndexSuffix);this.u=M("abgc"+this.creativeIndexSuffix);this.h=M("abgs"+this.creativeIndexSuffix);M("abgl"+this.creativeIndexSuffix);this.s=M("abgb"+this.creativeIndexSuffix);this.C=M("abgac"+this.creativeIndexSuffix);M("mute_panel"+this.creativeIndexSuffix);this.B=Va("goog_delegate_attribution"+this.creativeIndexSuffix); 
this.isDelegateAttributionActive=!!this.B&&!!this.M&&!Va("goog_delegate_disabled")&&!this.D;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(var d=0;d<c.length;d++){var g=c.item(d);if("undefined"!=typeof g.tagName&&g.tagName.toUpperCase()==b){a=g;break a}}}else a=null;this.l=a;this.j=this.isDelegateAttributionActive?this.B:M("cbb"+this.creativeIndexSuffix);this.P=this.F?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.j&&mb(this.j,"goog_dismissable_menu");this.m=null;this.J= 
0;this.i=this.isDelegateAttributionActive?this.B:this.S&&this.A?this.A:this.u;this.L=!!D(this.g,19);this.adbadgeEnabled=!!D(this.g,24);this.enableNativeJakeUi=!!D(this.g,27)};function ob(a,b){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=b};function Q(a,b){a&&Za(b,function(c,d){a.style[d]=c})};function pb(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var qb=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");function rb(a,b){this.g=a;this.h=b}function sb(a,b){this.url=a;this.K=!!b;this.depth=null};function tb(){this.i="&";this.h={};this.j=0;this.g=[]}function R(a,b){var c={};c[a]=b;return[c]}function ub(a,b,c,d,g){var h=[];Za(a,function(e,f){(e=vb(e,b,c,d,g))&&h.push(f+"="+e)});return h.join(b)} 
function vb(a,b,c,d,g){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var h=[],e=0;e<a.length;e++)h.push(vb(a[e],b,c,d+1,g));return h.join(c[d])}}else if("object"==typeof a)return g=g||0,2>g?encodeURIComponent(ub(a,b,c,d,g+1)):"...";return encodeURIComponent(String(a))} 
function wb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=xb(a)-c.length;if(0>d)return"";a.g.sort(function(m,v){return m-v});c=null;for(var g="",h=0;h<a.g.length;h++)for(var e=a.g[h],f=a.h[e],k=0;k<f.length;k++){if(!d){c=null==c?e:c;break}var l=ub(f[k],a.i,",$");if(l){l=g+l;if(d>=l.length){d-=l.length;b+=l;g=a.i;break}c=null==c?e:c}}a="";null!=c&&(a=g+"trn="+c);return b+a}function xb(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function yb(){var a=void 0===a?O:a;this.h="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()}function zb(){var a=Ab,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}function Bb(a,b,c,d,g){if((d?a.g:Math.random())<(g||.01))try{if(c instanceof tb)var h=c;else h=new tb,Za(c,function(f,k){var l=h,m=l.j++;f=R(k,f);l.g.push(m);l.h[m]=f});var e=wb(h,a.h,"/pagead/gen_204?id="+b+"&");e&&ab(x,e)}catch(f){}};var S=null;function Cb(){var a=void 0===a?x:a;return(a=a.performance)&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Db(){var a=void 0===a?x:a;return(a=a.performance)&&a.now?a.now():null};function Eb(a,b){var c=Db()||Cb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0};var T=x.performance,Fb=!!(T&&T.mark&&T.measure&&T.clearMarks),U=Ra(function(){var a;if(a=Fb){var b;if(null===S){S="";try{a="";try{a=x.top.location.hash}catch(c){a=x.location.hash}a&&(S=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=S;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function Gb(){var a=window;this.h=[];this.i=a||x;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=U()||(null!=b?b:1>Math.random())}function Hb(a){a&&T&&U()&&(T.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),T.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}Gb.prototype.start=function(a,b){if(!this.g)return null;a=new Eb(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";T&&U()&&T.mark(b);return a}; 
Gb.prototype.end=function(a){if(this.g&&"number"===typeof a.value){a.duration=(Db()||Cb())-a.value;var b="goog_"+a.label+"_"+a.uniqueId+"_end";T&&U()&&T.mark(b);!this.g||2048<this.h.length||this.h.push(a)}};function Ib(){var a=Jb;this.i=Ab;this.h=null;this.m=this.l;this.g=void 0===a?null:a;this.j=!1}Ib.prototype.pinger=function(){return this.i};function Kb(a,b){var c=V;try{if(c.g&&c.g.g){var d=c.g.start(a.toString(),3);var g=b();c.g.end(d)}else g=b()}catch(f){b=!0;try{Hb(d),b=c.m(a,new pb(f,{message:Lb(f)}),void 0,void 0)}catch(k){c.l(217,k)}if(b){var h,e;null==(h=window.console)||null==(e=h.error)||e.call(h,f)}else throw f;}return g} 
function Mb(a,b){return function(){var c=ka.apply(0,arguments);return Kb(a,function(){return b.apply(void 0,c)})}} 
Ib.prototype.l=function(a,b,c,d,g){g=g||"jserror";try{var h=new tb;h.g.push(1);h.h[1]=R("context",a);b.error&&b.meta&&b.id||(b=new pb(b,{message:Lb(b)}));if(b.msg){var e=b.msg.substring(0,512);h.g.push(2);h.h[2]=R("msg",e)}var f=b.meta||{};if(this.h)try{this.h(f)}catch(J){}if(d)try{d(f)}catch(J){}b=[f];h.g.push(3);h.h[3]=b;d=x;b=[];e=null;do{var k=d;try{var l;if(l=!!k&&null!=k.location.href)b:{try{oa(k.foo);l=!0;break b}catch(J){}l=!1}var m=l}catch(J){m=!1}if(m){var v=k.location.href;e=k.document&& 
k.document.referrer||null}else v=e,e=null;b.push(new sb(v||""));try{d=k.parent}catch(J){d=null}}while(d&&k!=d);v=0;for(var p=b.length-1;v<=p;++v)b[v].depth=p-v;k=x;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==b.length-1)for(p=1;p<b.length;++p){var t=b[p];t.url||(t.url=k.location.ancestorOrigins[p-1]||"",t.K=!0)}var u=new sb(x.location.href,!1);k=null;var E=b.length-1;for(t=E;0<=t;--t){var B=b[t];!k&&qb.test(B.url)&&(k=B);if(B.url&&!B.K){u=B;break}}B=null;var Ub=b.length&& 
b[E].url;0!=u.depth&&Ub&&(B=b[E]);var F=new rb(u,B);if(F.h){var Vb=F.h.url||"";h.g.push(4);h.h[4]=R("top",Vb)}var qa={url:F.g.url||""};if(F.g.url){var ra=F.g.url.match(Ya),ib=ra[1],jb=ra[3],kb=ra[4];u="";ib&&(u+=ib+":");jb&&(u+="//",u+=jb,kb&&(u+=":"+kb));var lb=u}else lb="";qa=[qa,{url:lb}];h.g.push(5);h.h[5]=qa;Bb(this.i,g,h,this.j,c)}catch(J){try{Bb(this.i,g,{context:"ecmserr",rctx:a,msg:Lb(J),url:F&&F.g.url},this.j,c)}catch(fc){}}return!0}; 
function Lb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var Ab,V,Jb=new Gb;function Nb(){if(!window.google_measure_js_timing){var a=Jb;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(U()&&na(a.h,Hb),a.h.length=0)}}(function(a){Ab=null!=a?a:new yb;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());zb();V=new Ib;V.h=function(b){var c=cb;0!==c&&(b.jc=String(c),b.shv=db(c))};V.j=!0;"complete"==window.document.readyState?Nb():Jb.g&&L(window,"load",function(){Nb()})})();function W(a,b){return Mb(a,b)};function Ob(a,b){var c=this;this.g=a;this.h=b;this.g.W||(this.j=!1,this.i=null,!this.g.F||this.g.adbadgeEnabled||this.g.P?Pb(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(Q(this.g.s,a),Q(this.g.h,a),Q(this.g.A,b),Q(this.g.u,b)):Q(this.g.u,a)),Qb(this),this.g.enableNativeJakeUi&&P(this.g.C,"abgnac"),this.g.isDelegateAttributionActive?(P(document.body,"goog_delegate_active"),P(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.j&&Xa(this.g.j),setTimeout(function(){P(document.body, 
"jar")},this.g.N?750:100)),this.g.D&&P(document.body,"goog_delegate_disabled"),this.g.L&&O.addEventListener("load",function(){return c.h()}))} 
function Qb(a){if(a.g.V)L(a.g.i,"click",W(365,function(c){var d=O.goog_interstitial_display;d&&(d(c),c&&(c.stopPropagation(),c.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)L(a.g.i,"click",function(){return a.h()});else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.j&&(L(a.g.j,"click",function(){return a.h()}),L(a.g.j,"keydown",function(c){"Enter"!==c.code&&"Space"!==c.code||a.h()})),a.g.X&&a.g.h&&L(a.g.h,"click",function(){return a.h()})),a.g.O)Rb(a);else{L(a.g.i, 
"mouseover",W(367,function(){return Rb(a)}));L(a.g.i,"mouseout",W(369,function(){return Sb(a,500)}));L(a.g.i,"touchstart",W(368,function(){return Rb(a)}),Sa);var b=W(370,function(){return Sb(a,4E3)});L(a.g.i,"mouseup",b);L(a.g.i,"touchend",b);L(a.g.i,"touchcancel",b);a.g.l&&L(a.g.l,"click",W(371,function(c){return a.preventDefault(c)}))}} 
function Pb(a){if(a.g.l&&a.g.U){var b=Ea(a.g.g);b&&null!=C(b,5)&&null!=C(b,6)&&(a.i=new ob(Ha(b,5),Ha(b,19)));L(a.g.l,"click",W(452,function(){if(!a.j&&(a.j=!0,a.i)){var c=a.i,d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);ab(window,d)}}))}}function Tb(a){var b=a.g.C;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(function(){P(b,"abgacfo")})} 
function Rb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.J=Date.now(),a.g.s&&a.g.h&&(a.g.s.style.display="none",a.g.h.style.display="block"))}function Sb(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(function(){return Wb(a)},b)}function Wb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.s&&a.g.h&&(a.g.s.style.display="block",a.g.h.style.display="none")} 
Ob.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.J)N(a);else if(this.g.openAttributionInline){var b=this.g.l.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&N(a):window.openAttribution&&(window.openAttribution(b),N(a))}else this.g.T&&(b=this.g.l.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&N(a):window.openSystemBrowser&&(window.openSystemBrowser(b),N(a)))};function Xb(a){var b=Yb,c=this;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;Va("goog_delegate_deferred")?void 0!==O.goog_delegate_deferred_token?Zb(this):(a=function(){Zb(c)},O.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Zb(this)}function Zb(a){if(!a.g&&(a.g=!0,O.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new nb(a);new b(a)}};function $b(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function ac(){var a=new $b;return{promise:a.promise,resolve:a.resolve}};function bc(a,b){b=void 0===b?function(){}:b;a.google_llp||(a.google_llp={});a=a.google_llp;var c=a[5];if(c)return c;c=ac();a[5]=c;b();return c} 
function cc(a,b){return bc(a,function(){var c=a.document,d=$a("SCRIPT",c);d.src=b instanceof K&&b.constructor===K?b.g:"type_error:TrustedResourceUrl";var g,h,e=null==(h=(g=(d.ownerDocument&&d.ownerDocument.defaultView||window).document).querySelector)?void 0:h.call(g,"script[nonce]");(g=e?e.nonce||e.getAttribute("nonce")||"":"")&&d.setAttribute("nonce",g);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function Yb(a){var b=this;this.g=a;this.h=new Ob(this.g,W(359,function(){return dc(b)}))}function dc(a){a.g.v?a.g.v.expandAttributionCard():(Kb(373,function(){Wb(a.h);Tb(a.h)}),cc(window,Qa("https://pagead2.googlesyndication.com/pagead/js/"+(Ha(a.g.g,33)+"/abg_survey.js"))).then(function(b){b.createAttributionCard(a.g);a.g.v=b;b.expandAttributionCard()}),fb())};cb=60;function ec(a){var b=[a];b=void 0===b?[]:b;x.google_logging_queue||(x.google_logging_queue=[]);x.google_logging_queue.push([11,b]);new Xb(a)}var X=["buildAttribution"],Y=x;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===ec?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=ec;}).call(this);
