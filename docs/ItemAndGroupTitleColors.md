# Item & group title colors

In Data Visualization style properties: color, width, size and etc. are being used as the way to show values. So item title background color is one of the properties which let us group nodes in diagram. The background color may vary in wide range of colors, so it makes sense to change font color of the title automatically in order to keep text readable. By default component allows to customize title background color for every Item with `itemTitleColor` property and provides means to choose the best title font color out of two options: `itemTitleFirstFontColor` and `itemTitleSecondFontColor`. Component uses `highestContrast` function to choose font color having highest contrast on item's title background.

[React](../src/Samples/ItemAndGroupTitleColors.js)
