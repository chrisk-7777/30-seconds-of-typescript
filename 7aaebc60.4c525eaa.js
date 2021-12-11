(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{264:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(479)),a={title:"renderElement",tags:"browser,recursion,advanced",author_title:"Deepak Vishwakarma",author_url:"https://github.com/deepakshrma",author_image_url:"https://avatars2.githubusercontent.com/u/7682731?s=400",description:'Implementation of "renderElement" in typescript, javascript and deno.',image:"https://www.positronx.io/wp-content/uploads/2018/11/positronx-banner-1152-1.jpg"},p={unversionedId:"renderElement",id:"renderElement",isDocsHomePage:!1,title:"renderElement",description:'Implementation of "renderElement" in typescript, javascript and deno.',source:"@site/docs/renderElement.md",slug:"/renderElement",permalink:"/30-seconds-of-typescript/docs/renderElement",editUrl:"https://github.com/deepakshrma/30-seconds-of-typescript/edit/master/docs/renderElement.md",version:"current",sidebar:"someSidebar",previous:{title:"renameKeys",permalink:"/30-seconds-of-typescript/docs/renameKeys"},next:{title:"reverseString",permalink:"/30-seconds-of-typescript/docs/reverseString"}},c=[],s={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge/supports-javascript-yellow.svg?style=flat-square",alt:"JS"}),"\n",Object(o.b)("img",{parentName:"p",src:"https://img.shields.io/badge///TODO-blue.svg?style=flat-square",alt:"TODO"})),Object(o.b)("p",null,"Renders the given DOM tree in the specified DOM element."),Object(o.b)("p",null,"Destructure the first argument into ",Object(o.b)("inlineCode",{parentName:"p"},"type")," and ",Object(o.b)("inlineCode",{parentName:"p"},"props"),", use ",Object(o.b)("inlineCode",{parentName:"p"},"type")," to determine if the given element is a text element.\nBased on the element's ",Object(o.b)("inlineCode",{parentName:"p"},"type"),", use either ",Object(o.b)("inlineCode",{parentName:"p"},"Document.createTextNode()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Document.createElement()")," to create the DOM element.\nUse ",Object(o.b)("inlineCode",{parentName:"p"},"Object.keys(props"),", adding attributes to the DOM element and setting event listeners, as necessary.\nUse recursion to render ",Object(o.b)("inlineCode",{parentName:"p"},"props.children"),", if any.\nFinally, use ",Object(o.b)("inlineCode",{parentName:"p"},"Node.appendChild()")," to append the DOM element to the specified ",Object(o.b)("inlineCode",{parentName:"p"},"container"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const renderElement = ({ type, props = {} }, container) => {\n  const isTextElement = !type;\n  const element = isTextElement\n    ? document.createTextNode("")\n    : document.createElement(type);\n\n  const isListener = (p) => p.startsWith("on");\n  const isAttribute = (p) => !isListener(p) && p !== "children";\n\n  Object.keys(props).forEach((p) => {\n    if (isAttribute(p)) element[p] = props[p];\n    if (!isTextElement && isListener(p))\n      element.addEventListener(p.toLowerCase().slice(2), props[p]);\n  });\n\n  if (!isTextElement && props.children && props.children.length)\n    props.children.forEach((childElement) =>\n      renderElement(childElement, element)\n    );\n\n  container.appendChild(element);\n};\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="typescript"',title:'"typescript"'},'const myElement = {\n  type: "button",\n  props: {\n    type: "button",\n    className: "btn",\n    onClick: () => alert("Clicked"),\n    children: [{ props: { nodeValue: "Click me" } }],\n  },\n};\n\nrenderElement(myElement, document.body);\n')))}l.isMDXComponent=!0},479:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,b=m["".concat(a,".").concat(u)]||m[u]||d[u]||o;return n?i.a.createElement(b,p(p({ref:t},s),{},{components:n})):i.a.createElement(b,p({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);