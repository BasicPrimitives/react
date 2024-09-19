import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { AnnotationType, Colors, ZOrderType, Enabled, OrientationType, PageFitMode, GroupByType, LineType } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      items: [
        { id: 1, title: "Design", label: "Design", et: 80, lt: 100, itemTitleColor: "#4b0082" },
        { id: 2, parents: [1], title: "Aerodynamics", label: "Aerodynamics", et: 30, lt: 45, itemTitleColor: "#4b0082" },
        { id: 3, parents: [1], title: "Structure", label: "Structure", et: 35, lt: 55, itemTitleColor: "#4b0082" },
        { id: 4, parents: [2], title: "Propulsion", label: "Propulsion", et: 50, lt: 65, itemTitleColor: "#4b0082" },
        { id: 5, parents: [3], title: "Control & Stability", label: "Control & Stability", et: 40, lt: 50, itemTitleColor: "#4b0082" },
        { id: 6, parents: [1, 4, 5], title: "Build & Test Model", label: "Build & Test Model", et: 50, lt: 70, itemTitleColor: "#4b0082" },
        { id: 7, parents: [6], title: "Computation", label: "Computation", et: 20, lt: 30, itemTitleColor: "#4b0082" },
        { id: 8, parents: [6], title: "Wind Tunnel", label: "Wind Tunnel", et: 20, lt: 30, itemTitleColor: "#4b0082" },
        { id: 9, parents: [7, 8], title: "Review", label: "Review", et: 45, lt: 55, itemTitleColor: "#4b0082" },
        { id: 10, parents: [6, 9], title: "Build Prototype", label: "Build Prototype", et: 60, lt: 80, itemTitleColor: "#4b0082" },
        { id: 11, parents: [9], title: "Research flights", label: "Research flights", et: 50, lt: 60, itemTitleColor: "#4b0082" },
        { id: 12, parents: [10], title: "Finalize", label: "Finalize", et: 20, lt: 30, itemTitleColor: "#4b0082" },
        { id: 13, parents: [7], title: "Flight Simulation", label: "Flight Simulation", et: 30, lt: 45, itemTitleColor: "#4b0082" },
        { id: 14, parents: [13], title: "Revise & Review", label: "Revise & Review", et: 45, lt: 55, itemTitleColor: "#4b0082" }
      ],
      annotations: [
        {
          annotationType: AnnotationType.HighlightPath,
          items: [1, 3, 5, 6, 8, 9, 10, 12],
          color: Colors.Red,
          lineWidth: 2,
          zOrderType: ZOrderType.Foreground,
          opacity: 0.5
        }
      ],
      templates: [{
        name: "pertTemplate",
        itemSize: { width: 100, height: 60 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          const { title, itemTitleColor, et, lt } = itemConfig;
          const backgroundColor = itemTitleColor != null ? itemTitleColor : Colors.RoyalBlue;
          return <div className="PERTTemplate">
            <div className="PERTTitleBackground" style={{ backgroundColor }}>
              <div className="PERTTitle">{title}</div>
            </div>
            <div className="PERTHorizontalLine" />
            <div className="PERTVerticalLine" />
            <div className="PERTETTitle">ET</div>
            <div className="PERTLTTitle">LT</div>
            <div className="PERTET">{et}</div>
            <div className="PERTLT">{lt}</div>
          </div>;
        }
      }],
      cursorItem: 0,
      linesWidth: 2,
      linesColor: "gray",
      lineItemsInterval: 5,
      hasSelectorCheckbox: Enabled.True,
      orientationType: OrientationType.Left,
      pageFitMode: PageFitMode.None,
      defaultTemplateName: "pertTemplate",
      arrowsDirection: GroupByType.Children,
      highlightLinesColor: Colors.Navy,
      highlightLinesWidth: 2,
      highlightLinesType: LineType.Solid
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div >
  }
}

export default Sample;
