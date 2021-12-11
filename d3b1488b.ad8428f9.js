(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{414:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return m}));var r=t(3),a=t(7),o=(t(0),t(479)),i={title:"randomIntArrayInRange",tags:"math,random,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "randomIntArrayInRange" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"randomIntArrayInRange",id:"randomIntArrayInRange",isDocsHomePage:!1,title:"randomIntArrayInRange",description:'Implementation of "randomIntArrayInRange" in typescript, javascript and deno.',source:"@site/docs/randomIntArrayInRange.md",slug:"/randomIntArrayInRange",permalink:"/30-seconds-of-typescript/docs/randomIntArrayInRange",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/randomIntArrayInRange.md",version:"current",sidebar:"someSidebar",previous:{title:"randomHexColorCode",permalink:"/30-seconds-of-typescript/docs/randomHexColorCode"},next:{title:"randomInt",permalink:"/30-seconds-of-typescript/docs/randomInt"}},p=[],s={toc:p};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Returns an array of n random integers in the specified range."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.from()")," to create an empty array of the specific length, ",Object(o.b)("inlineCode",{parentName:"p"},"Math.random()")," to generate a random number and map it to the desired range, using ",Object(o.b)("inlineCode",{parentName:"p"},"Math.floor()")," to make it an integer."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const randomIntArrayInRange = (min, max, n = 1) =>\n  Array.from(\n    { length: n },\n    () => Math.floor(Math.random() * (max - min + 1)) + min\n  );\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]\n")))}m.isMDXComponent=!0},479:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),m=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=m(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=m(t),d=r,f=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return t?a.a.createElement(f,c(c({ref:n},s),{},{components:t})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);