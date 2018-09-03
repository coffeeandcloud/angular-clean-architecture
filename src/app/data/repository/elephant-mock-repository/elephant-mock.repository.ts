import { Injectable } from '@angular/core';
import { ElephantRepository } from '../../../core/repositories/elephant.repository';
import { ElephantModel } from '../../../core/domain/elephant.model';
import { from, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElephantMockRepository extends ElephantRepository {

  elephant: ElephantModel = {name: 'Little Elephant', family: 'Baby', birthday: new Date()};

  elephants: Array<ElephantModel> = [];

  constructor() {
    super();
  }

  getElephantByName(name: string): Observable<ElephantModel> {
    return of(this.elephant).pipe(filter( (elephant: ElephantModel) => {
      return (elephant.name.indexOf(name) !== -1);
    }));
  }

  getAllElephants(): Observable<ElephantModel> {
    return from(this.elephants);
  }
}
