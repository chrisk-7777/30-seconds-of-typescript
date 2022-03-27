"use strict";(self.webpackChunk_deepakvishwakarma_ts_util=self.webpackChunk_deepakvishwakarma_ts_util||[]).push([[4413],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(s,".").concat(f)]||u[f]||l[f]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},78346:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"formToObject",tags:["browser","object","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "formToObject" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s=void 0,p={unversionedId:"formToObject",id:"formToObject",title:"formToObject",description:'Implementation of "formToObject" in typescript, javascript and deno.',source:"@site/docs/formToObject.md",sourceDirName:".",slug:"/formToObject",permalink:"/30-seconds-of-typescript/docs/formToObject",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/formToObject.md",tags:[{label:"browser",permalink:"/30-seconds-of-typescript/docs/tags/browser"},{label:"object",permalink:"/30-seconds-of-typescript/docs/tags/object"},{label:"intermediate",permalink:"/30-seconds-of-typescript/docs/tags/intermediate"}],version:"current",frontMatter:{title:"formToObject",tags:["browser","object","intermediate"],author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "formToObject" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},sidebar:"someSidebar",previous:{title:"forOwnRight",permalink:"/30-seconds-of-typescript/docs/forOwnRight"},next:{title:"formatDuration",permalink:"/30-seconds-of-typescript/docs/formatDuration"}},m={},l=[],u={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),(0,a.kt)("p",null,"Encode a set of form elements as an ",(0,a.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"FormData")," constructor to convert the HTML ",(0,a.kt)("inlineCode",{parentName:"p"},"form")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"FormData"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.from()")," to convert to an array.\nCollect the object from the array, using ",(0,a.kt)("inlineCode",{parentName:"p"},"Array.prototype.reduce()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"interface IFormData {\n  new (form: any): FormData;\n}\n\nconst formToObject = (form: any) => {\n  const F = FormData as IFormData;\n  Array.from(new F(form)).reduce(\n    (acc, [key, value]) => ({\n      ...acc,\n      [key]: value,\n    }),\n    {}\n  );\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<form id="form" name="form">\n  <div>\n    <label for="username">Enter name:</label>\n    <input type="text" id="username" name="username" />\n  </div>\n  <div>\n    <label for="email">Enter email:</label>\n    <input type="text" id="email" name="email" />\n  </div>\n  <input type="submit" value="Submit!" />\n</form>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"formToObject(document.querySelector(\"#form\")); // { email: 'test@email.com', username: 'Test Name' }\n")))}f.isMDXComponent=!0}}]);