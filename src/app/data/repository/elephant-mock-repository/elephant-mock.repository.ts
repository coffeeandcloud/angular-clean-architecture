import { Injectable } from '@angular/core';
import { ElephantRepository } from '../../../core/repositories/elephant.repository';
import { ElephantModel } from '../../../core/domain/elephant.model';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ElephantMockEntity } from './elephant-mock-entity';
import { ElephantMockRepositoryMapper } from './elephant-mock-repository-mapper';

@Injectable({
  providedIn: 'root'
})
export class ElephantMockRepository extends ElephantRepository {

  private mapper = new ElephantMockRepositoryMapper();

  elephants = [
    {
      'id': 1,
      'name': 'Mr. MockBig',
      'family': 'father',
      'birthday': new Date()
    },
    {
      'id': 2,
      'name': 'Mrs. MockTootoot',
      'family': 'mother',
      'birthday': new Date()
    },
    {
      'id': 3,
      'name': 'LittleMockToot',
      'family': 'baby',
      'birthday': new Date()
    }
  ];

  constructor() {
    super();
  }

  getElephantById(id: number): Observable<ElephantModel> {
    return from(this.elephants)
      .pipe(filter((elephant: ElephantMockEntity) => elephant.id === id))
      .pipe(map(this.mapper.mapFrom));
  }

  getAllElephants(): Observable<ElephantModel> {
    return from(this.elephants)
      .pipe(map(this.mapper.mapFrom));
  }
}
