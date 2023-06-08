import React from 'react';
import { LineType, Layers, SegmentType,
  Rect, Size
} from 'basicprimitives';
import RotatedText from './Templates/RotatedText';

class Placeholder {
  constructor(name) {
    this.name = name;

    this.layers = {};
    this.activeLayer = null;

    this.size = null;
    this.rect = null;

    this.hasGraphics = true;

    this.isVisible = true;
  }
};

class Layer {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.polylines = [];
  }

  reset() {
    this.items = [];
    this.polylines = [];
  }
};

class Graphics {
  constructor(size) {
    this.placeholders = {};
    this.activePlaceholder = null;
    this.size = size;
    this.hasGraphics = true;

    this.names = Object.keys(Layers).reduce((agg, key) => {
      agg[Layers[key]] = key;
      return agg;
    }, []);

    this.orientations = ['Horizontal', 'RotateLeft', 'RotateRight', 'Horizontal'];
    this.horizontalAlignments = ['center', 'left', 'right'];
    this.verticalAlignments = ['top', 'middle', 'bottom'];
  }

  clean() {
    this.placeholders = {};
    this.activePlaceholder = null;
  }

  resize(name, width, height) {
    this.activatePlaceholder(name);
    this.resizePlaceholder(this.activePlaceholder, 0, 0, width, height);
  };

  position(name, left, top, width, height) {
    this.activatePlaceholder(name);
    this.resizePlaceholder(this.activePlaceholder, left, top, width, height);
  };

  show(name) {
    var placeholder = this.placeholders[name];
    if (placeholder != null) {
      placeholder.isVisible = true;
    }
  };

  hide(name) {
    var placeholder = this.placeholders[name];
    if (placeholder != null) {
      placeholder.isVisible = false;
    }
  };

  resizePlaceholder(placeholder, left, top, width, height) {
    placeholder.size = new Size(width, height);
    placeholder.rect = new Rect(left, top, width, height);
  };

  reset(placeholderName, layerKey) {
    const layerName = this.names[layerKey];
    const placeholder = this.placeholders[placeholderName];
    if (placeholder != null) {
      const layer = placeholder.layers[layerName];
      if (layer != null) {
        layer.reset();
      }
    }
  };

  activate(placeholderName, layerKey) {
    this.activatePlaceholder(placeholderName);
    this.activateLayer(layerKey);
    return this.activePlaceholder;
  };

  activatePlaceholder(name) {
    let placeholder = this.placeholders[name];

    if (placeholder === undefined) {
      placeholder = new Placeholder(name);
      placeholder.size = this.size;
      placeholder.rect = new Rect(0, 0, placeholder.size.width, placeholder.size.height);
      this.placeholders[name] = placeholder;
    }

    this.activePlaceholder = placeholder;
  };

  activateLayer(value) {
    const name = this.names[value];
    let layer = this.activePlaceholder.layers[name];

    if (layer === undefined) {
      layer = new Layer(name);
      this.activePlaceholder.layers[name] = layer;
    }

    this.activePlaceholder.activeLayer = layer;
  };

  map(thisArg, placeholderName, onLayer) {
    var result = [];
    if (onLayer != null) {
      const placeholder = this.placeholders[placeholderName];
      this.names.forEach(layerKey => {
        const layer = placeholder.layers[layerKey];
        if (layer != null) {
          result.push(onLayer.call(thisArg, layerKey, <React.Fragment>
            {layer.polylines.length > 0 ? <svg height={placeholder.size.height} width={placeholder.size.width}>
              {layer.polylines}
            </svg> : null}
            {layer.items}
          </React.Fragment>));
        }
      });
    }
    return result;
  }

  text(x, y, width, height, label, orientation, horizontalAlignment, verticalAlignment, attr) {
    this.activePlaceholder.activeLayer.items.push(
      <div
        key={this.activePlaceholder.activeLayer.items.length}
        style={{
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
          boxSizing: "content-box",
          ...attr,
          top: y + "px",
          left: x + "px"
        }}
      >
        <RotatedText
          width={width}
          height={height}
          orientation={this.orientations[orientation]}
          horizontalAlignment={this.horizontalAlignments[horizontalAlignment]}
          verticalAlignment={this.verticalAlignments[verticalAlignment]}
        >{label}</RotatedText>
      </div>
    );
  };

  polylinesBuffer(buffer) {
    buffer.loop(this, function (polyline) {
      if (polyline.length() > 0) {
        this.polyline(polyline);
      }
    });
  };

  polyline(polylineData) {
    var data,
      attr = polylineData.paletteItem.toAttr(),
      step,
      radius,
      cornerRadius,
      style = {};


    if (attr.fillColor !== undefined) {
      style.fill = attr.fillColor;
      style.fillOpacity = attr.opacity;
    }
    else {
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
        case LineType.Dotted:
          style.strokeDasharray = step + "," + step;
          break;
        case LineType.Dashed:
          style.strokeDasharray = (step * 5) + "," + (step * 3);
          break;
        case LineType.Solid:
        default:
          style.strokeDasharray = "";
          break;
      }
    }

    data = "";
    polylineData.loop(this, function (segment) {
      switch (segment.segmentType) {
        case SegmentType.Move:
          data += "M" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
          break;
        case SegmentType.Line:
          data += "L" + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
          break;
        case SegmentType.QuadraticArc:
          data += "Q" + (Math.round(segment.cpX) + 0.5) + " " + (Math.round(segment.cpY) + 0.5) + " " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
          break;
        case SegmentType.Dot:
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
        case SegmentType.CubicArc:
          data += "C" + (Math.round(segment.cpX1) + 0.5) + " " + (Math.round(segment.cpY1) + 0.5) +
            " " + (Math.round(segment.cpX2) + 0.5) + " " + (Math.round(segment.cpY2) + 0.5) +
            " " + (Math.round(segment.x) + 0.5) + " " + (Math.round(segment.y) + 0.5);
          break;
        default:
          break;
      }
    });

    this.activePlaceholder.activeLayer.polylines.push(
      <path key={this.activePlaceholder.activeLayer.polylines.length} d={data} style={style} />
    );
  };

  template(x, y, width, height, contentx, contenty, contentWidth, contentHeight, template, hashCode, onRenderTemplate, uiHash, attr) { //ignore jslint
    let style;

    const left = x + contentx,
      top = y + contenty,
      templateWidth = contentWidth,
      templateHeight = contentHeight;

    style = {
      "width": templateWidth + "px",
      "height": templateHeight + "px",
      "top": top + "px",
      "left": left + "px",
      "position": "absolute",
      "padding": "0px",
      "margin": "0px",
      ...attr
    };

    if (uiHash == null) {
      uiHash = {};
    }

    uiHash.x = left;
    uiHash.y = top;
    uiHash.width = templateWidth;
    uiHash.height = templateHeight;

    if (onRenderTemplate !== null) {
      this.activePlaceholder.activeLayer.items.push(
        <div
          key={this.activePlaceholder.activeLayer.items.length}
          style={{
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
            boxSizing: "content-box",
            ...style
          }}
        >
          {onRenderTemplate(uiHash)}
        </div>
      );
    };
  };

  getPxSize(value, base) {
    var result = value;
    if (typeof value === "string") {
      if (value.indexOf("pt") > 0) {
        result = parseInt(value, 10) * 96 / 72;
      }
      else if (value.indexOf("%") > 0) {
        result = parseFloat(value) / 100.0 * base;
      }
      else {
        result = parseInt(value, 10);
      }
    }
    return result;
  };
};

export default Graphics;