import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { AnnotationType, Colors, Enabled, LineType, GroupByType, PageFitMode } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      items: [
        { id: 0, parent: null, title: "James Smith", description: "VP, Public Sector", image: photos.a },
        { id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: photos.b },
        { id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: photos.c },
        { id: 3, parent: 0, title: "Mike Wazowski", description: "Business Analyst, Canada", image: photos.o },
        { id: 4, parent: 3, title: "Edward Smith", description: "Field Engineer", image: photos.s },
        { id: 5, parent: 1, title: "Doug Parker", description: "Field Engineer", image: photos.p }
      ],
      annotations: [
        {
          annotationType: AnnotationType.HighlightPath,
          items: [5, 0],
          color: Colors.Navy,
          lineWidth: 12,
          opacity: 0.3,
          showArrows: false
        },
        {
          annotationType: AnnotationType.HighlightPath,
          items: [4, 0],
          color: Colors.Red,
          lineWidth: 2,
          opacity: 1,
          showArrows: true
        }
      ],
      cursorItem: 0,
      hasSelectorCheckbox: Enabled.True,
      highlightLinesColor: Colors.Red,
      highlightLinesWidth: 1.5,
      highlightLinesType: LineType.Dashed,
      arrowsDirection: GroupByType.Parents,
      pageFitMode: PageFitMode.None
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
