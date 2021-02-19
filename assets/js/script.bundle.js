/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/dev/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/dev/classes/gsap.example.js":
/*!***********************************************!*\
  !*** ./assets/js/dev/classes/gsap.example.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/js/dev/classes/menu.js":
/*!***************************************!*\
  !*** ./assets/js/dev/classes/menu.js ***!
  \***************************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.initObserver();
  }

  _createClass(Menu, [{
    key: "initObserver",
    value: function initObserver() {
      //definition de l'observer
      var intersectionObserver = new window.IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          //entry.target est l'element html en lui meme
          if (entry.intersectionRatio > 0.2) {
            //dedans
            entry.target.classList.add("is-inviewport");
          } else {
            //dehors
            entry.target.classList.remove("is-inviewport");
          }
        });
      }, {
        threshold: 0.2
      }); //creation de l'observer

      document.querySelectorAll(".scroll-part").forEach(function (element) {
        intersectionObserver.observe(element);
      });
    }
  }]);

  return Menu;
}();

var menu = new Menu();

/***/ }),

/***/ "./assets/js/dev/classes/tilt.js":
/*!***************************************!*\
  !*** ./assets/js/dev/classes/tilt.js ***!
  \***************************************/
/*! exports provided: tilt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tilt", function() { return tilt; });
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-tilt */ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
	Tilt.js
**/
//import de la lib vanilla-tilt



var Tilt = /*#__PURE__*/function () {
  function Tilt() {
    var _this = this;

    _classCallCheck(this, Tilt);

    this.init();
    _barba_core__WEBPACK_IMPORTED_MODULE_1___default.a.hooks.after(function (_) {
      _this.init();
    });
  }

  _createClass(Tilt, [{
    key: "init",
    value: function init() {
      var elements = document.querySelector("[data-tilt]");
      vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default.a.init(elements);
    }
  }]);

  return Tilt;
}();

var tilt = new Tilt();

/***/ }),

/***/ "./assets/js/dev/script.js":
/*!*********************************!*\
  !*** ./assets/js/dev/script.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_tilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/tilt */ "./assets/js/dev/classes/tilt.js");
/* harmony import */ var _classes_gsap_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/gsap.example */ "./assets/js/dev/classes/gsap.example.js");
/* harmony import */ var _classes_gsap_example__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_classes_gsap_example__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/menu */ "./assets/js/dev/classes/menu.js");
//script en ES6
console.log("Hello JS !");
var test = "hello";
console.log(test + " JS !");




/***/ }),

/***/ "./node_modules/@barba/core/dist/barba.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/@barba/core/dist/barba.umd.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():undefined}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));
//# sourceMappingURL=barba.umd.js.map


/***/ }),

/***/ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-tilt/lib/vanilla-tilt.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.7.0
 */

var VanillaTilt = function () {
  function VanillaTilt(element) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, VanillaTilt);

    if (!(element instanceof Node)) {
      throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
    }

    this.width = null;
    this.height = null;
    this.clientWidth = null;
    this.clientHeight = null;
    this.left = null;
    this.top = null;

    // for Gyroscope sampling
    this.gammazero = null;
    this.betazero = null;
    this.lastgammazero = null;
    this.lastbetazero = null;

    this.transitionTimeout = null;
    this.updateCall = null;
    this.event = null;

    this.updateBind = this.update.bind(this);
    this.resetBind = this.reset.bind(this);

    this.element = element;
    this.settings = this.extendSettings(settings);

    this.reverse = this.settings.reverse ? -1 : 1;
    this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
    this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
    this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
    this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
    this.gyroscopeSamples = this.settings.gyroscopeSamples;

    this.elementListener = this.getElementListener();

    if (this.glare) {
      this.prepareGlare();
    }

    if (this.fullPageListening) {
      this.updateClientSize();
    }

    this.addEventListeners();
    this.updateInitialPosition();
  }

  VanillaTilt.isSettingTrue = function isSettingTrue(setting) {
    return setting === "" || setting === true || setting === 1;
  };

  /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */


  VanillaTilt.prototype.getElementListener = function getElementListener() {
    if (this.fullPageListening) {
      return window.document;
    }

    if (typeof this.settings["mouse-event-element"] === "string") {
      var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

      if (mouseEventElement) {
        return mouseEventElement;
      }
    }

    if (this.settings["mouse-event-element"] instanceof Node) {
      return this.settings["mouse-event-element"];
    }

    return this.element;
  };

  /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */


  VanillaTilt.prototype.addEventListeners = function addEventListeners() {
    this.onMouseEnterBind = this.onMouseEnter.bind(this);
    this.onMouseMoveBind = this.onMouseMove.bind(this);
    this.onMouseLeaveBind = this.onMouseLeave.bind(this);
    this.onWindowResizeBind = this.onWindowResize.bind(this);
    this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);

    this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);

    if (this.glare || this.fullPageListening) {
      window.addEventListener("resize", this.onWindowResizeBind);
    }

    if (this.gyroscope) {
      window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    }
  };

  /**
   * Method remove event listeners from current this.elementListener
   */


  VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {
    this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
    this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
    this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);

    if (this.gyroscope) {
      window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
    }

    if (this.glare || this.fullPageListening) {
      window.removeEventListener("resize", this.onWindowResizeBind);
    }
  };

  VanillaTilt.prototype.destroy = function destroy() {
    clearTimeout(this.transitionTimeout);
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.reset();

    this.removeEventListeners();
    this.element.vanillaTilt = null;
    delete this.element.vanillaTilt;

    this.element = null;
  };

  VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {
    if (event.gamma === null || event.beta === null) {
      return;
    }

    this.updateElementPosition();

    if (this.gyroscopeSamples > 0) {
      this.lastgammazero = this.gammazero;
      this.lastbetazero = this.betazero;

      if (this.gammazero === null) {
        this.gammazero = event.gamma;
        this.betazero = event.beta;
      } else {
        this.gammazero = (event.gamma + this.lastgammazero) / 2;
        this.betazero = (event.beta + this.lastbetazero) / 2;
      }

      this.gyroscopeSamples -= 1;
    }

    var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
    var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;

    var degreesPerPixelX = totalAngleX / this.width;
    var degreesPerPixelY = totalAngleY / this.height;

    var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
    var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);

    var posX = angleX / degreesPerPixelX;
    var posY = angleY / degreesPerPixelY;

    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = {
      clientX: posX + this.left,
      clientY: posY + this.top
    };

    this.updateCall = requestAnimationFrame(this.updateBind);
  };

  VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {
    this.updateElementPosition();
    this.element.style.willChange = "transform";
    this.setTransition();
  };

  VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {
    if (this.updateCall !== null) {
      cancelAnimationFrame(this.updateCall);
    }

    this.event = event;
    this.updateCall = requestAnimationFrame(this.updateBind);
  };

  VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {
    this.setTransition();

    if (this.settings.reset) {
      requestAnimationFrame(this.resetBind);
    }
  };

  VanillaTilt.prototype.reset = function reset() {
    this.event = {
      clientX: this.left + this.width / 2,
      clientY: this.top + this.height / 2
    };

    if (this.element && this.element.style) {
      this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(0deg) " + "rotateY(0deg) " + "scale3d(1, 1, 1)";
    }

    this.resetGlare();
  };

  VanillaTilt.prototype.resetGlare = function resetGlare() {
    if (this.glare) {
      this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "0";
    }
  };

  VanillaTilt.prototype.updateInitialPosition = function updateInitialPosition() {
    if (this.settings.startX === 0 && this.settings.startY === 0) {
      return;
    }

    this.onMouseEnter();

    if (this.fullPageListening) {
      this.event = {
        clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
        clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
      };
    } else {
      this.event = {
        clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
        clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
      };
    }

    var backupScale = this.settings.scale;
    this.settings.scale = 1;
    this.update();
    this.settings.scale = backupScale;
    this.resetGlare();
  };

  VanillaTilt.prototype.getValues = function getValues() {
    var x = void 0,
        y = void 0;

    if (this.fullPageListening) {
      x = this.event.clientX / this.clientWidth;
      y = this.event.clientY / this.clientHeight;
    } else {
      x = (this.event.clientX - this.left) / this.width;
      y = (this.event.clientY - this.top) / this.height;
    }

    x = Math.min(Math.max(x, 0), 1);
    y = Math.min(Math.max(y, 0), 1);

    var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
    var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
    var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);

    return {
      tiltX: tiltX,
      tiltY: tiltY,
      percentageX: x * 100,
      percentageY: y * 100,
      angle: angle
    };
  };

  VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {
    var rect = this.element.getBoundingClientRect();

    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  };

  VanillaTilt.prototype.update = function update() {
    var values = this.getValues();

    this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

    if (this.glare) {
      this.glareElement.style.transform = "rotate(" + values.angle + "deg) translate(-50%, -50%)";
      this.glareElement.style.opacity = "" + values.percentageY * this.settings["max-glare"] / 100;
    }

    this.element.dispatchEvent(new CustomEvent("tiltChange", {
      "detail": values
    }));

    this.updateCall = null;
  };

  /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */


  VanillaTilt.prototype.prepareGlare = function prepareGlare() {
    // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
    if (!this.glarePrerender) {
      // Create glare element
      var jsTiltGlare = document.createElement("div");
      jsTiltGlare.classList.add("js-tilt-glare");

      var jsTiltGlareInner = document.createElement("div");
      jsTiltGlareInner.classList.add("js-tilt-glare-inner");

      jsTiltGlare.appendChild(jsTiltGlareInner);
      this.element.appendChild(jsTiltGlare);
    }

    this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
    this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

    if (this.glarePrerender) {
      return;
    }

    Object.assign(this.glareElementWrapper.style, {
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "hidden",
      "pointer-events": "none"
    });

    Object.assign(this.glareElement.style, {
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "pointer-events": "none",
      "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
      "width": this.element.offsetWidth * 2 + "px",
      "height": this.element.offsetWidth * 2 + "px",
      "transform": "rotate(180deg) translate(-50%, -50%)",
      "transform-origin": "0% 0%",
      "opacity": "0"
    });
  };

  VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {
    if (this.glare) {
      Object.assign(this.glareElement.style, {
        "width": "" + this.element.offsetWidth * 2,
        "height": "" + this.element.offsetWidth * 2
      });
    }
  };

  VanillaTilt.prototype.updateClientSize = function updateClientSize() {
    this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  };

  VanillaTilt.prototype.onWindowResize = function onWindowResize() {
    this.updateGlareSize();
    this.updateClientSize();
  };

  VanillaTilt.prototype.setTransition = function setTransition() {
    var _this = this;

    clearTimeout(this.transitionTimeout);
    this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
    if (this.glare) this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing;

    this.transitionTimeout = setTimeout(function () {
      _this.element.style.transition = "";
      if (_this.glare) {
        _this.glareElement.style.transition = "";
      }
    }, this.settings.speed);
  };

  /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be disabled. Can be X or Y
   * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */


  VanillaTilt.prototype.extendSettings = function extendSettings(settings) {
    var defaultSettings = {
      reverse: false,
      max: 15,
      startX: 0,
      startY: 0,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: 1,
      speed: 300,
      transition: true,
      axis: null,
      glare: false,
      "max-glare": 1,
      "glare-prerender": false,
      "full-page-listening": false,
      "mouse-event-element": null,
      reset: true,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
      gyroscopeSamples: 10
    };

    var newSettings = {};
    for (var property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else if (this.element.hasAttribute("data-tilt-" + property)) {
        var attribute = this.element.getAttribute("data-tilt-" + property);
        try {
          newSettings[property] = JSON.parse(attribute);
        } catch (e) {
          newSettings[property] = attribute;
        }
      } else {
        newSettings[property] = defaultSettings[property];
      }
    }

    return newSettings;
  };

  VanillaTilt.init = function init(elements, settings) {
    if (elements instanceof Node) {
      elements = [elements];
    }

    if (elements instanceof NodeList) {
      elements = [].slice.call(elements);
    }

    if (!(elements instanceof Array)) {
      return;
    }

    elements.forEach(function (element) {
      if (!("vanillaTilt" in element)) {
        element.vanillaTilt = new VanillaTilt(element, settings);
      }
    });
  };

  return VanillaTilt;
}();

if (typeof document !== "undefined") {
  /* expose the class to window */
  window.VanillaTilt = VanillaTilt;

  /**
   * Auto load
   */
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
}

