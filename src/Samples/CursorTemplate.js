import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import primitives from 'basicprimitives';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: primitives.common.PageFitMode.FitToPage,
      cursorItem: 0,
      highlightItem: 0,
      hasSelectorCheckbox: primitives.common.Enabled.True,
      defaultTemplateName: "contactTemplate",
      templates: [{
        name: "contactTemplate",
        itemSize: { width: 120, height: 100 },
        minimizedItemSize: { width: 3, height: 3 },
        cursorPadding: { left: 3, top: 3, right: 3, bottom: 3 },
        cursorBorderWidth: 2,
        highlightPadding: { left: 4, top: 4, right: 4, bottom: 4 },
        onCursorRender: ({ context: itemConfig }) => {
          return <div className="CursorFrame" style={{ borderColor: itemConfig.badgeColor }}>
            <div className="CursorBadge" style={{ backgroundColor: itemConfig.badgeColor }}>{itemConfig.badge}</div>
          </div>;
        }
      }],
      items: [
        {
          id: 0,
          parent: null,
          title: "Scott Aasrud",
          description: "VP, Public Sector",
          image: "/react/photos/a.png",
          phone: "(123) 456-78-90",
          email: "itema@org.com",
          badge: "1",
          badgeColor: "blue"
        },
        {
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "/react/photos/b.png",
          badge: "2",
          badgeColor: "red"
        },
        {
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          phone: "(123) 654-78-90",
          email: "itemc@org.com",
          description: "Business Solutions, US",
          image: "/react/photos/c.png",
          badge: "3",
          badgeColor: "green"
        }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config}
      />
    </div >
  }
}

export default Sample;
