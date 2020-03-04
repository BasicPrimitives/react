# Family Connectors Visualization
The core difference between Family diagram and Organizational Chart it is support of multiple parents. This feature derives a lot of complexity and problems. If we look at `OrgDiagram` we may see that connection lines are basically playing no role in the visualization, we don't need to visually trace connection lines between nodes in order to understand their mutual relations. This fact greatly simplifies reading of diagram. The relative nodes placement on hierarchical diagram, additional spaces between branches gives strong visual indication of mutual relations. When we look at family diagram supporting multiple parents this is not the case anymore. Connectors are not secondary elements anymore, now they do provide information about relations between nodes and their excessive number creates visual clutter in diagram, which makes their visualization virtually useless. Look at the following example of complete bipartite graph. Complete means situation when every node in the top layer is connected to every node in the bottom layer.

![Complete Bipartite Graph](images/cbp88.png)

This is definitely extreme example of family relations, but the fact that `FamDiagram` supports multiple parents, makes this usage scenario possible. In order to eliminate this connection lines mass and make relations more understandable the component automatically groups connectors into bundles so it produces following set of relations: 

![Complete Bipartite Graph Bundled](images/cbp88bundled.png)

This visualization is better, but it shows another problem. The big number of parent and children elements does not let user to see them together, so in order to make diagram more compact component supports clustering of nodes into matrix, so that way they occupy least space possible. In order to enable this layout option set `enableMatrixLayout` to `true`.

[React](../src/Samples/MatrixLayoutInFamilyChart.js)

Another typical problem in connectors visualization is excessive grand parents relations. It is situation when item has direct relation to parent, grand parent and grand grand parent. Usually when we draw family diagram we are more interested to show order of dependencies over actual relations. We know that the great-grandparent precedes the grandparent, the grandparent precedes the parent, the parent precedes the child node.  So this precedence defines the indirect relation between child node and grand-grandparent. So direct relation visualization between child node and its grand parents can be omitted out of diagram and replaced with dynamic annotations. Look at the following example where every child references all preceding parents:

![Excessive grand parents relations](images/cbp88everyparent.png)

As you may see component already eliminated a lot of connections via making bundles, so we don't see every connection between nodes, but still this diagram has a lot of connections to trace. In order to hide direct connections to grand parents set option `hideGrandParentsConnectors` to `true` and get following layout:

[React](../src/Samples/FamilyHideGrandParentsConnections.js)

So we got quite clean relations diagram between nodes. We still have all relations in place, the only difference is that grand parents connections go through actual parents, so we need to visualize them dynamically, as we navigate around our diagram we can highlight all current node immediate parents and children with Connector Path Annotations and set custom Item Template for them.

Another major problem is loops in family relations. If we have looped relations between nodes, then there is no difference between them in terms of which of them should be placed on top of the diagram, any item can be on the tom and it is equaly true for all of them. The difference is that we want to have as less backward relations as possible, so we don't need to visualy trace them.

[React](../src/Samples/LoopsInFamilyChart.js)