# Cursor Item & Mouse click
Organization Chart component has API options equivalent to standard UI controls:
* `cursorItem` - sets the current cursor node in the diagram. That is the node selected with a mouse click.
* `highlightItem` - sets highlighted node, the one having mouse over visual feedback
* `selectedItems` - selects multiple items. The collection of nodes having checked checkboxes. 

A soft link is a way to reference one object from another using a unique key or id. Our components define tree or family structures on the API using a flat array where every node references its parent(s) node(s) with unique ids. We use these unique ids when we need to highlight, set cursor, or select nodes in the diagram. 

To set the current cursor to some node, set the OrgConfig.cursorItem property to the id of that node.   

The control's navigation also operates around the current cursor node and selected items. The diagram shows all the current cursor node neighbors and can minimize all other nodes on the chart depending on available screen space and options.  The neighbors are immediate parents, children, and siblings. So cursor item plays a role of local zoom in the chart hierarchy. Users browse diagrams via clicking and moving cursor item around and zooming into data around new cursor node.

The following example shows how to set the cursor item programmatically and listen to notifications about the user's navigation in the chart with the `onCursorChange` event. When the user clicks on the node, the control fires two sequential events before and after cursor change and diagram layout update.
* onCursorChanging - is called before the control updates the diagram
* onCursorChange - is called when diagram update is complete.

For example, use the onCursorChanging event in the web applications to make model changes, modifying diagram nodes and templates for the new cursor node. Return true from the onCursorChanging event handler to suppress the following diagram update and cursor positioning.  So model change would update your diagram only once.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
<OrgDiagram onCursorChanging={(event, data) => {
		const { context } = data;
        	setCursorItem(context.id);
        	// Return true in order to suppress set cursor item in control
        	// it will be updated via subsequent state change and rendering event
        	return true;
	}} />
```

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
<OrgDiagram onCursorChanged={(event, data) => {
		const { context } = data;
        	console.log(context);
	}} />
```

To make some node inactive, so the user cannot set the cursor to it, set the `isActive` option to false for that item or template configuration objects. See "Inactive items" use case.

If you need to disable mouse interactivity entirely in the diagram, you have to set the cursor and highlight nodes to nulls and deactivate navigation:

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
import { NavigationMode } from basicprimitives;
<OrgDiagram config={
		cursorItem: null,
		highlightItem: null,
		navigationMode: NavigationMode.Inactive
	}
/>
```

## Force center on cursor
The component has a parameter, the `centerOnCursor`. It is needed to force the diagram to position the current cursor node to the screen's center. The center on the cursor parameter is handy when an application needs to update the chart and recenter it again. It is `false` by default.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
<OrgDiagram centerOnCursor={true} />
```

## Keyboard navigation
The control is keyboard focusable. So when it gets focus with TAB or mouse click, there is a blue "outline" around it indicating active keyboard focus. 
 
The control supports keyboard arrows keys to choose highlighted node and `Enter` key to set cursor for it. So when the component gets focused, you have to see the blue outline, then you have to use Arrows keys to highlight the item you want to move the cursor to, and then press Enter key to set the cursor to it.  Don't forget that if you need to expand marker nodes, you need to move the cursor node close.  

Suppose your node templates contain HTML elements supporting keyboard focus and keyboard interactivity.  All of them are going to have their TAB order. Use buttons panel to place HTML elements having a keyboard or mouse interactivity elements above all other diagram elements, so they are not blocked. See the context buttons sample for more details.

[React](../src/Samples/SelectingCursorItem.jsx)
