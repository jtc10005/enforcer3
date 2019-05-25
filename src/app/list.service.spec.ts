import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('ListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });
});
