# Connector Annotations

Connector annotation is on screen direct connection line between two nodes of diagram. Use them the same way as highlight markers for temporary or per transaction drawings over diagram nodes. See following example for how it works:

## Styles
Connector annotations are drawn on top of exisiting diagram, so sometimes space between nodes is not enough to fit annotation label and arrow, so for this case connector annotation supports offbeat style of drawing, so instead of straight line connecting two nodes, the connector is drawn as free hand spline on side of them.
* `ConnectorPlacementType.Offbeat` - Free hand drawing of connector annotation
* `ConnectorPlacementType.Straight` - Straight line between nodes

## Shapes
In general shape of connector annotation may indicate various business relations, so component supports following simple use case:
* `ConnectorShapeType.OneWay` - The arrow line between `fromItem` and `toItem` nodes
* `ConnectorShapeType.TwoWay` - Two opposite direction arrow lines between `fromItem` and `toItem` nodes
* `ConnectorShapeType.BothWay` - One line having arrows on both ends

The more complex use cases can be built with multiple connector annotations originating from the same `fromItem` and `toItem` nodes. Component supports simple conflict resolution, for example in the above mentioned case if multiple straight line connectors overlap each other, the diagram will try to offset them and draw side by side in parallel.

## Labels
Connector annotations labels are defined as a plane text or JSX elements. Please, pay attention that component does not resolve connector annotations labels overlapping, so large number of labels can clutter view and diagram in general.

[React](../src/Samples/ConnectorAnnotation.js)
