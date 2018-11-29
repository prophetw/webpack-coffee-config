import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs'
import { map , distinctUntilChanged } from 'rxjs/operators';

import { CmisService } from '../services/cmis.service'
import {CmisObj} from "../models/cmis-obj";
import {Folder} from "../models/folder";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  rootFolder: any;
  currentFolder: any;
  constructor(
    private cmisService:CmisService,
    private appService: AppService
  ) {

  }
  ngOnInit() {
    this.cmisService.loadRepositories().then(data =>
      this.getRootFolder()
    )
  }
  getRootFolder(){
    this.cmisService.getRootFolder().subscribe({
      next:(result)=>{
        console.log('==== getRootFolder');
        this.rootFolder=new Folder(result);
        this.cmisService.rootFolder=this.rootFolder;
        this.cmisService.currentFolder=this.rootFolder;

        // injectService
        this.rootFolder.cmisService=this.cmisService;

        this.rootFolder.getChildren();
        this.rootFolder.getFolderTree();
        console.log(this.cmisService)
        console.log(this.rootFolder);
        console.log(typeof this.rootFolder);
      }
    })
  }
  openFolder(document?:any){
    console.log(document)
  }
}
