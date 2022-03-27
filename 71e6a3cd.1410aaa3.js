(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{250:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(479)),p={title:"approximatelyEqual",tags:"math,beginner",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "approximatelyEqual" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"approximatelyEqual",id:"approximatelyEqual",isDocsHomePage:!1,title:"approximatelyEqual",description:'Implementation of "approximatelyEqual" in typescript, javascript and deno.',source:"@site/docs/approximatelyEqual.md",slug:"/approximatelyEqual",permalink:"/30-seconds-of-typescript/docs/approximatelyEqual",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/approximatelyEqual.md",version:"current",sidebar:"someSidebar",previous:{title:"aperture",permalink:"/30-seconds-of-typescript/docs/aperture"},next:{title:"arrayToCSV",permalink:"/30-seconds-of-typescript/docs/arrayToCSV"}},s=[],c={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(o.b)("p",null,"Checks if two numbers are approximately equal to each other."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Math.abs()")," to compare the absolute difference of the two values to ",Object(o.b)("inlineCode",{parentName:"p"},"epsilon"),".\nOmit the third parameter, ",Object(o.b)("inlineCode",{parentName:"p"},"epsilon"),", to use a default value of ",Object(o.b)("inlineCode",{parentName:"p"},"0.001"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"export const approximatelyEqual = (\n  v1: number,\n  v2: number,\n  epsilon: number = 0.001\n) => Math.abs(v1 - v2) < epsilon;\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"approximatelyEqual(Math.PI / 2.0, 1.5708); // true\napproximatelyEqual(Math.PI / 2.0, 1.5708, 0.000001); // false // 1.5707963267948966\n")))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,d=u["".concat(p,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(d,i(i({ref:t},c),{},{components:r})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);