(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(466)),s={title:"formatDate",tags:"function,intermediate,date",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "formatDate" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},i={unversionedId:"formatDate",id:"formatDate",isDocsHomePage:!1,title:"formatDate",description:'Implementation of "formatDate" in typescript, javascript and deno.',source:"@site/docs/formatDate.md",permalink:"/30-seconds-of-typescript/docs/formatDate",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/formatDate.md",sidebar:"someSidebar",previous:{title:"formatDuration",permalink:"/30-seconds-of-typescript/docs/formatDuration"},next:{title:"frequencies",permalink:"/30-seconds-of-typescript/docs/frequencies"}},c=[],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(o.b)("p",null,"Format date based on format staring, using regex match"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const padLeft = (str: string | number, num: number = 2, fill = "0") =>\n  String(str).padStart(num, fill);\n\nconst formatDate = (formatStr: string, date: Date | string) => {\n  const d = new Date(date);\n  const time: any = {\n    YY: padLeft(d.getFullYear()).substr(2, 4),\n    YYYY: padLeft(d.getFullYear()),\n    MM: padLeft(d.getMonth() + 1),\n    DD: padLeft(d.getDate()),\n    hh: padLeft(d.getHours()),\n    mm: padLeft(d.getMinutes()),\n    ss: padLeft(d.getSeconds()),\n    M: padLeft(d.getMilliseconds(), 3),\n  };\n  return formatStr.replace(\n    new RegExp(`${Object.keys(time).join("|")}`, "g"),\n    (subStr: string) => {\n      return time[subStr] || "";\n    }\n  );\n};\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const date = new Date(2020, 7, 22, 22, 22, 22, 222);\nformatDate("YYYY-DD-MM hh:mm:ss M", date); //"2020-22-08 22:22:22 222"\n\nconst date2 = new Date(2020, 7, 9, 9, 9, 9, 99);\nformatDate("YYYY-DD-MM hh:mm:ss M", date2); // "2020-09-08 09:09:09 099"\n')))}u.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,f=l["".concat(s,".").concat(d)]||l[d]||m[d]||o;return n?a.a.createElement(f,i(i({ref:t},p),{},{components:n})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);