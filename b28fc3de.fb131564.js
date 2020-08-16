(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{350:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(466)),i={title:"CSVToJSON",tags:"string,array,object,advanced",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "CSVToJSON" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"CSVToJSON",id:"CSVToJSON",isDocsHomePage:!1,title:"CSVToJSON",description:'Implementation of "CSVToJSON" in typescript, javascript and deno.',source:"@site/docs/CSVToJSON.md",permalink:"/30-seconds-of-typescript/docs/CSVToJSON",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/CSVToJSON.md",sidebar:"someSidebar",previous:{title:"CSVToArray",permalink:"/30-seconds-of-typescript/docs/CSVToArray"},next:{title:"currentURL",permalink:"/30-seconds-of-typescript/docs/currentURL"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(o.b)("p",null,"Converts a comma-separated values (CSV) string to a 2D array of objects.\nThe first row of the string is used as the title row."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.slice()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.indexOf('\\n')")," and ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.split(delimiter)")," to separate the first row (title row) into values.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.split('\\n')")," to create a string for each row, then ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"String.prototype.split(delimiter)")," to separate the values in each row.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.reduce()")," to create an object for each row's values, with the keys parsed from the title row.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"delimiter"),", to use a default delimiter of ",Object(o.b)("inlineCode",{parentName:"p"},","),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'type StringMap<T = string> = { [key: string]: T };\n\nconst CSVToJSON = (data: string, delimiter = ",") => {\n  const titles: string[] = data.slice(0, data.indexOf("\\n")).split(delimiter);\n  return data\n    .slice(data.indexOf("\\n") + 1)\n    .split("\\n")\n    .map((v) => {\n      const values = v.split(delimiter);\n      return titles.reduce(\n        (obj, title, index) => ((obj[title] = values[index]), obj),\n        {} as StringMap\n      );\n    });\n};\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"CSVToJSON(\"col1,col2\\na,b\\nc,d\"); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];\nCSVToJSON(\"col1;col2\\na;b\\nc;d\", \";\"); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];\n")))}l.isMDXComponent=!0},466:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);