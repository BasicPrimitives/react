import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams'; 
import { PageFitMode, GroupByType, Enabled, ItemType, AdviserPlacementType } from 'basicprimitives';
import photos from '../photos';

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
          image: photos.a
        },
        {
          id: 1,
          parent: 0,
          itemType: ItemType.SubAdviser,
          adviserPlacementType: AdviserPlacementType.Right,
          title: "Robert Canon",
          description: "Sub Adviser item",
          groupTitle: "SubAdviser",
          image: photos.b
        },
        {
          id: 2,
          parent: 0,
          itemType: ItemType.SubAssistant,
          adviserPlacementType: AdviserPlacementType.Left,
          title: "Ted Lucas",
          description: "Sub Assitant Item",
          groupTitle: "SubAssistant",
          image: photos.c
        },
        {
          id: 3,
          parent: 0,
          title: "Fritz Stuger",
          description: "Regular Item",
          groupTitle: "Regular",
          image: photos.d
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
