import { Injectable } from '@angular/core';
import { cmis } from 'cmis/dist/cmis';



@Injectable({
  providedIn: 'root'
})
export class CmisService {
  cmisSession : any = new cmis.CmisSession('https://cloud-docker.connectedpdf.com/cmis/browser?repositoryId=fxcld');
  constructor() {
    console.log('==== CmisService')
    this.loadRepositories();
  }

  loadRepositories(){
    this.cmisSession.setToken('5bf52a1ce4b03d19278ba479%2Cadmin%40gmail.com');
    console.log(this.cmisSession);
    this.cmisSession.loadRepositories()
      .then(() => this.cmisSession.getObjectByPath('/User_Homes/ad/mi/admin@gmail.com/Reading',{includeAllowableActions:true,succinct:true}))
      .then((data) =>{
        console.log('==== getObject by path')
        console.log(data)
        return this.cmisSession.getFolderTree(data['succinctProperties']['cmis:objectId'],null,{includeAllowableActions:true,succinct:true})
      })
      .then(data => console.log(data))
  }

  setRootFolder(){

  }

  getChildren(){

  }





}
