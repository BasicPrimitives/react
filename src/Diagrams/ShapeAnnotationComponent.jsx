import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rect, getFixOfPixelAlignment, getInnerSize, ShapeAnnotation, ShapeAnnotationControlConfig } from 'basicprimitives';
import Graphics from './Graphics';

// The following code is ResizeObserver Polyfill
// It is added to the rendered page to track size changes of control placeholder
// npm install resize-observer-polyfill --save-dev
import 'resize-observer-polyfill/dist/ResizeObserver.global';

import ShapeAnnotationComponentConfigShape from './Schemas/ShapeAnnotationComponentConfigShape';
import {
  AnnotationLabelTemplate
} from './Templates';

class ShapeAnnotationComponent extends Component {
  static propTypes = {
    config: ShapeAnnotationComponentConfigShape.isRequired // eslint-disable-line react/no-unused-prop-types
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
    this.shapeAnnotation = new ShapeAnnotation(this.graphics);
    this.defaultOptions = new ShapeAnnotationControlConfig();
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
    

    Object.assign(this.shapeAnnotation, options);

    /* offset position */
    const position = new Rect(options.position).offset(options.offset);
    this.shapeAnnotation.draw(options, this.graphics, controlSize, this.labelAnnotationTemplate);

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
          pointerEvents: "none",
          style
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

export default ShapeAnnotationComponent;
