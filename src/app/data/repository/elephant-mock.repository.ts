import { Injectable } from '@angular/core';
import { ElephantRepository } from '../../core/repositories/elephant.repository';
import { ElephantModel } from '../../core/domain/elephant.model';
import { Observable, of, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElephantMockRepository extends ElephantRepository {

  constructor() {
    super();
  }

  deleteElephant(elephant: ElephantModel): Observable<ElephantModel> {
    return undefined;
  }

  getElephantByName(name: String): Observable<ElephantModel> {
    const elephant: ElephantModel = {name: 'Little Elephant', family: 'Baby'};
    return of(elephant);
  }

  saveElephant(elephant: ElephantModel): Observable<ElephantModel> {
    return undefined;
  }
}
