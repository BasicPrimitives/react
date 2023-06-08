import React, { Component } from 'react';
import { OrgDiagram } from '../Diagrams';
import { Enabled, PageFitMode, GroupByType, OrgItemConfig, ChildrenPlacementType } from 'basicprimitives';
import photos from '../photos';

class Sample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alignBranches: false
    }
  }

  onAlignBranches(alignBranches) {
    this.setState({ alignBranches });
  }

  render() {
    const { alignBranches } = this.state;
    const config = {
      alignBranches,
      hasSelectorCheckbox: Enabled.False,
      pageFitMode: PageFitMode.None,
      arrowsDirection: GroupByType.Children,
      defaultTemplateName: "info",
      templates: [{
        name: "info",
        itemSize: { width: 80, height: 36 },
        minimizedItemSize: { width: 3, height: 3 },
        highlightPadding: { left: 4, top: 4, right: 4, bottom: 4 },
        onItemRender: ({ context: itemConfig }) => {
          return <div className="InfoTemplate">{itemConfig.title}</div>;
        }
      }],
      items: [
        new OrgItemConfig({
          id: 1,
          parent: null,
          title: "Branch 1",
          childrenPlacementType: ChildrenPlacementType.Matrix,
        }),
        new OrgItemConfig({
          id: 10,
          parent: 1,
          levelOffset: 0,
          title: "Child 1 at row 0",
        }),
        new OrgItemConfig({
          id: 11,
          parent: 1,
          levelOffset: 0,
          title: "Child 2 at row 0",
        }),
        new OrgItemConfig({
          id: 12,
          parent: 1,
          levelOffset: 1,
          title: "Child 3 at row 1",
        }),
        new OrgItemConfig({
          id: 13,
          parent: 1,
          levelOffset: 1,
          title: "Child 4 at row 1",
        }),
        new OrgItemConfig({
          id: 14,
          parent: 1,
          levelOffset: 1,
          title: "Child 5 at row 1",
        }),
        new OrgItemConfig({
          id: 15,
          parent: 1,
          levelOffset: 1,
          title: "Child 6 at row 1",
        }),

        new OrgItemConfig({ id: 2, parent: 1, title: "Child 7" }),
        new OrgItemConfig({ id: 3, parent: 1, title: "Child 8" }),
        new OrgItemConfig({ id: 4, parent: 1, title: "Child 9" }),
        new OrgItemConfig({ id: 5, parent: 1, title: "Child 10" }),
        new OrgItemConfig({ id: 6, parent: 1, title: "Child 11" }),
        new OrgItemConfig({ id: 7, parent: 1, title: "Child 12" }),
        new OrgItemConfig({ id: 8, parent: 1, title: "Child 13" }),
        new OrgItemConfig({ id: 9, parent: 1, title: "Child 14" }),

        /* Branch 2 */
        new OrgItemConfig({
          id: 101,
          parent: null,
          title: "Branch 2",
        }),
        new OrgItemConfig({
          id: 102,
          parent: 101,
          levelOffset: 1,
          title: "Child 1 at row 1",
        }),
        new OrgItemConfig({
          id: 103,
          parent: 101,
          levelOffset: 1,
          title: "Child 2 at row 1",
          childrenPlacementType: ChildrenPlacementType.Vertical,
        }),
        new OrgItemConfig({
          id: 104,
          parent: 103,
          title: "Sub Child 3",
        }),
        new OrgItemConfig({
          id: 105,
          parent: 103,
          title: "Sub Child 4",
        }),
        new OrgItemConfig({
          id: 106,
          parent: 101,
          title: "Child 3",
        }),
        new OrgItemConfig({
          id: 107,
          parent: 101,
          title: "Child 4",
        })
      ]
    };

    return <>
      <p>Enable cross-branch children alignment:
      <br />
        <label>
          <input
            onChange={() => this.onAlignBranches(true)}
            name="alignBranches"
            type="radio"
            value="1"
            checked={alignBranches === true ? 'checked' : ''}
          />
          True
        </label>
        <br />
        <label>
          <input
            onChange={() => this.onAlignBranches(false)}
            name="alignBranches"
            type="radio"
            value="0"
            checked={alignBranches === false ? 'checked' : ''}
          />
          False
        </label>
      </p>
      <div className="placeholder">
        <OrgDiagram centerOnCursor={true} config={config} />
      </div>
    </>
  }
}

export default Sample;
