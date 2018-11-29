import { Component, OnInit } from '@angular/core';
import {CmisService} from "../services/cmis.service";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-document-header',
  templateUrl: './document-header.component.html',
  styleUrls: ['./document-header.component.scss']
})
export class DocumentHeaderComponent implements OnInit {


  constructor(
    cmisService: CmisService,
    appService: AppService
  ) {

  }

  ngOnInit() {
  }

}
