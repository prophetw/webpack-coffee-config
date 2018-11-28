import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map ,  distinctUntilChanged } from 'rxjs/operators';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { ShareInfo } from '../models/share-info'

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  shareInfo : ShareInfo;
  constructor(
    private apiService:ApiService
  ) { }

  getShareInfo(): Observable<ShareInfo>{
    return this.apiService.get('api/share/share?share_code=Njg5YTlj&access-token=5bf52a1ce4b03d19278ba479%2Cadmin%40gmail.com')
      .pipe(
        map((data) => data.data)
      )
  }


}
