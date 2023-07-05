"use strict";(self.webpackChunksolidwebsite=self.webpackChunksolidwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"defaultSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Visual programing","href":"/docs/introduction/concept","docId":"introduction/concept"},{"type":"link","label":"Installation","href":"/docs/introduction/installation","docId":"introduction/installation"}]},{"type":"category","label":"Getting started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Gallery","href":"/docs/gallery/overview","docId":"gallery/overview"},{"type":"link","label":"Settings","href":"/docs/gallery/settings","docId":"gallery/settings"},{"type":"link","label":"Workspace","href":"/docs/gallery/workspace","docId":"gallery/workspace"}]},{"type":"category","label":"Basic","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Objects","href":"/docs/basic/objects","docId":"basic/objects"},{"type":"link","label":"Move","href":"/docs/basic/move","docId":"basic/move"},{"type":"link","label":"Turn","href":"/docs/basic/turn","docId":"basic/turn"},{"type":"link","label":"Boolean","href":"/docs/basic/boolean","docId":"basic/boolean"},{"type":"link","label":"Repetition","href":"/docs/basic/repeat","docId":"basic/repeat"},{"type":"link","label":"Conditional","href":"/docs/basic/conditional","docId":"basic/conditional"},{"type":"link","label":"Animation","href":"/docs/basic/animation","docId":"basic/animation"},{"type":"link","label":"Challenge","href":"/docs/basic/challenge","docId":"basic/challenge"}]},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Primitives","href":"/docs/advanced/primitives","docId":"advanced/primitives"},{"type":"link","label":"Transform","href":"/docs/advanced/transformation","docId":"advanced/transformation"},{"type":"link","label":"Boolean","href":"/docs/advanced/boolean","docId":"advanced/boolean"},{"type":"link","label":"Extrude","href":"/docs/advanced/extrude","docId":"advanced/extrude"},{"type":"link","label":"Sweep","href":"/docs/advanced/sweep","docId":"advanced/sweep"},{"type":"link","label":"Tube","href":"/docs/advanced/tube","docId":"advanced/tube"},{"type":"link","label":"Wall","href":"/docs/advanced/wall","docId":"advanced/wall"},{"type":"link","label":"Repetition","href":"/docs/advanced/repetition","docId":"advanced/repetition"},{"type":"link","label":"Expressions","href":"/docs/advanced/expressions","docId":"advanced/expressions"},{"type":"link","label":"Parts","href":"/docs/advanced/parts","docId":"advanced/parts"},{"type":"link","label":"Animation","href":"/docs/advanced/animation","docId":"advanced/animation"},{"type":"link","label":"Keyframes","href":"/docs/advanced/keyframes","docId":"advanced/keyframes"}]},{"type":"category","label":"Programmer","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Move and turns","href":"/docs/programmer/move","docId":"programmer/move"},{"type":"link","label":"Extrude and sweeps","href":"/docs/programmer/extrude","docId":"programmer/extrude"},{"type":"link","label":"Parts","href":"/docs/programmer/parts","docId":"programmer/parts"},{"type":"link","label":"Booleans","href":"/docs/programmer/subtract","docId":"programmer/subtract"},{"type":"link","label":"Reference","href":"/docs/programmer/reference","docId":"programmer/reference"}]},{"type":"category","label":"Exporting","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Sharing","href":"/docs/printing/json","docId":"printing/json"},{"type":"link","label":"3D printing","href":"/docs/printing/stl","docId":"printing/stl"},{"type":"link","label":"3D modeling","href":"/docs/printing/gltf","docId":"printing/gltf"}]},{"type":"category","label":"Video","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/docs/video","docId":"video/Introduction"},{"type":"link","label":"Move","href":"/docs/move","docId":"video/Move"},{"type":"link","label":"Turn","href":"/docs/turn","docId":"video/Turn"},{"type":"link","label":"Subtract","href":"/docs/subtract","docId":"video/Subtract"}]},{"type":"link","label":"Contact","href":"/docs/contact/","docId":"contact/contact"}]},"docs":{"advanced/animation":{"id":"advanced/animation","title":"Animation","description":"So far we have discussed how to make more static objects from primitives by using boolean operations, repetition and conditional statements.","sidebar":"defaultSidebar"},"advanced/boolean":{"id":"advanced/boolean","title":"Boolean","description":"The Advanced mode includes the boolean add, subtract and intersect operations. The example below shows how you can make a dice from a block and a sphere. The sphere is slightly bigger than the block and moved up a bit so that is partly sticks out the cube. The middle object shows what happens if you subtract the sphere from the block. The object in the front shows the result of the intersect operation: a cube with rounded corners, which looks like a dice. As you can see, Boolean operations are a very powerful tool to make complex objects from simple shapes.","sidebar":"defaultSidebar"},"advanced/expressions":{"id":"advanced/expressions","title":"Expressions","description":"In addition to parameter, which defines the variables for a part, you can also use variable. A variable is only used inside a part and are not exposed outside. Parameters are similar to arguments in functions in programming languages and variables are internal variables.  In the object below we define a variable b to set the size of a leaf. The variable is defined by an expression that includes a random fraction function, wich can be found under the math menu. A random fraction is a number between 0 and 1 like 0.12345. The random fraction is multiplied by 5 and then 4 is added. This means that the size of the leaf, variable b will always between 4 and 9. The leaf itself is create from a sphere that is scaled 0.5 in X-direction to make it a bit flat. It is scaled in Z-direction to make it long. Another random expression is used to set a random turn around the Y-axis and Z-axis.","sidebar":"defaultSidebar"},"advanced/extrude":{"id":"advanced/extrude","title":"Extrude","description":"In addition to the basic shapes like a Block or Cylinder the Advanced mode also supports extrude operations.  The extrude operation generates a shape by extruding a 2D profile along the Z-axis. To create an extrude select the block from the objects menu and add three or more points from the transformations menu. Then enter the height of the extrusion. The profile below is created by subtracting an array of cylinders from an extrusion.","sidebar":"defaultSidebar"},"advanced/keyframes":{"id":"advanced/keyframes","title":"Keyframes","description":"The Advanced module extends the animation capabilities with so called keyframes. A keyframe is a point in time and a move or turn operation. It specifies how the object should be positioned or oriented at a certain point in time and the intermediate steps are automatically calculated. For example, the animation below includes a turn keyframe animation to rotate the arm with a hammer. The first entry has no rotation but only a time setting. This means that the animation will do nothing for the first second. After 1.1 seconds the arm will be rotated 90 degrees and then it will move back slowly to the orginal position at 2 seconds. Meanwhile a second move animation moves an array of cans 30 units in Y-directions in 1 seconds and then keeps the array in this position until the time is 2 seconds. The move and rotate animations are coordinated by time so that the hammer hits the can while the can remains fixed below the hammer.","sidebar":"defaultSidebar"},"advanced/parts":{"id":"advanced/parts","title":"Parts","description":"Parts are objects with a name that can be included in other objects. The can be compared to functions in programming langanges. Like functions, parts can have zero or more parameters. The shape below is a simple example of chair that has no parameters. When the design is completed the name is set to Chair and you go back to the main gallery by clicking on <.","sidebar":"defaultSidebar"},"advanced/primitives":{"id":"advanced/primitives","title":"Primitives","description":"In the Advanced mode you can set the color and material of primitives.","sidebar":"defaultSidebar"},"advanced/repetition":{"id":"advanced/repetition","title":"Repetition","description":"The Advanced mode has programming blocks for quickly repeating objects in a linear or ciculular pattern. The turn block below creates a circular pattern by rotating a set of objects along an axis. In this case we specified that there should be 12 repetitions each 30 degrees apart and with a radius of 50 along the Z axis.","sidebar":"defaultSidebar"},"advanced/sweep":{"id":"advanced/sweep","title":"Sweep","description":"The sweep object rotates a linear profile along the X-axis. The profiles is defined by a set of 2D points in the XY-plane. The 2D point block is under the transformations menu. The advanced mode also has some extra blocks for defining material properties such as transparency, shininess and emission. The transparent table is created by subtracting two blocks and adding a transparent block at the bottom.","sidebar":"defaultSidebar"},"advanced/transformation":{"id":"advanced/transformation","title":"Transform","description":"In the Advanced mode you can apply transformations to a group of objects by dragging the objects inside the move or rotate statement. This avoids that transformations that you make at the start of the model are applied to all subsequent objects. For example, the cylinder below is rotated 90 degrees around the X-axis but the global transformation is not changed. The Advanced mode also supports the scale transformation. This can be used to squeeze or stretch an object in one or more directions. For example, the object below includes a cylinder and a sphere which is streched along the Y-axis by a scale operation in Y-direction.","sidebar":"defaultSidebar"},"advanced/tube":{"id":"advanced/tube","title":"Tube","description":"The Tube shape takes a set of 3D point statements that define the trajectory and a diameter that specifies the size of the tube. The 3D point statement can be dragged from the transformations menu. Tubes can be used to model cables, pipes and handles. The power socket at the end of the cable is created by intersecting a cube and a cylinder.","sidebar":"defaultSidebar"},"advanced/wall":{"id":"advanced/wall","title":"Wall","description":"When designing buildings you have to create walls. You can do this by representing each section of a wall as a block with a certain width, length and height. The problem is that his takes a lot of time and it is not easy to make modifications because you have to change the position and dimensions of individual blocks. For this reason a special type of extrude operation called Wall has been added. You specify the position of the walls in the XY-plane by 2D points. Then you enter a width for the wall and optionally a checkbox if you also want to add a floor or a roof. To modify the building you can just add, remove or change points. The wall extrusion also takes care joining walls that are slanted.","sidebar":"defaultSidebar"},"basic/animation":{"id":"basic/animation","title":"Animation","description":"So far we have discussed how to make more static objects from primitives by using boolean operations, repetition and conditional statements.","sidebar":"defaultSidebar"},"basic/boolean":{"id":"basic/boolean","title":"Boolean","description":"The Basic mode also introduces the concept of the subtract operation.","sidebar":"defaultSidebar"},"basic/challenge":{"id":"basic/challenge","title":"Challenge","description":"Now that we have explained the basics of creating, moving and turning objects you can try it yourself. There are many ways to create the same object but in general the fewer statements you need the better.","sidebar":"defaultSidebar"},"basic/conditional":{"id":"basic/conditional","title":"Conditional","description":"Conditional statements, or if-then-else statements, help you to make more intelligent objects that can configure themselves automatically.","sidebar":"defaultSidebar"},"basic/move":{"id":"basic/move","title":"Move","description":"Move statements are for setting the position of an object.  When you drag an object to the workspace it is always aligned with the axis. In this case we drag a cylinder block from the library to the workspace. By default the cylinder has a height of 2 and you can modify this to any other value.","sidebar":"defaultSidebar"},"basic/objects":{"id":"basic/objects","title":"Objects","description":"The mode Basic is the most elementary mode designed to help new users understand the concept of placing objects in 3D. To start the block box mode click on create in the gallery and select mode Basic. The screen is divided into three parts: a library with blocks, a workspace where you can place blocks and a 3D model viewer.","sidebar":"defaultSidebar"},"basic/repeat":{"id":"basic/repeat","title":"Repetition","description":"Repetition is one of the most powerful elements in a progamming language. It is also very useful in 3D programming to create objects with patterns. Repetition statements allow you to create these patterns very quickly and you can change them easily at any time. Let start with a simple shape that includes a cylinder.","sidebar":"defaultSidebar"},"basic/turn":{"id":"basic/turn","title":"Turn","description":"Turn statements are used to rotate an object. When placing a cylinder it is placed along the blue axis and points upwards. This is useful if you want to model a pole but not if you want to model a wheel of a car.","sidebar":"defaultSidebar"},"contact/contact":{"id":"contact/contact","title":"Axxem B.V.","description":"Axxem develops systems for acquisition and analysis of IoT data, visualization and 3D modeling. Application areas include education, home automation, archicture, engineering, construction and facilities management.","sidebar":"defaultSidebar"},"gallery/overview":{"id":"gallery/overview","title":"Gallery","description":"When the app is started you see a gallery with demo objects. You can enter a search term or click on a picture to view or modify. If you click on the three dots you see a menu with options to delete, open or copy and object.","sidebar":"defaultSidebar"},"gallery/settings":{"id":"gallery/settings","title":"Settings","description":"Click on the settings icon in the main page to set the language or default mode. You can also restore the app to the original state. This removes all objects that have been created and restores the demo objects.","sidebar":"defaultSidebar"},"gallery/workspace":{"id":"gallery/workspace","title":"Workspace","description":"To create a new object click on the create icon and select one of the modes. Each mode has a special workspace. You will learn more about the workspaces in the next sections.","sidebar":"defaultSidebar"},"introduction/concept":{"id":"introduction/concept","title":"Visual programing","description":"This application is intended for quick and easy generation of 3D objects using a technique called visual programming. You can make complex objects with built-in logic just by drag-and-drop programming statements.","sidebar":"defaultSidebar"},"introduction/installation":{"id":"introduction/installation","title":"Installation","description":"If you just want to have a feel for the application without installing you can use the online demo version. You just need a standard web browser like Chrome, Safari or Firefox.","sidebar":"defaultSidebar"},"printing/gltf":{"id":"printing/gltf","title":"3D modeling","description":"GLTF is a format for sharing 3D objects with materials and animations between rendering and modeling packages. For example, to import an object in the free and open source package Blender open the object. Click on the icon in the viewer to remove the axis and grid.","sidebar":"defaultSidebar"},"printing/json":{"id":"printing/json","title":"Sharing","description":"You can save your design with other users by opening the object and click on the export icon. Select the option JSON from the menu and save the file to your local device.","sidebar":"defaultSidebar"},"printing/stl":{"id":"printing/stl","title":"3D printing","description":"To make a 3D printed version of your design is very easy. Just","sidebar":"defaultSidebar"},"programmer/extrude":{"id":"programmer/extrude","title":"Extrude and sweeps","description":"An extrude operation is defined by an array of points, where each point is an array of two coordinates. The profile below is create from a 2# shape in the XY-plane which is extruded 40 along the Z-axis.","sidebar":"defaultSidebar"},"programmer/move":{"id":"programmer/move","title":"Move and turns","description":"In the Programmer mode you can type plain JavaScript in a text window. When you are done click on the arrow icon in the top or on the execute button. An example script is show below. Note that the move  and color statements are applied to the sphere and the cylinder.","sidebar":"defaultSidebar"},"programmer/parts":{"id":"programmer/parts","title":"Parts","description":"The object below shows a widget that can be attached to a box so that it can be fixed with a screw. It has a parameter d for the diameter of the screw and a parameter h for the height or thickness. We also have a parameter w for defining the width of the part. The value is calculated as the size of the inner diameter d plus 2. The part contains two blocks with objects and a subtract operation. We can now save the object under the name Widget. The first two lines with the var statement define the parameters for this part. The var statements that follow a blank line are internal variables.","sidebar":"defaultSidebar"},"programmer/reference":{"id":"programmer/reference","title":"Reference","description":"Primitives","sidebar":"defaultSidebar"},"programmer/subtract":{"id":"programmer/subtract","title":"Booleans","description":"Boolean operations, add, subtract and intersect can be used with or without arguments. If no argument is provided the operations apply to the last two objects.","sidebar":"defaultSidebar"},"video/Introduction":{"id":"video/Introduction","title":"Introduction","description":"","sidebar":"defaultSidebar"},"video/Move":{"id":"video/Move","title":"Move","description":"","sidebar":"defaultSidebar"},"video/Subtract":{"id":"video/Subtract","title":"Subtract","description":"","sidebar":"defaultSidebar"},"video/Turn":{"id":"video/Turn","title":"Turn","description":"","sidebar":"defaultSidebar"}}}')}}]);