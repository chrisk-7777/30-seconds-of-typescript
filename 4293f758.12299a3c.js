(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(466)),i={title:"humanizeUrl",tags:"string,regexp,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "humanizeUrl" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},l={unversionedId:"humanizeUrl",id:"humanizeUrl",isDocsHomePage:!1,title:"humanizeUrl",description:'Implementation of "humanizeUrl" in typescript, javascript and deno.',source:"@site/docs/humanizeUrl.md",permalink:"/30-seconds-of-typescript/docs/humanizeUrl",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/humanizeUrl.md"},s=[],c={rightToc:s};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(o.b)("p",null,"Converts a string to humanize string url"),Object(o.b)("p",null,"The \\w metacharacter is used to find a word character.\nReplace all non character with -.\nNote: A word character is a character from a-z, A-Z, 0-9, including the ","_"," (underscore) character."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'const humanizeUrl = (\n  str: string,\n  preserveUndersore = false,\n  preserveCase = false\n) => {\n  const re = preserveUndersore ? /[\\W]+/g : /[\\W_]+/g;\n  return preserveCase\n    ? str.replace(re, "-")\n    : str.replace(re, "-").toLowerCase();\n};\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'humanizeUrl("Some label URL"); // "some-label-url"\nhumanizeUrl("Some 1label 2URL"); // "some-1label-2url"\nhumanizeUrl("Some 1_label 2_URL"); // "some-1-label-2-url"\nhumanizeUrl("Some$1_label$ $2URL"); // "some-1-label-2url"\nhumanizeUrl("Some 1_label 2_URL", true); // "some-1_label-2_url"\nhumanizeUrl("Some$1_label$ $2URL", false, true); // "Some-1-label-2URL"\n\nconst word = "IAmListening To FMWhileLoading";\nconst humanizeUrlWordBreak = (str: string) =>\n  humanizeUrl(toSnakeCase(str) || "");\nhumanizeUrlWordBreak(word); //"i-am-listening-to-fm-while-loading");\n')))}p.isMDXComponent=!0},466:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),b=n,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||o;return r?a.a.createElement(d,l(l({ref:t},c),{},{components:r})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);