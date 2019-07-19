import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: primitives.common.PageFitMode.None,
      cursorItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
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
          id: 4,
          parent: 1,
          title: "Ted Lucas 2",
          description: "VP, Human Resources",
          image: "/photos/b.png"
        },
        {
          id: 5,
          parent: 1,
          title: "Ted Lucas 3",
          description: "VP, Human Resources",
          image: "/photos/b.png"
        },
        { id: 2, parent: 0, isVisible: false },
        {
          id: 3,
          parent: 2,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: "/photos/c.png"
        },
        { id: 6, parent: null, isVisible: false },
        { id: 7, parent: 6, isVisible: false },
        {
          id: 8,
          parent: 7,
          title: "Fritz Stuger 2",
          description: "Business Solutions, US",
          image: "/photos/c.png"
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
