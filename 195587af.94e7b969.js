(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{117:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(479)),c={title:"toCurrency",tags:"math,string,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "toCurrency" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"toCurrency",id:"toCurrency",isDocsHomePage:!1,title:"toCurrency",description:'Implementation of "toCurrency" in typescript, javascript and deno.',source:"@site/docs/toCurrency.md",slug:"/toCurrency",permalink:"/30-seconds-of-typescript/docs/toCurrency",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/toCurrency.md",version:"current",sidebar:"someSidebar",previous:{title:"toCamelCase",permalink:"/30-seconds-of-typescript/docs/toCamelCase"},next:{title:"toDecimalMark",permalink:"/30-seconds-of-typescript/docs/toDecimalMark"}},u=[],s={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Take a number and return specified currency formatting."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Intl.NumberFormat")," to enable country / currency sensitive formatting."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const toCurrency = (n: number, curr: string, LanguageFormat: string = "") =>\n  Intl.NumberFormat(LanguageFormat, {\n    style: "currency",\n    currency: curr,\n  }).format(n);\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'toCurrency(123456.789, "EUR"); // \u20ac123,456.79  | currency: Euro | currencyLangFormat: Local\ntoCurrency(123456.789, "USD", "en-us"); // $123,456.79  | currency: US Dollar | currencyLangFormat: English (United States)\ntoCurrency(123456.789, "USD", "fa"); // \u06f1\u06f2\u06f3\u066c\u06f4\u06f5\u06f6\u066b\u06f7\u06f9 \u061c$ | currency: US Dollar | currencyLangFormat: Farsi\ntoCurrency(322342436423.2435, "JPY"); // \xa5322,342,436,423 | currency: Japanese Yen | currencyLangFormat: Local\ntoCurrency(322342436423.2435, "JPY", "fi"); // 322 342 436 423 \xa5 | currency: Japanese Yen | currencyLangFormat: Finnish\n')))}p.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),y=n,b=l["".concat(c,".").concat(y)]||l[y]||m[y]||o;return r?a.a.createElement(b,i(i({ref:t},s),{},{components:r})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);