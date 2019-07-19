import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor() {
    super();

    this.onHighlightChanged = this.onHighlightChanged.bind(this);

    this.state = {
      config: {
        pageFitMode: primitives.common.PageFitMode.FitToPage,
        cursorItem: 0,
        highlightItem: 0,
        hasSelectorCheckbox: primitives.common.Enabled.False,
        items: [
          {
            id: 0,
            parent: null,
            title: 'Scott Aasrud',
            description: 'VP, Public Sector',
            image: '/photos/a.png'
          },
          {
            id: 1,
            parent: 0,
            title: 'Ted Lucas',
            description: 'VP, Human Resources',
            image: '/photos/b.png'
          },
          {
            id: 2,
            parent: 0,
            title: 'Fritz Stuger',
            description: 'Business Solutions, US',
            image: '/photos/c.png'
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
        <button onClick={() => this.update(0)}>Scott Aasrud</button>&nbsp;
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
