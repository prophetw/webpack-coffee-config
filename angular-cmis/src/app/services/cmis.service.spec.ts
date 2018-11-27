import { TestBed } from '@angular/core/testing';

import { CmisService } from './cmis.service';

describe('CmisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CmisService = TestBed.get(CmisService);
    expect(service).toBeTruthy();
  });
});
