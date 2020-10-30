import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.setScale = this.setScale.bind(this);

    this.scales = {
      "Extra Small": 0.25,
      "Small": 0.5,
      "Medium": 1.0,
      "Large": 1.5,
      "Extra Large": 2
    }
    this.state = {
      scale: "Medium"
    }
  }

  setScale(key) {
    this.setState({
      scale: key
    })
  }

  render() {
    const { scale } = this.state;
    const config = {
      pageFitMode: primitives.common.PageFitMode.None,
      highlightItem: 0,
      cursorItem: 0,
      scale: this.scales[scale],
      items: [
        { id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", image: "/react/photos/q.png", itemTitleColor: "#4169e1", phone: "352-206-7599", title: "David Dalton" },
        { id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", image: "/react/photos/w.png", itemTitleColor: "#4b0082", phone: "505-791-1689", title: "Jeanna White" },
        { id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", image: "/react/photos/e.png", itemTitleColor: "#4b0082", phone: "262-215-7998", title: "James Holt" },
        { id: 3, parent: 0, isVisible: true, description: "VP, Server & Tools Marketing and Solutions", email: "thomwill@name.com", image: "/react/photos/r.png", itemTitleColor: "#4b0082", phone: "904-547-5342", title: "Thomas Williams" },
        { id: 4, parent: 0, isVisible: true, description: "VP, Software & Enterprise Management Division", email: "sarakemp@name.com", image: "/react/photos/g.png", itemTitleColor: "#4b0082", phone: "918-257-4218", title: "Sara Kemp" },
        { id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", email: "georduon@name.com", image: "/react/photos/x.png", itemTitleColor: "#4b0082", phone: "434-406-2189", title: "George Duong" },
        { id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", email: "ashlrue@name.com", image: "/react/photos/n.png", itemTitleColor: "#4b0082", phone: "515-324-4969", title: "Ashley Rue" },
        { id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", email: "bonnwede@name.com", image: "/react/photos/i.png", itemTitleColor: "#4b0082", phone: "412-265-2782", title: "Bonnie Wedel" },
        { id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", email: "melihous@name.com", image: "/react/photos/p.png", itemTitleColor: "#4b0082", phone: "630-887-1188", title: "Melissa Houser" },
        { id: 9, parent: 3, isVisible: true, description: "GM, Software Server Solutions Group", email: "abbilaws@name.com", image: "/react/photos/a.png", itemTitleColor: "#4b0082", phone: "530-322-6413", title: "Abbie Lawson" },
        { id: 10, parent: 3, isVisible: true, description: "GM, Connected Systems Division", email: "erneputn@name.com", image: "/react/photos/s.png", itemTitleColor: "#4b0082", phone: "626-831-0555", title: "Ernest Putnam" },
        { id: 11, parent: 4, isVisible: true, description: "CFO, Platforms Products & Services", email: "celecrum@name.com", image: "/react/photos/h.png", itemTitleColor: "#4b0082", phone: "419-578-6479", title: "Celestina Crum" },
        { id: 12, parent: 4, isVisible: true, description: "GM, Pricing", email: "cindturn@name.com", image: "/react/photos/j.png", itemTitleColor: "#4b0082", phone: "530-934-4295", title: "Cindy Turner" }
      ]
    };

    return <>
      <p>Select CSS scale transform:&nbsp;
        {Object.keys(this.scales).map(key => <label key={key}><input onChange={() => this.setScale(key)} name="scale" type="radio" checked={scale === key ? 'checked' : ''} value="{key}" />{key}</label>)}
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}


export default Sample;