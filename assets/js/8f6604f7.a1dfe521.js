"use strict";(self.webpackChunksolidwebsite=self.webpackChunksolidwebsite||[]).push([[3161],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},796:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s}});var a=t(3117),r=(t(7294),t(3905));const l={sidebar_position:90},i="Reference",o={unversionedId:"programmer/reference",id:"programmer/reference",title:"Reference",description:"Primitives",source:"@site/docs/programmer/reference.md",sourceDirName:"programmer",slug:"/programmer/reference",permalink:"/docs/programmer/reference",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"defaultSidebar",previous:{title:"Booleans",permalink:"/docs/programmer/subtract"},next:{title:"Create assignment",permalink:"/docs/assignment/create"}},p={},s=[{value:"Primitives",id:"primitives",level:2},{value:"Extrusions and sweeps",id:"extrusions-and-sweeps",level:2},{value:"Transformations",id:"transformations",level:2},{value:"Boolean operations",id:"boolean-operations",level:2},{value:"Hull",id:"hull",level:2},{value:"Materials",id:"materials",level:2},{value:"Lighting",id:"lighting",level:2},{value:"Animation",id:"animation",level:2}],u={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reference"},"Reference"),(0,r.kt)("h2",{id:"primitives"},"Primitives"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Block")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"block(l:number, w:number, h:number): node\n")),(0,r.kt)("p",null,"A block with dimension ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," along the X-axis, ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," along the Y-axis and ",(0,r.kt)("inlineCode",{parentName:"p"},"h")," along the Z-axis."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wedge")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"wedge(l:number, w:number, h:number): node\n")),(0,r.kt)("p",null,"A wedge with dimension ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," along the X-axis, ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," along the Y-axis and ",(0,r.kt)("inlineCode",{parentName:"p"},"h")," along the Z-axis."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cylinder")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"cylinder(d:number, h:number): node\n")),(0,r.kt)("p",null,"A cylinder with diameter ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," and heigth ",(0,r.kt)("inlineCode",{parentName:"p"},"h")," in Z-direction."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cone")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"cone(d1:number, d2:number, h:number): node\n")),(0,r.kt)("p",null,"A cone with bottom diameter ",(0,r.kt)("inlineCode",{parentName:"p"},"d1"),", top diameter ",(0,r.kt)("inlineCode",{parentName:"p"},"d2")," and heigth ",(0,r.kt)("inlineCode",{parentName:"p"},"h")," in Z-direction."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sphere")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"sphere(d:number): node\n")),(0,r.kt)("p",null,"A sphere with diameter ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," centered around the current position."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Torus")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"torus(d:number, h:number, angle?:number)\n")),(0,r.kt)("p",null,"A torus with outer diameter ",(0,r.kt)("inlineCode",{parentName:"p"},"d"),", tube diameter ",(0,r.kt)("inlineCode",{parentName:"p"},"h")," and optional angle in degrees."),(0,r.kt)("h2",{id:"extrusions-and-sweeps"},"Extrusions and sweeps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extrude")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"extrude(points:[], h:number)\n")),(0,r.kt)("p",null,"Extrusion of profile defined by the array of points along the Z-axis with height ",(0,r.kt)("inlineCode",{parentName:"p"},"h"),". Each point is defined by an array of two numbers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wall")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"wall(points2D:[], w:number, h:number, options?: {floor:boolean, roof: boolean})\n")),(0,r.kt)("p",null,"Wall defined by an array of points in the XY-plane, with wall thickness ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," and height ",(0,r.kt)("inlineCode",{parentName:"p"},"h")," and optional option to define if a floor or roof should be added."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sweep")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"sweep(points2D:[], angle?:number)\n")),(0,r.kt)("p",null,"Sweep of profile defined by the array of points in XY-plane along the X-axis. The angle in degrees is optional."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tube")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"tube(points3D:[], d:number)\n")),(0,r.kt)("p",null,"Tube through array of 3D points with diameter ",(0,r.kt)("inlineCode",{parentName:"p"},"d"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Part")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"part(name: string, parameters...)\n")),(0,r.kt)("p",null,"Include another object defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and optional parameters defined in the first lines of the object."),(0,r.kt)("h2",{id:"transformations"},"Transformations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Move")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"move(x:number, y:number, z:number)\n")),(0,r.kt)("p",null,"Translate the current position along the XYZ-axis. All subsequent objects and transformations will be affected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Turn")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"turn(x:number, y:number, z:number)\n")),(0,r.kt)("p",null,"Rotate the current position along the XYZ-axis. All subsequent objects and transformations will be affected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"scale(x:number, y:number, z:number)\n")),(0,r.kt)("p",null,"Scale the current position along the XYZ-axis. All subsequent objects and transformations will be affected."),(0,r.kt)("h2",{id:"boolean-operations"},"Boolean operations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Add")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"add(a?: function, b?: function)\n")),(0,r.kt)("p",null,"Add two objects defined by optional functions ",(0,r.kt)("inlineCode",{parentName:"p"},"a()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b()"),". If no arguments are provided the last two objects are added. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"cylinder(10, 20)\nblock(10,10)\nadd()\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subtract")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"subtract(a?: function, b?: function)\n")),(0,r.kt)("p",null,"Subtract object defined by functions ",(0,r.kt)("inlineCode",{parentName:"p"},"b()")," from object defined by function ",(0,r.kt)("inlineCode",{parentName:"p"},"a()"),". If no arguments are provided the last objects is subtracted from the previous object. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function a(size) {\n  block(size, size, size)\n}\n\nconst b = () => {\n    move(5, 0, 5)\n    color("red")\n    sphere(10)\n    cylinder(10, 20)\n}\n\nsubtract(a(15), b())\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Intersect")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"intersect(a?: function, b?: function)\n")),(0,r.kt)("p",null,"Take the common part of two objects defined by optional functions ",(0,r.kt)("inlineCode",{parentName:"p"},"a()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b()"),". If no arguments are provided the last two objects are united.\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    block(10, 10, 10);\n}\n{\n    move(4, 0, 5);\n    color(10027008);\n    cylinder(8, 10);\n}\nintersect();\n")),(0,r.kt)("h2",{id:"hull"},"Hull"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"hull(a?:function)\n")),(0,r.kt)("p",null,"Create a convex hull that encloses the geometry. If no arguments are provided the geometry of the last object is used. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    cylinder(15, 10);\n    move(30, 0, 0);\n    cylinder(5, 2);\n}\nhull();\n")),(0,r.kt)("h2",{id:"materials"},"Materials"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Color")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"color(color: string)\n")),(0,r.kt)("p",null,"Set the current color. The color can be a named color like 'red' or a hexadecimal value such as ",(0,r.kt)("inlineCode",{parentName:"p"},"#ff0000")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transparency")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"transparency(transparency: number)\n")),(0,r.kt)("p",null,"Set the current transparency to a value between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),". A high value is more transparent."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Shininess")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"shininess(shininess: number)\n")),(0,r.kt)("p",null,"Set the current shininess to a value between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),". A high value is more glossy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Emissive")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"emissive(emissive: number)\n")),(0,r.kt)("p",null,"Set the current emission of light of the object to a value between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),". A high value radiates more light."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Texture")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"texture(name: string, s?: number, t?: number)\n")),(0,r.kt)("p",null,"Apply the texture defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," to the following objects. Optionally specify the number of repetitions in both directions with ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),"."),(0,r.kt)("h2",{id:"lighting"},"Lighting"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Light")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"light(type: 'ambient' | 'point' |'spot', options: { color?: string, intensity?: number, power?: number, position?: [number, number, number], target?: [number, number, number], angle?:number)\n")),(0,r.kt)("p",null,"When you add a light to the scene this replaces the default lighting settings. You can combine multiple lights in a single scene. The ",(0,r.kt)("inlineCode",{parentName:"p"},"position")," is only applicable for ",(0,r.kt)("inlineCode",{parentName:"p"},"point")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spot")," lights. For ",(0,r.kt)("inlineCode",{parentName:"p"},"spot")," lights you can define the ",(0,r.kt)("inlineCode",{parentName:"p"},"target")," point to which the light is aimed and the ",(0,r.kt)("inlineCode",{parentName:"p"},"angle")," of the light beam in degrees. Examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"light('ambient', {color: 'red', intensity: 3})\nlight('point', {color: '#FFFF00', intensity: 1, position: [10,3,20]})\nlight('spot', {color: '#FFFF00', intensity: 1, position: [30,10,20], target:[0,0,5], angle: 10})\n")),(0,r.kt)("h2",{id:"animation"},"Animation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Animate")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'animate(keyframe:[], options?: {type: "rotate"|"translate"})\n')),(0,r.kt)("p",null,"Animate the last object using an array of keyframe. Each keyframe is an array of 4 numbers where this first number is the time defined in seconds and the following three numbers the 3D position or rotation at that time. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    block(10,10,10)\n    cylinder(10, 50)\n}\nanimate([[1, 0, 0,10],[2, 0, 10,10]], {type: 'translate'})\n")))}c.isMDXComponent=!0}}]);