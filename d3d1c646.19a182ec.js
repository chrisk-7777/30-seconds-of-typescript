(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{441:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(2),o=(t(0),t(501));const a={id:"bindAll",sidebar_label:"bindAll",title:"BindAll",tags:"object,function,intermediate"},c={id:"bindAll",isDocsHomePage:!1,title:"BindAll",description:"TS",source:"@site/docs/bindAll.md",permalink:"/30-seconds-of-typescript/docs/bindAll",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/bindAll.md",sidebar_label:"bindAll",sidebar:"someSidebar",previous:{title:"Bind",permalink:"/30-seconds-of-typescript/docs/bind"},next:{title:"bindKey",permalink:"/30-seconds-of-typescript/docs/bindKey"}},i=[],l={rightToc:i};function s({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"JS"}))),Object(o.b)("p",null,"Binds methods of an object to the object itself, overwriting the existing method."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.forEach()")," to return a ",Object(o.b)("inlineCode",{parentName:"p"},"function")," that uses ",Object(o.b)("inlineCode",{parentName:"p"},"Function.prototype.apply()")," to apply the given context (",Object(o.b)("inlineCode",{parentName:"p"},"obj"),") to ",Object(o.b)("inlineCode",{parentName:"p"},"fn")," for each function specified."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'export const bindAll = (obj: any, ...fns: string[]) =>\n  fns.forEach((key: string) => {\n    if (typeof obj[key] === "function") {\n      const f = obj[key];\n      obj[key] = function (...args: any[]) {\n        return f.apply(obj, args);\n      };\n    }\n  });\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class User {\n  #name = "Test";\n  getName() {\n    return this.#name;\n  }\n}\nconst user = new User();\nbindAll(user, "getName");\n\nconst getName = user.getName;\nassertEquals(getName(), "Test");\n\n// JS\nvar view = {\n  label: "docs",\n  click: function () {\n    console.log("clicked " + this.label);\n  },\n};\nbindAll(view, "click");\njQuery(element).on("click", view.click); // Logs \'clicked docs\' when clicked.\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"React:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'class Toggle extends React.Component {\n  constructor(props) {\n    super(props);\n    bindAll(this, "handleClick", "handleMove");\n  }\n\n  handleClick() {\n    // code\n  }\n  handleMove() {\n    // code\n  }\n  render() {\n    // code\n  }\n}\n')))}s.isMDXComponent=!0},501:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return t?o.a.createElement(f,i(i({ref:n},s),{},{components:t})):o.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);