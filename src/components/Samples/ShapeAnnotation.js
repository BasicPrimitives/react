import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Size, Thickness, ShapeAnnotationConfig, BackgroundAnnotationConfig, AnnotationType, Colors, PlacementType, ShapeType, LineType, GroupByType, PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      items: [
        /* JSON noname objects equivalent to OrgItemConfig */
        { id: 0, parent: null, title: "James Smith", description: "VP, Public Sector", image: photos.a },
        { id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: photos.b },
        { id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: photos.c },
        { id: 3, parent: 0, title: "Mike Wazowski", description: "Business Analyst, Canada", image: photos.o },
        { id: 4, parent: 3, title: "Best Friend", description: "Business Analyst, Mexico", image: photos.f }
      ],
      annotations: [
        /* JSON noname object equivalent to ConnectorAnnotationConfig */
        {
          annotationType: AnnotationType.Shape,
          items: [0],
          label: <><div className="BadgeSymbol" style={{
            backgroundColor: Colors.Green
          }}>1</div>Oval</>,
          labelSize: new Size(100, 30),
          labelPlacement: PlacementType.Right,
          shapeType: ShapeType.Oval,
          borderColor: Colors.Green,
          offset: new Thickness(2, 2, 2, 2),
          lineWidth: 2,
          selectItems: true,
          lineType: LineType.Dashed
        },
        /* JSON noname object equivalent to ConnectorAnnotationConfig */
        {
          annotationType: AnnotationType.Shape,
          items: [2, 3],
          label: <><div className="BadgeSymbol" style={{
            backgroundColor: Colors.Navy
          }}>2</div>Cross Out</>,
          labelSize: { width: 100, height: 30 },
          labelPlacement: PlacementType.Right,
          shapeType: ShapeType.CrossOut,
          borderColor: Colors.Navy,
          offset: { left: 2, top: 2, right: 2, bottom: 2 },
          lineWidth: 2,
          selectItems: true,
          lineType: LineType.Dashed
        },
        /* prototype based instantiation */
        new ShapeAnnotationConfig({
          items: [1],
          label: <><div className="BadgeSymbol" style={{
            backgroundColor: Colors.Red
          }}>3</div>Triangle</>,
          labelSize: new Size(100, 30),
          labelPlacement: PlacementType.Bottom,
          shapeType: ShapeType.Triangle,
          borderColor: Colors.Red,
          offset: new Thickness(2, 2, 2, 2),
          lineWidth: 2,
          selectItems: true,
          lineType: LineType.Dashed
        })
        ,
        new BackgroundAnnotationConfig({
          items: [2, 3],
          borderColor: "#f8e5f9",
          fillColor: "#e5f9f8",
          lineWidth: 2,
          selectItems: true,
          includeChildren: true,
          lineType: LineType.Dotted,
          offset: new Thickness(20, 20, 20, 20)
        })
      ],
      cursorItem: 0,
      hasSelectorCheckbox: Enabled.True,
      normalItemsInterval: 40 /* defines padding around items of background annotations*/,
      arrowsDirection: GroupByType.Parents,
      pageFitMode: PageFitMode.None
    };

    return <>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
