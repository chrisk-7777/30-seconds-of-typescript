(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),a=(n(0),n(479)),o={title:"nest",tags:"object,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "nest" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},s={unversionedId:"nest",id:"nest",isDocsHomePage:!1,title:"nest",description:'Implementation of "nest" in typescript, javascript and deno.',source:"@site/docs/nest.md",slug:"/nest",permalink:"/30-seconds-of-typescript/docs/nest",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/nest.md",version:"current",sidebar:"someSidebar",previous:{title:"negate",permalink:"/30-seconds-of-typescript/docs/negate"},next:{title:"nodeListToArray",permalink:"/30-seconds-of-typescript/docs/nodeListToArray"}},c=[],p={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(a.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"})),Object(a.b)("p",null,"Given a flat array of objects linked to one another, it will nest them recursively.\nUseful for nesting comments, such as the ones on reddit.com."),Object(a.b)("p",null,"Use recursion.\nUse ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.filter()")," to filter the items where the ",Object(a.b)("inlineCode",{parentName:"p"},"id")," matches the ",Object(a.b)("inlineCode",{parentName:"p"},"link"),", then ",Object(a.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to map each one to a new object that has a ",Object(a.b)("inlineCode",{parentName:"p"},"children")," property which recursively nests the items based on which ones are children of the current item.\nOmit the second argument, ",Object(a.b)("inlineCode",{parentName:"p"},"id"),", to default to ",Object(a.b)("inlineCode",{parentName:"p"},"null")," which indicates the object is not linked to another one (i.e. it is a top level object).\nOmit the third argument, ",Object(a.b)("inlineCode",{parentName:"p"},"link"),", to use ",Object(a.b)("inlineCode",{parentName:"p"},"'parent_id'")," as the default property which links the object to another one by its ",Object(a.b)("inlineCode",{parentName:"p"},"id"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const nest = (\n  items: AnyObject[],\n  id: number | null = null,\n  link = "parent_id"\n): AnyObject =>\n  items\n    .filter((item) => item[link] === id)\n    .map((item) => ({ ...item, children: nest(items, item.id, link) }));\n')),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},"// One top level comment\nconst comments = [\n  { id: 1, parent_id: null },\n  { id: 2, parent_id: 1 },\n  { id: 3, parent_id: 1 },\n  { id: 4, parent_id: 2 },\n  { id: 5, parent_id: 4 },\n];\nconst nestedComments = nest(comments); // [{ id: 1, parent_id: null, children: [...] }]\n")))}l.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,b=d["".concat(o,".").concat(u)]||d[u]||m[u]||a;return n?i.a.createElement(b,s(s({ref:t},p),{},{components:n})):i.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);