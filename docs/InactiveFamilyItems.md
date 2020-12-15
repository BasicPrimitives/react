# Inactive family items
Inactive items are regular items excluded from navigation, that means user cannot set cursor to them and highlight feedback is disabled. When diagram has a lot of collapsed nodes into dots, inactive items are by-passed by neighbours selection, so selection of neighboring node to inactive item makes all nodes of inactive item shown in full size as well. Inactive items play a role of in layout annotations having no user interaction and templated the same way as any other items. For example they can be used to add titles into family diagram layout or terminator items indicating that upon reaching them diagram would load extra nodes into layout.

Component provides two ways to set inactive items, via direct per item setting of property `isActive` to false or via making custom item templates, so all nodes having that template are going to be inactive in layout. Properly structured application is supposed to have some set of item templates, so setting inactive items via template options is the most appropriate.

See following configuration classes:

* `FamItemConfig`
* `TemplateConfig`

They have following option:

* `isActive` - Setting it to false makes items inactive in diagram layout, so they become irresponsive to mouse and keyboard navigation events. Note that controls provide global scope options to disable mouse highlights and cursor navigation.

[React](../src/Samples/InactiveFamilyItems.js)
