import { TestBed } from '@angular/core/testing';

import { MeseroServiceService } from './mesero-service.service';

describe('MeseroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeseroServiceService = TestBed.get(MeseroServiceService);
    expect(service).toBeTruthy();
  });
});
