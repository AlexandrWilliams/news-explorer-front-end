!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=60)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(29))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(3),o=n(15),i=n(9);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(10),o=n(12);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(0),o=n(5);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(3),o=n(30),i=n(9),c=n(6),a=n(13),u=n(2),s=n(14),p=Object.getOwnPropertyDescriptor;e.f=r?p:function(t,e){if(t=c(t),e=a(e,!0),s)try{return p(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(1),o=n(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(3),o=n(1),i=n(31);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(3),o=n(14),i=n(16),c=n(13),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(18),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),o=n(7),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(36),o=n(18);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){var r=n(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(48).forEach,o=n(56),i=n(57),c=o("forEach"),a=i("forEach");t.exports=c&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";n(27),n(58);var r=document.querySelector(".header__button_auth"),o=document.querySelector(".page__conteiner"),i='\n\t\t\t<div class="popUp__conteiner">\n\t\t\t\t<img class="popUp__close-icon" src="img/close.png" alt="close icon">\n\t\t\t\t<h3 class="popUp__title" >Вход</h3>\n\t\t\t\t<form class="popUp__login-form" name="logIn" action="post" method="POST">\n\t\t\t\t\t<label class="popUp__label popUp__label_email" for="email">Email</label>\n\t\t\t\t\t<input class="popUp__input" type="email" name="email" minlength="6" maxlength="30" placeholder="Введите почту">\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<label class="popUp__label popUp__label_password" for="password">Пароль</label>\n\t\t\t\t\t<input class="popUp__input" type="password" name="password" minlength="6" maxlength="16" placeholder="Введите пароль">\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<input class="popUp__submit" type="submit" name="submit" value="Войти">\n\t\t\t\t\t<h4 class="popUp__under-button-txt">или <span class="popUp__signup">Зарегистрироваться</span></h4>\n\t\t\t\t</form>\n\t\t\t</div>';r.addEventListener("click",(function(t){var e,n;o.insertAdjacentHTML("afterbegin",'\n\t\t<section class="popUp">\n\t\t\t<div class="popUp__background"></div>\n\t\t</section>'),o.querySelector(".popUp").insertAdjacentHTML("beforeend",i),e=document.querySelector(".popUp"),n=e.querySelector(".popUp__conteiner"),e.addEventListener("click",(function(t){var r=t.target.className;"popUp__background"===r&&e.remove(),"popUp__close-icon"===r&&(window.innerWidth<680?(c.style.display="block",c.classList.toggle("header__mobile-icon_close"),e.remove()):e.remove()),"popUp__signup"===r&&(n.remove(),e.insertAdjacentHTML("beforeend",'\n\t\t\t<div class="popUp__conteiner">\n\t\t\t\t<img class="popUp__close-icon" src="img/close.png" alt="close icon">\n\t\t\t\t<h3 class="popUp__title" >Регистрация</h3>\n\t\t\t\t<form class="popUp__login-form" name="logIn" action="post" method="POST">\n\t\t\t\t\t<label class="popUp__label popUp__label_email" for="email">Email</label>\n\t\t\t\t\t<input class="popUp__input" type="email" name="email" minlength="6" maxlength="30" placeholder="Введите почту">\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<label class="popUp__label popUp__label_password" for="password">Пароль</label>\n\t\t\t\t\t<input class="popUp__input" type="password" name="password" minlength="6" maxlength="16" placeholder="Введите пароль">\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<label class="popUp__label popUp__label_name" for="name">Имя</label>\n\t\t\t\t\t<input class="popUp__input" type="text" name="name" minlength="6" maxlength="16" placeholder="Введите свое имя">\n\t\t\t\t\t<span class="popUp__input-line"></span>\n\t\t\t\t\t<input class="popUp__submit popUp__submit_signUp" type="submit" name="submit" value="Зарегистрироваться">\n\t\t\t\t\t<h4 class="popUp__under-button-txt">или <span class="popUp__signin">Войти</span></h4>\n\t\t\t\t</form>\n\t\t\t</div>'),(n=e.querySelector(".popUp__conteiner")).querySelector(".popUp__submit_signUp")),"popUp__signin"===r&&(n.remove(),e.insertAdjacentHTML("beforeend",i),n=e.querySelector(".popUp__conteiner")),"popUp__submit_signUp"===r&&(n.remove(),e.insertAdjacentHTML("beforeend",'\n\t\t\t<div class="popUp__conteiner_successefull">\n\t\t\t\t<img class="popUp__close-icon" src="img/close.png" alt="close icon">\n\t\t\t\t<h3 class="popUp__title" >Пользователь успешно зарегистрирован!</h3>\n\t\t\t\t<h4 class="popUp__successefull-description" >Выполнить вход</h4>\n\t\t\t</div>'),n=e.querySelector(".popUp__conteiner_successefull")),"popUp__successefull-description"===r&&(n.remove(),e.insertAdjacentHTML("beforeend",i),n=e.querySelector(".popUp__conteiner"))}))}));var c=document.querySelector(".header__mobile-icon"),a=document.querySelector(".header__main-conteiner"),u=document.querySelector(".header__conteiner"),s=document.querySelector(".header__span"),p=document.querySelector(".header__button_auth");c.addEventListener("click",(function(t){h(),c.classList.toggle("header__mobile-icon_close"),s.classList.toggle("header__mobile-shadow"),a.classList.toggle("header__conteiner_mobile"),u.classList.toggle("header__button-conteiner_mobile")})),s.addEventListener("click",(function(t){t.target.classList.contains("header__mobile-shadow")&&(h(),c.classList.toggle("header__mobile-icon_close"),s.classList.toggle("header__mobile-shadow"),a.classList.toggle("header__conteiner_mobile"),u.classList.toggle("header__button-conteiner_mobile"))})),window.innerWidth<680&&p.addEventListener("click",(function(t){t.target.classList.contains("header__button_auth")&&(h(),c.style.display="none",s.classList.toggle("header__mobile-shadow"),a.classList.toggle("header__conteiner_mobile"),u.classList.toggle("header__button-conteiner_mobile"))}));var l=document.querySelector(".header__logo"),f=document.querySelectorAll(".header__button"),_=document.querySelector(".header__button_exit-icon"),d=document.querySelector("title");function h(){"SavedNews"===d.textContent&&(l.classList.toggle("header__logo-white-scheme"),f.forEach((function(t){t.classList.toggle("header__button-white-scheme")})),c.classList.toggle("header__mobile-icon_black"),_.classList.toggle("header__button_exit-icon_black"))}},function(t,e,n){"use strict";var r=n(28),o=n(24);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,n){var r=n(0),o=n(8).f,i=n(5),c=n(32),a=n(7),u=n(37),s=n(47);t.exports=function(t,e){var n,p,l,f,_,d=t.target,h=t.global,m=t.stat;if(n=h?r:m?r[d]||a(d,{}):(r[d]||{}).prototype)for(p in e){if(f=e[p],l=t.noTargetGet?(_=o(n,p))&&_.value:n[p],!s(h?p:d+(m?".":"#")+p,t.forced)&&void 0!==l){if(typeof f==typeof l)continue;u(f,l)}(t.sham||l&&l.sham)&&i(f,"sham",!0),c(n,p,f,t)}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(4),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(0),o=n(5),i=n(2),c=n(7),a=n(17),u=n(33),s=u.get,p=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var u=!!a&&!!a.unsafe,s=!!a&&!!a.enumerable,f=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),p(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},function(t,e,n){var r,o,i,c=n(34),a=n(0),u=n(4),s=n(5),p=n(2),l=n(35),f=n(21),_=a.WeakMap;if(c){var d=new _,h=d.get,m=d.has,v=d.set;r=function(t,e){return v.call(d,t,e),e},o=function(t){return h.call(d,t)||{}},i=function(t){return m.call(d,t)}}else{var g=l("state");f[g]=!0,r=function(t,e){return s(t,g,e),e},o=function(t){return p(t,g)?t[g]:{}},i=function(t){return p(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(17),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(19),o=n(20),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports=!1},function(t,e,n){var r=n(2),o=n(38),i=n(8),c=n(15);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,s=0;s<n.length;s++){var p=n[s];r(t,p)||a(t,p,u(e,p))}}},function(t,e,n){var r=n(39),o=n(41),i=n(46),c=n(16);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(40),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(42),o=n(45).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(2),o=n(6),i=n(43).indexOf,c=n(21);t.exports=function(t,e){var n,a=o(t),u=0,s=[];for(n in a)!r(c,n)&&r(a,n)&&s.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){var r=n(6),o=n(22),i=n(44),c=function(t){return function(e,n,c){var a,u=r(e),s=o(u.length),p=i(c,s);if(t&&n!=n){for(;s>p;)if((a=u[p++])!=a)return!0}else for(;s>p;p++)if((t||p in u)&&u[p]===n)return t||p||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(23),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(49),o=n(10),i=n(51),c=n(22),a=n(52),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,p=4==t,l=6==t,f=5==t||l;return function(_,d,h,m){for(var v,g,b=i(_),y=o(b),S=r(d,h,3),x=c(y.length),L=0,U=m||a,w=e?U(_,x):n?U(_,0):void 0;x>L;L++)if((f||L in y)&&(g=S(v=y[L],L,b),t))if(e)w[L]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return L;case 2:u.call(w,v)}else if(p)return!1;return l?-1:s||p?p:w}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(50);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(12);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4),o=n(53),i=n(54)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(0),o=n(19),i=n(2),c=n(20),a=n(25),u=n(55),s=o("wks"),p=r.Symbol,l=u?p:p&&p.withoutSetter||c;t.exports=function(t){return i(s,t)||(a&&i(p,t)?s[t]=p[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e,n){var r=n(25);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){var r=n(3),o=n(1),i=n(2),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,p=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return a[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,p,l)}))}},function(t,e,n){var r=n(0),o=n(59),i=n(24),c=n(5);for(var a in o){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";n.r(e);n(61),n(26)},function(t,e,n){}]);