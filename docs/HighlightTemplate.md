# Highlight template
The diagram component provides built-in support of mouse over visual feedback over nodes. Minimized nodes have no HTML content, so the only way to create highlight is to have a custom HTML element dedicated to the mouse over visual feedback. 
The default highlight template is `div`, having a solid `1px` borderline around.

## Properties:
The component customizes the visual representation of items with `templates`. Every template has customization properties for item content, cursor, and highlight visualizations. By default, if properties are nulls, then the component uses built-in default functionality. The following properties customize  highlight template:
* `highlightPadding` - reserves space around item, for example: `{left: 3, top: 3, right: 50, bottom: 3}` will provide extra 50 pixel on right side of item for highlight content.
* `highlightBorderWidth` is a legacy property. We use it to align highlight position around item properly.
* `onHighlightRender` - callback method to render highlight content for given item of diagram

See the Item template for more details.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
<OrgDiagram config={
    templates: [{
      name: "contactTemplate",
      itemSize: { width: 120, height: 100 },
      highlightPadding: { left: 4, top: 4, right: 4, bottom: 4 },
      highlightBorderWidth: 2,
      onHighlightRender: ({ context: itemConfig }) => {
        return <div style={{ borderColor: itemConfig.badgeColor }} />;
      }
    }]
  }
/>
```

## Custom highlight template border
The following example demonstrates how to create a custom highlight border having item dependent color and tag element.

[React Sample](../src/components/Samples/HighlightTemplate.js)