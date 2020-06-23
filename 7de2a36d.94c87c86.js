(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{299:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(2),a=t(6),o=(t(0),t(503)),i={id:"arrayToCSV",sidebar_label:"ArrayToCSV",title:"arrayToCSV",tags:"array,string,intermediate"},c={id:"arrayToCSV",isDocsHomePage:!1,title:"arrayToCSV",description:"Converts a 2D array to a comma-separated values (CSV) string.",source:"@site/docs/arrayToCSV.md",permalink:"/30-seconds-of-typescript/docs/arrayToCSV",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/arrayToCSV.md",sidebar_label:"ArrayToCSV",sidebar:"someSidebar",previous:{title:"approximatelyEqual",permalink:"/30-seconds-of-typescript/docs/approximatelyEqual"}},p=[],l={rightToc:p};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Converts a 2D array to a comma-separated values (CSV) string."),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.map()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.join(delimiter)")," to combine individual 1D arrays (rows) into strings.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Array.prototype.join('\\n')")," to combine all rows into a CSV string, separating each row with a newline.\nOmit the second argument, ",Object(o.b)("inlineCode",{parentName:"p"},"delimiter"),", to use a default delimiter of ",Object(o.b)("inlineCode",{parentName:"p"},","),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'type StringOrNumber = string | number;\nconst arrayToCSV = (arr: StringOrNumber[][], delimiter = ",") =>\n  arr\n    .map((v) =>\n      v\n        .map((x) => (typeof x === "string" ? `"${x.replace(/"/g, \'""\')}"` : x))\n        .join(delimiter)\n    )\n    .join("\\n");\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"arrayToCSV([['a', 'b'], ['c', 'd']]); // '\"a\",\"b\"\\n\"c\",\"d\"'\narrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '\"a\";\"b\"\\n\"c\";\"d\"'\narrayToCSV([['a', '\"b\" great'], ['c', 3.1415]]); // '\"a\",\"\"\"b\"\" great\"\\n\"c\",3.1415'\n")))}s.isMDXComponent=!0},503:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,c(c({ref:r},l),{},{components:t})):a.a.createElement(d,c({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);