import AbstractTemplate from './AbstractTemplate';

class UserTemplate extends AbstractTemplate {
  constructor(options, content, onRender) {
    super();
    this.render = onRender;
  }
};

export default UserTemplate;