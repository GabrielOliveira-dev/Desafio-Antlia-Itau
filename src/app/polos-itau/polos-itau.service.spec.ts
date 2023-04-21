import { TestBed } from '@angular/core/testing';

import { PolosItauService } from './polos-itau.service';

describe('PolosItauService', () => {
  let service: PolosItauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolosItauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
