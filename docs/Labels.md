# Labels

## Minimized items labels
Chart supports rendering labels for minimized dotted items. The following properties on `config` used to control labels rendering: 
* `showLabels`
* `labelSize`
* `labelOffset`
* `labelOrientation`
* `labelPlacement`

User can customize labels per individual item with `ItemConfig` properties: 
* `label`
* `showLabel`

[React](../src/Samples/Labels.js)

## Adding labels to item template
If we need to draw labels for full sized items we can add them to templates. Following example demonstrates how to add an extra property "percent" to items and render it as a label over item connection line.

[React](../src/Samples/ItemTemplateLabel.js)