module.exports = VanillaTilt;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Rldi9jbGFzc2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Rldi9jbGFzc2VzL3RpbHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Rldi9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYXJiYS9jb3JlL2Rpc3QvYmFyYmEudW1kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRpbHQvbGliL3ZhbmlsbGEtdGlsdC5qcyJdLCJuYW1lcyI6WyJNZW51IiwiaW5pdE9ic2VydmVyIiwiaW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRocmVzaG9sZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJvYnNlcnZlIiwibWVudSIsIlRpbHQiLCJpbml0IiwiYmFyYmEiLCJob29rcyIsImFmdGVyIiwiXyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvciIsIlZhbmlsbGFUaWx0IiwidGlsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFp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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsWUFBWTtBQUN6QixhQUFhLFFBQVE7QUFDckIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxjQUFjO0FBQzNCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSxpQkFBaUI7QUFDOUI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InNjcmlwdC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Fzc2V0cy9qcy9kZXYvc2NyaXB0LmpzXCIpO1xuIiwiXHJcblxyXG5cclxuY2xhc3MgTWVudSB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaW5pdE9ic2VydmVyKClcclxuICAgXHJcbiAgfVxyXG4gICAgaW5pdE9ic2VydmVyKCkge1xyXG4gICAgICAgIC8vZGVmaW5pdGlvbiBkZSBsJ29ic2VydmVyXHJcbiAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKFxyXG4gICAgICAgICAgZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbiAgICAgICAgICAgICAgLy9lbnRyeS50YXJnZXQgZXN0IGwnZWxlbWVudCBodG1sIGVuIGx1aSBtZW1lXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAoZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwLjIpIHtcclxuICAgICAgICAgICAgICAgIC8vZGVkYW5zXHJcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImlzLWludmlld3BvcnRcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9kZWhvcnNcclxuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtaW52aWV3cG9ydFwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHsgdGhyZXNob2xkOiAwLjIgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICBcclxuICAgICAgICAvL2NyZWF0aW9uIGRlIGwnb2JzZXJ2ZXJcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNjcm9sbC1wYXJ0XCIpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICBpbnRlcnNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtZW51ID0gbmV3IE1lbnUoKTsiLCIvKipcclxuXHRUaWx0LmpzXHJcbioqL1xyXG4vL2ltcG9ydCBkZSBsYSBsaWIgdmFuaWxsYS10aWx0XHJcbmltcG9ydCBWYW5pbGxhVGlsdCBmcm9tIFwidmFuaWxsYS10aWx0XCI7XHJcbmltcG9ydCBiYXJiYSBmcm9tIFwiQGJhcmJhL2NvcmVcIjtcclxuXHJcbmNsYXNzIFRpbHQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgICBiYXJiYS5ob29rcy5hZnRlcihfID0+IHtcclxuICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRpbHRdXCIpO1xyXG4gICAgVmFuaWxsYVRpbHQuaW5pdChlbGVtZW50cyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGlsdCA9IG5ldyBUaWx0KCk7XHJcbiIsIi8vc2NyaXB0IGVuIEVTNlxyXG5cclxuXHJcbmNvbnNvbGUubG9nKFwiSGVsbG8gSlMgIVwiKTtcclxuXHJcbmNvbnN0IHRlc3QgPSBcImhlbGxvXCI7XHJcblxyXG5jb25zb2xlLmxvZyh0ZXN0ICsgXCIgSlMgIVwiKTtcclxuXHJcbmltcG9ydCB7IHRpbHQgfSBmcm9tIFwiLi9jbGFzc2VzL3RpbHRcIjtcclxuaW1wb3J0IHtHc2FwRXhhbXBsZSB9IGZyb20gXCIuL2NsYXNzZXMvZ3NhcC5leGFtcGxlXCI7XHJcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9jbGFzc2VzL21lbnVcIjtcclxuXHJcblxyXG4iLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKToodD10fHxzZWxmKS5iYXJiYT1uKCl9KHRoaXMsKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe2Zvcih2YXIgcj0wO3I8bi5sZW5ndGg7cisrKXt2YXIgZT1uW3JdO2UuZW51bWVyYWJsZT1lLmVudW1lcmFibGV8fCExLGUuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIGUmJihlLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLmtleSxlKX19ZnVuY3Rpb24gbihuLHIsZSl7cmV0dXJuIHImJnQobi5wcm90b3R5cGUsciksZSYmdChuLGUpLG59ZnVuY3Rpb24gcigpe3JldHVybihyPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciByPWFyZ3VtZW50c1tuXTtmb3IodmFyIGUgaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixlKSYmKHRbZV09cltlXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZSh0LG4pe3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUobi5wcm90b3R5cGUpLHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXQsdC5fX3Byb3RvX189bn1mdW5jdGlvbiBpKHQpe3JldHVybihpPU9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3QuZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odCl7cmV0dXJuIHQuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YodCl9KSh0KX1mdW5jdGlvbiBvKHQsbil7cmV0dXJuKG89T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbih0LG4pe3JldHVybiB0Ll9fcHJvdG9fXz1uLHR9KSh0LG4pfWZ1bmN0aW9uIHUodCxuLHIpe3JldHVybih1PWZ1bmN0aW9uKCl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFJlZmxlY3R8fCFSZWZsZWN0LmNvbnN0cnVjdClyZXR1cm4hMTtpZihSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb3h5KXJldHVybiEwO3RyeXtyZXR1cm4gRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLFtdLChmdW5jdGlvbigpe30pKSksITB9Y2F0Y2godCl7cmV0dXJuITF9fSgpP1JlZmxlY3QuY29uc3RydWN0OmZ1bmN0aW9uKHQsbixyKXt2YXIgZT1bbnVsbF07ZS5wdXNoLmFwcGx5KGUsbik7dmFyIGk9bmV3KEZ1bmN0aW9uLmJpbmQuYXBwbHkodCxlKSk7cmV0dXJuIHImJm8oaSxyLnByb3RvdHlwZSksaX0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiBmKHQpe3ZhciBuPVwiZnVuY3Rpb25cIj09dHlwZW9mIE1hcD9uZXcgTWFwOnZvaWQgMDtyZXR1cm4oZj1mdW5jdGlvbih0KXtpZihudWxsPT09dHx8LTE9PT1GdW5jdGlvbi50b1N0cmluZy5jYWxsKHQpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpKXJldHVybiB0O2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO2lmKHZvaWQgMCE9PW4pe2lmKG4uaGFzKHQpKXJldHVybiBuLmdldCh0KTtuLnNldCh0LHIpfWZ1bmN0aW9uIHIoKXtyZXR1cm4gdSh0LGFyZ3VtZW50cyxpKHRoaXMpLmNvbnN0cnVjdG9yKX1yZXR1cm4gci5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnIsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksbyhyLHQpfSkodCl9ZnVuY3Rpb24gcyh0LG4pe3RyeXt2YXIgcj10KCl9Y2F0Y2godCl7cmV0dXJuIG4odCl9cmV0dXJuIHImJnIudGhlbj9yLnRoZW4odm9pZCAwLG4pOnJ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmKFN5bWJvbC5pdGVyYXRvcnx8KFN5bWJvbC5pdGVyYXRvcj1TeW1ib2woXCJTeW1ib2wuaXRlcmF0b3JcIikpKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiYoU3ltYm9sLmFzeW5jSXRlcmF0b3J8fChTeW1ib2wuYXN5bmNJdGVyYXRvcj1TeW1ib2woXCJTeW1ib2wuYXN5bmNJdGVyYXRvclwiKSkpO3ZhciBjLGE9XCIyLjkuN1wiLGg9ZnVuY3Rpb24oKXt9OyFmdW5jdGlvbih0KXt0W3Qub2ZmPTBdPVwib2ZmXCIsdFt0LmVycm9yPTFdPVwiZXJyb3JcIix0W3Qud2FybmluZz0yXT1cIndhcm5pbmdcIix0W3QuaW5mbz0zXT1cImluZm9cIix0W3QuZGVidWc9NF09XCJkZWJ1Z1wifShjfHwoYz17fSkpO3ZhciB2PWMub2ZmLGw9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3RoaXMudD10fXQuZ2V0TGV2ZWw9ZnVuY3Rpb24oKXtyZXR1cm4gdn0sdC5zZXRMZXZlbD1mdW5jdGlvbih0KXtyZXR1cm4gdj1jW3RdfTt2YXIgbj10LnByb3RvdHlwZTtyZXR1cm4gbi5lcnJvcj1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09YXJndW1lbnRzW3JdO3RoaXMuaShjb25zb2xlLmVycm9yLGMuZXJyb3Isbil9LG4ud2Fybj1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09YXJndW1lbnRzW3JdO3RoaXMuaShjb25zb2xlLndhcm4sYy53YXJuaW5nLG4pfSxuLmluZm89ZnVuY3Rpb24oKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0KSxyPTA7cjx0O3IrKyluW3JdPWFyZ3VtZW50c1tyXTt0aGlzLmkoY29uc29sZS5pbmZvLGMuaW5mbyxuKX0sbi5kZWJ1Zz1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09YXJndW1lbnRzW3JdO3RoaXMuaShjb25zb2xlLmxvZyxjLmRlYnVnLG4pfSxuLmk9ZnVuY3Rpb24obixyLGUpe3I8PXQuZ2V0TGV2ZWwoKSYmbi5hcHBseShjb25zb2xlLFtcIltcIit0aGlzLnQrXCJdIFwiXS5jb25jYXQoZSkpfSx0fSgpLGQ9TyxtPUUscD1nLHc9eCxiPVQseT1cIi9cIixQPW5ldyBSZWdFeHAoW1wiKFxcXFxcXFxcLilcIixcIig/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpXSkrKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKV0pKylcXFxcKSkoWysqP10pP1wiXS5qb2luKFwifFwiKSxcImdcIik7ZnVuY3Rpb24gZyh0LG4pe2Zvcih2YXIgcixlPVtdLGk9MCxvPTAsdT1cIlwiLGY9biYmbi5kZWxpbWl0ZXJ8fHkscz1uJiZuLndoaXRlbGlzdHx8dm9pZCAwLGM9ITE7bnVsbCE9PShyPVAuZXhlYyh0KSk7KXt2YXIgYT1yWzBdLGg9clsxXSx2PXIuaW5kZXg7aWYodSs9dC5zbGljZShvLHYpLG89dithLmxlbmd0aCxoKXUrPWhbMV0sYz0hMDtlbHNle3ZhciBsPVwiXCIsZD1yWzJdLG09clszXSxwPXJbNF0sdz1yWzVdO2lmKCFjJiZ1Lmxlbmd0aCl7dmFyIGI9dS5sZW5ndGgtMSxnPXVbYl07KCFzfHxzLmluZGV4T2YoZyk+LTEpJiYobD1nLHU9dS5zbGljZSgwLGIpKX11JiYoZS5wdXNoKHUpLHU9XCJcIixjPSExKTt2YXIgRT1tfHxwLHg9bHx8ZjtlLnB1c2goe25hbWU6ZHx8aSsrLHByZWZpeDpsLGRlbGltaXRlcjp4LG9wdGlvbmFsOlwiP1wiPT09d3x8XCIqXCI9PT13LHJlcGVhdDpcIitcIj09PXd8fFwiKlwiPT09dyxwYXR0ZXJuOkU/QShFKTpcIlteXCIrayh4PT09Zj94OngrZikrXCJdKz9cIn0pfX1yZXR1cm4odXx8bzx0Lmxlbmd0aCkmJmUucHVzaCh1K3Quc3Vic3RyKG8pKSxlfWZ1bmN0aW9uIEUodCxuKXtyZXR1cm4gZnVuY3Rpb24ocixlKXt2YXIgaT10LmV4ZWMocik7aWYoIWkpcmV0dXJuITE7Zm9yKHZhciBvPWlbMF0sdT1pLmluZGV4LGY9e30scz1lJiZlLmRlY29kZXx8ZGVjb2RlVVJJQ29tcG9uZW50LGM9MTtjPGkubGVuZ3RoO2MrKylpZih2b2lkIDAhPT1pW2NdKXt2YXIgYT1uW2MtMV07ZlthLm5hbWVdPWEucmVwZWF0P2lbY10uc3BsaXQoYS5kZWxpbWl0ZXIpLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHModCxhKX0pKTpzKGlbY10sYSl9cmV0dXJue3BhdGg6byxpbmRleDp1LHBhcmFtczpmfX19ZnVuY3Rpb24geCh0LG4pe2Zvcih2YXIgcj1uZXcgQXJyYXkodC5sZW5ndGgpLGU9MDtlPHQubGVuZ3RoO2UrKylcIm9iamVjdFwiPT10eXBlb2YgdFtlXSYmKHJbZV09bmV3IFJlZ0V4cChcIl4oPzpcIit0W2VdLnBhdHRlcm4rXCIpJFwiLFIobikpKTtyZXR1cm4gZnVuY3Rpb24obixlKXtmb3IodmFyIGk9XCJcIixvPWUmJmUuZW5jb2RlfHxlbmNvZGVVUklDb21wb25lbnQsdT0hZXx8ITEhPT1lLnZhbGlkYXRlLGY9MDtmPHQubGVuZ3RoO2YrKyl7dmFyIHM9dFtmXTtpZihcInN0cmluZ1wiIT10eXBlb2Ygcyl7dmFyIGMsYT1uP25bcy5uYW1lXTp2b2lkIDA7aWYoQXJyYXkuaXNBcnJheShhKSl7aWYoIXMucmVwZWF0KXRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIFwiJytzLm5hbWUrJ1wiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYXJyYXknKTtpZigwPT09YS5sZW5ndGgpe2lmKHMub3B0aW9uYWwpY29udGludWU7dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInK3MubmFtZSsnXCIgdG8gbm90IGJlIGVtcHR5Jyl9Zm9yKHZhciBoPTA7aDxhLmxlbmd0aDtoKyspe2lmKGM9byhhW2hdLHMpLHUmJiFyW2ZdLnRlc3QoYykpdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIFwiJytzLm5hbWUrJ1wiIHRvIG1hdGNoIFwiJytzLnBhdHRlcm4rJ1wiJyk7aSs9KDA9PT1oP3MucHJlZml4OnMuZGVsaW1pdGVyKStjfX1lbHNlIGlmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZcIm51bWJlclwiIT10eXBlb2YgYSYmXCJib29sZWFuXCIhPXR5cGVvZiBhKXtpZighcy5vcHRpb25hbCl0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBcIicrcy5uYW1lKydcIiB0byBiZSAnKyhzLnJlcGVhdD9cImFuIGFycmF5XCI6XCJhIHN0cmluZ1wiKSl9ZWxzZXtpZihjPW8oU3RyaW5nKGEpLHMpLHUmJiFyW2ZdLnRlc3QoYykpdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgXCInK3MubmFtZSsnXCIgdG8gbWF0Y2ggXCInK3MucGF0dGVybisnXCIsIGJ1dCBnb3QgXCInK2MrJ1wiJyk7aSs9cy5wcmVmaXgrY319ZWxzZSBpKz1zfXJldHVybiBpfX1mdW5jdGlvbiBrKHQpe3JldHVybiB0LnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLFwiXFxcXCQxXCIpfWZ1bmN0aW9uIEEodCl7cmV0dXJuIHQucmVwbGFjZSgvKFs9ITokLygpXSkvZyxcIlxcXFwkMVwiKX1mdW5jdGlvbiBSKHQpe3JldHVybiB0JiZ0LnNlbnNpdGl2ZT9cIlwiOlwiaVwifWZ1bmN0aW9uIFQodCxuLHIpe2Zvcih2YXIgZT0ocj1yfHx7fSkuc3RyaWN0LGk9ITEhPT1yLnN0YXJ0LG89ITEhPT1yLmVuZCx1PXIuZGVsaW1pdGVyfHx5LGY9W10uY29uY2F0KHIuZW5kc1dpdGh8fFtdKS5tYXAoaykuY29uY2F0KFwiJFwiKS5qb2luKFwifFwiKSxzPWk/XCJeXCI6XCJcIixjPTA7Yzx0Lmxlbmd0aDtjKyspe3ZhciBhPXRbY107aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpcys9ayhhKTtlbHNle3ZhciBoPWEucmVwZWF0P1wiKD86XCIrYS5wYXR0ZXJuK1wiKSg/OlwiK2soYS5kZWxpbWl0ZXIpK1wiKD86XCIrYS5wYXR0ZXJuK1wiKSkqXCI6YS5wYXR0ZXJuO24mJm4ucHVzaChhKSxzKz1hLm9wdGlvbmFsP2EucHJlZml4P1wiKD86XCIrayhhLnByZWZpeCkrXCIoXCIraCtcIikpP1wiOlwiKFwiK2grXCIpP1wiOmsoYS5wcmVmaXgpK1wiKFwiK2grXCIpXCJ9fWlmKG8pZXx8KHMrPVwiKD86XCIrayh1KStcIik/XCIpLHMrPVwiJFwiPT09Zj9cIiRcIjpcIig/PVwiK2YrXCIpXCI7ZWxzZXt2YXIgdj10W3QubGVuZ3RoLTFdLGw9XCJzdHJpbmdcIj09dHlwZW9mIHY/dlt2Lmxlbmd0aC0xXT09PXU6dm9pZCAwPT09djtlfHwocys9XCIoPzpcIitrKHUpK1wiKD89XCIrZitcIikpP1wiKSxsfHwocys9XCIoPz1cIitrKHUpK1wifFwiK2YrXCIpXCIpfXJldHVybiBuZXcgUmVnRXhwKHMsUihyKSl9ZnVuY3Rpb24gTyh0LG4scil7cmV0dXJuIHQgaW5zdGFuY2VvZiBSZWdFeHA/ZnVuY3Rpb24odCxuKXtpZighbilyZXR1cm4gdDt2YXIgcj10LnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtpZihyKWZvcih2YXIgZT0wO2U8ci5sZW5ndGg7ZSsrKW4ucHVzaCh7bmFtZTplLHByZWZpeDpudWxsLGRlbGltaXRlcjpudWxsLG9wdGlvbmFsOiExLHJlcGVhdDohMSxwYXR0ZXJuOm51bGx9KTtyZXR1cm4gdH0odCxuKTpBcnJheS5pc0FycmF5KHQpP2Z1bmN0aW9uKHQsbixyKXtmb3IodmFyIGU9W10saT0wO2k8dC5sZW5ndGg7aSsrKWUucHVzaChPKHRbaV0sbixyKS5zb3VyY2UpO3JldHVybiBuZXcgUmVnRXhwKFwiKD86XCIrZS5qb2luKFwifFwiKStcIilcIixSKHIpKX0odCxuLHIpOmZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gVChnKHQsciksbixyKX0odCxuLHIpfWQubWF0Y2g9ZnVuY3Rpb24odCxuKXt2YXIgcj1bXTtyZXR1cm4gRShPKHQscixuKSxyKX0sZC5yZWdleHBUb0Z1bmN0aW9uPW0sZC5wYXJzZT1wLGQuY29tcGlsZT1mdW5jdGlvbih0LG4pe3JldHVybiB4KGcodCxuKSxuKX0sZC50b2tlbnNUb0Z1bmN0aW9uPXcsZC50b2tlbnNUb1JlZ0V4cD1iO3ZhciBTPXtjb250YWluZXI6XCJjb250YWluZXJcIixoaXN0b3J5OlwiaGlzdG9yeVwiLG5hbWVzcGFjZTpcIm5hbWVzcGFjZVwiLHByZWZpeDpcImRhdGEtYmFyYmFcIixwcmV2ZW50OlwicHJldmVudFwiLHdyYXBwZXI6XCJ3cmFwcGVyXCJ9LGo9bmV3KGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3RoaXMubz1TLHRoaXMudT1uZXcgRE9NUGFyc2VyfXZhciBuPXQucHJvdG90eXBlO3JldHVybiBuLnRvU3RyaW5nPWZ1bmN0aW9uKHQpe3JldHVybiB0Lm91dGVySFRNTH0sbi50b0RvY3VtZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnUucGFyc2VGcm9tU3RyaW5nKHQsXCJ0ZXh0L2h0bWxcIil9LG4udG9FbGVtZW50PWZ1bmN0aW9uKHQpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uaW5uZXJIVE1MPXQsbn0sbi5nZXRIdG1sPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD1kb2N1bWVudCksdGhpcy50b1N0cmluZyh0LmRvY3VtZW50RWxlbWVudCl9LG4uZ2V0V3JhcHBlcj1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ZG9jdW1lbnQpLHQucXVlcnlTZWxlY3RvcihcIltcIit0aGlzLm8ucHJlZml4Kyc9XCInK3RoaXMuby53cmFwcGVyKydcIl0nKX0sbi5nZXRDb250YWluZXI9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PWRvY3VtZW50KSx0LnF1ZXJ5U2VsZWN0b3IoXCJbXCIrdGhpcy5vLnByZWZpeCsnPVwiJyt0aGlzLm8uY29udGFpbmVyKydcIl0nKX0sbi5yZW1vdmVDb250YWluZXI9ZnVuY3Rpb24odCl7ZG9jdW1lbnQuYm9keS5jb250YWlucyh0KSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfSxuLmFkZENvbnRhaW5lcj1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXMuZ2V0Q29udGFpbmVyKCk7cj90aGlzLnModCxyKTpuLmFwcGVuZENoaWxkKHQpfSxuLmdldE5hbWVzcGFjZT1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1kb2N1bWVudCk7dmFyIG49dC5xdWVyeVNlbGVjdG9yKFwiW1wiK3RoaXMuby5wcmVmaXgrXCItXCIrdGhpcy5vLm5hbWVzcGFjZStcIl1cIik7cmV0dXJuIG4/bi5nZXRBdHRyaWJ1dGUodGhpcy5vLnByZWZpeCtcIi1cIit0aGlzLm8ubmFtZXNwYWNlKTpudWxsfSxuLmdldEhyZWY9ZnVuY3Rpb24odCl7aWYodC50YWdOYW1lJiZcImFcIj09PXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXtpZihcInN0cmluZ1wiPT10eXBlb2YgdC5ocmVmKXJldHVybiB0LmhyZWY7dmFyIG49dC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfHx0LmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIik7aWYobilyZXR1cm4gdGhpcy5yZXNvbHZlVXJsKG4uYmFzZVZhbHx8bil9cmV0dXJuIG51bGx9LG4ucmVzb2x2ZVVybD1mdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKW5bcl09YXJndW1lbnRzW3JdO3ZhciBlPW4ubGVuZ3RoO2lmKDA9PT1lKXRocm93IG5ldyBFcnJvcihcInJlc29sdmVVcmwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50OyBnb3Qgbm9uZS5cIik7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJhc2VcIik7aWYoaS5ocmVmPWFyZ3VtZW50c1swXSwxPT09ZSlyZXR1cm4gaS5ocmVmO3ZhciBvPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtvLmluc2VydEJlZm9yZShpLG8uZmlyc3RDaGlsZCk7Zm9yKHZhciB1LGY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikscz0xO3M8ZTtzKyspZi5ocmVmPWFyZ3VtZW50c1tzXSxpLmhyZWY9dT1mLmhyZWY7cmV0dXJuIG8ucmVtb3ZlQ2hpbGQoaSksdX0sbi5zPWZ1bmN0aW9uKHQsbil7bi5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LG4ubmV4dFNpYmxpbmcpfSx0fSgpKSxNPW5ldyhmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLmg9W10sdGhpcy52PS0xfXZhciBlPXQucHJvdG90eXBlO3JldHVybiBlLmluaXQ9ZnVuY3Rpb24odCxuKXt0aGlzLmw9XCJiYXJiYVwiO3ZhciByPXtuczpuLHNjcm9sbDp7eDp3aW5kb3cuc2Nyb2xsWCx5OndpbmRvdy5zY3JvbGxZfSx1cmw6dH07dGhpcy5oLnB1c2gociksdGhpcy52PTA7dmFyIGU9e2Zyb206dGhpcy5sLGluZGV4OjAsc3RhdGVzOltdLmNvbmNhdCh0aGlzLmgpfTt3aW5kb3cuaGlzdG9yeSYmd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGUsXCJcIix0KX0sZS5jaGFuZ2U9ZnVuY3Rpb24odCxuLHIpe2lmKHImJnIuc3RhdGUpe3ZhciBlPXIuc3RhdGUsaT1lLmluZGV4O249dGhpcy5tKHRoaXMudi1pKSx0aGlzLnJlcGxhY2UoZS5zdGF0ZXMpLHRoaXMudj1pfWVsc2UgdGhpcy5hZGQodCxuKTtyZXR1cm4gbn0sZS5hZGQ9ZnVuY3Rpb24odCxuKXt2YXIgcj10aGlzLnNpemUsZT10aGlzLnAobiksaT17bnM6XCJ0bXBcIixzY3JvbGw6e3g6d2luZG93LnNjcm9sbFgseTp3aW5kb3cuc2Nyb2xsWX0sdXJsOnR9O3RoaXMuaC5wdXNoKGkpLHRoaXMudj1yO3ZhciBvPXtmcm9tOnRoaXMubCxpbmRleDpyLHN0YXRlczpbXS5jb25jYXQodGhpcy5oKX07c3dpdGNoKGUpe2Nhc2VcInB1c2hcIjp3aW5kb3cuaGlzdG9yeSYmd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG8sXCJcIix0KTticmVhaztjYXNlXCJyZXBsYWNlXCI6d2luZG93Lmhpc3RvcnkmJndpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShvLFwiXCIsdCl9fSxlLnVwZGF0ZT1mdW5jdGlvbih0LG4pe3ZhciBlPW58fHRoaXMudixpPXIoe30sdGhpcy5nZXQoZSkse30sdCk7dGhpcy5zZXQoZSxpKX0sZS5yZW1vdmU9ZnVuY3Rpb24odCl7dD90aGlzLmguc3BsaWNlKHQsMSk6dGhpcy5oLnBvcCgpLHRoaXMudi0tfSxlLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5oPVtdLHRoaXMudj0tMX0sZS5yZXBsYWNlPWZ1bmN0aW9uKHQpe3RoaXMuaD10fSxlLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5oW3RdfSxlLnNldD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLmhbdF09bn0sZS5wPWZ1bmN0aW9uKHQpe3ZhciBuPVwicHVzaFwiLHI9dCxlPVMucHJlZml4K1wiLVwiK1MuaGlzdG9yeTtyZXR1cm4gci5oYXNBdHRyaWJ1dGUmJnIuaGFzQXR0cmlidXRlKGUpJiYobj1yLmdldEF0dHJpYnV0ZShlKSksbn0sZS5tPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLmFicyh0KT4xP3Q+MD9cImZvcndhcmRcIjpcImJhY2tcIjowPT09dD9cInBvcHN0YXRlXCI6dD4wP1wiYmFja1wiOlwiZm9yd2FyZFwifSxuKHQsW3trZXk6XCJjdXJyZW50XCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaFt0aGlzLnZdfX0se2tleTpcInN0YXRlXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaFt0aGlzLmgubGVuZ3RoLTFdfX0se2tleTpcInByZXZpb3VzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudjwxP251bGw6dGhpcy5oW3RoaXMudi0xXX19LHtrZXk6XCJzaXplXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaC5sZW5ndGh9fV0pLHR9KCkpLEw9ZnVuY3Rpb24odCxuKXt0cnl7dmFyIHI9ZnVuY3Rpb24oKXtpZighbi5uZXh0Lmh0bWwpcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0KS50aGVuKChmdW5jdGlvbih0KXt2YXIgcj1uLm5leHQ7aWYodCl7dmFyIGU9ai50b0VsZW1lbnQodCk7ci5uYW1lc3BhY2U9ai5nZXROYW1lc3BhY2UoZSksci5jb250YWluZXI9ai5nZXRDb250YWluZXIoZSksci5odG1sPXQsTS51cGRhdGUoe25zOnIubmFtZXNwYWNlfSk7dmFyIGk9ai50b0RvY3VtZW50KHQpO2RvY3VtZW50LnRpdGxlPWkudGl0bGV9fSkpfSgpO3JldHVybiBQcm9taXNlLnJlc29sdmUociYmci50aGVuP3IudGhlbigoZnVuY3Rpb24oKXt9KSk6dm9pZCAwKX1jYXRjaCh0KXtyZXR1cm4gUHJvbWlzZS5yZWplY3QodCl9fSwkPWQsXz17X19wcm90b19fOm51bGwsdXBkYXRlOkwsbmV4dFRpY2s6ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHQpe3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodCl9KSl9LHBhdGhUb1JlZ2V4cDokfSxxPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW59LEI9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXdpbmRvdy5sb2NhdGlvbi5ocmVmKSxVKHQpLnBvcnR9LFU9ZnVuY3Rpb24odCl7dmFyIG4scj10Lm1hdGNoKC86XFxkKy8pO2lmKG51bGw9PT1yKS9eaHR0cC8udGVzdCh0KSYmKG49ODApLC9eaHR0cHMvLnRlc3QodCkmJihuPTQ0Myk7ZWxzZXt2YXIgZT1yWzBdLnN1YnN0cmluZygxKTtuPXBhcnNlSW50KGUsMTApfXZhciBpLG89dC5yZXBsYWNlKHEoKSxcIlwiKSx1PXt9LGY9by5pbmRleE9mKFwiI1wiKTtmPj0wJiYoaT1vLnNsaWNlKGYrMSksbz1vLnNsaWNlKDAsZikpO3ZhciBzPW8uaW5kZXhPZihcIj9cIik7cmV0dXJuIHM+PTAmJih1PUQoby5zbGljZShzKzEpKSxvPW8uc2xpY2UoMCxzKSkse2hhc2g6aSxwYXRoOm8scG9ydDpuLHF1ZXJ5OnV9fSxEPWZ1bmN0aW9uKHQpe3JldHVybiB0LnNwbGl0KFwiJlwiKS5yZWR1Y2UoKGZ1bmN0aW9uKHQsbil7dmFyIHI9bi5zcGxpdChcIj1cIik7cmV0dXJuIHRbclswXV09clsxXSx0fSkse30pfSxGPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD13aW5kb3cubG9jYXRpb24uaHJlZiksdC5yZXBsYWNlKC8oXFwvIy4qfFxcL3wjLiopJC8sXCJcIil9LEg9e19fcHJvdG9fXzpudWxsLGdldEhyZWY6ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWZ9LGdldE9yaWdpbjpxLGdldFBvcnQ6QixnZXRQYXRoOmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD13aW5kb3cubG9jYXRpb24uaHJlZiksVSh0KS5wYXRofSxwYXJzZTpVLHBhcnNlUXVlcnk6RCxjbGVhbjpGfTtmdW5jdGlvbiBJKHQsbixyKXtyZXR1cm4gdm9pZCAwPT09biYmKG49MmUzKSxuZXcgUHJvbWlzZSgoZnVuY3Rpb24oZSxpKXt2YXIgbz1uZXcgWE1MSHR0cFJlcXVlc3Q7by5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtpZihvLnJlYWR5U3RhdGU9PT1YTUxIdHRwUmVxdWVzdC5ET05FKWlmKDIwMD09PW8uc3RhdHVzKWUoby5yZXNwb25zZVRleHQpO2Vsc2UgaWYoby5zdGF0dXMpe3ZhciBuPXtzdGF0dXM6by5zdGF0dXMsc3RhdHVzVGV4dDpvLnN0YXR1c1RleHR9O3IodCxuKSxpKG4pfX0sby5vbnRpbWVvdXQ9ZnVuY3Rpb24oKXt2YXIgZT1uZXcgRXJyb3IoXCJUaW1lb3V0IGVycm9yIFtcIituK1wiXVwiKTtyKHQsZSksaShlKX0sby5vbmVycm9yPWZ1bmN0aW9uKCl7dmFyIG49bmV3IEVycm9yKFwiRmV0Y2ggZXJyb3JcIik7cih0LG4pLGkobil9LG8ub3BlbihcIkdFVFwiLHQpLG8udGltZW91dD1uLG8uc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLFwidGV4dC9odG1sLGFwcGxpY2F0aW9uL3hodG1sK3htbCxhcHBsaWNhdGlvbi94bWxcIiksby5zZXRSZXF1ZXN0SGVhZGVyKFwieC1iYXJiYVwiLFwieWVzXCIpLG8uc2VuZCgpfSkpfXZhciBDPWZ1bmN0aW9uKHQpe3JldHVybiEhdCYmKFwib2JqZWN0XCI9PXR5cGVvZiB0fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KSYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC50aGVufTtmdW5jdGlvbiBOKHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPXt9KSxmdW5jdGlvbigpe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGU9bmV3IEFycmF5KHIpLGk9MDtpPHI7aSsrKWVbaV09YXJndW1lbnRzW2ldO3ZhciBvPSExLHU9bmV3IFByb21pc2UoKGZ1bmN0aW9uKHIsaSl7bi5hc3luYz1mdW5jdGlvbigpe3JldHVybiBvPSEwLGZ1bmN0aW9uKHQsbil7dD9pKHQpOnIobil9fTt2YXIgdT10LmFwcGx5KG4sZSk7b3x8KEModSk/dS50aGVuKHIsaSk6cih1KSl9KSk7cmV0dXJuIHV9fXZhciBYPW5ldyhmdW5jdGlvbih0KXtmdW5jdGlvbiBuKCl7dmFyIG47cmV0dXJuKG49dC5jYWxsKHRoaXMpfHx0aGlzKS5sb2dnZXI9bmV3IGwoXCJAYmFyYmEvY29yZVwiKSxuLmFsbD1bXCJyZWFkeVwiLFwicGFnZVwiLFwicmVzZXRcIixcImN1cnJlbnRBZGRlZFwiLFwiY3VycmVudFJlbW92ZWRcIixcIm5leHRBZGRlZFwiLFwibmV4dFJlbW92ZWRcIixcImJlZm9yZU9uY2VcIixcIm9uY2VcIixcImFmdGVyT25jZVwiLFwiYmVmb3JlXCIsXCJiZWZvcmVMZWF2ZVwiLFwibGVhdmVcIixcImFmdGVyTGVhdmVcIixcImJlZm9yZUVudGVyXCIsXCJlbnRlclwiLFwiYWZ0ZXJFbnRlclwiLFwiYWZ0ZXJcIl0sbi5yZWdpc3RlcmVkPW5ldyBNYXAsbi5pbml0KCksbn1lKG4sdCk7dmFyIHI9bi5wcm90b3R5cGU7cmV0dXJuIHIuaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5yZWdpc3RlcmVkLmNsZWFyKCksdGhpcy5hbGwuZm9yRWFjaCgoZnVuY3Rpb24obil7dFtuXXx8KHRbbl09ZnVuY3Rpb24ocixlKXt0LnJlZ2lzdGVyZWQuaGFzKG4pfHx0LnJlZ2lzdGVyZWQuc2V0KG4sbmV3IFNldCksdC5yZWdpc3RlcmVkLmdldChuKS5hZGQoe2N0eDplfHx7fSxmbjpyfSl9KX0pKX0sci5kbz1mdW5jdGlvbih0KXtmb3IodmFyIG49dGhpcyxyPWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkocj4xP3ItMTowKSxpPTE7aTxyO2krKyllW2ktMV09YXJndW1lbnRzW2ldO2lmKHRoaXMucmVnaXN0ZXJlZC5oYXModCkpe3ZhciBvPVByb21pc2UucmVzb2x2ZSgpO3JldHVybiB0aGlzLnJlZ2lzdGVyZWQuZ2V0KHQpLmZvckVhY2goKGZ1bmN0aW9uKHQpe289by50aGVuKChmdW5jdGlvbigpe3JldHVybiBOKHQuZm4sdC5jdHgpLmFwcGx5KHZvaWQgMCxlKX0pKX0pKSxvLmNhdGNoKChmdW5jdGlvbihyKXtuLmxvZ2dlci5kZWJ1ZyhcIkhvb2sgZXJyb3IgW1wiK3QrXCJdXCIpLG4ubG9nZ2VyLmVycm9yKHIpfSkpfXJldHVybiBQcm9taXNlLnJlc29sdmUoKX0sci5jbGVhcj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5hbGwuZm9yRWFjaCgoZnVuY3Rpb24obil7ZGVsZXRlIHRbbl19KSksdGhpcy5pbml0KCl9LHIuaGVscD1mdW5jdGlvbigpe3RoaXMubG9nZ2VyLmluZm8oXCJBdmFpbGFibGUgaG9va3M6IFwiK3RoaXMuYWxsLmpvaW4oXCIsXCIpKTt2YXIgdD1bXTt0aGlzLnJlZ2lzdGVyZWQuZm9yRWFjaCgoZnVuY3Rpb24obixyKXtyZXR1cm4gdC5wdXNoKHIpfSkpLHRoaXMubG9nZ2VyLmluZm8oXCJSZWdpc3RlcmVkIGhvb2tzOiBcIit0LmpvaW4oXCIsXCIpKX0sbn0oaCkpLHo9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe2lmKHRoaXMuUD1bXSxcImJvb2xlYW5cIj09dHlwZW9mIHQpdGhpcy5nPXQ7ZWxzZXt2YXIgbj1BcnJheS5pc0FycmF5KHQpP3Q6W3RdO3RoaXMuUD1uLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuICQodCl9KSl9fXJldHVybiB0LnByb3RvdHlwZS5jaGVja0hyZWY9ZnVuY3Rpb24odCl7aWYoXCJib29sZWFuXCI9PXR5cGVvZiB0aGlzLmcpcmV0dXJuIHRoaXMuZzt2YXIgbj1VKHQpLnBhdGg7cmV0dXJuIHRoaXMuUC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQuZXhlYyhuKX0pKX0sdH0oKSxHPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4obil7dmFyIHI7cmV0dXJuKHI9dC5jYWxsKHRoaXMsbil8fHRoaXMpLms9bmV3IE1hcCxyfWUobix0KTt2YXIgaT1uLnByb3RvdHlwZTtyZXR1cm4gaS5zZXQ9ZnVuY3Rpb24odCxuLHIpe3JldHVybiB0aGlzLmsuc2V0KHQse2FjdGlvbjpyLHJlcXVlc3Q6bn0pLHthY3Rpb246cixyZXF1ZXN0Om59fSxpLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5rLmdldCh0KX0saS5nZXRSZXF1ZXN0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmsuZ2V0KHQpLnJlcXVlc3R9LGkuZ2V0QWN0aW9uPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmsuZ2V0KHQpLmFjdGlvbn0saS5oYXM9ZnVuY3Rpb24odCl7cmV0dXJuIXRoaXMuY2hlY2tIcmVmKHQpJiZ0aGlzLmsuaGFzKHQpfSxpLmRlbGV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5rLmRlbGV0ZSh0KX0saS51cGRhdGU9ZnVuY3Rpb24odCxuKXt2YXIgZT1yKHt9LHRoaXMuay5nZXQodCkse30sbik7cmV0dXJuIHRoaXMuay5zZXQodCxlKSxlfSxufSh6KSxRPWZ1bmN0aW9uKCl7cmV0dXJuIXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZX0sVz1mdW5jdGlvbih0KXtyZXR1cm4hdC5lbHx8IXQuaHJlZn0sSj1mdW5jdGlvbih0KXt2YXIgbj10LmV2ZW50O3JldHVybiBuLndoaWNoPjF8fG4ubWV0YUtleXx8bi5jdHJsS2V5fHxuLnNoaWZ0S2V5fHxuLmFsdEtleX0sSz1mdW5jdGlvbih0KXt2YXIgbj10LmVsO3JldHVybiBuLmhhc0F0dHJpYnV0ZShcInRhcmdldFwiKSYmXCJfYmxhbmtcIj09PW4udGFyZ2V0fSxWPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZWw7cmV0dXJuIHZvaWQgMCE9PW4ucHJvdG9jb2wmJndpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCE9PW4ucHJvdG9jb2x8fHZvaWQgMCE9PW4uaG9zdG5hbWUmJndpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSE9PW4uaG9zdG5hbWV9LFk9ZnVuY3Rpb24odCl7dmFyIG49dC5lbDtyZXR1cm4gdm9pZCAwIT09bi5wb3J0JiZCKCkhPT1CKG4uaHJlZil9LFo9ZnVuY3Rpb24odCl7dmFyIG49dC5lbDtyZXR1cm4gbi5nZXRBdHRyaWJ1dGUmJlwic3RyaW5nXCI9PXR5cGVvZiBuLmdldEF0dHJpYnV0ZShcImRvd25sb2FkXCIpfSx0dD1mdW5jdGlvbih0KXtyZXR1cm4gdC5lbC5oYXNBdHRyaWJ1dGUoUy5wcmVmaXgrXCItXCIrUy5wcmV2ZW50KX0sbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIEJvb2xlYW4odC5lbC5jbG9zZXN0KFwiW1wiK1MucHJlZml4K1wiLVwiK1MucHJldmVudCsnPVwiYWxsXCJdJykpfSxydD1mdW5jdGlvbih0KXt2YXIgbj10LmhyZWY7cmV0dXJuIEYobik9PT1GKCkmJkIobik9PT1CKCl9LGV0PWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIG4obil7dmFyIHI7cmV0dXJuKHI9dC5jYWxsKHRoaXMsbil8fHRoaXMpLnN1aXRlPVtdLHIudGVzdHM9bmV3IE1hcCxyLmluaXQoKSxyfWUobix0KTt2YXIgcj1uLnByb3RvdHlwZTtyZXR1cm4gci5pbml0PWZ1bmN0aW9uKCl7dGhpcy5hZGQoXCJwdXNoU3RhdGVcIixRKSx0aGlzLmFkZChcImV4aXN0c1wiLFcpLHRoaXMuYWRkKFwibmV3VGFiXCIsSiksdGhpcy5hZGQoXCJibGFua1wiLEspLHRoaXMuYWRkKFwiY29yc0RvbWFpblwiLFYpLHRoaXMuYWRkKFwiY29yc1BvcnRcIixZKSx0aGlzLmFkZChcImRvd25sb2FkXCIsWiksdGhpcy5hZGQoXCJwcmV2ZW50U2VsZlwiLHR0KSx0aGlzLmFkZChcInByZXZlbnRBbGxcIixudCksdGhpcy5hZGQoXCJzYW1lVXJsXCIscnQsITEpfSxyLmFkZD1mdW5jdGlvbih0LG4scil7dm9pZCAwPT09ciYmKHI9ITApLHRoaXMudGVzdHMuc2V0KHQsbiksciYmdGhpcy5zdWl0ZS5wdXNoKHQpfSxyLnJ1bj1mdW5jdGlvbih0LG4scixlKXtyZXR1cm4gdGhpcy50ZXN0cy5nZXQodCkoe2VsOm4sZXZlbnQ6cixocmVmOmV9KX0sci5jaGVja0xpbms9ZnVuY3Rpb24odCxuLHIpe3ZhciBlPXRoaXM7cmV0dXJuIHRoaXMuc3VpdGUuc29tZSgoZnVuY3Rpb24oaSl7cmV0dXJuIGUucnVuKGksdCxuLHIpfSkpfSxufSh6KSxpdD1mdW5jdGlvbih0KXtmdW5jdGlvbiBuKHIsZSl7dmFyIGk7dm9pZCAwPT09ZSYmKGU9XCJCYXJiYSBlcnJvclwiKTtmb3IodmFyIG89YXJndW1lbnRzLmxlbmd0aCx1PW5ldyBBcnJheShvPjI/by0yOjApLGY9MjtmPG87ZisrKXVbZi0yXT1hcmd1bWVudHNbZl07cmV0dXJuKGk9dC5jYWxsLmFwcGx5KHQsW3RoaXNdLmNvbmNhdCh1KSl8fHRoaXMpLmVycm9yPXIsaS5sYWJlbD1lLEVycm9yLmNhcHR1cmVTdGFja1RyYWNlJiZFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShmdW5jdGlvbih0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH0oaSksbiksaS5uYW1lPVwiQmFyYmFFcnJvclwiLGl9cmV0dXJuIGUobix0KSxufShmKEVycm9yKSksb3Q9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3ZvaWQgMD09PXQmJih0PVtdKSx0aGlzLmxvZ2dlcj1uZXcgbChcIkBiYXJiYS9jb3JlXCIpLHRoaXMuYWxsPVtdLHRoaXMucGFnZT1bXSx0aGlzLm9uY2U9W10sdGhpcy5BPVt7bmFtZTpcIm5hbWVzcGFjZVwiLHR5cGU6XCJzdHJpbmdzXCJ9LHtuYW1lOlwiY3VzdG9tXCIsdHlwZTpcImZ1bmN0aW9uXCJ9XSx0JiYodGhpcy5hbGw9dGhpcy5hbGwuY29uY2F0KHQpKSx0aGlzLnVwZGF0ZSgpfXZhciBuPXQucHJvdG90eXBlO3JldHVybiBuLmFkZD1mdW5jdGlvbih0LG4pe3N3aXRjaCh0KXtjYXNlXCJydWxlXCI6dGhpcy5BLnNwbGljZShuLnBvc2l0aW9ufHwwLDAsbi52YWx1ZSk7YnJlYWs7Y2FzZVwidHJhbnNpdGlvblwiOmRlZmF1bHQ6dGhpcy5hbGwucHVzaChuKX10aGlzLnVwZGF0ZSgpfSxuLnJlc29sdmU9ZnVuY3Rpb24odCxuKXt2YXIgcj10aGlzO3ZvaWQgMD09PW4mJihuPXt9KTt2YXIgZT1uLm9uY2U/dGhpcy5vbmNlOnRoaXMucGFnZTtlPWUuZmlsdGVyKG4uc2VsZj9mdW5jdGlvbih0KXtyZXR1cm4gdC5uYW1lJiZcInNlbGZcIj09PXQubmFtZX06ZnVuY3Rpb24odCl7cmV0dXJuIXQubmFtZXx8XCJzZWxmXCIhPT10Lm5hbWV9KTt2YXIgaT1uZXcgTWFwLG89ZS5maW5kKChmdW5jdGlvbihlKXt2YXIgbz0hMCx1PXt9O3JldHVybiEoIW4uc2VsZnx8XCJzZWxmXCIhPT1lLm5hbWUpfHwoci5BLnJldmVyc2UoKS5mb3JFYWNoKChmdW5jdGlvbihuKXtvJiYobz1yLlIoZSxuLHQsdSksZS5mcm9tJiZlLnRvJiYobz1yLlIoZSxuLHQsdSxcImZyb21cIikmJnIuUihlLG4sdCx1LFwidG9cIikpLGUuZnJvbSYmIWUudG8mJihvPXIuUihlLG4sdCx1LFwiZnJvbVwiKSksIWUuZnJvbSYmZS50byYmKG89ci5SKGUsbix0LHUsXCJ0b1wiKSkpfSkpLGkuc2V0KGUsdSksbyl9KSksdT1pLmdldChvKSxmPVtdO2lmKGYucHVzaChuLm9uY2U/XCJvbmNlXCI6XCJwYWdlXCIpLG4uc2VsZiYmZi5wdXNoKFwic2VsZlwiKSx1KXt2YXIgcyxjPVtvXTtPYmplY3Qua2V5cyh1KS5sZW5ndGg+MCYmYy5wdXNoKHUpLChzPXRoaXMubG9nZ2VyKS5pbmZvLmFwcGx5KHMsW1wiVHJhbnNpdGlvbiBmb3VuZCBbXCIrZi5qb2luKFwiLFwiKStcIl1cIl0uY29uY2F0KGMpKX1lbHNlIHRoaXMubG9nZ2VyLmluZm8oXCJObyB0cmFuc2l0aW9uIGZvdW5kIFtcIitmLmpvaW4oXCIsXCIpK1wiXVwiKTtyZXR1cm4gb30sbi51cGRhdGU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuYWxsPXRoaXMuYWxsLm1hcCgoZnVuY3Rpb24obil7cmV0dXJuIHQuVChuKX0pKS5zb3J0KChmdW5jdGlvbih0LG4pe3JldHVybiB0LnByaW9yaXR5LW4ucHJpb3JpdHl9KSkucmV2ZXJzZSgpLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIGRlbGV0ZSB0LnByaW9yaXR5LHR9KSksdGhpcy5wYWdlPXRoaXMuYWxsLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PXQubGVhdmV8fHZvaWQgMCE9PXQuZW50ZXJ9KSksdGhpcy5vbmNlPXRoaXMuYWxsLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PXQub25jZX0pKX0sbi5SPWZ1bmN0aW9uKHQsbixyLGUsaSl7dmFyIG89ITAsdT0hMSxmPXQscz1uLm5hbWUsYz1zLGE9cyxoPXMsdj1pP2ZbaV06ZixsPVwidG9cIj09PWk/ci5uZXh0OnIuY3VycmVudDtpZihpP3YmJnZbc106dltzXSl7c3dpdGNoKG4udHlwZSl7Y2FzZVwic3RyaW5nc1wiOmRlZmF1bHQ6dmFyIGQ9QXJyYXkuaXNBcnJheSh2W2NdKT92W2NdOlt2W2NdXTtsW2NdJiYtMSE9PWQuaW5kZXhPZihsW2NdKSYmKHU9ITApLC0xPT09ZC5pbmRleE9mKGxbY10pJiYobz0hMSk7YnJlYWs7Y2FzZVwib2JqZWN0XCI6dmFyIG09QXJyYXkuaXNBcnJheSh2W2FdKT92W2FdOlt2W2FdXTtsW2FdPyhsW2FdLm5hbWUmJi0xIT09bS5pbmRleE9mKGxbYV0ubmFtZSkmJih1PSEwKSwtMT09PW0uaW5kZXhPZihsW2FdLm5hbWUpJiYobz0hMSkpOm89ITE7YnJlYWs7Y2FzZVwiZnVuY3Rpb25cIjp2W2hdKHIpP3U9ITA6bz0hMX11JiYoaT8oZVtpXT1lW2ldfHx7fSxlW2ldW3NdPWZbaV1bc10pOmVbc109ZltzXSl9cmV0dXJuIG99LG4uTz1mdW5jdGlvbih0LG4scil7dmFyIGU9MDtyZXR1cm4odFtuXXx8dC5mcm9tJiZ0LmZyb21bbl18fHQudG8mJnQudG9bbl0pJiYoZSs9TWF0aC5wb3coMTAsciksdC5mcm9tJiZ0LmZyb21bbl0mJihlKz0xKSx0LnRvJiZ0LnRvW25dJiYoZSs9MikpLGV9LG4uVD1mdW5jdGlvbih0KXt2YXIgbj10aGlzO3QucHJpb3JpdHk9MDt2YXIgcj0wO3JldHVybiB0aGlzLkEuZm9yRWFjaCgoZnVuY3Rpb24oZSxpKXtyKz1uLk8odCxlLm5hbWUsaSsxKX0pKSx0LnByaW9yaXR5PXIsdH0sdH0oKSx1dD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dm9pZCAwPT09dCYmKHQ9W10pLHRoaXMubG9nZ2VyPW5ldyBsKFwiQGJhcmJhL2NvcmVcIiksdGhpcy5TPSExLHRoaXMuc3RvcmU9bmV3IG90KHQpfXZhciByPXQucHJvdG90eXBlO3JldHVybiByLmdldD1mdW5jdGlvbih0LG4pe3JldHVybiB0aGlzLnN0b3JlLnJlc29sdmUodCxuKX0sci5kb09uY2U9ZnVuY3Rpb24odCl7dmFyIG49dC5kYXRhLHI9dC50cmFuc2l0aW9uO3RyeXt2YXIgZT1mdW5jdGlvbigpe2kuUz0hMX0saT10aGlzLG89cnx8e307aS5TPSEwO3ZhciB1PXMoKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShpLmooXCJiZWZvcmVPbmNlXCIsbixvKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGkub25jZShuLG8pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoaS5qKFwiYWZ0ZXJPbmNlXCIsbixvKSkudGhlbigoZnVuY3Rpb24oKXt9KSl9KSl9KSl9KSwoZnVuY3Rpb24odCl7aS5TPSExLGkubG9nZ2VyLmRlYnVnKFwiVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL29uY2VdXCIpLGkubG9nZ2VyLmVycm9yKHQpfSkpO3JldHVybiBQcm9taXNlLnJlc29sdmUodSYmdS50aGVuP3UudGhlbihlKTplKCkpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LHIuZG9QYWdlPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZGF0YSxyPXQudHJhbnNpdGlvbixlPXQucGFnZSxpPXQud3JhcHBlcjt0cnl7dmFyIG89ZnVuY3Rpb24odCl7aWYodSlyZXR1cm4gdDtmLlM9ITF9LHU9ITEsZj10aGlzLGM9cnx8e30sYT0hMD09PWMuc3luY3x8ITE7Zi5TPSEwO3ZhciBoPXMoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZi5qKFwiYmVmb3JlXCIsbixjKSkudGhlbigoZnVuY3Rpb24oKXt2YXIgdD0hMTtmdW5jdGlvbiByKHIpe3JldHVybiB0P3I6UHJvbWlzZS5yZXNvbHZlKGYucmVtb3ZlKG4pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZi5qKFwiYWZ0ZXJcIixuLGMpKS50aGVuKChmdW5jdGlvbigpe30pKX0pKX12YXIgbz1mdW5jdGlvbigpe2lmKGEpcmV0dXJuIHMoKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmFkZChuLGkpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZi5qKFwiYmVmb3JlTGVhdmVcIixuLGMpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZi5qKFwiYmVmb3JlRW50ZXJcIixuLGMpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoUHJvbWlzZS5hbGwoW2YubGVhdmUobixjKSxmLmVudGVyKG4sYyldKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuaihcImFmdGVyTGVhdmVcIixuLGMpKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZi5qKFwiYWZ0ZXJFbnRlclwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSkpfSkpfSkpfSkpfSkpfSksKGZ1bmN0aW9uKHQpe2lmKGYuTSh0KSl0aHJvdyBuZXcgaXQodCxcIlRyYW5zaXRpb24gZXJyb3IgW3N5bmNdXCIpfSkpO3ZhciByPWZ1bmN0aW9uKHIpe3JldHVybiB0P3I6cygoZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbigpe2lmKCExIT09bylyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuYWRkKG4saSkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJiZWZvcmVFbnRlclwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmVudGVyKG4sYyxvKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuaihcImFmdGVyRW50ZXJcIixuLGMpKS50aGVuKChmdW5jdGlvbigpe30pKX0pKX0pKX0pKX0oKTtpZih0JiZ0LnRoZW4pcmV0dXJuIHQudGhlbigoZnVuY3Rpb24oKXt9KSl9KSwoZnVuY3Rpb24odCl7aWYoZi5NKHQpKXRocm93IG5ldyBpdCh0LFwiVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2VudGVyXVwiKX0pKX0sbz0hMSx1PXMoKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShmLmooXCJiZWZvcmVMZWF2ZVwiLG4sYykpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShQcm9taXNlLmFsbChbZi5sZWF2ZShuLGMpLEwoZSxuKV0pLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiB0WzBdfSkpKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm4gbz10LFByb21pc2UucmVzb2x2ZShmLmooXCJhZnRlckxlYXZlXCIsbixjKSkudGhlbigoZnVuY3Rpb24oKXt9KSl9KSl9KSl9KSwoZnVuY3Rpb24odCl7aWYoZi5NKHQpKXRocm93IG5ldyBpdCh0LFwiVHJhbnNpdGlvbiBlcnJvciBbYmVmb3JlL2FmdGVyL2xlYXZlXVwiKX0pKTtyZXR1cm4gdSYmdS50aGVuP3UudGhlbihyKTpyKHUpfSgpO3JldHVybiBvJiZvLnRoZW4/by50aGVuKHIpOnIobyl9KSl9dmFyIHI9ZnVuY3Rpb24oKXtpZihhKXJldHVybiBQcm9taXNlLnJlc29sdmUoTChlLG4pKS50aGVuKChmdW5jdGlvbigpe30pKX0oKTtyZXR1cm4gciYmci50aGVuP3IudGhlbih0KTp0KCl9KSwoZnVuY3Rpb24odCl7aWYoZi5TPSExLHQubmFtZSYmXCJCYXJiYUVycm9yXCI9PT10Lm5hbWUpdGhyb3cgZi5sb2dnZXIuZGVidWcodC5sYWJlbCksZi5sb2dnZXIuZXJyb3IodC5lcnJvciksdDt0aHJvdyBmLmxvZ2dlci5kZWJ1ZyhcIlRyYW5zaXRpb24gZXJyb3IgW3BhZ2VdXCIpLGYubG9nZ2VyLmVycm9yKHQpLHR9KSk7cmV0dXJuIFByb21pc2UucmVzb2x2ZShoJiZoLnRoZW4/aC50aGVuKG8pOm8oaCkpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LHIub25jZT1mdW5jdGlvbih0LG4pe3RyeXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFguZG8oXCJvbmNlXCIsdCxuKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gbi5vbmNlP04obi5vbmNlLG4pKHQpOlByb21pc2UucmVzb2x2ZSgpfSkpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LHIubGVhdmU9ZnVuY3Rpb24odCxuKXt0cnl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShYLmRvKFwibGVhdmVcIix0LG4pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBuLmxlYXZlP04obi5sZWF2ZSxuKSh0KTpQcm9taXNlLnJlc29sdmUoKX0pKX1jYXRjaCh0KXtyZXR1cm4gUHJvbWlzZS5yZWplY3QodCl9fSxyLmVudGVyPWZ1bmN0aW9uKHQsbixyKXt0cnl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShYLmRvKFwiZW50ZXJcIix0LG4pKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBuLmVudGVyP04obi5lbnRlcixuKSh0LHIpOlByb21pc2UucmVzb2x2ZSgpfSkpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LHIuYWRkPWZ1bmN0aW9uKHQsbil7dHJ5e3JldHVybiBqLmFkZENvbnRhaW5lcih0Lm5leHQuY29udGFpbmVyLG4pLFguZG8oXCJuZXh0QWRkZWRcIix0KSxQcm9taXNlLnJlc29sdmUoKX1jYXRjaCh0KXtyZXR1cm4gUHJvbWlzZS5yZWplY3QodCl9fSxyLnJlbW92ZT1mdW5jdGlvbih0KXt0cnl7cmV0dXJuIGoucmVtb3ZlQ29udGFpbmVyKHQuY3VycmVudC5jb250YWluZXIpLFguZG8oXCJjdXJyZW50UmVtb3ZlZFwiLHQpLFByb21pc2UucmVzb2x2ZSgpfWNhdGNoKHQpe3JldHVybiBQcm9taXNlLnJlamVjdCh0KX19LHIuTT1mdW5jdGlvbih0KXtyZXR1cm4gdC5tZXNzYWdlPyEvVGltZW91dCBlcnJvcnxGZXRjaCBlcnJvci8udGVzdCh0Lm1lc3NhZ2UpOiF0LnN0YXR1c30sci5qPWZ1bmN0aW9uKHQsbixyKXt0cnl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShYLmRvKHQsbixyKSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gclt0XT9OKHJbdF0scikobik6UHJvbWlzZS5yZXNvbHZlKCl9KSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sbih0LFt7a2V5OlwiaXNSdW5uaW5nXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuU30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuUz10fX0se2tleTpcImhhc09uY2VcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdG9yZS5vbmNlLmxlbmd0aD4wfX0se2tleTpcImhhc1NlbGZcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zdG9yZS5hbGwuc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuXCJzZWxmXCI9PT10Lm5hbWV9KSl9fSx7a2V5Olwic2hvdWxkV2FpdFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnN0b3JlLmFsbC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gdC50byYmIXQudG8ucm91dGV8fHQuc3luY30pKX19XSksdH0oKSxmdD1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7dmFyIG49dGhpczt0aGlzLm5hbWVzPVtcImJlZm9yZUxlYXZlXCIsXCJhZnRlckxlYXZlXCIsXCJiZWZvcmVFbnRlclwiLFwiYWZ0ZXJFbnRlclwiXSx0aGlzLmJ5TmFtZXNwYWNlPW5ldyBNYXAsMCE9PXQubGVuZ3RoJiYodC5mb3JFYWNoKChmdW5jdGlvbih0KXtuLmJ5TmFtZXNwYWNlLnNldCh0Lm5hbWVzcGFjZSx0KX0pKSx0aGlzLm5hbWVzLmZvckVhY2goKGZ1bmN0aW9uKHQpe1hbdF0obi5MKHQpKX0pKSl9cmV0dXJuIHQucHJvdG90eXBlLkw9ZnVuY3Rpb24odCl7dmFyIG49dGhpcztyZXR1cm4gZnVuY3Rpb24ocil7dmFyIGU9dC5tYXRjaCgvZW50ZXIvaSk/ci5uZXh0OnIuY3VycmVudCxpPW4uYnlOYW1lc3BhY2UuZ2V0KGUubmFtZXNwYWNlKTtyZXR1cm4gaSYmaVt0XT9OKGlbdF0saSkocik6UHJvbWlzZS5yZXNvbHZlKCl9fSx0fSgpO0VsZW1lbnQucHJvdG90eXBlLm1hdGNoZXN8fChFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzPUVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yfHxFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IpLEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3R8fChFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0PWZ1bmN0aW9uKHQpe3ZhciBuPXRoaXM7ZG97aWYobi5tYXRjaGVzKHQpKXJldHVybiBuO249bi5wYXJlbnRFbGVtZW50fHxuLnBhcmVudE5vZGV9d2hpbGUobnVsbCE9PW4mJjE9PT1uLm5vZGVUeXBlKTtyZXR1cm4gbnVsbH0pO3ZhciBzdD17Y29udGFpbmVyOm51bGwsaHRtbDpcIlwiLG5hbWVzcGFjZTpcIlwiLHVybDp7aGFzaDpcIlwiLGhyZWY6XCJcIixwYXRoOlwiXCIscG9ydDpudWxsLHF1ZXJ5Ont9fX07cmV0dXJuIG5ldyhmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt0aGlzLnZlcnNpb249YSx0aGlzLnNjaGVtYVBhZ2U9c3QsdGhpcy5Mb2dnZXI9bCx0aGlzLmxvZ2dlcj1uZXcgbChcIkBiYXJiYS9jb3JlXCIpLHRoaXMucGx1Z2lucz1bXSx0aGlzLmhvb2tzPVgsdGhpcy5kb209aix0aGlzLmhlbHBlcnM9Xyx0aGlzLmhpc3Rvcnk9TSx0aGlzLnJlcXVlc3Q9SSx0aGlzLnVybD1IfXZhciBlPXQucHJvdG90eXBlO3JldHVybiBlLnVzZT1mdW5jdGlvbih0LG4pe3ZhciByPXRoaXMucGx1Z2lucztyLmluZGV4T2YodCk+LTE/dGhpcy5sb2dnZXIud2FybihcIlBsdWdpbiBbXCIrdC5uYW1lK1wiXSBhbHJlYWR5IGluc3RhbGxlZC5cIik6XCJmdW5jdGlvblwiPT10eXBlb2YgdC5pbnN0YWxsPyh0Lmluc3RhbGwodGhpcyxuKSxyLnB1c2godCkpOnRoaXMubG9nZ2VyLndhcm4oXCJQbHVnaW4gW1wiK3QubmFtZSsnXSBoYXMgbm8gXCJpbnN0YWxsXCIgbWV0aG9kLicpfSxlLmluaXQ9ZnVuY3Rpb24odCl7dmFyIG49dm9pZCAwPT09dD97fTp0LGU9bi50cmFuc2l0aW9ucyxpPXZvaWQgMD09PWU/W106ZSxvPW4udmlld3MsdT12b2lkIDA9PT1vP1tdOm8sZj1uLnNjaGVtYSxzPXZvaWQgMD09PWY/UzpmLGM9bi5yZXF1ZXN0RXJyb3IsYT1uLnRpbWVvdXQsaD12b2lkIDA9PT1hPzJlMzphLHY9bi5jYWNoZUlnbm9yZSxkPXZvaWQgMCE9PXYmJnYsbT1uLnByZWZldGNoSWdub3JlLHA9dm9pZCAwIT09bSYmbSx3PW4ucHJldmVudFJ1bm5pbmcsYj12b2lkIDAhPT13JiZ3LHk9bi5wcmV2ZW50LFA9dm9pZCAwPT09eT9udWxsOnksZz1uLmRlYnVnLEU9bi5sb2dMZXZlbDtpZihsLnNldExldmVsKCEwPT09KHZvaWQgMCE9PWcmJmcpP1wiZGVidWdcIjp2b2lkIDA9PT1FP1wib2ZmXCI6RSksdGhpcy5sb2dnZXIuaW5mbyh0aGlzLnZlcnNpb24pLE9iamVjdC5rZXlzKHMpLmZvckVhY2goKGZ1bmN0aW9uKHQpe1NbdF0mJihTW3RdPXNbdF0pfSkpLHRoaXMuJD1jLHRoaXMudGltZW91dD1oLHRoaXMuY2FjaGVJZ25vcmU9ZCx0aGlzLnByZWZldGNoSWdub3JlPXAsdGhpcy5wcmV2ZW50UnVubmluZz1iLHRoaXMuXz10aGlzLmRvbS5nZXRXcmFwcGVyKCksIXRoaXMuXyl0aHJvdyBuZXcgRXJyb3IoXCJbQGJhcmJhL2NvcmVdIE5vIEJhcmJhIHdyYXBwZXIgZm91bmRcIik7dGhpcy5fLnNldEF0dHJpYnV0ZShcImFyaWEtbGl2ZVwiLFwicG9saXRlXCIpLHRoaXMucSgpO3ZhciB4PXRoaXMuZGF0YS5jdXJyZW50O2lmKCF4LmNvbnRhaW5lcil0aHJvdyBuZXcgRXJyb3IoXCJbQGJhcmJhL2NvcmVdIE5vIEJhcmJhIGNvbnRhaW5lciBmb3VuZFwiKTtpZih0aGlzLmNhY2hlPW5ldyBHKGQpLHRoaXMucHJldmVudD1uZXcgZXQocCksdGhpcy50cmFuc2l0aW9ucz1uZXcgdXQoaSksdGhpcy52aWV3cz1uZXcgZnQodSksbnVsbCE9PVApe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIFApdGhyb3cgbmV3IEVycm9yKFwiW0BiYXJiYS9jb3JlXSBQcmV2ZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uXCIpO3RoaXMucHJldmVudC5hZGQoXCJwcmV2ZW50Q3VzdG9tXCIsUCl9dGhpcy5oaXN0b3J5LmluaXQoeC51cmwuaHJlZix4Lm5hbWVzcGFjZSksdGhpcy5CPXRoaXMuQi5iaW5kKHRoaXMpLHRoaXMuVT10aGlzLlUuYmluZCh0aGlzKSx0aGlzLkQ9dGhpcy5ELmJpbmQodGhpcyksdGhpcy5GKCksdGhpcy5wbHVnaW5zLmZvckVhY2goKGZ1bmN0aW9uKHQpe3JldHVybiB0LmluaXQoKX0pKTt2YXIgaz10aGlzLmRhdGE7ay50cmlnZ2VyPVwiYmFyYmFcIixrLm5leHQ9ay5jdXJyZW50LGsuY3VycmVudD1yKHt9LHRoaXMuc2NoZW1hUGFnZSksdGhpcy5ob29rcy5kbyhcInJlYWR5XCIsayksdGhpcy5vbmNlKGspLHRoaXMucSgpfSxlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLnEoKSx0aGlzLkgoKSx0aGlzLmhpc3RvcnkuY2xlYXIoKSx0aGlzLmhvb2tzLmNsZWFyKCksdGhpcy5wbHVnaW5zPVtdfSxlLmZvcmNlPWZ1bmN0aW9uKHQpe3dpbmRvdy5sb2NhdGlvbi5hc3NpZ24odCl9LGUuZ289ZnVuY3Rpb24odCxuLHIpe3ZhciBlO2lmKHZvaWQgMD09PW4mJihuPVwiYmFyYmFcIiksdGhpcy50cmFuc2l0aW9ucy5pc1J1bm5pbmcpdGhpcy5mb3JjZSh0KTtlbHNlIGlmKCEoZT1cInBvcHN0YXRlXCI9PT1uP3RoaXMuaGlzdG9yeS5jdXJyZW50JiZ0aGlzLnVybC5nZXRQYXRoKHRoaXMuaGlzdG9yeS5jdXJyZW50LnVybCk9PT10aGlzLnVybC5nZXRQYXRoKHQpOnRoaXMucHJldmVudC5ydW4oXCJzYW1lVXJsXCIsbnVsbCxudWxsLHQpKXx8dGhpcy50cmFuc2l0aW9ucy5oYXNTZWxmKXJldHVybiBuPXRoaXMuaGlzdG9yeS5jaGFuZ2UodCxuLHIpLHImJihyLnN0b3BQcm9wYWdhdGlvbigpLHIucHJldmVudERlZmF1bHQoKSksdGhpcy5wYWdlKHQsbixlKX0sZS5vbmNlPWZ1bmN0aW9uKHQpe3RyeXt2YXIgbj10aGlzO3JldHVybiBQcm9taXNlLnJlc29sdmUobi5ob29rcy5kbyhcImJlZm9yZUVudGVyXCIsdCkpLnRoZW4oKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcigpe3JldHVybiBQcm9taXNlLnJlc29sdmUobi5ob29rcy5kbyhcImFmdGVyRW50ZXJcIix0KSkudGhlbigoZnVuY3Rpb24oKXt9KSl9dmFyIGU9ZnVuY3Rpb24oKXtpZihuLnRyYW5zaXRpb25zLmhhc09uY2Upe3ZhciByPW4udHJhbnNpdGlvbnMuZ2V0KHQse29uY2U6ITB9KTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4udHJhbnNpdGlvbnMuZG9PbmNlKHt0cmFuc2l0aW9uOnIsZGF0YTp0fSkpLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfX0oKTtyZXR1cm4gZSYmZS50aGVuP2UudGhlbihyKTpyKCl9KSl9Y2F0Y2godCl7cmV0dXJuIFByb21pc2UucmVqZWN0KHQpfX0sZS5wYWdlPWZ1bmN0aW9uKHQsbixlKXt0cnl7dmFyIGk9ZnVuY3Rpb24oKXt2YXIgdD1vLmRhdGE7cmV0dXJuIFByb21pc2UucmVzb2x2ZShvLmhvb2tzLmRvKFwicGFnZVwiLHQpKS50aGVuKChmdW5jdGlvbigpe3ZhciBuPXMoKGZ1bmN0aW9uKCl7dmFyIG49by50cmFuc2l0aW9ucy5nZXQodCx7b25jZTohMSxzZWxmOmV9KTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG8udHJhbnNpdGlvbnMuZG9QYWdlKHtkYXRhOnQscGFnZTp1LHRyYW5zaXRpb246bix3cmFwcGVyOm8uX30pKS50aGVuKChmdW5jdGlvbigpe28ucSgpfSkpfSksKGZ1bmN0aW9uKCl7MD09PWwuZ2V0TGV2ZWwoKSYmby5mb3JjZSh0LmN1cnJlbnQudXJsLmhyZWYpfSkpO2lmKG4mJm4udGhlbilyZXR1cm4gbi50aGVuKChmdW5jdGlvbigpe30pKX0pKX0sbz10aGlzO28uZGF0YS5uZXh0LnVybD1yKHtocmVmOnR9LG8udXJsLnBhcnNlKHQpKSxvLmRhdGEudHJpZ2dlcj1uO3ZhciB1PW8uY2FjaGUuaGFzKHQpP28uY2FjaGUudXBkYXRlKHQse2FjdGlvbjpcImNsaWNrXCJ9KS5yZXF1ZXN0Om8uY2FjaGUuc2V0KHQsby5yZXF1ZXN0KHQsby50aW1lb3V0LG8ub25SZXF1ZXN0RXJyb3IuYmluZChvLG4pKSxcImNsaWNrXCIpLnJlcXVlc3QsZj1mdW5jdGlvbigpe2lmKG8udHJhbnNpdGlvbnMuc2hvdWxkV2FpdClyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKEwodSxvLmRhdGEpKS50aGVuKChmdW5jdGlvbigpe30pKX0oKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYmJmYudGhlbj9mLnRoZW4oaSk6aSgpKX1jYXRjaCh0KXtyZXR1cm4gUHJvbWlzZS5yZWplY3QodCl9fSxlLm9uUmVxdWVzdEVycm9yPWZ1bmN0aW9uKHQpe3RoaXMudHJhbnNpdGlvbnMuaXNSdW5uaW5nPSExO2Zvcih2YXIgbj1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KG4+MT9uLTE6MCksZT0xO2U8bjtlKyspcltlLTFdPWFyZ3VtZW50c1tlXTt2YXIgaT1yWzBdLG89clsxXSx1PXRoaXMuY2FjaGUuZ2V0QWN0aW9uKGkpO3JldHVybiB0aGlzLmNhY2hlLmRlbGV0ZShpKSwhKHRoaXMuJCYmITE9PT10aGlzLiQodCx1LGksbyl8fChcImNsaWNrXCI9PT11JiZ0aGlzLmZvcmNlKGkpLDEpKX0sZS5wcmVmZXRjaD1mdW5jdGlvbih0KXt2YXIgbj10aGlzO3RoaXMuY2FjaGUuaGFzKHQpfHx0aGlzLmNhY2hlLnNldCh0LHRoaXMucmVxdWVzdCh0LHRoaXMudGltZW91dCx0aGlzLm9uUmVxdWVzdEVycm9yLmJpbmQodGhpcyxcImJhcmJhXCIpKS5jYXRjaCgoZnVuY3Rpb24odCl7bi5sb2dnZXIuZXJyb3IodCl9KSksXCJwcmVmZXRjaFwiKX0sZS5GPWZ1bmN0aW9uKCl7ITAhPT10aGlzLnByZWZldGNoSWdub3JlJiYoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLHRoaXMuQiksZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0aGlzLkIpKSxkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0aGlzLlUpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIix0aGlzLkQpfSxlLkg9ZnVuY3Rpb24oKXshMCE9PXRoaXMucHJlZmV0Y2hJZ25vcmUmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsdGhpcy5CKSxkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMuQikpLGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRoaXMuVSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLHRoaXMuRCl9LGUuQj1mdW5jdGlvbih0KXt2YXIgbj10aGlzLHI9dGhpcy5JKHQpO2lmKHIpe3ZhciBlPXRoaXMuZG9tLmdldEhyZWYocik7dGhpcy5wcmV2ZW50LmNoZWNrSHJlZihlKXx8dGhpcy5jYWNoZS5oYXMoZSl8fHRoaXMuY2FjaGUuc2V0KGUsdGhpcy5yZXF1ZXN0KGUsdGhpcy50aW1lb3V0LHRoaXMub25SZXF1ZXN0RXJyb3IuYmluZCh0aGlzLHIpKS5jYXRjaCgoZnVuY3Rpb24odCl7bi5sb2dnZXIuZXJyb3IodCl9KSksXCJlbnRlclwiKX19LGUuVT1mdW5jdGlvbih0KXt2YXIgbj10aGlzLkkodCk7aWYobilyZXR1cm4gdGhpcy50cmFuc2l0aW9ucy5pc1J1bm5pbmcmJnRoaXMucHJldmVudFJ1bm5pbmc/KHQucHJldmVudERlZmF1bHQoKSx2b2lkIHQuc3RvcFByb3BhZ2F0aW9uKCkpOnZvaWQgdGhpcy5nbyh0aGlzLmRvbS5nZXRIcmVmKG4pLG4sdCl9LGUuRD1mdW5jdGlvbih0KXt0aGlzLmdvKHRoaXMudXJsLmdldEhyZWYoKSxcInBvcHN0YXRlXCIsdCl9LGUuST1mdW5jdGlvbih0KXtmb3IodmFyIG49dC50YXJnZXQ7biYmIXRoaXMuZG9tLmdldEhyZWYobik7KW49bi5wYXJlbnROb2RlO2lmKG4mJiF0aGlzLnByZXZlbnQuY2hlY2tMaW5rKG4sdCx0aGlzLmRvbS5nZXRIcmVmKG4pKSlyZXR1cm4gbn0sZS5xPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy51cmwuZ2V0SHJlZigpLG49e2NvbnRhaW5lcjp0aGlzLmRvbS5nZXRDb250YWluZXIoKSxodG1sOnRoaXMuZG9tLmdldEh0bWwoKSxuYW1lc3BhY2U6dGhpcy5kb20uZ2V0TmFtZXNwYWNlKCksdXJsOnIoe2hyZWY6dH0sdGhpcy51cmwucGFyc2UodCkpfTt0aGlzLkM9e2N1cnJlbnQ6bixuZXh0OnIoe30sdGhpcy5zY2hlbWFQYWdlKSx0cmlnZ2VyOnZvaWQgMH0sdGhpcy5ob29rcy5kbyhcInJlc2V0XCIsdGhpcy5kYXRhKX0sbih0LFt7a2V5OlwiZGF0YVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLkN9fSx7a2V5Olwid3JhcHBlclwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl99fV0pLHR9KCkpfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFyYmEudW1kLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xyXG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFNlcmdpdSDImGFuZG9yIChtaWNrdTd6dSkgb24gMS8yNy8yMDE3LlxyXG4gKiBPcmlnaW5hbCBpZGVhOiBodHRwczovL2dpdGh1Yi5jb20vZ2lqc3JvZ2UvdGlsdC5qc1xyXG4gKiBNSVQgTGljZW5zZS5cclxuICogVmVyc2lvbiAxLjcuMFxyXG4gKi9cclxuXHJcbnZhciBWYW5pbGxhVGlsdCA9IGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiBWYW5pbGxhVGlsdChlbGVtZW50KSB7XHJcbiAgICB2YXIgc2V0dGluZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xyXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgVmFuaWxsYVRpbHQpO1xyXG5cclxuICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSkge1xyXG4gICAgICB0aHJvdyBcIkNhbid0IGluaXRpYWxpemUgVmFuaWxsYVRpbHQgYmVjYXVzZSBcIiArIGVsZW1lbnQgKyBcIiBpcyBub3QgYSBOb2RlLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud2lkdGggPSBudWxsO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xyXG4gICAgdGhpcy5jbGllbnRXaWR0aCA9IG51bGw7XHJcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xyXG4gICAgdGhpcy50b3AgPSBudWxsO1xyXG5cclxuICAgIC8vIGZvciBHeXJvc2NvcGUgc2FtcGxpbmdcclxuICAgIHRoaXMuZ2FtbWF6ZXJvID0gbnVsbDtcclxuICAgIHRoaXMuYmV0YXplcm8gPSBudWxsO1xyXG4gICAgdGhpcy5sYXN0Z2FtbWF6ZXJvID0gbnVsbDtcclxuICAgIHRoaXMubGFzdGJldGF6ZXJvID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnRyYW5zaXRpb25UaW1lb3V0ID0gbnVsbDtcclxuICAgIHRoaXMudXBkYXRlQ2FsbCA9IG51bGw7XHJcbiAgICB0aGlzLmV2ZW50ID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUJpbmQgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5yZXNldEJpbmQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLmV4dGVuZFNldHRpbmdzKHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLnJldmVyc2UgPSB0aGlzLnNldHRpbmdzLnJldmVyc2UgPyAtMSA6IDE7XHJcbiAgICB0aGlzLmdsYXJlID0gVmFuaWxsYVRpbHQuaXNTZXR0aW5nVHJ1ZSh0aGlzLnNldHRpbmdzLmdsYXJlKTtcclxuICAgIHRoaXMuZ2xhcmVQcmVyZW5kZXIgPSBWYW5pbGxhVGlsdC5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3NbXCJnbGFyZS1wcmVyZW5kZXJcIl0pO1xyXG4gICAgdGhpcy5mdWxsUGFnZUxpc3RlbmluZyA9IFZhbmlsbGFUaWx0LmlzU2V0dGluZ1RydWUodGhpcy5zZXR0aW5nc1tcImZ1bGwtcGFnZS1saXN0ZW5pbmdcIl0pO1xyXG4gICAgdGhpcy5neXJvc2NvcGUgPSBWYW5pbGxhVGlsdC5pc1NldHRpbmdUcnVlKHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlKTtcclxuICAgIHRoaXMuZ3lyb3Njb3BlU2FtcGxlcyA9IHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlU2FtcGxlcztcclxuXHJcbiAgICB0aGlzLmVsZW1lbnRMaXN0ZW5lciA9IHRoaXMuZ2V0RWxlbWVudExpc3RlbmVyKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2xhcmUpIHtcclxuICAgICAgdGhpcy5wcmVwYXJlR2xhcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5mdWxsUGFnZUxpc3RlbmluZykge1xyXG4gICAgICB0aGlzLnVwZGF0ZUNsaWVudFNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLnVwZGF0ZUluaXRpYWxQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgVmFuaWxsYVRpbHQuaXNTZXR0aW5nVHJ1ZSA9IGZ1bmN0aW9uIGlzU2V0dGluZ1RydWUoc2V0dGluZykge1xyXG4gICAgcmV0dXJuIHNldHRpbmcgPT09IFwiXCIgfHwgc2V0dGluZyA9PT0gdHJ1ZSB8fCBzZXR0aW5nID09PSAxO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCByZXR1cm5zIGVsZW1lbnQgd2hhdCB3aWxsIGJlIGxpc3RlbiBtb3VzZSBldmVudHNcclxuICAgKiBAcmV0dXJuIHtOb2RlfVxyXG4gICAqL1xyXG5cclxuXHJcbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLmdldEVsZW1lbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGdldEVsZW1lbnRMaXN0ZW5lcigpIHtcclxuICAgIGlmICh0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nKSB7XHJcbiAgICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNldHRpbmdzW1wibW91c2UtZXZlbnQtZWxlbWVudFwiXSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICB2YXIgbW91c2VFdmVudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3NbXCJtb3VzZS1ldmVudC1lbGVtZW50XCJdKTtcclxuXHJcbiAgICAgIGlmIChtb3VzZUV2ZW50RWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBtb3VzZUV2ZW50RWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzW1wibW91c2UtZXZlbnQtZWxlbWVudFwiXSBpbnN0YW5jZW9mIE5vZGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ3NbXCJtb3VzZS1ldmVudC1lbGVtZW50XCJdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHNldCBsaXN0ZW4gbWV0aG9kcyBmb3IgdGhpcy5lbGVtZW50TGlzdGVuZXJcclxuICAgKiBAcmV0dXJuIHtOb2RlfVxyXG4gICAqL1xyXG5cclxuXHJcbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLm9uTW91c2VFbnRlckJpbmQgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbk1vdXNlTW92ZUJpbmQgPSB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTW91c2VMZWF2ZUJpbmQgPSB0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5vbldpbmRvd1Jlc2l6ZUJpbmQgPSB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb25CaW5kID0gdGhpcy5vbkRldmljZU9yaWVudGF0aW9uLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50TGlzdGVuZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbk1vdXNlRW50ZXJCaW5kKTtcclxuICAgIHRoaXMuZWxlbWVudExpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlQmluZCk7XHJcbiAgICB0aGlzLmVsZW1lbnRMaXN0ZW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmVCaW5kKTtcclxuXHJcbiAgICBpZiAodGhpcy5nbGFyZSB8fCB0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25XaW5kb3dSZXNpemVCaW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5neXJvc2NvcGUpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb25CaW5kKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBmcm9tIGN1cnJlbnQgdGhpcy5lbGVtZW50TGlzdGVuZXJcclxuICAgKi9cclxuXHJcblxyXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5lbGVtZW50TGlzdGVuZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgdGhpcy5vbk1vdXNlRW50ZXJCaW5kKTtcclxuICAgIHRoaXMuZWxlbWVudExpc3RlbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25Nb3VzZUxlYXZlQmluZCk7XHJcbiAgICB0aGlzLmVsZW1lbnRMaXN0ZW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmVCaW5kKTtcclxuXHJcbiAgICBpZiAodGhpcy5neXJvc2NvcGUpIHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJkZXZpY2VvcmllbnRhdGlvblwiLCB0aGlzLm9uRGV2aWNlT3JpZW50YXRpb25CaW5kKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5nbGFyZSB8fCB0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nKSB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25XaW5kb3dSZXNpemVCaW5kKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy50cmFuc2l0aW9uVGltZW91dCk7XHJcbiAgICBpZiAodGhpcy51cGRhdGVDYWxsICE9PSBudWxsKSB7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQ2FsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuZWxlbWVudC52YW5pbGxhVGlsdCA9IG51bGw7XHJcbiAgICBkZWxldGUgdGhpcy5lbGVtZW50LnZhbmlsbGFUaWx0O1xyXG5cclxuICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLm9uRGV2aWNlT3JpZW50YXRpb24gPSBmdW5jdGlvbiBvbkRldmljZU9yaWVudGF0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuZ2FtbWEgPT09IG51bGwgfHwgZXZlbnQuYmV0YSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVFbGVtZW50UG9zaXRpb24oKTtcclxuXHJcbiAgICBpZiAodGhpcy5neXJvc2NvcGVTYW1wbGVzID4gMCkge1xyXG4gICAgICB0aGlzLmxhc3RnYW1tYXplcm8gPSB0aGlzLmdhbW1hemVybztcclxuICAgICAgdGhpcy5sYXN0YmV0YXplcm8gPSB0aGlzLmJldGF6ZXJvO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZ2FtbWF6ZXJvID09PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5nYW1tYXplcm8gPSBldmVudC5nYW1tYTtcclxuICAgICAgICB0aGlzLmJldGF6ZXJvID0gZXZlbnQuYmV0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmdhbW1hemVybyA9IChldmVudC5nYW1tYSArIHRoaXMubGFzdGdhbW1hemVybykgLyAyO1xyXG4gICAgICAgIHRoaXMuYmV0YXplcm8gPSAoZXZlbnQuYmV0YSArIHRoaXMubGFzdGJldGF6ZXJvKSAvIDI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ3lyb3Njb3BlU2FtcGxlcyAtPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0b3RhbEFuZ2xlWCA9IHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlTWF4QW5nbGVYIC0gdGhpcy5zZXR0aW5ncy5neXJvc2NvcGVNaW5BbmdsZVg7XHJcbiAgICB2YXIgdG90YWxBbmdsZVkgPSB0aGlzLnNldHRpbmdzLmd5cm9zY29wZU1heEFuZ2xlWSAtIHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlTWluQW5nbGVZO1xyXG5cclxuICAgIHZhciBkZWdyZWVzUGVyUGl4ZWxYID0gdG90YWxBbmdsZVggLyB0aGlzLndpZHRoO1xyXG4gICAgdmFyIGRlZ3JlZXNQZXJQaXhlbFkgPSB0b3RhbEFuZ2xlWSAvIHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgIHZhciBhbmdsZVggPSBldmVudC5nYW1tYSAtICh0aGlzLnNldHRpbmdzLmd5cm9zY29wZU1pbkFuZ2xlWCArIHRoaXMuZ2FtbWF6ZXJvKTtcclxuICAgIHZhciBhbmdsZVkgPSBldmVudC5iZXRhIC0gKHRoaXMuc2V0dGluZ3MuZ3lyb3Njb3BlTWluQW5nbGVZICsgdGhpcy5iZXRhemVybyk7XHJcblxyXG4gICAgdmFyIHBvc1ggPSBhbmdsZVggLyBkZWdyZWVzUGVyUGl4ZWxYO1xyXG4gICAgdmFyIHBvc1kgPSBhbmdsZVkgLyBkZWdyZWVzUGVyUGl4ZWxZO1xyXG5cclxuICAgIGlmICh0aGlzLnVwZGF0ZUNhbGwgIT09IG51bGwpIHtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVDYWxsKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmV2ZW50ID0ge1xyXG4gICAgICBjbGllbnRYOiBwb3NYICsgdGhpcy5sZWZ0LFxyXG4gICAgICBjbGllbnRZOiBwb3NZICsgdGhpcy50b3BcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy51cGRhdGVDYWxsID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQmluZCk7XHJcbiAgfTtcclxuXHJcbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLm9uTW91c2VFbnRlciA9IGZ1bmN0aW9uIG9uTW91c2VFbnRlcigpIHtcclxuICAgIHRoaXMudXBkYXRlRWxlbWVudFBvc2l0aW9uKCk7XHJcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lsbENoYW5nZSA9IFwidHJhbnNmb3JtXCI7XHJcbiAgICB0aGlzLnNldFRyYW5zaXRpb24oKTtcclxuICB9O1xyXG5cclxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xyXG4gICAgaWYgKHRoaXMudXBkYXRlQ2FsbCAhPT0gbnVsbCkge1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUNhbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXZlbnQgPSBldmVudDtcclxuICAgIHRoaXMudXBkYXRlQ2FsbCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZUJpbmQpO1xyXG4gIH07XHJcblxyXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICB0aGlzLnNldFRyYW5zaXRpb24oKTtcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5yZXNldCkge1xyXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZXNldEJpbmQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIHJlc2V0KCkge1xyXG4gICAgdGhpcy5ldmVudCA9IHtcclxuICAgICAgY2xpZW50WDogdGhpcy5sZWZ0ICsgdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgIGNsaWVudFk6IHRoaXMudG9wICsgdGhpcy5oZWlnaHQgLyAyXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LnN0eWxlKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInBlcnNwZWN0aXZlKFwiICsgdGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZSArIFwicHgpIFwiICsgXCJyb3RhdGVYKDBkZWcpIFwiICsgXCJyb3RhdGVZKDBkZWcpIFwiICsgXCJzY2FsZTNkKDEsIDEsIDEpXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXNldEdsYXJlKCk7XHJcbiAgfTtcclxuXHJcbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLnJlc2V0R2xhcmUgPSBmdW5jdGlvbiByZXNldEdsYXJlKCkge1xyXG4gICAgaWYgKHRoaXMuZ2xhcmUpIHtcclxuICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIjtcclxuICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS51cGRhdGVJbml0aWFsUG9zaXRpb24gPSBmdW5jdGlvbiB1cGRhdGVJbml0aWFsUG9zaXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zdGFydFggPT09IDAgJiYgdGhpcy5zZXR0aW5ncy5zdGFydFkgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25Nb3VzZUVudGVyKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuZnVsbFBhZ2VMaXN0ZW5pbmcpIHtcclxuICAgICAgdGhpcy5ldmVudCA9IHtcclxuICAgICAgICBjbGllbnRYOiAodGhpcy5zZXR0aW5ncy5zdGFydFggKyB0aGlzLnNldHRpbmdzLm1heCkgLyAoMiAqIHRoaXMuc2V0dGluZ3MubWF4KSAqIHRoaXMuY2xpZW50V2lkdGgsXHJcbiAgICAgICAgY2xpZW50WTogKHRoaXMuc2V0dGluZ3Muc3RhcnRZICsgdGhpcy5zZXR0aW5ncy5tYXgpIC8gKDIgKiB0aGlzLnNldHRpbmdzLm1heCkgKiB0aGlzLmNsaWVudEhlaWdodFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ldmVudCA9IHtcclxuICAgICAgICBjbGllbnRYOiB0aGlzLmxlZnQgKyAodGhpcy5zZXR0aW5ncy5zdGFydFggKyB0aGlzLnNldHRpbmdzLm1heCkgLyAoMiAqIHRoaXMuc2V0dGluZ3MubWF4KSAqIHRoaXMud2lkdGgsXHJcbiAgICAgICAgY2xpZW50WTogdGhpcy50b3AgKyAodGhpcy5zZXR0aW5ncy5zdGFydFkgKyB0aGlzLnNldHRpbmdzLm1heCkgLyAoMiAqIHRoaXMuc2V0dGluZ3MubWF4KSAqIHRoaXMuaGVpZ2h0XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJhY2t1cFNjYWxlID0gdGhpcy5zZXR0aW5ncy5zY2FsZTtcclxuICAgIHRoaXMuc2V0dGluZ3Muc2NhbGUgPSAxO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHRoaXMuc2V0dGluZ3Muc2NhbGUgPSBiYWNrdXBTY2FsZTtcclxuICAgIHRoaXMucmVzZXRHbGFyZSgpO1xyXG4gIH07XHJcblxyXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5nZXRWYWx1ZXMgPSBmdW5jdGlvbiBnZXRWYWx1ZXMoKSB7XHJcbiAgICB2YXIgeCA9IHZvaWQgMCxcclxuICAgICAgICB5ID0gdm9pZCAwO1xyXG5cclxuICAgIGlmICh0aGlzLmZ1bGxQYWdlTGlzdGVuaW5nKSB7XHJcbiAgICAgIHggPSB0aGlzLmV2ZW50LmNsaWVudFggLyB0aGlzLmNsaWVudFdpZHRoO1xyXG4gICAgICB5ID0gdGhpcy5ldmVudC5jbGllbnRZIC8gdGhpcy5jbGllbnRIZWlnaHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB4ID0gKHRoaXMuZXZlbnQuY2xpZW50WCAtIHRoaXMubGVmdCkgLyB0aGlzLndpZHRoO1xyXG4gICAgICB5ID0gKHRoaXMuZXZlbnQuY2xpZW50WSAtIHRoaXMudG9wKSAvIHRoaXMuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHggPSBNYXRoLm1pbihNYXRoLm1heCh4LCAwKSwgMSk7XHJcbiAgICB5ID0gTWF0aC5taW4oTWF0aC5tYXgoeSwgMCksIDEpO1xyXG5cclxuICAgIHZhciB0aWx0WCA9ICh0aGlzLnJldmVyc2UgKiAodGhpcy5zZXR0aW5ncy5tYXggLSB4ICogdGhpcy5zZXR0aW5ncy5tYXggKiAyKSkudG9GaXhlZCgyKTtcclxuICAgIHZhciB0aWx0WSA9ICh0aGlzLnJldmVyc2UgKiAoeSAqIHRoaXMuc2V0dGluZ3MubWF4ICogMiAtIHRoaXMuc2V0dGluZ3MubWF4KSkudG9GaXhlZCgyKTtcclxuICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIodGhpcy5ldmVudC5jbGllbnRYIC0gKHRoaXMubGVmdCArIHRoaXMud2lkdGggLyAyKSwgLSh0aGlzLmV2ZW50LmNsaWVudFkgLSAodGhpcy50b3AgKyB0aGlzLmhlaWdodCAvIDIpKSkgKiAoMTgwIC8gTWF0aC5QSSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGlsdFg6IHRpbHRYLFxyXG4gICAgICB0aWx0WTogdGlsdFksXHJcbiAgICAgIHBlcmNlbnRhZ2VYOiB4ICogMTAwLFxyXG4gICAgICBwZXJjZW50YWdlWTogeSAqIDEwMCxcclxuICAgICAgYW5nbGU6IGFuZ2xlXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS51cGRhdGVFbGVtZW50UG9zaXRpb24gPSBmdW5jdGlvbiB1cGRhdGVFbGVtZW50UG9zaXRpb24oKSB7XHJcbiAgICB2YXIgcmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgdGhpcy5sZWZ0ID0gcmVjdC5sZWZ0O1xyXG4gICAgdGhpcy50b3AgPSByZWN0LnRvcDtcclxuICB9O1xyXG5cclxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuZ2V0VmFsdWVzKCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwicGVyc3BlY3RpdmUoXCIgKyB0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlICsgXCJweCkgXCIgKyBcInJvdGF0ZVgoXCIgKyAodGhpcy5zZXR0aW5ncy5heGlzID09PSBcInhcIiA/IDAgOiB2YWx1ZXMudGlsdFkpICsgXCJkZWcpIFwiICsgXCJyb3RhdGVZKFwiICsgKHRoaXMuc2V0dGluZ3MuYXhpcyA9PT0gXCJ5XCIgPyAwIDogdmFsdWVzLnRpbHRYKSArIFwiZGVnKSBcIiArIFwic2NhbGUzZChcIiArIHRoaXMuc2V0dGluZ3Muc2NhbGUgKyBcIiwgXCIgKyB0aGlzLnNldHRpbmdzLnNjYWxlICsgXCIsIFwiICsgdGhpcy5zZXR0aW5ncy5zY2FsZSArIFwiKVwiO1xyXG5cclxuICAgIGlmICh0aGlzLmdsYXJlKSB7XHJcbiAgICAgIHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKFwiICsgdmFsdWVzLmFuZ2xlICsgXCJkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiO1xyXG4gICAgICB0aGlzLmdsYXJlRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCJcIiArIHZhbHVlcy5wZXJjZW50YWdlWSAqIHRoaXMuc2V0dGluZ3NbXCJtYXgtZ2xhcmVcIl0gLyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwidGlsdENoYW5nZVwiLCB7XHJcbiAgICAgIFwiZGV0YWlsXCI6IHZhbHVlc1xyXG4gICAgfSkpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2FsbCA9IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQXBwZW5kcyB0aGUgZ2xhcmUgZWxlbWVudCAoaWYgZ2xhcmVQcmVyZW5kZXIgZXF1YWxzIGZhbHNlKVxyXG4gICAqIGFuZCBzZXRzIHRoZSBkZWZhdWx0IHN0eWxlXHJcbiAgICovXHJcblxyXG5cclxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUucHJlcGFyZUdsYXJlID0gZnVuY3Rpb24gcHJlcGFyZUdsYXJlKCkge1xyXG4gICAgLy8gSWYgb3B0aW9uIHByZS1yZW5kZXIgaXMgZW5hYmxlZCB3ZSBhc3N1bWUgYWxsIGh0bWwvY3NzIGlzIHByZXNlbnQgZm9yIGFuIG9wdGltYWwgZ2xhcmUgZWZmZWN0LlxyXG4gICAgaWYgKCF0aGlzLmdsYXJlUHJlcmVuZGVyKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBnbGFyZSBlbGVtZW50XHJcbiAgICAgIHZhciBqc1RpbHRHbGFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGpzVGlsdEdsYXJlLmNsYXNzTGlzdC5hZGQoXCJqcy10aWx0LWdsYXJlXCIpO1xyXG5cclxuICAgICAgdmFyIGpzVGlsdEdsYXJlSW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBqc1RpbHRHbGFyZUlubmVyLmNsYXNzTGlzdC5hZGQoXCJqcy10aWx0LWdsYXJlLWlubmVyXCIpO1xyXG5cclxuICAgICAganNUaWx0R2xhcmUuYXBwZW5kQ2hpbGQoanNUaWx0R2xhcmVJbm5lcik7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChqc1RpbHRHbGFyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nbGFyZUVsZW1lbnRXcmFwcGVyID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGlsdC1nbGFyZVwiKTtcclxuICAgIHRoaXMuZ2xhcmVFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtdGlsdC1nbGFyZS1pbm5lclwiKTtcclxuXHJcbiAgICBpZiAodGhpcy5nbGFyZVByZXJlbmRlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLmdsYXJlRWxlbWVudFdyYXBwZXIuc3R5bGUsIHtcclxuICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXHJcbiAgICAgIFwidG9wXCI6IFwiMFwiLFxyXG4gICAgICBcImxlZnRcIjogXCIwXCIsXHJcbiAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXHJcbiAgICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxyXG4gICAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXHJcbiAgICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCJcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUsIHtcclxuICAgICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXHJcbiAgICAgIFwidG9wXCI6IFwiNTAlXCIsXHJcbiAgICAgIFwibGVmdFwiOiBcIjUwJVwiLFxyXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiLFxyXG4gICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAxMDAlKVwiLFxyXG4gICAgICBcIndpZHRoXCI6IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCAqIDIgKyBcInB4XCIsXHJcbiAgICAgIFwiaGVpZ2h0XCI6IHRoaXMuZWxlbWVudC5vZmZzZXRXaWR0aCAqIDIgKyBcInB4XCIsXHJcbiAgICAgIFwidHJhbnNmb3JtXCI6IFwicm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICAgIFwidHJhbnNmb3JtLW9yaWdpblwiOiBcIjAlIDAlXCIsXHJcbiAgICAgIFwib3BhY2l0eVwiOiBcIjBcIlxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgVmFuaWxsYVRpbHQucHJvdG90eXBlLnVwZGF0ZUdsYXJlU2l6ZSA9IGZ1bmN0aW9uIHVwZGF0ZUdsYXJlU2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmdsYXJlKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5nbGFyZUVsZW1lbnQuc3R5bGUsIHtcclxuICAgICAgICBcIndpZHRoXCI6IFwiXCIgKyB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGggKiAyLFxyXG4gICAgICAgIFwiaGVpZ2h0XCI6IFwiXCIgKyB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGggKiAyXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS51cGRhdGVDbGllbnRTaXplID0gZnVuY3Rpb24gdXBkYXRlQ2xpZW50U2l6ZSgpIHtcclxuICAgIHRoaXMuY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuXHJcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG4gIH07XHJcblxyXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xyXG4gICAgdGhpcy51cGRhdGVHbGFyZVNpemUoKTtcclxuICAgIHRoaXMudXBkYXRlQ2xpZW50U2l6ZSgpO1xyXG4gIH07XHJcblxyXG4gIFZhbmlsbGFUaWx0LnByb3RvdHlwZS5zZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24gc2V0VHJhbnNpdGlvbigpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudHJhbnNpdGlvblRpbWVvdXQpO1xyXG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnNldHRpbmdzLnNwZWVkICsgXCJtcyBcIiArIHRoaXMuc2V0dGluZ3MuZWFzaW5nO1xyXG4gICAgaWYgKHRoaXMuZ2xhcmUpIHRoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgXCIgKyB0aGlzLnNldHRpbmdzLnNwZWVkICsgXCJtcyBcIiArIHRoaXMuc2V0dGluZ3MuZWFzaW5nO1xyXG5cclxuICAgIHRoaXMudHJhbnNpdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgX3RoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJcIjtcclxuICAgICAgaWYgKF90aGlzLmdsYXJlKSB7XHJcbiAgICAgICAgX3RoaXMuZ2xhcmVFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiO1xyXG4gICAgICB9XHJcbiAgICB9LCB0aGlzLnNldHRpbmdzLnNwZWVkKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgcmV0dXJuIHBhdGNoZWQgc2V0dGluZ3Mgb2YgaW5zdGFuY2VcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNldHRpbmdzLnJldmVyc2UgLSByZXZlcnNlIHRoZSB0aWx0IGRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZXR0aW5ncy5tYXggLSBtYXggdGlsdCByb3RhdGlvbiAoZGVncmVlcylcclxuICAgKiBAcGFyYW0ge3N0YXJ0WH0gc2V0dGluZ3Muc3RhcnRYIC0gdGhlIHN0YXJ0aW5nIHRpbHQgb24gdGhlIFggYXhpcywgaW4gZGVncmVlcy4gRGVmYXVsdDogMFxyXG4gICAqIEBwYXJhbSB7c3RhcnRZfSBzZXR0aW5ncy5zdGFydFkgLSB0aGUgc3RhcnRpbmcgdGlsdCBvbiB0aGUgWSBheGlzLCBpbiBkZWdyZWVzLiBEZWZhdWx0OiAwXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNldHRpbmdzLnBlcnNwZWN0aXZlIC0gVHJhbnNmb3JtIHBlcnNwZWN0aXZlLCB0aGUgbG93ZXIgdGhlIG1vcmUgZXh0cmVtZSB0aGUgdGlsdCBnZXRzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNldHRpbmdzLmVhc2luZyAtIEVhc2luZyBvbiBlbnRlci9leGl0XHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNldHRpbmdzLnNjYWxlIC0gMiA9IDIwMCUsIDEuNSA9IDE1MCUsIGV0Yy4uXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNldHRpbmdzLnNwZWVkIC0gU3BlZWQgb2YgdGhlIGVudGVyL2V4aXQgdHJhbnNpdGlvblxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2V0dGluZ3MudHJhbnNpdGlvbiAtIFNldCBhIHRyYW5zaXRpb24gb24gZW50ZXIvZXhpdFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IHNldHRpbmdzLmF4aXMgLSBXaGF0IGF4aXMgc2hvdWxkIGJlIGRpc2FibGVkLiBDYW4gYmUgWCBvciBZXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5ncy5nbGFyZSAtIFdoYXQgYXhpcyBzaG91bGQgYmUgZGlzYWJsZWQuIENhbiBiZSBYIG9yIFlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gc2V0dGluZ3MubWF4LWdsYXJlIC0gdGhlIG1heGltdW0gXCJnbGFyZVwiIG9wYWNpdHkgKDEgPSAxMDAlLCAwLjUgPSA1MCUpXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5ncy5nbGFyZS1wcmVyZW5kZXIgLSBmYWxzZSA9IFZhbmlsbGFUaWx0IGNyZWF0ZXMgdGhlIGdsYXJlIGVsZW1lbnRzIGZvciB5b3UsIG90aGVyd2lzZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2V0dGluZ3MuZnVsbC1wYWdlLWxpc3RlbmluZyAtIElmIHRydWUsIHBhcmFsbGF4IGVmZmVjdCB3aWxsIGxpc3RlbiB0byBtb3VzZSBtb3ZlIGV2ZW50cyBvbiB0aGUgd2hvbGUgZG9jdW1lbnQsIG5vdCBvbmx5IHRoZSBzZWxlY3RlZCBlbGVtZW50XHJcbiAgICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBzZXR0aW5ncy5tb3VzZS1ldmVudC1lbGVtZW50IC0gU3RyaW5nIHNlbGVjdG9yIG9yIGxpbmsgdG8gSFRNTC1lbGVtZW50IHdoYXQgd2lsbCBiZSBsaXN0ZW4gbW91c2UgZXZlbnRzXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBzZXR0aW5ncy5yZXNldCAtIGZhbHNlID0gSWYgdGhlIHRpbHQgZWZmZWN0IGhhcyB0byBiZSByZXNldCBvbiBleGl0XHJcbiAgICogQHBhcmFtIHtneXJvc2NvcGV9IHNldHRpbmdzLmd5cm9zY29wZSAtIEVuYWJsZSB0aWx0aW5nIGJ5IGRldmljZW9yaWVudGF0aW9uIGV2ZW50c1xyXG4gICAqIEBwYXJhbSB7Z3lyb3Njb3BlU2Vuc2l0aXZpdHl9IHNldHRpbmdzLmd5cm9zY29wZVNlbnNpdGl2aXR5IC0gQmV0d2VlbiAwIGFuZCAxIC0gVGhlIGFuZ2xlIGF0IHdoaWNoIG1heCB0aWx0IHBvc2l0aW9uIGlzIHJlYWNoZWQuIDEgPSA5MGRlZywgMC41ID0gNDVkZWcsIGV0Yy4uXHJcbiAgICogQHBhcmFtIHtneXJvc2NvcGVTYW1wbGVzfSBzZXR0aW5ncy5neXJvc2NvcGVTYW1wbGVzIC0gSG93IG1hbnkgZ3lyb3Njb3BlIG1vdmVzIHRvIGRlY2lkZSB0aGUgc3RhcnRpbmcgcG9zaXRpb24uXHJcbiAgICovXHJcblxyXG5cclxuICBWYW5pbGxhVGlsdC5wcm90b3R5cGUuZXh0ZW5kU2V0dGluZ3MgPSBmdW5jdGlvbiBleHRlbmRTZXR0aW5ncyhzZXR0aW5ncykge1xyXG4gICAgdmFyIGRlZmF1bHRTZXR0aW5ncyA9IHtcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgIG1heDogMTUsXHJcbiAgICAgIHN0YXJ0WDogMCxcclxuICAgICAgc3RhcnRZOiAwLFxyXG4gICAgICBwZXJzcGVjdGl2ZTogMTAwMCxcclxuICAgICAgZWFzaW5nOiBcImN1YmljLWJlemllciguMDMsLjk4LC41MiwuOTkpXCIsXHJcbiAgICAgIHNjYWxlOiAxLFxyXG4gICAgICBzcGVlZDogMzAwLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0cnVlLFxyXG4gICAgICBheGlzOiBudWxsLFxyXG4gICAgICBnbGFyZTogZmFsc2UsXHJcbiAgICAgIFwibWF4LWdsYXJlXCI6IDEsXHJcbiAgICAgIFwiZ2xhcmUtcHJlcmVuZGVyXCI6IGZhbHNlLFxyXG4gICAgICBcImZ1bGwtcGFnZS1saXN0ZW5pbmdcIjogZmFsc2UsXHJcbiAgICAgIFwibW91c2UtZXZlbnQtZWxlbWVudFwiOiBudWxsLFxyXG4gICAgICByZXNldDogdHJ1ZSxcclxuICAgICAgZ3lyb3Njb3BlOiB0cnVlLFxyXG4gICAgICBneXJvc2NvcGVNaW5BbmdsZVg6IC00NSxcclxuICAgICAgZ3lyb3Njb3BlTWF4QW5nbGVYOiA0NSxcclxuICAgICAgZ3lyb3Njb3BlTWluQW5nbGVZOiAtNDUsXHJcbiAgICAgIGd5cm9zY29wZU1heEFuZ2xlWTogNDUsXHJcbiAgICAgIGd5cm9zY29wZVNhbXBsZXM6IDEwXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBuZXdTZXR0aW5ncyA9IHt9O1xyXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGVmYXVsdFNldHRpbmdzKSB7XHJcbiAgICAgIGlmIChwcm9wZXJ0eSBpbiBzZXR0aW5ncykge1xyXG4gICAgICAgIG5ld1NldHRpbmdzW3Byb3BlcnR5XSA9IHNldHRpbmdzW3Byb3BlcnR5XTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS10aWx0LVwiICsgcHJvcGVydHkpKSB7XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRpbHQtXCIgKyBwcm9wZXJ0eSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIG5ld1NldHRpbmdzW3Byb3BlcnR5XSA9IEpTT04ucGFyc2UoYXR0cmlidXRlKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBuZXdTZXR0aW5nc1twcm9wZXJ0eV0gPSBhdHRyaWJ1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld1NldHRpbmdzW3Byb3BlcnR5XSA9IGRlZmF1bHRTZXR0aW5nc1twcm9wZXJ0eV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3U2V0dGluZ3M7XHJcbiAgfTtcclxuXHJcbiAgVmFuaWxsYVRpbHQuaW5pdCA9IGZ1bmN0aW9uIGluaXQoZWxlbWVudHMsIHNldHRpbmdzKSB7XHJcbiAgICBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBOb2RlKSB7XHJcbiAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xyXG4gICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZWxlbWVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghKGVsZW1lbnRzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgIGlmICghKFwidmFuaWxsYVRpbHRcIiBpbiBlbGVtZW50KSkge1xyXG4gICAgICAgIGVsZW1lbnQudmFuaWxsYVRpbHQgPSBuZXcgVmFuaWxsYVRpbHQoZWxlbWVudCwgc2V0dGluZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gVmFuaWxsYVRpbHQ7XHJcbn0oKTtcclxuXHJcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAvKiBleHBvc2UgdGhlIGNsYXNzIHRvIHdpbmRvdyAqL1xyXG4gIHdpbmRvdy5WYW5pbGxhVGlsdCA9IFZhbmlsbGFUaWx0O1xyXG5cclxuICAvKipcclxuICAgKiBBdXRvIGxvYWRcclxuICAgKi9cclxuICBWYW5pbGxhVGlsdC5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10aWx0XVwiKSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVmFuaWxsYVRpbHQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=