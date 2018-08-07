import { Observable } from 'rxjs';
import { ElephantModel } from '../domain/elephant.model';

export abstract class ElephantRepository {
  abstract getElephantByName(name: string): Observable<ElephantModel>;
  abstract saveElephant(elephant: ElephantModel): Observable<ElephantModel>;

  abstract deleteElephant(elephant: ElephantModel): void;
  abstract getAllElephants(): Observable<ElephantModel>;
}
