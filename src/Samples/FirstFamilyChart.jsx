import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { PageFitMode, Enabled, GroupByType } from 'basicprimitives';

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
				{ id: 1, title: "Thomas Williams", label: "Thomas Williams", description: "1st husband", image: "./photos/t.png" },
				{ id: 2, title: "Mary Spencer", label: "Mary Spencer", description: "The Mary",image: "./photos/m.png" },
				{ id: 3, title: "David Kirby", label: "David Kirby", description: "2nd Husband", image: "./photos/d.png" },
				{ id: 4, parents: [1, 2], title: "Brad Williams", label: "Brad Williams", description: "1st son", image: "./photos/b.png" },
				{ id: 5, parents: [2, 3], title: "Mike Kirby", label: "Mike Kirby", description: "2nd son, having 2 spouses", image: "./photos/m.png"},
				{ id: 6, title: "Lynette Maloney", label: "Lynette Maloney", description: "Spouse I", image: "./photos/m.png" },
				{ id: 11, parents: [5, 6], title: "Steven Powell", label: "Steven Powell", description: "1st son", image: "./photos/s.png" },
				{ id: 7, title: "Sara Kemp", label: "Sara Kemp", description: "Spouse II", image: "./photos/s.png" },
				{ id: 12, parents: [5, 7], title: "John Smith", label: "John Smith", description: "2ns son", image: "./photos/j.png" },
				{ id: 8, parents: [7], title: "Leon Kemp", label: "Leon Kemp", description: "", image: "./photos/l.png" }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
