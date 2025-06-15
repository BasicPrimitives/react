# Connector Annotations

Connector annotation is an on-screen direct connection line between two nodes of the diagram. It supports simple conflict resolution. If multiple connector annotations overlap each other between the same pair of nodes, the control offsets them and draws them parallel.

The following sample demonstrates connection annotation drawn in the offbeat style. This way, connection annotation should not overlap diagram's base connection lines and block the primary diagram hierarchy view. The offbeat connector annotation compensates for the lack of space between nodes via drawing its curve outside of connected nodes.

## Styles
* `ConnectorPlacementType.Offbeat` - Free hand drawing of connector annotation
* `ConnectorPlacementType.Straight` - Straight line between nodes

## Shapes
In general, shape of connector annotation may indicate various relations, so component supports following simple use case:
* `ConnectorShapeType.OneWay` - The arrow line between `fromItem` and `toItem` nodes
* `ConnectorShapeType.TwoWay` - Two opposite direction arrow lines between `fromItem` and `toItem` nodes
* `ConnectorShapeType.BothWay` - One line having arrows on both ends

## Labels
Connector annotations labels are plain text or JSX elements. Please, pay attention that component does not resolve connector annotations labels overlapping, so many annotations labels can clutter view and diagram in general.

[React](../src/Samples/ConnectorAnnotation.jsx)

# Connector Annotations Drag & Drop

The following sample demonstrates how drag-and-drop can be used to create or modify connector annotations in a diagram.

* Drag nodes to create new annotations.
* Drag annotation endpoints to reconnect them to different nodes.
* Drag an endpoint to the origin node to delete the annotation.

[React](../src/Samples/ConnectorAnnotationDragNDropHooks.jsx)

## Drag and Drop Implementation

The drag-and-drop behavior is implemented using **React DnD** library:

- **Node drag source:** allows users to drag nodes and create new annotations by dropping on other nodes.
- **Endpoint drag source:** allows users to reconnect existing annotations by dragging endpoints to different nodes.
- **Custom drag layer:** provides real-time visual feedback by rendering a temporary live connector annotation between drag start and current mouse position.

## Limitations

Due to [React Drag & Drop](http://react-dnd.github.io/react-dnd/about) being implemented using the HTML5 drag and drop API, there is an important technical limitation:

- While dragging an annotation or its endpoint, the original annotation remains visible in the diagram.
- Simultaneously, the custom drag layer renders a live preview of the dragged annotation.
- As a result, both the original annotation and its live copy are temporarily visible during drag.

The root cause is that HTML5 drag-and-drop requires the dragged DOM element to remain mounted during the drag operation. If we attempt to modify or remove the dragged annotation from OrgDiagram while dragging, the corresponding DOM element is unmounted from the document, which aborts the drag-and-drop operation. In order to overcome this problem, we have to use non-native drag & drop frameworks.

