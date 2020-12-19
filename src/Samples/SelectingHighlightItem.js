import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled } from 'basicprimitives';

class Sample extends Component {
  constructor() {
    super();

    this.onHighlightChanged = this.onHighlightChanged.bind(this);

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
      },
      title: null
    }
  }

  onHighlightChanged(event, data) {
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
        highlightItem: itemid
      }
    })
  }


  render() {
    const { config, title } = this.state;

    return <>
      <p>Set highlight for: &nbsp;
        <button onClick={() => this.update(0)}>James Smith</button>&nbsp;
        <button onClick={() => this.update(1)}>Ted Lucas</button>&nbsp;
        <button onClick={() => this.update(2)}>Fritz Stuger</button>&nbsp;
        <button onClick={() => this.update(null)}>Unselect</button>
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} onHighlightChanged={this.onHighlightChanged} config={config} />
      </div>
      {title != null ? <p>User hovers mouse over item {title}</p> : null}
    </>;
  }
}

export default Sample;
