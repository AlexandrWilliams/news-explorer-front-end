!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=113)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(59))},function(t,e,n){var r=n(0),o=n(38),i=n(4),c=n(39),a=n(43),u=n(72),s=o("wks"),l=r.Symbol,p=u?l:l&&l.withoutSetter||c;t.exports=function(t){return i(s,t)||(a&&i(l,t)?s[t]=l[t]:s[t]=p("Symbol."+t)),s[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(2);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(5),o=n(9),i=n(13);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(5),o=n(36),i=n(3),c=n(22),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(7),i=n(4),c=n(24),a=n(25),u=n(26),s=u.get,l=u.enforce,p=String(String).split("String");(t.exports=function(t,e,n,a){var u=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(u?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,e,n){var r=n(0),o=n(20).f,i=n(7),c=n(10),a=n(24),u=n(62),s=n(41);t.exports=function(t,e){var n,l,p,f,v,d=t.target,h=t.global,m=t.stat;if(n=h?r:m?r[d]||a(d,{}):(r[d]||{}).prototype)for(l in e){if(f=e[l],p=t.noTargetGet?(v=o(n,l))&&v.value:n[l],!s(h?l:d+(m?".":"#")+l,t.forced)&&void 0!==p){if(typeof f==typeof p)continue;u(f,p)}(t.sham||p&&p.sham)&&i(f,"sham",!0),c(n,l,f,t)}}},function(t,e,n){var r=n(64),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=!1},function(t,e,n){var r=n(29),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e){t.exports={}},function(t,e,n){var r=n(5),o=n(60),i=n(13),c=n(21),a=n(22),u=n(4),s=n(36),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=c(t),e=a(e,!0),s)try{return l(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(35),o=n(14);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(0),o=n(6),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(7);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(37),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r,o,i,c=n(61),a=n(0),u=n(6),s=n(7),l=n(4),p=n(27),f=n(28),v=a.WeakMap;if(c){var d=new v,h=d.get,m=d.has,g=d.set;r=function(t,e){return g.call(d,t,e),e},o=function(t){return h.call(d,t)||{}},i=function(t){return m.call(d,t)}}else{var _=p("state");f[_]=!0,r=function(t,e){return s(t,_,e),e},o=function(t){return l(t,_)?t[_]:{}},i=function(t){return l(t,_)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(38),o=n(39),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(14);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r={};r[n(1)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(9).f,o=n(4),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r,o,i=n(93),c=n(94),a=RegExp.prototype.exec,u=String.prototype.replace,s=a,l=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),p=c.UNSUPPORTED_Y||c.BROKEN_CARET,f=void 0!==/()??/.exec("")[1];(l||f||p)&&(s=function(t){var e,n,r,o,c=this,s=p&&c.sticky,v=i.call(c),d=c.source,h=0,m=t;return s&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),m=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(d="(?: "+d+")",m=" "+m,h++),n=new RegExp("^(?:"+d+")",v)),f&&(n=new RegExp("^"+d+"$(?!\\s)",v)),l&&(e=c.lastIndex),r=a.call(s?n:c,m),s?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:l&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),f&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=s},function(t,e,n){var r=n(2),o=n(8),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(5),o=n(2),i=n(23);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(24),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(15),o=n(37);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(4),o=n(21),i=n(66).indexOf,c=n(28);t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(c,n)&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(2),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(69).forEach,o=n(73),i=n(74),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var r=n(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(1),o=n(19),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,n){var r=n(47),o=n(19),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(32),o=n(8),i=n(1)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:c?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r,o,i,c=n(0),a=n(2),u=n(8),s=n(17),l=n(50),p=n(23),f=n(51),v=c.location,d=c.setImmediate,h=c.clearImmediate,m=c.process,g=c.MessageChannel,_=c.Dispatch,y=0,x={},b=function(t){if(x.hasOwnProperty(t)){var e=x[t];delete x[t],e()}},S=function(t){return function(){b(t)}},w=function(t){b(t.data)},E=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return x[++y]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},r(y),y},h=function(t){delete x[t]},"process"==u(m)?r=function(t){m.nextTick(S(t))}:_&&_.now?r=function(t){_.now(S(t))}:g&&!f?(i=(o=new g).port2,o.port1.onmessage=w,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(E)?r="onreadystatechange"in p("script")?function(t){l.appendChild(p("script")).onreadystatechange=function(){l.removeChild(this),b(t)}}:function(t){setTimeout(S(t),0)}:(r=E,c.addEventListener("message",w,!1))),t.exports={set:d,clear:h}},function(t,e,n){var r=n(12);t.exports=r("document","documentElement")},function(t,e,n){var r=n(52);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,e,n){var r=n(12);t.exports=r("navigator","userAgent")||""},function(t,e,n){"use strict";var r=n(18),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},function(t,e,n){"use strict";var r=n(11),o=n(34);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";var r,o,i,c=n(56),a=n(7),u=n(4),s=n(1),l=n(15),p=s("iterator"),f=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):f=!0),null==r&&(r={}),l||u(r,p)||a(r,p,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:f}},function(t,e,n){var r=n(4),o=n(31),i=n(27),c=n(99),a=i("IE_PROTO"),u=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){"use strict";n(58),n(75),n(78),n(79),n(81),n(54),n(95),n(105),n(109);var r=document.querySelector(".header__button_auth"),o=document.querySelector(".main__conteiner"),i=document.querySelector(".header__logo"),c=document.querySelectorAll(".header__button"),a=document.querySelector(".header__button_exit-icon"),u=document.querySelector("title"),s="SavedNews"===u.textContent?"../img/close.png":"img/close.png",l='\n\t\t\t<div class="popUp__conteiner">\n\t\t\t\t<img class="popUp__close-icon" src="'.concat(s,'" alt="close icon">\n\t\t\t\t<h3 class="popUp__title" >Вход</h3>\n\t\t\t\t<form novalidate class="popUp__login-form" name="signIn" action="https://api.alexanderwilliams.us/signin" method="POST">\n\t\t\t\t\t<label class="popUp__label popUp__label_email" for="email">Email</label>\n\t\t\t\t\t<input class="popUp__input" type="email" name="email" minlength="6" maxlength="30" placeholder="Введите почту" required>\n\t\t\t\t\t<span id="error-email" class="error-sms error-sms__name"></span>\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<label class="popUp__label popUp__label_password" for="password">Пароль</label>\n\t\t\t\t\t<input class="popUp__input" type="password" name="password" minlength="8" maxlength="16" placeholder="Введите пароль" required>\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<span id="error-password" class="error-sms error-sms__name"></span>\n\t\t\t\t\t<input class="popUp__submit" type="submit" name="submit" value="Войти">\n\t\t\t\t\t<h4 class="popUp__under-button-txt">или <span class="popUp__signup">Зарегистрироваться</span></h4>\n\t\t\t\t</form>\n\t\t\t</div>'),p='\n\t\t\t<div class="popUp__conteiner">\n\t\t\t\t<img class="popUp__close-icon" src="'.concat(s,'" alt="close icon">\n\t\t\t\t<h3 class="popUp__title" >Регистрация</h3>\n\t\t\t\t<form novalidate class="popUp__login-form" name="signUp" action="https://api.alexanderwilliams.us/signup" method="POST">\n\t\t\t\t\t<label class="popUp__label popUp__label_email" for="email">Email</label>\n\t\t\t\t\t<input class="popUp__input" type="email" name="email" minlength="6" maxlength="30" placeholder="Введите почту" required>\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<span id="error-email" class="error-sms error-sms__name"></span>\n\t\t\t\t\t<label class="popUp__label popUp__label_password" for="password">Пароль</label>\n\t\t\t\t\t<input class="popUp__input" type="password" name="password" minlength="8" maxlength="16" placeholder="Введите пароль" required>\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<span id="error-password" class="error-sms error-sms__name"></span>\n\t\t\t\t\t<label class="popUp__label popUp__label_name" for="name">Имя</label>\n\t\t\t\t\t<input class="popUp__input" type="text" name="name" minlength="4" maxlength="16" placeholder="Введите свое имя">\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<span id="error-name" class="error-sms error-sms__name"></span>\n\t\t\t\t\t<input class="popUp__submit popUp__submit_signUp" type="submit" name="submit" value="Зарегистрироваться">\n\t\t\t\t\t<h4 class="popUp__under-button-txt">или <span class="popUp__signin">Войти</span></h4>\n\t\t\t\t</form>\n\t\t\t</div>'),f='\n\t\t\t<div class="popUp__conteiner_successefull">\n\t\t\t\t<img class="popUp__close-icon" src="'.concat(s,'" alt="close icon">\n\t\t\t\t<h3 class="popUp__title" >Пользователь успешно зарегистрирован!</h3>\n\t\t\t\t<h4 class="popUp__successefull-description" >Выполнить вход</h4>\n\t\t\t</div>');function v(t){var e=document.querySelector(".popUp"),n=e.querySelector(".popUp__conteiner");x("signIn"),e.addEventListener("click",(function(r){var o=r.target.className;"popUp__background"===o&&e.remove(),"popUp__close-icon"===o&&(window.innerWidth<680?(d.style.display="block",d.classList.toggle("header__mobile-icon_close"),e.remove()):e.remove()),"popUp__signup"===o&&(n.remove(),e.insertAdjacentHTML("beforeend",p),x("signUp"),n=e.querySelector(".popUp__conteiner"),n.querySelector(".popUp__submit_signUp")),"popUp__signin"===o&&(n.remove(),e.insertAdjacentHTML("beforeend",l),n=e.querySelector(".popUp__conteiner"),x("signIn")),"popUp__submit_signUp"!==o&&!0!==t||(n.remove(),e.insertAdjacentHTML("beforeend",f),n=e.querySelector(".popUp__conteiner_successefull")),"popUp__successefull-description"===o&&(n.remove(),e.insertAdjacentHTML("beforeend",l),n=e.querySelector(".popUp__conteiner"))}))}r.addEventListener("click",(function(t){o.insertAdjacentHTML("afterbegin",'\n\t\t<section class="popUp">\n\t\t\t<div class="popUp__background"></div>\n\t\t</section>'),o.querySelector(".popUp").insertAdjacentHTML("beforeend",l),v()}));var d=document.querySelector(".header__mobile-icon"),h=document.querySelector(".header__main-conteiner"),m=document.querySelector(".header__conteiner"),g=document.querySelector(".header__span"),_=document.querySelector(".header__button_auth");function y(){"SavedNews"===u.textContent&&(i.classList.toggle("header__logo-white-scheme"),c.forEach((function(t){t.classList.toggle("header__button-white-scheme")})),d.classList.toggle("header__mobile-icon_black"),a.classList.toggle("header__button_exit-icon_black"))}function x(t){var e;"signIn"===t?e=document.forms.signIn:"signUp"===t&&(e=document.forms.signUp),e.addEventListener("input",(function(t){"submit"!==t.name&&function(t){var e=document.querySelector(".popUp__submit");event.preventDefault();var n=Array.from(t.elements),r=!0;n.forEach((function(t){console.log(t),"submit"!==t.name&&(function(t){var e=document.querySelector("#error-".concat(t.name)),n=document.querySelector(".popUp__submit");if(!t.checkValidity())return 0===t.value.length?e.textContent=E:"email"===t.name?e.textContent=b:"password"===t.name?e.textContent=S:"name"===t.name&&(e.textContent=w),n.classList.remove("popUp__submit_active"),!1;return e.textContent="",!0}(t)||(r=!1))})),r&&(e.classList.add("popUp__submit_active"),t.addEventListener("submit",(function(n){var r,o,i;t.elements.forEach((function(t){"email"===t.name&&(r=t.value),"password"===t.name&&(o=t.value),"name"===t.name&&(i=t.value)})),console.log(r,o,i),void 0===i?fetch("https://api.alexanderwilliams.us/signin",{mode:"no-cors",method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify({email:r,password:o}),redirect:"follow"}).then((function(t){return t.ok?(console.log(!0),t.json()):Promise.reject("Error:".concat(t.status))})).catch((function(t){return console.log("error",t)})):i&&fetch("https://api.alexanderwilliams.us/signup",{mode:"no-cors",method:"POST",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},body:JSON.stringify({email:r,password:o,name:i}),redirect:"follow"}).then((function(t){return t.ok?(v(!0),console.log(!0),t.json()):(console.log(!1),Promise.reject("Error:".concat(t.status)))})),t.reset(),e.classList.remove("popUp__submit_active")})))}(e)})),e.addEventListener("submit",(function(t){t.preventDefault()}))}d.addEventListener("click",(function(t){y(),d.classList.toggle("header__mobile-icon_close"),g.classList.toggle("header__mobile-shadow"),h.classList.toggle("header__conteiner_mobile"),m.classList.toggle("header__button-conteiner_mobile")})),g.addEventListener("click",(function(t){t.target.classList.contains("header__mobile-shadow")&&(y(),d.classList.toggle("header__mobile-icon_close"),g.classList.toggle("header__mobile-shadow"),h.classList.toggle("header__conteiner_mobile"),m.classList.toggle("header__button-conteiner_mobile"))})),window.innerWidth<680&&_.addEventListener("click",(function(t){t.target.classList.contains("header__button_auth")&&(y(),d.style.display="none",g.classList.toggle("header__mobile-shadow"),h.classList.toggle("header__conteiner_mobile"),m.classList.toggle("header__button-conteiner_mobile"))}));var b="Email быть от 6 до 30 символов, и содержать @",S="Должно быть от 8 до 16 символов",w="Имя должно содержать минимум 4 символа",E="Это обязательное поле";var j=document.forms.search;j.addEventListener("submit",(function(t){var e;event.preventDefault(),j.elements.forEach((function(t){"search"===t.name&&(e=t.value)}));var n="https://newsapi.org/v2/everything?q=".concat(e,"&from=2020-04-07&sortBy=popularity&apiKey=3c48624ca3ff47eb9d50ce64b52e3f1e"),r=new Request(n);fetch(r).then((function(t){return console.log(t.json()),t.ok?t.json():Promise.reject("Error:".concat(t.status))})).catch((function(t){return console.log("error",t)}))}))},function(t,e,n){"use strict";var r=n(11),o=n(42);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(25),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(4),o=n(63),i=n(20),c=n(9);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,s=0;s<n.length;s++){var l=n[s];r(t,l)||a(t,l,u(e,l))}}},function(t,e,n){var r=n(12),o=n(65),i=n(68),c=n(3);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(40),o=n(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(21),o=n(16),i=n(67),c=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),l=i(c,s);if(t&&n!=n){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(29),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(17),o=n(35),i=n(31),c=n(16),a=n(70),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,p=6==t,f=5==t||p;return function(v,d,h,m){for(var g,_,y=i(v),x=o(y),b=r(d,h,3),S=c(x.length),w=0,E=m||a,j=e?E(v,S):n?E(v,0):void 0;S>w;w++)if((f||w in x)&&(_=b(g=x[w],w,y),t))if(e)j[w]=_;else if(_)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:u.call(j,g)}else if(l)return!1;return p?-1:s||l?l:j}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(6),o=n(71),i=n(1)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(8);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(43);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){"use strict";var r=n(2);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(5),o=n(2),i=n(4),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,l=i(e,0)?e[0]:u,p=i(e,1)?e[1]:void 0;return a[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,l,p)}))}},function(t,e,n){var r=n(11),o=n(76);r({target:"Array",stat:!0,forced:!n(48)((function(t){Array.from(t)}))},{from:o})},function(t,e,n){"use strict";var r=n(17),o=n(31),i=n(44),c=n(45),a=n(16),u=n(77),s=n(46);t.exports=function(t){var e,n,l,p,f,v,d=o(t),h="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,_=void 0!==g,y=s(d),x=0;if(_&&(g=r(g,m>2?arguments[2]:void 0,2)),null==y||h==Array&&c(y))for(n=new h(e=a(d.length));e>x;x++)v=_?g(d[x],x):d[x],u(n,x,v);else for(f=(p=y.call(d)).next,n=new h;!(l=f.call(p)).done;x++)v=_?i(p,g,[l.value,x],!0):l.value,u(n,x,v);return n.length=x,n}},function(t,e,n){"use strict";var r=n(22),o=n(9),i=n(13);t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,i(0,n)):t[c]=n}},function(t,e,n){var r=n(5),o=n(9).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;!r||"name"in i||o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,e,n){var r=n(32),o=n(10),i=n(80);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(32),o=n(47);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){"use strict";var r,o,i,c,a=n(11),u=n(15),s=n(0),l=n(12),p=n(82),f=n(10),v=n(83),d=n(33),h=n(84),m=n(6),g=n(18),_=n(85),y=n(8),x=n(25),b=n(86),S=n(48),w=n(87),E=n(49).set,j=n(88),O=n(89),U=n(90),L=n(53),T=n(91),P=n(26),A=n(41),I=n(1),C=n(92),R=I("species"),k="Promise",M=P.get,q=P.set,N=P.getterFor(k),D=p,F=s.TypeError,G=s.document,H=s.process,V=l("fetch"),B=L.f,W=B,K="process"==y(H),$=!!(G&&G.createEvent&&s.dispatchEvent),z=A(k,(function(){if(!(x(D)!==String(D))){if(66===C)return!0;if(!K&&"function"!=typeof PromiseRejectionEvent)return!0}if(u&&!D.prototype.finally)return!0;if(C>=51&&/native code/.test(D))return!1;var t=D.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[R]=e,!(t.then((function(){}))instanceof e)})),Y=z||!S((function(t){D.all(t).catch((function(){}))})),J=function(t){var e;return!(!m(t)||"function"!=typeof(e=t.then))&&e},X=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;j((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var a,u,s,l=r[c++],p=i?l.ok:l.fail,f=l.resolve,v=l.reject,d=l.domain;try{p?(i||(2===e.rejection&&et(t,e),e.rejection=1),!0===p?a=o:(d&&d.enter(),a=p(o),d&&(d.exit(),s=!0)),a===l.promise?v(F("Promise-chain cycle")):(u=J(a))?u.call(a,f,v):f(a)):v(o)}catch(t){d&&!s&&d.exit(),v(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&Z(t,e)}))}},Q=function(t,e,n){var r,o;$?((r=G.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:e,reason:n},(o=s["on"+t])?o(r):"unhandledrejection"===t&&U("Unhandled promise rejection",n)},Z=function(t,e){E.call(s,(function(){var n,r=e.value;if(tt(e)&&(n=T((function(){K?H.emit("unhandledRejection",r,t):Q("unhandledrejection",t,r)})),e.rejection=K||tt(e)?2:1,n.error))throw n.value}))},tt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,e){E.call(s,(function(){K?H.emit("rejectionHandled",t):Q("rejectionhandled",t,e.value)}))},nt=function(t,e,n,r){return function(o){t(e,n,o,r)}},rt=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,X(t,e,!0))},ot=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw F("Promise can't be resolved itself");var o=J(n);o?j((function(){var r={done:!1};try{o.call(n,nt(ot,t,r,e),nt(rt,t,r,e))}catch(n){rt(t,r,n,e)}})):(e.value=n,e.state=1,X(t,e,!1))}catch(n){rt(t,{done:!1},n,e)}}};z&&(D=function(t){_(this,D,k),g(t),r.call(this);var e=M(this);try{t(nt(ot,this,e),nt(rt,this,e))}catch(t){rt(this,e,t)}},(r=function(t){q(this,{type:k,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(D.prototype,{then:function(t,e){var n=N(this),r=B(w(this,D));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=K?H.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&X(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=M(t);this.promise=t,this.resolve=nt(ot,t,e),this.reject=nt(rt,t,e)},L.f=B=function(t){return t===D||t===i?new o(t):W(t)},u||"function"!=typeof p||(c=p.prototype.then,f(p.prototype,"then",(function(t,e){var n=this;return new D((function(t,e){c.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof V&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(D,V.apply(s,arguments))}}))),a({global:!0,wrap:!0,forced:z},{Promise:D}),d(D,k,!1,!0),h(k),i=l(k),a({target:k,stat:!0,forced:z},{reject:function(t){var e=B(this);return e.reject.call(void 0,t),e.promise}}),a({target:k,stat:!0,forced:u||z},{resolve:function(t){return O(u&&this===i?D:this,t)}}),a({target:k,stat:!0,forced:Y},{all:function(t){var e=this,n=B(e),r=n.resolve,o=n.reject,i=T((function(){var n=g(e.resolve),i=[],c=0,a=1;b(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=B(e),r=n.reject,o=T((function(){var o=g(e.resolve);b(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},function(t,e,n){var r=n(0);t.exports=r.Promise},function(t,e,n){var r=n(10);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e,n){"use strict";var r=n(12),o=n(9),i=n(1),c=n(5),a=i("species");t.exports=function(t){var e=r(t),n=o.f;c&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(3),o=n(45),i=n(16),c=n(17),a=n(46),u=n(44),s=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,e,n,l,p){var f,v,d,h,m,g,_,y=c(e,n,l?2:1);if(p)f=t;else{if("function"!=typeof(v=a(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((m=l?y(r(_=t[d])[0],_[1]):y(t[d]))&&m instanceof s)return m;return new s(!1)}f=v.call(t)}for(g=f.next;!(_=g.call(f)).done;)if("object"==typeof(m=u(f,y,_.value,l))&&m&&m instanceof s)return m;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,e,n){var r=n(3),o=n(18),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c,a,u,s,l,p=n(0),f=n(20).f,v=n(8),d=n(49).set,h=n(51),m=p.MutationObserver||p.WebKitMutationObserver,g=p.process,_=p.Promise,y="process"==v(g),x=f(p,"queueMicrotask"),b=x&&x.value;b||(r=function(){var t,e;for(y&&(t=g.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},y?c=function(){g.nextTick(r)}:m&&!h?(a=!0,u=document.createTextNode(""),new m(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a}):_&&_.resolve?(s=_.resolve(void 0),l=s.then,c=function(){l.call(s,r)}):c=function(){d.call(p,r)}),t.exports=b||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,c()),i=e}},function(t,e,n){var r=n(3),o=n(6),i=n(53);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,e,n){var r,o,i=n(0),c=n(52),a=i.process,u=a&&a.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r=n(3);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";var r=n(2);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){"use strict";var r=n(96).charAt,o=n(26),i=n(97),c=o.set,a=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=a(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,n){var r=n(29),o=n(14),i=function(t){return function(e,n){var i,c,a=String(o(e)),u=r(n),s=a.length;return u<0||u>=s?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===s||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){"use strict";var r=n(11),o=n(98),i=n(56),c=n(103),a=n(33),u=n(7),s=n(10),l=n(1),p=n(15),f=n(19),v=n(55),d=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,m=l("iterator"),g=function(){return this};t.exports=function(t,e,n,l,v,_,y){o(n,e,l);var x,b,S,w=function(t){if(t===v&&L)return L;if(!h&&t in O)return O[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},E=e+" Iterator",j=!1,O=t.prototype,U=O[m]||O["@@iterator"]||v&&O[v],L=!h&&U||w(v),T="Array"==e&&O.entries||U;if(T&&(x=i(T.call(new t)),d!==Object.prototype&&x.next&&(p||i(x)===d||(c?c(x,d):"function"!=typeof x[m]&&u(x,m,g)),a(x,E,!0,!0),p&&(f[E]=g))),"values"==v&&U&&"values"!==U.name&&(j=!0,L=function(){return U.call(this)}),p&&!y||O[m]===L||u(O,m,L),f[e]=L,v)if(b={values:w("values"),keys:_?L:w("keys"),entries:w("entries")},y)for(S in b)!h&&!j&&S in O||s(O,S,b[S]);else r({target:e,proto:!0,forced:h||j},b);return b}},function(t,e,n){"use strict";var r=n(55).IteratorPrototype,o=n(100),i=n(13),c=n(33),a=n(19),u=function(){return this};t.exports=function(t,e,n){var s=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,s,!1,!0),a[s]=u,t}},function(t,e,n){var r=n(2);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r,o=n(3),i=n(101),c=n(30),a=n(28),u=n(50),s=n(23),l=n(27),p=l("IE_PROTO"),f=function(){},v=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;d=r?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete d.prototype[c[n]];return d()};a[p]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(f.prototype=o(t),n=new f,f.prototype=null,n[p]=t):n=d(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(5),o=n(9),i=n(3),c=n(102);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),a=r.length,u=0;a>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){var r=n(40),o=n(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(3),o=n(104);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(106),o=n(3),i=n(14),c=n(107),a=n(108);r("search",1,(function(t,e,n){return[function(e){var n=i(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var i=o(t),u=String(this),s=i.lastIndex;c(s,0)||(i.lastIndex=0);var l=a(i,u);return c(i.lastIndex,s)||(i.lastIndex=s),null===l?-1:l.index}]}))},function(t,e,n){"use strict";n(54);var r=n(10),o=n(2),i=n(1),c=n(34),a=n(7),u=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l="$0"==="a".replace(/./,"$0"),p=i("replace"),f=!!/./[p]&&""===/./[p]("a","$0"),v=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,p){var d=i(t),h=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),m=h&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!h||!m||"replace"===t&&(!s||!l||f)||"split"===t&&!v){var g=/./[d],_=n(d,""[t],(function(t,e,n,r,o){return e.exec===c?h&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),y=_[0],x=_[1];r(String.prototype,t,y),r(RegExp.prototype,d,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}p&&a(RegExp.prototype[d],"sham",!0)}},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},function(t,e,n){var r=n(8),o=n(34);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(0),o=n(110),i=n(42),c=n(7);for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},,,function(t,e,n){"use strict";n.r(e);n(114),n(57)},function(t,e,n){}]);