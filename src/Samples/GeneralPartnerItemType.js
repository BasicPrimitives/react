import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams'; 
import { PageFitMode, GroupByType, Enabled, ItemType, AdviserPlacementType } from 'basicprimitives';

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
          title: "Scott Aasrud",
          description: "VP, Public Sector",
          image: "/react/photos/a.png"
        },
        {
          id: 1,
          parent: 0,
          title: "Robert Canon",
          description: "General Partner",
          image: "/react/photos/z.png",
          itemType: ItemType.GeneralPartner,
          adviserPlacementType: AdviserPlacementType.Right,
          groupTitle: "Partner"
        },
        {
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "General Partner item",
          image: "/react/photos/y.png",
          itemType: ItemType.GeneralPartner,
          adviserPlacementType: AdviserPlacementType.Left,
          groupTitle: "Partner"
        },
        {
          id: 3,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "/react/photos/b.png"
        },
        {
          id: 4,
          parent: 3,
          title: "Robert Canon 2",
          description: "General Partner item",
          image: "/react/photos/z.png",
          itemType: ItemType.GeneralPartner,
          adviserPlacementType: AdviserPlacementType.Right,
          groupTitle: "Partner"
        },
        {
          id: 5,
          parent: 3,
          title: "Ted Lucas 2",
          description: "VP, Human Resources",
          image: "/react/photos/b.png"
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
