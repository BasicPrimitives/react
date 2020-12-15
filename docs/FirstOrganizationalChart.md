# First Organizational Chart

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
  'iPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII=',
  b: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARn' + 
  'QU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHFSURBVGhD7dk/bsIwFAZwp2dJOqCeIJwAunTqEcIYDsDYr' + 
  'UsYm61rJ5YmJyAnqDo03CW1XSIh4vi9l+o90eKsWOLnz3/4IqKu69TlPTeXRzKiwKKsS0grpEVJgDI27K2QFiUBytg/u7' + 
  'cO23n0i2dVU1Lqx7KnVS7tnIg6dtZx/kZHoEmxjE7TsDJJlpXhYMIsDXvaHuBDMJGVFq1u296nLVLn1zdv77BrIguer4r' + 
  'zfeekYVx8LCOP802GmMFwCC9LqWTmXkoAy81yff3dbQxFyM1qP5tzQjpLIBXzC1m9WpYD1eM9GBYfy/7CO1DFaw6rlIKu' + 
  'H/chB1fBPQBx3f14uPfWCU+b9qikxF72bUpokxirWSe00iW4iLbZIKuNKAtfuiayMEdqrELo0OZQuZnIwlwQpkKMXC/N+' + 
  'tn/5sHIsnRtq1wlotx5XdwsLVs8uFwfX74yKMDCLPj5mOtl1btBiwADZE/L1W20KvXXG07WSLexUUENVbTY9IsH3sacaY' + 
  '3uoGwDFRx5lk7qZQHteWlWVqFqlyDLbig4KBukBCur7LlCxXRc3Sj8nwjt85PPJRaRwOmHBhYltJBWSIuSAGVs2Fv/IK1' + 
  'vKZY5XO2KxFcAAAAASUVORK5CYII=',
  c: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARn' + 
  'QU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHJSURBVGhD7ZnNccIwEIVxagEODBWYfkg70EbuIR1QAcMBu' + 
  'xfFjklixpLeeyuS8WF1ZaX99q1+dk0VQljMb7zMD6knciwlL66Wq6UooNj63nK1FAUU2/K99fFaxcfu2Cokj7bdU20aza' + 
  'Fmne5PsoeFPCOE054FGtlpbCqWCelOVx8aVgQJq4RpQGPJeKxypoGMyiaLlYWaesqZM4pxWEkvWRfJw4rBGKzU8kw64gF' + 
  'BLgLLuPL3oYtOR1wYK07FKHUHi4oNuCCWKdjH62nExUaDsCyhsndmxg481e3723n60mzXS8Pzo0wBWM01QlVvVooLi62l' + 
  'sPl7sUBX3d4ulljL51jUKvcKV3AsKNHIIK/Wcr1VFnuerSWJl1tB78ChA6zVJtJInK8Nt7jdCmDFs6jK1R53VaX1Z+gBe' + 
  '+5TzdbN6KkOiRqQLQW6qC31GsSyLfubg0RYpfVWMlyqh7HW24RaIZVI1Pel2x+4BSisHFi09ct/oIBQ3T8Y6CT+/D7L9r' + 
  'WnEz7SJC9SQqneFa/WIFuRZiSTAcuMxiNZ1LJsNY3oy4OaxMkJSW841DnnDlvVo81vWOqtf4jCsRSRXS1XS1FAsfW95Wo' + 
  'pCii2n0mWgWSKWlxrAAAAAElFTkSuQmCC'
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

## The sample code imports two packages:

* `import { OrgDiagram } from 'basicprimitivesreact';` - react component
* `import primitives from 'basicprimitives';` - core of the library which contains enumerations, if you know them you don't need to explicitly import it.

[React](../src/Samples/FirstOrganizationalChart.js)
