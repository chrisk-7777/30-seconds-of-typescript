(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{200:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(500)),c={title:"httpsRedirect",tags:"browser,url,intermediate"},i={id:"httpsRedirect",isDocsHomePage:!1,title:"httpsRedirect",description:"TS",source:"@site/docs/httpsRedirect.md",permalink:"/30-seconds-of-typescript/docs/httpsRedirect",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/httpsRedirect.md",sidebar:"someSidebar",previous:{title:"hide",permalink:"/30-seconds-of-typescript/docs/hide"},next:{title:"hz",permalink:"/30-seconds-of-typescript/docs/hz"}},p=[],s={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}))),Object(a.b)("p",null,"Redirects the page to HTTPS if its currently in HTTP. Also, pressing the back button doesn't take it back to the HTTP page as its replaced in the history."),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"location.protocol")," to get the protocol currently being used. If it's not HTTPS, use ",Object(a.b)("inlineCode",{parentName:"p"},"location.replace()")," to replace the existing page with the HTTPS version of the page. Use ",Object(a.b)("inlineCode",{parentName:"p"},"location.href")," to get the full address, split it with ",Object(a.b)("inlineCode",{parentName:"p"},"String.prototype.split()")," and remove the protocol part of the URL."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'const httpsRedirect = () => {\n  if (location.protocol !== "https:")\n    location.replace("https://" + location.href.split("//")[1]);\n};\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com\n")))}l.isMDXComponent=!0},500:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||a;return r?o.a.createElement(f,i(i({ref:t},s),{},{components:r})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);