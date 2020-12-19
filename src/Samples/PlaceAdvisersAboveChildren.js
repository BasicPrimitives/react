import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Enabled, PageFitMode, GroupByType, OrgItemConfig, ItemType, AdviserPlacementType } from 'basicprimitives';

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
      hasSelectorCheckbox: Enabled.False,
      pageFitMode: PageFitMode.None,
      arrowsDirection: GroupByType.Children,
      items: [
        new OrgItemConfig({
          id: 0,
          parent: null,
          title: "James Smith",
          description: "Parent Item",
          image: "/react/photos/a.png"
        }),
        new OrgItemConfig({
          id: 1,
          parent: 0,
          itemType: ItemType.Adviser,
          adviserPlacementType: AdviserPlacementType.Right,
          title: "Robert Canon",
          description: "Adviser item",
          groupTitle: "Adviser",
          image: "/react/photos/b.png"
        }),
        new OrgItemConfig({
          id: 3,
          parent: 1,
          title: "Fritz Stuger",
          description: "Regular Item",
          image: "/react/photos/d.png"
        }),
        new OrgItemConfig({
          id: 4,
          parent: 1,
          title: "Ted Lucas",
          description: "Regular Item",
          image: "/react/photos/d.png"
        }),
        new OrgItemConfig({
          id: 5,
          parent: 0,
          title: "James Nunnally",
          description: "Regular Item",
          groupTitle: "Regular",
          image: "/react/photos/d.png"
        }),
        new OrgItemConfig({
          id: 6,
          parent: 0,
          title: "Harry Harter",
          description: "Regular Item",
          groupTitle: "Regular",
          image: "/react/photos/d.png"
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
