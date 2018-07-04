import { TestBed, inject } from '@angular/core/testing';

import { GetWedgeByIdUsecase } from './get-wedge-by-id.usecase';
import { DataModule } from '../../data/data.module';
import { WedgeRepository } from '../repositories/wedge-repository';
import { WebWedgeRepository } from '../../data/repository/web-wedge.repository';

describe('GetWedgeByIdUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DataModule],
      providers: [
        GetWedgeByIdUsecase,
        {provide: WedgeRepository, useClass: WebWedgeRepository}
      ]
    });
  });

  it('should be created', inject([GetWedgeByIdUsecase], (service: GetWedgeByIdUsecase) => {
    expect(service).toBeTruthy();
  }));
});
