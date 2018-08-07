import { Injectable } from '@angular/core';
import { ElephantRepository } from '../../core/repositories/elephant.repository';
import { ElephantModel } from '../../core/domain/elephant.model';
import { from, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElephantMockRepository extends ElephantRepository {

  elephant: ElephantModel = {name: 'Little Elephant', family: 'Baby'};

  elephants: Array<ElephantModel> = [];

  constructor() {
    super();
  }

  deleteElephant(elephant: ElephantModel) {
    return of(this.elephant);
  }

  getElephantByName(name: string): Observable<ElephantModel> {
    return of(this.elephant).pipe(filter( (elephant: ElephantModel) => {
      return (elephant.name.indexOf(name) !== -1);
    }));
  }

  saveElephant(elephant: ElephantModel): Observable<ElephantModel> {
    this.elephants.push(elephant);
    console.log(this.elephants);
    return of(this.elephant);
  }

  getAllElephants(): Observable<ElephantModel> {
    return from(this.elephants);
  }
}
