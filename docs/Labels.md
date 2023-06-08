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

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
import { Enabled } from basicprimitives;
<OrgDiagram config={
    items: [
        {
            id: 0,
            parent: null,
            title: "James Smith",
            description: "VP, Public Sector",
            label: "James Smith",
            showLabel: Enabled.True
        }
    ]
  }
/>
```

[React Sample](../src/components/Samples/Labels.js)

## Adding labels to the item template
If we need to draw labels for visible items, we can add them to templates. The following example demonstrates how to add an extra property "percent" to the item and render it a label over the item connection line.

[React Sample](../src/components/Samples/ItemTemplateLabel.js)
