import { TestBed } from '@angular/core/testing';

import { HttpAdvancedService } from './http-advanced.service';

describe('HttpAdvancedService', () => {
  let service: HttpAdvancedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAdvancedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
