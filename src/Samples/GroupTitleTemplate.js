import React, { Component } from 'react';
import { OrgDiagram, RotatedText } from '../Diagrams';
import { PageFitMode, Enabled, Colors, TextOrientationType, OrgItemConfig } from 'basicprimitives';

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
      pageFitMode: PageFitMode.FitToPage,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: Enabled.True,
      itemTitleFirstFontColor: Colors.Yellow,
      itemTitleSecondFontColor: Colors.Blue,
      groupTitleOrientation: TextOrientationType.RotateRight,

      items: [
        new OrgItemConfig({
          id: 0,
          parent: null,
          title: "James Smith",
          description: "VP, Public Sector",
          groupTitle: "Group 1",
          image: "/react/photos/a.png",
          itemTitleColor: Colors.Black
        }),
        new OrgItemConfig({
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "/react/photos/b.png",
          itemTitleColor: Colors.Green,
          groupTitle: "Group 2",
          groupTitleColor: Colors.Gray
        }),
        new OrgItemConfig({
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: "/react/photos/c.png",
          itemTitleColor: Colors.Yellow,
          groupTitle: "Group 2"
        })
      ],
      onGroupTitleRender: ((data) => {
        var {context: itemConfig, width, height} = data;
        return <div style={{...style, backgroundColor: itemConfig.groupTitleColor}} onClick={(event) => {
          event.stopPropagation();
          alert(`User clicked on group title for node ${itemConfig.title}`)
        }}>
          <RotatedText
            width={width}
            height={height}
            orientation={'RotateRight'}
            horizontalAlignment={'center'}
            verticalAlignment={'middle'}
          >{itemConfig.groupTitle}</RotatedText>
        </div>
      })
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
