import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faComment, faCog } from '@fortawesome/free-solid-svg-icons'
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled, Colors } from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(itemConfig, name) {
    alert(`User clicked button ${name} for node: ${itemConfig.title}. `);
  }

  render() {
    const config = {
      pageFitMode: PageFitMode.FitToPage,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: Enabled.True,
      hasButtons: Enabled.True,
      buttonsPanelSize: 40,
      templates: [{
        name: "contactTemplate",
        itemSize: { width: 220, height: 120 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
          return <div className="ContactTemplate">
            <div className="ContactTitleBackground" style={{ backgroundColor: itemTitleColor }}>
              <div className="ContactTitle">{itemConfig.title}</div>
            </div>
            <div className="ContactPhotoFrame">
              <img className="ContactPhoto" src={itemConfig.image} alt={itemConfig.title} />
            </div>
            <div className="ContactPhone">{itemConfig.phone}</div>
            <div className="ContactEmail">{itemConfig.email}</div>
            <div className="ContactDescription">{itemConfig.description}</div>
          </div>;
        },
        onButtonsRender: (({ context: itemConfig }) => {
          return <>
            <button key="1" className="StyledButton"
              onClick={() => { this.onButtonClick(itemConfig, 'User'); }}>
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button key="2" className="StyledButton"
              onClick={() => { this.onButtonClick(itemConfig, 'Comment'); }}>
              <FontAwesomeIcon icon={faComment} />
            </button>
            <button key="3" className="StyledButton"
              onClick={() => { this.onButtonClick(itemConfig, 'Cog'); }}>
              <FontAwesomeIcon icon={faCog} />
            </button>
          </>
        })
      }],
      items: [
        {
          id: 0,
          parent: null,
          title: "James Smith",
          description: "VP, Public Sector",
          image: "/react/photos/a.png",
          phone: "(123) 456-78-90",
          email: "itema@org.com",
          templateName: "contactTemplate",
          itemTitleColor: "red",
          groupTitle: "Group 2"
        },
        {
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "/react/photos/b.png",
          groupTitle: "Group 1"
        },
        {
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          phone: "(123) 654-78-90",
          email: "itemc@org.com",
          description: "Business Solutions, US",
          image: "/react/photos/c.png",
          templateName: "contactTemplate",
          groupTitle: "Group 3"
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config}
      />
    </div >
  }
}

export default Sample;
