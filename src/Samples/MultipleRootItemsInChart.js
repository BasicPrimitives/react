import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams'; 
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor() {
    super();

    this.state = {
      config: {
        pageFitMode: primitives.common.PageFitMode.None,
        cursorItem: 0,
        highlightItem: 0,
        hasSelectorCheckbox: primitives.common.Enabled.True,
        orientationType: primitives.common.OrientationType.Top,
        items: [
          {
            id: 0,
            parent: null,
            title: "Scott Aasrud",
            description: "VP, Public Sector",
            image: "/photos/a.png"
          },
          {
            id: 1,
            parent: 0,
            title: "Ted Lucas",
            description: "VP, Human Resources",
            image: "/photos/b.png"
          },
          {
            id: 2,
            parent: 0,
            title: "Fritz Stuger",
            description: "Business Solutions, US",
            image: "/photos/c.png"
          },
          {
            id: 3,
            parent: null,
            title: "Scott Aasrud 2",
            description: "VP, Public Sector",
            image: "/photos/a.png"
          },
          {
            id: 4,
            parent: 3,
            title: "Ted Lucas 2",
            description: "VP, Human Resources",
            image: "/photos/b.png"
          },
          {
            id: 5,
            parent: 3,
            title: "Fritz Stuger 2",
            description: "Business Solutions, US",
            image: "/photos/c.png"
          }
        ]
      }
    }
  }

  update(orientationType) {
    const { config } = this.state;
    this.setState({
      config: {
        ...config,
        orientationType
      }
    })
  }


  render() {
    const { config } = this.state;

    return <>
      <p>Set chart orientation to: &nbsp;
        <button onClick={() => this.update(primitives.common.OrientationType.Top)}>Top</button>&nbsp;
        <button onClick={() => this.update(primitives.common.OrientationType.Left)}>Left</button>&nbsp;
        <button onClick={() => this.update(primitives.common.OrientationType.Right)}>Right</button>&nbsp;
        <button onClick={() => this.update(primitives.common.OrientationType.Bottom)}>Bottom</button>
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>;
  }
}

export default Sample;
