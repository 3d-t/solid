"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4928],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8734:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var i=n(3117),r=(n(7294),n(3905));const a={sidebar_position:60},o="Animation",s={unversionedId:"basic/animation",id:"basic/animation",title:"Animation",description:"So far we have discussed how to make more static objects from primitives by using boolean operations, repetition and conditional statements.",source:"@site/docs/basic/animation.md",sourceDirName:"basic",slug:"/basic/animation",permalink:"/docs/basic/animation",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"defaultSidebar",previous:{title:"Logic",permalink:"/docs/basic/conditional"},next:{title:"Extrude",permalink:"/docs/advanced/extrude"}},c={},u=[],p={toc:u},l="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"animation"},"Animation"),(0,r.kt)("p",null,"So far we have discussed how to make more static objects from primitives by using boolean operations, repetition and conditional statements.\nThe basic mode provides a simple animation statements for making dynamic objects and animations. The object below shows an abstract representation of a puppet."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(574).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"We can spin the puppet around the Z-axis by dragging a ",(0,r.kt)("inlineCode",{parentName:"p"},"turn")," animation statement. The statements allows you to specify the angle of turn and the number of seconds in which the turn should be completed. If the turn is specified as a ",(0,r.kt)("inlineCode",{parentName:"p"},"spin"),", the turning continues. For all other turning options, such as a 90 degree turn, the object is turned back after completing the turn."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7338).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"We can add a second animation by moving the turning puppet along the X-axis and back. In this case, the puppet is move in 2 seconds to position 40 and then returns to the origin. The puppet keeps spinning around the Z-axis while moving."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4813).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"A third animation is added which moves the moving and turning puppet in Z-direction. This simulates a jump in the air. You can change the number of seconds and other settings to modify the animation."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1959).Z,width:"2732",height:"1802"})))}d.isMDXComponent=!0},574:function(e,t,n){t.Z=n.p+"assets/images/animation_1-d0a00a8123f4546c3b035f96fb3c81b5.png"},7338:function(e,t,n){t.Z=n.p+"assets/images/animation_2-e0df3e36ac07a17ac571cbd7b6096b3b.png"},4813:function(e,t,n){t.Z=n.p+"assets/images/animation_3-1f5024d95b58b6c10e7d17ef4316b573.png"},1959:function(e,t,n){t.Z=n.p+"assets/images/animation_4-88a905600be27e5a351c821505dcd6dd.png"}}]);