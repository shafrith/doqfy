import { TestBed } from '@angular/core/testing';

import { DoqfyService } from './doqfy.service';

describe('DoqfyService', () => {
  let service: DoqfyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoqfyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
