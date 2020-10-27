import React from 'react';
import {
  FirstOrganizationalChart,
  FirstFamilyChart,
  AddingNewItemsToChartAtRuntime,
  PageSizeDiagram,
  AutoSize,
  ShowFrame,
  SelectingCursorItem,
  SelectingHighlightItem,
  SelectedItems,
  ButtonsPanel,
  ItemAndGroupTitleColors,
  Labels,
  ChildrenPlacementType,
  AdviserAndAssistantItemTypes,
  PlaceAdvisersAboveChildren,
  PlaceAssistantsAboveChildren,
  SubAdviserAndSubAssistantItemTypes,
  GeneralPartnerItemType,
  LimitedPartnerItemType,
  AdviserPartnerItemType,
  MultipleRootItemsInChart,
  MatrixLayoutOfMultipleRootItemsInChart,
  SelectionPathMode,
  InactiveItems,
  CustomLayoutWithInvisibleItems,
  ChildrenAndAssitantsLevelOffset,
  SkippedLevels,
  InactiveFamilyItems,
  SpousesInFamilyLayout,
  MatrixLayoutInFamilyChart,
  LabelsCascadesInFamilyChart,
  FamilyChartItemsOrdering,
  MultipleFamiliesOrdering,
  FamilyChartPrimaryParent,
  LoopsInFamilyChart,
  SelectionPathModeInFamilyChart,
  ItemTemplate,
  DragNDrop,
  DragToTrashBin,
  ZoomWithItemTemplate,
  ZoomWithCSSScaleTransform,
  ItemTemplateLabel,
  SelectionCheckboxInItemTemplate,
  CursorTemplate,
  HighlightTemplate,
  ConnectorAnnotation,
  ShapeAnnotation,
  HighlightPathAnnotation,
  PERTChart,
  FamilyHideGrandParentsConnections
} from './Samples';

const SamplesList = [
  {
    label: "Create & Update use cases",
    items: [
      {
        label: "First Organizational Chart",
        component: <FirstOrganizationalChart />
      },
      {
        label: "First Family Chart",
        component: <FirstFamilyChart />
      },
      {
        label: "Adding new items to chart at runtime",
        component: <AddingNewItemsToChartAtRuntime />
      },
      {
        label: "Page Size Organizational Chart",
        component: <PageSizeDiagram />
      },
      {
        label: "Auto size diagram in article",
        component: <AutoSize />
      }
    ]
  },
  {
    label: "User interface events & options",
    items: [
      {
        label: "Selecting cursor item",
        component: <SelectingCursorItem />
      },
      {
        label: "Selecting highlight item",
        component: <SelectingHighlightItem />
      },
      {
        label: "Selected items & Check boxes",
        component: <SelectedItems />
      },
      {
        label: "Show Frame",
        component: <ShowFrame />
      },
      {
        label: "Buttons panel",
        component: <ButtonsPanel />
      },
      {
        label: "Item and group title colors",
        component: <ItemAndGroupTitleColors />
      },
      {
        label: "Labels",
        component: <Labels />
      }
    ]
  },
  {
    label: "Organizational Chart Layout Options",
    items: [
      {
        label: "Children Placement",
        component: <ChildrenPlacementType />
      },
      {
        label: "Children & Assistants Levels",
        component: <ChildrenAndAssitantsLevelOffset />
      },
      {
        label: "Adviser and Assistant item types",
        component: <AdviserAndAssistantItemTypes />
      },
      {
        label: "SubAdviser and SubAssistant item types",
        component: <SubAdviserAndSubAssistantItemTypes />
      },
      {
        label: "General Partner item type",
        component: <GeneralPartnerItemType />
      },
      {
        label: "Limited Partner item type",
        component: <LimitedPartnerItemType />
      },
      {
        label: "Adviser Partner item type",
        component: <AdviserPartnerItemType />
      },
      {
        label: "Multiple root items in chart",
        component: <MultipleRootItemsInChart />
      },
      {
        label: "Matrix layout of multiple root items in chart",
        component: <MatrixLayoutOfMultipleRootItemsInChart />
      },
      {
        label: "Selection path mode",
        component: <SelectionPathMode />
      },
      {
        label: "Inactive Items in layout",
        component: <InactiveItems />
      },
      {
        label: "Custom layout with invisible items",
        component: <CustomLayoutWithInvisibleItems />
      },
      {
        label: "Assitants Children Placement",
        component: <PlaceAssistantsAboveChildren />
      },
      {
        label: "Advisers Children Placement",
        component: <PlaceAdvisersAboveChildren />
      },
      {
        label: "Skip levels",
        component: <SkippedLevels />
      }
    ]
  },
  {
    label: "Family Diagram Laout Use Cases",
    items: [
      {
        label: "Inactive Family Items in layout",
        component: <InactiveFamilyItems />
      },
      {
        label: "Spouses having no children in Family Layout",
        component: <SpousesInFamilyLayout />
      },
      {
        label: "Matrix Nodes layout in Family Chart",
        component: <MatrixLayoutInFamilyChart />
      },
      {
        label: "Labels cascades over connection lines in family chart",
        component: <LabelsCascadesInFamilyChart />
      },
      {
        label: "Nodes ordering",
        component: <FamilyChartItemsOrdering />
      },
      {
        label: "Families ordering",
        component: <MultipleFamiliesOrdering />
      },
      {
        label: "Primary Parent",
        component: <FamilyChartPrimaryParent />
      },
      {
        label: "Loops Layout Mode",
        component: <LoopsInFamilyChart />
      },
      {
        label: "Selection path mode",
        component: <SelectionPathModeInFamilyChart />
      }
    ]
  },
  {
    label: "Item Template Use Cases",
    items: [
      {
        label: "Item template",
        component: <ItemTemplate />
      },
      {
        label: "Drag & Drop Support",
        component: <DragNDrop />
      },
      {
        label: "Drag To Trash bin",
        component: <DragToTrashBin />
      },
      {
        label: "Zoom using item template",
        component: <ZoomWithItemTemplate />
      },
      {
        label: "Zoom using CSS Scale Transform",
        component: <ZoomWithCSSScaleTransform />
      },
      {
        label: "Labels & Item Template",
        component: <ItemTemplateLabel />
      },
      {
        label: "Selection Checkbox Inside Item Template",
        component: <SelectionCheckboxInItemTemplate />
      },
      {
        label: "Cursor Template",
        component: <CursorTemplate />
      },
      {
        label: "Highlight template",
        component: <HighlightTemplate />
      }
    ]
  },
  {
    label: "Annotations",
    items: [
      {
        label: "On-screen Connector Annotation",
        component: <ConnectorAnnotation />
      },
      {
        label: "Shape & Background Annotations",
        component: <ShapeAnnotation />
      },
      {
        label: "Highlight Path Annotation",
        component: <HighlightPathAnnotation />
      },
      {
        label: "PERT chart & Critical Path Visualization",
        component: <PERTChart />
      },
      {
        label: "Routing Highlight Path Annotation for hidden grand parents connections",
        component: <FamilyHideGrandParentsConnections />
      }
    ]
  }
];

export default SamplesList;