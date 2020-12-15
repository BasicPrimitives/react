import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { LCA, Tree, Colors, PageFitMode, Enabled, OrientationType } from 'basicprimitives';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

class Container extends Component {
  render() {
    const ItemTypes = {
      NODE: 'node'
    }

    function NodeDragDropSource({ itemConfig, canDropItem, onDropItem, isDragging }) {
      const [{ opacity }, dragRef] = useDrag({
        item: { type: ItemTypes.NODE, id: itemConfig.id },
        collect: (monitor) => ({
          opacity: monitor.isDragging() ? 0.5 : 1
        })
      })
      const [{ isOver, canDrop }, drop] = useDrop({ 
            accept: ItemTypes.NODE,
            drop(item, monitor) {
                const didDrop = monitor.didDrop();
                if (didDrop && item.id === itemConfig.id) {
                    return;
                }
                onDropItem(itemConfig.id, item.id);
            },
            canDrop(item, monitor) {
                return canDropItem(itemConfig.id, item.id);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver({ shallow: true }),
                canDrop: monitor.canDrop()
            }),      
        })
      
      let itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
      if (isOver) {
        if (canDrop) {
          itemTitleColor = "green";
        } else {
          itemTitleColor = "red";
        }
      }

      return (
        <div ref={drop} style = {{width: "100%", height: "100%"}}>
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
        </div>
      )
    }

    class Sample extends Component {
      constructor() {
        super();

        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.canDropItem = this.canDropItem.bind(this);
        this.onMoveItem = this.onMoveItem.bind(this);

        this.state = {
          cursorItem: 0,
          highlightItem: 0,
          items: [
            { id: 0, parent: null, description: "Chief Executive Officer (CEO)", email: "davidalt@name.com", image: "/react/photos/q.png", itemTitleColor: "#4169e1", phone: "352-206-7599", title: "David Dalton", label: "David Dalton" },
            { id: 1, parent: 0, description: "Co-Presidents, Platform Products & Services Division", email: "jeanwhit@name.com", image: "/react/photos/w.png", phone: "505-791-1689", title: "Jeanna White", label: "Jeanna White" },
            { id: 2, parent: 0, description: "Sr. VP, Server & Tools Division", email: "jameholt@name.com", image: "/react/photos/e.png", phone: "262-215-7998", title: "James Holt", label: "James Holt" },
            { id: 3, parent: null, description: "VP, Server & Tools Marketing and Solutions", email: "thomwill@name.com", image: "/react/photos/r.png", phone: "904-547-5342", title: "Thomas Williams", label: "Thomas Williams" },
            { id: 4, parent: 3, description: "VP, Software & Enterprise Management Division", email: "sarakemp@name.com", image: "/react/photos/g.png", phone: "918-257-4218", title: "Sara Kemp", label: "Sara Kemp" },
            { id: 5, parent: 3, description: "Sr. VP, Software Server System", email: "georduon@name.com", image: "/react/photos/x.png", phone: "434-406-2189", title: "George Duong", label: "George Duong" }
          ]
        }
      }

      onMoveItem(parentid, itemid) {
        const { items } = this.state;

        this.setState({
          cursorItem: itemid,
          items: (items.map(item => {
            if (item.id === itemid) {
              return {
                ...item,
                parent: parentid
              }
            }
            return item;
          }))
        })
      }

      canDropItem(parentid, itemid) {
        const { items } = this.state;
        const tree = this.getTree(items);
        let result = parentid !== itemid;
        tree.loopParents(this, parentid, function (id, node) {
          if (id === itemid) {
            result = false;
            return true;
          }
        });
        return result;
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
          orientationType: OrientationType.Top,
          defaultTemplateName: "contactTemplate",
          templates: [{
            name: "contactTemplate",
            itemSize: { width: 220, height: 120 },
            minimizedItemSize: { width: 3, height: 3 },
            highlightPadding: { left: 2, top: 2, right: 2, bottom: 2 },
            onItemRender: ({ context: itemConfig }) => {
              return <NodeDragDropSource
                itemConfig={itemConfig}
                onRemoveItem={this.onRemoveItem}
                canDropItem={this.canDropItem}
                onDropItem={this.onMoveItem}
              />;
            }
          }]
        }
        return <>
          <div className="placeholder" style={{ clear: 'both' }} >
            <OrgDiagram centerOnCursor={true} config={config} />
          </div>
        </>;
      }
    }

    return <DndProvider backend={HTML5Backend}>
      <Sample />
    </DndProvider>
  }
}


export default Container;
