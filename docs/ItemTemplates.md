# Item template

## Configuration Classes
The `config` argument of the component is the configuration object. It has the `templates` property, a collection of the `TemplateConfig` configuration objects. Every template must have a unique name, defined with the `name` property. The template configuration defines sizes and the callback functions to render item content, cursor, highlight, and context buttons panel. If callback function or property is not specified, then the component uses default value or function to render the template.

The ReactJS components share many template configuration options with the JavaScript controls, but have their own specifics. See the following [property types](https://reactjs.org/docs/typechecking-with-proptypes.html) for reference:
* `OrgItemConfigShape`
* `FamItemConfigShape`
* `FamConfigShape`
* `OrgConfigShape`
* `TemplateConfigShape`

## Size
The ReactJS component deals with the fixed-size layout. It makes no guesses about the content and size of nodes. So we don't support in any form nodes auto-sizing. It should measure every node's content before the layout to implement nodes auto-sizing in the component. Considering that nodes' visibility depends on available space, it will be an infinite loop of diagram layout, and nodes measure iterations. The more room we provide to nodes, the fewer the number of diagram nodes will be visible. So control expects that node size is hard valued in the template configuration. 

## Rendering methods
* `onItemRender` - item content rendering method
* `onCursorRender` - cursor frame rendering method
* `onHighlightRender` - highlight frame rendering method
* `onButtonsRender` - item buttons panel rendering method

Every rendering method receives `RenderEventArgs` object as first argument, it provides rendering context to your method:
* `id` - item id
* `context` - reference to `ItemConfig`
* `isCursor` - `true` if rendered item is cursor
* `isSelected` - `true` if rendered item id in `selectedItems` collection
* `hasSelectorCheckbox` - `true` if selected checkbox is visible
* `hasButtons` - `true` if buttons panel is visible
* `hasGroupTitle` - `true` if item has group title

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
<OrgDiagram config={
    templates: [{
        name: "contactTemplate",
        itemSize: { width: 120, height: 100 },
        onItemRender: ({ context: itemConfig }) => {
            const itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : Colors.RoyalBlue;
            return <div className="ContactTemplate">
            <div className="ContactTitleBackground" style={{ backgroundColor: itemTitleColor }}>
                <div className="ContactTitle">{itemConfig.title}</div>
            </div>
            <div className="ContactPhotoFrame">
                <img className="ContactPhoto" src={itemConfig.image} alt={itemConfig.title} />
            </div>
            <div className="ContactPhone">{itemConfig.phone}</div>
            <div className="ContactEmail">{itemConfig.email}</div>
            <div className="ContactDescription">{itemConfig.description}</div>
            </div>;
        },
    }],
    items: [
        {
            id: 0,
            parent: null,
            title: "James Smith",
            description: "VP, Public Sector",
            image: "/react/photos/a.png",
            phone: "(123) 456-78-90",
            email: "itema@org.com",
            templateName: "contactTemplate"
        }
    ]
  }
/>
```

## Item placeholder is `div` HTML element
The component creates a placeholder `div` element for every item it renders. The diagram sets absolute position and size properties for it, so when you make content for the item, you should expect that elements you create will be placed inside that div element. 

## Names
Every template object must have a unique name defined with the `name` property. Use that name to set a global default template for all your diagram items or on per item basis:

[React Sample](../src/components/Samples/ItemTemplate.js)

## Adding selection checkbox to the item template
The chart supports the selection of multiple items. The checkbox element is a necessary element of the control's functionality. Suppose you want to place the checkbox inside of the item template instead of having it shown outside as a decorator. In that case, you have to add the `bp-selectioncheckbox` class name to your checkbox `class` style property.

[React Sample](../src/components/Samples/SelectionCheckboxInItemTemplate.js)
