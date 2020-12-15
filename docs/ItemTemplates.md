# Item template

## Configuration Classes
Component configuration `config` property contains collection of `templates`. Every template is named object describing template sizes and providing callback functions to render item content, cursor, highlight and buttons panel. If callback function or property is not defined then component uses default value or function to render template.

See template configuration properties in the following classes:

* `OrgItemConfig`
* `FamItemConfig`
* `FamConfig`
* `OrgConfig`
* `TemplateConfig`
* `TemplateConfig`

## Size
Component deals with fixed size layout, it makes no guesses about content and size of nodes. So we don't support in any form nodes auto sizing. In order to support such feature control should measure content of every node before rendering cycle. Taking into account that nodes visibility depends on available space it is going to be infinite loop of diagram layout and nodes measure iterations. The more space we provide to nodes the less number of diagram nodes is going to be visible. So control expect that node size is hard valued in template configuration. 

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

## Item placeholder is `div`
Component creates placeholder `div` for every item it renders, that placeholder `div` has pre-set absolute position and size properties, so when you create item content for the rendered item you can expect that elements you create are going to be child nodes of that absolute positioned and hardcoded in size item placeholder.

## Names
Every template object has `name` property, that `name` is used to set default template for all diagram items or per item basis:

[React](../src/Samples/ItemTemplate.js)

## Adding selection checkbox to Item Template
Chart supports selected items collection on its API, so checkbox element is necessary part of control's functionality. If you want to place it inside of item template instead of having it shown outside as decorator of element boundaries, you have to add `bp-selectioncheckbox` to your checkbox `class` style property.

[React](../src/Samples/SelectionCheckboxInItemTemplate.js)
