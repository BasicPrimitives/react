import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: primitives.common.PageFitMode.None,
      cursorItem: 2,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: primitives.common.Enabled.True,
      normalLevelShift: 20,
      dotLevelShift: 20,
      lineLevelShift: 20,
      normalItemsInterval: 10,
      dotItemsInterval: 10,
      lineItemsInterval: 10,
      arrowsDirection: primitives.common.GroupByType.Parents,
      showExtraArrows: false,
      items: [
        { id: 1, spouses: [2], title: "Thomas Williams", label: "Thomas Williams", description: "1, 1st husband", image: "photos/t.png" },
        { id: 2, spouses: [], title: "Mary Spencer", label: "Mary Spencer", description: "2, The Mary", image: "photos/m.png" },
        { id: 3, spouses: [2], title: "David Kirby", label: "David Kirby", description: "3, 2nd Husband", image: "photos/d.png" },
        { id: 4, parents: [1, 2], title: "Brad Williams", label: "Brad Williams", description: "4, 1st son", image: "photos/b.png" },
        { id: 5, parents: [2, 3], spouses: [6, 7], title: "Mike Kirby", label: "Mike Kirby", description: "5, 2nd son, having 2 spouses", image: "photos/m.png" },
        { id: 6, title: "Lynette Maloney", label: "Lynette Maloney", description: "5, Spouse I", image: "photos/m.png" },
        { id: 7, title: "Sara Kemp", label: "Sara Kemp", description: "5, Spouse II :-)", image: "photos/s.png" },
        { id: 8, parents: [7], title: "Leon Kemp", label: "Leon Kemp", description: "5, Orphant", image: "photos/l.png" }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
