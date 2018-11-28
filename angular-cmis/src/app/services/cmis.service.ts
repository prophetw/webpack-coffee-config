import { Injectable } from '@angular/core';
import { cmis } from 'cmis/dist/cmis';
import { observable } from 'rxjs'
import { ApiService } from './api.service'
import { ShareService } from './share.service'
import { from } from 'rxjs'
import {ShareInfo} from "../models/share-info";

@Injectable({
  providedIn: 'root'
})
export class CmisService {
  cmisSession : any = new cmis.CmisSession('https://cloud-docker.connectedpdf.com/cmis/browser?repositoryId=fxcld');
  root$ : any;
  shareInfo$ : ShareInfo[];
  constructor(
    private apiService: ApiService,
    private shareService: ShareService

  ) {
    console.log('==== CmisService')
  }

  loadRepositories(){
    this.cmisSession.setToken('5bf52a1ce4b03d19278ba479%2Cadmin%40gmail.com');
    console.log(this.cmisSession);
    this.cmisSession.loadRepositories()
      .then(() => this.cmisSession.getObjectByPath('/User_Homes/ad/mi/admin@gmail.com/Reading',{includeAllowableActions:true,succinct:true}))
      .then((data) =>{
        console.log('==== getObject by path')
        console.log(data);
        this.root$=data;
        return this.cmisSession.getFolderTree(data['succinctProperties']['cmis:objectId'],null,{includeAllowableActions:true,succinct:true})
      })
      .then((data) => {
        console.log(data)


      })
  }

  getRootFolder(){

  }

  getChildren(){

  }

  getShare(shareCode){
    return this.apiService.get('api/share/share?share_code=Njg5YTlj&access-token=5bf52a1ce4b03d19278ba479%2Cadmin%40gmail.com').subscribe(value => console.log(value))
  }





}
