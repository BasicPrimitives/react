# Buttons panel

The component provides options to preserve some space around nodes to render custom controls or buttons. Buttons rendered in diagram layout provides better UI discoverability compared to context popup panel.

Enabling buttons panel visibility at component scope with `hasButtons` property:
* `Enabled.Auto` - Buttons visible only for cursor item.
* `Enabled.True` - Every normal item has buttons visible.
* `Enabled.False` - No buttons.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
import { Enabled } from basicprimitives;
<OrgDiagram config={
    hasButtons: Enabled.Auto
  }
/>
```

Enabling buttons panel visibility individually per `ItemConfig` with similar 'hasButtons' property:
* `Enabled.Auto` - Buttons panel visibility depends on component scope `hasButtons` value.
* `Enabled.True` - Has buttons visible.
* `Enabled.False` - No buttons panel.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
import { Enabled } from basicprimitives;
<OrgDiagram config={
    items: [
      {
        id: 0,
        parent: null,
        title: "James Smith",
        description: "VP, Public Sector",
        image: "/react/photos/a.png",
        hasButtons: Enabled.True
      }
    ]
  }
/>
```

Size the buttons panel set in component `Config` `buttonsPanelSize` property. It is regular numeric value in `px`.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
<OrgDiagram config={
    buttonsPanelSize: 60
  }
/>
```

Populate buttons panel content per component or item template with `onButtonsRender` callback function. See item template definition in the following example:

```JavaScript
import React, { Component } from 'react';
import { OrgDiagram } from basicprimitivesreact;
import { Enabled } from 'basicprimitives';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
<OrgDiagram config={
    hasButtons: Enabled.True,
    buttonsPanelSize: 40,
    onButtonsRender: (({ context: itemConfig }) => {
      return <>
        <button key="1" className="StyledButton"
          onClick={(event) => {
            event.stopPropagation();
            alert(`User clicked on Coffee button for node ${itemConfig.title}`)
          }}>
          <FontAwesomeIcon icon={faCoffee} />
        </button>
      </>
    })
  }
/>
```

Please, pay attention that every button `onClick` event handler should suppress even propagation. It is needed to avoid chart cursor item change and the following layout update.

```JavaScript
import { OrgDiagram } from basicprimitivesreact;
<OrgDiagram config={
    onClick={(event) => {
      event.stopPropagation();
      alert(`User clicked on Coffee button for node ${itemConfig.title}`)
    }}
  }
/>
```

[React Sample](../src/components/Samples/ButtonsPanel.js)
