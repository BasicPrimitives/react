import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { OrgDiagram } from '../Diagrams';
import { LCA, Tree, PageFitMode, Enabled } from 'basicprimitives';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.onAddButtonClick = this.onAddButtonClick.bind(this);
    this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);

    this.state = {
      cursorItem: 0,
      highlightItem: 0,
      items: [
        {
          id: 0,
          parent: null,
          title: "James Smith",
          description: "VP, Public Sector",
          image: "/react/photos/a.png"
        },
        {
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "/react/photos/b.png"
        },
        {
          id: 2,
          parent: 0,
          title: "Fritz Stuger",
          description: "Business Solutions, US",
          image: "/react/photos/c.png"
        },
        {
          id: 3,
          parent: 0,
          title: "Lynne Rathinam",
          description: "GM, Enterprise Services",
          image: "/react/photos/c.png"
        }
      ]
    }

    this.index = this.state.items.length;
  }

  onAddButtonClick(itemConfig) {
    const { items } = this.state;

    var newItem = {
      id: this.index++,
      parent: itemConfig.id,
      title: "New Title",
      description: "New Description",
      image: "/react/photos/z.png"
    };

    this.setState({
      items: [...items, newItem],
      cursorItem: newItem.id
    });
  }

  onRemoveButtonClick(itemConfig) {
    const { items } = this.state;

    this.setState(this.getDeletedItems(items, [itemConfig.id]));
  }

  getDeletedItems(items = [], deletedItems = []) {
    const tree = this.getTree(items);
    const hash = deletedItems.reduce((agg, itemid) => {
      agg.add(itemid.toString());
      return agg;
    }, new Set());
    const cursorParent = this.getDeletedItemsParent(tree, deletedItems, hash);
    const result = [];
    tree.loopLevels(this, (nodeid, node) => {
      if (hash.has(nodeid.toString())) {
        return tree.SKIP;
      }
      result.push(node);
    });

    return {
      items: result,
      cursorItem: cursorParent
    };
  }

  getDeletedItemsParent(tree, deletedItems, deletedHash) {
    let result = null;
    const lca = LCA(tree);
    result = deletedItems.reduce((agg, itemid) => {
      if (agg == null) {
        agg = itemid;
      } else {
        agg = lca.getLowestCommonAncestor(agg, itemid);
      }
      return agg;
    }, null);

    if (deletedHash.has(result.toString())) {
      result = tree.parentid(result);
    }
    return result;
  }

  getTree(items = []) {
    const tree = Tree();

    // rebuild tree
    for (let index = 0; index < items.length; index += 1) {
      const item = items[index];
      tree.add(item.parent, item.id, item);
    }

    return tree;
  }

  render() {
    const config = {
      ...this.state,
      pageFitMode: PageFitMode.None,
      hasSelectorCheckbox: Enabled.True,
      hasButtons: Enabled.True,
      buttonsPanelSize: 40,
      onButtonsRender: (({ context: itemConfig }) => {
        return <>
          <button key="1" className="StyledButton"
            onClick={(event) => {
              event.stopPropagation();
              this.onAddButtonClick(itemConfig);
            }}>
            <FontAwesomeIcon icon={faUserPlus} />
          </button>
          <button key="2" className="StyledButton"
            onClick={(event) => {
              event.stopPropagation();
              this.onRemoveButtonClick(itemConfig);
            }}>
            <FontAwesomeIcon icon={faUserSlash} />
          </button>
        </>
      })
    };

    return <div className="placeholder">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div >
  }
}

export default Sample;
