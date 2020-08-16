(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(466)),i={title:"hz",tags:"function,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "hz" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"hz",id:"hz",isDocsHomePage:!1,title:"hz",description:'Implementation of "hz" in typescript, javascript and deno.',source:"@site/docs/hz.md",permalink:"/30-seconds-of-typescript/docs/hz",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/hz.md",sidebar:"someSidebar",previous:{title:"httpsRedirect",permalink:"/30-seconds-of-typescript/docs/httpsRedirect"},next:{title:"inRange",permalink:"/30-seconds-of-typescript/docs/inRange"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Returns the number of times a function executed per second.\n",Object(a.b)("inlineCode",{parentName:"p"},"hz")," is the unit for ",Object(a.b)("inlineCode",{parentName:"p"},"hertz"),", the unit of frequency defined as one cycle per second."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"performance.now()")," to get the difference in milliseconds before and after the iteration loop to calculate the time elapsed executing the function ",Object(a.b)("inlineCode",{parentName:"p"},"iterations")," times.\nReturn the number of cycles per second by converting milliseconds to seconds and dividing it by the time elapsed.\nOmit the second argument, ",Object(a.b)("inlineCode",{parentName:"p"},"iterations"),", to use the default of 100 iterations."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const hz = (fn, iterations = 100) => {\n  const before = performance.now();\n  for (let i = 0; i < iterations; i++) fn();\n  return (1000 * iterations) / (performance.now() - before);\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// 10,000 element array\nconst numbers = Array(10000)\n  .fill()\n  .map((_, i) => i);\n\n// Test functions with the same goal: sum up the elements in the array\nconst sumReduce = () => numbers.reduce((acc, n) => acc + n, 0);\nconst sumForLoop = () => {\n  let sum = 0;\n  for (let i = 0; i < numbers.length; i++) sum += numbers[i];\n  return sum;\n};\n\n// `sumForLoop` is nearly 10 times faster\nMath.round(hz(sumReduce)); // 572\nMath.round(hz(sumForLoop)); // 4784\n")))}u.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);