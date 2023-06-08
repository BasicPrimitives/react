import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Enabled, PageFitMode, GroupByType, OrgItemConfig, ItemType, AdviserPlacementType } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeAssistantsAboveChildren: false
    }
  }

  onPlaceAssistantsAboveChildrenChanged(placeAssistantsAboveChildren) {
    this.setState({ placeAssistantsAboveChildren });
  }

  render() {
    const { placeAssistantsAboveChildren } = this.state;
    const config = {
      placeAssistantsAboveChildren,
      hasSelectorCheckbox: Enabled.False,
      pageFitMode: PageFitMode.None,
      arrowsDirection: GroupByType.Children,
      items: [
        new OrgItemConfig({
          id: 0,
          parent: null,
          title: "James Smith",
          description: "Parent Item",
          image: photos.a
        }),
        new OrgItemConfig({
          id: 5,
          parent: 0,
          title: "Harry Harter",
          description: "Regular Item",
          groupTitle: "Regular",
          image: photos.d
        }),
        new OrgItemConfig({
          id: 6,
          parent: 0,
          title: "Fritz Stuger",
          description: "Regular Item",
          groupTitle: "Regular",
          image: photos.d
        }),
        new OrgItemConfig({
          id: 8,
          parent: 0,
          itemType: ItemType.Assistant,
          adviserPlacementType: AdviserPlacementType.Right,
          title: "Ted Lucas",
          description: "Assitant Item",
          groupTitle: "Assistant",
          image: photos.c
        }),
        new OrgItemConfig({
          id: 10,
          parent: 8,
          title: "James Nunnally",
          description: "Regular Item",
          image: photos.d
        }),
        new OrgItemConfig({
          id: 11,
          parent: 8,
          title: "Robert Canon",
          description: "Regular Item",
          image: photos.d
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
