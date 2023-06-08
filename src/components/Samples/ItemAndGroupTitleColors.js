import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled, Colors, TextOrientationType, OrgItemConfig } from 'basicprimitives';
import photos from '../photos';

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
          title: "James Smith",
          description: "VP, Public Sector",
          groupTitle: "Group 1",
          image: photos.a,
          itemTitleColor: Colors.Black
        }),
        new OrgItemConfig({
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: photos.b,
          itemTitleColor: Colors.Green,
          groupTitle: "Group 2",
          groupTitleColor: Colors.Gray
        }),
        new OrgItemConfig({
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: photos.c,
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
