import AbstractTemplate from './AbstractTemplate';

class CustomRenderTemplate extends AbstractTemplate {
  constructor(options, onRender) {
    super();
    this.render = onRender;
  }
};

export default CustomRenderTemplate;