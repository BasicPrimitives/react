import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Enabled, Colors } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(itemConfig, name) {
    alert(`User clicked button ${name} for node: ${itemConfig.title}. `);
  }

  render() {
    const config = {
      cursorItem: 0,
      hasSelectorCheckbox: Enabled.True,
      normalLevelShift: 20,
      dotLevelShift: 20,
      lineLevelShift: 10,
      normalItemsInterval: 10,
      dotItemsInterval: 10,
      lineItemsInterval: 4,
      templates: [{
        name: "DepartmentTitleTemplate",
        isActive: false,
        itemSize: { width: 200, height: 30 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
          return <div className="DepartmentTemplate">
            <div className="DepartmentTitleBackground" style={{ backgroundColor: itemTitleColor }}>
              <div className="DepartmentTitle">{itemConfig.title}</div>
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
          image: photos.a
        },
        { id: 1, parent: 0, hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "Finance", itemTitleColor: "Green" },
        {
          id: 2,
          parent: 1,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: photos.b
        },
        { id: 3, parent: 0, hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "Sales", itemTitleColor: "Navy" },
        {
          id: 4,
          parent: 3,
          title: "Fritz Stuger",
          description: "VP, Human Resources",
          image: photos.b
        },
        { id: 5, parent: 0, hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "Operations", itemTitleColor: "Magenta" },
        {
          id: 6,
          parent: 5,
          title: "Brad Whitt",
          description: "VP, Human Resources",
          image: photos.b
        },
        { id: 7, parent: 0, hasSelectorCheckbox: Enabled.False, templateName: "DepartmentTitleTemplate", title: "IT", itemTitleColor: "Orange" },
        {
          id: 8,
          parent: 7,
          title: "Ted Whitt",
          description: "VP, Human Resources",
          image: photos.b
        },
        {
          id: 18,
          parent: 7,
          title: "Ted Whitt 2",
          description: "VP, Human Resources",
          image: photos.b
        },
        { id: 19, parent: 2, isVisible: true, description: "VP, Security Technology Unit (STU)", email: "robemorg@name.com", groupTitleColor: "#4169e1", image: photos.y, itemTitleColor: "#4b0082", phone: "308-532-6548", title: "Robert Morgan" },
        { id: 20, parent: 2, isVisible: true, description: "GM, Software Serviceability", email: "idabene@name.com", groupTitleColor: "#4169e1", image: photos.a, itemTitleColor: "#4b0082", phone: "765-723-1327", title: "Ida Benefield" },
        { id: 21, parent: 4, isVisible: true, description: "GM, Core Operating System Test", email: "vadaduho@name.com", groupTitleColor: "#4169e1", image: photos.d, itemTitleColor: "#4b0082", phone: "303-333-9215", title: "Vada Duhon" },
        { id: 22, parent: 4, isVisible: true, description: "GM, Global Platform Technologies and Services", email: "willloyd@name.com", groupTitleColor: "#4169e1", image: photos.f, itemTitleColor: "#4b0082", phone: "585-309-6253", title: "William Loyd" },
        { id: 23, parent: 6, isVisible: true, description: "Sr. VP, NAME & Personal Services Division", email: "craiblue@name.com", groupTitleColor: "#4169e1", image: photos.g, itemTitleColor: "#4b0082", phone: "915-355-4705", title: "Craig Blue" },
        { id: 24, parent: 6, isVisible: true, description: "VP, NAME Communications Services and Member Platform", email: "joelcraw@name.com", groupTitleColor: "#4169e1", image: photos.h, itemTitleColor: "#4b0082", phone: "650-623-3302", title: "Joel Crawford" },
        { id: 25, parent: 8, isVisible: true, description: "VP & CFO, NAME", email: "barblang@name.com", groupTitleColor: "#4169e1", image: photos.o, itemTitleColor: "#4b0082", phone: "618-822-7345", title: "Barbara Lang" },
        { id: 26, parent: 8, isVisible: true, description: "VP, NAME Operations", email: "barbfaul@name.com", groupTitleColor: "#4169e1", image: photos.d, itemTitleColor: "#4b0082", phone: "641-678-7646", title: "Barbara Faulk" },
        { id: 27, parent: 18, isVisible: true, description: "VP, NAME Global Sales & Marketing", email: "stewwill@name.com", groupTitleColor: "#4169e1", image: photos.z, itemTitleColor: "#4b0082", phone: "803-746-8733", title: "Stewart Williams" },
        { id: 28, parent: 18, isVisible: true, description: "Sr. VP, NAME Information Services & Merchant Platform", email: "robelemi@name.com", groupTitleColor: "#4169e1", image: photos.y, itemTitleColor: "#4b0082", phone: "425-590-4308", title: "Robert Lemieux" }
      ]
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config}
      />
    </div >
  }
}

export default Sample;
