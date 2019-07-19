import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams'; 
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: primitives.common.PageFitMode.None,
      cursorItem: 0,
      highlightItem: 0,
      arrowsDirection: primitives.common.GroupByType.Children,
      hasSelectorCheckbox: primitives.common.Enabled.False,
      items: [
        {
          id: 0,
          parent: null,
          title: "Scott Aasrud",
          description: "Parent Item",
          image: "/photos/a.png"
        },
        {
          id: 1,
          parent: 0,
          itemType: primitives.orgdiagram.ItemType.SubAdviser,
          adviserPlacementType: primitives.common.AdviserPlacementType.Right,
          title: "Robert Canon",
          description: "Sub Adviser item",
          groupTitle: "SubAdviser",
          image: "/photos/b.png"
        },
        {
          id: 2,
          parent: 0,
          itemType: primitives.orgdiagram.ItemType.SubAssistant,
          adviserPlacementType: primitives.common.AdviserPlacementType.Left,
          title: "Ted Lucas",
          description: "Sub Assitant Item",
          groupTitle: "SubAssistant",
          image: "/photos/c.png"
        },
        {
          id: 3,
          parent: 0,
          title: "Fritz Stuger",
          description: "Regular Item",
          groupTitle: "Regular",
          image: "/photos/d.png"
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
