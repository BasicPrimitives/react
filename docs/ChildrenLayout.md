# Children Layout
Children Placement Layout can be defined individually per item or globally for all chart items. Following chart and item config properties are used to define the layout of children:

* `childrenPlacementType` - this property is available for the chart and individual items. It defines the shape of children with the `ChildrenPlacementType` enumeration, which has the following options `Vertical`, `Horizontal` & `Matrix`
* `leavesPlacementType` - this option is available only at the global chart level. It controls children's layout with no own children, so it is only for children of the hierarchy's last level.
* `maximumColumnsInMatrix` - by default, matrixed children form square formation. If square formation grows beyond the screen's width, it becomes inconvenient since the end-user needs to scroll that matrix both vertically and horizontally. Use this option to limit the maximum number of columns so that matrix would grow vertically only.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
import { ChildrenPlacementType } from basicprimitives;
<OrgDiagram config={
    maximumColumnsInMatrix: 2,
    leavesPlacementType: ChildrenPlacementType.Matrix,
    childrenPlacementType: ChildrenPlacementType.Matrix, // Globally
    items: [
      {
        id: 0,
        parent: null,
        title: "James Smith",
        description: "VP, Public Sector",
        image: "./photos/a.png",
        childrenPlacementType: ChildrenPlacementType.Matrix // Individually
      }
    ]
  }
/>
```

[React](../src/Samples/ChildrenPlacementType.jsx)

# Placing children into multiple horizontal levels
To programmatically place children nodes into multiple rows, use the `levelOffset` property. Child nodes would be grouped by that property and placed in rows. If level offsets defined for children have gaps, then the control would preserve empty row, so different branches and teams of the same organizations would be properly aligned.  See the matrixed layout demo for the matrixed team structure in the organization.


If you use the `levelOffset` property, then the children's last row is only shaped into matrixed or vertical formation by the `childrenPlacementType` property setting. 

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
import { ChildrenPlacementType } from basicprimitives;
<OrgDiagram config={
    items: [
      {
        id: 1,
        parent: null,
        title: "James Smith",
        description: "VP, Public Sector",
        image: "./photos/a.png",
        childrenPlacementType: ChildrenPlacementType.Horizontal
      },
      {
        id: 2,
        parent: 1,
        title: "James Smith",
        description: "VP, Public Sector",
        image: "./photos/a.png",
        levelOffset: 0
      },
      {
        id: 3,
        parent: 1,
        title: "James Smith",
        description: "VP, Public Sector",
        image: "./photos/a.png",
        levelOffset: 1
      }
    ]
  }
/>
```

[React](../src/Samples/ChildrenAndAssistantsLevelOffset.jsx)
