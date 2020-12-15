import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled, Colors, TextOrientationType, OrgItemConfig } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.FitToPage,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: Enabled.True,
      itemTitleFirstFontColor: Colors.Yellow,
      itemTitleSecondFontColor: Colors.Blue,
      groupTitleOrientation: TextOrientationType.RotateRight,

      items: [
        new OrgItemConfig({
          id: 0,
          parent: null,
          title: "Scott Aasrud",
          description: "VP, Public Sector",
          groupTitle: "Group 1",
          image: "/react/photos/a.png",
          itemTitleColor: Colors.Black
        }),
        new OrgItemConfig({
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "/react/photos/b.png",
          itemTitleColor: Colors.Green,
          groupTitle: "Group 2",
          groupTitleColor: Colors.Gray
        }),
        new OrgItemConfig({
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: "/react/photos/c.png",
          itemTitleColor: Colors.Yellow,
          groupTitle: "Group 2"
        })
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
