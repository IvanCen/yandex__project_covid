!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=94)}([function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r(50))},function(t,n,r){var e=r(0),o=r(12),i=r(34),c=r(63),a=e.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(0),o=r(18).f,i=r(10),c=r(16),a=r(23),u=r(55),f=r(37);t.exports=function(t,n){var r,s,l,p,v,d=t.target,h=t.global,y=t.stat;if(r=h?e:y?e[d]||a(d,{}):(e[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(h?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,s,p,t)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(3);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,r){var e=r(17),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(2);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(9),o=r(11),i=r(19);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(9),o=r(29),i=r(7),c=r(22),a=Object.defineProperty;n.f=e?a:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(31),o=r(52);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:e?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(57),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,r){var e=r(20),o=r(21);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(0),o=r(12),i=r(10),c=r(6),a=r(23),u=r(32),f=r(33),s=f.get,l=f.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,n,r,o){var u=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof r&&("string"!=typeof n||c(r,"name")||i(r,"name",n),l(r).source=p.join("string"==typeof n?n:"")),t!==e?(u?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=r:i(t,n,r)):f?t[n]=r:a(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u.call(this)}))},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(9),o=r(51),i=r(19),c=r(15),a=r(22),u=r(6),f=r(29),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=a(n,!0),f)try{return s(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(5),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,r){var e=r(3);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(0),o=r(10);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},function(t,n,r){var e=r(14);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(21);t.exports=function(t){return Object(e(t))}},function(t,n,r){var e=r(5);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(2),o=r(1),i=r(28),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,r){var e,o,i=r(0),c=r(40),a=i.process,u=a&&a.versions,f=u&&u.v8;f?o=(e=f.split("."))[0]+e[1]:c&&(!(e=c.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,n,r){var e=r(9),o=r(2),i=r(30);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(0),o=r(3),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,r){var e=r(12);t.exports=e("native-function-to-string",Function.toString)},function(t,n,r){var e,o,i,c=r(53),a=r(0),u=r(3),f=r(10),s=r(6),l=r(54),p=r(35),v=a.WeakMap;if(c){var d=new v,h=d.get,y=d.has,g=d.set;e=function(t,n){return g.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var m=l("state");p[m]=!0,e=function(t,n){return f(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!u(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},function(t,n){t.exports={}},function(t,n,r){var e=r(17),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},function(t,n,r){var e=r(2),o=/#|\.prototype\./,i=function(t,n){var r=a[c(t)];return r==f||r!=u&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,r){var e=r(24),o=r(20),i=r(25),c=r(8),a=r(39),u=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,h,y){for(var g,m,x=i(v),b=o(x),w=e(d,h,3),S=c(b.length),_=0,j=y||a,T=n?j(v,S):r?j(v,0):void 0;S>_;_++)if((p||_ in b)&&(m=w(g=b[_],_,x),t))if(n)T[_]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return _;case 2:u.call(T,g)}else if(s)return!1;return l?-1:f||s?s:T}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,r){var e=r(3),o=r(26),i=r(1)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},function(t,n,r){var e=r(13);t.exports=e("navigator","userAgent")||""},function(t,n,r){"use strict";var e=r(2);t.exports=function(t,n){var r=[][t];return!r||!e((function(){r.call(null,n||function(){throw 1},1)}))}},function(t,n,r){"use strict";var e=r(22),o=r(11),i=r(19);t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,n,r){var e=r(5),o=r(1)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){t.exports={}},function(t,n,r){var e,o,i,c=r(0),a=r(2),u=r(5),f=r(24),s=r(81),l=r(30),p=r(46),v=c.location,d=c.setImmediate,h=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,x=0,b={},w=function(t){if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},S=function(t){return function(){w(t)}},_=function(t){w(t.data)},j=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return b[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},e(x),x},h=function(t){delete b[t]},"process"==u(y)?e=function(t){y.nextTick(S(t))}:m&&m.now?e=function(t){m.now(S(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=_,e=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(j)?e="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),w(t)}}:function(t){setTimeout(S(t),0)}:(e=j,c.addEventListener("message",_,!1))),t.exports={set:d,clear:h}},function(t,n,r){var e=r(40);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(e)},function(t,n,r){"use strict";var e=r(14),o=function(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)};t.exports.f=function(t){return new o(t)}},function(t,n,r){"use strict";var e=r(38).forEach,o=r(41);t.exports=o("forEach")?function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,r){"use strict";var e=r(4),o=r(38).filter;e({target:"Array",proto:!0,forced:!r(27)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},function(t,n,r){var e=r(0),o=r(23),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,r){var e=r(0),o=r(32),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,r){var e=r(12),o=r(34),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,r){var e=r(6),o=r(56),i=r(18),c=r(11);t.exports=function(t,n){for(var r=o(n),a=c.f,u=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||a(t,s,u(n,s))}}},function(t,n,r){var e=r(13),o=r(58),i=r(62),c=r(7);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){t.exports=r(0)},function(t,n,r){var e=r(59),o=r(61).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(6),o=r(15),i=r(60).indexOf,c=r(35);t.exports=function(t,n){var r,a=o(t),u=0,f=[];for(r in a)!e(c,r)&&e(a,r)&&f.push(r);for(;n.length>u;)e(a,r=n[u++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(15),o=r(8),i=r(36),c=function(t){return function(n,r,c){var a,u=e(n),f=o(u.length),s=i(c,f);if(t&&r!=r){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(2);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,n,r){"use strict";var e=r(4),o=r(65).left;e({target:"Array",proto:!0,forced:r(41)("reduce")},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(14),o=r(25),i=r(20),c=r(8),a=function(t){return function(n,r,a,u){e(r);var f=o(n),s=i(f),l=c(f.length),p=t?l-1:0,v=t?-1:1;if(a<2)for(;;){if(p in s){u=s[p],p+=v;break}if(p+=v,t?p<0:l<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:l>p;p+=v)p in s&&(u=r(u,s[p],p,f));return u}};t.exports={left:a(!1),right:a(!0)}},function(t,n,r){"use strict";var e=r(4),o=r(3),i=r(26),c=r(36),a=r(8),u=r(15),f=r(42),s=r(27),l=r(1)("species"),p=[].slice,v=Math.max;e({target:"Array",proto:!0,forced:!s("slice")},{slice:function(t,n){var r,e,s,d=u(this),h=a(d.length),y=c(t,h),g=c(void 0===n?h:n,h);if(i(d)&&("function"!=typeof(r=d.constructor)||r!==Array&&!i(r.prototype)?o(r)&&null===(r=r[l])&&(r=void 0):r=void 0,r===Array||void 0===r))return p.call(d,y,g);for(e=new(void 0===r?Array:r)(v(g-y,0)),s=0;y<g;y++,s++)y in d&&f(e,s,d[y]);return e.length=s,e}})},function(t,n,r){var e=r(16),o=r(68),i=Object.prototype;o!==i.toString&&e(i,"toString",o,{unsafe:!0})},function(t,n,r){"use strict";var e=r(43),o={};o[r(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+e(this)+"]"}:o.toString},function(t,n,r){"use strict";var e,o,i,c,a=r(4),u=r(31),f=r(0),s=r(13),l=r(70),p=r(16),v=r(71),d=r(12),h=r(72),y=r(73),g=r(3),m=r(14),x=r(74),b=r(5),w=r(75),S=r(79),_=r(80),j=r(45).set,T=r(82),E=r(83),O=r(84),P=r(47),L=r(85),M=r(33),C=r(37),A=r(1),k=r(28),F=A("species"),I="Promise",N=M.get,R=M.set,D=M.getterFor(I),q=l,G=f.TypeError,V=f.document,H=f.process,z=d("inspectSource"),W=s("fetch"),B=P.f,K=B,U="process"==b(H),Y=!!(V&&V.createEvent&&f.dispatchEvent),J=C(I,(function(){var t=z(q)!==String(q);if(66===k)return!0;if(!t&&!U&&"function"!=typeof PromiseRejectionEvent)return!0;if(u&&!q.prototype.finally)return!0;if(k>=51&&/native code/.test(q))return!1;var n=q.resolve(1),r=function(t){t((function(){}),(function(){}))};return(n.constructor={})[F]=r,!(n.then((function(){}))instanceof r)})),Q=J||!S((function(t){q.all(t).catch((function(){}))})),X=function(t){var n;return!(!g(t)||"function"!=typeof(n=t.then))&&n},Z=function(t,n,r){if(!n.notified){n.notified=!0;var e=n.reactions;T((function(){for(var o=n.value,i=1==n.state,c=0;e.length>c;){var a,u,f,s=e[c++],l=i?s.ok:s.fail,p=s.resolve,v=s.reject,d=s.domain;try{l?(i||(2===n.rejection&&rt(t,n),n.rejection=1),!0===l?a=o:(d&&d.enter(),a=l(o),d&&(d.exit(),f=!0)),a===s.promise?v(G("Promise-chain cycle")):(u=X(a))?u.call(a,p,v):p(a)):v(o)}catch(t){d&&!f&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,r&&!n.rejection&&tt(t,n)}))}},$=function(t,n,r){var e,o;Y?((e=V.createEvent("Event")).promise=n,e.reason=r,e.initEvent(t,!1,!0),f.dispatchEvent(e)):e={promise:n,reason:r},(o=f["on"+t])?o(e):"unhandledrejection"===t&&O("Unhandled promise rejection",r)},tt=function(t,n){j.call(f,(function(){var r,e=n.value;if(nt(n)&&(r=L((function(){U?H.emit("unhandledRejection",e,t):$("unhandledrejection",t,e)})),n.rejection=U||nt(n)?2:1,r.error))throw r.value}))},nt=function(t){return 1!==t.rejection&&!t.parent},rt=function(t,n){j.call(f,(function(){U?H.emit("rejectionHandled",t):$("rejectionhandled",t,n.value)}))},et=function(t,n,r,e){return function(o){t(n,r,o,e)}},ot=function(t,n,r,e){n.done||(n.done=!0,e&&(n=e),n.value=r,n.state=2,Z(t,n,!0))},it=function(t,n,r,e){if(!n.done){n.done=!0,e&&(n=e);try{if(t===r)throw G("Promise can't be resolved itself");var o=X(r);o?T((function(){var e={done:!1};try{o.call(r,et(it,t,e,n),et(ot,t,e,n))}catch(r){ot(t,e,r,n)}})):(n.value=r,n.state=1,Z(t,n,!1))}catch(r){ot(t,{done:!1},r,n)}}};J&&(q=function(t){x(this,q,I),m(t),e.call(this);var n=N(this);try{t(et(it,this,n),et(ot,this,n))}catch(t){ot(this,n,t)}},(e=function(t){R(this,{type:I,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(q.prototype,{then:function(t,n){var r=D(this),e=B(_(this,q));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=U?H.domain:void 0,r.parent=!0,r.reactions.push(e),0!=r.state&&Z(this,r,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e,n=N(t);this.promise=t,this.resolve=et(it,t,n),this.reject=et(ot,t,n)},P.f=B=function(t){return t===q||t===i?new o(t):K(t)},u||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var r=this;return new q((function(t,n){c.call(r,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof W&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return E(q,W.apply(f,arguments))}}))),a({global:!0,wrap:!0,forced:J},{Promise:q}),h(q,I,!1,!0),y(I),i=s(I),a({target:I,stat:!0,forced:J},{reject:function(t){var n=B(this);return n.reject.call(void 0,t),n.promise}}),a({target:I,stat:!0,forced:u||J},{resolve:function(t){return E(u&&this===i?q:this,t)}}),a({target:I,stat:!0,forced:Q},{all:function(t){var n=this,r=B(n),e=r.resolve,o=r.reject,i=L((function(){var r=m(n.resolve),i=[],c=0,a=1;w(t,(function(t){var u=c++,f=!1;i.push(void 0),a++,r.call(n,t).then((function(t){f||(f=!0,i[u]=t,--a||e(i))}),o)})),--a||e(i)}));return i.error&&o(i.value),r.promise},race:function(t){var n=this,r=B(n),e=r.reject,o=L((function(){var o=m(n.resolve);w(t,(function(t){o.call(n,t).then(r.resolve,e)}))}));return o.error&&e(o.value),r.promise}})},function(t,n,r){var e=r(0);t.exports=e.Promise},function(t,n,r){var e=r(16);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},function(t,n,r){var e=r(11).f,o=r(6),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){"use strict";var e=r(13),o=r(11),i=r(1),c=r(9),a=i("species");t.exports=function(t){var n=e(t),r=o.f;c&&n&&!n[a]&&r(n,a,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r){if(!(t instanceof n))throw TypeError("Incorrect "+(r?r+" ":"")+"invocation");return t}},function(t,n,r){var e=r(7),o=r(76),i=r(8),c=r(24),a=r(77),u=r(78),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,r,s,l){var p,v,d,h,y,g,m,x=c(n,r,s?2:1);if(l)p=t;else{if("function"!=typeof(v=a(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((y=s?x(e(m=t[d])[0],m[1]):x(t[d]))&&y instanceof f)return y;return new f(!1)}p=v.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(y=u(p,x,m.value,s))&&y&&y instanceof f)return y;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,r){var e=r(1),o=r(44),i=e("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,r){var e=r(43),o=r(44),i=r(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(7);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[e]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i={};i[e]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,n,r){var e=r(7),o=r(14),i=r(1)("species");t.exports=function(t,n){var r,c=e(t).constructor;return void 0===c||null==(r=e(c)[i])?n:o(r)}},function(t,n,r){var e=r(13);t.exports=e("document","documentElement")},function(t,n,r){var e,o,i,c,a,u,f,s,l=r(0),p=r(18).f,v=r(5),d=r(45).set,h=r(46),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,x="process"==v(g),b=p(l,"queueMicrotask"),w=b&&b.value;w||(e=function(){var t,n;for(x&&(t=g.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},x?c=function(){g.nextTick(e)}:y&&!h?(a=!0,u=document.createTextNode(""),new y(e).observe(u,{characterData:!0}),c=function(){u.data=a=!a}):m&&m.resolve?(f=m.resolve(void 0),s=f.then,c=function(){s.call(f,e)}):c=function(){d.call(l,e)}),t.exports=w||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,r){var e=r(7),o=r(3),i=r(47);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(0);t.exports=function(t,n){var r=e.console;r&&r.error&&(1===arguments.length?r.error(t):r.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,r){"use strict";var e=r(4),o=r(2),i=r(26),c=r(3),a=r(25),u=r(8),f=r(42),s=r(39),l=r(27),p=r(1),v=r(28),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};e({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var n,r,e,o,i,c=a(this),l=s(c,0),p=0;for(n=-1,e=arguments.length;n<e;n++)if(i=-1===n?c:arguments[n],g(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,p++)r in i&&f(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,r){"use strict";var e=r(4),o=r(17),i=r(88),c=r(89),a=r(2),u=1..toFixed,f=Math.floor,s=function(t,n,r){return 0===n?r:n%2==1?s(t,n-1,r*t):s(t*t,n/2,r)};e({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){u.call({})}))},{toFixed:function(t){var n,r,e,a,u=i(this),l=o(t),p=[0,0,0,0,0,0],v="",d="0",h=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*p[r],p[r]=e%1e7,e=f(e/1e7)},y=function(t){for(var n=6,r=0;--n>=0;)r+=p[n],p[n]=f(r/t),r=r%t*1e7},g=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==p[t]){var r=String(p[t]);n=""===n?r:n+c.call("0",7-r.length)+r}return n};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(r=(n=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n}(u*s(2,69,1))-69)<0?u*s(2,-n,1):u/s(2,n,1),r*=4503599627370496,(n=52-n)>0){for(h(0,r),e=l;e>=7;)h(1e7,0),e-=7;for(h(s(10,e,1),0),e=n-1;e>=23;)y(1<<23),e-=23;y(1<<e),h(1,1),y(2),d=g()}else h(0,r),h(1<<-n,0),d=g()+c.call("0",l);return d=l>0?v+((a=d.length)<=l?"0."+c.call("0",l-a)+d:d.slice(0,a-l)+"."+d.slice(a-l)):v+d}})},function(t,n,r){var e=r(5);t.exports=function(t){if("number"!=typeof t&&"Number"!=e(t))throw TypeError("Incorrect invocation");return+t}},function(t,n,r){"use strict";var e=r(17),o=r(21);t.exports="".repeat||function(t){var n=String(o(this)),r="",i=e(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(n+=n))1&i&&(r+=n);return r}},function(t,n,r){"use strict";var e=r(4),o=r(48);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,r){var e=r(0),o=r(92),i=r(48),c=r(10);for(var a in o){var u=e[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,r){},function(t,n,r){"use strict";r.r(n);r(49),r(64),r(66),r(67),r(69);function e(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,r,o;return n=t,(r=[{key:"dataCovidApi",value:function(){fetch("https://covid19.mathdro.id/api/confirmed").then((function(t){return t.json()})).then((function(t){return t})).then(T).catch((function(t){return console.log(t)}))}}])&&e(n.prototype,r),o&&e(n,o),t}();function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var c=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.paramCovid=n}var n,r,e;return n=t,(r=[{key:"setDataCovidConfirmed",value:function(t){this.paramCovid.totalNumber.textContent=t,this.paramCovid.headerTotal.textContent=t}}])&&i(n.prototype,r),e&&i(n,e),t}();r(86),r(87);function a(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var u=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=n}var n,r,e;return n=t,(r=[{key:"createTopItem",value:function(t,n,r,e){this.container.insertAdjacentHTML("beforeend",'\n            <tr class="table__row">\n          <td class="table__data">'.concat(t,'</td>\n          <td class="table__data">').concat(n,'</td>\n          <td class="table__data">').concat(r,'</td>\n          <td class="table__data">').concat(e,"</td>\n        </tr>"))}},{key:"createPercentItem",value:function(t,n,r,e){var o=(r/n*100).toFixed(1),i=(e/n*100).toFixed(1);this.container.insertAdjacentHTML("beforeend",'\n          <div class="diagram__row">\n          <div class="diagram__caption">\n            <p class="diagram__country">'.concat(t,'</p>\n            <p class="diagram__analytics">\n              Смертность\n              <span class="diagram__data diagram__data_type_dead">').concat(o,'%</span> •\n              Вылечилось\n              <span class="diagram__data diagram__data_type_healed">').concat(i,'%</span>\n            </p>\n          </div>\n          <div class="diagram__line">\n            <div class="diagram__visualisation diagram__visualisation_type_healed" style="width: ').concat(i,'%;"></div>\n            <div class="diagram__visualisation diagram__visualisation_type_dead" style="width: ').concat(o,'%;"></div>\n          </div>\n        </div>'))}}])&&a(n.prototype,r),e&&a(n,e),t}();r(90),r(91);function f(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var s=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,r,e;return n=t,(r=[{key:"renderTop",value:function(t,n){t.forEach((function(t){n.createTopItem(t.countryRegion,t.confirmed,t.deaths,t.recovered)}))}},{key:"renderPercent",value:function(t,n){t.forEach((function(t){n.createPercentItem(t.countryRegion,t.confirmed,t.deaths,t.recovered)}))}}])&&f(n.prototype,r),e&&f(n,e),t}();r(93);r.d(n,"dataCovid",(function(){return T}));var l=document.querySelector(".page__header"),p=document.querySelector(".total__number"),v=document.querySelector(".header__total"),d=document.querySelector("#rating-top"),h=document.querySelector("#rating-russia"),y=document.querySelector(".diagram"),g={totalNumber:p,headerTotal:v},m=new o,x=new c(g),b=new u(d),w=new u(h),S=new u(y),_=new s;function j(t,n){return t.slice(0,n)}function T(t){x.setDataCovidConfirmed(t.reduce((function(t,n){return t+n.confirmed}),0)),_.renderTop(j(t,10),b),_.renderTop(function(t,n){return t.filter((function(t){return t.countryRegion===n}))}(t,"Russia"),w),_.renderPercent(j(t,3),S)}m.dataCovidApi(),window.addEventListener("scroll",(function(){return t=l,void(window.pageYOffset>0?t.style.top="0px":t.style.top="-60px");var t}))}]);