import React, { Component } from 'react';
import PropTypes from 'prop-types';
import primitives from 'basicprimitives';
import './Diagrams.css';
import Graphics from './Graphics';
import {
  AnnotationLabelTemplate,
  ButtonsTemplate,
  CheckBoxTemplate,
  CursorTemplate,
  DotHighlightTemplate,
  GroupTitleTemplate,
  HighlightTemplate,
  ItemTemplate,
  UserTemplate,
  LabelAnnotationTemplate
} from './Templates';

class BaseDiagram extends Component {
  static propTypes = {
    centerOnCursor: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    onHighlightChanging: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onHighlightChanged: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onCursorChanging: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onCursorChanged: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onSelectionChanging: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
    onSelectionChanged: PropTypes.func // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
    centerOnCursor: true,
    onHighlightChanging: null,
    onHighlightChanged: null,
    onCursorChanging: null,
    onCursorChanged: null,
    onSelectionChanging: null,
    onSelectionChanged: null
  };

  constructor(props, namespace) {
    super(props);

    this.namespace = namespace;

    const { config, centerOnCursor } = props;
    const { highlightItem, cursorItem, selectedItems } = config;

    this.state = {
      viewportSize: {
        width: 0,
        height: 0
      },
      contentPosition: {
        x: 0,
        y: 0
      },
      centerOnCursor,
      highlightItem,
      cursorItem,
      selectedItems: (selectedItems || []).slice()
    };

    const { viewportSize } = this.state;

    this.onRefreshViewport = this.onRefreshViewport.bind(this);
    this.onSizeChanged = this.onSizeChanged.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);

    this.getOptions = this.getOptions.bind(this);
    this.getGraphics = this.getGraphics.bind(this);
    this.getLayout = this.getLayout.bind(this);
    this.setLayout = this.setLayout.bind(this);
    this.getEventArgs = this.getEventArgs.bind(this);
    this.centerOnCursor = this.centerOnCursor.bind(this);

    this.onItemRender = this.onItemRender.bind(this);
    this.onHighlightRender = this.onHighlightRender.bind(this);
    this.onCursorRender = this.onCursorRender.bind(this);


    this.scrollPanelRef = React.createRef();
    this.mousePanelRef = React.createRef();
    this.placeholderRef = React.createRef();
    this.calloutPlaceholderRef = React.createRef();

