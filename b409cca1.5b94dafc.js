(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{353:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(466)),i={title:"recordAnimationFrames",tags:"browser,intermediate",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "recordAnimationFrames" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},c={unversionedId:"recordAnimationFrames",id:"recordAnimationFrames",isDocsHomePage:!1,title:"recordAnimationFrames",description:'Implementation of "recordAnimationFrames" in typescript, javascript and deno.',source:"@site/docs/recordAnimationFrames.md",permalink:"/30-seconds-of-typescript/docs/recordAnimationFrames",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/recordAnimationFrames.md",sidebar:"someSidebar",previous:{title:"rearg",permalink:"/30-seconds-of-typescript/docs/rearg"},next:{title:"redirect",permalink:"/30-seconds-of-typescript/docs/redirect"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(o.b)("p",null,"Invokes the provided callback on each animation frame."),Object(o.b)("p",null,"Use recursion.\nProvided that ",Object(o.b)("inlineCode",{parentName:"p"},"running")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", continue invoking ",Object(o.b)("inlineCode",{parentName:"p"},"window.requestAnimationFrame()")," which invokes the provided callback.\nReturn an object with two methods ",Object(o.b)("inlineCode",{parentName:"p"},"start")," and ",Object(o.b)("inlineCode",{parentName:"p"},"stop")," to allow manual control of the recording.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"autoStart"),", to implicitly call ",Object(o.b)("inlineCode",{parentName:"p"},"start")," when the function is invoked."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const recordAnimationFrames = (callback, autoStart = true) => {\n  let running = true,\n    raf;\n  const stop = () => {\n    running = false;\n    cancelAnimationFrame(raf);\n  };\n  const start = () => {\n    running = true;\n    run();\n  };\n  const run = () => {\n    raf = requestAnimationFrame(() => {\n      callback();\n      if (running) run();\n    });\n  };\n  if (autoStart) start();\n  return { start, stop };\n};\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const cb = () => console.log(\"Animation frame fired\");\nconst recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame\nrecorder.stop(); // stops logging\nrecorder.start(); // starts again\nconst recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames\n")))}l.isMDXComponent=!0},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);