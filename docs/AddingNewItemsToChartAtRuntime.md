# Updating Diagram Properties In React

Our component is designed to only update the visual elements that are effected by the changes in the diagram's properties. For example on screen annotation's positions depend on the positions of the nodes that they are bound to. So when we make changes to the on-screen annotations, there is no need to rerender the diagram nodes. The same applies to the other visual elements. The chart does this by comparing the current property values to the new ones and in case of changes it triggers the rendering of the effected visual elements.

The component does not track individual items. If we add or remove one of them, then the whole collection of items is considered to be changed. As a result the component will layout the diagram's nodes all over again. However if the changes to the items properties do not effect the layout of the diagram, then the rendering engine will only change the item's content. 

## The following example demonstrates how new items are added to an organizational chart: 

The application stores the items collection in the application component: `state`. The buttons in the diagram are used for the removal and the addition of nodes. The event handlers of the button's are defined in the application and update items collection in the appliation `state`. For more complex implementation of chart editing functionality see chart editor demo.

[React](../src/Samples/AddingNewItemsToChartAtRuntime.js)
