import { TestBed } from '@angular/core/testing';

import { AxiosInstance } from './axios-instance.service';

describe('AxiosInstanceService', () => {
  let service: AxiosInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosInstance);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
