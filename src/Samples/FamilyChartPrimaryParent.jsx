import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { AdviserPlacementType, PageFitMode, Enabled, GroupByType } from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      items: [
        { id: 1, title: "Roger Dalton", label: "Roger Dalton", description: "Id: 1", image: "./photos/a.png", itemTitleColor: "navy" },
        { id: 2, parents: [1], title: "Steven Lacombe", label: "Steven Lacombe", description: "Id: 2", image: "./photos/b.png", itemTitleColor: "navy" },
        { id: 3, parents: [1], title: "Bill Dalton", label: "Bill Dalton", description: "Id: 3", image: "./photos/c.png", itemTitleColor: "navy", relativeItem: 2, placementType: AdviserPlacementType.Right, position: 1 },
        { id: 4, title: "Ann Smith", label: "Ann Smith", description: "Id: 4", image: "./photos/a.png", itemTitleColor: "navy" },
        { id: 5, parents: [4], title: "Nancy Smith", label: "Nancy Smith", description: "Id: 5", image: "./photos/c.png", itemTitleColor: "navy" },
        { id: 6, parents: [4], title: "Helly Smith", label: "Helly Smith", description: "Id: 6", image: "./photos/a.png", itemTitleColor: "navy", relativeItem: 5, placementType: AdviserPlacementType.Right, position: 1 },
        { id: 7, parents: [2, 6], title: "Kelly Smith", label: "Kelly Smith", description: "Id: 7", image: "./photos/c.png", itemTitleColor: "navy" },
        { id: 8, parents: [3, 5], primaryParent: 5, title: "Sally Smith", label: "Sally Smith", description: "Id: 8", image: "./photos/a.png" }
      ]
    }
  }

  onClick() {
    const { items } = this.state;

    const newItems = items.map(item => {
      if (item.id === 8) {
        var { primaryParent } = item;
        primaryParent = (primaryParent === 3) ? 5 : 3;
        return {
          ...item,
          primaryParent
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
      <button onClick={this.onClick}>Change primary parent for Sally Smith</button>
      <div className="placeholder">
        <FamDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
