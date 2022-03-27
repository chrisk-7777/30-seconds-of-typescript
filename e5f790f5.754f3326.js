(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{452:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(479)),p={title:"pipeFunctions",tags:"function,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "pipeFunctions" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},a={unversionedId:"pipeFunctions",id:"pipeFunctions",isDocsHomePage:!1,title:"pipeFunctions",description:'Implementation of "pipeFunctions" in typescript, javascript and deno.',source:"@site/docs/pipeFunctions.md",slug:"/pipeFunctions",permalink:"/30-seconds-of-typescript/docs/pipeFunctions",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/pipeFunctions.md",version:"current",sidebar:"someSidebar",previous:{title:"pipeAsyncFunctions",permalink:"/30-seconds-of-typescript/docs/pipeAsyncFunctions"},next:{title:"pluralize",permalink:"/30-seconds-of-typescript/docs/pluralize"}},c=[],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(i.b)("p",null,"Performs left-to-right function composition."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," with the spread operator (",Object(i.b)("inlineCode",{parentName:"p"},"..."),") to perform left-to-right function composition.\nThe first (leftmost) function can accept one or more arguments; the remaining functions must be unary."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const pipeFunctions = (...fns) =>\n  fns.reduce((f, g) => (...args) => g(f(...args)));\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"const add5 = (x) => x + 5;\nconst multiply = (x, y) => x * y;\nconst multiplyAndAdd5 = pipeFunctions(multiply, add5);\nmultiplyAndAdd5(5, 2); // 15\n")))}u.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(p,".").concat(d)]||l[d]||m[d]||i;return n?o.a.createElement(f,a(a({ref:t},s),{},{components:n})):o.a.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var s=2;s<i;s++)p[s]=n[s];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);