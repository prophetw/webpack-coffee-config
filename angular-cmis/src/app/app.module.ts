import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DocumentListComponent } from './document-list/document-list.component';
import {CmisService} from "./services/cmis.service";
import { DocumentHeaderComponent } from './document-header/document-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DocumentListComponent,
    DocumentHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: 'CmisService', useExisting: CmisService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
