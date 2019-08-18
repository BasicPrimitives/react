import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connectorPlacementType: (primitives.common.ConnectorPlacementType.Offbeat)
    }
  }

  onConnectorPlacementTypeChanged(connectorPlacementType) {
    this.setState({ connectorPlacementType });
  }

  render() {
    const { connectorPlacementType } = this.state;
    const config = {
      items: [
        /* JSON noname objects equivalent to primitives.orgdiagram.ItemConfig */
        { id: 0, parent: null, title: "Scott Aasrud", description: "VP, Public Sector", image: "photos/a.png" },
        { id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: "photos/b.png" },
        { id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: "photos/c.png" },
        { id: 3, parent: 0, title: "Joseph Gipson", description: "President, Entertainment & Devices Devision", image: "photos/d.png" }
      ],
      annotations: [
        /* JSON noname object equivalent to primitives.orgdiagram.ConnectorAnnotationConfig */
        {
          annotationType: primitives.common.AnnotationType.Connector,
          fromItem: 0,
          toItem: 2,
          label: <div className="BadgeSymbol" style={{
            backgroundColor: primitives.common.Colors.Green
          }}>2</div>,
          labelSize: { width: 80, height: 30 },
          connectorShapeType: primitives.common.ConnectorShapeType.OneWay,
          color: primitives.common.Colors.Green,
          offset: 0,
          lineWidth: 2,
          lineType: primitives.common.LineType.Dashed,
          connectorPlacementType,
          selectItems: false
        },
        /* prototype based instantiation */
        {
          annotationType: primitives.common.AnnotationType.Connector,
          fromItem: 0,
          toItem: 1,
          label: <div className="BadgeSymbol" style={{
            backgroundColor: primitives.common.Colors.Red
          }}>1</div>,
          labelSize: new primitives.common.Size(80, 30),
          connectorShapeType: primitives.common.ConnectorShapeType.OneWay,
          color: primitives.common.Colors.Red,
          offset: 0,
          lineWidth: 2,
          lineType: primitives.common.LineType.Dashed,
          connectorPlacementType,
          selectItems: false
        },
        /* prototype based instantiation */
        {
          annotationType: primitives.common.AnnotationType.Connector,
          fromItem: 0,
          toItem: 3,
          label: <div className="BadgeSymbol" style={{
            backgroundColor: primitives.common.Colors.Blue
          }}>3</div>,
          labelSize: new primitives.common.Size(80, 30),
          connectorShapeType: primitives.common.ConnectorShapeType.OneWay,
          color: primitives.common.Colors.Blue,
          offset: 0,
          lineWidth: 2,
          lineType: primitives.common.LineType.Dashed,
          connectorPlacementType,
          selectItems: false
        }
      ],
      cursorItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      arrowsDirection: primitives.common.GroupByType.Parents,
      pageFitMode: primitives.orgdiagram.PageFitMode.None
    };

    return <>
      <p>Set connector annotation placement type:
        <br />
        <label>
          <input
            onClick={() => this.onConnectorPlacementTypeChanged(primitives.common.ConnectorPlacementType.Offbeat)}
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
            onClick={() => this.onConnectorPlacementTypeChanged(primitives.common.ConnectorPlacementType.Straight)}
            name="connectorPlacementType"
            type="radio"
            value="1"
            checked={connectorPlacementType === 1 ? 'checked' : ''}
          />
          Straight
        </label>
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
