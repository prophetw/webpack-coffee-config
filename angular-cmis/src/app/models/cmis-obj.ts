import { Injector } from '@angular/core';
import { CmisService } from '../services/cmis.service';

interface CmisObjInterface {
  allowableActions: {
    canAddObjectToFolder: boolean;
    canApplyACL: boolean;
    canApplyPolicy: boolean;
    canCancelCheckOut: boolean;
    canCheckIn: boolean;
    canCheckOut: boolean;
    canCreateDocument: boolean;
    canCreateFolder: boolean;
    canCreateItem: boolean;
    canCreateRelationship: boolean;
    canDeleteContentStream: boolean;
    canDeleteObject: boolean;
    canDeleteTree: boolean;
    canGetACL: boolean;
    canGetAllVersions: boolean;
    canGetAppliedPolicies: boolean;
    canGetChildren: boolean;
    canGetContentStream: boolean;
    canGetDescendants: boolean;
    canGetFolderParent: boolean;
    canGetFolderTree: boolean;
    canGetObjectParents: boolean;
    canGetObjectRelationships: boolean;
    canGetProperties: boolean;
    canGetRenditions: boolean;
    canMoveObject: boolean;
    canRemoveObjectFromFolder: boolean;
    canRemovePolicy: boolean;
    canSetContentStream: boolean;
    canUpdateProperties: boolean;
  };
  succinctProperties: any;
  init();
}
interface CmisObjConstructor {
  new ( cmiObj: CmisObj , cmisService: CmisService ): CmisObjInterface;
}
export class CmisObj implements CmisObjInterface {
  id: string;
  name: string;
  acl: any;
  cmisService: CmisService;
  cDrmAcl: any;
  succinctProperties: any;
  allowableActions: any;
  constructor(
    obj: any,
    cmisService: CmisService
    ) {
      this.cmisService = cmisService;
      this.id = obj && obj['succinctProperties'] && obj['succinctProperties']['cmis:objectId'];
      this.name = obj && obj['succinctProperties'] && obj['succinctProperties']['cmis:name'];

      this.acl = obj && obj['acl'];
      this.succinctProperties = obj && obj['succinctProperties'];
      this.allowableActions = obj && obj['allowableActions'];
  }
  init() {

  }
}
