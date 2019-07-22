import AbstractTemplate from './AbstractTemplate';

class AnnotationLabelTemplate extends AbstractTemplate {
  render(data) {
    var { label } = data.context;
    return label;
  }
};

export default AnnotationLabelTemplate;