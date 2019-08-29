# First Family Chart

Basic Primitives Diagrams for React - data visualization component library that implements organizational chart and multi-parent dependency diagrams. It renders diagrams using React Virtual DOM without direct DOM manipulations, so it complient with all React features and popular react extensions like [React Drag & Drop](http://react-dnd.github.io/react-dnd/about)

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
import primitives from 'basicprimitives';

var photos = {
  a: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxICRTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dhls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0eut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr65tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxtiPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII='
}

class Sample extends Component {
  render() {
    const config = {
      pageFitMode: primitives.common.PageFitMode.None,
      cursorItem: 2,
      linesWidth: 1,
      linesColor: "black",
      hasSelectorCheckbox: primitives.common.Enabled.True,
      normalLevelShift: 20,
      dotLevelShift: 20,
      lineLevelShift: 20,
      normalItemsInterval: 10,
      dotItemsInterval: 10,
      lineItemsInterval: 10,
      arrowsDirection: primitives.common.GroupByType.Parents,
      showExtraArrows: false,
      items: [
        { id: 1, spouses: [2], title: "Thomas Williams", label: "Thomas Williams", description: "1, 1st husband", image: photos.a },
        { id: 2, spouses: [], title: "Mary Spencer", label: "Mary Spencer", description: "2, The Mary", image: photos.a },
        { id: 3, spouses: [2], title: "David Kirby", label: "David Kirby", description: "3, 2nd Husband", image: photos.a },
        { id: 4, parents: [1, 2], title: "Brad Williams", label: "Brad Williams", description: "4, 1st son", image: photos.a },
        { id: 5, parents: [2, 3], spouses: [6, 7], title: "Mike Kirby", label: "Mike Kirby", description: "5, 2nd son, having 2 spouses", image: photos.a },
        { id: 6, title: "Lynette Maloney", label: "Lynette Maloney", description: "5, Spouse I", image: photos.a },
        { id: 7, title: "Sara Kemp", label: "Sara Kemp", description: "5, Spouse II :-)", image: photos.a },
        { id: 8, parents: [7], title: "Leon Kemp", label: "Leon Kemp", description: "5, Orphant", image: photos.a }
      ]
    };

    return <div className="placeholder">
      <FamDiagram centerOnCursor={true} config={config} />
    </div>
  }
}

export default Sample;
```

## Oraganizational chart vs. Family Diagram
Family diagram shares a lot of common features with Organizational chart. The main difference of family diagram compared to organizational chart is support of multiple parents. Organizational chart is defined with a regular tree structure of items, where every branch is independent, so it makes possible to place children to custom locations relative to their parent and group children into various shapes. It is possible in organizational chart since its nodes have no logical connections between branches. If we look at family diagram where every item may belong to multiple parents, there is no such thing as single parent anymore, so it is impossible to define children shape layout in parent node, since it create ambiguity in API. So organizational chart is a simple tree structure enhanced with layout customizations, so if your data has distinct core tree structure then we recommend you to stay within organizational chart API functionality as long as it possible. Your chart structure is going to be simple for understanding to end users. At the same time organizational chart provides limited multiple parents support with partner item types, it has on screen annotations to show relations between various branches of your tree, it supports multiple root items, so you can place multiple organizational charts side by side and imitate multiple inheritance for some extend. If we are in situation when our data have multiple parents equal in logical value then it makes sense to switch to family diagram. Family diagram supports multiple parents but it lacks usage of custom item types due to API ambiguity. 

## Family Diagram Specific Features
* Matrix Nodes Layout - nodes having common set of parents and children can be shaped into matrix.
* In layout cascades of lables - label annotation over connector lines
* Loops - loop references between nodes
* Hiding grand parent connections - if node is accessable via other node then direct connection can be eliminated to minimize clutter

[React](../src/Samples/FirstFamilyChart.js)
