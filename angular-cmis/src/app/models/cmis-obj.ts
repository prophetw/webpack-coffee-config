export class CmisObj {
  allowableActions:{
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
  succinctProperties:{
    "cmis:allowedChildObjectTypeIds": string;
    "cmis:baseTypeId": string;
    "cmis:changeToken": string;
    "cmis:createdBy": string;
    "cmis:creationDate": number;
    "cmis:description": string;
    "cmis:lastModificationDate": number;
    "cmis:lastModifiedBy": string;
    "cmis:name": string;
    "cmis:objectId": string;
    "cmis:objectTypeId": string;
    "cmis:parentId": string;
    "cmis:path": string;
  };
}
