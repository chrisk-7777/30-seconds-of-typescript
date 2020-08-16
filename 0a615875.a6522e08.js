(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{466:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,i(i({ref:t},p),{},{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(466)),c={title:"toHash",tags:"array,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "toHash" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"toHash",id:"toHash",isDocsHomePage:!1,title:"toHash",description:'Implementation of "toHash" in typescript, javascript and deno.',source:"@site/docs/toHash.md",permalink:"/30-seconds-of-typescript/docs/toHash",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/toHash.md",sidebar:"someSidebar",previous:{title:"toDecimalMark",permalink:"/30-seconds-of-typescript/docs/toDecimalMark"},next:{title:"toKebabCase",permalink:"/30-seconds-of-typescript/docs/toKebabCase"}},s=[],p={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Reduces a given Array-like into a value hash (keyed data store)."),Object(o.b)("p",null,"Given an Iterable or Array-like structure, call ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce.call()")," on the provided object to step over it and return an Object, keyed by the reference value."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const toHash = (object, key) =>\n  Array.prototype.reduce.call(\n    object,\n    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),\n    {}\n  );\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 3: 1 }\ntoHash([{ a: "label" }], "a"); // { label: { a: \'label\' } }\n// A more in depth example:\nlet users = [\n  { id: 1, first: "Jon" },\n  { id: 2, first: "Joe" },\n  { id: 3, first: "Moe" },\n];\nlet managers = [{ manager: 1, employees: [2, 3] }];\n// We use function here because we want a bindable reference, but a closure referencing the hash would work, too.\nmanagers.forEach(\n  (manager) =>\n    (manager.employees = manager.employees.map(function (id) {\n      return this[id];\n    }, toHash(users, "id")))\n);\nmanagers; // [ { manager:1, employees: [ { id: 2, first: "Joe" }, { id: 3, first: "Moe" } ] } ]\n')))}l.isMDXComponent=!0}}]);