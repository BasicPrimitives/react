import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class LabelAnnotationTemplate extends AbstractTemplate {
  render(data) {
    var annotationConfig = data.context;
    return <p>User template {annotationConfig}</p>;
  }
};

export default LabelAnnotationTemplate;