import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { AdviserPlacementType, PageFitMode, Enabled, GroupByType } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      items: [
        { id: 10, relativeItem: 2, placementType: AdviserPlacementType.Left, position: 1, title: "Roger Dalton", label: "Roger Dalton", description: "Id: 10", image: photos.a, itemTitleColor: "#4169e1" },
        { id: 2, title: "Steven Lacombe", label: "Steven Lacombe", description: "Id: 2", image: photos.b, itemTitleColor: "#4b0082" },
        { id: 11, relativeItem: 2, placementType: AdviserPlacementType.Right, position: 1, title: "Bill Dalton", label: "Bill Dalton", description: "Id: 11", image: photos.c, itemTitleColor: "#4b0082" },
        { id: 1, parents: [11], title: "David Dalton", label: "David Dalton", description: "Id: 1", image: photos.c, itemTitleColor: "#4b0082" },
        { id: 3, parents: [10], title: "Ann Smith", label: "Ann Smith", description: "Id: 3", image: photos.a, itemTitleColor: "#4169e1" },
        { id: 4, parents: [2], title: "Nancy Smith", label: "Nancy Smith", description: "Id: 4", image: photos.c, itemTitleColor: "#4b0082" },
        { id: 5, parents: [2], title: "Helly Smith", label: "Helly Smith", description: "Id: 5", image: photos.a, itemTitleColor: "#4169e1" },
        { id: 6, parents: [1, 4], title: "Kelly Smith", label: "Kelly Smith", description: "Id: 6", image: photos.c, itemTitleColor: "#4b0082" },
        { id: 7, parents: [5, 3], title: "Sally Smith", label: "Sally Smith", description: "Id: 7", image: photos.a, itemTitleColor: "#4169e1" }
      ]
    }
  }

  onClick() {
    const { items } = this.state;

    const newItems = items.map(item => {
      if (item.id === 10 || item.id === 11) {
        let { placementType } = item;
        if (placementType === AdviserPlacementType.Right) {
          placementType = AdviserPlacementType.Left;
        } else {
          placementType = AdviserPlacementType.Right;
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
      pageFitMode: PageFitMode.None,
      cursorItem: 2,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: Enabled.False,
      arrowsDirection: GroupByType.Parents,
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
