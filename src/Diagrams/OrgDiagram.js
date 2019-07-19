import primitives from 'basicprimitives';
import BaseDiagram from './BaseDiagram';
import OrgDiagramConfig from './Schemas/OrgDiagramConfig';

class OrgDiagram extends BaseDiagram {
  static propTypes = {
    config: OrgDiagramConfig.isRequired // eslint-disable-line react/no-unused-prop-types
  };

  constructor(props) {
    super(props, primitives.orgdiagram);
  }
}

export default OrgDiagram;
