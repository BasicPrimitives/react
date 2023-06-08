import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.None,
      cursorItem: 0,
      hasSelectorCheckbox: Enabled.True,
      items: [
        {
          id: 0,
          parent: null,
          title: "James Smith",
          description: "VP, Public Sector",
          image: photos.a
        },
        {
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: photos.b
        },
        {
          id: 4,
          parent: 1,
          title: "Ted Lucas 2",
          description: "VP, Human Resources",
          image: photos.b
        },
        {
          id: 5,
          parent: 1,
          title: "Ted Lucas 3",
          description: "VP, Human Resources",
          image: photos.b
        },
        { id: 2, parent: 0, isVisible: false },
        {
          id: 3,
          parent: 2,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: photos.c
        },
        { id: 6, parent: null, isVisible: false },
        { id: 7, parent: 6, isVisible: false },
        {
          id: 8,
          parent: 7,
          title: "Fritz Stuger 2",
          description: "Business Solutions, US",
          image: photos.c
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
