import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable()
export class GetVideoInfoService {

  constructor(private http: HttpClient) { }

  getTextFile(filename: string) {
  // The Observable returned by get() is of type Observable<string>
  // because a text response was specified.
  // There's no need to pass a <string> type parameter to get().
  return this.http.get(filename, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
        data => console.log(filename, data),
        error => console.error(filename, error)
      )
    );
}

}
