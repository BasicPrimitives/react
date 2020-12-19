# Labels cascades over connection lines in family chart
Family chart control provides connection lines labels binding multiple nodes together. In the following example we create cascade of labels from common parent down to its children. If two labels create mutually exclusive bundles the first label wins.

See `LabelAnnotationConfig` for properties. By default labels display regular text label, but they can be styled the same way as items of diagram. See `templateName` option of `LabelAnnotationConfig` and `defaultLabelAnnotationTemplate` of `FamDiagram `config` property.

[React](../src/Samples/LabelsCascadesInFamilyChart.js)
