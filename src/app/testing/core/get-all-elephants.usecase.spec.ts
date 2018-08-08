import { inject, TestBed } from '@angular/core/testing';

import { GetAllElephantsUsecase } from '../../core/usecases/get-all-elephants.usecase';
import { ElephantRepository } from '../../core/repositories/elephant.repository';
import { ElephantMockRepository } from '../../data/repository/elephant-mock.repository';

describe('GetAllElephantsUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetAllElephantsUsecase,
        {provide: ElephantRepository, useClass: ElephantMockRepository}
      ]
    });
  });

  it('should be created', inject([GetAllElephantsUsecase], (service: GetAllElephantsUsecase) => {
    expect(service).toBeTruthy();
  }));
});
