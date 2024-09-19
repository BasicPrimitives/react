# Updating configuration properties in ReactJS diagrams

We do fast updates, so we don't flush and recreate diagrams for every configuration object change. We reuse transformations and visual elements if they are not affected by configuration changes. For example, to render on-screen annotations, the control does not need to layout nodes, so when we add new on-screen annotations, we show them instantly. There are some exceptions when annotations may affect nodes layout, see reference for more details. The same applies to all other visual elements. The component updates the diagram by comparing the current copy of the configuration object with the new one. If any changes are detected, the control triggers the rendering cycle for the affected visual elements only.

The rendering engine does not track individual items. If we make changes to one of the nodes layout options, then the whole collection of nodes is considered as changed. As a result, the component will re-render the entire diagram. So there is no difference if you change the entire array of nodes or just a single one. The result is the same, we layout nodes and render the whole collection of items again. 

The component ignores changes in node options, not affecting the diagram layout. In other words, if an application changes the `title`, `description`, or `image` item properties, then the component would not trigger layout changes.

## The following example demonstrates adding new items to an organizational chart using component state: 

The application stores the collection of items in the application component: `state`.  The diagram component updates its layout every time it gets a new configuration object reference. The diagram keeps the internal state between rendering cycles and tracks property changes for individual configuration objects. The configuration object properties may affect different visuals and transformations of the graph. The component tracks every property individually and optimizes rendering time.  For the more complex implementation of chart editing functionality, see the matrixed organizational chart structure editor demo at this site.

[React](../src/Samples/AddingNewItemsToChartAtRuntime.jsx)
