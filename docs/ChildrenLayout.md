# Regular Children Layout

Children Placement Layout can be defined individually per item or globally for all chart items. Following component and individual items properties are used to define layout of the children:

* `childrenPlacementType` - this property is available for chart and for individual items, it defines shape of children with enumeration `primitives.common.ChildrenPlacementType` it provides following options `Vertical`, `Horizontal` & `Matrix`
* `leavesPlacementType` - this option is available only at component scope and it is used to control children layout having no sub children, so it is only for children of the last level in hierarchy.
* `maximumColumnsInMatrix` - by default children in matrix are shaped into square, in order to form them into rectangular shape you have to limit maximum number of columns in matrix, so rectangular shape would grow vertically.

In general children layouts are all matrix, the only difference is that horizontal layout has only one row and vertical layout has only one column.

The `maximumColumnsInMatrix` value should limit children matrix growth outside of the view port width, in order to avoid the necessety of simultanious horizontal and vertical scrolling of nodes. Keeping square shape of nodes is good for small matrixes which easely fit into view port, but large groups of children are better shaped into wide columns.

[React](../src/Samples/ChildrenPlacementType.js)

# Placing children into multiple horizontal levels
Children nodes can be placed into multiple rows with `levelOffset` property. Child nodes would be grouped by that property and placed in rows. Only the last row of children is effected by `childrenPlacementType` property setting their formation.

[React](../src/Samples/ChildrenAndAssitantsLevelOffset.js)
