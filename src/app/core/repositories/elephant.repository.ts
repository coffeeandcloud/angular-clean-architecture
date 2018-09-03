import { Observable } from 'rxjs';
import { ElephantModel } from '../domain/elephant.model';

export abstract class ElephantRepository {
  abstract getElephantByName(name: string): Observable<ElephantModel>;
  abstract getAllElephants(): Observable<ElephantModel>;
}
