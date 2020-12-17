import { OrgTaskManagerFactory, OrgEventArgs } from 'basicprimitives';
import BaseDiagram from './BaseDiagram';
import OrgConfigShape from './Schemas/OrgConfigShape';

class OrgDiagram extends BaseDiagram {
  static propTypes = {
    config: OrgConfigShape.isRequired // eslint-disable-line react/no-unused-prop-types
  };

  constructor(props) {
    super(props, OrgTaskManagerFactory, OrgEventArgs);
  }
} 

export default OrgDiagram;
