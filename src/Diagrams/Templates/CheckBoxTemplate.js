import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class CheckBoxTemplate extends AbstractTemplate {
  constructor(selectCheckBoxLabel) {
    super();
    this.render = this.render.bind(this);

    this.selectCheckBoxLabel = selectCheckBoxLabel;
  }

  render(data) {
    return <div className="BPSelectionCheckBoxContainer">
      <input type="checkbox" name="checkbox" className="BPSelectionCheckBox" checked={data.isSelected} data-id={data.id} />
      <span name="selectiontext" className="BPSelectionText" data-id={data.id} >
        {this.selectCheckBoxLabel}
      </span>
    </div>;
  }
};

export default CheckBoxTemplate;