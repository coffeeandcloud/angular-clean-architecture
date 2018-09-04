import { inject, TestBed } from '@angular/core/testing';

import { ElephantMockRepository } from './elephant-mock.repository';

describe('ElephantRepositoryMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElephantMockRepository]
    });
  });

  it('should be created', inject([ElephantMockRepository], (service: ElephantMockRepository) => {
    expect(service).toBeTruthy();
  }));
});
