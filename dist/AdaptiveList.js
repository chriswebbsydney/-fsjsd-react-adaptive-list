parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"J4Nk":[function(require,module,exports) {
"use strict";var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable;function n(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function o(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(r){return t[r]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(r){n[r]=r}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}module.exports=o()?Object.assign:function(o,c){for(var a,i,s=n(o),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(s[u]=a[u]);if(r){i=r(a);for(var b=0;b<i.length;b++)e.call(a,i[b])&&(s[i[b]]=a[i[b]])}}return s};
},{}],"awqi":[function(require,module,exports) {
"use strict";var e=require("object-assign"),t="function"==typeof Symbol&&Symbol.for,r=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,u=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,f=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,i=t?Symbol.for("react.concurrent_mode"):60111,a=t?Symbol.for("react.forward_ref"):60112,s=t?Symbol.for("react.suspense"):60113,p=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,d="function"==typeof Symbol&&Symbol.iterator;function v(e,t,r,n,o,u,l,f){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,u,l,f],i=0;(e=Error(t.replace(/%s/g,function(){return c[i++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function S(){}function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=_.prototype;var g=k.prototype=new S;g.constructor=k,e(g,_.prototype),g.isPureReactComponent=!0;var $={current:null},x={current:null},C=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var o=void 0,u={},l=null,f=null;if(null!=t)for(o in void 0!==t.ref&&(f=t.ref),void 0!==t.key&&(l=""+t.key),t)C.call(t,o)&&!w.hasOwnProperty(o)&&(u[o]=t[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),a=0;a<c;a++)i[a]=arguments[a+2];u.children=i}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:r,type:e,key:l,ref:f,props:u,_owner:x.current}}function R(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}function j(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}var O=/\/+/g,A=[];function I(e,t,r,n){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function U(e,t,o,u){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var f=!1;if(null===e)f=!0;else switch(l){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case r:case n:f=!0}}if(f)return o(u,e,""===t?"."+F(e,0):t),1;if(f=0,t=""===t?".":t+":",Array.isArray(e))for(var c=0;c<e.length;c++){var i=t+F(l=e[c],c);f+=U(l,i,o,u)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=d&&e[d]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),c=0;!(l=e.next()).done;)f+=U(l=l.value,i=t+F(l,c++),o,u);else"object"===l&&m("31","[object Object]"===(o=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":o,"");return f}function q(e,t,r){return null==e?0:U(e,"",t,r)}function F(e,t){return"object"==typeof e&&null!==e&&null!=e.key?j(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function V(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,function(e){return e}):null!=e&&(E(e)&&(e=R(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(O,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(O,"$&/")+"/"),q(e,V,t=I(t,u,n,o)),M(t)}function T(){var e=$.current;return null===e&&m("321"),e}var N={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;q(e,L,t=I(null,null,t,r)),M(t)},count:function(e){return q(e,function(){return null},null)},toArray:function(e){var t=[];return D(e,t,null,function(e){return e}),t},only:function(e){return E(e)||m("143"),e}},createRef:function(){return{current:null}},Component:_,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:a,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return T().useCallback(e,t)},useContext:function(e,t){return T().useContext(e,t)},useEffect:function(e,t){return T().useEffect(e,t)},useImperativeHandle:function(e,t,r){return T().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return T().useLayoutEffect(e,t)},useMemo:function(e,t){return T().useMemo(e,t)},useReducer:function(e,t,r){return T().useReducer(e,t,r)},useRef:function(e){return T().useRef(e)},useState:function(e){return T().useState(e)},Fragment:o,StrictMode:u,Suspense:s,createElement:P,cloneElement:function(t,n,o){null==t&&m("267",t);var u=void 0,l=e({},t.props),f=t.key,c=t.ref,i=t._owner;if(null!=n){void 0!==n.ref&&(c=n.ref,i=x.current),void 0!==n.key&&(f=""+n.key);var a=void 0;for(u in t.type&&t.type.defaultProps&&(a=t.type.defaultProps),n)C.call(n,u)&&!w.hasOwnProperty(u)&&(l[u]=void 0===n[u]&&void 0!==a?a[u]:n[u])}if(1===(u=arguments.length-2))l.children=o;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];l.children=a}return{$$typeof:r,type:t.type,key:f,ref:c,props:l,_owner:i}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.8.6",unstable_ConcurrentMode:i,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:$,ReactCurrentOwner:x,assign:e}},z={default:N},B=z&&N||z;module.exports=B.default||B;
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"Asjh":[function(require,module,exports) {
"use strict";var _="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=_;
},{}],"wVGV":[function(require,module,exports) {
"use strict";var e=require("./lib/ReactPropTypesSecret");function r(){}function t(){}t.resetWarningCache=r,module.exports=function(){function n(r,t,n,o,a,p){if(p!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var a={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:r};return a.PropTypes=a,a};
},{"./lib/ReactPropTypesSecret":"Asjh"}],"5D9O":[function(require,module,exports) {
var r,e;module.exports=require("./factoryWithThrowingShims")();
},{"./factoryWithThrowingShims":"wVGV"}],"NWdv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function r(r,u,t){void 0===t&&(t={});var n=t.maxWait,c=e.useRef(null),l=e.useRef([]),o=e.useRef(null),a=e.useRef(!1),i=r,f=e.useCallback(function(){clearTimeout(o.current),clearTimeout(c.current),c.current=null,l.current=[],o.current=null},[]);e.useEffect(function(){return function(){a.current=!0}},[]);return[e.useCallback(function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];l.current=e,clearTimeout(o.current),o.current=setTimeout(function(){f(),a.current||i.apply(void 0,e)},u),n&&!c.current&&(c.current=setTimeout(function(){var e=l.current;f(),a.current||i.apply(null,e)},n))},[i,n,u,f]),f,function(){o.current&&(i.apply(null,l.current),f())}]}exports.default=r;
},{"react":"1n8/"}],"fb8C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("./callback");function t(t,u,c){var a=e.useState(t),n=a[0],f=a[1],s=r.default(e.useCallback(function(e){return f(e)},[]),u,c),l=s[0],i=s[1],o=e.useRef(t);return e.useEffect(function(){o.current!==t&&(l(t),o.current=t)},[t,l]),[n,i]}exports.default=t;
},{"react":"1n8/","./callback":"NWdv"}],"Pau+":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./cache");exports.useDebounce=e.default;var r=require("./callback");exports.useDebouncedCallback=r.default;
},{"./cache":"fb8C","./callback":"NWdv"}],"Vdi9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=i(require("react")),t=n(require("prop-types")),r=require("use-debounce"),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}function a(e){return s(e)||u(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function c(e,t){return d(e)||p(e,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(e,t){var r=[],o=!0,n=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(u){n=!0,i=u}finally{try{o||null==l.return||l.return()}finally{if(n)throw i}}return r}function d(e){if(Array.isArray(e))return e}var g={wrapper:{}},v=30,m=function(t){var n=t.initialData,i=t.isCompleteOnInit,l=t.onLoadMore,u=t.renderRow,s=t.renderEmptyList,f=t.renderLoadingMore,p=t.renderTombstone,d=t.rowHeight,m=t.overscanAmount,h=void 0===m?5:m,y=t.loadingMoreStyle,b=void 0===y?"loadingindicator":y;f||(f=function(){return e.default.createElement("div",null,"Loading ...")}),p||(p=function(t){return e.default.createElement("div",{style:o({},t)})});var w=c((0,e.useState)({items:n,isComplete:i,isLoadingMore:!1,wrapperHeight:0,wrapperVisibleHeight:0,viewportScrollTop:0,viewportScrollHeight:0,viewportScrollPosition:0,reachedLimit:!1}),2),L=w[0],T=w[1],H=d*h,O=(0,e.useCallback)(function(e){T(function(t){return o({},t,{isLoadingMore:e})})},[]),S=(0,e.useRef)(),E=(0,e.useRef)(),M=function(){return S.current},C=(0,e.useCallback)(function(){var e=M();return e?parseFloat(window.getComputedStyle(e,null).getPropertyValue("height")):1e4},[]),j=c((0,r.useDebouncedCallback)(function(e){T(function(t){return o({},t,{wrapperHeight:e.target.offsetHeight,wrapperVisibleHeight:C(),viewportScrollTop:e.target.scrollTop,viewportScrollHeight:e.target.scrollHeight,reachedLimit:e.target.scrollTop+e.target.offsetHeight>=e.target.scrollHeight})})},v,{maxWait:v}),1)[0],A=function(e){return{offsetHeight:e.offsetHeight,offsetTop:e.offsetTop,scrollTop:e.scrollTop,scrollHeight:e.scrollHeight}},P=function(){if(L.isComplete||L.isLoadingMore)return!1;var e=M(),t=E.current,r=e&&A(e),o=t&&A(t);return!(!r||!o)&&(!!(t.offsetTop-e.offsetTop<e.offsetHeight+e.scrollTop)&&(O(!0),l(R),!0))},R=function(e){var t=e.items,r=e.complete;T(function(e){return o({},e,{items:[].concat(a(e.items),a(t)),isComplete:r,isLoadingMore:!1})})},q=(0,e.useCallback)(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=C();if(0===r)return!1;var o=t?H:0,n=e*d,i=n+d,a=n>=L.viewportScrollTop-o,l=i<=L.viewportScrollTop+r+H;return a&&l},[d,H,L.viewportScrollTop,C]),x=(0,e.useCallback)(function(){for(var e,t=L.items.length-1,r=[];q(++t,!1);)r.push({index:"ts".concat(t),top:"".concat((e=t,e*d),"px")});return r},[d,L.items.length]);return(0,e.useEffect)(function(){return M().addEventListener("resize",j),M().addEventListener("scroll",j,{passive:!0}),P(),function(){var e=M();e&&M().removeEventListener("scroll",j),e&&M().removeEventListener("resize",j)}},[]),e.default.createElement("div",{className:"AdaptiveList",style:g.wrapper,ref:S},L.isComplete&&0===L.items.length&&s(),L.items.map(function(e,t){return q(t)&&u({index:t,item:e,computedStyle:{top:t*d}})}),L.isLoadingMore&&"tombstones"===b&&x().map(function(e){return p(e)}),e.default.createElement("div",{ref:E,style:{position:"absolute",top:L.items.length*d}},(L.isLoadingMore||P())&&"loadingindicator"===b?f():e.default.createElement("div",null,"Loading")))};m.propTypes={initialData:t.default.array.isRequired,isCompleteOnInit:t.default.bool.isRequired,onLoadMore:t.default.func.isRequired,renderRow:t.default.func.isRequired,renderEmptyList:t.default.func.isRequired,renderLoadingMore:t.default.func,renderTombstone:t.default.func,overscanAmount:t.default.number};var h=e.default.memo(m);exports.default=h;
},{"react":"1n8/","prop-types":"5D9O","use-debounce":"Pau+"}]},{},["Vdi9"], null)
//# sourceMappingURL=/AdaptiveList.js.map