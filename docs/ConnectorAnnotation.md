# Connector Annotations

Connector annotation is an on-screen direct connection line between two nodes of the diagram. It supports simple conflict resolution. If multiple connector annotations overlap each other between the same pair of nodes, the control offsets them and draws them parallel. 

The following sample demonstrates connection annotation drawn in the offbeat style. This way, connection annotation should not overlap diagrams base connection lines and block the primary diagram hierarchy view. The offbeat connector annotation compensates for the lack of space between nodes via drawing its curve outside of connected nodes.

## Styles
* `ConnectorPlacementType.Offbeat` - Free hand drawing of connector annotation
* `ConnectorPlacementType.Straight` - Straight line between nodes

## Shapes
In general shape of connector annotation may indicate various relations, so component supports following simple use case:
* `ConnectorShapeType.OneWay` - The arrow line between `fromItem` and `toItem` nodes
* `ConnectorShapeType.TwoWay` - Two opposite direction arrow lines between `fromItem` and `toItem` nodes
* `ConnectorShapeType.BothWay` - One line having arrows on both ends

## Labels
Connector annotations labels are plain text or JSX elements. Please, pay attention that component does not resolve connector annotations labels overlapping, so many annotations labels can clutter view and diagram in general.

[React](../src/Samples/ConnectorAnnotation.js)
