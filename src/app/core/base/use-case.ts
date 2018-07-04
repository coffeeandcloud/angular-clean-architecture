import { Observable } from 'rxjs';

export interface UseCase<T> {
  execute(params: any): Observable<T>;
}
