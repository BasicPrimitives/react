import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor() {
    super();

    this.onCursorChanged = this.onCursorChanged.bind(this);

    this.state = {
      config: {
        pageFitMode: PageFitMode.FitToPage,
        cursorItem: 0,
        highlightItem: 0,
        hasSelectorCheckbox: Enabled.False,
        items: [
          {
            id: 0,
            parent: null,
            title: 'James Smith',
            description: 'VP, Public Sector',
            image: photos.a
          },
          {
            id: 1,
            parent: 0,
            title: 'Ted Lucas',
            description: 'VP, Human Resources',
            image: photos.b
          },
          {
            id: 2,
            parent: 0,
            title: 'Fritz Stuger',
            description: 'Business Solutions, US',
            image: photos.c
          }
        ]
      },
      title: null
    }
  }

  onCursorChanged(event, data) {
    const { context: item } = data;
    if (item != null) {
      this.setState({
        title: item.title
      })
    }
  };

  update(itemid) {
    const { config } = this.state;
    this.setState({
      title: null,
      config: {
        ...config,
        cursorItem: itemid
      }
    })
  }


  render() {
    const { config, title } = this.state;

    return <>
      <p>Set cursor to: &nbsp;
        <button onClick={() => this.update(0)}>James Smith</button>&nbsp;
        <button onClick={() => this.update(1)}>Ted Lucas</button>&nbsp;
        <button onClick={() => this.update(2)}>Fritz Stuger</button>&nbsp;
        <button onClick={() => this.update(null)}>Unselect</button>
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} onCursorChanged={this.onCursorChanged} config={config} />
      </div>
      {title != null ? <p>User set cursor to item: {title}</p> : null}
    </>;
  }
}

export default Sample;
