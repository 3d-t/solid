"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"defaultSidebar":[{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Welcome","href":"/docs/introduction/concept","docId":"introduction/concept"},{"type":"link","label":"Education","href":"/docs/introduction/education","docId":"introduction/education"},{"type":"link","label":"Installation","href":"/docs/introduction/installation","docId":"introduction/installation"},{"type":"link","label":"Licensing","href":"/docs/introduction/licensing","docId":"introduction/licensing"}]},{"type":"category","label":"Getting started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Gallery","href":"/docs/gallery/overview","docId":"gallery/overview"},{"type":"link","label":"Settings","href":"/docs/gallery/settings","docId":"gallery/settings"},{"type":"link","label":"Workspace","href":"/docs/gallery/workspace","docId":"gallery/workspace"}]},{"type":"category","label":"Block box","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Add","href":"/docs/blockbox/create","docId":"blockbox/create"},{"type":"link","label":"Move","href":"/docs/blockbox/move","docId":"blockbox/move"},{"type":"link","label":"Turn","href":"/docs/blockbox/turn","docId":"blockbox/turn"},{"type":"link","label":"Challenge","href":"/docs/blockbox/challenge","docId":"blockbox/challenge"}]},{"type":"category","label":"Basic","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Primitives","href":"/docs/basic/primitives","docId":"basic/primitives"},{"type":"link","label":"Boolean","href":"/docs/basic/boolean","docId":"basic/boolean"},{"type":"link","label":"Repetition","href":"/docs/basic/repeat","docId":"basic/repeat"},{"type":"link","label":"Logic","href":"/docs/basic/conditional","docId":"basic/conditional"},{"type":"link","label":"Animation","href":"/docs/basic/animation","docId":"basic/animation"}]},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Transform","href":"/docs/advanced/transformation","docId":"advanced/transformation"},{"type":"link","label":"Repetition","href":"/docs/advanced/repetition","docId":"advanced/repetition"},{"type":"link","label":"Extrude","href":"/docs/advanced/extrude","docId":"advanced/extrude"},{"type":"link","label":"Sweep","href":"/docs/advanced/sweep","docId":"advanced/sweep"},{"type":"link","label":"Tube","href":"/docs/advanced/tube","docId":"advanced/tube"},{"type":"link","label":"Parts","href":"/docs/advanced/parts","docId":"advanced/parts"},{"type":"link","label":"Expressions","href":"/docs/advanced/expressions","docId":"advanced/expressions"},{"type":"link","label":"Animation","href":"/docs/advanced/animation","docId":"advanced/animation"}]},{"type":"link","label":"Programmer","href":"/docs/programmer/","docId":"programmer/programmer"},{"type":"link","label":"Contact","href":"/docs/contact/","docId":"contact/contact"}]},"docs":{"advanced/animation":{"id":"advanced/animation","title":"Animation","description":"","sidebar":"defaultSidebar"},"advanced/expressions":{"id":"advanced/expressions","title":"Expressions","description":"In addition to parameter, which defines the variables for a part, you can also use variable. A variable is only used inside a part and are not exposed outside. Parameters are similar to arguments in functions in programming languages and variables are internal variables.  In the object below we define a variable b to set the size of a leaf. The variable is defined by an expression that includes a random fraction function, wich can be found under the math menu. A random fraction is a number between 0 and 1 like 0.12345. The random fraction is multiplied by 5 and then 4 is added. This means that the size of the leaf, variable b will always between 4 and 9. The leaf itself is create from a sphere that is scaled 0.5 in X-direction to make it a bit flat. It is scaled in Z-direction to make it long. Another random expression is used to set a random turn around the Y-axis and Z-axis.","sidebar":"defaultSidebar"},"advanced/extrude":{"id":"advanced/extrude","title":"Extrude","description":"In addition to the basic shapes like a Block or Cylinder the Advanced mode also supports extrude operations.  The extrude operation generates a shape by extruding a 2D profile along the Z-axis. To create an extrude select the block from the objects menu and add three or more points from the transformations menu. Then enter the height of the extrusion. The profile below is created by subtracting an array of cylinders from an extrusion.","sidebar":"defaultSidebar"},"advanced/parts":{"id":"advanced/parts","title":"Parts","description":"Parts are objects with a name that can be included in other objects. The can be compared to functions in programming langanges. Like functions, parts can have zero or more parameters. The shape below is a simple example of chair that has no parameters. When the design is completed the name is set to Chair and you go back to the main gallery by clicking on <.","sidebar":"defaultSidebar"},"advanced/repetition":{"id":"advanced/repetition","title":"Repetition","description":"The Advanced mode has programming blocks for quickly repeating objects in a linear or ciculular pattern. The turn block below creates a circular pattern by rotating a set of objects along an axis. In this case we specified that there should be 12 repetitions each 30 degrees apart and with a radius of 50 along the Z axis.","sidebar":"defaultSidebar"},"advanced/sweep":{"id":"advanced/sweep","title":"Sweep","description":"The sweep object rotates a linear profile along the Z-axis. The profiles is defined by a set of 2D points. The 2D point block is under the transformations menu. The advanced mode also has some extra blocks for defining material properties such as transparency, shininess and emission. The transparent table is created by subtracting two blocks and adding a transparent block at the bottom.","sidebar":"defaultSidebar"},"advanced/transformation":{"id":"advanced/transformation","title":"Transform","description":"In the Advanced mode you can apply transformations to a group of objects by dragging the objects inside the move or rotate statement. This avoids that transformations that you make at the start of the model are applied to all subsequent objects. For example, the cylinder below is rotated 90 degrees around the X-axis but the global transformation is not changed. The Advanced mode also supports the scale transformation. This can be used to squeeze or stretch an object in one or more directions. For example, the object below includes a cylinder and a sphere which is streched along the Y-axis by a scale operation in Y-direction.","sidebar":"defaultSidebar"},"advanced/tube":{"id":"advanced/tube","title":"Tube","description":"The Tube shape takes a set of 3D point statements that define the trajectory and a diameter that specifies the size of the tube. The 3D point statement can be dragged from the transformations menu. Tubes can be used to model cables, pipes and handles. The powersocket at the end of the cable is created by intersecting a cube and a cylinder.","sidebar":"defaultSidebar"},"basic/animation":{"id":"basic/animation","title":"Animation","description":"So far we have discussed how to make more static objects from primitives by using boolean operations, repetition and conditional statements.","sidebar":"defaultSidebar"},"basic/boolean":{"id":"basic/boolean","title":"Boolean","description":"The Basic mode also introduces the concept of making complex shapes by using so called Boolean operations: add, subtract and intersect. These operations can be very useful to make holes and rounded shapes. For example, in the image below there is a grey block and a red cylinder that is moved in X-, and Z-direction.","sidebar":"defaultSidebar"},"basic/conditional":{"id":"basic/conditional","title":"Logic","description":"Conditional statements, or if-then-else statements, can be used to make smart objects that have different geometry based on certain logic or rules. For example, suppose you want to make a ruler with units where every 5-ths unit has a different size and color. You can start with a block inside a repeat loop.","sidebar":"defaultSidebar"},"basic/primitives":{"id":"basic/primitives","title":"Primitives","description":"The Basic mode is an intermediary mode between Block box and Advanced. All dimensions of the basic objects can be set. The default grey color can be changed by inserting a color statement and pick a color from the palette. Instead of separate move commands for the direction you can now move directly in 3D by entering X, Y and Z coordinates. The X correspond to the red direction, the Y to the green direction and the Z to the blue direction.  The X-, and Y-movements are in the plane showing the grid and the Z-direction is upwards from the plane.","sidebar":"defaultSidebar"},"basic/repeat":{"id":"basic/repeat","title":"Repetition","description":"Repetition is one of the most powerful elements in a progamming language. It is also very useful in 3D programming to create objects with patterns. Repetition statements allow you to create these patterns very quickly and you can change them easily at any time. Let start with a simple shape that includes a block and a cylinder.","sidebar":"defaultSidebar"},"blockbox/challenge":{"id":"blockbox/challenge","title":"Challenge","description":"Now that we have explained the basics of creating, moving and turning objects you can try it yourself. There are many ways to create the same object but in general the fewer statements you need the better.","sidebar":"defaultSidebar"},"blockbox/create":{"id":"blockbox/create","title":"Add","description":"Block box is the most simple mode. To start the block box mode click on create in the gallery and select mode Block box. The screen is divided into three parts: a library with blocks, a workspace where you can place blocks and a 3D model viewer.","sidebar":"defaultSidebar"},"blockbox/move":{"id":"blockbox/move","title":"Move","description":"Move statements are for setting the position of an object.  When you drag an object to the workspace it is always aligned with the axis. In this case we drag a cylinder block from the library to the workspace. By default the cylinder has a height of 2 and you can modify this to any other value.","sidebar":"defaultSidebar"},"blockbox/turn":{"id":"blockbox/turn","title":"Turn","description":"Turn statements are used to rotate an object. When placing a cylinder it is placed along the blue axis and points upwards. This is useful if you want to model a pole but not if you want to model a wheel of a car.","sidebar":"defaultSidebar"},"contact/contact":{"id":"contact/contact","title":"Axxem B.V.","description":"Axxem develops systems for acquisition and analysis of IoT data, visualization and 3D modeling. Application areas include education, home automation, archicture, engineering, construction and facilities management.","sidebar":"defaultSidebar"},"gallery/overview":{"id":"gallery/overview","title":"Gallery","description":"When the app is started you see a gallery with demo objects. You can enter a search term or click on a picture to view or modify. If you click on the three dots you see a menu with options to delete, open or copy and object.","sidebar":"defaultSidebar"},"gallery/settings":{"id":"gallery/settings","title":"Settings","description":"Click on the settings icon in the main page to set the language or default mode. You can also restore the app to the original state. This removes all objects that have been created and restores the demo objects.","sidebar":"defaultSidebar"},"gallery/workspace":{"id":"gallery/workspace","title":"Workspace","description":"To create a new object click on the create icon and select one of the modes. Each mode has a special workspace. You will learn more about the workspaces in the next sections.","sidebar":"defaultSidebar"},"introduction/concept":{"id":"introduction/concept","title":"Welcome","description":"This application is intended for quick and easy generation of 3D objects using a technique called visual programming. You can make complex objects with built-in logic just by drag-and-drop programming statements.","sidebar":"defaultSidebar"},"introduction/education":{"id":"introduction/education","title":"Education","description":"Computer programming is fun and a great tool to help student develop skills in computational thinking. Several countries are including basics of programming as a mandatory part of the curriculum for primary education.","sidebar":"defaultSidebar"},"introduction/installation":{"id":"introduction/installation","title":"Installation","description":"If you just want to have a feel for the application without installing you can use the online demo version. You just need a standard web browser like Chrome, Safari or Firefox.","sidebar":"defaultSidebar"},"introduction/licensing":{"id":"introduction/licensing","title":"Licensing","description":"No license fees are currently required for personal use and use in free public education such as schools and universities. If you intent to use the app for paid training, commercial use or integration in other products please contact the developer.","sidebar":"defaultSidebar"},"programmer/programmer":{"id":"programmer/programmer","title":"Programmer","description":"","sidebar":"defaultSidebar"}}}')}}]);