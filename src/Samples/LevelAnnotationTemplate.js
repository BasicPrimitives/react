import React, { Component } from 'react';
import { OrgDiagram, RotatedText } from '../Diagrams';
import { Thickness, LevelAnnotationConfig, AnnotationType, Colors, LineType, GroupByType, PageFitMode, Enabled } from 'basicprimitives';

class Sample extends Component {
  render() {
    var style = {
      position: "absolute",
      fontSize: "12px",
      fontFamily: "Trebuchet MS, Tahoma, Verdana, Arial, sans-serif",
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
      WebkitUserSelect: "none",
      WebkitTouchCallout: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      boxSizing: "content-box",

      MozBorderRadius: "4px",
      WebkitBorderRadius: "4px",
      KhtmlBorderRadius: "4px",
      BorderRadius: "4px",

      background: "royalblue",
      borderWidth: 0,
      color: "white",
      padding: 0,
      width: "100%",
      height: "100%",
      left: "-1px",
      top: "-1px"
    }
    const config = {
      items: [
        /* JSON noname objects equivalent to OrgItemConfig */
        { id: 0, parent: null, title: "James Smith", description: "VP, Public Sector", image: "/react/photos/a.png" },
        { id: 1, parent: 0, title: "Ted Lucas", description: "VP, Human Resources", image: "/react/photos/b.png" },
        { id: 2, parent: 0, title: "Fritz Stuger", description: "Business Solutions, US", image: "/react/photos/c.png" },
        { id: 3, parent: 2, title: "Robert Canon", description: "Operation, US", image: "/react/photos/r.png" },
      ],
      annotations: [
        {
          annotationType: AnnotationType.Level,
          levels: [0],
          title: "Level 0",
          titleColor: Colors.RoyalBlue,
          offset: new Thickness(0, 0, 0, -1),
          lineWidth: new Thickness(0, 0, 0, 0),
          opacity: 0,
          borderColor: Colors.Gray,
          fillColor: Colors.Gray,
          lineType: LineType.Dotted
        },
        new LevelAnnotationConfig({
          levels: [1],
          title: "Level 1",
          titleColor: Colors.Green,
          offset: new Thickness(0, 0, 0, -1),
          lineWidth: new Thickness(0, 0, 0, 0),
          opacity: 0.08,
          borderColor: Colors.Gray,
          fillColor: Colors.Gray,
          lineType: LineType.Dotted
        }),
        new LevelAnnotationConfig({
          levels: [2],
          title: "Level 2",
          titleColor: Colors.Red,
          offset: new Thickness(0, 0, 0, -1),
          lineWidth: new Thickness(0, 0, 0, 0),
          opacity: 0,
          borderColor: Colors.Gray,
          fillColor: Colors.Gray,
          lineType: LineType.Solid
        })
      ],
      cursorItem: 0,
      hasSelectorCheckbox: Enabled.True,
      normalItemsInterval: 40 /* defines padding around items of background annotations*/,
      arrowsDirection: GroupByType.Parents,
      pageFitMode: PageFitMode.FitToPage,
      onLevelTitleRender: ((data) => {
        var {context, width, height } = data;
        var { title, titleColor } = context;
        return <div style={{...style, background: titleColor}} onClick={(event) => {
          event.stopPropagation();
          alert(`User clicked on level title ${title}`)
        }}>
          <RotatedText
            width={width}
            height={height}
            orientation={'RotateRight'}
            horizontalAlignment={'center'}
            verticalAlignment={'middle'}
          >{title}</RotatedText>
        </div>
      }),
      onLevelBackgroundRender: ((data) => {
        var {context, width, height } = data;
        var { title, fillColor, opacity } = context;
        return !opacity ? <div style={{
          fontSize: "120px",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: "normal",
          fontStyle: "normal",
          color: "Black",
          position: "absolute",
          padding: "px",
          margin: 0,
          textAlign: "left",
          lineHeight: 1,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          tableLayout: "fixed",
          width: width + "px",
          height: height - 1 + "px",
          opacity: 0.05}}>
          {title}
        </div> : <div style={{
          fontSize: "120px",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: "normal",
          fontStyle: "normal",
          color: "Black",
          position: "absolute",
          padding: "px",
          margin: 0,
          textAlign: "left",
          lineHeight: 1,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          tableLayout: "fixed",
          width: width + "px",
          height: height - 1 + "px",
          background: fillColor,
          opacity: opacity}}>
          {title}
        </div>
      })
    };

    return <>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
