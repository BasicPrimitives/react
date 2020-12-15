import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { PageFitMode, Enabled, GroupByType, AdviserPlacementType } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.None,
      cursorItem: 2,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: Enabled.True,
      normalLevelShift: 20,
      dotLevelShift: 20,
      lineLevelShift: 20,
      normalItemsInterval: 10,
      dotItemsInterval: 30,
      lineItemsInterval: 30,
      arrowsDirection: GroupByType.Parents,
      showExtraArrows: false,
      items: [
        {
          id: 1,
          spouses: [2],
          title: "Thomas Williams",
          label: "Thomas Williams",
          description: "1, 1st husband",
          image: "/react/photos/t.png"
        },
        {
          id: 2,
          title: "Mary Spencer",
          label: "Mary Spencer",
          description: "2, The Mary",
          image: "/react/photos/m.png",
          relativeItem: 1,
          placementType: AdviserPlacementType.Right,
          position: 1
        },
        {
          id: 3,
          spouses: [2],
          title: "David Kirby",
          label: "David Kirby",
          description: "3, 2nd Husband",
          image: "/react/photos/d.png",
          relativeItem: 2,
          placementType: AdviserPlacementType.Right,
          position: 1
        },
        {
          id: 4,
          parents: [1, 2],
          title: "Brad Williams",
          label: "Brad Williams",
          description: "4, 1st son",
          image: "/react/photos/b.png"
        },
        {
          id: 5,
          parents: [2, 3],
          spouses: [6, 7],
          title: "Mike Kirby",
          label: "Mike Kirby",
          description: "5, 2nd son, having 2 spouses",
          image: "/react/photos/m.png"
        },
        {
          id: 6,
          title: "Lynette Maloney",
          label: "Lynette Maloney",
          description: "5, Spouse 1",
          image: "/react/photos/m.png",
          relativeItem: 5,
          placementType: AdviserPlacementType.Right,
          position: 1
        },
        {
          id: 7,
          title: "Sara Kemp",
          label: "Sara Kemp",
          description: "5, Spouse 2",
          image: "/react/photos/s.png",
          relativeItem: 5,
          placementType: AdviserPlacementType.Left,
          position: 1
        },
        {
          id: 8,
          parents: [5, 7],
          title: "Leon Kemp",
          label: "Leon Kemp",
          description: "5, First Child",
          image: "/react/photos/l.png"
        }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
