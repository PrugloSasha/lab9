import { TestBed } from '@angular/core/testing';

import { WotwsService } from './wotws.service';

describe('WotwsService', () => {
  let service: WotwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WotwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
