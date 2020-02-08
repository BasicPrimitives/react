import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeAdvisersAboveChildren: true
    }
  }

  onplaceAdvisersAboveChildrenChanged(placeAdvisersAboveChildren) {
    this.setState({ placeAdvisersAboveChildren });
  }

  render() {
    const { placeAdvisersAboveChildren } = this.state;
    const config = {
      placeAdvisersAboveChildren,
      hasSelectorCheckbox: primitives.common.Enabled.False,
      pageFitMode: primitives.orgdiagram.PageFitMode.None,
      arrowsDirection: primitives.common.GroupByType.Children,
      items: [
        new primitives.orgdiagram.ItemConfig({
          id: 0,
          parent: null,
          title: "Scott Aasrud",
          description: "Parent Item",
          image: "photos/a.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 1,
          parent: 0,
          itemType: primitives.orgdiagram.ItemType.Adviser,
          adviserPlacementType: primitives.common.AdviserPlacementType.Right,
          title: "Robert Canon",
          description: "Adviser item",
          groupTitle: "Adviser",
          image: "photos/b.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 3,
          parent: 1,
          title: "Fritz Stuger",
          description: "Regular Item",
          image: "photos/d.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 4,
          parent: 1,
          title: "Ted Lucas",
          description: "Regular Item",
          image: "photos/d.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 5,
          parent: 0,
          title: "James Nunnally",
          description: "Regular Item",
          groupTitle: "Regular",
          image: "photos/d.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 6,
          parent: 0,
          title: "Harry Harter",
          description: "Regular Item",
          groupTitle: "Regular",
          image: "photos/d.png"
        })
      ]
    };

    return <>
      <p>Place Advisers Above Children:
      <br />
        <label>
          <input
            onChange={() => this.onplaceAdvisersAboveChildrenChanged(true)}
            name="placeAdvisersAboveChildren"
            type="radio"
            value="1"
            checked={placeAdvisersAboveChildren === true ? 'checked' : ''}
          />
          True
        </label>
        <br />
        <label>
          <input
            onChange={() => this.onplaceAdvisersAboveChildrenChanged(false)}
            name="placeAdvisersAboveChildren"
            type="radio"
            value="0"
            checked={placeAdvisersAboveChildren === false ? 'checked' : ''}
          />
          False
        </label>
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
