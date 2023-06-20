"use strict";(self.webpackChunksolidwebsite=self.webpackChunksolidwebsite||[]).push([[3870],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_position:15},i="Transform",s={unversionedId:"advanced/transformation",id:"advanced/transformation",title:"Transform",description:"In the Advanced mode you can apply transformations to a group of objects by dragging the objects inside the move or rotate statement. This avoids that transformations that you make at the start of the model are applied to all subsequent objects. For example, the cylinder below is rotated 90 degrees around the X-axis but the global transformation is not changed. The Advanced mode also supports the scale transformation. This can be used to squeeze or stretch an object in one or more directions. For example, the object below includes a cylinder and a sphere which is streched along the Y-axis by a scale operation in Y-direction.",source:"@site/docs/advanced/transformation.md",sourceDirName:"advanced",slug:"/advanced/transformation",permalink:"/docs/advanced/transformation",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"defaultSidebar",previous:{title:"Primitives",permalink:"/docs/advanced/primitives"},next:{title:"Boolean",permalink:"/docs/advanced/boolean"}},c={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transform"},"Transform"),(0,o.kt)("p",null," In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced")," mode you can apply transformations to a group of objects by dragging the objects inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"move")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"rotate")," statement. This avoids that transformations that you make at the start of the model are applied to all subsequent objects. For example, the cylinder below is rotated 90 degrees around the X-axis but the global transformation is not changed. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced")," mode also supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"scale")," transformation. This can be used to squeeze or stretch an object in one or more directions. For example, the object below includes a cylinder and a sphere which is streched along the Y-axis by a scale operation in Y-direction."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1050).Z,width:"2732",height:"1802"})),(0,o.kt)("p",null,"To create a propellor of a windmill or airplane we can add a tapered cone. The cone is squeezed to 30 % of its width in Y-direction by applying a scale operation."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5691).Z,width:"2732",height:"1802"})),(0,o.kt)("p",null,"Next the scaled cone is rotated 30 degrees along the Z-axis to simulate the pitch of the propeller. A repeat loop in combination with a ",(0,o.kt)("inlineCode",{parentName:"p"},"turn")," statement is used to create a circular pattern of three blades."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9445).Z,width:"2732",height:"1802"})))}u.isMDXComponent=!0},1050:function(e,t,n){t.Z=n.p+"assets/images/rotor_1-8e5eb6d52ed3efb6fd5f9e73afe6897c.png"},5691:function(e,t,n){t.Z=n.p+"assets/images/rotor_2-e48eb94660c9258c0f91004a6d9b52b9.png"},9445:function(e,t,n){t.Z=n.p+"assets/images/rotor_3-4d44b01d81cb1b08a40223c2ceefa8e3.png"}}]);