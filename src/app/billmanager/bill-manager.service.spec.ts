import { TestBed } from '@angular/core/testing';

import { BillManagerService } from './bill-manager.service';

describe('BillManagerService', () => {
  let service: BillManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
