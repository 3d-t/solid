"use strict";(self.webpackChunksolidwebsite=self.webpackChunksolidwebsite||[]).push([[9244],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=a,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4224:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:20},i="Booleans",s={unversionedId:"programmer/subtract",id:"programmer/subtract",title:"Booleans",description:"Boolean operations, add, subtract and intersect can be used with or without arguments. If no argument is provided the operations apply to the last two objects.",source:"@site/docs/programmer/subtract.md",sourceDirName:"programmer",slug:"/programmer/subtract",permalink:"/docs/programmer/subtract",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Move and turns",permalink:"/docs/programmer/move"},next:{title:"Extrude and sweeps",permalink:"/docs/programmer/extrude"}},c={},u=[],p={toc:u},l="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(l,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"booleans"},"Booleans"),(0,a.kt)("p",null,"Boolean operations, ",(0,a.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"subtract")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"intersect")," can be used with or without arguments. If no argument is provided the operations apply to the last two objects. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6504).Z,width:"2732",height:"1802"})),(0,a.kt)("p",null,"In the object below the ",(0,a.kt)("inlineCode",{parentName:"p"},"subtract")," statement is added at the end. Since their are no arguments the last two objects are used. In this case the cylinder is subtracted from the sphere."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5732).Z,width:"2732",height:"1802"})),(0,a.kt)("p",null,"If you want to subtract the combination of the cylinder and the sphere from the block you can include the cylinder and the sphere in a block statement."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6234).Z,width:"2732",height:"1802"})),(0,a.kt)("p",null,"Alternatively you can use functions to create an object and use this as an argument for the ",(0,a.kt)("inlineCode",{parentName:"p"},"subtract")," operation. The function ",(0,a.kt)("inlineCode",{parentName:"p"},"a")," has one argument called ",(0,a.kt)("inlineCode",{parentName:"p"},"size"),". Instead of plain JavaScript functions you can also use arrow functions. For example, the constant ",(0,a.kt)("inlineCode",{parentName:"p"},"b")," is represented by an arrow function which takes no arguments. The functions ",(0,a.kt)("inlineCode",{parentName:"p"},"a(15)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"b()")," are supplied as arguments to the subtract operation."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2470).Z,width:"2732",height:"1802"})))}d.isMDXComponent=!0},6504:function(e,t,n){t.Z=n.p+"assets/images/move_1-e9f022041d775fe7e5bbffaa9daf7311.png"},5732:function(e,t,n){t.Z=n.p+"assets/images/subtract_1-fae9d4222c7533eead16d11d72d44d75.png"},6234:function(e,t,n){t.Z=n.p+"assets/images/subtract_2-53b2ecf55ae214df6f251a1eda1522f4.png"},2470:function(e,t,n){t.Z=n.p+"assets/images/subtract_3-1aac15f6d552139cef29568fd3918f0c.png"}}]);