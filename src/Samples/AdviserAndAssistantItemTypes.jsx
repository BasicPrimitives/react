import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams'; 
import { PageFitMode, GroupByType, Enabled, ItemType, AdviserPlacementType } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.None,
      cursorItem: 0,
      highlightItem: 0,
      arrowsDirection: GroupByType.Children,
      hasSelectorCheckbox: Enabled.False,
      items: [
        {
          id: 0,
          parent: null,
          title: "James Smith",
          description: "Parent Item",
          image: "./photos/a.png"
        },
        {
          id: 1,
          parent: 0,
          itemType: ItemType.Adviser,
          adviserPlacementType: AdviserPlacementType.Right,
          title: "Robert Canon",
          description: "Adviser item",
          groupTitle: "Adviser",
          image: "./photos/b.png"
        },
        {
          id: 2,
          parent: 0,
          itemType: ItemType.Assistant,
          adviserPlacementType: AdviserPlacementType.Right,
          title: "Ted Lucas",
          description: "Assitant Item",
          groupTitle: "Assistant",
          image: "./photos/c.png"
        },
        {
          id: 3,
          parent: 0,
          title: "Fritz Stuger",
          description: "Regular Item",
          groupTitle: "Regular",
          image: "./photos/d.png"
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
