import { TestBed, inject } from '@angular/core/testing';

import { ElephantWebRepository } from './elephant-web.repository';

describe('ElephantWebRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElephantWebRepository]
    });
  });

  it('should be created', inject([ElephantWebRepository], (service: ElephantWebRepository) => {
    expect(service).toBeTruthy();
  }));
});
