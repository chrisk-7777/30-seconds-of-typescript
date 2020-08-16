(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(466)),s={title:"createEventHub",tags:"browser,event,advanced",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "createEventHub" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},o={unversionedId:"createEventHub",id:"createEventHub",isDocsHomePage:!1,title:"createEventHub",description:'Implementation of "createEventHub" in typescript, javascript and deno.',source:"@site/docs/createEventHub.md",permalink:"/30-seconds-of-typescript/docs/createEventHub",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/createEventHub.md",sidebar:"someSidebar",previous:{title:"createElement",permalink:"/30-seconds-of-typescript/docs/createElement"},next:{title:"CSVToArray",permalink:"/30-seconds-of-typescript/docs/CSVToArray"}},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(i.b)("p",null,"Creates a pub/sub (",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern"}),"publish\u2013subscribe"),") event hub with ",Object(i.b)("inlineCode",{parentName:"p"},"emit"),", ",Object(i.b)("inlineCode",{parentName:"p"},"on"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"off")," methods."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"Object.create(null)")," to create an empty ",Object(i.b)("inlineCode",{parentName:"p"},"hub")," object that does not inherit properties from ",Object(i.b)("inlineCode",{parentName:"p"},"Object.prototype"),".\nFor ",Object(i.b)("inlineCode",{parentName:"p"},"emit"),", resolve the array of handlers based on the ",Object(i.b)("inlineCode",{parentName:"p"},"event")," argument and then run each one with ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," by passing in the data as an argument.\nFor ",Object(i.b)("inlineCode",{parentName:"p"},"on"),", create an array for the event if it does not yet exist, then use ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.push()")," to add the handler\nto the array.\nFor ",Object(i.b)("inlineCode",{parentName:"p"},"off"),", use ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.findIndex()")," to find the index of the handler in the event array and remove it using ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.splice()"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),"const createEventHub = <T = any>() => ({\n  hub: Object.create(null),\n  emit(event: string, data?: T) {\n    (this.hub[event] || []).forEach((handler: Func<T | undefined>) =>\n      handler(data)\n    );\n  },\n  on(event: string, handler: Func<T>) {\n    if (!this.hub[event]) this.hub[event] = [];\n    this.hub[event].push(handler);\n  },\n  off(event: string, handler: Func<T>) {\n    const i = (this.hub[event] || []).findIndex((h: Func<T>) => h === handler);\n    if (i > -1) this.hub[event].splice(i, 1);\n    if (this.hub[event]?.length === 0) delete this.hub[event];\n  },\n});\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Basic String emitter:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'const handler = (data: string) => console.log(data);\nconst hub = createEventHub<string>();\n\n// Subscribe: listen for different types of events\nhub.on("message", handler);\nhub.on("message", () => console.log("Message event fired"));\n\n// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument\nhub.emit("message", "hello world"); // logs \'hello world\' and \'Message event fired\'\n\n// Unsubscribe: stop a specific handler from listening to the \'message\' event\nhub.off("message", handler);\nhub.emit("message", "hello world");\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Number Incremental:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'let increment = 0;\nconst numEmitter = createEventHub<number>();\nconst incrementHandler = () => increment++;\nnumEmitter.on("increment", incrementHandler);\nnumEmitter.emit("increment"); // `increment` variable is now 1\nnumEmitter.emit("increment"); // `increment` variable is now 1\nnumEmitter.off("increment", incrementHandler);\nnumEmitter.emit("increment"); // `increment` variable is now 1\nassertEquals(increment, 2);\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"User Emitter:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typescript"',title:'"typescript"'}),'interface User {\n  name: string;\n}\nlet user: User | undefined;\nconst userEmitter = createEventHub<User>();\nconst updateUser = (u: User) => (user = u);\nuserEmitter.on("update", updateUser);\nuserEmitter.emit("update", { name: "Deepak" });\n\nassertEquals(user, { name: "Deepak" });\n')))}l.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(d,o(o({ref:t},p),{},{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);