[![npm package](https://img.shields.io/npm/v/basicprimitives.svg?label=basicprimitivesreact)](https://www.npmjs.com/package/basicprimitivesreact)
# [Basic Primitives](https://www.basicprimitives.com) Diagrams for React

Data visualization components library that implements organizational chart and multi-parent dependency diagrams. 


## Supported Diagrams

* Tree
* Hierarchy Visualization
* Organizational Chart
* Multi-parent hierarchical chart
* Family Tree
* Dependencies Diagram
* PERT chart
* Financial Ownership Diagram

## Getting Started
* [http://www.basicprimitives.com](https://www.basicprimitives.com) project home.
* [NPM](https://www.npmjs.com/package/basicprimitives-react) release package.
* [GitHub](https://github.com/BasicPrimitives) repositories.
* [React Live Samples](https://basicprimitives.github.io/react/)
* [React Live Demos](http://react.basicprimitives.com:8080)


### Example

```
npx create-react-app test1
cd test1

yarn add basicprimitivesreact

yarn start
```

Add following changes into App.js

``` JavaScript
import React from 'react';
import './global.css';
import { OrgDiagram } from 'basicprimitivesreact';
import primitives from 'basicprimitives';

var photos = {
  a: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxICRTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dhls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0eut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr65tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxtiPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII=',
  b: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHFSURBVGhD7dk/bsIwFAZwp2dJOqCeIJwAunTqEcIYDsDYrUsYm61rJ5YmJyAnqDo03CW1XSIh4vi9l+o90eKsWOLnz3/4IqKu69TlPTeXRzKiwKKsS0grpEVJgDI27K2QFiUBytg/u7cO23n0i2dVU1Lqx7KnVS7tnIg6dtZx/kZHoEmxjE7TsDJJlpXhYMIsDXvaHuBDMJGVFq1u296nLVLn1zdv77BrIguer4rzfeekYVx8LCOP802GmMFwCC9LqWTmXkoAy81yff3dbQxFyM1qP5tzQjpLIBXzC1m9WpYD1eM9GBYfy/7CO1DFaw6rlIKuH/chB1fBPQBx3f14uPfWCU+b9qikxF72bUpokxirWSe00iW4iLbZIKuNKAtfuiayMEdqrELo0OZQuZnIwlwQpkKMXC/N+tn/5sHIsnRtq1wlotx5XdwsLVs8uFwfX74yKMDCLPj5mOtl1btBiwADZE/L1W20KvXXG07WSLexUUENVbTY9IsH3sacaY3uoGwDFRx5lk7qZQHteWlWVqFqlyDLbig4KBukBCur7LlCxXRc3Sj8nwjt85PPJRaRwOmHBhYltJBWSIuSAGVs2Fv/IK1vKZY5XO2KxFcAAAAASUVORK5CYII=',
  c: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHJSURBVGhD7ZnNccIwEIVxagEODBWYfkg70EbuIR1QAcMBuxfFjklixpLeeyuS8WF1ZaX99q1+dk0VQljMb7zMD6knciwlL66Wq6UooNj63nK1FAUU2/K99fFaxcfu2Cokj7bdU20azaFmne5PsoeFPCOE054FGtlpbCqWCelOVx8aVgQJq4RpQGPJeKxypoGMyiaLlYWaesqZM4pxWEkvWRfJw4rBGKzU8kw64gFBLgLLuPL3oYtOR1wYK07FKHUHi4oNuCCWKdjH62nExUaDsCyhsndmxg481e3723n60mzXS8Pzo0wBWM01QlVvVooLi62lsPl7sUBX3d4ulljL51jUKvcKV3AsKNHIIK/Wcr1VFnuerSWJl1tB78ChA6zVJtJInK8Nt7jdCmDFs6jK1R53VaX1Z+gBe+5TzdbN6KkOiRqQLQW6qC31GsSyLfubg0RYpfVWMlyqh7HW24RaIZVI1Pel2x+4BSisHFi09ct/oIBQ3T8Y6CT+/D7L9rWnEz7SJC9SQqneFa/WIFuRZiSTAcuMxiNZ1LJsNY3oy4OaxMkJSW841DnnDlvVo81vWOqtf4jCsRSRXS1XS1FAsfW95WopCii2n0mWgWSKWlxrAAAAAElFTkSuQmCC'
};

function App() {
  const config = {
    pageFitMode: primitives.common.PageFitMode.AutoSize,
    autoSizeMinimum: { width: 100, height: 100 },
    cursorItem: 0,
    highlightItem: 0,
    hasSelectorCheckbox: primitives.common.Enabled.True,
    items: [
      {
        id: 0,
        parent: null,
        title: 'Scott Aasrud',
        description: 'VP, Public Sector',
        image: photos.a
      },
      {
        id: 1,
        parent: 0,
        title: 'Ted Lucas',
        description: 'VP, Human Resources',
        image: photos.b
      },
      {
        id: 2,
        parent: 0,
        title: 'Fritz Stuger',
        description: 'Business Solutions, US',
        image: photos.c
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

See more examples in GIT repository.

## Free for Non-commercial
* Do you want to use Basic Primitives Diagrams for a personal website, a school site or a non-profit organization? Then you don't need the author's permission, just go on and use Basic Primitives Diagrams. For commercial websites and projects, see [License and Pricing](https://www.basicprimitives.com/index.php?option=com_content&view=article&id=14&Itemid=18&lang=en).

## Open

One of the key features of Basic Primitives Diagrams that under any of the licenses, free or not, you are allowed to download the source code and make your own edits. This allows personal modifications and a great flexibility. The comprehensive set of samples, demos and unit tests guarantees quality of the library's source code.

## Created for visual data analytics of hierarchies and dependencies
Business Intelligence systems and applications are designed for two major purposes: Reporting and Analytics. Reporting applications are meant to be a legal statements, so reported data should be 100% complete, it should not have any discrepancy in form of omitted data, improperly rounded values or excessive abbreviations. On the other side, applications designed for data analytics should show only the most valuable and related data to current user focus and gracefully degrade details for less relevant data. So Basic Primitives components design is to provide API for simplified visual data analysis of diagrams:

### Auto layout
The main problem of diagrams drawn in graphics editor is in sparse distribution of items on layout. Large gaps between nodes make diagrams hard to overview, edit and navigate. Sometimes the diagram is so big that it could have screen size intervals between items. This issue makes the whole idea of visualizing diagrams useless. At the same time computer UI allows to scale and fit visualization into screen, but in that case items become small and unreadable. The primary goal of our approach to Organizational chart and other diagrams visualization is to resolve these issues and make good use of them at the same time. The component finds the best way to display a large hierarchy within available screen space without scrolling or with minimal scrolling not affecting usability. 

* Diagram shape overview. Component minimizes items in order to fit diagram visualization into available screen space and provides user with  possibility to overview general diagram layout.
* User focus navigation goes node by node. Chart displays cursor item and its neighbors full size and minimizes all other less relevant nodes. By clicking on neighboring nodes user will move the focus of interest to the newly selected part of the diagram. 
* Pinning of items in diagram. All selected/check marked items are always displayed full size, all other items stay minimized, so it allows to pin/select items in different branches and show them side by side within available screen space for location comparison.
* Diagram design consistency. Auto layout without user's manual editing provides visual consistency across all diagramming documents. All users have various skills and preferences, so auto layout provides consistent diagrams visualization.
* Always up to date. Your application diagrams will not be affected by changes in components's layout algorithms and application data. Your visualizations will be always up to date and in sync with your data. 

### Annotations
Every time we make changes to diagram we need to visualize performed modification otherwise it is hard to trace changes before and after modification. So in order to visualize diagram transition from one state to another control provides annotations. Annotations are API elements attached to diagram nodes and are drawn in front or in the background of them. Annotations don't change nodes placement, so controls redraw them instantaneously without diagram layout. The general logic of annotations is that they are not supposed to be displayed for every node in diagram, application is supposed to create them and add to diagram in the context of current user cursor or operation, user perform with data. Annotations compared to diagram layout itself have minimal conflict resolution abilities. So it is very easy to clutter diagram with excessive number of annotations. But they come very handy when we need to add context specific visuals.

## API
### Provides simple API for the most common use cases
* Default item template - allows to render first diagram with minimal options defined.
* Selection Check Box - provide selection API similar to regular tree and list controls
* User buttons panel - in layout context panel with yser defined buttons
* Vertical node titles
* Labels

### Flexible API for more complex use cases
* User defined item, highlight, cursor and butons panel with JSX templates. 
* Custom layout parent/child relation types: Adviser, Assistant and various partners. Multiple parents, multiple managers or co-heads visualization.
* Custom children and leaves layout: Vertical, Horizontal and Matrix
* Left/Right layout alignment support.

### License

Copyright (c) 2013 - 2019 Basic Primitives Inc
* [Non-commercial - Free](http://creativecommons.org/licenses/by-nc/3.0/)
* [Commercial and government licenses](license.pdf)
