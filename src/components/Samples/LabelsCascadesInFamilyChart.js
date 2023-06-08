import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { Enabled, AnnotationType } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      cursorItem: 2,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: Enabled.False,
      normalLevelShift: 20,
      dotLevelShift: 20,
      lineLevelShift: 20,
      normalItemsInterval: 5,
      dotItemsInterval: 5,
      lineItemsInterval: 5,
      items: [
        { id: 1, parents: [2], title: "Thomas Williams", label: "Thomas Williams", description: "1, 1st husband", image: photos.t },
        { id: 2, parents: [2], title: "Mary Spencer", label: "Mary Spencer", description: "2, The Mary", image: photos.m },
        { id: 3, parents: [2], title: "David Kirby", label: "David Kirby", description: "3, 2nd Husband", image: photos.d },
        { id: 4, parents: [2], title: "Brad Williams", label: "Brad Williams", description: "4, 1st son", image: photos.b },
        { id: 5, parents: [2], title: "Mike Kirby", label: "Mike Kirby", description: "5, 2nd son, having 2 spouses", image: photos.m }
      ],
      annotations: [
        {
          annotationType: AnnotationType.Label,
          fromItem: 2,
          toItems: [1, 3, 4, 5],
          title: <div className="InLayoutLabel">100%</div>
        },
        {
          annotationType: AnnotationType.Label,
          fromItem: 2,
          toItems: [1, 3, 4],
          title: <div className="InLayoutLabel">60%</div>
        },
        {
          annotationType: AnnotationType.Label,
          fromItem: 2,
          toItems: [5],
          title: <div className="InLayoutLabel">40%</div>
        },
        {
          annotationType: AnnotationType.Label,
          fromItem: 2,
          toItems: [1, 3],
          title: <div className="InLayoutLabel">20%</div>
        },
        {
          annotationType: AnnotationType.Label,
          fromItem: 2,
          toItems: [4],
          title: <div className="InLayoutLabel">80%</div>
        },
        {
          annotationType: AnnotationType.Label,
          fromItem: 2,
          toItems: [1],
          title: <div className="InLayoutLabel">35%</div>
        },
        {
          annotationType: AnnotationType.Label,
          fromItem: 2,
          toItems: [3],
          title: <div className="InLayoutLabel">65%</div>
        }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
