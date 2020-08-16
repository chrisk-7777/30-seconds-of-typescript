(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{446:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(466)),i={title:"isAfterDate",tags:"date,beginner",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "isAfterDate" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"isAfterDate",id:"isAfterDate",isDocsHomePage:!1,title:"isAfterDate",description:'Implementation of "isAfterDate" in typescript, javascript and deno.',source:"@site/docs/isAfterDate.md",permalink:"/30-seconds-of-typescript/docs/isAfterDate",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/isAfterDate.md",sidebar:"someSidebar",previous:{title:"isAbsoluteURL",permalink:"/30-seconds-of-typescript/docs/isAbsoluteURL"},next:{title:"isArrayLike",permalink:"/30-seconds-of-typescript/docs/isArrayLike"}},c=[],p={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(o.b)("p",null,"Check if a date is after another date."),Object(o.b)("p",null,"Use the greater than operator (",Object(o.b)("inlineCode",{parentName:"p"},">"),") to check if the first date comes after the second one."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const isAfterDate = (dateA: Date, dateB: Date) => dateA > dateB;\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true\n")))}l.isMDXComponent=!0},466:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,b=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return r?a.a.createElement(b,s(s({ref:t},p),{},{components:r})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);