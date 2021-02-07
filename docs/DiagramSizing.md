# Diagram Sizing
## Responsive Design
Like any other Data Visualization components, the Basic Primitives controls combine scalable and non-scalable graphics elements. For example, we would like to show 10'000 labels, but it is physically impossible to fit them because their total square size is multiple times bigger than available screen space. Simultaneously, we cannot scale all of them down to points since they become merely unreadable. Try to disable automatic fit to page for the Large Hierarchy demo. The resulting diagram will be so big that its visualization makes no sense. Rendering mode without fit to the screen is useful only for PDF generation for reporting purposes only. If we speak about business applications designed for data analysis, we need to show nodes only in the current user focus scope.  Diagramming applications should dynamically adapt to user data and requirements. Another argument favoring dynamic diagramming applications is that in large organizations with over 500 people, the rate of changes is so high that any organizational structure becomes obsolete as soon as we make its hard copy. So being responsive, our strategy is to pack as much data as possible to the end-user screen. The application should notify control about changes in the screen size so that the component can find optimal visualization of the diagram for the end-user. 

## Diagram placeholder sizing is applications responsibility
The component occupies all available space inside the placeholder `div` element created by an application.  If the application changes the size of `div` containing the diagram component, it triggers component state change and the following rendering cycle. The component uses [`resize-observer-polyfill`](https://www.npmjs.com/package/resize-observer-polyfill) to handle diagram size change.

## Component Sizing with CSS @Media
The main point of CSS @Media based control sizing is to keep diagram component size less than screen size. We want to have the diagram as large as possible, but we need to avoid situations when the user has to scroll the diagram and page scroll bars to see diagram content. The first image shows unusable scroll bars.

![Unusable scroll bars](./images/PageSizeDiagram1.png "Unusable scroll bars")

Having scroll bars enabled for components is okay if they fit into the page viewport. So we can place the diagram component and stack it vertically with other application components on the page. The following image shows two components with scrollable content. Both of them are usable since users can scroll them into the current viewport and work with their content scroll bars individually.

![Usable control scroll bars](./images/PageSizeDiagram2.png "Usable control scroll bars")

The "classic" and the most popular desktop applications approach is to fit page and diagram 100%. In that case, you have to design your website appropriately.

![Classic desktop layout](./images/PageSizeDiagram3.png "Classic desktop layout")

The following sample uses CSS @Media rules to control the diagram size on the page and keep its height within the current page viewport size. Try to resize your browser window to see how it works. The diagramming component has a minimum vertical size set to hardcoded 250px.

See [CSS @Media](https://developer.mozilla.org/en-US/docs/Web/CSS/@media) for more reference

[React](../src/Samples/PageSizeDiagram.js)

## Auto size diagram in the article
Another diagram integration scenario is diagram placement inside the article, so the component needs to auto expand its size to accommodate all diagram nodes without minimization or truncation. Set `pageFitMode` to `PageFitMode.AutoSize` and component will size itself to show all nodes of diagram. 

Use the following options to constrain component auto-size:

* `autoSizeMinimum` limits the minimal size of the diagram, so if it is empty, you will see an empty `div` of this size.
* `autoSizeMaximum` - limits the maximal size of the diagram. Set maximum size to some value if you need to avoid a massive chart on your page.

For example, to set minimal and maximal components size: 

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
import { Size } from basicprimitives;
<OrgDiagram centerOnCursor={true} config={{
  autoSizeMinimum: new Size(800, 600),
  autoSizeMaximum: new Size(1024, 768)
  // other properties
}} />
```

[React](../src/Samples/AutoSize.js)
