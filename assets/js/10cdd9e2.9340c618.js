"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6780],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||h[m]||i;return n?a.createElement(u,o(o({ref:t},l),{},{components:n})):a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3318:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:60},o="Parts",s={unversionedId:"advanced/parts",id:"advanced/parts",title:"Parts",description:"Parts are objects with a name that can be included in other objects. The can be compared to functions in programming langanges. Like functions, parts can have zero or more parameters. The shape below is a simple example of chair that has no parameters. When the design is completed the name is set to Chair and you go back to the main gallery by clicking on <.",source:"@site/docs/advanced/parts.md",sourceDirName:"advanced",slug:"/advanced/parts",permalink:"/docs/advanced/parts",draft:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"defaultSidebar",previous:{title:"Tube",permalink:"/docs/advanced/tube"},next:{title:"Expressions",permalink:"/docs/advanced/expressions"}},c={},p=[],l={toc:p},d="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"parts"},"Parts"),(0,r.kt)("p",null,"Parts are objects with a name that can be included in other objects. The can be compared to functions in programming langanges. Like functions, parts can have zero or more parameters. The shape below is a simple example of chair that has no parameters. When the design is completed the name is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Chair")," and you go back to the main gallery by clicking on ",(0,r.kt)("inlineCode",{parentName:"p"},"<"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8140).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," part has two parameters: one for the width and one for the lenght of the table. To define a parameter drag the statement from the ",(0,r.kt)("inlineCode",{parentName:"p"},"variables")," menu. The parameter has a ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and a default ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),". To use the variable for setting the dimension of the block, the default number is replaced by a variable. You can click on the number field in a block and drag to the bin or press ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),". To insert the variable drag the statement from the ",(0,r.kt)("inlineCode",{parentName:"p"},"variables")," menu and change the name, or copy-paste the variable from the ",(0,r.kt)("inlineCode",{parentName:"p"},"variable")," statement that is already included."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6670).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"The part below shows a conference table set with chairs. The part has one parameter: the number of chairs. It also includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Chair")," object. You can include these objects by dragging the statement ",(0,r.kt)("inlineCode",{parentName:"p"},"Part")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"objects")," menu. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"part")," statement select the name of the object. If the object has parameters they will automatically be appended to the statement. For example, the part ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," shows two extra fields for ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"length"),". For the width we set a constant value and for the length we insert an expression that calculates the length based on the number of chairs. You can find these expressions under the ",(0,r.kt)("inlineCode",{parentName:"p"},"math")," section. The set of table and chairs is saved as ",(0,r.kt)("inlineCode",{parentName:"p"},"Conference table"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5330).Z,width:"2732",height:"1802"})),(0,r.kt)("p",null,"The new ",(0,r.kt)("inlineCode",{parentName:"p"},"Conference table")," part with parameter number of ",(0,r.kt)("inlineCode",{parentName:"p"},"chairs")," can now be used in another object. We first create an array of three sets with two chairs and then a separate long table with ",(0,r.kt)("inlineCode",{parentName:"p"},"14")," chairs, rotated 90 degrees. This example shows how parts can include other parts."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6979).Z,width:"2732",height:"1802"})))}h.isMDXComponent=!0},8140:function(e,t,n){t.Z=n.p+"assets/images/chair-432ea2713ac8d629690ed76ab27ff7f7.png"},5330:function(e,t,n){t.Z=n.p+"assets/images/conference_table-4a52cab909873ec4a03284acc23b5a9c.png"},6979:function(e,t,n){t.Z=n.p+"assets/images/restaurant-d9045d53e1f5362d58243043bf4bad10.png"},6670:function(e,t,n){t.Z=n.p+"assets/images/table-75e4ddb0f1c703374631e7353ebe045d.png"}}]);