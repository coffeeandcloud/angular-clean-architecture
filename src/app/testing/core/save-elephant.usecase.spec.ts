import { inject, TestBed } from '@angular/core/testing';

import { SaveElephantUsecase } from '../../core/usecases/save-elephant.usecase';
import { ElephantRepository } from '../../core/repositories/elephant.repository';
import { ElephantMockRepository } from '../../data/repository/elephant-mock.repository';

describe('SaveElephantUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SaveElephantUsecase,
        {provide: ElephantRepository, useClass: ElephantMockRepository}
      ]
    });
  });

  it('should be created', inject([SaveElephantUsecase], (service: SaveElephantUsecase) => {
    expect(service).toBeTruthy();
  }));
});
