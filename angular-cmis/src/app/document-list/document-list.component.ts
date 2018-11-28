import { Component, OnInit } from '@angular/core';

import { CmisService } from '../services/cmis.service'

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {

  constructor(
    private cmisService:CmisService,
  ) { }

  ngOnInit() {

  }

}
