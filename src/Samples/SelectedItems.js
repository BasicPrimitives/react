import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor() {
    super();

    this.onSelectionChanged = this.onSelectionChanged.bind(this);

    this.state = {
      config: {
        pageFitMode: primitives.common.PageFitMode.FitToPage,
        cursorItem: 0,
        hasSelectorCheckbox: primitives.common.Enabled.True,
        selectedItems: [0, 2],
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
      }
    }
  }

  onSelectionChanged(event, currentSelectedItems, newSelectedItems) {
    const { config } = this.state;
    this.setState({
      config: {
        ...config,
        selectedItems: newSelectedItems
      }
    })

    return true; // Cancel state change in Component and rendering cycle
  };

  update(event, itemid) {
    const { config } = this.state;
    const { selectedItems } = config;
    const isChecked = event.target.checked;
    if (isChecked) {
      this.setState({
        config: {
          ...config,
          selectedItems: [...selectedItems, itemid]
        }
      })
    } else {
      this.setState({
        config: {
          ...config,
          selectedItems: (selectedItems.filter(id => id !== itemid))
        }
      })
    }
  }


  render() {
    const { config } = this.state;
    const { items, selectedItems } = config;
    const itemsHash = items.reduce((agg, item) => { agg[item.id] = item; return agg; }, {});
    const message = selectedItems.map(id => itemsHash[id].title).join(", ");
    const selectedItemsHash = selectedItems.reduce((agg, id) => { agg[id] = true; return agg; }, {});

    return <>
      <p>Select following items: &nbsp;
        {
          items.map(item => <>
            <input key={item.id} onChange={(event) => this.update(event, item.id)} type="checkbox" checked={selectedItemsHash[item.id] ? 'checked' : ''} />
            {item.title}
            &nbsp;
          </>
          )
        }
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} onSelectionChanged={this.onSelectionChanged} config={config} />
      </div>
      {message.length > 0 ? <p>User selected following items: {message}</p> : null}
    </>;
  }
}

export default Sample;
