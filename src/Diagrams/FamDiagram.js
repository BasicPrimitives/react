import { FamTaskManagerFactory, FamEventArgs } from 'basicprimitives';
import BaseDiagram from './BaseDiagram';
import FamConfigShape from './Schemas/FamConfigShape';

class FamDiagram extends BaseDiagram {
  static propTypes = {
    config: FamConfigShape.isRequired // eslint-disable-line react/no-unused-prop-types
  };

  constructor(props) {
    super(props, FamTaskManagerFactory, FamEventArgs);
  }
}

export default FamDiagram;
