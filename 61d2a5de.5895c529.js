(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{252:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(2),o=(t(0),t(501));const a={title:"runAsync",tags:"browser,function,advanced,promise,url"},c={id:"runAsync",isDocsHomePage:!1,title:"runAsync",description:"Runs a function in a separate thread by using a Web Worker, allowing long running functions to not block the UI.",source:"@site/docs/runAsync.md",permalink:"/30-seconds-of-typescript/docs/runAsync",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/runAsync.md"},i=[],s={rightToc:i};function u({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Runs a function in a separate thread by using a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"}),"Web Worker"),", allowing long running functions to not block the UI."),Object(o.b)("p",null,"Create a new ",Object(o.b)("inlineCode",{parentName:"p"},"Worker")," using a ",Object(o.b)("inlineCode",{parentName:"p"},"Blob")," object URL, the contents of which should be the stringified version of the supplied function.\nImmediately post the return value of calling the function back.\nReturn a promise, listening for ",Object(o.b)("inlineCode",{parentName:"p"},"onmessage")," and ",Object(o.b)("inlineCode",{parentName:"p"},"onerror")," events and resolving the data posted back from the worker, or throwing an error."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const runAsync = fn => {\n  const worker = new Worker(\n    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {\n      type: 'application/javascript; charset=utf-8'\n    })\n  );\n  return new Promise((res, rej) => {\n    worker.onmessage = ({ data }) => {\n      res(data), worker.terminate();\n    };\n    worker.onerror = err => {\n      rej(err), worker.terminate();\n    };\n  });\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const longRunningFunction = () => {\n  let result = 0;\n  for (let i = 0; i < 1000; i++)\n    for (let j = 0; j < 700; j++) for (let k = 0; k < 300; k++) result = result + i + j + k;\n\n  return result;\n};\n/*\n  NOTE: Since the function is running in a different context, closures are not supported.\n  The function supplied to `runAsync` gets stringified, so everything becomes literal.\n  All variables and functions must be defined inside.\n*/\nrunAsync(longRunningFunction).then(console.log); // 209685000000\nrunAsync(() => 10 ** 3).then(console.log); // 1000\nlet outsideVariable = 50;\nrunAsync(() => typeof outsideVariable).then(console.log); // 'undefined'\n")))}u.isMDXComponent=!0},501:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),b=r,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return t?o.a.createElement(d,i(i({ref:n},u),{},{components:t})):o.a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);