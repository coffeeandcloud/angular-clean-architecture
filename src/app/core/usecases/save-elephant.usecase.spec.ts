import { TestBed, inject } from '@angular/core/testing';

import { SaveElephantUsecase } from './save-elephant.usecase';

describe('SaveElephantUsecase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveElephantUsecase]
    });
  });

  it('should be created', inject([SaveElephantUsecase], (service: SaveElephantUsecase) => {
    expect(service).toBeTruthy();
  }));
});
