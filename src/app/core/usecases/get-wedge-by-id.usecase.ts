import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { WedgeModel } from '../domain/wedge.model';
import { Observable } from 'rxjs';
import { WedgeRepository } from '../repositories/wedge-repository';

@Injectable({
  providedIn: 'root'
})
export class GetWedgeByIdUsecase implements UseCase<WedgeModel> {

  constructor(private wedgeRepository: WedgeRepository) { }

  execute(params): Observable<WedgeModel> {
    return this.wedgeRepository.getWedgeById(params);
  }
}
