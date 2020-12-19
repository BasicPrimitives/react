# Highlight template
The diagram component provides built-in support of mouse over feedback for full size items. It is needed for consistent behavior of mouse over feedback for minimized dotted nodes and full size nodes based on templates. By default highlight template is solid `1px` wide border line around item. The general idea about highlight template is to provide convenient API to customize that border line around highlight item.

## Properties:
Component customizes visual representation of items with `templates`, every template has customization properties for item content, cursor and highlight visualizations. By default if properties are not set then component uses built in default functionality. The following properties customize highlight template:
* `highlightPadding` - Reserves space around item, for example: `{left: 3, top: 3, right: 50, bottom: 3}` will provide extra `50px` on right side of item for highlight content.
* `highlightBorderWidth` - some sort of legacy property, it is used to align highlight position around item properly.
* `onHighlightRender` - callback method to render highlight content for given item of diagram

See Item template for more details.

```JavaScript
  onHighlightRender: ({ context: itemConfig }) => {
    return <div style={{ borderColor: itemConfig.badgeColor }} />;
  }
```

## Custom highlight template border
The following example demonstrates how to create custom highlight border having item specific color and tag element.

[React](../src/Samples/HighlightTemplate.js)