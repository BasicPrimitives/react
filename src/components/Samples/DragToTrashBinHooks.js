import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { LCA, Tree, Colors, PageFitMode, Enabled, OrientationType } from 'basicprimitives';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import photos from '../photos';

class Sample extends Component {
  constructor() {
    super();

    this.onRemoveItem = this.onRemoveItem.bind(this);

    this.state = {
      cursorItem: 0,
      highlightItem: 0,
      items: [
        { id: 0, parent: null, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", image: photos.q, itemTitleColor: "#4169e1", phone: "352-206-7599", title: "David Dalton", label: "David Dalton" },
        { id: 1, parent: 0, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", image: photos.w, phone: "505-791-1689", title: "Jeanna White", label: "Jeanna White" },
        { id: 2, parent: 0, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", image: photos.e, phone: "262-215-7998", title: "James Holt", label: "James Holt" },
        { id: 3, parent: null, description: "VP, Server & Tools Marketing and Solutions", email: "thomwill@name.com", image: photos.r, phone: "904-547-5342", title: "Thomas Williams", label: "Thomas Williams" },
        { id: 4, parent: 3, description: "VP, Software & Enterprise Management Division", email: "sarakemp@name.com", image: photos.g, phone: "918-257-4218", title: "Sara Kemp", label: "Sara Kemp" },
        { id: 5, parent: 3, description: "Sr. VP, Software Server System", email: "georduon@name.com", image: photos.x, phone: "434-406-2189", title: "George Duong", label: "George Duong" }
      ]
    }
  }

  onRemoveItem(id) {
    const { items } = this.state;

    this.setState(this.getDeletedItems(items, [id]));
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
    const ItemTypes = {
      NODE: 'node'
    }

    function TrashBinDropTarget({onRemoveItem}) {
      const [{ isOver, canDrop }, dropRef] = useDrop({ 
            accept: ItemTypes.NODE,
            drop(item) {
              onRemoveItem(item.id);
            },
            canDrop() {
                return true;
            },
            collect: (monitor) => ({
                isOver: monitor.isOver({ shallow: true }),
                canDrop: monitor.canDrop()
            }),      
        })
      
        const isActive = canDrop && isOver
        let backgroundColor = '#222'
        if (isActive) {
          backgroundColor = 'red'
        } else if (canDrop) {
          backgroundColor = 'darkgreen'
        }
        const style = {
          height: "50px",
          width: "100%",
          color: 'white',
          textAlign: 'center',
          fontSize: "14px",
          lineHeight: 'normal',
          float: 'left',
          marginBottom: "10px"
        }
        return (
          <div ref={dropRef} style={{ ...style, backgroundColor }}>
            {isActive ? 'Release to delete' : 'Drag a node here to delete'}
          </div>
        )
    }

    function NodeDragSource({ itemConfig }) {
      const [{ opacity }, dragRef] = useDrag({
        type: ItemTypes.NODE,
        item: () => ({id: itemConfig.id }),
        collect: (monitor) => ({
          opacity: monitor.isDragging() ? 0.5 : 1,
        })
      })
      
      const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
      return (
        <div ref={dragRef} className="ContactTemplate" style={{ opacity }}>
          <div className="ContactTitleBackground" style={{ backgroundColor: itemTitleColor }}>
            <div className="ContactTitle">{itemConfig.title}</div>
          </div>
          <div className="ContactPhotoFrame">
            <img className="ContactPhoto" src={itemConfig.image} alt={itemConfig.title} />
          </div>
          <div className="ContactPhone">{itemConfig.phone}</div>
          <div className="ContactEmail">{itemConfig.email}</div>
          <div className="ContactDescription">{itemConfig.description}</div>
        </div>
      )
    }


    const config = {
      ...this.state,
      pageFitMode: PageFitMode.None,

      hasSelectorCheckbox: Enabled.True,
      orientationType: OrientationType.Top,
      defaultTemplateName: "contactTemplate",
      templates: [{
        name: "contactTemplate",
        itemSize: { width: 220, height: 120 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
        onItemRender: ({ context: itemConfig }) => {
          return <NodeDragSource itemConfig={itemConfig} />;
        }
      }]
    }
    return <>
      <DndProvider backend={HTML5Backend}>
        <TrashBinDropTarget onRemoveItem={this.onRemoveItem} />
        <div className="placeholder" style={{ clear: 'both' }} >
          <OrgDiagram centerOnCursor={true} config={config} />
        </div>
      </DndProvider>
    </>;
  }
}

export default Sample;
