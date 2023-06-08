import React, { Component, Fragment } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor() {
    super();

    this.onSelectionChanged = this.onSelectionChanged.bind(this);

    this.state = {
      config: {
        pageFitMode: PageFitMode.FitToPage,
        cursorItem: 1,
        hasSelectorCheckbox: Enabled.True,
        selectedItems: [1, 3],
        items: [
          {
            id: 1,
            parent: null,
            title: 'James Smith',
            description: 'VP, Public Sector',
            image: photos.a
          },
          {
            id: 2,
            parent: 1,
            title: 'Ted Lucas',
            description: 'VP, Human Resources',
            image: photos.b
          },
          {
            id: 3,
            parent: 1,
            title: 'Fritz Stuger',
            description: 'Business Solutions, US',
            image: photos.c
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
          // eslint-disable-next-line
          selectedItems: (selectedItems.filter(id => id != itemid))
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
          items.map(item => <Fragment key={item.id}>
            <input onChange={(event) => this.update(event, item.id)} type="checkbox" checked={selectedItemsHash[item.id] ? 'checked' : ''} />
            {item.title}
            &nbsp;
          </Fragment>
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
