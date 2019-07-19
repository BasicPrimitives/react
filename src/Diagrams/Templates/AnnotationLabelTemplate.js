import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class AnnotationLabelTemplate extends AbstractTemplate {
  render(data) {
    var annotationConfig = data.context;
    return <p>User template {annotationConfig}</p>;
  }
};

export default AnnotationLabelTemplate;