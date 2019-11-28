import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    var items = [];
    var rootItem = {
      id: 0,
      parent: null,
      title: "Title A",
      description: "Description A",
      image: "photos/a.png",
      childrenPlacementType: primitives.common.ChildrenPlacementType.Matrix
    }
    items.push(rootItem);

    items.push({
      id: 1,
      parent: 0,
      title: "Assistant 1",
      description: "Assistant Description",
      image: "photos/a.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive,
      levelOffset: 0
    });

    items.push({
      id: 2,
      parent: 0,
      title: "Assistant 2",
      description: "Assistant Description",
      image: "photos/b.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive,
      levelOffset: 0
    });

    for (var index = 3; index <= 10; index += 2) {
      items.push({
        id: index,
        parent: 1,
        title: "Sub Adviser",
        description: "Sub Adviser Description",
        image: "photos/s.png",
        itemType: primitives.orgdiagram.ItemType.SubAdviser,
        adviserPlacementType: primitives.common.AdviserPlacementType.Left,
        groupTitle: "Sub Adviser",
        groupTitleColor: primitives.common.Colors.Red
      });
      items.push({
        id: (index + 1),
        parent: 2,
        title: "Sub Adviser",
        description: "Sub Adviser Description",
        image: "photos/s.png",
        itemType: primitives.orgdiagram.ItemType.SubAdviser,
        adviserPlacementType: primitives.common.AdviserPlacementType.Right,
        groupTitle: "Sub Adviser",
        groupTitleColor: primitives.common.Colors.Red
      });
    }

    items.push({
      id: 13,
      parent: 0,
      title: "Assistant 3",
      description: "Assistant Description",
      image: "photos/c.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive,
      levelOffset: 1
    });


    items.push({
      id: 14,
      parent: 0,
      title: "Assistant 4",
      description: "Assistant Description",
      image: "photos/d.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive,
      levelOffset: 1
    });

    for (var index = 100; index <= 107; index += 1) {
      items.push({
        id: index,
        parent: 0,
        title: index.toString() + " Contract",
        description: index.toString() + " Description",
        image: "photos/f.png",
        groupTitleColor: primitives.common.Colors.Red,
        groupTitle: "Contract",
        levelOffset: 0
      });
    }

    for (var index = 15; index <= 20; index += 1) {
      items.push({
        id: index,
        parent: 0,
        title: index.toString() + " Full Time",
        description: index.toString() + " Description",
        image: "photos/f.png",
        groupTitle: "Full Time",
        levelOffset: 1
      });
    }

    for (var index = 21; index <= 32; index += 1) {
      items.push({
        id: index,
        parent: 0,
        title: index.toString() + " Part Time",
        description: index.toString() + " Description",
        image: "photos/p.png",
        groupTitle: "Part Time",
        groupTitleColor: primitives.common.Colors.Green,
        levelOffset: 2
      });
    };

    items.push({
      id: 1003,
      parent: 103,
      title: "Assistant",
      description: "Assistant Description",
      image: "photos/b.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive,
      levelOffset: 0
    });

    items.push({
      id: 1004,
      parent: 17,
      title: "Assistant",
      description: "Assistant Description",
      image: "photos/b.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive,
      levelOffset: 0
    });

    items.push({
      id: 1005,
      parent: 16,
      title: "Assistant",
      description: "Assistant Description",
      image: "photos/b.png",
      itemType: primitives.orgdiagram.ItemType.Adviser,
      adviserPlacementType: primitives.common.AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive,
      levelOffset: 0
    });

    this.state = {
      items
    }
  }
  render() {
    const config = {
      ...this.state,
      pageFitMode: primitives.common.PageFitMode.Auto,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      normalLevelShift: 20,
      dotLevelShift: 10,
      lineLevelShift: 10,
      normalItemsInterval: 20,
      dotItemsInterval: 10,
      lineItemsInterval: 5,
      buttonsPanelSize: 48,
      itemTitleSecondFontColor: primitives.common.Colors.White,
      leavesPlacementType: primitives.common.ChildrenPlacementType.Matrix,
      arrowsDirection: primitives.common.GroupByType.Children
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
