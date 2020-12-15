# Inactive items in layout
Inactive items are regular items excluded from navigation, that means user cannot set cursor to them. When diagram has a lot of minimized nodes into dots, inactive items are by-passed by neighbours selection, so selection of neighboring node to inactive item makes all nodes of inactive item shown in full size as well. Inactive items play a role of in layout annotations having no user interaction. For example they can be used to add titles into family diagram layout or terminator items indicating that upon reaching them diagram would load extra nodes into layout.

Chart's API provides two ways to set inactive items. The first one is `isActive` option of `ItemConfig` options class and the second way is via template configuration. In majority of scenarios inactive items are supposed to have custom item template, so deactivating user interaction via item template is the most appropriate for application design. 

See following configuration classes:

* `OrgItemConfig`
* `TemplateConfig`

They have following option:

`isActive` - If it is true then item having this template is selectable in hierarchy and it has mouse over highlight.

[React](../src/Samples/InactiveItems.js)
