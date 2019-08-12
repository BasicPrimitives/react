# Highlight item & Mouse over feedback
Highlight provides visual feed back for mouse over or indicates current item of keyboard focus in chart. Highlight item can be used to synchronize other UI elements with chart and show some extra immediate information about item without changing cursor position. Widget notifies about highlight item change with `onHighlightChange` event. Current highlight item in chart is defined with `highlightItem` property and indicates current item close or under mouse cursor. 

## Highlight gravity radius
The normal item has mouse over feedback in form of highlight border only when mouse pointer is inside of its boundaries. 
When item is minimized its marker can be so small that it is going to be difficult for end user to place mouse pointer inside of it, so `highlightGravityRadius` property defines highlight gravity radius, so minimized item gets highlighted when mouse pointer does not overlap marker but it is within boundaries of its gravity radius. This property is ignored when nearest item is outside of screen boundaries and not visible to end user.

## Events
The following example shows how to set highlight item programmatically and handle notifications about users navigation in chart with `onHighlightChange` event. It is coupled with preceding `onHighlightChanging` event, which can be used in applications to make application state changes and avoid components internal state change and unnecessary layout updates. 

If you want to avoid internal component state update and following rendering cycle then you have to return 'true' from `onHighlightChanging` event handler:

```JavaScript
  <OrgDiagram onhighlightChanging={(event, data) => {
        const { context } = data;
        setHighlightItem(context.id);
        // Return true in order to suppress set highlight item change in control
        // it will be updated via subsequent state change of application
        return true;
      }} />
```

## Disabling highlight in diagram
If you need to disable highlight you have to set `highlightItem` option to `null` and `navigationMode` to `primitives.common.NavigationMode.CursorOnly`

## Keyboard navigation
The component is keyboard focusable. So when it gets focus with TAB or mouse click there is blue "outline" around it indicating keyboard focus. The component supports keyboard arrows to select highlighted item and "enter" to set cursor. So when component gets focus user has to use arrows to highlight item and then press enter to set cursor to it.

Take into account that item template may contain HTML elements supporting keyboard focus and keyboard commands as well.

[React](../src/Samples/SelectingHighlightItem.js)
