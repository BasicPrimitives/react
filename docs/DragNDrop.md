# Drag & Drop Support

Our React diagramming components library is compliant with [React Context](https://reactjs.org/docs/context.html) and [React Drag & Drop](http://react-dnd.github.io/react-dnd/about). The only option to achieve this is to render all content using React Virtual DOM without direct DOM manipulations. 

In the best software engineering traditions, our library does not implement any Drag & Drop related functionally. Everything as before is achieved via item templates customizations.

See [React Drag & Drop](http://react-dnd.github.io/react-dnd/about) library for reference and samples

## npm packages
* [react-dnd](https://www.npmjs.com/package/react-dnd)
* [react-dnd-cjs](https://www.npmjs.com/package/react-dnd-html5-backend)

## React `DndProvider` does not support nested `backend`s
If you use Drag and Drop in multiple places of your application, be aware that `DndProvider` does not support nested backends.

```JavaScript
import React, { Component } from 'react';
import { App } from './App';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Sample extends Component {
  render() {
    return <>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </>;
  }
}

export default Sample;
```

## Drag & Drop diagram nodes
This demo showcases the drag-and-drop functionality for diagram nodes using **React DnD** hooks. You can easily drag nodes within the diagram and drop them to interact with other nodes.

* [useDrag](https://react-dnd.github.io/react-dnd/docs/api/use-drag) – Hook to manage the drag state.
* [useDrop](https://react-dnd.github.io/react-dnd/docs/api/use-drop) – Hook to manage the drop state.
  
The following example demonstrates how to drag and drop diagram nodes using React hooks:

[React](../src/Samples/DragNDropHooks.jsx)

## Drag & Drop diagram nodes to other components
This example demonstrates dragging diagram nodes and interacting with other components outside the diagram:

[React](../src/Samples/DragToTrashBinHooks.jsx)


