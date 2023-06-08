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
      arrowsDirection: GroupByType.Parents,
      hasSelectorCheckbox: Enabled.True,
      items: [
        {
          id: 0,
          parent: null,
          title: "James Smith",
          description: "VP, Public Sector",
          image: photos.a
        },
        {
          id: 1,
          parent: 0,
          title: "Robert Canon",
          description: "General Partner",
          image: photos.z,
          itemType: ItemType.GeneralPartner,
          adviserPlacementType: AdviserPlacementType.Right,
          groupTitle: "Partner"
        },
        {
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "General Partner item",
          image: photos.y,
          itemType: ItemType.GeneralPartner,
          adviserPlacementType: AdviserPlacementType.Left,
          groupTitle: "Partner"
        },
        {
          id: 3,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: photos.b
        },
        {
          id: 4,
          parent: 3,
          title: "Robert Canon 2",
          description: "General Partner item",
          image: photos.z,
          itemType: ItemType.GeneralPartner,
          adviserPlacementType: AdviserPlacementType.Right,
          groupTitle: "Partner"
        },
        {
          id: 5,
          parent: 3,
          title: "Ted Lucas 2",
          description: "VP, Human Resources",
          image: photos.b
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
