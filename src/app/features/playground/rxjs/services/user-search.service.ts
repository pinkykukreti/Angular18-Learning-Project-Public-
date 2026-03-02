import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, retry, catchError, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  private cache = new Map<string, Observable<any[]>>();

  constructor(private http: HttpClient) {}

  getUsers(query: string, page: number, limit: number): Observable<any[]> {

    const cacheKey = `${query}-${page}`;

    if (!this.cache.has(cacheKey)) {
      const request$ = this.http
        .get<any>(`https://dummyjson.com/users/search?q=${query}&limit=${limit}&skip=${page * limit}`)
        .pipe(
          retry(2),             // retries API automatically if it fails
          map(res => res.users),   // transforms API response (extract users list)
          shareReplay(1),         // shares and caches last API response
          catchError(() => of([]))  // handles API errors safely
        );

      this.cache.set(cacheKey, request$);
    }

    return this.cache.get(cacheKey)!;
  }
}
