# Optimization of loops in layered graph visualization

If relations between nodes form loops, the control tries to find a layout minimizing the number of links going in the opposite direction. 
This optimization is optional and can be disabled. For example, if you have two nodes A and B, referencing each other, it is unclear which node will be above the other one in the diagram. To match node order in the diagram layers to their order in items collection, set option `loopsLayoutMode` to `LoopsLayoutMode.KeepItemsOrder`.


```JavaScript
import { FamDiagram } from basicprimitivesreact;
import { LoopsLayoutMode } from basicprimitives;
<OrgDiagram config={
        loopsLayoutMode: LoopsLayoutMode.KeepItemsOrder
    }
/>
```

[React](../src/Samples/LoopsInFamilyChart.js)
