import { Injectable } from '@angular/core';
import { WedgeRepository } from '../../core/repositories/wedge-repository';
import { Observable, of, pipe } from 'rxjs';
import { WedgeModel } from '../../core/domain/wedge.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebWedgeRepository implements WedgeRepository {

  constructor(private httpClient: HttpClient) { }

  getWedgeById(id: string): Observable<WedgeModel> {
    const wedge: WedgeModel = {
      id: 12,
      title: 'Hello World'
    };
    return this.httpClient.get('https://api.github.com/users').pipe(map((value): WedgeModel => {
      return {id: value[0].id, title: value[0].login};
    }));
  }
}
