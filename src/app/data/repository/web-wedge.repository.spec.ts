import { TestBed, inject } from '@angular/core/testing';

import { WebWedgeRepository } from './web-wedge.repository';

describe('WebWedgeRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebWedgeRepository]
    });
  });

  it('should be created', inject([WebWedgeRepository], (service: WebWedgeRepository) => {
    expect(service).toBeTruthy();
  }));
});
