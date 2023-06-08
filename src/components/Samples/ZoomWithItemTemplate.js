import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Colors } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.setTemplate = this.setTemplate.bind(this);

    this.scales = {
      "xs": {
        caption: "Extra Small",
        defaultTemplateName: "xs",
        normalLevelShift: 10,
        normalItemsInterval: 12
      },
      "sm": {
        caption: "Small",
        defaultTemplateName: "sm",
        normalLevelShift: 10,
        normalItemsInterval: 12,
      },
      "md": {
        caption: "Medium",
        defaultTemplateName: "md",
        normalLevelShift: 12,
        normalItemsInterval: 12
      },
      "lg": {
        caption: "Large",
        defaultTemplateName: "lg",
        normalLevelShift: 14,
        normalItemsInterval: 16,
      },
      "xl": {
        caption: "Extra Large",
        defaultTemplateName: "xl",
        normalLevelShift: 16,
        normalItemsInterval: 20
      }
    }

    this.state = {
      scale: "md"
    }
  }

  setTemplate(key) {
    this.setState({
      scale: key
    })
  }

  render() {
    const { scale } = this.state;
    const {
      defaultTemplateName,
      normalLevelShift,
      normalItemsInterval
    } = this.scales[scale];

    const config = {
      pageFitMode: PageFitMode.None,
      cousinsIntervalMultiplier: 1,
      highlightItem: 0,
      cursorItem: 0,
      defaultTemplateName,
      normalLevelShift,
      normalItemsInterval,
      templates: [{
        name: "xl",
        itemSize: { width: 220, height: 120 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
          return <div className="xlTemplate">
            <div className="xlTitleBackground" style={{ backgroundColor: itemTitleColor }}>
              <div className="xlTitle">{itemConfig.title}</div>
            </div>
            <div className="xlPhotoFrame">
              <img className="xlPhoto" src={itemConfig.image} alt={itemConfig.title} />
            </div>
            <div className="xlPhone">{itemConfig.phone}</div>
            <div className="xlEmail">{itemConfig.email}</div>
            <div className="xlDescription">{itemConfig.description}</div>
          </div>;
        }
      },
      {
        name: "lg",
        itemSize: { width: 160, height: 86 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
          return <div className="lgTemplate">
            <div className="lgTitleBackground" style={{ backgroundColor: itemTitleColor }}>
              <div className="lgTitle">{itemConfig.title}</div>
            </div>
            <div className="lgPhotoFrame">
              <img className="lgPhoto" src={itemConfig.image} alt={itemConfig.title} />
            </div>
            <div className="lgEmail">{itemConfig.email}</div>
            <div className="lgDescription">{itemConfig.description}</div>
          </div>;
        }
      },
      {
        name: "md",
        itemSize: { width: 130, height: 45 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          return <div className="mdTemplate">
            <div className="mdTitle">{itemConfig.title}</div>
            <div className="mdPhotoFrame">
              <img className="mdPhoto" src={itemConfig.image} alt={itemConfig.title} />
            </div>
            <div className="mdDescription">{itemConfig.description}</div>
          </div>;
        }
      },
      {
        name: "sm",
        itemSize: { width: 100, height: 34 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          return <div className="smTemplate">
            <div className="smTitle">{itemConfig.title}</div>
            <div className="smDescription">{itemConfig.description}</div>
          </div>;
        }
      },
      {
        name: "xs",
        itemSize: { width: 80, height: 16 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          return <div className="xsTemplate">
            <div className="xsTitle">{itemConfig.title}</div>
          </div>;
        }
      }
      ],
      items: [
        { id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", image: photos.q, itemTitleColor: "#4169e1", phone: "(352) 206-7599", title: "David Dalton" },
        { id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", image: photos.w, itemTitleColor: "#4b0082", phone: "(505) 791-1689", title: "Jeanna White" },
        { id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", image: photos.e, itemTitleColor: "#4b0082", phone: "(262) 215-7998", title: "James Holt" },
        { id: 3, parent: 0, isVisible: true, description: "VP, Server & Tools Marketing and Solutions", email: "thomwill@name.com", image: photos.r, itemTitleColor: "#4b0082", phone: "(904) 547-5342", title: "Thomas Williams" },
        { id: 4, parent: 0, isVisible: true, description: "VP, Software & Enterprise Management Division", email: "sarakemp@name.com", image: photos.g, itemTitleColor: "#4b0082", phone: "(918) 257-4218", title: "Sara Kemp" },
        { id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", email: "georduon@name.com", image: photos.x, itemTitleColor: "#4b0082", phone: "(434) 406-2189", title: "George Duong" },
        { id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", email: "ashlrue@name.com", image: photos.n, itemTitleColor: "#4b0082", phone: "(515) 324-4969", title: "Ashley Rue" },
        { id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", email: "bonnwede@name.com", image: photos.i, itemTitleColor: "#4b0082", phone: "(412) 265-2782", title: "Bonnie Wedel" },
        { id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", email: "melihous@name.com", image: photos.p, itemTitleColor: "#4b0082", phone: "(630) 887-1188", title: "Melissa Houser" },
        { id: 9, parent: 3, isVisible: true, description: "GM, Software Server Solutions Group", email: "abbilaws@name.com", image: photos.a, itemTitleColor: "#4b0082", phone: "530-322-6413", title: "Abbie Lawson" },
        { id: 10, parent: 3, isVisible: true, description: "GM, Connected Systems Division", email: "erneputn@name.com", image: photos.s, itemTitleColor: "#4b0082", phone: "(626) 831-0555", title: "Ernest Putnam" },
        { id: 11, parent: 4, isVisible: true, description: "CFO, Platforms Products & Services", email: "celecrum@name.com", image: photos.h, itemTitleColor: "#4b0082", phone: "(419) 578-6479", title: "Celestina Crum" },
        { id: 12, parent: 4, isVisible: true, description: "GM, Pricing", email: "cindturn@name.com", image: photos.j, itemTitleColor: "#4b0082", phone: "(530) 934-4295", title: "Cindy Turner" }
      ]
    };

    return <>
      <p>Select template size:&nbsp;
        {Object.keys(this.scales).map(key => {
        const { caption } = this.scales[key];
        return <label key={key}><input
          onChange={() => this.setTemplate(key)}
          name="scale"
          type="radio"
          checked={scale === key ? 'checked' : ''}
          value="{key}"
        />{caption}</label>
      }
      )}
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}


export default Sample;