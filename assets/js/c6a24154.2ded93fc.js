"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[9047],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},86887:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"dayOfYear",tags:["date","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "dayOfYear" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"dayOfYear",id:"dayOfYear",title:"dayOfYear",description:'Implementation of "dayOfYear" in typescript, javascript and deno.',source:"@site/docs/dayOfYear.md",sourceDirName:".",slug:"/dayOfYear",permalink:"/30-seconds-of-typescript/docs/dayOfYear",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/dayOfYear.md",tags:[{label:"date",permalink:"/30-seconds-of-typescript/docs/tags/date"},{label:"beginner",permalink:"/30-seconds-of-typescript/docs/tags/beginner"}],version:"current",frontMatter:{title:"dayOfYear",tags:["date","beginner"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "dayOfYear" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"curry",permalink:"/30-seconds-of-typescript/docs/curry"},next:{title:"debounce",permalink:"/30-seconds-of-typescript/docs/debounce"}},l={},d=[],u={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),(0,i.kt)("p",null,"Gets the day of the year from a ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," object."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"new Date()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Date.prototype.getFullYear()")," to get the first day of the year as a ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," object, subtract it from the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," and divide with the milliseconds in each day to get the result.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"Math.floor()")," to appropriately round the resulting day count to an integer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'function isString<T = any>(str: string | T): str is string {\n  return typeof str === "string";\n}\nfunction isValidDate(date: Date) {\n  return date instanceof Date && !isNaN(date.getTime());\n}\nconst dayOfYear = (date: Date | string): number => {\n  if (isString<Date>(date)) {\n    date = new Date(date);\n  }\n  if (!isValidDate(date)) throw new Error(`Invalid Date string`);\n  return Math.floor(\n    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) /\n      1000 /\n      60 /\n      60 /\n      24\n  );\n};\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'dayOfYear(new Date()); // 180\ndayOfYear(new Date(2020, 5, 28)); //180\ndayOfYear("2020-06-28T10:46:39.856Z"); // 180\ndayOfYear("2020-06-28T1s"); // Error: Invalid Date string\n// invalid date\nassertThrows(\n  () => {\n    dayOfYear("2020-06-28T1s"); // Error: Invalid Date string\n  },\n  Error,\n  "Invalid Date string"\n);\n')))}f.isMDXComponent=!0}}]);