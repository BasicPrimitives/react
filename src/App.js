import React, { Component } from 'react';
import primitives from 'basicprimitives';
import SamplesList from './SamplesList';
import './global.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);

    let key = 1;
    this.hash = SamplesList.reduce((agg, group) => {
      group.key = key;
      key += 1;
      group.items.reduce((agg, item) => {
        item.key = key;
        key += 1;
        agg[item.key] = item;
        return agg;
      }, agg)
      return agg;
    }, {});

    this.state = {
      activeItem: (SamplesList[0].items[0])
    };
  }

  onChange({ target }) {
    const { activeItem } = this.state;
    const newItem = this.hash[target.value];
    if (activeItem.key !== newItem.key) {
      this.setState({
        activeItem: newItem
      });
    }
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div className="container">
        <h1>Basic Primitives Diagrams for React</h1>
        <h3>Core version: {primitives.common.version}</h3>
        <p>
          <select onChange={this.onChange}>
            {SamplesList.map(({ key, label, items }) => (
              <optgroup key={key} label={label}>
                {items.map(({ key: itemKey, label }) => (
                  <option key={itemKey} value={itemKey} >{label}</option>
                ))}
              </optgroup>
            )
            )}
          </select>
        </p>
        <div className="sample">
          {activeItem.component}
        </div>
      </div>
    );
  }
}

export default App;
