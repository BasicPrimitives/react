import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { ShapeType, Colors, Enabled, PageFitMode } from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.getNextShapeType = this.getNextShapeType.bind(this);
    this.getNextColor = this.getNextColor.bind(this);

    this.minimizedItemShapeTypes = [
      ShapeType.Rectangle,
      ShapeType.Oval,
      ShapeType.Triangle,
      ShapeType.CrossOut,
      ShapeType.Circle,
      ShapeType.Rhombus,
      ShapeType.Wedge,
      ShapeType.FramedOval,
      ShapeType.FramedTriangle,
      ShapeType.FramedWedge,
      ShapeType.FramedRhombus
    ];

    this.shapeIndex = 0;

    this.itemTitleColors = [
      Colors.Red,
      Colors.Green,
      Colors.Navy,
      Colors.Cyan
    ];
    
    this.colorIndex = 0;

    /* create some items */
    const rootItem = {
      id: 0,
      parent: null,
      title: "Title 0",
      description: "Description",
      image: "./photos/a.png",
      minimizedItemShapeType: (this.getNextShapeType()),
      itemTitleColor: (this.getNextColor())
    };
    var levelItems = [rootItem],
      items = [rootItem],
      id = 1;
    for(var levelIndex  = 0; levelIndex < 4; levelIndex+=1) {
      var newLevelItems = [];
      for(var index = 0; index < levelItems.length; index+=1) {
        var parent = levelItems[index];
        for (var index2 = 0; index2 < 2; index2++) {
          var newItem = {
            id: ++id,
            parent: parent.id,
            title: id.toString() + " Title",
            description: id.toString() + " Description",
            image: "./photos/b.png",
            minimizedItemShapeType: (this.getNextShapeType()),
            itemTitleColor: (this.getNextColor())
          };
          items.push(newItem);
          newLevelItems.push(newItem);
        }
      }
      levelItems = newLevelItems;
    }

    /* collect all ids */
    const selectedItems = [];
    for(index = 0; index < items.length; index+=1) {
      selectedItems.push(items[index].id);
    };


    this.state = {
      items,
      selectedItems
    }
  }

  getNextShapeType() {
    var result = this.minimizedItemShapeTypes[this.shapeIndex];
    this.shapeIndex+=1;
    if(this.shapeIndex === this.minimizedItemShapeTypes.length) {
      this.shapeIndex = 0;
    }
    return result;
  }

  getNextColor() {
    var result = this.itemTitleColors[this.colorIndex];
    this.colorIndex+=1;
    if(this.colorIndex === this.itemTitleColors.length) {
      this.colorIndex = 0;
    }
    return result;
  }

  render() {
    const { items, selectedItems } = this.state;
    const config = {
			items: items,
      selectedItems: selectedItems,
      showFrame: true,
			frameInnerPadding: { left: 4, top: 4, right: 4, bottom: 4},
			frameOuterPadding: { left: 4, top: 4, right: 4, bottom: 4},
			templates: [{
          name: "MarkerTemplate",
          minimizedItemSize: { width: 8, height: 8 },
          highlightPadding: { left: 4, top: 4, right: 4, bottom: 4 }
        }
      ],
			defaultTemplateName: "MarkerTemplate",
			hasSelectorCheckbox: Enabled.True,
      pageFitMode: PageFitMode.None,
      cursorItem: 0,
      highlightItem: 0
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
