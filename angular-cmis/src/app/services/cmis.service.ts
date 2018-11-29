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
  root$ : any;
  children$ : CmisObj[];
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
      // .then(() => this.cmisSession.getObjectByPath('/User_Homes/ad/mi/admin@gmail.com/Reading',{includeAllowableActions:true,succinct:true}))
      // .then((data) =>{
      //   console.log('==== getObject by path')
      //   console.log(data);
      //   this.root$=data;
      //   return this.cmisSession.getFolderTree(data['succinctProperties']['cmis:objectId'],null,{includeAllowableActions:true,succinct:true})
      // })
      // .then((data) => {
      //   console.log(data)
      //
      //
      // })
  }

  getRootFolder(){
    return from(this.cmisSession.getObjectByPath('/User_Homes/ad/mi/admin@gmail.com/Reading',{includeAllowableActions:true,succinct:true}))
      .pipe(
        map(data => data)
      )
  }

  getChildren(document){
    return from(this.cmisSession.getChildren(document.id,{includeAllowableActions:true,succinct:true,includeAcl:true}))
      .pipe(
        map(data => data)
      )
  }




}
