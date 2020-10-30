import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      items: [
        { id: 0, parent: null, title: "Scott Aasrud", description: "VP, Public Sector", image: "/react/photos/a.png" },
        { id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: "/react/photos/b.png" },
        { id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: "/react/photos/c.png" },
        { id: 3, parent: 0, title: "Mike Wazowski", description: "Business Analyst, Canada", image: "/react/photos/o.png" },
        { id: 4, parent: 3, title: "Edward Smith", description: "Field Engineer", image: "/react/photos/s.png" },
        { id: 5, parent: 1, title: "Doug Parker", description: "Field Engineer", image: "/react/photos/p.png" }
      ],
      annotations: [
        {
          annotationType: primitives.common.AnnotationType.HighlightPath,
          items: [5, 0],
          color: primitives.common.Colors.Navy,
          lineWidth: 12,
          opacity: 0.3,
          showArrows: false
        },
        {
          annotationType: primitives.common.AnnotationType.HighlightPath,
          items: [4, 0],
          color: primitives.common.Colors.Red,
          lineWidth: 2,
          opacity: 1,
          showArrows: true
        }
      ],
      cursorItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      highlightLinesColor: primitives.common.Colors.Red,
      highlightLinesWidth: 1.5,
      highlightLinesType: primitives.common.LineType.Dashed,
      arrowsDirection: primitives.common.GroupByType.Parents,
      pageFitMode: primitives.orgdiagram.PageFitMode.None
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
