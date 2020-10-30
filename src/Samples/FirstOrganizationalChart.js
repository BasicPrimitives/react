import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: primitives.common.PageFitMode.FitToPage,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      items: [
        {
          id: 0,
          parent: null,
          title: 'Scott Aasrud',
          description: 'VP, Public Sector',
          image: '/react/photos/a.png'
        },
        {
          id: 1,
          parent: 0,
          title: 'Ted Lucas',
          description: 'VP, Human Resources',
          image: '/react/photos/b.png'
        },
        {
          id: 2,
          parent: 0,
          title: 'Fritz Stuger',
          description: 'Business Solutions, US',
          image: '/react/photos/c.png'
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
