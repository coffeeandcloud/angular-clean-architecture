import { inject, TestBed } from '@angular/core/testing';

import { GetElephantByNameUsecase } from '../../core/usecases/get-elephant-by-name.usecase';
import { ElephantRepository } from '../../core/repositories/elephant.repository';
import { ElephantMockRepository } from '../../data/repository/elephant-mock.repository';

describe('GetElephantByNameUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetElephantByNameUsecase,
        {provide: ElephantRepository, useClass: ElephantMockRepository}
      ]
    });
  });

  it('should be created', inject([GetElephantByNameUsecase], (service: GetElephantByNameUsecase) => {
    expect(service).toBeTruthy();
  }));
});
