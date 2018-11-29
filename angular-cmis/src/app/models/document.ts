import { CmisObj } from './cmis-obj';
import { CmisService } from '../services/cmis.service';

export class Document extends CmisObj {
  constructor(
    obj: any,
    cmisService: CmisService
  ) {
    super(obj, cmisService);
    this.init();
  }
  init() {

  }


}
