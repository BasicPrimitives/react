import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { PageFitMode, Enabled, GroupByType, AdviserPlacementType, AnnotationType, Size, ConnectorShapeType, Colors, LineType, ConnectorPlacementType } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.None,
      cursorItem: 2,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: Enabled.False,
      arrowsDirection: GroupByType.Parents,
      showExtraArrows: false,
      items: [
        { id: 1, title: "David Dalton", groupTitle: "Family 1", label: "David Dalton", description: "1, Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", image: "/react/photos/q.png", itemTitleColor: "#4169e1" },
        { id: 2, relativeItem: 1, placementType: AdviserPlacementType.Right, position: 1, title: "Steven Lacombe", label: "Steven Lacombe", description: "2, GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", image: "/react/photos/a.png", itemTitleColor: "#4b0082" },
        { id: 3, parents: [1, 2], title: "Nancy Smith", label: "Nancy Smith", description: "3, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "/react/photos/s.png", itemTitleColor: "#4b0082" },
        { id: 4, parents: [3], title: "Ann Smith", label: "Nancy Smith", description: "4, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "/react/photos/s.png", itemTitleColor: "#4b0082" },
        { id: 5, parents: [3], title: "Ella Smith", label: "Nancy Smith", description: "5, GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "/react/photos/s.png", itemTitleColor: "#4b0082" },

        { id: 10, relativeItem: 1, placementType: AdviserPlacementType.Right, position: 1, title: "David Dalton", groupTitle: "Family 2", label: "David Dalton", description: "Chief Executive Officer (CEO)", phone: "352-206-7599", email: "davidalt@name.com", image: "/react/photos/q.png", itemTitleColor: "#4169e1" },
        { id: 20, relativeItem: 10, placementType: AdviserPlacementType.Right, position: 1, title: "Steven Lacombe", label: "Steven Lacombe", description: "GM, Platform Strategy", phone: "805-800-7397", email: "stevlaco@name.com", image: "/react/photos/a.png", itemTitleColor: "#4b0082" },
        { id: 30, parents: [10, 20], title: "Nancy Smith", label: "Nancy Smith", description: "GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "/react/photos/s.png", itemTitleColor: "#4b0082" },
        { id: 40, parents: [30], title: "Ann Smith", label: "Nancy Smith", description: "GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "/react/photos/s.png", itemTitleColor: "#4b0082" },
        { id: 50, parents: [30], title: "Ella Smith", label: "Nancy Smith", description: "GM, Strategic Marketing and Communications", phone: "631-787-3495", email: "nancsmit@name.com", image: "/react/photos/s.png", itemTitleColor: "#4b0082" }
      ],
      annotations: [
        {
          annotationType: AnnotationType.Connector,
          fromItem: 3,
          toItem: 30,
          label: <div className="BadgeSymbol">3</div>,
          labelSize: new Size(40, 20),
          connectorShapeType: ConnectorShapeType.OneWay,
          color: Colors.Red,
          offset: 0,
          lineWidth: 2,
          lineType: LineType.Dashed,
          connectorPlacementType: ConnectorPlacementType.Offbeat,
          selectItems: false
        }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
