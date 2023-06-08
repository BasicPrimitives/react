import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.FitToPage,
      cursorItem: 0,
      hasSelectorCheckbox: Enabled.True,
      defaultTemplateName: "contactTemplate",
      templates: [{
        name: "contactTemplate",
        itemSize: { width: 120, height: 100 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 4, top: 4, right: 4, bottom: 4 },
        highlightBorderWidth: 2,
        onHighlightRender: ({ context: itemConfig }) => {
          return <div className="HighlightFrame" style={{ borderColor: itemConfig.badgeColor }}>
            <div className="HighlightBadgePlaceholder">
              <div className="HighlightBadge" style={{ backgroundColor: itemConfig.badgeColor }}>
                {itemConfig.badge}
              </div>
            </div>
          </div>;
        }
      }],
      items: [
        {
          id: 0,
          parent: null,
          title: "James Smith",
          description: "VP, Public Sector",
          image: photos.a,
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
          image: photos.b,
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
          image: photos.c,
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
