import React from 'react';
import AbstractTemplate from './AbstractTemplate';
class CheckBoxTemplate extends AbstractTemplate {
  constructor(selectCheckBoxLabel) {
    super();
    this.render = this.render.bind(this);
    this.selectCheckBoxLabel = selectCheckBoxLabel;
  }
  render(data) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "checkbox",
      style: {
        fontSize: "12px",
        lineHeight: "12px",
        verticalAlign: "middle",
        margin: "0px",
        padding: "0px"
      },
      checked: data.isSelected,
      onChange: () => null,
      "data-id": data.id
    }), /*#__PURE__*/React.createElement("span", {
      name: "selectiontext",
      style: {
        fontSize: "12px",
        lineHeight: "12px",
        verticalAlign: "middle",
        maring: "0px",
        paddingLeft: "2px",
        paddingTop: "0px",
        paddingRight: "0px",
        paddingBottom: "0px"
      },
      "data-id": data.id
    }, this.selectCheckBoxLabel));
  }
}
;
export default CheckBoxTemplate;