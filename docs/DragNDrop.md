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

[React](../src/Samples/DragNDrop.js)


## Drag & Drop diagram nodes to application
The following example shows Drag & Drop functionality between diagram items and application components. 

If your components perform direct DOM manipulation without ReactJS Virtual DOM usage, then Drag & Drop is not going to work.  React components should share Drag & Drop context via Virtual DOM to work between Diagram Nodes and other Application components.

[React](../src/Samples/DragToTrashBin.js)

## Drag & Drop diagram nodes with Hooks
Hooks are the new standard in ReactJS for dependency injection, so React Drag & Drop library provides hooks API as well:
* [useDrag](https://react-dnd.github.io/react-dnd/docs/api/use-drag)
* [useDrop](https://react-dnd.github.io/react-dnd/docs/api/use-drop)
The API is less complex than [HOC](https://reactjs.org/docs/higher-order-components.html) - high order components, even though it is no longer functional. Here are the same samples as the first 2, but with hooks.

[React](../src/Samples/DragNDropHooks.js)

## Drag & Drop diagram nodes to other components with Hooks

[React](../src/Samples/DragToTrashBinHooks.js)
