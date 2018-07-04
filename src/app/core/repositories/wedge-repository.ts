import { Observable } from 'rxjs';
import { WedgeModel } from '../domain/wedge.model';

export abstract class WedgeRepository {
  abstract getWedgeById(id: string): Observable<WedgeModel>;
}
