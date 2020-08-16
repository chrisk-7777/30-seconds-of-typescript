(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(466)),i={title:"debounce",tags:"function,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "debounce" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"debounce",id:"debounce",isDocsHomePage:!1,title:"debounce",description:'Implementation of "debounce" in typescript, javascript and deno.',source:"@site/docs/debounce.md",permalink:"/30-seconds-of-typescript/docs/debounce",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/debounce.md",sidebar:"someSidebar",previous:{title:"dayOfYear",permalink:"/30-seconds-of-typescript/docs/dayOfYear"},next:{title:"decapitalize",permalink:"/30-seconds-of-typescript/docs/decapitalize"}},s=[],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(o.b)("p",null,"Creates a debounced function that delays invoking the provided function until at least ",Object(o.b)("inlineCode",{parentName:"p"},"ms")," milliseconds have elapsed since the last time it was invoked."),Object(o.b)("p",null,"Each time the debounced function is invoked, clear the current pending timeout with ",Object(o.b)("inlineCode",{parentName:"p"},"clearTimeout()")," and use ",Object(o.b)("inlineCode",{parentName:"p"},"setTimeout()")," to create a new timeout that delays invoking the function until at least ",Object(o.b)("inlineCode",{parentName:"p"},"ms")," milliseconds has elapsed. Use ",Object(o.b)("inlineCode",{parentName:"p"},"Function.prototype.apply()")," to apply the ",Object(o.b)("inlineCode",{parentName:"p"},"this")," context to the function and provide the necessary arguments.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"ms"),", to set the timeout at a default of 0 ms."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const debounce = (fn: Function, ms = 300) => {\n  let timeoutId: ReturnType<typeof setTimeout>;\n  return function (this: any, ...args: any[]) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), ms);\n  };\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'window.addEventListener(\n  "resize",\n  debounce(() => {\n    console.log(window.innerWidth);\n    console.log(window.innerHeight);\n  }, 250)\n); // Will log the window dimensions at most every 250ms\n\nlet counter = 0;\nconst updateState = () => {\n  counter++;\n};\nconst debouncedUpdate = debounce(updateState);\ndebouncedUpdate(); // counter == 1\ndebouncedUpdate(); // counter == 1\nawait delay(300); // counter == 1\nassertEquals(counter, 1);\ndebouncedUpdate(); // counter == 2\nawait delay(300); // counter == 2\nassertEquals(counter, 2);\n')))}u.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,b=l["".concat(i,".").concat(m)]||l[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);