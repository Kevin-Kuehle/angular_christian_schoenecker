import { TestBed } from '@angular/core/testing';

import { MobileHandlerService } from './core/services/mobile-handler.service';

describe('MobileHandlerService', () => {
  let service: MobileHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
