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
      image: "/react/photos/a.png"
    }
    items.push(rootItem);

    items.push({
      id: 1,
      parent: 0,
      title: "Assistant 1",
      description: "Assistant Description",
      image: "/react/photos/a.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive
    });

    items.push({
      id: 2,
      parent: 0,
      title: "Assistant 2",
      description: "Assistant Description",
      image: "/react/photos/b.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive
    });

    for (var index = 3; index <= 10; index += 2) {
      items.push({
        id: index,
        parent: 1,
        title: "Sub Adviser",
        description: "Sub Adviser Description",
        image: "/react/photos/s.png",
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
        image: "/react/photos/s.png",
        itemType: primitives.orgdiagram.ItemType.SubAdviser,
        adviserPlacementType: primitives.common.AdviserPlacementType.Right,
        groupTitle: "Sub Adviser",
        groupTitleColor: primitives.common.Colors.Red
      });
    }

    items.push({
      id: 12,
      parent: 0,
      isVisible: false,
      title: "Aggregator",
      description: "Invisible aggregator",
      childrenPlacementType: primitives.common.ChildrenPlacementType.Horizontal
    });


    items.push({
      id: 13,
      parent: 12,
      title: "Assistant 3",
      description: "Assistant Description",
      image: "/react/photos/c.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive
    });


    items.push({
      id: 14,
      parent: 12,
      title: "Assistant 4",
      description: "Assistant Description",
      image: "/react/photos/d.png",
      itemType: primitives.orgdiagram.ItemType.Assistant,
      adviserPlacementType: primitives.common.AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: primitives.common.Colors.Olive
    });

    for (index = 15; index <= 21; index += 1) {
      if (index === 18) {
        /* add invibsle item between chidlren */
        items.push({
          id: 18,
          parent: 12,
          isVisible: false,
          title: "Aggregator 2",
          description: "Invisible aggregator 2",
          childrenPlacementType: primitives.common.ChildrenPlacementType.Matrix
        });
      } else {
        items.push({
          id: index,
          parent: 12,
          title: index.toString() + " Full Time",
          description: index.toString() + " Description",
          image: "/react/photos/f.png",
          groupTitle: "Full Time"
        });
      }
    }

    for (index = 22; index <= 33; index += 1) {
      items.push({
        id: index,
        parent: 18,
        title: index.toString() + " Part Time",
        description: index.toString() + " Description",
        image: "/react/photos/p.png",
        groupTitle: "Part Time",
        groupTitleColor: primitives.common.Colors.Green
      });
    };

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
