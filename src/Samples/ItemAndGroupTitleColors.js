import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: primitives.common.PageFitMode.FitToPage,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      itemTitleFirstFontColor: primitives.common.Colors.Yellow,
      itemTitleSecondFontColor: primitives.common.Colors.Blue,
      groupTitleOrientation: primitives.text.TextOrientationType.RotateRight,

      items: [
        new primitives.orgdiagram.ItemConfig({
          id: 0,
          parent: null,
          title: "Scott Aasrud",
          description: "VP, Public Sector",
          groupTitle: "Group 1",
          image: "photos/a.png",
          itemTitleColor: primitives.common.Colors.Black
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "photos/b.png",
          itemTitleColor: primitives.common.Colors.Green,
          groupTitle: "Group 2",
          groupTitleColor: primitives.common.Colors.Gray
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: "photos/c.png",
          itemTitleColor: primitives.common.Colors.Yellow,
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
