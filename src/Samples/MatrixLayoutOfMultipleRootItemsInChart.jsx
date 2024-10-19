import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams'; 
import { PageFitMode, ChildrenPlacementType, OrientationType, Enabled } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.None,
      cursorItem: 1,
      highlightItem: null,
      hasSelectorCheckbox: Enabled.True,
      orientationType: OrientationType.Top,
      items: [
        {
          id: 0,
          title: "invisible",
          parent: null,
          isVisible: false,
          childrenPlacementType: ChildrenPlacementType.Matrix
        },
        {
          id: 1,
          parent: 0,
          title: "Item 1",
          description: "Some description about item",
          image: "./photos/b.png"
        },
        {
          id: 2,
          parent: 0,
          title: "Item 2",
          description: "Some description about item",
          image: "./photos/b.png"
        },
        {
          id: 3,
          parent: 0,
          title: "Item 3",
          description: "Some description about item",
          image: "./photos/b.png"
        },
        {
          id: 4,
          parent: 0,
          title: "Item 4",
          description: "Some description about item",
          image: "./photos/b.png"
        },
        {
          id: 5,
          parent: 0,
          title: "Item 5",
          description: "Some description about item",
          image: "./photos/b.png"
        },
        {
          id: 6,
          parent: 0,
          title: "Item 6",
          description: "Some description about item",
          image: "./photos/b.png"
        },
        {
          id: 7,
          parent: 0,
          title: "Item 7",
          description: "Some description about item",
          image: "./photos/b.png"
        },
        {
          id: 8,
          parent: 0,
          title: "Item 8",
          description: "Some description about item",
          image: "./photos/b.png"
        },
        {
          id: 9,
          parent: 0,
          title: "Item 9",
          description: "Some description about item",
          image: "./photos/b.png"
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
