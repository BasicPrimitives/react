"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _basicprimitives = require("basicprimitives");
var _AbstractTemplate2 = _interopRequireDefault(require("./AbstractTemplate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ItemTemplate = /*#__PURE__*/function (_AbstractTemplate) {
  _inherits(ItemTemplate, _AbstractTemplate);
  var _super = _createSuper(ItemTemplate);
  function ItemTemplate(options, config) {
    var _this;
    _classCallCheck(this, ItemTemplate);
    _this = _super.call(this);
    _this.options = options;
    _this.config = config;
    _this.render = _this.render.bind(_assertThisInitialized(_this));

    // It is unlikly that anybody would use default template in final product, so
    // having in-line styles is not a problem
    var item = {
      position: "absolute",
      overflow: "visible",
      fontFamily: "Trebuchet MS, Tahoma, Verdana, Arial, sans-serif",
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
      WebkitUserSelect: "none",
      WebkitTouchCallout: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      boxSizing: "content-box"
    };
    var cornerAll = {
      MozBorderRadius: "4px",
      WebkitBorderRadius: "4px",
      KhtmlBorderRadius: "4px",
      BorderRadius: "4px"
    };
    var itemFrame = {
      border: "1px solid #dddddd",
      background: "#eeeeee",
      color: "#333333"
    };
    var defaultTemplate = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, item), cornerAll), itemFrame), {}, {
      width: "100%",
      height: "100%",
      left: "-1px",
      top: "-1px"
    });
    var title = _objectSpread(_objectSpread({}, item), {}, {
      textOverflow: "ellipsis",
      OTextOverflow: "ellipsis",
      whiteSpace: "nowrap",
      textAlign: "left",
      fontSize: "14px",
      lineHeight: "16px",
      color: "white",
      padding: 0
    });
    var background = _objectSpread(_objectSpread(_objectSpread({}, item), cornerAll), itemFrame);
    var photoFrame = _objectSpread(_objectSpread({}, item), {}, {
      border: "1px solid #cccccc",
      background: "#f6f6f6",
      color: "#1c94c4"
    });
    _this.styles = {
      defaultTemplate: defaultTemplate,
      title: _objectSpread(_objectSpread({}, title), {}, {
        top: "2px",
        left: "2px",
        right: "2px",
        height: "16px"
      }),
      background: _objectSpread(_objectSpread({}, background), {}, {
        top: "2px",
        left: "2px",
        right: "2px",
        height: "20px"
      }),
      photoFrame: _objectSpread(_objectSpread({}, photoFrame), {}, {
        top: "26px",
        left: "2px",
        width: "50px",
        height: "60px"
      }),
      photo: {
        height: "60px",
        width: "50px"
      },
      description: _objectSpread(_objectSpread({}, item), {}, {
        overflow: "hidden",
        textAlign: "left",
        top: "26px",
        left: "56px",
        right: "2px",
        bottom: "2px",
        fontSize: "12px"
      })
    };
    return _this;
  }
  _createClass(ItemTemplate, [{
    key: "render",
    value: function render(data) {
      var itemConfig = data.context;
      var _this$styles = this.styles,
        defaultTemplate = _this$styles.defaultTemplate,
        title = _this$styles.title,
        background = _this$styles.background,
        photoFrame = _this$styles.photoFrame,
        photo = _this$styles.photo,
        description = _this$styles.description;
      var itemTitleColor = itemConfig.itemTitleColor != null ? itemConfig.itemTitleColor : _basicprimitives.Colors.RoyalBlue,
        color = (0, _basicprimitives.highestContrast)(itemTitleColor, this.options.itemTitleSecondFontColor, this.options.itemTitleFirstFontColor);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: defaultTemplate
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, background), {}, {
          backgroundColor: itemTitleColor
        })
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread(_objectSpread({}, title), {}, {
          color: color
        })
      }, itemConfig.title)), /*#__PURE__*/_react["default"].createElement("div", {
        style: photoFrame
      }, /*#__PURE__*/_react["default"].createElement("img", {
        style: photo,
        src: itemConfig.image,
        alt: itemConfig.title
      })), /*#__PURE__*/_react["default"].createElement("div", {
        style: description
      }, itemConfig.description));
    }
  }]);
  return ItemTemplate;
}(_AbstractTemplate2["default"]);
;
var _default = ItemTemplate;
exports["default"] = _default;