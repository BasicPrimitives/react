# Cursor Item & Mouse click
Basic Primitives Diagrams have API properties equivalent to regular collection components:
* `cursorItem` - is used to select single item in diagram with mouse click
* `highlightItem` - provides visual feed back for mouse over
* `selectedItems` - collection is equivalent to checked marked items in ListView or TreeView controls.

## Diagram navigation
Chart navigation depends on current cursor item, chart shows all parents of cursor item up to the root, its immediate children and siblings in full size mode, all other items can be folded into dots depending on available space. So cursor item plays a role of local zoom in the chart hierarchy. User navigates around chart via clicking and moving cursor item around and zooming into data around new cursor item.

## Events
The following example shows how to set cursor item programmatically and handle notifications about users navigation in chart with `onCursorChange` event. It is coupled with preceding `onCursorChanging` event, which can be used in applications to make application state changes and avoid components internal state change and unnecessary layout updates. 

If you want to avoid internal component state update and following rendering cycle then you have to return 'true' from `onCursorChanging` event handler:

```JavaScript
  <OrgDiagram onCursorChanging={(event, data) => {
        const { context } = data;
        setCursorItem(context.id);
        // Return true in order to suppress set cursor item in control
        // it will be updated via subsequent state change and rendering event
        return true;
      }} />
```

## Force center on cursor
Component has special property `centerOnCursor` this property needed to force component center diagram to current cursor item, this is needed when application needs to recenter diagram on current unchanged cursor item again, by default it is set to `false`.

## Disabling cursor for individual items
If you need to disable mouse click for some item set `isActive` property of item config or template config to 'false'. See "Inactive items" use case.  

## Disabling component interactivity
If you need to disable completely mouse interactivity in Widget you have to set `cursorItem` and `highlightItem` properties into `null` and set `navigationMode` option to `NavigationMode.Inactive`

## Keyboard navigation
The component is keyboard focusable. So when it gets focus with TAB or mouse click there is blue "outline" around it indicating keyboard focus. The component supports keyboard arrows to select highlighted item and keyboard "Enter" to set cursor. So when control gets focus user has to use arrows to highlight item and then press enter to set cursor to it.

Take into account that item template may contain HTML elements supporting keyboard focus and keyboard commands as well.

[React](../src/Samples/SelectingCursorItem.js)