    this.layoutOptions = {};
    this.templatesHash = {};
    this.graphics = new Graphics(viewportSize);
    this.templates = {
      AnnotationLabelTemplate,
      ButtonsTemplate,
      CheckBoxTemplate,
      CursorTemplate,
      DotHighlightTemplate,
      GroupTitleTemplate,
      HighlightTemplate,
      ItemTemplate,
      UserTemplate,
      LabelAnnotationTemplate
    }
    this.tasks = namespace.TaskManagerFactory(this.getOptions, this.getGraphics, this.getLayout, this.setLayout, this.templates);
  }

  componentWillReceiveProps(nextProps) {
    const { config: nextConfig, centerOnCursor } = nextProps;
    const { config } = this.props;
    if (config !== nextConfig) {
      const { highlightItem, cursorItem, selectedItems } = nextConfig;
      this.setState({
        highlightItem,
        cursorItem,
        selectedItems: (selectedItems || []).slice(),
        centerOnCursor
      });
    }
  }

  componentDidMount() {
    // The following code is ResizeObserver Polyfill
    // It is added to the rendered page to track size changes of control placeholder
    // npm install resize-observer-polyfill --save-dev
    require('resize-observer-polyfill/dist/ResizeObserver.global');
    this.observer = new ResizeObserver(this.onSizeChanged);
    this.observer.observe(this.scrollPanelRef.current);

    this.centerOnCursor();
    this.fixPixelAlignment();
  }

  componentWillUnmount() {
    // destroy timer
    clearTimeout(this.timer);
    this.timer = null;
    // destroy observer
    this.observer.disconnect();
  }

  componentDidUpdate() {
    this.centerOnCursor();
  }

  centerOnCursor() {
    const { centerOnCursor } = this.state;
    if (centerOnCursor) {
      /* scroll to offset */
      const centerOnCursorTask = this.tasks.getTask("CenterOnCursorTask");
      const placeholderOffset = centerOnCursorTask.getPlaceholderOffset();
      const { x: scrollLeft, y: scrollTop } = placeholderOffset;
      this.scrollPanelRef.current.scrollLeft = scrollLeft;
      this.scrollPanelRef.current.scrollTop = scrollTop;
    }
  }

  fixPixelAlignment() {
    const { current } = this.scrollPanelRef;
    var pixelAlignmentFix = primitives.common.getFixOfPixelALignment(current);
    current.style.marginLeft = pixelAlignmentFix.width + "px";
    current.style.marginTop = pixelAlignmentFix.height + "px";
  }

  onSizeChanged() {
    const { width, height } = primitives.common.getInnerSize(this.scrollPanelRef.current)
    this.setState({
      viewportSize: {
        width,
        height
      },
      centerOnCursor: true
    });
  }

  onScroll() {
    if (this.timer == null) {
      this.timer = setTimeout(this.onRefreshViewport, 200);
    }
  }

  onRefreshViewport() {
    clearTimeout(this.timer);
    this.timer = null;

    const { scrollTop, scrollLeft } = this.scrollPanelRef.current;
    this.setState({
      contentPosition: { x: Math.floor(scrollLeft), y: Math.floor(scrollTop) },
      centerOnCursor: false
    });
  }

  onMouseMove(event) {
    const placeholderOffset = primitives.common.getElementOffset(this.mousePanelRef.current),
      x = event.pageX - placeholderOffset.left,
      y = event.pageY - placeholderOffset.top,
      createTransformTask = this.tasks.getTask("CreateTransformTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask");

    if (highlightItemOptionTask.hasHighlightEnabled()) {
      const itemId = createTransformTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius());
      this.setHighlightItem(event, itemId);
    }
  }

  getEventArgs(oldTreeItemId, newTreeItemId, name) {
    var result = new this.namespace.EventArgs(),
      combinedContextsTask = this.tasks.getTask("CombinedContextsTask"),
      alignDiagramTask = this.tasks.getTask("AlignDiagramTask"),
      oldItemConfig = combinedContextsTask.getConfig(oldTreeItemId),
      newItemConfig = combinedContextsTask.getConfig(newTreeItemId),
      itemPosition,
      offset,
      panelOffset;

    if (oldItemConfig && oldItemConfig.id != null) {
      result.oldContext = oldItemConfig;
    }

    if (newItemConfig && newItemConfig.id != null) {
      result.context = newItemConfig;

      if (newItemConfig.parent !== null) {
        result.parentItem = combinedContextsTask.getConfig(newItemConfig.parent);
      }

      panelOffset = primitives.common.getElementOffset(this.mousePanelRef.current);
      offset = primitives.common.getElementOffset(this.scrollPanelRef.current);
      itemPosition = alignDiagramTask.getItemPosition(newTreeItemId);
      result.position = new primitives.common.Rect(itemPosition.actualPosition)
        .translate(panelOffset.left, panelOffset.top)
        .translate(-offset.left, -offset.top);
    }

    if (name != null) {
      result.name = name;
    }

    return result;
  }

  setHighlightItem(event, newHighlightItemId) {
    let eventArgs, cancel = false;
    const { onHighlightChanging, onHighlightChanged } = this.props;
    const { highlightItem } = this.state;
    if (newHighlightItemId !== highlightItem) {
      eventArgs = this.getEventArgs(highlightItem, newHighlightItemId);

      if (onHighlightChanging != null) {
        if (!onHighlightChanging(event, eventArgs)) {
          cancel = true;
          this.setState({
            highlightItem: newHighlightItemId
          });
        }
      } else {
        this.setState({
          highlightItem: newHighlightItemId
        });
      };
      if (!cancel) {
        if (onHighlightChanged != null) {
          onHighlightChanged(event, eventArgs);
        }
      }
    }
  }

  setCursorItem(event, newCursorItemId) {
    let eventArgs, cancel = false;
    const { onCursorChanging, onCursorChanged } = this.props;
    const { cursorItem } = this.state;
    if (newCursorItemId !== cursorItem) {
      eventArgs = this.getEventArgs(cursorItem, newCursorItemId);

      if (onCursorChanging != null) {
        if (!onCursorChanging(event, eventArgs)) {
          cancel = true;
          this.setState({
            cursorItem: newCursorItemId,
            centerOnCursor: true
          });
        }
      } else {
        this.setState({
          cursorItem: newCursorItemId,
          centerOnCursor: true
        });
      }


      if (!cancel) {
        if (onCursorChanged != null) {
          onCursorChanged(event, eventArgs);
        }
      }
    }
  }

  onClick(event) {
    var placeholderOffset = primitives.common.getElementOffset(this.mousePanelRef.current),
      x = event.pageX - placeholderOffset.left,
      y = event.pageY - placeholderOffset.top,
      createTransformTask = this.tasks.getTask("CreateTransformTask"),
      cursorItemOptionTask = this.tasks.getTask("CursorItemOptionTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask"),
      newCursorItemId = createTransformTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius()),
      target;
    target = event.target;
    if (newCursorItemId !== null) {
      if (target.getAttribute("name") === "checkbox" || target.getAttribute("name") === "selectiontext") { //ignore jslint

      }
      else {
        if (cursorItemOptionTask.hasCursorEnabled()) {
          this.setCursorItem(event, newCursorItemId);
          this.scrollPanelRef.current.focus();
        }
      }
    }
  }

  onCheckboxChange(event) {
    const { onSelectionChanging, onSelectionChanged } = this.props;
    let { selectedItems } = this.state;
    let newSelectedItems = [];
    const { target } = event;
    var itemid = target.getAttribute("data-id");
    const checked = event.target.checked
    let cancel = false;
    if (itemid != null) {
      if (checked) {
        newSelectedItems = [...selectedItems, itemid];
      }
      else {
        // eslint-disable-next-line
        newSelectedItems = selectedItems.filter(id => id != itemid); // User type may not mach string value in data attribute
      }
      if (onSelectionChanging != null) {
        cancel = onSelectionChanging(event, selectedItems, newSelectedItems)
      }
      if (!cancel) {
        this.setState({
          selectedItems: newSelectedItems
        })

        if (onSelectionChanged != null) {
          onSelectionChanged(event, selectedItems, newSelectedItems);
        }
      }
    }
  }

  onKeyDown(event) {
    var highlightItemTask = this.tasks.getTask("HighlightItemTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask"),
      cursorItemTask = this.tasks.getTask("CursorItemTask"),
      cursorItemOptionTask = this.tasks.getTask("CursorItemOptionTask"),
      alignDiagramTask = this.tasks.getTask('AlignDiagramTask'),
      createTransformTask = this.tasks.getTask('CreateTransformTask'),
      transform = createTransformTask.getTransform(),
      navigationItem = null,
      newNavigationItem,
      direction = null,
      accepted;

    if (highlightItemOptionTask.hasHighlightEnabled() && cursorItemOptionTask.hasCursorEnabled()) {
      navigationItem = highlightItemTask.getHighlightTreeItem();
      if (navigationItem === null) {
        navigationItem = cursorItemTask.getCursorTreeItem();
      }
    } else if (highlightItemOptionTask.hasHighlightEnabled()) {
      navigationItem = highlightItemTask.getHighlightTreeItem();
    } else if (cursorItemOptionTask.hasCursorEnabled()) {
      navigationItem = cursorItemTask.getCursorTreeItem();
    }


    if (navigationItem != null) {
      switch (event.which) {
        case 13: /*Enter*/
          if (cursorItemOptionTask.hasCursorEnabled()) {
            this.setCursorItem(event, navigationItem);
            event.preventDefault();
            this.scrollPanelRef.current.focus();
          }
          break;
        case 40: /*Down*/
          direction = primitives.common.OrientationType.Bottom;
          break;
        case 38: /*Up*/
          direction = primitives.common.OrientationType.Top;
          break;
        case 37: /*Left*/
          direction = primitives.common.OrientationType.Left;
          break;
        case 39: /*Right*/
          direction = primitives.common.OrientationType.Right;
          break;
        default:
          break;
      }

      if (direction != null) {

        accepted = false;

        while (!accepted) {
          accepted = true;

          direction = transform.getOrientation(direction);
          newNavigationItem = alignDiagramTask.getNextItem(navigationItem, direction);

          if (newNavigationItem != null) {
            event.preventDefault();
            if (highlightItemOptionTask.hasHighlightEnabled()) {
              this.setHighlightItem(event, newNavigationItem);
            } else if (cursorItemOptionTask.hasCursorEnabled()) {
              this.setCursorItem(event, newNavigationItem);
            }

          }
        }
        this.scrollPanelRef.current.focus();
      }
    }
  }

  onItemRender(data) {
    const { templateName } = data;
    const template = this.templatesHash[templateName];
    return template.onItemRender(data);
  }

  onHighlightRender(data) {
    const { templateName } = data;
    const template = this.templatesHash[templateName];
    return template.onHighlightRender(data);
  }

  onCursorRender(data) {
    const { templateName } = data;
    const template = this.templatesHash[templateName];
    return template.onCursorRender(data);
  }

  getOptions() {
    const { config } = this.props;
    const templates = config.templates || [];

    const effectiveTemplates = templates.map(template => {
      const { onItemRender, onHighlightRender, onCursorRender } = template;
      return {
        ...template,
        itemTemplate: (!onItemRender ? null : "<p>This template is not being used in React</p>"),
        highlightTemplate: (!onHighlightRender ? null : "<p>This template is not being used in React</p>"),
        cursorTemplate: (!onCursorRender ? null : "<p>This template is not being used in React</p>")
      };
    });

    this.templatesHash = templates.reduce((agg, template) => {
      const { name } = template;
      agg[name] = template;
      return agg;
    }, {});

    const { highlightItem, cursorItem, selectedItems } = this.state;
    return {
      ...config,
      templates: effectiveTemplates,
      highlightItem,
      cursorItem,
      selectedItems,
      onItemRender: this.onItemRender,
      onCursorRender: this.onCursorRender,
      onHighlightRender: this.onHighlightRender
    };
  }

  getGraphics() {
    return this.graphics;
  }

  getLayout() {
    const { centerOnCursor, viewportSize, contentPosition } = this.state;
    return {
      forceCenterOnCursor: centerOnCursor,
      scrollPanelSize: viewportSize,
      placeholderOffset: contentPosition
    }
  }

  setLayout(layoutOptions) {
    const { autoSize, scale, contentSize, scrollPanelSize, autoSizeMinimum, autoSizeMaximum } = layoutOptions;
    /* set size of panel with content */
    let mousePanelSize = new primitives.common.Size(contentSize);
    mousePanelSize.scale(1 * scale);

    let scrollPanelAutoSize = new primitives.common.Size(scrollPanelSize);
    if (autoSize) {
      /* resize element to fit placeholder if control in autosize mode */
      scrollPanelAutoSize = new primitives.common.Size(mousePanelSize.width + 25, mousePanelSize.height + 25);
      scrollPanelAutoSize.cropBySize(autoSizeMaximum);
      scrollPanelAutoSize.addSize(autoSizeMinimum);//ignore jslint
    }

    this.layoutOptions = {
      autoSize,
      scrollPanelSize: scrollPanelAutoSize,
      mousePanelSize,
      scale
    }

    return scrollPanelAutoSize;
  }

  render() {
    const graphics = this.graphics;
    this.tasks.process('OptionsTask', null, false);

    const { placeholder, calloutplaceholder } = this.graphics.placeholders;
    const placeholderRectCSS = placeholder.rect.getCSS();

    const { autoSize, scale, scrollPanelSize, mousePanelSize } = this.layoutOptions;

    /* set CSS scale of content */
    var scaletext = "scale(" + scale + "," + scale + ")";

    return <>
      <div
        ref={this.scrollPanelRef}
        className="BPScrollPanel"
        onScroll={this.onScroll}
        onKeyDown={this.onKeyDown}
        style={autoSize ? scrollPanelSize.getCSS() : {}}
        tabIndex="0"
      >
        <div
          ref={this.mousePanelRef}
          className="BPMousePanel"
          onMouseMove={this.onMouseMove}
          onClick={this.onClick}
          onChange={this.onCheckboxChange}
          style={mousePanelSize.getCSS()}>
          <div
            ref={this.placeholderRef}
            className="BPPlaceholderPanel"
            style={{
              ...placeholderRectCSS,
              "transformOrigin": "0 0",
              "transform": scaletext,
              "msTransform": scaletext, /* IE 9 */
              "WebkitTransform": scaletext, /* Safari and Chrome */
              "OTransform": scaletext, /* Opera */
              "MozTransform": scaletext /* Firefox */
            }}>
            {graphics.map(this, "placeholder", (layerKey, elements) =>
              <div key={layerKey} className="BPLayerPanel" style={{ left: "0px", top: "0px" }}>
                {elements}
              </div>
            )}
            {calloutplaceholder &&
              <div key="Callout"
                className="BPCalloutPlaceholderPanel"
                style={{
                  left: calloutplaceholder.rect.x + "px",
                  top: calloutplaceholder.rect.y + "px"
                }}>
                {graphics.map(this, "calloutplaceholder", (layerKey, elements) =>
                  <div key={layerKey} className="BPLayerPanel">
                    {elements}
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      </div>
    </>;
  }
}

export default BaseDiagram;
