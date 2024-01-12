"use strict";(self.webpackChunksolidwebsite=self.webpackChunksolidwebsite||[]).push([[4695],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5486:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_position:1},i="Visual programing",s={unversionedId:"introduction/concept",id:"introduction/concept",title:"Visual programing",description:"Solid is an app that be used to help students learn the basics of computer science through visual programming. You can also use it as a tool for conceptual design and 3D printing of products and buildings. To make the app usefull for both beginners and experts it provides three modes: basic, advanced and programmer.",source:"@site/docs/introduction/concept.md",sourceDirName:"introduction",slug:"/introduction/concept",permalink:"/docs/introduction/concept",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Installation",permalink:"/docs/introduction/installation"}},c={},l=[{value:"Basic",id:"basic",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Programmer",id:"programmer",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"visual-programing"},"Visual programing"),(0,a.kt)("p",null,"Solid is an app that be used to help students learn the basics of computer science through visual programming. You can also use it as a tool for conceptual design and 3D printing of products and buildings. To make the app usefull for both beginners and experts it provides three modes: basic, advanced and programmer."),(0,a.kt)("h2",{id:"basic"},"Basic"),(0,a.kt)("p",null," Beginners and students in primary education learn to make a program by drag-and-drop statements from a library. Like ",(0,a.kt)("a",{parentName:"p",href:"https://scratch.mit.edu/"},"Scratch"),", the basic mode is powered by ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/blockly"},"Google Blockly"),". Although it is assumed that users have basic reading capabilities, it is not required. The colors of the statements match the colors of the objects. Also, the color of the translate statements match the direction of arrows in 3D space. Basic concepts of repetitions, if-then-else statements, and animation are introduced."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7428).Z,width:"2732",height:"1802"})),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"This mode includes all modeling functionality.\nThe concept of X-, Y- and Z-direction is introduced and the ",(0,a.kt)("inlineCode",{parentName:"p"},"intersect")," operation is introduces.  It extends the basic shapes with rotations sweeps, extrusion profiles and walls. There are loop statements with variables and you can use variables to make parametric parts, which can be compared to functions in programming languages. It also supports keyframe animation, mathematical expressions and material properties such as transparency, shininess and emission."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9445).Z,width:"2732",height:"1802"})),(0,a.kt)("h2",{id:"programmer"},"Programmer"),(0,a.kt)("p",null,"In the programmer you have access to all functionality in the advanced mode but instead of dragging blocks you can type JavaScript code in a text editor. This makes programming parts much faster and allows you to create more complex of intelligent objects. All modern JavaScript ECMAScript2019 functionality is supported such as maps, array operations, filters, sets, regular expressions and arrow functions.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8745).Z,width:"2732",height:"1802"})))}d.isMDXComponent=!0},8745:function(e,t,n){t.Z=n.p+"assets/images/box_mount-bee55ffb5f7db8c15184eb8119b581c4.png"},7428:function(e,t,n){t.Z=n.p+"assets/images/gate-34b18adeb11188110c62e4715999ab86.png"},9445:function(e,t,n){t.Z=n.p+"assets/images/rotor_3-4d44b01d81cb1b08a40223c2ceefa8e3.png"}}]);