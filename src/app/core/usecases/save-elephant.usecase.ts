import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { ElephantModel } from '../domain/elephant.model';
import { Observable } from 'rxjs';
import { ElephantRepository } from '../repositories/elephant.repository';

@Injectable({
  providedIn: 'root'
})
export class SaveElephantUsecase implements UseCase<ElephantModel, ElephantModel>{

  constructor(private elephantRepository: ElephantRepository) {}

  execute(params: ElephantModel): Observable<ElephantModel> {
    return this.elephantRepository.saveElephant(params);
  }
}
