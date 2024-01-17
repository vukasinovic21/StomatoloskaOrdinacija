import { TestBed } from '@angular/core/testing';

import { StomatologService } from './stomatolog.service';

describe('StomatologService', () => {
  let service: StomatologService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StomatologService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
