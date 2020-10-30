import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeAssistantsAboveChildren: true
    }
  }

  onPlaceAssistantsAboveChildrenChanged(placeAssistantsAboveChildren) {
    this.setState({ placeAssistantsAboveChildren });
  }

  render() {
    const { placeAssistantsAboveChildren } = this.state;
    const config = {
      placeAssistantsAboveChildren,
      hasSelectorCheckbox: primitives.common.Enabled.False,
      pageFitMode: primitives.orgdiagram.PageFitMode.None,
      arrowsDirection: primitives.common.GroupByType.Children,
      items: [
        new primitives.orgdiagram.ItemConfig({
          id: 0,
          parent: null,
          title: "Scott Aasrud",
          description: "Parent Item",
          image: "/react/photos/a.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 5,
          parent: 0,
          title: "Harry Harter",
          description: "Regular Item",
          groupTitle: "Regular",
          image: "/react/photos/d.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 6,
          parent: 0,
          title: "Fritz Stuger",
          description: "Regular Item",
          groupTitle: "Regular",
          image: "/react/photos/d.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 8,
          parent: 0,
          itemType: primitives.orgdiagram.ItemType.Assistant,
          adviserPlacementType: primitives.common.AdviserPlacementType.Right,
          title: "Ted Lucas",
          description: "Assitant Item",
          groupTitle: "Assistant",
          image: "/react/photos/c.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 10,
          parent: 8,
          title: "James Nunnally",
          description: "Regular Item",
          image: "/react/photos/d.png"
        }),
        new primitives.orgdiagram.ItemConfig({
          id: 11,
          parent: 8,
          title: "Robert Canon",
          description: "Regular Item",
          image: "/react/photos/d.png"
        })
      ]
    };

    return <>
      <p>Place Assistants Above Children:
      <br />
        <label>
          <input
            onChange={() => this.onPlaceAssistantsAboveChildrenChanged(true)}
            name="placeAssistantsAboveChildren"
            type="radio"
            value="1"
            checked={placeAssistantsAboveChildren === true ? 'checked' : ''}
          />
          True
        </label>
        <br />
        <label>
          <input
            onChange={() => this.onPlaceAssistantsAboveChildrenChanged(false)}
            name="placeAssistantsAboveChildren"
            type="radio"
            value="0"
            checked={placeAssistantsAboveChildren === false ? 'checked' : ''}
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
