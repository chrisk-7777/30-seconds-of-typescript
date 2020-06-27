(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{446:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),i=(r(0),r(501));const o={id:"createDirIfNotExists",sidebar_label:"createDirIfNotExists",title:"createDirIfNotExists",tags:"node,beginner"},s={id:"createDirIfNotExists",isDocsHomePage:!1,title:"createDirIfNotExists",description:"TS",source:"@site/docs/createDirIfNotExists.md",permalink:"/30-seconds-of-typescript/docs/createDirIfNotExists",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/createDirIfNotExists.md",sidebar_label:"createDirIfNotExists",sidebar:"someSidebar",previous:{title:"curry",permalink:"/30-seconds-of-typescript/docs/curry"},next:{title:"createDirIfNotExistsSync",permalink:"/30-seconds-of-typescript/docs/createDirIfNotExistsSync"}},c=[],a={rightToc:c};function p({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},a,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-nodejs-green.svg?style=flat-square",alt:"NODE"}))),Object(i.b)("p",null,"Creates a directory, if it does not exist."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"fs.exists()")," to check if the directory exists, ",Object(i.b)("inlineCode",{parentName:"p"},"fs.mkdir()")," to create it. Checkout ",Object(i.b)("inlineCode",{parentName:"p"},"createDirIfNotExistsSync")," for synchronous API."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'const { mkdir, exists } = require("fs");\nconst { promisify } = require("util");\nconst mkdirP = promisify(mkdir);\nconst existsP = promisify(exists);\n\nconst createDirIfNotExists = async (dir: string) =>\n  !(await existsP(dir)) ? await mkdirP(dir) : undefined;\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"(async function () {\n  console.log(await createDirIfNotExists(\"test\")); // creates the directory 'test', if it doesn't exist\n})();\n")))}p.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,b=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?i.a.createElement(b,c(c({ref:t},p),{},{components:r})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);