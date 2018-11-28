import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs'
import { map , distinctUntilChanged } from 'rxjs/operators';

import { CmisService } from '../services/cmis.service'
import {CmisObj} from "../models/cmis-obj";
import {Folder} from "../models/folder";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  rootFolder: Folder;
  constructor(
    private cmisService:CmisService,
  ) { }

  ngOnInit() {
    this.cmisService.loadRepositories().then(data =>
      this.getRootFolder()
    )
  }
  getRootFolder(){
    this.cmisService.getRootFolder().subscribe({
      next:(result)=>{
        console.log('==== getRootFolder')
        this.rootFolder=result;

        console.log(this.rootFolder);
        console.log(typeof this.rootFolder);
      }
    })
  }
  getChildren(){

  }
  getFolderTree(){

  }
}
