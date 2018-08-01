import { TestBed, inject } from '@angular/core/testing';

import { GetElephantByNameUsecase } from './get-elephant-by-name.usecase';

describe('GetElephantByNameUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetElephantByNameUsecase]
    });
  });

  it('should be created', inject([GetElephantByNameUsecase], (service: GetElephantByNameUsecase) => {
    expect(service).toBeTruthy();
  }));
});
