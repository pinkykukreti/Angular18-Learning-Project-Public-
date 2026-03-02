import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, concat, merge, retry, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpAdvancedService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<any[]>(this.baseUrl).pipe(
        retry(2),              // 🔁 retry API 2 times if failed
        shareReplay(1)         // 🔄 cache last response
      );

  }
 
  addPost(post: any) {
    return this.http.post(this.baseUrl, post);
  }

  forkJoinExample() {
    return forkJoin({                     // multiple API together
      posts: this.http.get(this.baseUrl),
      users: this.http.get('https://jsonplaceholder.typicode.com/users')
    });
  }

  mergeExample() {
    return merge(                        // parallel APIs
      this.http.get(this.baseUrl),
      this.http.get('https://jsonplaceholder.typicode.com/users')
    );
  }

  concatExample() {
    return concat(                      // sequential APIs
      this.http.get(this.baseUrl),
      this.http.get('https://jsonplaceholder.typicode.com/users')
    );
  }
}
