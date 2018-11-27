import { Component } from '@angular/core';
import { CmisService } from "./services/cmis.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cmis-it is cool';
  name = 'JIM';
  constructor(public cmisService:CmisService){

  }
}
