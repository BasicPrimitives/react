import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Thickness, LevelAnnotationConfig, AnnotationType, Colors, LineType, GroupByType, PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      items: [
        /* JSON noname objects equivalent to OrgItemConfig */
        { id: 0, parent: null, title: "James Smith", description: "VP, Public Sector", image: photos.a },
        { id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: photos.b },
        { id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: photos.c },
        { id: 3, parent: 2, title: "Robert Canon", description: "Operation, US", image: photos.r },
      ],
      annotations: [
        {
          annotationType: AnnotationType.Level,
          levels: [0],
          title: "Level 0",
          titleColor: Colors.RoyalBlue,
          offset: new Thickness(0, 0, 0, -1),
          lineWidth: new Thickness(0, 0, 0, 0),
          opacity: 0,
          borderColor: Colors.Gray,
          fillColor: Colors.Gray,
          lineType: LineType.Dotted
        },
        new LevelAnnotationConfig({
          levels: [1],
          title: "Level 1",
          titleColor: Colors.Green,
          offset: new Thickness(0, 0, 0, -1),
          lineWidth: new Thickness(0, 0, 0, 0),
          opacity: 0.08,
          borderColor: Colors.Gray,
          fillColor: Colors.Gray,
          lineType: LineType.Dotted
        }),
        new LevelAnnotationConfig({
          levels: [2],
          title: "Level 2",
          titleColor: Colors.Red,
          offset: new Thickness(0, 0, 0, -1),
          lineWidth: new Thickness(0, 0, 0, 0),
          opacity: 0,
          borderColor: Colors.Gray,
          fillColor: Colors.Gray,
          lineType: LineType.Solid
        })
      ],
      cursorItem: 0,
      hasSelectorCheckbox: Enabled.True,
      normalItemsInterval: 40 /* defines padding around items of background annotations*/,
      arrowsDirection: GroupByType.Parents,
      pageFitMode: PageFitMode.FitToPage
    };

    return <>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
