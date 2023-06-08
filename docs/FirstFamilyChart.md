# First Family Chart for ReactJS

Basic Primitives Diagrams for React - data visualization component library that implements organizational chart and layered multi-parent dependency tree diagrams. It renders nodes using ReactJS Virtual DOM without direct DOM manipulations, so it compliant with all React features and popular react extensions like [React Drag & Drop](http://react-dnd.github.io/react-dnd/about) and [React Context](https://reactjs.org/docs/context.html)

Our site contains samples and demo published on GitHub. The recommended way to get familiar with our library is to clone our GitHub [React Sample](https://github.com/BasicPrimitives/react) repository and run it locally. It contains simple, single-page examples. If you need to see more complex end to end applications developed in ReactJS using hooks and Redux state management, then clone our GitHub [react-demos](https://github.com/BasicPrimitives/react-demo) repository


## Organizational chart vs. Family Diagram
First of all, the Family diagram is not the best name for the control. It is a layered dependencies visualization component, supporting multiple parents and loops in nodes relations. 
The family diagram shares a lot of features with the organizational chart diagram. See the organizational chart specific samples:
* First Organizational Chart - describes how to create, update and destroy controls.
* Adding new items at run-time - explains how to modify diagram items collection.
* Placement and auto-sizing - shows how to resize diagram on page resize
* Etc.

The main difference of the family diagram compared to the organizational chart is the support of multiple parents. The organizational chart uses a regular tree structure of items, where every item has a reference to the single logical parent. Every branch of the tree structure is independent, so it is possible to place children in custom locations relative to their parents and group children into various formations. 

Now, let's look at the family diagram where every item may belong to multiple parents. There is no such thing as a single parent anymore, so it is impossible to define child placement relative to its numerous parents. So the organizational chart is a simple tree structure enhanced with layout customizations. If your data is a tree structure, we recommend staying within the Organizational chart API functionality as long as possible. Your chart structure is going to be simple to understand for end-users. The organizational chart provides limited multiple parent's support with partner item types. It provides on-screen annotations to show non-hierarchical relations between nodes of your tree. It supports numerous root items to place multiple organizational charts side by side, so you can define relations between several hierarchies within a single diagram or display broken tree structure having missing parent references. 

It would be best if you considered using the family diagram API in cases where the node's parents are equal in value when there is no significant difference in which parent of your node has higher priority.  So the Family diagram supports multiple parents, but it lacks usage of custom item types. The family diagram can shape a group of nodes having a shared set of parents and children into the matrix formation. Still, you cannot specify the children's layout for the specific parent.

The family diagram provides some features specific to multi-parent layout, not available in the organizational chart. For example, it supports in-layout cascades of labels over connections between parents and children. 

You can guide the family diagram control on how to order nodes in layout relative to each other. You can define the preferred parent node when it is impossible to place the node equally close to its parents. This layout hints help you define logical relations between nodes of the family diagram, so it does not change layout dramatically every time we add a new node into it. 

The following is the copy-paste of the "First Organization Chart" sample, but for the family diagram. See the organizational chart sample for more technical details.

[React Sample](../src/components/Samples/FirstFamilyChart.js)

## Create React App Sample

Package is designed to work within React application created with [`create-react-app`](https://facebook.github.io/create-react-app/)

```
npx create-react-app test1
cd test1

yarn add basicprimitivesreact

yarn start
```

Add following changes into App.js

```JavaScript
import React, { Component } from 'react';
import { FamDiagram } from '../Diagrams';
import { GroupByType, PageFitMode, Enabled } from 'basicprimitives';

var photos = {
  a: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARn' + 
  'QU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxIC' + 
  'RTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dh' + 
  'ls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0e' + 
  'ut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+' + 
  '0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr6' + 
  '5tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxt' + 
  'iPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII='
};

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: PageFitMode.None,
      cursorItem: 2,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: Enabled.True,
      normalLevelShift: 20,
      dotLevelShift: 20,
      lineLevelShift: 20,
      normalItemsInterval: 10,
      dotItemsInterval: 10,
      lineItemsInterval: 10,
      arrowsDirection: GroupByType.Parents,
      showExtraArrows: false,
      items: [
				{ id: 1, title: "Thomas Williams", label: "Thomas Williams", description: "1st husband", image: photos.a },
				{ id: 2, title: "Mary Spencer", label: "Mary Spencer", description: "The Mary",image: photos.a },
				{ id: 3, title: "David Kirby", label: "David Kirby", description: "2nd Husband", image: photos.a },
				{ id: 4, parents: [1, 2], title: "Brad Williams", label: "Brad Williams", description: "1st son", image: photos.a },
				{ id: 5, parents: [2, 3], title: "Mike Kirby", label: "Mike Kirby", description: "2nd son, having 2 spouses", image: photos.a},
				{ id: 6, title: "Lynette Maloney", label: "Lynette Maloney", description: "Spouse I", image: photos.a },
				{ id: 11, parents: [5, 6], title: "Steven Powell", label: "Steven Powell", description: "1st son", image: photos.a },
				{ id: 7, title: "Sara Kemp", label: "Sara Kemp", description: "Spouse II", image: photos.a },
				{ id: 12, parents: [5, 7], title: "John Smith", label: "John Smith", description: "2ns son", image: photos.a },
				{ id: 8, parents: [7], title: "Leon Kemp", label: "Leon Kemp", description: "", image: photos.a }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
```