import { TestBed } from '@angular/core/testing';

import { ServgptService } from './servgpt.service';

describe('ServgptService', () => {
  let service: ServgptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServgptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
