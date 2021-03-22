import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { AnnotationType, GroupByType, ConnectorType, ElbowType, LineType, Colors, PageFitMode, Enabled } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      annotations: [
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [3], title: <div className="InLayoutLabel">10%</div> },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [5], title: <div className="InLayoutLabel">30%</div> },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [6], title: <div className="InLayoutLabel">50%</div> },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [7], title: <div className="InLayoutLabel">10%</div> },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [3, 5], title: <div className="InLayoutLabel">40%</div> },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [3, 5, 6, 7], title: <div className="InLayoutLabel">100%</div> },
        { annotationType: AnnotationType.Label, fromItem: 2, toItems: [1], title: <div className="InLayoutLabel">100%</div> }
      ],
      items: [
        { id: 1, parents: [3, 5, 6, 7], title: "James", label: "James", description: "James is First and he is child of Brad, Sara & Lynette", image: "/react/photos/j.png" },
        { id: 2, parents: [1], title: "Brad", label: "Brad", description: "", image: "/react/photos/b.png" },
        { id: 3, parents: [2], title: "Thomas", label: "Thomas", description: "", image: "/react/photos/t.png" },
        { id: 4, parents: [3], title: "David", label: "David", description: "", image: "/react/photos/d.png" },
        { id: 5, parents: [4], title: "Lynette", label: "Lynette", description: "", image: "/react/photos/l.png" },
        { id: 6, parents: [4], title: "Sara", label: "Sara", description: "", image: "/react/photos/s.png" },
        { id: 7, title: "Parent", label: "Parent", description: "Parent node of James", image: "/react/photos/j.png" }
      ],
      arrowsDirection: GroupByType.Parents,
      showExtraArrows: true,
      extraArrowsMinimumSpace: 30,
      connectorType: ConnectorType.Squared,
      elbowType: ElbowType.Round,
      bevelSize: 4,
      elbowDotSize: 4,
      linesType: LineType.Solid,
      linesColor: Colors.Black,
      linesWidth: 1,

      /* Intervals */
      normalLevelShift: 20,
      dotLevelShift: 20,
      lineLevelShift: 20,

      normalItemsInterval: 20,
      dotItemsInterval: 10,
      lineItemsInterval: 10,

      cursorItem: 1,
      pageFitMode: PageFitMode.None,
      hasSelectorCheckbox: Enabled.True
    };

    return <>
      <div className="placeholder">
        <FamDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
