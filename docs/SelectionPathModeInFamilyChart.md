# Selection Path Mode In Family Diagram

## Selected items

If total square size of items exceeds available screen size, there is no possibility to show all of them and chart should use various strategies to show the most important information. By default family diagram shows `cursorItem` and all its neighbours in full size using templates. The same rule applies to selected items and annotated items. For all other non-selected items chart conditionally minimizes them into dots or lines.

## Selection path items

Selection path is a collection of items between selected item and its parents up to the first level in the layered diagram. Selected items are defined with `selectedItems` collection property. Developer can force to show selection path items in full size with property `selectionPathMode` set to `SelectionPathMode.FullStack` or permit layout manager to collapse them into dots or lines with `SelectionPathMode.None`.

[React](../src/Samples/SelectionPathModeInFamilyChart.js)
