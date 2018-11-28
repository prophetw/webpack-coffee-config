import { Component, OnInit } from '@angular/core';


import { CmisService } from "./services/cmis.service";
import { ApiService } from "./services/api.service";
import { ShareService } from "./services/share.service";
import { ShareInfo } from "./models/share-info";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-cmis-it is cool';
  name = 'JIM';
  shareInfo$ : ShareInfo;
  constructor(
    public cmisService:CmisService,
    public shareService:ShareService,
    public apiService:ApiService,
  ){

  }

  ngOnInit(){
    // console.log('==== this.shareInfo$ ')
    // console.log(this.shareInfo$)
    this.shareService.getShareInfo().subscribe({
      next:(data)=> {
        // console.log('====shareInfo');
        // console.log(data);
        this.shareInfo$=data;
        // console.log(this.shareInfo$)
        // console.log(typeof this.shareInfo$)
      }
    })
  }
}
