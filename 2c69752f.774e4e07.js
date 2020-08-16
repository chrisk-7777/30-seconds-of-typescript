(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(466)),c={title:"mapValues",tags:"object,function,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "mapValues" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"mapValues",id:"mapValues",isDocsHomePage:!1,title:"mapValues",description:'Implementation of "mapValues" in typescript, javascript and deno.',source:"@site/docs/mapValues.md",permalink:"/30-seconds-of-typescript/docs/mapValues",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/mapValues.md",sidebar:"someSidebar",previous:{title:"mapString",permalink:"/30-seconds-of-typescript/docs/mapString"},next:{title:"mask",permalink:"/30-seconds-of-typescript/docs/mask"}},p=[],i={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Creates an object with the same keys as the provided object and values generated by running the provided function for each value."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Object.keys(obj)")," to iterate over the object's keys.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to create a new object with the same keys and mapped values using ",Object(o.b)("inlineCode",{parentName:"p"},"fn"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const mapValues = (obj, fn) =>\n  Object.keys(obj).reduce((acc, k) => {\n    acc[k] = fn(obj[k], k, obj);\n    return acc;\n  }, {});\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const users = {\n  fred: { user: "fred", age: 40 },\n  pebbles: { user: "pebbles", age: 1 },\n};\nmapValues(users, (u) => u.age); // { fred: 40, pebbles: 1 }\n')))}u.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,d=l["".concat(c,".").concat(m)]||l[m]||b[m]||o;return n?a.a.createElement(d,s(s({ref:t},i),{},{components:n})):a.a.createElement(d,s({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);