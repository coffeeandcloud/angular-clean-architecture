import { TestBed, inject } from '@angular/core/testing';

import { GetAllElephantsUsecase } from './get-all-elephants.usecase';

describe('GetAllElephantsUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllElephantsUsecase]
    });
  });

  it('should be created', inject([GetAllElephantsUsecase], (service: GetAllElephantsUsecase) => {
    expect(service).toBeTruthy();
  }));
});
