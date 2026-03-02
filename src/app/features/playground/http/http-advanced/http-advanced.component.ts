import { Component } from '@angular/core';
import { Subject, debounceTime, switchMap, map, tap, catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpAdvancedService } from '../http-advanced.service';

@Component({
  selector: 'app-http-advanced',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './http-advanced.component.html'
})
export class HttpAdvancedComponent {
  posts: any[] = [];
  filteredPosts: any[] = [];
  search$ = new Subject<string>();
  postTitle = '';
  postBody = '';

  constructor(private service: HttpAdvancedService) {}

  ngOnInit() {

    // GET + map + tap
    this.service.getPosts()
      .pipe(
        tap(() => console.log('API Called')),
        map(posts => posts.slice(0, 20)) // take first 20
      )
      .subscribe(data => {
        this.posts = data;
        this.filteredPosts = data;
      });

    // Search with debounceTime + switchMap

    
    this.search$
      .pipe(
        debounceTime(500),
        map(text =>
          this.posts.filter(p =>
            p.title.toLowerCase().includes(text.toLowerCase())
          )
        )
      )
      .subscribe(result => {
        this.filteredPosts = result;
      });
  }

  // POST call
  submitPost() {
    const post = {
      title: this.postTitle,
      body: this.postBody,
      userId: 1
    };

      this.service.addPost(post)
  .pipe(
    tap(res => console.log('Post Added', res)),
    catchError(err => {
      console.error('Post API failed', err);
      alert('Failed to add post');
      return of(null); // return safe observable
    })
  )
  .subscribe(res => {
    if (!res) return;

    this.posts.unshift(res);
    this.filteredPosts = this.posts;
    this.postTitle = '';
    this.postBody = '';
  });
  }

  search(event: any) {
    this.search$.next(event.target.value);
  }

  forkJoinDemo() {
    this.service.forkJoinExample().subscribe(res => {
      console.log('forkJoin result:', res);
    });
  }

  mergeDemo() {
    this.service.mergeExample().subscribe(res => {
      console.log('merge result:', res);
    });
  }

  concatDemo() {
    this.service.concatExample().subscribe(res => {
      console.log('concat result:', res);
    });
  }
}
