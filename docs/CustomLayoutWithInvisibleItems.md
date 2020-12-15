# Custom layout with Invisible items
Organizational chart navigation is defined by parent-children relations between items. When user selects cursor item, component shows all its neighbours i.e. children, parents and siblings in full size, so user can proceed navigation from item to item in diagram. The invisible items are not shown in layout so they cannot be shown in full size, so chart shows all neighbours of invisible items in full size instead. This feature combined with custom item types and children layouts provides great flexibility to visualize various logical parent child relations.

Following example demonstrates how to use invisible items to display multiple groups of children attached to one parent item. It has two rows of assistants and two levels of children. In order to implement this layout we create two invisible items of regular item type. Children of invisible items logically belong to their parent in our case it is root item of organizational chart, so when cursor is set to root then all items in chart become selected and displayed in full size, so user may navigate to any of them directly.

See custom item types, children layout and inactive items samples as well.

[React](../src/Samples/CustomLayoutWithInvisibleItems.js)

## Skipped Levels

Invisible items can be used to skip levels in organizational chart. This is actually workaround, invisible items occupy space, so they can be used to shift children items down one level relative to their parents. See `OrgItemConfig.isVisible` property.

[React](../src/Samples/SkippedLevels.js)

