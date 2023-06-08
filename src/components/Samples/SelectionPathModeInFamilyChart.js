import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { SelectionPathMode, PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

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
          parents: null,
          title: "James Smith",
          description: "VP, Public Sector",
          image: photos.a
        },
        {
          id: 1,
          parents: [0],
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: photos.b
        },
        {
          id: 2,
          parents: [1],
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: photos.c
        },
        {
          id: 3,
          parents: [2],
          title: "Robert Canon",
          description: "Business Solutions, Canada",
          image: photos.z
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
        <FamDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
