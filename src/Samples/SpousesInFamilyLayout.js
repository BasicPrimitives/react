import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      lineItemsInterval: 20,
      cursorItem: 1,
      hasSelectorCheckbox: primitives.common.Enabled.False,
      arrowsDirection: primitives.common.GroupByType.Children,
      pageFitMode: primitives.common.PageFitMode.None,
      items: [
        { id: 1, parents: [], spouses: ["2", "3"], title: "Odelia Locker", label: "Odelia Locker", description: "Has 2 marriages", image: "photos/a.png" },
        { id: 2, parents: [], title: "John Smith", label: "John Smith", description: "1st marriage", image: "photos/b.png" },
        { id: 3, parents: [], title: "Brad Whitt", label: "Brad Whitt", description: "2nd marriage", image: "photos/c.png" }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
