import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class CheckBoxTemplate extends AbstractTemplate {
  constructor(selectCheckBoxLabel) {
    super();
    this.render = this.render.bind(this);

    this.selectCheckBoxLabel = selectCheckBoxLabel;
  }

  render(data) {
    return <div style={{ textAlign: "left" }}>
      <input type="checkbox" name="checkbox" style={{
        fontSize: "12px",
        lineHeight: "12px",
        verticalAlign: "middle"
      }} checked={data.isSelected} data-id={data.id} />
      <span name="selectiontext" style={{
        fontSize: "12px",
        lineHeight: "12px",
        verticalAlign: "middle"
      }} data-id={data.id} >
        {this.selectCheckBoxLabel}
      </span>
    </div>;
  }
};

export default CheckBoxTemplate;