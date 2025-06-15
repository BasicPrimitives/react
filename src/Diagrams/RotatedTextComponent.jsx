import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rect, getFixOfPixelAlignment, getInnerSize, RotatedTextControlConfig } from 'basicprimitives';
import Graphics from './Graphics';

// The following code is ResizeObserver Polyfill
// It is added to the rendered page to track size changes of control placeholder
// npm install resize-observer-polyfill --save-dev
import 'resize-observer-polyfill/dist/ResizeObserver.global';

import RotatedTextComponentConfigShape from './Schemas/RotatedTextComponentConfigShape';
import {
  AnnotationLabelTemplate
} from './Templates';

class RotatedTextComponent extends Component {
  static propTypes = {
    config: RotatedTextComponentConfigShape.isRequired // eslint-disable-line react/no-unused-prop-types
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    const { config, style } = props;

    this.state = {
      style,
      config,
      controlSize: {
        width: 0,
        height: 0
      }
    };

    const { controlSize } = this.state;

    this.onSizeChanged = this.onSizeChanged.bind(this);

    this.controlPanelRef = React.createRef();
    this.labelAnnotationTemplate = new AnnotationLabelTemplate();
    this.graphics = new Graphics(controlSize);
    this.defaultOptions = new RotatedTextControlConfig();
  }

  static getDerivedStateFromProps(nextProps, state) {
    const { config: nextConfig } = nextProps;
    const { config } = state;
    if (config !== nextConfig) {
      return {
        config: nextConfig
      };
    }
    return null;
  }

  componentDidMount() {
    this.observer = new ResizeObserver(this.onSizeChanged);
    this.observer.observe(this.controlPanelRef.current);

    this.fixPixelAlignment();
  }

  componentWillUnmount() {
    // destroy observer
    this.observer.disconnect();
  }

  componentDidUpdate() {
    
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
      controlSize: {
        width,
        height
      }
    });
  }

  render() {
    const { config, controlSize, style } = this.state;
    this.graphics.resize("placeholder", controlSize.width, controlSize.height);
    this.graphics.reset("placeholder");
    this.graphics.activate("placeholder");
    const options = {...this.defaultOptions, ...config};
    
    var attr = {
      "fontSize": options.fontSize,
      "fontFamily": options.fontFamily,
      "fontStyle": options.fontStyle,
      "fontWeight": options.fontWeight,
      "fontColor": options.fontColor
    };

    this.graphics.text(0, 0, controlSize.width, controlSize.height, options.text, options.orientation, options.horizontalAlignment, options.verticalAlignment, attr);

    return <>
      <div /* root control panel */
        ref={this.controlPanelRef}
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
          ...style
        }}
        tabIndex="0"
      >
        {this.graphics.getDefaultLayerElements(this, "placeholder", (elements) =>
          <div key="DefaultLayer" style={{
            position: "absolute",
            overflow: "visible",
            left: "0px",
            top: "0px"
          }}>
            {elements}
          </div>
        )}
      </div>
    </>;
  }
}

export default RotatedTextComponent;
