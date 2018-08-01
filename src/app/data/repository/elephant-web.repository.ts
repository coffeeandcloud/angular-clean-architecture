import { Injectable } from '@angular/core';
import { ElephantRepository } from '../../core/repositories/elephant.repository';
import { ElephantModel } from '../../core/domain/elephant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElephantWebRepository extends ElephantRepository {

  constructor() {
    super();
  }

  deleteElephant(elephant: ElephantModel): Observable<ElephantModel> {
    return undefined;
  }

  getElephantByName(name: String): Observable<ElephantModel> {
    return undefined;
  }

  saveElephant(elephant: ElephantModel): Observable<ElephantModel> {
    return undefined;
  }
}
