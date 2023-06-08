# First Organizational Chart for ReactJS

Basic Primitives Diagrams for React - data visualization component library that implements organizational chart and multi-parent dependency tree diagrams. It renders nodes using ReactJS Virtual DOM without direct DOM manipulations, so it compliant with all React features and popular react extensions like [React Drag & Drop](http://react-dnd.github.io/react-dnd/about) and [React Context](https://reactjs.org/docs/context.html)

Our site contains samples and demo published on GitHub. The recommended way to get familiar with our library is to clone our GitHub [React Sample](https://github.com/BasicPrimitives/react) repository and run it locally. It contains simple, single-page examples. If you need to see more complex end to end applications developed in ReactJS using hooks and Redux state management, then clone our GitHub [react-demos](https://github.com/BasicPrimitives/react-demo) repository

## NPM packages:
Use the following commands to import our components from npm packages. 
```JavaScript
import React, { Component } from 'react';
import { OrgDiagram } from 'basicprimitivesreact';
import { Enabled, PageFitMode } from 'basicprimitives';
```
* `basicprimitivesreact` - react components
* `basicprimitives` - the core of the library which contains common configuration objects and enumerations.

[React Sample](../src/components/Samples/FirstOrganizationalChart.js)

## Create React App Sample
The diagramming components work in React applications created with [`create-react-app`](https://facebook.github.io/create-react-app/), use the following steps to create and run the first diagram:

```
npx create-react-app test1
cd test1

yarn add basicprimitivesreact

yarn start
```

Add following changes into App.js

```JavaScript
import React from 'react';
import { OrgDiagram } from 'basicprimitivesreact';
import { PageFitMode, Enabled } from 'basicprimitives';
 
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
 
function App() {
  const config = {
    pageFitMode: PageFitMode.AutoSize,
    autoSizeMinimum: { width: 100, height: 100 },
    cursorItem: 0,
    highlightItem: 0,
    hasSelectorCheckbox: Enabled.True,
    items: [
      {
        id: 0,
        parent: null,
        title: 'James Smith',
        description: 'VP, Public Sector',
        image: photos.a
      },
      {
        id: 1,
        parent: 0,
        title: 'Ted Lucas',
        description: 'VP, Human Resources',
        image: photos.a
      },
      {
        id: 2,
        parent: 0,
        title: 'Fritz Stuger',
        description: 'Business Solutions, US',
        image: photos.a
      }
    ]
  };
 
  return (
    <div className="App">
      <OrgDiagram centerOnCursor={true} config={config} />
    </div>
  );
}
 
export default App;
```
