import { TestBed } from '@angular/core/testing';

import { OnLoadDataService } from './on-load-data.service';

describe('OnLoadDataService', () => {
  let service: OnLoadDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnLoadDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
