import { Injectable } from '@angular/core';
import { cmis } from 'cmis/dist/cmis';
import { from, Observable } from 'rxjs'
import { map , distinctUntilChanged } from 'rxjs/operators';

import { ApiService } from './api.service'
import { ShareService } from './share.service'
import {ShareInfo} from "../models/share-info";
import {Document} from "../models/document";
import {CmisObj} from "../models/cmis-obj";
import {Folder} from "../models/folder";

@Injectable({
  providedIn: 'root'
})
export class CmisService {
  cmisSession : any = new cmis.CmisSession('https://cloud-docker.connectedpdf.com/cmis/browser?repositoryId=fxcld');
  rootFolder : any;
  currentFolder : any;

  constructor(
    private apiService: ApiService,
    private shareService: ShareService

  ) {
    console.log('==== CmisService');

  }
  loadRepositories(){
    this.cmisSession.setToken('5bf52a1ce4b03d19278ba479%2Cadmin%40gmail.com');
    console.log(this.cmisSession);
    return this.cmisSession.loadRepositories()
  }
  getRootFolder(){
    return from(this.cmisSession.getObjectByPath('/User_Homes/ad/mi/admin@gmail.com/Reading',{includeAllowableActions:true,succinct:true}))
      .pipe(
        map(data => data)
      )
  }
  getChildren(document){
    const skipCount=document.skipCount;
    return from(this.cmisSession.getChildren(document.id,{maxItems:30, skipCount:skipCount, includeACL: true,includeAllowableActions:true,renditionFilter:'*',succinct:true}))
      .pipe(
        map(data => data)
      )
  }
  getFolderTree(document){
    return from(this.cmisSession.getFolderTree(document.id,null,{includeACL: true,includeAllowableActions:true,succinct:true}))
      .pipe(
        map(data => data)
      )
  }
  updateProperties(){

  }
  upload(){

  }
  delete(){

  }
}
