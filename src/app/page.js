'use client';
import { useState } from 'react';
import SamplesList from '../components/SamplesList';

const App = (props) => {
  const [activeItem, setActiveItem] = useState(SamplesList[0].items[0]);
  let key = 1;
  const hash = SamplesList.reduce((agg, group) => {
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

  const onChange = ({ target }) => {
    const newItem = hash[target.value];
    if (activeItem.key !== newItem.key) {
      setActiveItem(() => newItem)
    }
  }

  return (
    <div className="container">
      <h1>Basic Primitives Diagrams for React</h1>
      <p>
        <select onChange={onChange}>
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

export default App;