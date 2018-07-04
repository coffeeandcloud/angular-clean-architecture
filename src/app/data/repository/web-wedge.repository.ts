import { Injectable } from '@angular/core';
import { WedgeRepository } from '../../core/repositories/wedge-repository';
import { Observable, of } from 'rxjs';
import { WedgeModel } from '../../core/domain/wedge.model';

@Injectable({
  providedIn: 'root'
})
export class WebWedgeRepository implements WedgeRepository {

  constructor() { }

  getWedgeById(id: string): Observable<WedgeModel> {
    const wedge: WedgeModel = {
      id: 12,
      title: 'Hello World'
    };
    return of(wedge);
  }
}
