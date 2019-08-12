# Buttons panel

Component provides options to preserve some space around nodes to render custom controls or buttons. Buttons rendered in diagram layout provides better UI discoverability compared to context popup panel.

Buttons panel visibility can be enabled at component scope with `hasButtons` property:
* `primitives.common.Enabled.Auto` - Buttons visible only for cursor item.
* `primitives.common.Enabled.True` - Every normal item has buttons visible.
* `primitives.common.Enabled.False` - No buttons.

Buttons panel visibility can be enabled individually per `ItemConfig` with similar 'hasButtons' property:
* `primitives.common.Enabled.Auto` - Buttons panel visibility depends on component scope `hasButtons` value.
* `primitives.common.Enabled.True` - Has buttons visible.
* `primitives.common.Enabled.False` - No buttons panel.

The size of the buttons panel set in component `Config` `buttonsPanelSize` property. It is regular numeric value in `px`.

Buttons panel content can be customized per component or per item template with `onButtonsRender` callback function. See item template definition in the following example:

Please, pay attention that every button `onClick` event handler suppresses even propogation, it is needed to avoid chart cursor item change and following layout

```JavaScript
onClick={(event) => {
  event.stopPropagation();
  alert(`User clicked on Coffe button for node ${itemConfig.title}`)
}}>
```

[React](../src/Samples/ButtonsPanel.js)
