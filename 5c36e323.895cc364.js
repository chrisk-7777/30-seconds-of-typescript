(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(479)),i={title:"zipWith",tags:"array,function,advanced",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "zipWith" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"zipWith",id:"zipWith",isDocsHomePage:!1,title:"zipWith",description:'Implementation of "zipWith" in typescript, javascript and deno.',source:"@site/docs/zipWith.md",slug:"/zipWith",permalink:"/30-seconds-of-typescript/docs/zipWith",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/zipWith.md",version:"current",sidebar:"someSidebar",previous:{title:"zipObject",permalink:"/30-seconds-of-typescript/docs/zipObject"}},p=[],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Creates an array of elements, grouped based on the position in the original arrays and using function as the last value to specify how grouped values should be combined."),Object(o.b)("p",null,"Check if the last argument provided is a function.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Math.max()")," to get the longest array in the arguments.\nCreates an array with that length as return value and use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.from()")," with a map-function to create an array of grouped elements.\nIf lengths of the argument-arrays vary, ",Object(o.b)("inlineCode",{parentName:"p"},"undefined")," is used where no value could be found.\nThe function is invoked with the elements of each group ",Object(o.b)("inlineCode",{parentName:"p"},"(...group)"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const zipWith = (...array) => {\n  const fn =\n    typeof array[array.length - 1] === "function" ? array.pop() : undefined;\n  return Array.from(\n    { length: Math.max(...array.map((a) => a.length)) },\n    (_, i) => (fn ? fn(...array.map((a) => a[i])) : array.map((a) => a[i]))\n  );\n};\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c); // [111,222]\nzipWith(\n  [1, 2, 3],\n  [10, 20],\n  [100, 200],\n  (a, b, c) =>\n    (a != null ? a : "a") + (b != null ? b : "b") + (c != null ? c : "c")\n); // [111, 222, \'3bc\']\n')))}u.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);