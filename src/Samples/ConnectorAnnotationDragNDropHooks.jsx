import React, { Component, useEffect } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Point, Size, Rect, Thickness, ConnectorAnnotationControlConfig, Colors, PageFitMode, Enabled, OrientationType, ConnectorAnnotationConfig, ConnectorShapeType, ConnectorPlacementType, LineType } from 'basicprimitives';
import { DndProvider, useDrag, useDrop, useDragLayer } from 'react-dnd';
import { HTML5Backend, getEmptyImage } from 'react-dnd-html5-backend';
import ConnectorAnnotationComponent from '../Diagrams/ConnectorAnnotationComponent';

const ItemType = {
  Node: 'node',
  Endpoint: 'endpoint'
}

function CustomDragLayer({ connectorPlacementType = ConnectorPlacementType.Straight, newAnnotation, getItemPosition, getComponentOffset }) {
  const {
    initialClientOffset,
    currentClientOffset,
    isDragging,
    item,
    itemType
  } = useDragLayer((monitor) => ({
    initialClientOffset: monitor.getInitialClientOffset(),
    currentClientOffset: monitor.getClientOffset(),
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    itemType: monitor.getItemType()
  }));

  if (!isDragging || !initialClientOffset || !currentClientOffset ) {
    return null;
  }

  let fromRect;
  let toRect;
  let annotation;
  const parentClientOffset = getComponentOffset();
  const initialOffset = new Point(initialClientOffset.x - parentClientOffset.left, initialClientOffset.y - parentClientOffset.top);
  const currentOffset = new Point(currentClientOffset.x - parentClientOffset.left, currentClientOffset.y - parentClientOffset.top);
  switch(itemType) {
    case 'endpoint':
      if (item.isFromEndPoint) {
        toRect = getItemPosition(item.config.toItem);
        fromRect= new Rect(currentOffset.x - 4, currentOffset.y - 4, 8, 8);
      } else {
        toRect = new Rect(currentOffset.x - 4, currentOffset.y - 4, 8, 8);
        fromRect = getItemPosition(item.config.fromItem);
      }
      annotation = item.config;
      break;
    case 'node':
      fromRect = new Rect(initialOffset.x - 4, initialOffset.y - 4, 8, 8);
      toRect = new Rect(currentOffset.x - 4, currentOffset.y - 4, 8, 8);
      annotation = newAnnotation;
      break;
  }

  if (fromRect.equalTo(toRect)) {
    return null;
  }

  const connectorAnnotationControlConfig = new ConnectorAnnotationControlConfig({
    ...annotation,
    offset: new Thickness(0, 0, 0, 0),
    fromRectangle: fromRect,
    toRectangle: toRect
  });

  return (
    <div style={{
      position: "absolute",
      pointerEvents: "none",
      zIndex: 100,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }}>
      <ConnectorAnnotationComponent config={connectorAnnotationControlConfig} style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none", // So that it doesn't block mouse events
      }}
      />
      <div style={{
          position: "absolute",
          left: currentOffset.x - 4,
          top: currentOffset.y - 4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: annotation.color
        }}
      />
    </div>
  );
}

function NodeDragDropSource({ itemConfig, onMoveItem, isDragging }) {
  const [, dragRef, previewRef] = useDrag({
    type: ItemType.Node,
    item: () => ({ id: itemConfig.id, config: itemConfig })
  });

  const [, drop] = useDrop({ 
    accept: [ItemType.Node, ItemType.Endpoint],
    drop(item, monitor) {
      const itemType = monitor.getItemType();
      onMoveItem(itemType, itemConfig.id, item.id, item.isFromEndPoint);
    },
    canDrop(item) {
      return true;
    }
  });

  useEffect(() => {
    previewRef(getEmptyImage(), { captureDraggingState: true });
  }, [previewRef]);

  return (
    <div ref={drop} style={{ width: "100%", height: "100%" }}>
      <div ref={dragRef} className="ContactTemplate">
        <div className="ContactTitleBackground" style={{ backgroundColor: Colors.RoyalBlue }}>
          <div className="ContactTitle">{itemConfig.title}</div>
        </div>
        <div className="ContactPhotoFrame">
          <img className="ContactPhoto" src={itemConfig.image} alt={itemConfig.title} />
        </div>
        <div className="ContactPhone">{itemConfig.phone}</div>
        <div className="ContactEmail">{itemConfig.email}</div>
        <div className="ContactDescription">{itemConfig.description}</div>
      </div>
    </div>
  );
}

