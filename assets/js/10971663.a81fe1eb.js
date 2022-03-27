"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[1776],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(p,".").concat(f)]||m[f]||l[f]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={title:"pipeAsyncFunctions",tags:["function","promise","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "pipeAsyncFunctions" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p=void 0,c={unversionedId:"pipeAsyncFunctions",id:"pipeAsyncFunctions",title:"pipeAsyncFunctions",description:'Implementation of "pipeAsyncFunctions" in typescript, javascript and deno.',source:"@site/docs/pipeAsyncFunctions.md",sourceDirName:".",slug:"/pipeAsyncFunctions",permalink:"/30-seconds-of-typescript/docs/pipeAsyncFunctions",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/pipeAsyncFunctions.md",tags:[{label:"function",permalink:"/30-seconds-of-typescript/docs/tags/function"},{label:"promise",permalink:"/30-seconds-of-typescript/docs/tags/promise"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"pipeAsyncFunctions",tags:["function","promise","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "pipeAsyncFunctions" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"pickBy",permalink:"/30-seconds-of-typescript/docs/pickBy"},next:{title:"pipeFunctions",permalink:"/30-seconds-of-typescript/docs/pipeFunctions"}},u={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),(0,i.kt)("p",null,"Performs left-to-right function composition for asynchronous functions."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," and the spread operator (",(0,i.kt)("inlineCode",{parentName:"p"},"..."),") to perform function composition using ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.then()"),".\nThe functions can return a combination of normal values, ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"s or be ",(0,i.kt)("inlineCode",{parentName:"p"},"async"),", returning through ",(0,i.kt)("inlineCode",{parentName:"p"},"await"),".\nAll functions must accept a single argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"type PromiseReturn = (v: any) => Promise<any>;\nconst pipeAsyncFunctions =\n  (...fns: PromiseReturn[]) =>\n  (arg: any) =>\n    fns.reduce((p, f) => p.then(f), Promise.resolve(arg) as PromiseLike<any>);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const sum = pipeAsyncFunctions(\n  (x) => x + 1,\n  (x) => new Promise((resolve) => setTimeout(() => resolve(x + 2), 1000)),\n  (x) => x + 3,\n  async (x) => (await x) + 4\n);\n(async () => {\n  console.log(await sum(5)); // 15 (after one second)\n})();\n")))}f.isMDXComponent=!0}}]);