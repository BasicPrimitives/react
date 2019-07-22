import AbstractTemplate from './AbstractTemplate';

class LabelAnnotationTemplate extends AbstractTemplate {
  render(data) {
    var { title } = data.context;
    return title;
  }
};

export default LabelAnnotationTemplate;