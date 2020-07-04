(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{453:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(500)),o={title:"indentString",tags:"string,beginner"},c={id:"indentString",isDocsHomePage:!1,title:"indentString",description:"TS",source:"@site/docs/indentString.md",permalink:"/30-seconds-of-typescript/docs/indentString",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/indentString.md",sidebar:"someSidebar",previous:{title:"includesAny",permalink:"/30-seconds-of-typescript/docs/includesAny"},next:{title:"indexOfAll",permalink:"/30-seconds-of-typescript/docs/indexOfAll"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-typescript-blue.svg?style=flat-square",alt:"TS"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-deno-green.svg?style=flat-square",alt:"Deno"}))),Object(i.b)("p",null,"Indents each line in the provided string."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"String.replace")," and a regular expression to add the character specified by ",Object(i.b)("inlineCode",{parentName:"p"},"indent")," ",Object(i.b)("inlineCode",{parentName:"p"},"count")," times at the start of each line.\nOmit the third parameter, ",Object(i.b)("inlineCode",{parentName:"p"},"indent"),", to use a default indentation character of ",Object(i.b)("inlineCode",{parentName:"p"},"' '"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'const indentString = (str: string, count: number, indent = " ") => {\n  indent = indent.repeat(count);\n  return str.replace(/^/gm, indent);\n};\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'indentString("Lorem\\nIpsum", 2); // \'  Lorem\\n  Ipsum\'\nindentString("Lorem\\nIpsum", 2, "_"); // \'__Lorem\\n__Ipsum\'\n')))}l.isMDXComponent=!0},500:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);