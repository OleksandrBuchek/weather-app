import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { cloneDeep } from 'lodash';

export const immutable = <T>(source: Observable<T>): Observable<T> => {
    return source.pipe(map(data => cloneDeep(data))) as Observable<T>;
};

export const refCountShareReplay = <T>(source: Observable<T>): Observable<T> => {
    return source.pipe(shareReplay({ bufferSize: 1, refCount: true })) as Observable<T>;
};
