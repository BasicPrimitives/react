import React from 'react';
import primitives from 'basicprimitives';
import AbstractTemplate from './AbstractTemplate';

class ItemTemplate extends AbstractTemplate {
  constructor(options, config) {
    super();

    this.options = options;
    this.config = config;

    this.render = this.render.bind(this);
  }

  render(data) {
    const { context: itemConfig } = data;

    const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : primitives.common.Colors.RoyalBlue,
      color = primitives.common.highestContrast(itemTitleColor, this.options.itemTitleSecondFontColor, this.options.itemTitleFirstFontColor);
    return <div className="BPDefaultTemplate">
      <div className="BPTitleBackground" style={{ backgroundColor: itemTitleColor }}>
        <div className="BPTitle" style={{ color }}>{itemConfig.title}</div>
      </div>
      <div className="BPPhotoFrame">
        <img className="BPPhoto" src={itemConfig.image} alt={itemConfig.title} />
      </div>
      <div className="BPDescription">{itemConfig.description}</div>
    </div>;
  }
};

export default ItemTemplate;