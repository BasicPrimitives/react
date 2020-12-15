import React, { Component, Fragment } from 'react';
import { OrgDiagram } from '../Diagrams';
import { PageFitMode, Enabled, Colors } from 'basicprimitives';

class Sample extends Component {
  constructor() {
    super();

    this.update = this.update.bind(this);

    const update = this.update;

    this.state = {
      config: {
        pageFitMode: PageFitMode.None,
        cursorItem: 0,
        hasSelectorCheckbox: Enabled.False,
        selectedItems: [0, 2],
        items: [
          { id: 0, parent: null, isVisible: true, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", image: "/react/photos/q.png", itemTitleColor: "#4169e1", phone: "(352) 206-7599", title: "David Dalton" },
          { id: 1, parent: 0, isVisible: true, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", image: "/react/photos/w.png", itemTitleColor: "#4b0082", phone: "(505) 791-1689", title: "Jeanna White" },
          { id: 2, parent: 0, isVisible: true, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", image: "/react/photos/e.png", itemTitleColor: "#4b0082", phone: "(262) 215-7998", title: "James Holt" },
          { id: 5, parent: 1, isVisible: true, description: "Sr. VP, Software Server System", email: "georduon@name.com", image: "/react/photos/x.png", itemTitleColor: "#4b0082", phone: "(434) 406-2189", title: "George Duong" },
          { id: 6, parent: 1, isVisible: true, description: "VP, Developer Division", email: "ashlrue@name.com", image: "/react/photos/n.png", itemTitleColor: "#4b0082", phone: "(515) 324-4969", title: "Ashley Rue" },
          { id: 7, parent: 2, isVisible: true, description: "VP, Enterprise Access and Security Products Division (EASP)", email: "bonnwede@name.com", image: "/react/photos/i.png", itemTitleColor: "#4b0082", phone: "(412) 265-2782", title: "Bonnie Wedel" },
          { id: 8, parent: 2, isVisible: true, description: "GM, Core File Solutions", email: "melihous@name.com", image: "/react/photos/p.png", itemTitleColor: "#4b0082", phone: "(630) 887-1188", title: "Melissa Houser" }
        ],
        defaultTemplateName: "CheckboxTemplate",
        templates: [{
          name: "CheckboxTemplate",
          itemSize: { width: 220, height: 120 },
          minimizedItemSize: { width: 3, height: 3 },
          highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
          onItemRender: ({ context: itemConfig, isSelected }) => {
            const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
            return <div className="ContactTemplate">
              <div className="ContactTitleBackground" style={{ backgroundColor: itemTitleColor }}>
                <div className="ContactTitle">{itemConfig.title}</div>
              </div>
              <div className="ContactPhotoFrame">
                <img className="ContactPhoto" src={itemConfig.image} alt={itemConfig.title} />
              </div>
              <div className="ContactPhone">{itemConfig.phone}</div>
              <div className="ContactEmail">{itemConfig.email}</div>
              <div className="ContactDescription">{itemConfig.description}</div>
              <div className="ContactCheckboxElement">
                <label>
                  <nobr>
                    <input onChange={(event) => update(event, itemConfig.id)} type="checkbox" name="checkbox" style={{ marginTop: "2px" }} checked={isSelected} />
                    &nbsp;
                  <span className="ContactCheckboxCaption">
                      Selected
                  </span>
                  </nobr>
                </label>
              </div>
            </div>;
          }
        }
        ]
      }
    }
  }

  update(event, itemid) {
    const { config } = this.state;
    const { selectedItems } = config;
    const isChecked = event.target.checked;
    if (isChecked) {
      this.setState({
        config: {
          ...config,
          selectedItems: [...selectedItems, itemid]
        }
      })
    } else {
      this.setState({
        config: {
          ...config,
          selectedItems: (selectedItems.filter(id => id !== itemid))
        }
      })
    }
  }


  render() {
    const { config } = this.state;
    const { items, selectedItems } = config;
    const itemsHash = items.reduce((agg, item) => { agg[item.id] = item; return agg; }, {});
    const message = selectedItems.map(id => itemsHash[id].title).join(", ");
    const selectedItemsHash = selectedItems.reduce((agg, id) => { agg[id] = true; return agg; }, {});

    return <>
      <p>Select following items: &nbsp;
        {
          items.map(item => <Fragment key={item.id}>
            <input onChange={(event) => this.update(event, item.id)} type="checkbox" checked={selectedItemsHash[item.id] ? 'checked' : ''} />
            {item.title}
            &nbsp;
          </Fragment>
          )
        }
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
      {message.length > 0 ? <p>User selected following items: {message}</p> : null}
    </>;
  }
}

export default Sample;
