(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{479:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(o,".").concat(d)]||u[d]||g[d]||s;return r?a.a.createElement(f,c(c({ref:t},p),{},{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<s;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),s=(r(0),r(479)),o={title:"hasFlags",tags:"node,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "hasFlags" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"hasFlags",id:"hasFlags",isDocsHomePage:!1,title:"hasFlags",description:'Implementation of "hasFlags" in typescript, javascript and deno.',source:"@site/docs/hasFlags.md",slug:"/hasFlags",permalink:"/30-seconds-of-typescript/docs/hasFlags",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/hasFlags.md",version:"current",sidebar:"someSidebar",previous:{title:"hasClass",permalink:"/30-seconds-of-typescript/docs/hasClass"},next:{title:"hashBrowser",permalink:"/30-seconds-of-typescript/docs/hashBrowser"}},i=[],p={toc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(s.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(s.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(s.b)("p",null,"Check if the current process's arguments contain the specified flags."),Object(s.b)("p",null,"Use ",Object(s.b)("inlineCode",{parentName:"p"},"Array.prototype.every()")," and ",Object(s.b)("inlineCode",{parentName:"p"},"Array.prototype.includes()")," to check if ",Object(s.b)("inlineCode",{parentName:"p"},"process.argv")," contains all the specified flags.\nUse a regular expression to test if the specified flags are prefixed with ",Object(s.b)("inlineCode",{parentName:"p"},"-")," or ",Object(s.b)("inlineCode",{parentName:"p"},"--")," and prefix them accordingly."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const hasFlags = (args: string[], ...flags: string[]) =>\n  flags.every((flag) =>\n    args.includes(/^-{1,2}/.test(flag) ? flag : "--" + flag)\n  );\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'// node myScript.js -s --test --cool=true\nhasFlags(process.argv, "-s"); // true\nhasFlags(process.argv, "--test", "cool=true", "-s"); // true\nhasFlags(process.argv, "special"); // false\n\n// Another use case\n\nconst processHasFlags = curry(hasFlags, 2)(process.argv);\nassertEquals(processHasFlags("-s"), true);\nassertEquals(processHasFlags("--tests"), false);\n')))}l.isMDXComponent=!0}}]);