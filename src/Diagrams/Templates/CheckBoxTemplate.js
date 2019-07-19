import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class CheckBoxTemplate extends AbstractTemplate {
  constructor(selectCheckBoxLabel) {
    super();
    this.render = this.render.bind(this);

    this.selectCheckBoxLabel = selectCheckBoxLabel;
  }

  render(data) {
    return <label>
      <nobr>
        <input type="checkbox" name="checkbox" className="BPSelectionCheckBox" checked={data.isSelected} data-id={data.id} />
        &nbsp;
        <span name="selectiontext" className="BPSelectionText" data-id={data.id} >
          {this.selectCheckBoxLabel}
        </span>
      </nobr>
    </label>;
  }
};

export default CheckBoxTemplate;