import { Observable } from 'rxjs';
import { ElephantModel } from '../domain/elephant.model';

export abstract class ElephantRepository {
  abstract getElephantById(id: number): Observable<ElephantModel>;
  abstract getAllElephants(): Observable<ElephantModel>;
}
