(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{315:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(479)),s={title:"fromCamelCase",tags:"string,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "fromCamelCase" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"fromCamelCase",id:"fromCamelCase",isDocsHomePage:!1,title:"fromCamelCase",description:'Implementation of "fromCamelCase" in typescript, javascript and deno.',source:"@site/docs/fromCamelCase.md",slug:"/fromCamelCase",permalink:"/30-seconds-of-typescript/docs/fromCamelCase",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/fromCamelCase.md",version:"current",sidebar:"someSidebar",previous:{title:"frequencies",permalink:"/30-seconds-of-typescript/docs/frequencies"},next:{title:"functionName",permalink:"/30-seconds-of-typescript/docs/functionName"}},i=[],p={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Converts a string from camelcase."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.replace()")," to remove underscores, hyphens, and spaces and convert words to camelcase.\nOmit the second argument to use a default ",Object(o.b)("inlineCode",{parentName:"p"},"separator")," of ",Object(o.b)("inlineCode",{parentName:"p"},"_"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const fromCamelCase = (str, separator = "_") =>\n  str\n    .replace(/([a-z\\d])([A-Z])/g, "$1" + separator + "$2")\n    .replace(/([A-Z]+)([A-Z][a-z\\d]+)/g, "$1" + separator + "$2")\n    .toLowerCase();\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'fromCamelCase("someDatabaseFieldName", " "); // \'some database field name\'\nfromCamelCase("someLabelThatNeedsToBeCamelized", "-"); // \'some-label-that-needs-to-be-camelized\'\nfromCamelCase("someJavascriptProperty", "_"); // \'some_javascript_property\'\n')))}l.isMDXComponent=!0},479:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);