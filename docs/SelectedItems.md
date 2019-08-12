# Selected items & Check boxes
Basic Primitives Diagrams have API properties equivalent to regular collecion components:
* `cursorItem` - is used to select single item in diagram with mouse click
* `highlightItem` - provides visual feed back for mouse over
* `selectedItems` - collection is equivalent to check marked items in ListView or TreeView controls.

Selected items is a collection of items ids having checked their check boxes. Chart always shows selected items in full size form. So this can be convenient for navigation and pinning nodes in order to keep them in full size. 

Selected items can be used for example when we need to display cross functional working group in organization hierarchy or visualize large mail recipients list in organization by groups and seniority. Usually as number of people exceeds 10 it is hard to say who is enlisted in subscription except active participants.

Collection of `selectedItems` contains item id's. Component notifies about changes in this collection with `onSelectionChanged` event.

Following example demonstrates how to programmatically select items in organizational chart and get notified about changes in selection.

[React](../src/Samples/SelectedItems.js)
