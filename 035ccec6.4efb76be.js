(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{466:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),f=r,d=l["".concat(c,".").concat(f)]||l[f]||m[f]||a;return n?i.a.createElement(d,o(o({ref:t},p),{},{components:n})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),a=(n(0),n(466)),c={title:"uniqueSymmetricDifference",tags:"array,math,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "uniqueSymmetricDifference" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},o={unversionedId:"uniqueSymmetricDifference",id:"uniqueSymmetricDifference",isDocsHomePage:!1,title:"uniqueSymmetricDifference",description:'Implementation of "uniqueSymmetricDifference" in typescript, javascript and deno.',source:"@site/docs/uniqueSymmetricDifference.md",permalink:"/30-seconds-of-typescript/docs/uniqueSymmetricDifference",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/uniqueSymmetricDifference.md",sidebar:"someSidebar",previous:{title:"uniqueByRight",permalink:"/30-seconds-of-typescript/docs/uniqueByRight"},next:{title:"untildify",permalink:"/30-seconds-of-typescript/docs/untildify"}},u=[],p={rightToc:u};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Returns the unique symmetric difference between two arrays, not containing duplicate values from either array."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," on each array to remove values contained in the other, then create a ",Object(a.b)("inlineCode",{parentName:"p"},"Set")," from the results, removing duplicate values."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const uniqueSymmetricDifference = (a, b) => [\n  ...new Set([\n    ...a.filter((v) => !b.includes(v)),\n    ...b.filter((v) => !a.includes(v)),\n  ]),\n];\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]\nuniqueSymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 3]\n")))}s.isMDXComponent=!0}}]);