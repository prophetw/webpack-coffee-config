import { CmisObj } from './cmis-obj'

export interface Document {
  object: {
    acl: {
      aces: string[];
    };
    allowableActions: {
      canAddObjectToFolder: false;
      canApplyACL: false;
      canApplyPolicy: false;
      canCancelCheckOut: false;
      canCheckIn: false;
      canCheckOut: false;
      canCreateDocument: true;
      canCreateFolder: true;
      canCreateItem: false;
      canCreateRelationship: false;
      canDeleteContentStream: false;
      canDeleteObject: true;
      canDeleteTree: true;
      canGetACL: true;
      canGetAllVersions: false;
      canGetAppliedPolicies: false;
      canGetChildren: true
      canGetContentStream: false
      canGetDescendants: true
      canGetFolderParent: true
      canGetFolderTree: true
      canGetObjectParents: true
      canGetObjectRelationships: false
      canGetProperties: true
      canGetRenditions: false
      canMoveObject: true
      canRemoveObjectFromFolder: false
      canRemovePolicy: false
      canSetContentStream: false
      canUpdateProperties: true
    };
    succinctProperties:{
      "cmis:objectId": "874fd0f8-a5d0-4761-b72a-260c637eec69";
      "cmis:allowedChildObjectTypeIds": ["cmis:document", "smx:drmdoc", "cmis:folder", "cmis:unversionedDocument"]
      "cmis:baseTypeId": "cmis:folder"
      "cmis:changeToken": null
      "cmis:createdBy": "admin"
      "cmis:creationDate": 1542793767969
      "cmis:description": ""
      "cmis:lastModificationDate": 1542793767970
      "cmis:lastModifiedBy": "admin"
      "cmis:name": "ConnectedPDF"
      "cmis:objectTypeId": "cmis:folder"
      "cmis:parentId": "fb964ef9-8ee1-4273-8a74-5ab6aa6fea80"
      "cmis:path": "/User_Homes/ad/mi/admin@gmail.com/Reading/ConnectedPDF"
    }
  }
}
export class Document extends CmisObj{
  constructor(
    obj:any
  ) {
    super(obj);
    this.init();
  }
  init(){

  }


}
