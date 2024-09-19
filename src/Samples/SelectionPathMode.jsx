import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { SelectionPathMode, PageFitMode, Enabled } from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionPathMode: (SelectionPathMode.None)
    }
  }

  onSelectionPathModeChanged(selectionPathMode) {
    this.setState({ selectionPathMode });
  }

  render() {
    const { selectionPathMode } = this.state;
    const config = {
      selectionPathMode,
      pageFitMode: PageFitMode.Page,
      hasSelectorCheckbox: Enabled.True,
      selectedItems: [3],
      items: [
        {
          id: 0,
          parent: null,
          title: "James Smith",
          description: "VP, Public Sector",
          image: "./photos/a.png"
        },
        {
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "./photos/b.png"
        },
        {
          id: 2,
          parent: 1,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: "./photos/c.png"
        },
        {
          id: 3,
          parent: 2,
          title: "Robert Canon",
          description: "Business Solutions, Canada",
          image: "./photos/z.png"
        }
      ]
    };

    return <>
      <p>Selection Path Mode:
        <br />
        <label>
          <input
            onChange={() => this.onSelectionPathModeChanged(0)}
            name="selectionPathMode"
            type="radio"
            value="0"
            checked={selectionPathMode === 0 ? 'checked' : ''}
          />
          None
        </label>
        <br />
        <label>
          <input
            onChange={() => this.onSelectionPathModeChanged(1)}
            name="selectionPathMode"
            type="radio"
            value="1"
            checked={selectionPathMode === 1 ? 'checked' : ''}
          />
          Full Stack
        </label>
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
