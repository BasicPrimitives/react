import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectionPathMode: (primitives.common.SelectionPathMode.None)
    }
  }

  onSelectionPathModeChanged(selectionPathMode) {
    this.setState({ selectionPathMode });
  }

  render() {
    const { selectionPathMode } = this.state;
    const config = {
      selectionPathMode,
      pageFitMode: primitives.common.PageFitMode.Page,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      selectedItems: [3],
      items: [
        {
          id: 0,
          parents: null,
          title: "Scott Aasrud",
          description: "VP, Public Sector",
          image: "/react/photos/a.png"
        },
        {
          id: 1,
          parents: [0],
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "/react/photos/b.png"
        },
        {
          id: 2,
          parents: [1],
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: "/react/photos/c.png"
        },
        {
          id: 3,
          parents: [2],
          title: "Robert Canon",
          description: "Business Solutions, Canada",
          image: "/react/photos/z.png"
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
