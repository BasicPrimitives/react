# Custom Placement of Children
## Adviser & Assistant Item Types

Organizational Chart items are defined in form of regular hierarchy, so every item may have only one parent. This is conceptually easy to understand for end user who edits organizational chart and software developer to maintain required structures in database and in application.

In the reality pure hierarchical relations are rare, so organizational chart provides means to represent none hierarchical relations in form of item types and on-screen annotations.

Chart supports following `itemType`s:

* `ItemType.Regular`
* `ItemType.Adviser`
* `ItemType.Assistant`
* `ItemType.SubAdviser`
* `ItemType.SubAssistant`
* `ItemType.GeneralPartner`
* `ItemType.LimitedPartner`
* `ItemType.AdviserPartner`

All of them control child placement relative to its logical parent in the hierarchy. The following example demonstrates  `Adviser` and `Assistant` types. `Adviser` item placed on the side of its logical parent and connected to it horizontally. `Assistant` item is placed at level in between its parent and remaining `Regular` children and horizontally connected to connection line connecting parent and its `Regular` children.

Use `adviserPlacementType` property of `ItemConfig` to place `Adviser` or `Assistant` on the left or right side of the hierarchy
* `AdviserPlacementType.Left`
* `AdviserPlacementType.Right`

[React](../src/Samples/AdviserAndAssistantItemTypes.js)

## Sub Adviser & Sub Assistant item types

Sub Adviser & Sub Assistant item types are variations of regular Adviser & Assistant types. The only difference is they are shift down one level relative to their parents, so they are connected by their top side to the hierarchy.

Use `adviserPlacementType` property to place them on the left or right side of parent's hierarchy as well.

[React](../src/Samples/SubAdviserAndSubAssistantItemTypes.js)

## Adviser child nodes placement above parent's node children

If adviser node has its own children then control adds extra levels, so advisers children are placed above level of the regular children. This behavior can be altered with `placeAdvisersAboveChildren` property. So parent's node and advisers node children would be rendered side by side at the same level.

[React](../src/Samples/PlaceAdvisersAboveChildren.js)

## Assistant child nodes placement above parent's node children

If assistant node has its own children then control adds extra levels, so assistant's children are placed one level above of the regular children. This behavior can be altered with `placeAssistantsAboveChildren` property. So parent's node and assistants node children would be rendered side by side at the same level.

[React](../src/Samples/PlaceAssistantsAboveChildren.js)
