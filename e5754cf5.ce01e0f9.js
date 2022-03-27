(window.webpackJsonp=window.webpackJsonp||[]).push([[379],{451:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(479)),p={title:"deepMapKeys",tags:"object,recursion,advanced",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "deepMapKeys" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"deepMapKeys",id:"deepMapKeys",isDocsHomePage:!1,title:"deepMapKeys",description:'Implementation of "deepMapKeys" in typescript, javascript and deno.',source:"@site/docs/deepMapKeys.md",slug:"/deepMapKeys",permalink:"/30-seconds-of-typescript/docs/deepMapKeys",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/deepMapKeys.md",version:"current",sidebar:"someSidebar",previous:{title:"deepGet",permalink:"/30-seconds-of-typescript/docs/deepGet"},next:{title:"defaults",permalink:"/30-seconds-of-typescript/docs/defaults"}},s=[],i={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Deep maps an object's keys."),Object(o.b)("p",null,"Creates an object with the same values as the provided object and keys generated by running the provided function for each key.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Object.keys(obj)")," to iterate over the object's keys.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to create a new object with the same values and mapped keys using ",Object(o.b)("inlineCode",{parentName:"p"},"fn"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const deepMapKeys = (obj, fn) =>\n  Array.isArray(obj)\n    ? obj.map((val) => deepMapKeys(val, fn))\n    : typeof obj === "object"\n    ? Object.keys(obj).reduce((acc, current) => {\n        const key = fn(current);\n        const val = obj[current];\n        acc[key] =\n          val !== null && typeof val === "object" ? deepMapKeys(val, fn) : val;\n        return acc;\n      }, {})\n    : obj;\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const obj = {\n  foo: "1",\n  nested: {\n    child: {\n      withArray: [\n        {\n          grandChild: ["hello"],\n        },\n      ],\n    },\n  },\n};\nconst upperKeysObj = deepMapKeys(obj, (key) => key.toUpperCase());\n/*\n{\n  "FOO":"1",\n  "NESTED":{\n    "CHILD":{\n      "WITHARRAY":[\n        {\n          "GRANDCHILD":[ \'hello\' ]\n        }\n      ]\n    }\n  }\n}\n*/\n')))}l.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,y=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(y,c(c({ref:t},i),{},{components:n})):a.a.createElement(y,c({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);