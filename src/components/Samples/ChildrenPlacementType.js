import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled, ChildrenPlacementType } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.None,
      maximumColumnsInMatrix: 3,
      cursorItem: 1,
      highlightItem: 0,
      normalItemsInterval: 20,
      cousinsIntervalMultiplier: 1,
      defaultTemplateName: "info",
      templates: [{
        name: "info",
        itemSize: { width: 80, height: 36 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 4, top: 4, right: 4, bottom: 4 },
        onItemRender: ({ context: itemConfig }) => {
          return <div className="InfoTemplate">{itemConfig.title}</div>;
        }
      }],
      hasSelectorCheckbox: Enabled.False,
      items: [
        /* matrix layout example */
        {
          id: 1,
          parent: null,
          title: "Matrix Layout",
          childrenPlacementType: ChildrenPlacementType.Matrix
        },
        { id: 2, parent: 1, title: "Child 1" },
        { id: 3, parent: 1, title: "Child 2" },
        { id: 4, parent: 1, title: "Child 3" },
        { id: 5, parent: 1, title: "Child 4" },
        { id: 6, parent: 1, title: "Child 5" },
        { id: 7, parent: 1, title: "Child 6" },
        { id: 8, parent: 1, title: "Child 7" },
        { id: 9, parent: 1, title: "Child 8" },

        /* vertical layout example */
        {
          id: 101,
          parent: null,
          title: "Vertical Layout",
          childrenPlacementType: ChildrenPlacementType.Vertical
        },
        { id: 102, parent: 101, title: "Child 1" },
        { id: 103, parent: 101, title: "Child 2", childrenPlacementType: ChildrenPlacementType.Vertical },
        { id: 104, parent: 103, title: "Sub Child 3" },
        { id: 105, parent: 103, title: "Sub Child 4" },
        { id: 106, parent: 101, title: "Child 5" },
        { id: 107, parent: 101, title: "Child 6" },

        /* horizontal layout example */
        {
          id: 201,
          parent: null,
          title: "Horizontal Layout",
          childrenPlacementType: ChildrenPlacementType.Horizontal
        },
        { id: 202, parent: 201, title: "Child 1" },
        { id: 203, parent: 201, title: "Child 2" },
        { id: 204, parent: 201, title: "Child 3" }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
