import { Injectable } from '@angular/core';
import { ElephantModel } from '../domain/elephant.model';
import { UseCase } from '../base/use-case';
import { Observable } from 'rxjs';
import { ElephantRepository } from '../repositories/elephant.repository';

@Injectable({
  providedIn: 'root'
})
export class GetElephantByNameUsecase implements UseCase<String, ElephantModel> {

  constructor(private elephantRepository: ElephantRepository) { }

  execute(params: String): Observable<ElephantModel> {
    return this.elephantRepository.getElephantByName(name);
  }
}
