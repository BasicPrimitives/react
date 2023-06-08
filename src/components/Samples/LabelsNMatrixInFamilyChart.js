import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { Enabled, AnnotationType, GroupByType, PageFitMode } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      cursorItem: 1,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: Enabled.False,
      normalLevelShift: 20,
      dotLevelShift: 20,
      lineLevelShift: 20,
      normalItemsInterval: 5,
      dotItemsInterval: 5,
      lineItemsInterval: 5,
      enableMatrixLayout: true,
      pageFitMode: PageFitMode.None,
      groupByType: GroupByType.Parents,
      items: [
        { id: 1, parents: [], title: "1", label: "1", description: "", image: photos.z },
        { id: 2, parents: [1, 101, 102, 103], title: "2", label: "2", description: "", image: photos.a },
        { id: 3, parents: [1, 101, 102, 103], title: "3", label: "3", description: "", image: photos.b },
        { id: 4, parents: [1, 101, 102, 103], title: "4", label: "4", description: "", image: photos.c },
        { id: 6, parents: [1, 101, 102, 103], title: "6", label: "6", description: "", image: photos.e },
        { id: 7, parents: [1, 101, 102, 103], title: "7", label: "7", description: "", image: photos.f },
        { id: 8, parents: [1, 101, 102, 103], title: "8", label: "8", description: "", image: photos.g },
        { id: 10, parents: [1, 101, 102, 103], title: "10", label: "10", description: "", image: photos.i },
        { id: 11, parents: [1, 101, 102, 103], title: "11", label: "11", description: "", image: photos.b },
        { id: 12, parents: [11], title: "12", label: "12", description: "", image: photos.b },
        { id: 33, parents: [2, 3, 4, 6, 7, 8, 10, 12], title: "33", label: "33", description: "", image: photos.m }
      ],
      annotations: [
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [2], title: "1->2" },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [3], title: "1->3" },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [4], title: "1->4" },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [6], title: "1->6" },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [7], title: "1->7" },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [8], title: "1->8" },
        { annotationType: AnnotationType.Label, fromItem: 1, toItems: [10], title: "1->10" },
        { annotationType: AnnotationType.Label, fromItem: 33, toItems: [2], title: "33->2" },
        { annotationType: AnnotationType.Label, fromItem: 33, toItems: [3], title: "33->3" },
        { annotationType: AnnotationType.Label, fromItem: 33, toItems: [4], title: "33->4" },
        { annotationType: AnnotationType.Label, fromItem: 33, toItems: [6], title: "33->6" },
        { annotationType: AnnotationType.Label, fromItem: 33, toItems: [7], title: "33->7" },
        { annotationType: AnnotationType.Label, fromItem: 33, toItems: [8], title: "33->8" }
      ],
      defaultLabelAnnotationTemplate: "LabelAnnotationTemplate",
      templates: [{
        name: "LabelAnnotationTemplate",
        itemSize: { width: 60, height: 20 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          return <div className="InLayoutLabel">
              {itemConfig.title}
          </div>;
        }
      }]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
