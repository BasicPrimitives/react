import React from 'react';
import { Colors, highestContrast } from 'basicprimitives';
import AbstractTemplate from './AbstractTemplate';
class ItemTemplate extends AbstractTemplate {
  constructor(options, config) {
    super();
    this.options = options;
    this.config = config;
    this.render = this.render.bind(this);

    // It is unlikly that anybody would use default template in final product, so
    // having in-line styles is not a problem
    const item = {
      position: "absolute",
      overflow: "visible",
      fontFamily: "Trebuchet MS, Tahoma, Verdana, Arial, sans-serif",
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
      WebkitUserSelect: "none",
      WebkitTouchCallout: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      boxSizing: "content-box"
    };
    const cornerAll = {
      MozBorderRadius: "4px",
      WebkitBorderRadius: "4px",
      KhtmlBorderRadius: "4px",
      BorderRadius: "4px"
    };
    const itemFrame = {
      border: "1px solid #dddddd",
      background: "#eeeeee",
      color: "#333333"
    };
    const defaultTemplate = {
      ...item,
      ...cornerAll,
      ...itemFrame,
      width: "100%",
      height: "100%",
      left: "-1px",
      top: "-1px"
    };
    const title = {
      ...item,
      textOverflow: "ellipsis",
      OTextOverflow: "ellipsis",
      whiteSpace: "nowrap",
      textAlign: "left",
      fontSize: "14px",
      lineHeight: "16px",
      color: "white",
      padding: 0
    };
    const background = {
      ...item,
      ...cornerAll,
      ...itemFrame
    };
    const photoFrame = {
      ...item,
      border: "1px solid #cccccc",
      background: "#f6f6f6",
      color: "#1c94c4"
    };
    this.styles = {
      defaultTemplate,
      title: {
        ...title,
        top: "2px",
        left: "2px",
        right: "2px",
        height: "16px"
      },
      background: {
        ...background,
        top: "2px",
        left: "2px",
        right: "2px",
        height: "20px"
      },
      photoFrame: {
        ...photoFrame,
        top: "26px",
        left: "2px",
        width: "50px",
        height: "60px"
      },
      photo: {
        height: "60px",
        width: "50px"
      },
      description: {
        ...item,
        overflow: "hidden",
        textAlign: "left",
        top: "26px",
        left: "56px",
        right: "2px",
        bottom: "2px",
        fontSize: "12px"
      }
    };
  }
  render(data) {
    const {
      context: itemConfig
    } = data;
    const {
      defaultTemplate,
      title,
      background,
      photoFrame,
      photo,
      description
    } = this.styles;
    const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue,
      color = highestContrast(itemTitleColor, this.options.itemTitleSecondFontColor, this.options.itemTitleFirstFontColor);
    return /*#__PURE__*/React.createElement("div", {
      style: defaultTemplate
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...background,
        backgroundColor: itemTitleColor
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...title,
        color
      }
    }, itemConfig.title)), /*#__PURE__*/React.createElement("div", {
      style: photoFrame
    }, /*#__PURE__*/React.createElement("img", {
      style: photo,
      src: itemConfig.image,
      alt: itemConfig.title
    })), /*#__PURE__*/React.createElement("div", {
      style: description
    }, itemConfig.description));
  }
}
;
export default ItemTemplate;