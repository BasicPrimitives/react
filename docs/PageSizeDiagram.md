# Component Sizing with CSS @Media
The main point of CSS @Media based control sizing is to keep diagram component size less than screen size. We want to have diagram to be as large as possible, but we need to avoid situation when user has to scroll diagram and page srollbars altogether in order to see diagram content. The first image shows unusable scroll bars.

![Unusable scrollbars](./images/PageSizeDiagram1.png "Unusable scrollbars")

Having scroll bars enabled for components is fine if they fit into the page view port. So we can place diagram component and stack it verticaly with other components on the page. The following image shows 2 components having scrollable content, both of them are usable, since user can scroll them into the current view port and work with their content scrollbars individually.

![Usable control scrollbars](./images/PageSizeDiagram2.png "Usable control scrollbars")

The "classic" and the most popular approach for desktop applications is to fit page and diagram 100%. In that case you have to design your web site appropriatly.

![Classic desktop layout](./images/PageSizeDiagram2.png "Classic desktop layout")

The following sample control hight is sized by CSS @Media rules to be within current page view port size. Try to resize your browser window in order to see how it works. The diagraming component has minimum vertical size set to hardcoded 250px.

See [CSS @Media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) for more reference

[Sample of diagram size controlled by CSS @Media](../src/samples/PageSizeDiagram.js)
