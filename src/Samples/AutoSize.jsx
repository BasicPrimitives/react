import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Size, PageFitMode } from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.setMinimumSize = this.setMinimumSize.bind(this);
    this.setMaximumSize = this.setMaximumSize.bind(this);

    this.sizes = {
      "640*480": new Size(640, 480),
      "800*600": new Size(800, 600),
      "1024*768": new Size(1024, 768),
      "1280*1024": new Size(1280, 1024)
    }

    this.state = {
      autoSizeMinimum: "640*480",
      autoSizeMaximum: "1280*1024"
    }
  }

  setMinimumSize(key) {
    this.setState({
      autoSizeMinimum: key
    })
  }

  setMaximumSize(key) {
    this.setState({
      autoSizeMaximum: key
    })
  }

  render() {
    const { autoSizeMinimum, autoSizeMaximum } = this.state;
    const config = {
      pageFitMode: PageFitMode.AutoSize,
      highlightItem: 0,
      cursorItem: 0,
      autoSizeMinimum: this.sizes[autoSizeMinimum],
      autoSizeMaximum: this.sizes[autoSizeMaximum],
      items: [
        { id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", groupTitleColor: "#4169e1", image: "./photos/q.png", itemTitleColor: "#4169e1", phone: "352-206-7599", title: "David Dalton" },
        { id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", groupTitleColor: "#4169e1", image: "./photos/w.png", itemTitleColor: "#4b0082", phone: "505-791-1689", title: "Jeanna White" },
        { id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", groupTitleColor: "#4169e1", image: "./photos/e.png", itemTitleColor: "#4b0082", phone: "262-215-7998", title: "James Holt" },
        { id: 3, parent: 0, isVisible: true, description: "VP, Server & Tools Marketing and Solutions", email: "thomwill@name.com", groupTitleColor: "#4169e1", image: "./photos/r.png", itemTitleColor: "#4b0082", phone: "904-547-5342", title: "Thomas Williams" },
        { id: 4, parent: 0, isVisible: true, description: "VP, Software & Enterprise Management Division", email: "sarakemp@name.com", groupTitleColor: "#4169e1", image: "./photos/g.png", itemTitleColor: "#4b0082", phone: "918-257-4218", title: "Sara Kemp" },
        { id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", email: "georduon@name.com", groupTitleColor: "#4169e1", image: "./photos/x.png", itemTitleColor: "#4b0082", phone: "434-406-2189", title: "George Duong" },
        { id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", email: "ashlrue@name.com", groupTitleColor: "#4169e1", image: "./photos/n.png", itemTitleColor: "#4b0082", phone: "515-324-4969", title: "Ashley Rue" },
        { id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", email: "bonnwede@name.com", groupTitleColor: "#4169e1", image: "./photos/i.png", itemTitleColor: "#4b0082", phone: "412-265-2782", title: "Bonnie Wedel" },
        { id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", email: "melihous@name.com", groupTitleColor: "#4169e1", image: "./photos/p.png", itemTitleColor: "#4b0082", phone: "630-887-1188", title: "Melissa Houser" },
        { id: 9, parent: 3, isVisible: true, description: "GM, Software Server Solutions Group", email: "abbilaws@name.com", groupTitleColor: "#4169e1", image: "./photos/a.png", itemTitleColor: "#4b0082", phone: "530-322-6413", title: "Abbie Lawson" },
        { id: 10, parent: 3, isVisible: true, description: "GM, Connected Systems Division", email: "erneputn@name.com", groupTitleColor: "#4169e1", image: "./photos/s.png", itemTitleColor: "#4b0082", phone: "626-831-0555", title: "Ernest Putnam" },
        { id: 11, parent: 4, isVisible: true, description: "CFO, Platforms Products & Services", email: "celecrum@name.com", groupTitleColor: "#4169e1", image: "./photos/h.png", itemTitleColor: "#4b0082", phone: "419-578-6479", title: "Celestina Crum" },
        { id: 12, parent: 4, isVisible: true, description: "GM, Pricing", email: "cindturn@name.com", groupTitleColor: "#4169e1", image: "./photos/j.png", itemTitleColor: "#4b0082", phone: "530-934-4295", title: "Cindy Turner" }
      ]
    };

    return <>
      <p>Minimum Auto Size:&nbsp;
        {Object.keys(this.sizes).map(key => <label key={key}><input onChange={() => this.setMinimumSize(key)} name="autoSizeMinimum" type="radio" checked={autoSizeMinimum === key ? 'checked' : ''} value="{key}" />{key}</label>)}
      </p>
      <p>Maximum Auto Size:&nbsp;
        {Object.keys(this.sizes).map(key => <label key={key}><input onChange={() => this.setMaximumSize(key)} name="autoSizeMaximum" type="radio" checked={autoSizeMaximum === key ? 'checked' : ''} value="{key}" />{key}</label>)}
      </p>
      <OrgDiagram centerOnCursor={true} config={config} />
    </>
  }
}

export default Sample;