"use strict";(self.webpackChunksolidwebsite=self.webpackChunksolidwebsite||[]).push([[9320],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||h[f]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return s}});var o=n(3117),r=(n(7294),n(3905));const a={sidebar_position:20},i="Move",c={unversionedId:"blockbox/move",id:"blockbox/move",title:"Move",description:"Move statements are for setting the position of an object.  When you drag an object to the workspace it is always aligned with the axis. In this case we drag a cylinder block from the library to the workspace. By default the cylinder has a height of 2 and you can modify this to any other value.",source:"@site/docs/blockbox/move.md",sourceDirName:"blockbox",slug:"/blockbox/move",permalink:"/docs/blockbox/move",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Objects",permalink:"/docs/blockbox/create"},next:{title:"Turn",permalink:"/docs/blockbox/turn"}},l={},s=[],p={toc:s},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"move"},"Move"),(0,r.kt)("p",null,"Move statements are for setting the position of an object.  When you drag an object to the workspace it is always aligned with the axis. In this case we drag a cylinder block from the library to the workspace. By default the cylinder has a height of ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and you can modify this to any other value."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8866).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"To place an object next to or on top of another object you need to move the axis first. The colors of the ",(0,r.kt)("inlineCode",{parentName:"p"},"move")," blocks correspond to the colors of the axis. So if you want move the axis in the direction of the blue arrow you insert a bue ",(0,r.kt)("inlineCode",{parentName:"p"},"move")," statement. Change the default value from ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," because the height of the cylinder is ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(968).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"Next drag a block into the workspace. It is now placed at the current position of the axis, which is on top of the cylinder."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4883).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"To place another object next to the block we first move the axis one step along the red arrow.\n",(0,r.kt)("img",{src:n(4176).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"Next you can drag a ",(0,r.kt)("inlineCode",{parentName:"p"},"wedge")," into the workspace. To save the object change the name to something like ",(0,r.kt)("inlineCode",{parentName:"p"},"Hammer")," and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),"icon to get back to the gallery. The new object should now be visible in the gallery. You can also zoom in or zoom out or rotate the view before clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),". The preview image in the gallery shows the last view. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7422).Z,width:"2732",height:"1802"})))}h.isMDXComponent=!0},8866:function(e,t,n){t.Z=n.p+"assets/images/hammer_1-c6b6c7c08f1c767ad24dbe1a28b4ebb9.png"},968:function(e,t,n){t.Z=n.p+"assets/images/hammer_2-0e05831f31d593bbdfac47703fc4fa50.png"},4883:function(e,t,n){t.Z=n.p+"assets/images/hammer_3-ec5483e7cd31db8d100cf68e6b2147ba.png"},4176:function(e,t,n){t.Z=n.p+"assets/images/hammer_4-c160c81a5165ae8ae506e9b76e93152c.png"},7422:function(e,t,n){t.Z=n.p+"assets/images/hammer_5-a2efe26ee13b7e68559cd676161fa3b3.png"}}]);