import { TestBed, inject } from '@angular/core/testing';

import { ElephantRepositoryWebRepository } from './elephant-repository-web.repository';

describe('ElephantRepositoryWebRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElephantRepositoryWebRepository]
    });
  });

  it('should be created', inject([ElephantRepositoryWebRepository], (service: ElephantRepositoryWebRepository) => {
    expect(service).toBeTruthy();
  }));
});
