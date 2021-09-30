import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getFixOfPixelAlignment, getInnerSize, getElementOffset,
  OrientationType,
  Rect, Size, Point
} from 'basicprimitives';
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
  CustomRenderTemplate,
  LabelAnnotationTemplate,
  LevelTitleTemplate,
  LevelBackgroundTemplate
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

  constructor(props, TaskManagerFactory, EventArgs) {
    super(props);

    this.TaskManagerFactory = TaskManagerFactory;
    this.EventArgs = EventArgs;

    const { config, centerOnCursor } = props;
    const { highlightItem, cursorItem, selectedItems } = config;

    this.state = {
      config,
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

    this.onFrameClick = this.onFrameClick.bind(this);
    this.onFrameMouseMove = this.onFrameMouseMove.bind(this);

    this.getOptions = this.getOptions.bind(this);
    this.getGraphics = this.getGraphics.bind(this);
    this.getLayout = this.getLayout.bind(this);
    this.setLayout = this.setLayout.bind(this);
    this.getEventArgs = this.getEventArgs.bind(this);
    this.centerOnCursor = this.centerOnCursor.bind(this);

    this.onItemRender = this.onItemRender.bind(this);
    this.onHighlightRender = this.onHighlightRender.bind(this);
    this.onCursorRender = this.onCursorRender.bind(this);


    this.controlPanelRef = React.createRef();
    this.frameMousePanelRef = React.createRef();
    this.framePlaceholderRef = React.createRef();
    this.titlesMousePanelRef = React.createRef();
    this.titlesPlaceholderRef = React.createRef();
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
      CustomRenderTemplate,
      LabelAnnotationTemplate,
      LevelTitleTemplate,
      LevelBackgroundTemplate
    }
    this.tasks = TaskManagerFactory(this.getOptions, this.getGraphics, this.getLayout, this.setLayout, this.templates);
  }

  static getDerivedStateFromProps(nextProps, state) {
    const { config: nextConfig, centerOnCursor } = nextProps;
    const { config } = state;
    if (config !== nextConfig) {
      const { highlightItem, cursorItem, selectedItems } = nextConfig;
      return {
        config: nextConfig,
        highlightItem,
        cursorItem,
        selectedItems: (selectedItems || []).slice(),
        centerOnCursor
      };
    }
    return null;
  }

  componentDidMount() {
    // The following code is ResizeObserver Polyfill
    // It is added to the rendered page to track size changes of control placeholder
    // npm install resize-observer-polyfill --save-dev
    require('resize-observer-polyfill/dist/ResizeObserver.global');
    this.observer = new ResizeObserver(this.onSizeChanged);
    this.observer.observe(this.controlPanelRef.current);

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
    const { current } = this.controlPanelRef;
    var pixelAlignmentFix = getFixOfPixelAlignment(current);
    current.style.marginLeft = pixelAlignmentFix.width + "px";
    current.style.marginTop = pixelAlignmentFix.height + "px";
  }

  onSizeChanged() {
    const { width, height } = getInnerSize(this.controlPanelRef.current)
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

  onFrameMouseMove(event) {const placeholderOffset = getElementOffset(this.frameMousePanelRef.current),
      x = event.pageX - placeholderOffset.left,
      y = event.pageY - placeholderOffset.top,
      projectItemsToFrameTask = this.tasks.getTask("ProjectItemsToFrameTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask");

    if (highlightItemOptionTask.hasHighlightEnabled()) {
      const itemId = projectItemsToFrameTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius());
      this.setHighlightItem(event, itemId);
    }
  }

  onFrameClick(event) {
    const placeholderOffset = getElementOffset(this.frameMousePanelRef.current),
      x = event.pageX - placeholderOffset.left,
      y = event.pageY - placeholderOffset.top,
      projectItemsToFrameTask = this.tasks.getTask("ProjectItemsToFrameTask"),
      cursorItemOptionTask = this.tasks.getTask("CursorItemOptionTask"),
      highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask"),
      newCursorItemId = projectItemsToFrameTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius());
    if (newCursorItemId !== null) {
      if (cursorItemOptionTask.hasCursorEnabled()) {
        this.setCursorItem(event, newCursorItemId);
        this.controlPanelRef.current.focus();
      }
    }
  }

  onMouseMove(event) {
    const placeholderOffset = getElementOffset(this.mousePanelRef.current),
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
    var result = new this.EventArgs(),
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

      panelOffset = getElementOffset(this.mousePanelRef.current);
      offset = getElementOffset(this.scrollPanelRef.current);
      itemPosition = alignDiagramTask.getItemPosition(newTreeItemId);
      result.position = new Rect(itemPosition.actualPosition)
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
    var placeholderOffset = getElementOffset(this.mousePanelRef.current),
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
          this.controlPanelRef.current.focus();
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
            this.controlPanelRef.current.focus();
          }
          break;
        case 40: /*Down*/
          direction = OrientationType.Bottom;
          break;
        case 38: /*Up*/
          direction = OrientationType.Top;
          break;
        case 37: /*Left*/
          direction = OrientationType.Left;
          break;
        case 39: /*Right*/
          direction = OrientationType.Right;
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
        this.controlPanelRef.current.focus();
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
      scrollPanelSize: new Size(viewportSize),
      placeholderOffset: new Point(contentPosition)
    }
  }

  setLayout(layoutOptions) {
    const { 
        autoSize, // resize control if true
        controlSize, // Sets control Size in auto scale mode
        scale, // scale is needed for scale transform CSS creation
        frameMousePanelRect,
        framePlaceholderSize, // the frame content size before CSS Scale Transform applied
        titlesMousePanelRect,
        titlesPlaceholderSize, // Titles size before CSS Scale Transform applied
        scrollPanelRect,
        mousePanelSize, // Content mouse panel size
        placeholderSize // Content size before CSS Scale Transform applied
    } = layoutOptions;

    this.layoutOptions = {
      autoSize,
      controlSize: new Size(controlSize),
      scale,
      frameMousePanelRect: new Rect(frameMousePanelRect),
      framePlaceholderSize: new Size(framePlaceholderSize),

      titlesMousePanelRect: new Rect(titlesMousePanelRect),
      titlesPlaceholderSize: new Size(titlesPlaceholderSize),

      scrollPanelRect: new Rect(scrollPanelRect),
      mousePanelSize: new Size(mousePanelSize),
      placeholderSize: new Size(placeholderSize)
    }
  }

  render() {
    const graphics = this.graphics;
    this.tasks.process('OptionsTask', null, false);

    const { placeholder, calloutplaceholder, frameplaceholder, titlesplaceholder } = this.graphics.placeholders;
    const placeholderRectCSS = placeholder.rect.getCSS();

    const { 
      autoSize, // resize control if true
      controlSize, // Sets control Size in auto scale mode
      scale, // scale is needed for scale transform CSS creation
      frameMousePanelRect,
      titlesMousePanelRect,
      scrollPanelRect,
      mousePanelSize // Content mouse panel size
    } = this.layoutOptions;

    /* set CSS scale of content */
    var scaletext = "scale(" + scale + "," + scale + ")";

    return <>
      <div /* root control panel */
        ref={this.controlPanelRef}
        onKeyDown={this.onKeyDown}
        style={{
          position: "relative",
          overflow: "hidden",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          padding: "0px",
          marginBottom: "0px",
          marginRight: "0px",
          ...(autoSize ? controlSize.getCSS() : {})
        }}
        tabIndex="0"
      >
        {frameplaceholder &&
          <div
            ref={this.frameMousePanelRef}
            onMouseMove={this.onFrameMouseMove}
            onClick={this.onFrameClick}
            style={{
              position: "absolute",
              overflow: "hidden",
              ...(frameMousePanelRect.getCSS())
            }}>
            <div
              ref={this.framePlaceholderRef}
              style={{
                ...(frameplaceholder.rect.getCSS()),
                position: "absolute",
                overflow: "hidden",
                "transformOrigin": "0 0",
                "transform": scaletext,
                "msTransform": scaletext, /* IE 9 */
                "WebkitTransform": scaletext, /* Safari and Chrome */
                "OTransform": scaletext, /* Opera */
                "MozTransform": scaletext /* Firefox */
              }}>
              {graphics.map(this, "frameplaceholder", (layerKey, elements) =>
                <div key={layerKey} style={{
                  position: "absolute",
                  overflow: "visible",
                  left: "0px",
                  top: "0px"
                }}>
                  {elements}
                </div>
              )}
            </div>
          </div>
        }
        {titlesplaceholder &&
          <div
            ref={this.titlesMousePanelRef}
            onMouseMove={this.onFrameMouseMove}
            onClick={this.onFrameClick}
            style={{
              position: "absolute",
              overflow: "hidden",
              ...(titlesMousePanelRect.getCSS())
            }}>
            <div
              ref={this.titlesPlaceholderRef}
              style={{
                ...(titlesplaceholder.rect.getCSS()),
                position: "absolute",
                overflow: "hidden",
                "transformOrigin": "0 0",
                "transform": scaletext,
                "msTransform": scaletext, /* IE 9 */
                "WebkitTransform": scaletext, /* Safari and Chrome */
                "OTransform": scaletext, /* Opera */
                "MozTransform": scaletext /* Firefox */
              }}>
              {graphics.map(this, "titlesplaceholder", (layerKey, elements) =>
                <div key={layerKey} style={{
                  position: "absolute",
                  overflow: "visible",
                  left: "0px",
                  top: "0px"
                }}>
                  {elements}
                </div>
              )}
            </div>
          </div>
        }
        <div
          ref={this.scrollPanelRef}
          onScroll={this.onScroll}
          style={{
            position: "absolute",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            ...(scrollPanelRect.getCSS()),
            border: (scrollPanelRect.x > 0 ? "1px dotted #dddddd" : "")
          }}
        >
          <div
            ref={this.mousePanelRef}
            onMouseMove={this.onMouseMove}
            onClick={this.onClick}
            onChange={this.onCheckboxChange}
            style={{
              position: "absolute",
              overflow: "hidden",
              ...(mousePanelSize.getCSS())
            }}>
            <div
              ref={this.placeholderRef}
              style={{
                ...placeholderRectCSS,
                position: "absolute",
                overflow: "hidden",
                "transformOrigin": "0 0",
                "transform": scaletext,
                "msTransform": scaletext, /* IE 9 */
                "WebkitTransform": scaletext, /* Safari and Chrome */
                "OTransform": scaletext, /* Opera */
                "MozTransform": scaletext /* Firefox */
              }}>
              {graphics.map(this, "placeholder", (layerKey, elements) =>
                <div key={layerKey} style={{
                  position: "absolute",
                  overflow: "visible",
                  left: "0px",
                  top: "0px"
                }}>
                  {elements}
                </div>
              )}
              {calloutplaceholder &&
                <div
                  key="Callout"
                  ref={this.calloutPlaceholderRef}
                  style={{
                    position: "absolute",
                    overflow: "visible",
                    left: calloutplaceholder.rect.x + "px",
                    top: calloutplaceholder.rect.y + "px"
                  }}>
                  {graphics.map(this, "calloutplaceholder", (layerKey, elements) =>
                    <div key={layerKey} style={{
                      position: "absolute",
                      overflow: "visible"
                    }}>
                      {elements}
                    </div>
                  )}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}

export default BaseDiagram;
