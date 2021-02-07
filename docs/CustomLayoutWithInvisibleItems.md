# Custom layout with Invisible items
The logical parent-children relations between items define chart navigation. When we select the new cursor item, all its children and parents become visible in the diagram so that the user can continue navigation further down or up in the hierarchy. When children or parents are invisible, we display children of children and parents of parents. This feature, combined with custom item types and children layouts, provides excellent flexibility for the custom children's configurations.

The following example demonstrates how to use invisible items to arrange children attached to one parent item into multiple groups. It has two rows of assistants and two levels of children. To implement this layout, we create two hidden nodes of the regular item type. Set the `isVisible` property of the item configuration object to false to make the node invisible.  Children of invisible items logically belong to their parents. In our case, it is the organizational chart's root item. When we set the cursor to the root node, all items in the diagram become logical children of the root node and visible. So the end-user may move the cursor to them directly.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
<OrgDiagram config={
    items: [
      {
        id: 1,
        parent: null,
        title: "James Smith",
        description: "VP, Public Sector",
        image: "/react/photos/a.png",
        isVisible: false
      }
    ]
  }
/>
```

See custom item types, children layout, and inactive items samples as well. 

[React](../src/Samples/CustomLayoutWithInvisibleItems.js)

## Skipped Levels

We can use hidden items to skip levels in the organizational chart as well. The hidden nodes occupy space, so we can use them to shift child items down one row relative to their parents. 

Use the `levelOffset` option of the item configuration object to arrange regular children into rows.

[React](../src/Samples/SkippedLevels.js)

