(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(466)),i={title:"on",tags:"browser,event,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "on" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"on",id:"on",isDocsHomePage:!1,title:"on",description:'Implementation of "on" in typescript, javascript and deno.',source:"@site/docs/on.md",permalink:"/30-seconds-of-typescript/docs/on",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/on.md",sidebar:"someSidebar",previous:{title:"omitBy",permalink:"/30-seconds-of-typescript/docs/omitBy"},next:{title:"onUserInputChange",permalink:"/30-seconds-of-typescript/docs/onUserInputChange"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(a.b)("p",null,"Adds an event listener to an element with the ability to use event delegation."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"EventTarget.addEventListener()")," to add an event listener to an element.\nIf there is a ",Object(a.b)("inlineCode",{parentName:"p"},"target")," property supplied to the options object, ensure the event target matches the target specified and then invoke the callback by supplying the correct ",Object(a.b)("inlineCode",{parentName:"p"},"this")," context.\nReturns a reference to the custom delegator function, in order to be possible to use with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#off"}),Object(a.b)("inlineCode",{parentName:"a"},"off")),".\nOmit ",Object(a.b)("inlineCode",{parentName:"p"},"opts")," to default to non-delegation behavior and event bubbling."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const on = (el, evt, fn, opts = {}) => {\n  const delegatorFn = (e) =>\n    e.target.matches(opts.target) && fn.call(e.target, e);\n  el.addEventListener(\n    evt,\n    opts.target ? delegatorFn : fn,\n    opts.options || false\n  );\n  if (opts.target) return delegatorFn;\n};\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const fn = () => console.log("!");\non(document.body, "click", fn); // logs \'!\' upon clicking the body\non(document.body, "click", fn, { target: "p" }); // logs \'!\' upon clicking a `p` element child of the body\non(document.body, "click", fn, { options: true }); // use capturing instead of bubbling\n')))}l.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);