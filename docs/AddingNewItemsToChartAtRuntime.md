# Adding new items to chart at runtime

Component is designed to update only visual elements effected by the scope of changed properties. For example on screen annotations positions depend on positions of nodes they are bound to, so when we make changes to on-screen annotations there is no need to redraw diagram nodes. The same applies to other visual elements, chart compares current properties to the new one and in case of changes it triggers rendering of effected visual elements.

Chart does not track individual items, if we add or remove one of them then the whole collection of items is considered to be changed, so control will layout diagram again. But at the same time if we change properties of items not effecting their layout positions, then component will refresh only items content without layout changes. The component is designed to be used in React, so end user may change any API properties on every rendering cycle, the control will check properties and make visual updates in the scope of changed properties only. The point of this statement is that if we assign new items array to items property, but we make no changes to actual items, chart will not perform any layout calculations and rendering, so resulting React virtual DOM of the component will stay the same.

The following example demonstrates adding new items to organizational chart at run time, application keeps state of items collection via adding and deleting nodes. For more complex implementation of chart editing functionality see chart editor demo.

[React](../src/Samples/AddingNewItemsToChartAtRuntime.js)
