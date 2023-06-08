import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { OrgDiagram } from '../Diagrams';
import { Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      cursorItem: 0,
      highlightItem: 0,
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
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: photos.c
        }
      ],
      hasSelectorCheckbox: Enabled.True,
      hasButtons: Enabled.True,
      buttonsPanelSize: 40,
      onButtonsRender: (({ context: itemConfig }) => {
        return <>
          <button key="1" className="StyledButton"
            onClick={(event) => {
              event.stopPropagation();
              alert(`User clicked on Coffee button for node ${itemConfig.title}`)
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
