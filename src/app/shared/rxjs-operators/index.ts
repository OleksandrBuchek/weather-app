import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

export const refCountShareReplay = <T>(source: Observable<T>): Observable<T> => {
    return source.pipe(shareReplay({ bufferSize: 1, refCount: true })) as Observable<T>;
};