function EndpointDragSource({ annotationConfig }) {
  const [{ opacity }, dragRef] = useDrag({
    type: ItemType.Endpoint,
    item: () => {
      return ({ id: annotationConfig.context, isFromEndPoint: annotationConfig.isFromEndPoint, config: annotationConfig })
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })
  return (
    <div ref={dragRef} style = {{
      cursor: "pointer",
      position: "absolute",
      width: "100%",
      height: "100%",
      "MozBorderRadius": "8px",
      "WebkitBorderRadius": "8px",
      "KhtmlBorderRadius": "8px",
      "borderRadius": "8px",
      margin: 0,
      background: "blue",
      opacity: 0.5,
      pointerEvents: "auto"
      }}>

    </div>
  )
}

class Sample extends Component {
  constructor() {
    super();

    this.orgDiagramRef = React.createRef();

    this.onMoveItem = this.onMoveItem.bind(this);

    this.state = {
        annotation: new ConnectorAnnotationConfig({
        context: 3,
        label: <div className="BadgeSymbol" style={{backgroundColor: Colors.Blue}}>3</div>,
        labelSize: new Size(30, 30),
        connectorShapeType: ConnectorShapeType.OneWay,
        color: Colors.Blue,
        offset: 0,
        lineWidth: 2,
        lineType: LineType.Dashed,
        connectorPlacementType: ConnectorPlacementType.Offbeat,
        selectItems: false
      }),
      connectorPlacementType: ConnectorPlacementType.Offbeat,
      id: null,
      isFromEndPoint: null,
      startPoint: null,
      fromRect: null,
      toRect: null,
      indicator: null, // the dragged object
      position: { x: 0, y: 0 }, // dragged object position
      
      items: [
        { id: 0, parent: null, title: "Henry Johnson", email: "hjohnson@corp.com", phone: "(416) 222-22-21", description: "VP, Global Strategy", image: "./photos/a.png" },
        { id: 1, parent: 0, title: "Sandra Miller", email: "smiller@corp.com", phone: "(416) 222-22-22", description: "VP, Corporate Affairs", image: "./photos/b.png" },
        { id: 2, parent: 0, title: "Carlos Ramirez", email: "cramirez@corp.com", phone: "(416) 222-22-23", description: "Director, North America Sales", image: "./photos/c.png" },
        { id: 3, parent: 0, title: "Olivia Turner", email: "oturner@corp.com", phone: "(416) 222-22-24", description: "President, Global Operations", image: "./photos/d.png" },
        { id: 5, parent: 2, title: "Victor Chen", email: "vchen@corp.com", phone: "(416) 222-22-25", description: "Regional VP, Asia Pacific Operations", image: "./photos/e.png" },
        { id: 6, parent: 2, title: "Emily Davis", email: "edavis@corp.com", phone: "(416) 222-22-26", description: "GM, Corporate Development", image: "./photos/f.png" },
        { id: 10, parent: 6, title: "Peter Long", email: "plong@corp.com", phone: "(416) 222-22-31", description: "VP, Emerging Markets", image: "./photos/g.png" },
        { id: 11, parent: 10, title: "Isabella Cruz", email: "icruz@corp.com", phone: "(416) 222-22-32", description: "VP, Legal & Compliance", image: "./photos/h.png" },
        { id: 12, parent: 10, title: "Marcus Lee", email: "mlee@corp.com", phone: "(416) 222-22-33", description: "Director, Client Services", image: "./photos/i.png" },
        { id: 13, parent: 10, title: "Sophia White", email: "swhite@corp.com", phone: "(416) 222-22-34", description: "President, Product Innovation", image: "./photos/p.png" },
        { id: 15, parent: 12, title: "Nathan Green", email: "ngreen@corp.com", phone: "(416) 222-22-35", description: "Regional VP, South America", image: "./photos/r.png" },
        { id: 16, parent: 12, title: "Laura Scott", email: "lscott@corp.com", phone: "(416) 222-22-36", description: "GM, Strategic Partnerships", image: "./photos/s.png" }
      ],
      hasSelectorCheckbox: Enabled.False,
      showEndPoints: Enabled.Auto,
      annotations: [
        /* prototype based instantiation */
        new ConnectorAnnotationConfig({
          context: 1,
          fromItem: 0,
          toItem: 5,
          label: <div className="BadgeSymbol" style={{backgroundColor: Colors.Red}}>1</div>,
          labelSize: new Size(80, 30),
          connectorShapeType: ConnectorShapeType.OneWay,
          color: Colors.Red,
          offset: -10,
          lineWidth: 2,
          lineType: LineType.Dashed,
          connectorPlacementType: ConnectorPlacementType.Offbeat,
          selectItems: false
        }),
        /* prototype based instantiation */
        new ConnectorAnnotationConfig({
          context: 2,
          fromItem: 0,
          toItem: 3,
          label: <div className="BadgeSymbol" style={{backgroundColor: Colors.Blue}}>3</div>,
          labelSize: new Size(80, 30),
          connectorShapeType: ConnectorShapeType.OneWay,
          color: Colors.Blue,
          offset: -10,
          lineWidth: 2,
          lineType: LineType.Dashed,
          connectorPlacementType: ConnectorPlacementType.Offbeat,
          selectItems: false
        })
      ]
    }
  }

  onMoveItem(itemType, toItem, id, isFromEndPoint) {
    let { annotations, annotation, connectorPlacementType } = this.state;
    const newId = annotation.context + 1; // Current annotation value + 1
    const color = [Colors.Blue, Colors.Red][Math.round(Math.random())];
    if(!Number.isNaN(toItem)) {
      switch(itemType) {
        case ItemType.Node:
          annotation.fromItem = id;
          annotation.toItem = toItem;
          this.setState({
            itemType: null,
            annotation: new ConnectorAnnotationConfig({
              context: newId,
              label: <div className="BadgeSymbol" style={{backgroundColor: color}}>{newId}</div>,
              labelSize: new Size(30, 30),
              connectorShapeType: ConnectorShapeType.OneWay,
              color,
              offset: 0,
              lineWidth: 2,
              lineType: LineType.Dashed,
              connectorPlacementType,
              selectItems: false
            }),
            annotations: [
              ...annotations,
              {
                ...annotation,
                toItem,
                offset: -10,
              }
            ]
          });
          break;
        case ItemType.Endpoint:
          this.reconnectAnnotation(id, isFromEndPoint, toItem);
          break;
      }
    }
  }

  reconnectAnnotation(id, isFromEndPoint, toItem) {
    var { annotations } = this.state;
    var annotation = annotations.find((annotation) => annotation.context == id);
    annotations = annotations.filter((annotation) => annotation.context != id)
    if (isFromEndPoint) {
      annotation.fromItem = toItem;
    } else {
      annotation.toItem = toItem;
    }
    annotation.offset = -10;
    if (annotation.fromItem != annotation.toItem) {
      annotations = [...annotations, annotation];
    }
    this.setState({
      ...this.state,
      annotations
    });
  }

  onConnectorPlacementTypeChanged(connectorPlacementType) {
    const { annotation, annotations } = this.state;
    this.setState({ connectorPlacementType,
      annotation: {
        ...annotation,
        connectorPlacementType
      },
      annotations: annotations.map(annotation => {
        return {
          ...annotation,
          connectorPlacementType
        }
      })
      });
  }

  render() {
    const { annotation, connectorPlacementType } = this.state;
    const config = {
      ...this.state,
      pageFitMode: PageFitMode.None,

      hasSelectorCheckbox: Enabled.False,
      orientationType: OrientationType.Top,
      defaultTemplateName: "contactTemplate",
      templates: [{
        name: "contactTemplate",
        itemSize: { width: 160, height: 100 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          return <NodeDragDropSource
            itemConfig={itemConfig}
            onMoveItem={this.onMoveItem}
          />;
        }
      }],
      onEndPointRender: ({ context: annotationConfig }) => {
          return <EndpointDragSource annotationConfig={annotationConfig} />;
      }
    };

    return <>
      <p>Set connector annotation placement type:
        <br />
        <label>
          <input
            onChange={() => this.onConnectorPlacementTypeChanged(ConnectorPlacementType.Offbeat)}
            name="connectorPlacementType"
            type="radio"
            value="0"
            checked={connectorPlacementType === 0 ? 'checked' : ''}
          />
          Offbeat
        </label>
        <br />
        <label>
          <input
            onChange={() => this.onConnectorPlacementTypeChanged(ConnectorPlacementType.Straight)}
            name="connectorPlacementType"
            type="radio"
            value="1"
            checked={connectorPlacementType === 1 ? 'checked' : ''}
          />
          Straight
        </label>
      </p>
      <div className="placeholder" style={{ clear: 'both', position: 'relative', overflow: 'hidden' }} >
        <OrgDiagram ref={this.orgDiagramRef} centerOnCursor={false} config={config} />
        <CustomDragLayer
          connectorPlacementType={connectorPlacementType}
          newAnnotation = {annotation}
          getItemPosition = {(itemId) => this.orgDiagramRef.current.getItemPosition(itemId)}
          getComponentOffset = {() => {
            return this.orgDiagramRef.current.getComponentOffset();
          }}
        />
        <div
          id="annotation"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none", // So that it doesn't block mouse events
          }}
        >
        </div>
      </div>
      <div style={{width: "640px"}}>
        This sample demonstrates how drag-and-drop can be used to create or modify connector annotations in a diagram.

        <ul>
          <li>Drag nodes to create new annotations.</li>
          <li>Drag annotation endpoints to reconnect them to different nodes.</li>
          <li>Drag an endpoint onto the same node to delete the annotation.</li>
        </ul>

        The sample uses the <a href="https://react-dnd.github.io/react-dnd/" target="_blank">React DnD</a> 
        library (MIT licensed) to support dynamic diagram updates during node or endpoint movement. 
        A custom drag layer is rendered to provide visual feedback while dragging. When dragging begins,
        the corresponding annotation is temporarily removed from the diagram and reinserted upon drop,
        reflecting the updated connection.
      </div>
    </>;
  }
}

class Container extends Component {
  render() {
    return <DndProvider backend={HTML5Backend}>
      <Sample />
    </DndProvider>
  }
}

export default Container;
