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
        { id: 1, parents: [], title: "1", label: "1", description: "", image: "/react/photos/z.png", itemTitleColor: "#ff0000" },
        { id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", description: "", image: "/react/photos/a.png", itemTitleColor: "#ff0000" },
        { id: 3, parents: [1, 101, 102, 103], title: "3", label: "3", description: "", image: "/react/photos/b.png", itemTitleColor: "#ff0000" },
        { id: 4, parents: [1, 101, 102, 103], title: "4", label: "4", description: "", image: "/react/photos/c.png", itemTitleColor: "#ff0000" },
        { id: 5, parents: [1, 101, 102, 103], title: "5", label: "5", description: "", image: "/react/photos/c.png", itemTitleColor: "#ff0000" },
        { id: 6, parents: [1, 101, 102, 103], matrixId: "2", title: "6", label: "6", description: "", image: "/react/photos/e.png", itemTitleColor: "#ff0000" },
        { id: 7, parents: [1, 101, 102, 103], matrixId: "2", title: "7", label: "7", description: "", image: "/react/photos/f.png", itemTitleColor: "#ff0000" },
        { id: 8, parents: [1, 101, 102, 103], matrixId: "2", title: "8", label: "8", description: "", image: "/react/photos/g.png", itemTitleColor: "#ff0000" },
        { id: 9, parents: [1, 101, 102, 103], matrixId: "2", title: "10", label: "10", description: "", image: "/react/photos/i.png", itemTitleColor: "#ff0000" },
        { id: 10, parents: [1, 101, 102, 103], addToMatrix: false,  title: "10", label: "10", description: "", image: "/react/photos/i.png", itemTitleColor: "#ff0000" },
        { id: 33, parents: [2, 3, 4, 5, 6, 7, 8, 9, 10], title: "33", label: "33", description: "", image: "/react/photos/m.png", itemTitleColor: "#4b0082" }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
