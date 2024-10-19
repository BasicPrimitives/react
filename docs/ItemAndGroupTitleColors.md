# Item & group title colors

Item's title background color may be used for indicating the group of nodes in the diagram and may vary in a wide range of colors. At the same time, the title font color should always be readable on every background. So taking these considerations into account, the control has two options setting font color for node titles: `itemTitleFirstFontColor` and `itemTitleSecondFontColor`. The control selects the most readable font color using the `highestContrast` function.  It returns the highest contrast color from two on the given background color.

See reference for group title size, placement, and orientation.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
import { Enabled, Colors, TextOrientationType } from basicprimitives;
<OrgDiagram config={
    itemTitleFirstFontColor: Colors.Yellow,
    itemTitleSecondFontColor: Colors.Blue,
    groupTitleOrientation: TextOrientationType.RotateRight,
    items: [
      {
          id: 1,
          parent: 0,
          title: "Ted Lucas",
          description: "VP, Human Resources",
          image: "./photos/b.png",
          itemTitleColor: Colors.Green,
          groupTitle: "Group 2",
          groupTitleColor: Colors.Gray
      }
    ]
  }
/>
```

[React](../src/Samples/ItemAndGroupTitleColors.jsx)
