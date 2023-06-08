import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Colors, ItemType, AdviserPlacementType, ChildrenPlacementType, GroupByType, PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    var items = [];
    var rootItem = {
      id: 0,
      parent: null,
      title: "Title A",
      description: "Description A",
      image: photos.a
    }
    items.push(rootItem);

    items.push({
      id: 1,
      parent: 0,
      title: "Assistant 1",
      description: "Assistant Description",
      image: photos.a,
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive
    });

    items.push({
      id: 2,
      parent: 0,
      title: "Assistant 2",
      description: "Assistant Description",
      image: photos.b,
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive
    });

    for (var index = 3; index <= 10; index += 2) {
      items.push({
        id: index,
        parent: 1,
        title: "Sub Adviser",
        description: "Sub Adviser Description",
        image: photos.s,
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
        image: photos.s,
        itemType: ItemType.SubAdviser,
        adviserPlacementType: AdviserPlacementType.Right,
        groupTitle: "Sub Adviser",
        groupTitleColor: Colors.Red
      });
    }

    items.push({
      id: 12,
      parent: 0,
      isVisible: false,
      title: "Aggregator",
      description: "Invisible aggregator",
      childrenPlacementType: ChildrenPlacementType.Horizontal
    });


    items.push({
      id: 13,
      parent: 12,
      title: "Assistant 3",
      description: "Assistant Description",
      image: photos.c,
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Right,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive
    });


    items.push({
      id: 14,
      parent: 12,
      title: "Assistant 4",
      description: "Assistant Description",
      image: photos.d,
      itemType: ItemType.Assistant,
      adviserPlacementType: AdviserPlacementType.Left,
      groupTitle: "Audit",
      groupTitleColor: Colors.Olive
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
          childrenPlacementType: ChildrenPlacementType.Matrix
        });
      } else {
        items.push({
          id: index,
          parent: 12,
          title: index.toString() + " Full Time",
          description: index.toString() + " Description",
          image: photos.f,
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
        image: photos.p,
        groupTitle: "Part Time",
        groupTitleColor: Colors.Green
      });
    };

    this.state = {
      items
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
