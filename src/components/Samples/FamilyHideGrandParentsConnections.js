import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { AnnotationType, Colors, PageFitMode, Enabled, GroupByType } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideGrandParentsConnectors: false
    }
  }

  onChanged(hideGrandParentsConnectors) {
    this.setState({ hideGrandParentsConnectors });
  }

  render() {
    const { hideGrandParentsConnectors } = this.state;
    const config = {
      hideGrandParentsConnectors,
      groupTitlePanelSize: 40,
      groupTitleFontSize: "14px",
      groupTitleColor: "green",
      fontFamily: "Areal",
      items: [
        { id: 1, title: "Thomas Williams", label: "Thomas Williams", groupTitle: "Great Grand Parent", description: "Great Grand Parent", image: photos.g },
        { id: 2, parents: [1], title: "Mary Spencer", label: "Mary Spencer", description: "Spouse", image: photos.s },
        { id: 3, parents: [1], title: "David Kirby", label: "David Kirby", groupTitle: "Grand Parent", description: "Grand Parent", image: photos.g },
        { id: 4, parents: [1, 3], title: "Brad Williams", label: "Brad Williams", groupTitle: "Parent", description: "Parent", image: photos.p },
        { id: 5, parents: [1, 4], title: "Mike Kirby", groupTitle: "The node", label: "Mike Kirby", description: "Item connected to grand parents", image: photos.c },
        { id: 6, parents: [2, 5], title: "Lynette Maloney", label: "Lynette Maloney", description: "Grand Child", image: photos.c }

      ],
      annotations: [
        {
          annotationType: AnnotationType.HighlightPath,
          items: [5, 1],
          color: Colors.Red,
          lineWidth: 2,
          opacity: 1,
          showArrows: true
        }
      ],
      pageFitMode: PageFitMode.None,
      cursorItem: 5,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: Enabled.False,
      normalLevelShift: 20,
      dotLevelShift: 20,
      lineLevelShift: 20,
      normalItemsInterval: 10,
      dotItemsInterval: 20,
      lineItemsInterval: 20,
      arrowsDirection: GroupByType.Parents,
      showExtraArrows: false
    };

    return <>
      <p>Hide direct connections to grand parents:
        <br />
        <label>
          <input
            onChange={() => this.onChanged(false)}
            name="hideGrandParentsConnectors"
            type="radio"
            value="0"
            checked={!hideGrandParentsConnectors ? 'checked' : ''}
          />
          Show
        </label>
        <br />
        <label>
          <input
            onChange={() => this.onChanged(true)}
            name="connectorPlacementType"
            type="radio"
            value="1"
            checked={hideGrandParentsConnectors ? 'checked' : ''}
          />
          Hide
        </label>
      </p>
      <div className="placeholder">
        <FamDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
