(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{351:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(479)),o={title:"minBy",tags:"math,array,function,beginner",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "minBy" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p={unversionedId:"minBy",id:"minBy",isDocsHomePage:!1,title:"minBy",description:'Implementation of "minBy" in typescript, javascript and deno.',source:"@site/docs/minBy.md",slug:"/minBy",permalink:"/30-seconds-of-typescript/docs/minBy",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/minBy.md",version:"current",sidebar:"someSidebar",previous:{title:"midpoint",permalink:"/30-seconds-of-typescript/docs/midpoint"},next:{title:"minDate",permalink:"/30-seconds-of-typescript/docs/minDate"}},c=[],s={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(i.b)("p",null,"Returns the minimum value of an array, after mapping each element to a value using the provided function."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to map each element to the value returned by ",Object(i.b)("inlineCode",{parentName:"p"},"fn"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Math.min()")," to get the minimum value."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"export const minBy = <T = any>(arr: T[], fn: MapFunc<T> | string) =>\n  Math.min(...arr.map(isString(fn) ? (val: any) => val[fn] : fn));\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n); // 2\nminBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], "n"); // 2\n')))}l.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),y=r,d=u["".concat(o,".").concat(y)]||u[y]||m[y]||i;return n?a.a.createElement(d,p(p({ref:t},s),{},{components:n})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);