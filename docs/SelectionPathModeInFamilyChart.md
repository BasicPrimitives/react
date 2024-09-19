# Selection path nodes in Family Diagram

## Selected items

Suppose the total square size of items exceeds the available screen size. There is no possibility to show all of them, and the chart should use various strategies to display essential information. By default family diagram shows `cursorItem` and all its neighbors in full size using templates. The same rule applies to selected items and annotated items. For all other non-selected items, the chart conditionally minimizes them into dots or lines.

## Selection path items

The selection path is nodes between selected items and top row nodes in the layered diagram. The developer can show selection path items in full size with property `selectionPathMode` set to `SelectionPathMode.FullStack` or let the layout manager hide them and show them as dots or lines with `SelectionPathMode.None`.


```JavaScript
import { FamDiagram } from basicprimitivesreact;
import { SelectionPathMode } from basicprimitives;

<FamDiagram config={
        selectionPathMode: SelectionPathMode.None
    }
/>
```

[React](../src/Samples/SelectionPathModeInFamilyChart.jsx)
