# Drag & Drop Support

Basic Primitives Diagrams library for React was created with only one purpose, it is to be complient with [React Drag & Drop](http://react-dnd.github.io/react-dnd/about) library. The only option to achive this is to render all content using React Virtual DOM without direct DOM manipulations. 

In the best software engineering traditions our library does not implement any Drag & Drop related functionalty. Everything as before is achived via item templates customizations.

See [React Drag & Drop](http://react-dnd.github.io/react-dnd/about) library for reference and samples, from our side pay attentions to the following take aways:

## npm packages
* [react-dnd](https://www.npmjs.com/package/react-dnd)
* [react-dnd-cjs](https://www.npmjs.com/package/react-dnd-html5-backend)

## React `DndProvider` does not support nested `backend`s
If you use Drag and Drop in multiple places of your application `DndProvider` should create no nested `backend`s.

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

[React](../src/Samples/DragToTrashBin.js)
