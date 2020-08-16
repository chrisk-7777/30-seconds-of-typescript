(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(466)),i={title:"findLastIndex",tags:"array,function,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "findLastIndex" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"findLastIndex",id:"findLastIndex",isDocsHomePage:!1,title:"findLastIndex",description:'Implementation of "findLastIndex" in typescript, javascript and deno.',source:"@site/docs/findLastIndex.md",permalink:"/30-seconds-of-typescript/docs/findLastIndex",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/findLastIndex.md",sidebar:"someSidebar",previous:{title:"findLast",permalink:"/30-seconds-of-typescript/docs/findLast"},next:{title:"findLastKey",permalink:"/30-seconds-of-typescript/docs/findLastKey"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Returns the index of the last element for which the provided function returns a truthy value."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to map each element to an array with its index and value.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to remove elements for which ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," returns falsy values, ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.pop()")," to get the last one.\n",Object(o.b)("inlineCode",{parentName:"p"},"-1")," is the default value when not found."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const findLastIndex = (arr, fn) =>\n  (arr\n    .map((val, i) => [i, val])\n    .filter(([i, val]) => fn(val, i, arr))\n    .pop() || [-1])[0];\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"findLastIndex([1, 2, 3, 4], (n) => n % 2 === 1); // 2 (index of the value 3)\nfindLastIndex([1, 2, 3, 4], (n) => n === 5); // -1 (default value when not found)\n")))}l.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);