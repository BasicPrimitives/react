import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';
import './ButtonsPanel.css';

class Sample extends Component {
  render() {
    const config = {
      cursorItem: 0,
      highlightItem: 0,
      items: [
        {
          id: 0,
          parent: null,
          title: "Scott Aasrud",
          description: "VP, Public Sector",
          image: "photos/a.png"
        },
        {
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "photos/b.png"
        },
        {
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: "photos/c.png"
        }
      ],
      hasSelectorCheckbox: primitives.common.Enabled.True,
      hasButtons: primitives.common.Enabled.True,
      buttonsPanelSize: 40,
      onButtonsRender: (({ context: itemConfig }) => {
        return <>
          <button key="1" className="StyledButton"
            onClick={(event) => {
              event.stopPropagation();
              alert(`User clicked on Coffe button for node ${itemConfig.title}`)
            }}>
            <FontAwesomeIcon icon={faCoffee} />
          </button>
          <button key="2" className="StyledButton"
            onClick={(event) => {
              event.stopPropagation();
              alert(`User clicked on Sitemap button for node ${itemConfig.title}`)
            }}>
            <FontAwesomeIcon icon={faSitemap} />
          </button>
        </>
      })
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div >
  }
}

export default Sample;
