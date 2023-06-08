"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _basicprimitives = require("basicprimitives");
var _RotatedText = _interopRequireDefault(require("./Templates/RotatedText"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Placeholder = /*#__PURE__*/_createClass(function Placeholder(name) {
  _classCallCheck(this, Placeholder);
  this.name = name;
  this.layers = {};
  this.activeLayer = null;
  this.size = null;
  this.rect = null;
  this.hasGraphics = true;
  this.isVisible = true;
});
;
var Layer = /*#__PURE__*/function () {
  function Layer(name) {
    _classCallCheck(this, Layer);
    this.name = name;
    this.items = [];
    this.polylines = [];
  }
  _createClass(Layer, [{
    key: "reset",
    value: function reset() {
      this.items = [];
      this.polylines = [];
    }
  }]);
  return Layer;
}();
;
var Graphics = /*#__PURE__*/function () {
  function Graphics(size) {
    _classCallCheck(this, Graphics);
    this.placeholders = {};
    this.activePlaceholder = null;
    this.size = size;
    this.hasGraphics = true;
    this.names = Object.keys(_basicprimitives.Layers).reduce(function (agg, key) {
      agg[_basicprimitives.Layers[key]] = key;
      return agg;
    }, []);
    this.orientations = ['Horizontal', 'RotateLeft', 'RotateRight', 'Horizontal'];
    this.horizontalAlignments = ['center', 'left', 'right'];
    this.verticalAlignments = ['top', 'middle', 'bottom'];
  }
  _createClass(Graphics, [{
    key: "clean",
    value: function clean() {
      this.placeholders = {};
      this.activePlaceholder = null;
    }
  }, {
    key: "resize",
    value: function resize(name, width, height) {
      this.activatePlaceholder(name);
      this.resizePlaceholder(this.activePlaceholder, 0, 0, width, height);
    }
  }, {
    key: "position",
    value: function position(name, left, top, width, height) {
      this.activatePlaceholder(name);
      this.resizePlaceholder(this.activePlaceholder, left, top, width, height);
    }
  }, {
    key: "show",
    value: function show(name) {
      var placeholder = this.placeholders[name];
      if (placeholder != null) {
        placeholder.isVisible = true;
      }
    }
  }, {
    key: "hide",
    value: function hide(name) {
      var placeholder = this.placeholders[name];
      if (placeholder != null) {
        placeholder.isVisible = false;
      }
    }
  }, {
    key: "resizePlaceholder",
    value: function resizePlaceholder(placeholder, left, top, width, height) {
      placeholder.size = new _basicprimitives.Size(width, height);
      placeholder.rect = new _basicprimitives.Rect(left, top, width, height);
    }
  }, {
    key: "reset",
    value: function reset(placeholderName, layerKey) {
      var layerName = this.names[layerKey];
      var placeholder = this.placeholders[placeholderName];
      if (placeholder != null) {
        var layer = placeholder.layers[layerName];
        if (layer != null) {
          layer.reset();
        }
      }
    }
  }, {
    key: "activate",
    value: function activate(placeholderName, layerKey) {
      this.activatePlaceholder(placeholderName);
      this.activateLayer(layerKey);
      return this.activePlaceholder;
    }
  }, {
    key: "activatePlaceholder",
    value: function activatePlaceholder(name) {
      var placeholder = this.placeholders[name];
      if (placeholder === undefined) {
        placeholder = new Placeholder(name);
        placeholder.size = this.size;
        placeholder.rect = new _basicprimitives.Rect(0, 0, placeholder.size.width, placeholder.size.height);
        this.placeholders[name] = placeholder;
      }
      this.activePlaceholder = placeholder;
    }
  }, {
    key: "activateLayer",
    value: function activateLayer(value) {
      var name = this.names[value];
      var layer = this.activePlaceholder.layers[name];
      if (layer === undefined) {
        layer = new Layer(name);
        this.activePlaceholder.layers[name] = layer;
      }
      this.activePlaceholder.activeLayer = layer;
    }
  }, {
    key: "map",
    value: function map(thisArg, placeholderName, onLayer) {
      var result = [];
      if (onLayer != null) {
        var placeholder = this.placeholders[placeholderName];
        this.names.forEach(function (layerKey) {
          var layer = placeholder.layers[layerKey];
          if (layer != null) {
            result.push(onLayer.call(thisArg, layerKey, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, layer.polylines.length > 0 ? /*#__PURE__*/_react["default"].createElement("svg", {
              height: placeholder.size.height,
              width: placeholder.size.width
            }, layer.polylines) : null, layer.items)));
          }
        });
      }
      return result;
    }
  }, {
    key: "text",
    value: function text(x, y, width, height, label, orientation, horizontalAlignment, verticalAlignment, attr) {
      this.activePlaceholder.activeLayer.items.push( /*#__PURE__*/_react["default"].createElement("div", {
        key: this.activePlaceholder.activeLayer.items.length,
        style: _objectSpread(_objectSpread({
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
        }, attr), {}, {
          top: y + "px",
          left: x + "px"
        })
      }, /*#__PURE__*/_react["default"].createElement(_RotatedText["default"], {
        width: width,
        height: height,
        orientation: this.orientations[orientation],
        horizontalAlignment: this.horizontalAlignments[horizontalAlignment],
        verticalAlignment: this.verticalAlignments[verticalAlignment]
      }, label)));
    }
  }, {
    key: "polylinesBuffer",
    value: function polylinesBuffer(buffer) {
      buffer.loop(this, function (polyline) {
        if (polyline.length() > 0) {
          this.polyline(polyline);
        }
      });
    }
  }, {
    key: "polyline",
    value: function polyline(polylineData) {
      var data,
        attr = polylineData.paletteItem.toAttr(),
        step,
        radius,
        cornerRadius,
        style = {};
      if (attr.fillColor !== undefined) {
        style.fill = attr.fillColor;
        style.fillOpacity = attr.opacity;
      } else {
        style.fillOpacity = 0;
      }
      if (attr.lineWidth !== undefined && attr.borderColor !== undefined) {
        style.stroke = attr.borderColor;
        style.strokeWidth = attr.lineWidth;
        if (attr.opacity !== undefined) {
          style.strokeOpacity = attr.opacity;
        } else {
          style.strokeOpacity = 1;
        }
      } else {
        style.stroke = "transparent";
        style.strokeWidth = 0;
      }
      if (attr.lineType != null) {
        step = Math.round(attr.lineWidth) || 1;
        switch (attr.lineType) {
          case _basicprimitives.LineType.Dotted:
            style.strokeDasharray = step + "," + step;
            break;
          case _basicprimitives.LineType.Dashed:
            style.strokeDasharray = step * 5 + "," + step * 3;
            break;
          case _basicprimitives.LineType.Solid:
          default:
            style.strokeDasharray = "";
            break;
        }
      }
      data = "";
      polylineData.loop(this, function (segment) {
        switch (segment.segmentType) {
          case _basicprimitives.SegmentType.Move:
            data += "M" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
            break;
          case _basicprimitives.SegmentType.Line:
            data += "L" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
            break;
          case _basicprimitives.SegmentType.QuadraticArc:
            data += "Q" + (Math.round(segment.cpX) + 0.5) + " " + (Math.round(segment.cpY) + 0.5) + " " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
            break;
          case _basicprimitives.SegmentType.Dot:
            // A rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y
            if (segment.width === segment.height && segment.width / 2.0 <= segment.cornerRadius) {
              // dot
              radius = segment.width / 2.0;
              data += "M" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + segment.height / 2.0 + 0.5);
              data += "A" + radius + " " + radius + " 0 0 0 " + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y) + segment.height / 2.0 + 0.5);
              data += "A" + radius + " " + radius + " 0 0 0 " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + segment.height / 2.0 + 0.5);
            } else if (segment.cornerRadius === 0) {
              // square
              data += "M" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
              data += "L" + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y) + 0.5);
              data += "L" + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y + segment.height) + 0.5);
              data += "L" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y + segment.height) + 0.5);
              data += "L" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
            } else {
              cornerRadius = Math.min(segment.cornerRadius, Math.min(segment.width / 2.0, segment.height / 2.0));
              data += "M" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y + cornerRadius) + 0.5);
              data += "A" + Math.round(cornerRadius) + " " + Math.round(cornerRadius) + " 0 0 1 " + (Math.round(segment.x + cornerRadius) + 0.5) + " " + (Math.round(segment.y) + 0.5);
              data += "L" + (Math.round(segment.x + segment.width - cornerRadius) + 0.5) + " " + (Math.round(segment.y) + 0.5);
              data += "A" + Math.round(cornerRadius) + " " + Math.round(cornerRadius) + " 0 0 1 " + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y + cornerRadius) + 0.5);
              data += "L" + (Math.round(segment.x + segment.width) + 0.5) + " " + (Math.round(segment.y + segment.height - cornerRadius) + 0.5);
              data += "A" + Math.round(cornerRadius) + " " + Math.round(cornerRadius) + " 0 0 1 " + (Math.round(segment.x + segment.width - cornerRadius) + 0.5) + " " + (Math.round(segment.y + segment.height) + 0.5);
              data += "L" + (Math.round(segment.x + cornerRadius) + 0.5) + " " + (Math.round(segment.y + segment.height) + 0.5);
              data += "A" + Math.round(cornerRadius) + " " + Math.round(cornerRadius) + " 0 0 1 " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y + segment.height - cornerRadius) + 0.5);
              data += "L" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y + cornerRadius) + 0.5);
            }
            break;
          case _basicprimitives.SegmentType.CubicArc:
            data += "C" + (Math.round(segment.cpX1) + 0.5) + " " + (Math.round(segment.cpY1) + 0.5) + " " + (Math.round(segment.cpX2) + 0.5) + " " + (Math.round(segment.cpY2) + 0.5) + " " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
            break;
          default:
            break;
        }
      });
      this.activePlaceholder.activeLayer.polylines.push( /*#__PURE__*/_react["default"].createElement("path", {
        key: this.activePlaceholder.activeLayer.polylines.length,
        d: data,
        style: style
      }));
    }
  }, {
    key: "template",
    value: function template(x, y, width, height, contentx, contenty, contentWidth, contentHeight, _template, hashCode, onRenderTemplate, uiHash, attr) {
      //ignore jslint
      var style;
      var left = x + contentx,
        top = y + contenty,
        templateWidth = contentWidth,
        templateHeight = contentHeight;
      style = _objectSpread({
        "width": templateWidth + "px",
        "height": templateHeight + "px",
        "top": top + "px",
        "left": left + "px",
        "position": "absolute",
        "padding": "0px",
        "margin": "0px"
      }, attr);
      if (uiHash == null) {
        uiHash = {};
      }
      uiHash.x = left;
      uiHash.y = top;
      uiHash.width = templateWidth;
      uiHash.height = templateHeight;
      if (onRenderTemplate !== null) {
        this.activePlaceholder.activeLayer.items.push( /*#__PURE__*/_react["default"].createElement("div", {
          key: this.activePlaceholder.activeLayer.items.length,
          style: _objectSpread({
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
          }, style)
        }, onRenderTemplate(uiHash)));
      }
      ;
    }
  }, {
    key: "getPxSize",
    value: function getPxSize(value, base) {
      var result = value;
      if (typeof value === "string") {
        if (value.indexOf("pt") > 0) {
          result = parseInt(value, 10) * 96 / 72;
        } else if (value.indexOf("%") > 0) {
          result = parseFloat(value) / 100.0 * base;
        } else {
          result = parseInt(value, 10);
        }
      }
      return result;
    }
  }]);
  return Graphics;
}();
;
var _default = Graphics;
exports["default"] = _default;