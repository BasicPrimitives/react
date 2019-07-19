import primitives from 'basicprimitives';
import BaseDiagram from './BaseDiagram';
import FamDiagramConfig from './Schemas/FamDiagramConfig';

class FamDiagram extends BaseDiagram {
  static propTypes = {
    config: FamDiagramConfig.isRequired // eslint-disable-line react/no-unused-prop-types
  };

  constructor(props) {
    super(props, primitives.famdiagram);
  }
}

export default FamDiagram;
