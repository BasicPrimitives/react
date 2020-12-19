import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, ConnectorPlacementType, AnnotationType, Colors, ConnectorShapeType, LineType, Size, Enabled, GroupByType } from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connectorPlacementType: (ConnectorPlacementType.Offbeat)
    }
  }

  onConnectorPlacementTypeChanged(connectorPlacementType) {
    this.setState({ connectorPlacementType });
  }

  render() {
    const { connectorPlacementType } = this.state;
    const config = {
      items: [
        /* JSON noname objects equivalent to OrgItemConfig */
        { id: 0, parent: null, title: "James Smith", description: "VP, Public Sector", image: "/react/photos/a.png" },
        { id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: "/react/photos/b.png" },
        { id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: "/react/photos/c.png" },
        { id: 3, parent: 0, title: "Joseph Gipson", description: "President, Entertainment & Devices Devision", image: "/react/photos/d.png" }
      ],
      annotations: [
        /* JSON noname object equivalent to ConnectorAnnotationConfig */
        {
          annotationType: AnnotationType.Connector,
          fromItem: 0,
          toItem: 2,
          label: <div className="BadgeSymbol" style={{
            backgroundColor: Colors.Green
          }}>2</div>,
          labelSize: { width: 80, height: 30 },
          connectorShapeType: ConnectorShapeType.OneWay,
          color: Colors.Green,
          offset: 0,
          lineWidth: 2,
          lineType: LineType.Dashed,
          connectorPlacementType,
          selectItems: false
        },
        /* prototype based instantiation */
        {
          annotationType: AnnotationType.Connector,
          fromItem: 0,
          toItem: 1,
          label: <div className="BadgeSymbol" style={{
            backgroundColor: Colors.Red
          }}>1</div>,
          labelSize: new Size(80, 30),
          connectorShapeType: ConnectorShapeType.OneWay,
          color: Colors.Red,
          offset: 0,
          lineWidth: 2,
          lineType: LineType.Dashed,
          connectorPlacementType,
          selectItems: false
        },
        /* prototype based instantiation */
        {
          annotationType: AnnotationType.Connector,
          fromItem: 0,
          toItem: 3,
          label: <div className="BadgeSymbol" style={{
            backgroundColor: Colors.Blue
          }}>3</div>,
          labelSize: new Size(80, 30),
          connectorShapeType: ConnectorShapeType.OneWay,
          color: Colors.Blue,
          offset: 0,
          lineWidth: 2,
          lineType: LineType.Dashed,
          connectorPlacementType,
          selectItems: false
        }
      ],
      cursorItem: 0,
      hasSelectorCheckbox: Enabled.True,
      arrowsDirection: GroupByType.Parents,
      pageFitMode: PageFitMode.None
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
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
