import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { Enabled, GroupByType, PageFitMode } from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      cursorItem: 1,
      enableMatrixLayout: true,
      minimumMatrixSize: 3,
      hasSelectorCheckbox: Enabled.False,
      arrowsDirection: GroupByType.Children,
      pageFitMode: PageFitMode.None,
      items: [
        { id: 1, parents: [], title: "Corp 1", label: "Corp 1", description: "Parent 1", image: "./photos/p.png" },
        { id: 2, parents: [], title: "Corp 2", label: "Corp 2", description: "Parent 2", image: "./photos/p.png" },
        { id: 101, parents: [], title: "Corp 3", label: "Corp 3", description: "Parent 3", image: "./photos/p.png" },
        { id: 102, parents: [], title: "Corp 4", label: "Corp 4", description: "Parent 4", image: "./photos/p.png" },
        { id: 3, parents: [1, 2, 101, 102], title: "Sibling 1", label: "Sibling 1", description: "Sibling 1", image: "./photos/s.png" },
        { id: 4, parents: [1, 2, 101, 102], title: "Sibling 2", label: "Sibling 2", description: "Sibling 2", image: "./photos/s.png" },
        { id: 5, parents: [1, 2, 101, 102], title: "Sibling 3", label: "Sibling 3", description: "Sibling 3", image: "./photos/s.png" },
        { id: 6, parents: [1, 2, 101, 102], title: "Sibling 4", label: "Sibling 4", description: "Sibling 4", image: "./photos/s.png" },
        { id: 7, parents: [1, 2, 101, 102], title: "Sibling 5", label: "Sibling 5", description: "Sibling 5", image: "./photos/s.png" },
        { id: 8, parents: [1, 2, 101, 102], title: "Sibling 6", label: "Sibling 6", description: "Sibling 6", image: "./photos/s.png" },
        { id: 9, parents: [1, 2, 101, 102], title: "Sibling 7", label: "Sibling 7", description: "Sibling 7", image: "./photos/s.png" },
        { id: 10, parents: [3, 4, 5, 6, 7, 8, 9], title: "Grand Child 1", label: "Grand Child 1", description: "Grand Child 1", image: "./photos/c.png" },
        { id: 11, parents: [3, 4, 5, 6, 7, 8, 9], title: "Grand Child 2", label: "Grand Child 2", description: "Grand Child 2", image: "./photos/c.png" },
        { id: 12, parents: [3, 4, 5, 6, 7, 8, 9], title: "Grand Child 3", label: "Grand Child 3", description: "Grand Child 3", image: "./photos/c.png" },
        { id: 13, parents: [3, 4, 5, 6, 7, 8, 9], title: "Grand Child 4", label: "Grand Child 4", description: "Grand Child 4", image: "./photos/c.png" }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
