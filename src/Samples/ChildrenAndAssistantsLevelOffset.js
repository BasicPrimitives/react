import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { AnnotationType, Colors, ChildrenPlacementType, AdviserPlacementType, ItemType, LineType, PageFitMode, Enabled, GroupByType, Thickness } from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    var items = [];
    var rootItem = {
      id: 0,
      parent: null,
      title: "Title A",
      description: "Description A",
      image: "/react/photos/a.png",
      childrenPlacementType: ChildrenPlacementType.Matrix
    }
    items.push(rootItem);

    items.push({
      id: 1,
      parent: 0,
      title: "Assistant 1",
      description: "Assistant Description",
      image: "/react/photos/a.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    });

    items.push({
      id: 2,
      parent: 0,
      title: "Assistant 2",
      description: "Assistant Description",
      image: "/react/photos/b.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    });

    for (var index = 3; index <= 10; index += 2) {
      items.push({
        id: index,
        parent: 1,
        title: "Sub Adviser",
        description: "Sub Adviser Description",
        image: "/react/photos/s.png",
        itemType: ItemType.SubAdviser,
        adviserPlacementType: AdviserPlacementType.Left,
        groupTitle: "Sub Adviser",
        groupTitleColor: Colors.Red
      });
      items.push({
        id: (index + 1),
        parent: 2,
        title: "Sub Adviser",
        description: "Sub Adviser Description",
        image: "/react/photos/s.png",
        itemType: ItemType.SubAdviser,
        adviserPlacementType: AdviserPlacementType.Right,
        groupTitle: "Sub Adviser",
        groupTitleColor: Colors.Red
      });
    }

    items.push({
      id: 13,
      parent: 0,
      title: "Assistant 3",
      description: "Assistant Description",
      image: "/react/photos/c.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 1
    });


    items.push({
      id: 14,
      parent: 0,
      title: "Assistant 4",
      description: "Assistant Description",
      image: "/react/photos/d.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 1
    });

    for (index = 100; index <= 107; index += 1) {
      items.push({
        id: index,
        parent: 0,
        title: index.toString() + " Contract",
        description: index.toString() + " Description",
        image: "/react/photos/f.png",
        groupTitleColor: Colors.Red,
        groupTitle: "Contract",
        levelOffset: 0
      });
    }

    for (index = 15; index <= 20; index += 1) {
      items.push({
        id: index,
        parent: 0,
        title: index.toString() + " Full Time",
        description: index.toString() + " Description",
        image: "/react/photos/f.png",
        groupTitle: "Full Time",
        levelOffset: 1
      });
    }

    for (index = 21; index <= 32; index += 1) {
      items.push({
        id: index,
        parent: 0,
        title: index.toString() + " Part Time",
        description: index.toString() + " Description",
        image: "/react/photos/p.png",
        groupTitle: "Part Time",
        groupTitleColor: Colors.Green,
        levelOffset: 2
      });
    };

    items.push({
      id: 1003,
      parent: 103,
      title: "Assistant",
      description: "Assistant Description",
      image: "/react/photos/b.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    });

    items.push({
      id: 1004,
      parent: 17,
      title: "Assistant",
      description: "Assistant Description",
      image: "/react/photos/b.png",
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    });

    items.push({
      id: 1005,
      parent: 16,
      title: "Assistant",
      description: "Assistant Description",
      image: "/react/photos/b.png",
      itemType: ItemType.Adviser,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive,
      levelOffset: 0
    });

    var annotations = [
      {
        annotationType: AnnotationType.Level,
        levels: [0],
        title: "CEO",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      },
      {
        annotationType: AnnotationType.Level,
        levels: [1],
        title: "Children 1",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0.08,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      },
      {
        annotationType: AnnotationType.Level,
        levels: [2],
        title: "Children 2",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      },
      {
        annotationType: AnnotationType.Level,
        levels: [3],
        title: "Members",
        titleColor: Colors.RoyalBlue,
        offset: new Thickness(0, 0, 0, -1),
        lineWidth: new Thickness(0, 0, 0, 0),
        opacity: 0.08,
        borderColor: Colors.Gray,
        fillColor: Colors.Gray,
        lineType: LineType.Dotted
      }
    ];

    this.state = {
      items,
      annotations
    }
  }
  render() {
    const config = {
      ...this.state,
      pageFitMode: PageFitMode.Auto,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: Enabled.True,
      normalLevelShift: 20,
      dotLevelShift: 10,
      lineLevelShift: 10,
      normalItemsInterval: 20,
      dotItemsInterval: 10,
      lineItemsInterval: 5,
      buttonsPanelSize: 48,
      itemTitleSecondFontColor: Colors.White,
      leavesPlacementType: ChildrenPlacementType.Matrix,
      arrowsDirection: GroupByType.Children
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
