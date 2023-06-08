# Cursor template
Our component is a generic collection control, which supports basic features like single item selection, highlight, and multiple items checking. 
The cursor item is a single item selection. The navigation of the diagram depends on the current cursor item. The cursor is supposed to have some visual elements. By default, it is `div` having a solid `2px` border line around it. 

## Properties:
The component customizes the visual representation of items with `templates`. Every template has customization properties for item content, cursor, and highlight visualizations. By default, if properties are nulls, then the component uses built in default functionality. The following properties customize cursor template:
* `cursorPadding` - Reserves space around item, for example: `{left: 3, top: 3, right: 50, bottom: 3}` will provide extra `50px` on right side of item for cursor content.
* `cursorBorderWidth` - some legacy property, it is used to align cursor position around item properly.
* `onCursorRender` - callback method to render cursor for the  current cursor item of the diagram

See the Item template for more details.

## Cursor item & preserving space for context control panel
The cursor template's general idea is to provide a convenient API to place the context control panel as close to the current cursor node as possible. The conventional approach puts the control panel on the diagram's side and changes its content as the user selects a new cursor item. That approach cutoff screen space out of the diagram layout. A similar approach is to draw a context menu panel on top of the diagram on the selected node's side, but this will obstruct other diagram nodes' view. The compromise design expands space around the cursor node and places context controls into that space, so the cursor template provides a padding option to preserve that required space around the cursor node.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
<OrgDiagram config={
    templates: [{
      name: "contactTemplate",
      cursorPadding: { left: 3, top: 3, right: 3, bottom: 3 },
      cursorBorderWidth: 2,
      onCursorRender: ({ context: itemConfig }) => {
        return <div style={{ borderColor: itemConfig.badgeColor }} />;
      }
    }]
  }
/>
```

## Avoiding conflicts between custom controls & annotations
User controls inside the cursor item template serve as the in-layout annotation, non-blocking neighboring items in the chart. If you consider adding the same UI elements into every visible node, then you need to customize the item template instead. 

Use the z-index style attribute to layer controls properly so other diagram visuals do not block them.

Every time we select a cursor node, the control recalculates the layout, which takes time. The component has many optimizations in this regard. If nothing helps, use dynamic nodes loading, limiting the total number of simultaneously layout nodes.  See the Dynamic Data Loading demo. We permanently show only the top three levels or the diagram and dynamically load and discard nodes in all other rows as the end-user enters and leaves them.

## Custom cursor template border
The following example demonstrates how to create a custom cursor border having item specific color and tag element.

[React Sample](../src/components/Samples/CursorTemplate.js)

