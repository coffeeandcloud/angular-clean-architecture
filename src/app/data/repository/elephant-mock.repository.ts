import { Injectable } from '@angular/core';
import { ElephantRepository } from '../../core/repositories/elephant.repository';
import { ElephantModel } from '../../core/domain/elephant.model';
import { Observable, of, pipe, from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElephantMockRepository extends ElephantRepository {

  elephant: ElephantModel = {name: 'Little Elephant', family: 'Baby'};

  elephants: Array<ElephantModel> = [
    {name: 'Little Elephant', family: 'Baby'},
    {name: 'Mr. Big', family: 'Grownup'},
    {name: 'Big Mama', family: 'Grownup'}
  ];

  constructor() {
    super();
  }

  deleteElephant(elephant: ElephantModel): Observable<ElephantModel> {
    return of(this.elephant);
  }

  getElephantByName(name: string): Observable<ElephantModel> {
    return of(this.elephant).pipe(filter( (elephant: ElephantModel) => {
      return (elephant.name.indexOf(name) !== -1);
    }));
  }

  saveElephant(elephant: ElephantModel): Observable<ElephantModel> {
    return of(this.elephant);
  }

  getAllElephants(): Observable<ElephantModel> {
    return from(this.elephants);
  }
}
