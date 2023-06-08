"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _basicprimitives = require("basicprimitives");
var _Graphics = _interopRequireDefault(require("./Graphics"));
var _Templates = require("./Templates");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var BaseDiagram = /*#__PURE__*/function (_Component) {
  _inherits(BaseDiagram, _Component);
  var _super = _createSuper(BaseDiagram);
  function BaseDiagram(props, TaskManagerFactory, EventArgs) {
    var _this;
    _classCallCheck(this, BaseDiagram);
    _this = _super.call(this, props);
    _this.TaskManagerFactory = TaskManagerFactory;
    _this.EventArgs = EventArgs;
    var config = props.config,
      centerOnCursor = props.centerOnCursor;
    var highlightItem = config.highlightItem,
      cursorItem = config.cursorItem,
      selectedItems = config.selectedItems;
    _this.state = {
      config: config,
      viewportSize: {
        width: 0,
        height: 0
      },
      contentPosition: {
        x: 0,
        y: 0
      },
      centerOnCursor: centerOnCursor,
      highlightItem: highlightItem,
      cursorItem: cursorItem,
      selectedItems: (selectedItems || []).slice()
    };
    var viewportSize = _this.state.viewportSize;
    _this.onRefreshViewport = _this.onRefreshViewport.bind(_assertThisInitialized(_this));
    _this.onSizeChanged = _this.onSizeChanged.bind(_assertThisInitialized(_this));
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_this));
    _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onCheckboxChange = _this.onCheckboxChange.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.onFrameClick = _this.onFrameClick.bind(_assertThisInitialized(_this));
    _this.onFrameMouseMove = _this.onFrameMouseMove.bind(_assertThisInitialized(_this));
    _this.getOptions = _this.getOptions.bind(_assertThisInitialized(_this));
    _this.getGraphics = _this.getGraphics.bind(_assertThisInitialized(_this));
    _this.getLayout = _this.getLayout.bind(_assertThisInitialized(_this));
    _this.setLayout = _this.setLayout.bind(_assertThisInitialized(_this));
    _this.getEventArgs = _this.getEventArgs.bind(_assertThisInitialized(_this));
    _this.centerOnCursor = _this.centerOnCursor.bind(_assertThisInitialized(_this));
    _this.onItemRender = _this.onItemRender.bind(_assertThisInitialized(_this));
    _this.onHighlightRender = _this.onHighlightRender.bind(_assertThisInitialized(_this));
    _this.onCursorRender = _this.onCursorRender.bind(_assertThisInitialized(_this));
    _this.controlPanelRef = /*#__PURE__*/_react["default"].createRef();
    _this.frameMousePanelRef = /*#__PURE__*/_react["default"].createRef();
    _this.framePlaceholderRef = /*#__PURE__*/_react["default"].createRef();
    _this.titlesMousePanelRef = /*#__PURE__*/_react["default"].createRef();
    _this.titlesPlaceholderRef = /*#__PURE__*/_react["default"].createRef();
    _this.scrollPanelRef = /*#__PURE__*/_react["default"].createRef();
    _this.mousePanelRef = /*#__PURE__*/_react["default"].createRef();
    _this.placeholderRef = /*#__PURE__*/_react["default"].createRef();
    _this.calloutPlaceholderRef = /*#__PURE__*/_react["default"].createRef();
    _this.layoutOptions = {};
    _this.templatesHash = {};
    _this.graphics = new _Graphics["default"](viewportSize);
    _this.templates = {
      AnnotationLabelTemplate: _Templates.AnnotationLabelTemplate,
      ButtonsTemplate: _Templates.ButtonsTemplate,
      CheckBoxTemplate: _Templates.CheckBoxTemplate,
      CursorTemplate: _Templates.CursorTemplate,
      DotHighlightTemplate: _Templates.DotHighlightTemplate,
      GroupTitleTemplate: _Templates.GroupTitleTemplate,
      HighlightTemplate: _Templates.HighlightTemplate,
      ItemTemplate: _Templates.ItemTemplate,
      UserTemplate: _Templates.UserTemplate,
      CustomRenderTemplate: _Templates.CustomRenderTemplate,
      LabelAnnotationTemplate: _Templates.LabelAnnotationTemplate,
      LevelTitleTemplate: _Templates.LevelTitleTemplate,
      LevelBackgroundTemplate: _Templates.LevelBackgroundTemplate
    };
    _this.tasks = TaskManagerFactory(_this.getOptions, _this.getGraphics, _this.getLayout, _this.setLayout, _this.templates);
    return _this;
  }
  _createClass(BaseDiagram, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // The following code is ResizeObserver Polyfill
      // It is added to the rendered page to track size changes of control placeholder
      // npm install resize-observer-polyfill --save-dev
      require('resize-observer-polyfill/dist/ResizeObserver.global');
      this.observer = new ResizeObserver(this.onSizeChanged);
      this.observer.observe(this.controlPanelRef.current);
      this.centerOnCursor();
      this.fixPixelAlignment();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // destroy timer
      clearTimeout(this.timer);
      this.timer = null;
      // destroy observer
      this.observer.disconnect();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.centerOnCursor();
    }
  }, {
    key: "centerOnCursor",
    value: function centerOnCursor() {
      var centerOnCursor = this.state.centerOnCursor;
      if (centerOnCursor) {
        /* scroll to offset */
        var centerOnCursorTask = this.tasks.getTask("CenterOnCursorTask");
        var placeholderOffset = centerOnCursorTask.getPlaceholderOffset();
        var scrollLeft = placeholderOffset.x,
          scrollTop = placeholderOffset.y;
        this.scrollPanelRef.current.scrollLeft = scrollLeft;
        this.scrollPanelRef.current.scrollTop = scrollTop;
      }
    }
  }, {
    key: "fixPixelAlignment",
    value: function fixPixelAlignment() {
      var current = this.controlPanelRef.current;
      var pixelAlignmentFix = (0, _basicprimitives.getFixOfPixelAlignment)(current);
      current.style.marginLeft = pixelAlignmentFix.width + "px";
      current.style.marginTop = pixelAlignmentFix.height + "px";
    }
  }, {
    key: "onSizeChanged",
    value: function onSizeChanged() {
      var _getInnerSize = (0, _basicprimitives.getInnerSize)(this.controlPanelRef.current),
        width = _getInnerSize.width,
        height = _getInnerSize.height;
      this.setState({
        viewportSize: {
          width: width,
          height: height
        },
        centerOnCursor: true
      });
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      if (this.timer == null) {
        this.timer = setTimeout(this.onRefreshViewport, 200);
      }
    }
  }, {
    key: "onRefreshViewport",
    value: function onRefreshViewport() {
      clearTimeout(this.timer);
      this.timer = null;
      var _this$scrollPanelRef$ = this.scrollPanelRef.current,
        scrollTop = _this$scrollPanelRef$.scrollTop,
        scrollLeft = _this$scrollPanelRef$.scrollLeft;
      this.setState({
        contentPosition: {
          x: Math.floor(scrollLeft),
          y: Math.floor(scrollTop)
        },
        centerOnCursor: false
      });
    }
  }, {
    key: "onFrameMouseMove",
    value: function onFrameMouseMove(event) {
      var placeholderOffset = (0, _basicprimitives.getElementOffset)(this.frameMousePanelRef.current),
        x = event.pageX - placeholderOffset.left,
        y = event.pageY - placeholderOffset.top,
        projectItemsToFrameTask = this.tasks.getTask("ProjectItemsToFrameTask"),
        highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask");
      if (highlightItemOptionTask.hasHighlightEnabled()) {
        var itemId = projectItemsToFrameTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius());
        this.setHighlightItem(event, itemId);
      }
    }
  }, {
    key: "onFrameClick",
    value: function onFrameClick(event) {
      var placeholderOffset = (0, _basicprimitives.getElementOffset)(this.frameMousePanelRef.current),
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
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      var placeholderOffset = (0, _basicprimitives.getElementOffset)(this.mousePanelRef.current),
        x = event.pageX - placeholderOffset.left,
        y = event.pageY - placeholderOffset.top,
        createTransformTask = this.tasks.getTask("CreateTransformTask"),
        highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask");
      if (highlightItemOptionTask.hasHighlightEnabled()) {
        var itemId = createTransformTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius());
        this.setHighlightItem(event, itemId);
      }
    }
  }, {
    key: "getEventArgs",
    value: function getEventArgs(oldTreeItemId, newTreeItemId, name) {
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
        panelOffset = (0, _basicprimitives.getElementOffset)(this.mousePanelRef.current);
        offset = (0, _basicprimitives.getElementOffset)(this.scrollPanelRef.current);
        itemPosition = alignDiagramTask.getItemPosition(newTreeItemId);
        result.position = new _basicprimitives.Rect(itemPosition.actualPosition).translate(panelOffset.left, panelOffset.top).translate(-offset.left, -offset.top);
      }
      if (name != null) {
        result.name = name;
      }
      return result;
    }
  }, {
    key: "setHighlightItem",
    value: function setHighlightItem(event, newHighlightItemId) {
      var eventArgs,
        cancel = false;
      var _this$props = this.props,
        onHighlightChanging = _this$props.onHighlightChanging,
        onHighlightChanged = _this$props.onHighlightChanged;
      var highlightItem = this.state.highlightItem;
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
        }
        ;
        if (!cancel) {
          if (onHighlightChanged != null) {
            onHighlightChanged(event, eventArgs);
          }
        }
      }
    }
  }, {
    key: "setCursorItem",
    value: function setCursorItem(event, newCursorItemId) {
      var eventArgs,
        cancel = false;
      var _this$props2 = this.props,
        onCursorChanging = _this$props2.onCursorChanging,
        onCursorChanged = _this$props2.onCursorChanged;
      var cursorItem = this.state.cursorItem;
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
  }, {
    key: "onClick",
    value: function onClick(event) {
      var placeholderOffset = (0, _basicprimitives.getElementOffset)(this.mousePanelRef.current),
        x = event.pageX - placeholderOffset.left,
        y = event.pageY - placeholderOffset.top,
        createTransformTask = this.tasks.getTask("CreateTransformTask"),
        cursorItemOptionTask = this.tasks.getTask("CursorItemOptionTask"),
        highlightItemOptionTask = this.tasks.getTask("HighlightItemOptionTask"),
        newCursorItemId = createTransformTask.getTreeItemForMousePosition(x, y, highlightItemOptionTask.getGravityRadius()),
        target;
      target = event.target;
      if (newCursorItemId !== null) {
        if (target.getAttribute("name") === "checkbox" || target.getAttribute("name") === "selectiontext") {//ignore jslint
        } else {
          if (cursorItemOptionTask.hasCursorEnabled()) {
            this.setCursorItem(event, newCursorItemId);
            this.controlPanelRef.current.focus();
          }
        }
      }
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event) {
      var _this$props3 = this.props,
        onSelectionChanging = _this$props3.onSelectionChanging,
        onSelectionChanged = _this$props3.onSelectionChanged;
      var selectedItems = this.state.selectedItems;
      var newSelectedItems = [];
      var target = event.target;
      var itemid = target.getAttribute("data-id");
      var checked = event.target.checked;
      var cancel = false;
      if (itemid != null) {
        if (checked) {
          newSelectedItems = [].concat(_toConsumableArray(selectedItems), [itemid]);
        } else {
          // eslint-disable-next-line
          newSelectedItems = selectedItems.filter(function (id) {
            return id != itemid;
          }); // User type may not mach string value in data attribute
        }

        if (onSelectionChanging != null) {
          cancel = onSelectionChanging(event, selectedItems, newSelectedItems);
        }
        if (!cancel) {
          this.setState({
            selectedItems: newSelectedItems
          });
          if (onSelectionChanged != null) {
            onSelectionChanged(event, selectedItems, newSelectedItems);
          }
        }
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
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
          case 13:
            /*Enter*/
            if (cursorItemOptionTask.hasCursorEnabled()) {
              this.setCursorItem(event, navigationItem);
              event.preventDefault();
              this.controlPanelRef.current.focus();
            }
            break;
          case 40:
            /*Down*/
            direction = _basicprimitives.OrientationType.Bottom;
            break;
          case 38:
            /*Up*/
            direction = _basicprimitives.OrientationType.Top;
            break;
          case 37:
            /*Left*/
            direction = _basicprimitives.OrientationType.Left;
            break;
          case 39:
            /*Right*/
            direction = _basicprimitives.OrientationType.Right;
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
  }, {
    key: "onItemRender",
    value: function onItemRender(data) {
      var templateName = data.templateName;
      var template = this.templatesHash[templateName];
      return template.onItemRender(data);
    }
  }, {
    key: "onHighlightRender",
    value: function onHighlightRender(data) {
      var templateName = data.templateName;
      var template = this.templatesHash[templateName];
      return template.onHighlightRender(data);
    }
  }, {
    key: "onCursorRender",
    value: function onCursorRender(data) {
      var templateName = data.templateName;
      var template = this.templatesHash[templateName];
      return template.onCursorRender(data);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var config = this.props.config;
      var templates = config.templates || [];
      var effectiveTemplates = templates.map(function (template) {
        var onItemRender = template.onItemRender,
          onHighlightRender = template.onHighlightRender,
          onCursorRender = template.onCursorRender;
        return _objectSpread(_objectSpread({}, template), {}, {
          itemTemplate: !onItemRender ? null : "<p>This template is not being used in React</p>",
          highlightTemplate: !onHighlightRender ? null : "<p>This template is not being used in React</p>",
          cursorTemplate: !onCursorRender ? null : "<p>This template is not being used in React</p>"
        });
      });
      this.templatesHash = templates.reduce(function (agg, template) {
        var name = template.name;
        agg[name] = template;
        return agg;
      }, {});
      var _this$state = this.state,
        highlightItem = _this$state.highlightItem,
        cursorItem = _this$state.cursorItem,
        selectedItems = _this$state.selectedItems;
      return _objectSpread(_objectSpread({}, config), {}, {
        templates: effectiveTemplates,
        highlightItem: highlightItem,
        cursorItem: cursorItem,
        selectedItems: selectedItems,
        onItemRender: this.onItemRender,
        onCursorRender: this.onCursorRender,
        onHighlightRender: this.onHighlightRender
      });
    }
  }, {
    key: "getGraphics",
    value: function getGraphics() {
      return this.graphics;
    }
  }, {
    key: "getLayout",
    value: function getLayout() {
      var _this$state2 = this.state,
        centerOnCursor = _this$state2.centerOnCursor,
        viewportSize = _this$state2.viewportSize,
        contentPosition = _this$state2.contentPosition;
      return {
        forceCenterOnCursor: centerOnCursor,
        scrollPanelSize: new _basicprimitives.Size(viewportSize),
        placeholderOffset: new _basicprimitives.Point(contentPosition)
      };
    }
  }, {
    key: "setLayout",
    value: function setLayout(layoutOptions) {
      var autoSize = layoutOptions.autoSize,
        controlSize = layoutOptions.controlSize,
        scale = layoutOptions.scale,
        frameMousePanelRect = layoutOptions.frameMousePanelRect,
        framePlaceholderSize = layoutOptions.framePlaceholderSize,
        titlesMousePanelRect = layoutOptions.titlesMousePanelRect,
        titlesPlaceholderSize = layoutOptions.titlesPlaceholderSize,
        scrollPanelRect = layoutOptions.scrollPanelRect,
        mousePanelSize = layoutOptions.mousePanelSize,
        placeholderSize = layoutOptions.placeholderSize;
      this.layoutOptions = {
        autoSize: autoSize,
        controlSize: new _basicprimitives.Size(controlSize),
        scale: scale,
        frameMousePanelRect: new _basicprimitives.Rect(frameMousePanelRect),
        framePlaceholderSize: new _basicprimitives.Size(framePlaceholderSize),
        titlesMousePanelRect: new _basicprimitives.Rect(titlesMousePanelRect),
        titlesPlaceholderSize: new _basicprimitives.Size(titlesPlaceholderSize),
        scrollPanelRect: new _basicprimitives.Rect(scrollPanelRect),
        mousePanelSize: new _basicprimitives.Size(mousePanelSize),
        placeholderSize: new _basicprimitives.Size(placeholderSize)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var graphics = this.graphics;
      this.tasks.process('OptionsTask', null, false);
      var _this$graphics$placeh = this.graphics.placeholders,
        placeholder = _this$graphics$placeh.placeholder,
        calloutplaceholder = _this$graphics$placeh.calloutplaceholder,
        frameplaceholder = _this$graphics$placeh.frameplaceholder,
        titlesplaceholder = _this$graphics$placeh.titlesplaceholder;
      var placeholderRectCSS = placeholder.rect.getCSS();
      var _this$layoutOptions = this.layoutOptions,
        autoSize = _this$layoutOptions.autoSize,
        controlSize = _this$layoutOptions.controlSize,
        scale = _this$layoutOptions.scale,
        frameMousePanelRect = _this$layoutOptions.frameMousePanelRect,
        titlesMousePanelRect = _this$layoutOptions.titlesMousePanelRect,
        scrollPanelRect = _this$layoutOptions.scrollPanelRect,
        mousePanelSize = _this$layoutOptions.mousePanelSize;

      /* set CSS scale of content */
      var scaletext = "scale(" + scale + "," + scale + ")";
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        /* root control panel */
        ref: this.controlPanelRef,
        onKeyDown: this.onKeyDown,
        style: _objectSpread({
          position: "relative",
          overflow: "hidden",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          padding: "0px",
          marginBottom: "0px",
          marginRight: "0px"
        }, autoSize ? controlSize.getCSS() : {}),
        tabIndex: "0"
      }, frameplaceholder && /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.frameMousePanelRef,
        onMouseMove: this.onFrameMouseMove,
        onClick: this.onFrameClick,
        style: _objectSpread({
          position: "absolute",
          overflow: "hidden"
        }, frameMousePanelRect.getCSS())
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.framePlaceholderRef,
        style: _objectSpread(_objectSpread({}, frameplaceholder.rect.getCSS()), {}, {
          position: "absolute",
          overflow: "hidden",
          "transformOrigin": "0 0",
          "transform": scaletext,
          "msTransform": scaletext,
          /* IE 9 */
          "WebkitTransform": scaletext,
          /* Safari and Chrome */
          "OTransform": scaletext,
          /* Opera */
          "MozTransform": scaletext /* Firefox */
        })
      }, graphics.map(this, "frameplaceholder", function (layerKey, elements) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: layerKey,
          style: {
            position: "absolute",
            overflow: "visible",
            left: "0px",
            top: "0px"
          }
        }, elements);
      }))), titlesplaceholder && /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.titlesMousePanelRef,
        onMouseMove: this.onFrameMouseMove,
        onClick: this.onFrameClick,
        style: _objectSpread({
          position: "absolute",
          overflow: "hidden"
        }, titlesMousePanelRect.getCSS())
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.titlesPlaceholderRef,
        style: _objectSpread(_objectSpread({}, titlesplaceholder.rect.getCSS()), {}, {
          position: "absolute",
          overflow: "hidden",
          "transformOrigin": "0 0",
          "transform": scaletext,
          "msTransform": scaletext,
          /* IE 9 */
          "WebkitTransform": scaletext,
          /* Safari and Chrome */
          "OTransform": scaletext,
          /* Opera */
          "MozTransform": scaletext /* Firefox */
        })
      }, graphics.map(this, "titlesplaceholder", function (layerKey, elements) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: layerKey,
          style: {
            position: "absolute",
            overflow: "visible",
            left: "0px",
            top: "0px"
          }
        }, elements);
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.scrollPanelRef,
        onScroll: this.onScroll,
        style: _objectSpread(_objectSpread({
          position: "absolute",
          overflow: "auto",
          WebkitOverflowScrolling: "touch"
        }, scrollPanelRect.getCSS()), {}, {
          border: scrollPanelRect.x > 0 ? "1px dotted #dddddd" : ""
        })
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.mousePanelRef,
        onMouseMove: this.onMouseMove,
        onClick: this.onClick,
        onChange: this.onCheckboxChange,
        style: _objectSpread({
          position: "absolute",
          overflow: "hidden"
        }, mousePanelSize.getCSS())
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.placeholderRef,
        style: _objectSpread(_objectSpread({}, placeholderRectCSS), {}, {
          position: "absolute",
          overflow: "hidden",
          "transformOrigin": "0 0",
          "transform": scaletext,
          "msTransform": scaletext,
          /* IE 9 */
          "WebkitTransform": scaletext,
          /* Safari and Chrome */
          "OTransform": scaletext,
          /* Opera */
          "MozTransform": scaletext /* Firefox */
        })
      }, graphics.map(this, "placeholder", function (layerKey, elements) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: layerKey,
          style: {
            position: "absolute",
            overflow: "visible",
            left: "0px",
            top: "0px"
          }
        }, elements);
      }), calloutplaceholder && /*#__PURE__*/_react["default"].createElement("div", {
        key: "Callout",
        ref: this.calloutPlaceholderRef,
        style: {
          position: "absolute",
          overflow: "visible",
          left: calloutplaceholder.rect.x + "px",
          top: calloutplaceholder.rect.y + "px"
        }
      }, graphics.map(this, "calloutplaceholder", function (layerKey, elements) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: layerKey,
          style: {
            position: "absolute",
            overflow: "visible"
          }
        }, elements);
      })))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var nextConfig = nextProps.config,
        centerOnCursor = nextProps.centerOnCursor;
      var config = state.config;
      if (config !== nextConfig) {
        var highlightItem = nextConfig.highlightItem,
          cursorItem = nextConfig.cursorItem,
          selectedItems = nextConfig.selectedItems;
        return {
          config: nextConfig,
          highlightItem: highlightItem,
          cursorItem: cursorItem,
          selectedItems: (selectedItems || []).slice(),
          centerOnCursor: centerOnCursor
        };
      }
      return null;
    }
  }]);
  return BaseDiagram;
}(_react.Component);
_defineProperty(BaseDiagram, "propTypes", {
  centerOnCursor: _propTypes["default"].bool,
  // eslint-disable-line react/no-unused-prop-types
  onHighlightChanging: _propTypes["default"].func,
  // eslint-disable-line react/no-unused-prop-types
  onHighlightChanged: _propTypes["default"].func,
  // eslint-disable-line react/no-unused-prop-types
  onCursorChanging: _propTypes["default"].func,
  // eslint-disable-line react/no-unused-prop-types
  onCursorChanged: _propTypes["default"].func,
  // eslint-disable-line react/no-unused-prop-types
  onSelectionChanging: _propTypes["default"].func,
  // eslint-disable-line react/no-unused-prop-types
  onSelectionChanged: _propTypes["default"].func // eslint-disable-line react/no-unused-prop-types
});
_defineProperty(BaseDiagram, "defaultProps", {
  centerOnCursor: true,
  onHighlightChanging: null,
  onHighlightChanged: null,
  onCursorChanging: null,
  onCursorChanged: null,
  onSelectionChanging: null,
  onSelectionChanged: null
});
var _default = BaseDiagram;
exports["default"] = _default;