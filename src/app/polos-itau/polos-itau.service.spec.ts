import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { PolosItauService } from './polos-itau.service';

describe('PolosItauService', () => {
  let service: PolosItauService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    });
    service = TestBed.inject(PolosItauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
