import { Injectable } from '@angular/core';
import { ElephantRepository } from '../repositories/elephant.repository';
import { UseCase } from '../base/use-case';
import { ElephantModel } from '../domain/elephant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllElephantsUsecase implements UseCase<void, ElephantModel> {

  constructor(private elephantRepository: ElephantRepository) { }

  execute(params: void): Observable<ElephantModel> {
    return this.elephantRepository.getAllElephants();
  }
}
