import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';
import './ItemTemplateLabel.css';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: primitives.common.PageFitMode.None,
      cursorItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      normalItemsInterval: 10,
      normalLevelShift: 44,
      items: [
        { id: 0, parent: null, label: "100%", isVisible: true, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", image: "photos/q.png", itemTitleColor: "#4169e1", phone: "(352) 206-7599", title: "David Dalton" },
        { id: 1, parent: 0, label: "50%", isVisible: true, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", image: "photos/w.png", itemTitleColor: "#4b0082", phone: "(505) 791-1689", title: "Jeanna White" },
        { id: 2, parent: 0, label: "50%", isVisible: true, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", image: "photos/e.png", itemTitleColor: "#4b0082", phone: "(262) 215-7998", title: "James Holt" },
        { id: 5, parent: 1, label: "25%", isVisible: true, description: "Sr. VP, Software Server System", email: "georduon@name.com", image: "photos/x.png", itemTitleColor: "#4b0082", phone: "(434) 406-2189", title: "George Duong" },
        { id: 6, parent: 1, label: "25%", isVisible: true, description: "VP, Developer Division", email: "ashlrue@name.com", image: "photos/n.png", itemTitleColor: "#4b0082", phone: "(515) 324-4969", title: "Ashley Rue" },
        { id: 7, parent: 2, label: "25%", isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", email: "bonnwede@name.com", image: "photos/i.png", itemTitleColor: "#4b0082", phone: "(412) 265-2782", title: "Bonnie Wedel" },
        { id: 8, parent: 2, label: "25%", isVisible: true, description: "GM, Core File Solutions", email: "melihous@name.com", image: "photos/p.png", itemTitleColor: "#4b0082", phone: "(630) 887-1188", title: "Melissa Houser" }
      ],
      defaultTemplateName: "LabelTemplate",
      templates: [{
        name: "LabelTemplate",
        itemSize: { width: 220, height: 120 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue;
          return <div className="LabelTemplate">
            <div className="LabelTitleBackground" style={{ backgroundColor: itemTitleColor }}>
              <div className="LabelTitle">{itemConfig.title}</div>
            </div>
            <div className="LabelPhotoFrame">
              <img className="LabelPhoto" src={itemConfig.image} alt={itemConfig.title} />
            </div>
            <div className="LabelPhone">{itemConfig.phone}</div>
            <div className="LabelEmail">{itemConfig.email}</div>
            <div className="LabelDescription">{itemConfig.description}</div>
            <div className="LabelLabel">{itemConfig.label}</div>
          </div>;
        }
      }
      ]
    };
    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>;
  }
}

export default Sample;
