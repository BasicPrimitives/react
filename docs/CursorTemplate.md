# Cursor template
The diagram in general is collection component, so it supports concept of current cursor item, which enables navigation related functionality. The current cursor item is supposed to have visual feedback on diagram, by default it is solid `2px` wide border line around it. The general idea about cursor template is to provide convenient API to customize that border line around cursor item.

## Properties:
Component customizes visual representation of items with `templates`, every template has customization properties for item content, cursor and highlight visualizations. By default if properties are not set then component uses built in default functionality. The following properties customize cursor template:
* `cursorPadding` - Reserves space around item, for example: `{left: 3, top: 3, right: 50, bottom: 3}` will provide extra `50px` on right side of item for cursor content.
* `cursorBorderWidth` - some sort of legacy property, it is used to align cursor position around item properly.
* `onCursorRender` - callback method to render cursor content for given item of diagram

See Item template for more details.

```JavaScript
  onCursorRender: ({ context: itemConfig }) => {
    return <div style={{ borderColor: itemConfig.badgeColor }} />;
  }
```

## Cursor item & preserving space for context control panel
The conventional approach is to place controls for current cursor item in diagram in the panel on the side of the diagram and change its content as user navigates from item to item, this approach takes a cut of screen space out of the diagram layout. The similar approach is to draw context menu panel on top of the diagram on the side of the cursor item, but this obstructs view of other diagram nodes. The compromise UI design is to expand space around cursor node and place context controls into that space, so cursor template provides `cursorPadding` property to preserve that required space around cursor node.

```JavaScript
  <OrgDiagram config={{
    cursorPadding: {left: 3, top: 3, right: 50, bottom: 3}
  }} />
```

## Avoiding conflicts between custom controls & annotations
User controls in cursor item template plays a role of in-layout annotation, non-blocking neighboring items in diagram. In case when every full size item is supposed to have UI controls then item template should be customized instead. Use `z-index` style attribute to layer controls properly, otherwise they can be blocked by annotations. Ideally only cursor item should have controls inside, so annotations will not be drawn over edit boxes or drop down combo boxes. If you draw connector annotations only for current cursor item, then you avoid conflicts with annotations.

Every time we change cursor node control recalculates layout, so this slows down rendering of large diagram. Our design view on this problem is to limit number of simultaneously shown nodes in diagram. Control provides default mechanism to reduce nodes into dots, but general approach is to replace groups of diagram nodes with single node and expand them as user moves cursor close to them. This kind of design approach is implemented in Dynamic Data Loading demo.

## Custom cursor template border
The following example demonstrates how to create custom cursor border having item specific color and tag element.

[React](../src/Samples/CursorTemplate.js)

