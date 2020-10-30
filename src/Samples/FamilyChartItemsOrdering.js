import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      items: [
        { id: 10, relativeItem: 2, placementType: primitives.common.AdviserPlacementType.Left, position: 1, title: "Roger Dalton", label: "Roger Dalton", description: "Id: 10", image: "/react/photos/a.png", itemTitleColor: "#4169e1" },
        { id: 2, title: "Steven Lacombe", label: "Steven Lacombe", description: "Id: 2", image: "/react/photos/b.png", itemTitleColor: "#4b0082" },
        { id: 11, relativeItem: 2, placementType: primitives.common.AdviserPlacementType.Right, position: 1, title: "Bill Dalton", label: "Bill Dalton", description: "Id: 11", image: "/react/photos/c.png", itemTitleColor: "#4b0082" },
        { id: 1, parents: [11], title: "David Dalton", label: "David Dalton", description: "Id: 1", image: "/react/photos/c.png", itemTitleColor: "#4b0082" },
        { id: 3, parents: [10], title: "Ann Smith", label: "Ann Smith", description: "Id: 3", image: "/react/photos/a.png", itemTitleColor: "#4169e1" },
        { id: 4, parents: [2], title: "Nancy Smith", label: "Nancy Smith", description: "Id: 4", image: "/react/photos/c.png", itemTitleColor: "#4b0082" },
        { id: 5, parents: [2], title: "Helly Smith", label: "Helly Smith", description: "Id: 5", image: "/react/photos/a.png", itemTitleColor: "#4169e1" },
        { id: 6, parents: [1, 4], title: "Kelly Smith", label: "Kelly Smith", description: "Id: 6", image: "/react/photos/c.png", itemTitleColor: "#4b0082" },
        { id: 7, parents: [5, 3], title: "Sally Smith", label: "Sally Smith", description: "Id: 7", image: "/react/photos/a.png", itemTitleColor: "#4169e1" }
      ]
    }
  }

  onClick() {
    const { items } = this.state;

    const newItems = items.map(item => {
      if (item.id === 10 || item.id === 11) {
        let { placementType } = item;
        if (placementType === primitives.common.AdviserPlacementType.Right) {
          placementType = primitives.common.AdviserPlacementType.Left;
        } else {
          placementType = primitives.common.AdviserPlacementType.Right;
        }
        return {
          ...item,
          placementType
        }
      }
      return item;
    })
    this.setState({
      items: newItems
    })
  }

  render() {
    const { items } = this.state;
    const config = {
      items,
      pageFitMode: primitives.common.PageFitMode.None,
      cursorItem: 2,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: primitives.common.Enabled.False,
      arrowsDirection: primitives.common.GroupByType.Parents,
      showExtraArrows: false
    };

    return <>
      <button onClick={this.onClick}>Swap Roger &amp; Bill</button>
      <div className="placeholder">
        <FamDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
