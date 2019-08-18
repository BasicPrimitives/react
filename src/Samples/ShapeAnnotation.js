import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      items: [
        /* JSON noname objects equivalent to primitives.orgdiagram.ItemConfig */
        { id: 0, parent: null, title: "Scott Aasrud", description: "VP, Public Sector", image: "photos/a.png" },
        { id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: "photos/b.png" },
        { id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: "photos/c.png" },
        { id: 3, parent: 0, title: "Mike Wazowski", description: "Business Analyst, Canada", image: "photos/o.png" },
        { id: 4, parent: 3, title: "Best Friend", description: "Business Analyst, Mexico", image: "photos/f.png" }
      ],
      annotations: [
        /* JSON noname object equivalent to primitives.orgdiagram.ConnectorAnnotationConfig */
        {
          annotationType: primitives.common.AnnotationType.Shape,
          items: [0],
          label: <><div className="BadgeSymbol" style={{
            backgroundColor: primitives.common.Colors.Green
          }}>1</div>Oval</>,
          labelSize: new primitives.common.Size(100, 30),
          labelPlacement: primitives.common.PlacementType.Right,
          shapeType: primitives.common.ShapeType.Oval,
          borderColor: primitives.common.Colors.Green,
          offset: new primitives.common.Thickness(2, 2, 2, 2),
          lineWidth: 2,
          selectItems: true,
          lineType: primitives.common.LineType.Dashed
        },
        /* JSON noname object equivalent to primitives.orgdiagram.ConnectorAnnotationConfig */
        {
          annotationType: primitives.common.AnnotationType.Shape,
          items: [2, 3],
          label: <><div className="BadgeSymbol" style={{
            backgroundColor: primitives.common.Colors.Navy
          }}>2</div>Cross Out</>,
          labelSize: { width: 100, height: 30 },
          labelPlacement: primitives.common.PlacementType.Right,
          shapeType: primitives.common.ShapeType.CrossOut,
          borderColor: primitives.common.Colors.Navy,
          offset: { left: 2, top: 2, right: 2, bottom: 2 },
          lineWidth: 2,
          selectItems: true,
          lineType: primitives.common.LineType.Dashed
        },
        /* prototype based instantiation */
        new primitives.orgdiagram.ShapeAnnotationConfig({
          items: [1],
          label: <><div className="BadgeSymbol" style={{
            backgroundColor: primitives.common.Colors.Red
          }}>3</div>Triangle</>,
          labelSize: new primitives.common.Size(100, 30),
          labelPlacement: primitives.common.PlacementType.Bottom,
          shapeType: primitives.common.ShapeType.Triangle,
          borderColor: primitives.common.Colors.Red,
          offset: new primitives.common.Thickness(2, 2, 2, 2),
          lineWidth: 2,
          selectItems: true,
          lineType: primitives.common.LineType.Dashed
        })
        ,
        new primitives.orgdiagram.BackgroundAnnotationConfig({
          items: [2, 3],
          borderColor: "#f8e5f9",
          fillColor: "#e5f9f8",
          lineWidth: 2,
          selectItems: true,
          includeChildren: true,
          lineType: primitives.common.LineType.Dotted,
          offset: new primitives.common.Thickness(20, 20, 20, 20)
        })
      ],
      cursorItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      normalItemsInterval: 40 /* defines padding around items of background annotations*/,
      arrowsDirection: primitives.common.GroupByType.Parents,
      pageFitMode: primitives.orgdiagram.PageFitMode.None
    };

    return <>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
