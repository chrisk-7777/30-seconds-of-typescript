(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(500)),o={title:"initializeArrayWithRangeRight",tags:"array,math,intermediate"},c={id:"initializeArrayWithRangeRight",isDocsHomePage:!1,title:"initializeArrayWithRangeRight",description:"JS",source:"@site/docs/initializeArrayWithRangeRight.md",permalink:"/30-seconds-of-typescript/docs/initializeArrayWithRangeRight",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/initializeArrayWithRangeRight.md",sidebar:"someSidebar",previous:{title:"initializeArrayWithRange",permalink:"/30-seconds-of-typescript/docs/initializeArrayWithRange"},next:{title:"initializeArray",permalink:"/30-seconds-of-typescript/docs/initializeArray"}},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"}))),Object(i.b)("p",null,"Initializes an array containing the numbers in the specified range (in reverse) where ",Object(i.b)("inlineCode",{parentName:"p"},"start")," and ",Object(i.b)("inlineCode",{parentName:"p"},"end")," are inclusive with their common difference ",Object(i.b)("inlineCode",{parentName:"p"},"step"),"."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"Array.from(Math.ceil((end+1-start)/step))")," to create an array of the desired length(the amounts of elements is equal to ",Object(i.b)("inlineCode",{parentName:"p"},"(end-start)/step")," or ",Object(i.b)("inlineCode",{parentName:"p"},"(end+1-start)/step")," for inclusive end), ",Object(i.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," to fill with the desired values in a range.\nYou can omit ",Object(i.b)("inlineCode",{parentName:"p"},"start")," to use a default value of ",Object(i.b)("inlineCode",{parentName:"p"},"0"),".\nYou can omit ",Object(i.b)("inlineCode",{parentName:"p"},"step")," to use a default value of ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>\n  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(\n    (v, i, arr) => (arr.length - i - 1) * step + start\n  );\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]\ninitializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]\ninitializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]\n")))}s.isMDXComponent=!0},500:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);