"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9329],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),l=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),f=r,m=p["".concat(d,".").concat(f)]||p[f]||u[f]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4803:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var a=t(3117),r=(t(7294),t(3905));const i={sidebar_position:80},o="Expressions",s={unversionedId:"advanced/expressions",id:"advanced/expressions",title:"Expressions",description:"In addition to parameter, which defines the variables for a part, you can also use variable. A variable is only used inside a part and are not exposed outside. Parameters are similar to arguments in functions in programming languages and variables are internal variables.  In the object below we define a variable b to set the size of a leaf. The variable is defined by an expression that includes a random fraction function, wich can be found under the math menu. A random fraction is a number between 0 and 1 like 0.12345. The random fraction is multiplied by 5 and then 4 is added. This means that the size of the leaf, variable b will always between 4 and 9. The leaf itself is create from a sphere that is scaled 0.5 in X-direction to make it a bit flat. It is scaled in Z-direction to make it long. Another random expression is used to set a random turn around the Y-axis and Z-axis.",source:"@site/docs/advanced/expressions.md",sourceDirName:"advanced",slug:"/advanced/expressions",permalink:"/docs/advanced/expressions",draft:!1,tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"defaultSidebar",previous:{title:"Parts",permalink:"/docs/advanced/parts"},next:{title:"Animation",permalink:"/docs/advanced/animation"}},d={},l=[],c={toc:l},p="wrapper";function u(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,a.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expressions"},"Expressions"),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"parameter"),", which defines the variables for a part, you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"variable"),". A variable is only used inside a part and are not exposed outside. Parameters are similar to arguments in functions in programming languages and variables are internal variables.  In the object below we define a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," to set the size of a leaf. The variable is defined by an expression that includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"random fraction")," function, wich can be found under the ",(0,r.kt)("inlineCode",{parentName:"p"},"math")," menu. A random fraction is a number between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"0.12345"),". The random fraction is multiplied by 5 and then 4 is added. This means that the size of the leaf, variable ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," will always between ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"9"),". The leaf itself is create from a sphere that is scaled ",(0,r.kt)("inlineCode",{parentName:"p"},"0.5")," in X-direction to make it a bit flat. It is scaled in Z-direction to make it long. Another random expression is used to set a random turn around the Y-axis and Z-axis."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(4184).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Palmtop")," object is included in a tree. The tree consists of a number of cones that are randomly rotated a between ",(0,r.kt)("inlineCode",{parentName:"p"},"-5")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," degrees. Note that every time that you generate the tree it will look a bit different. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6857).Z,width:"2732",height:"1802"})))}u.isMDXComponent=!0},4184:function(e,n,t){n.Z=t.p+"assets/images/palmtop-ff386a714ee5d745178897f81bbc24f2.png"},6857:function(e,n,t){n.Z=t.p+"assets/images/tree-dbbf21ccf7857790af5eb8edc54a4eca.png"}}]);