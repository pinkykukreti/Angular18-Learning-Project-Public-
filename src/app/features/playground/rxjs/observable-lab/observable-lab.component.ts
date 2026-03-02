import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, debounceTime, distinctUntilChanged, filter, map, retry, shareReplay, switchMap, takeUntil, tap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { UserSearchService } from '../services/user-search.service';

@Component({
  selector: 'app-observable-lab',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './observable-lab.component.html',
  styleUrl: './observable-lab.component.css'
})
export class ObservableLabComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  users: any[] = [];
  loading = false;
  errorMsg = '';
  page = 0;
  limit = 6;
  total = 0;

  private destroy$ = new Subject<void>();
  private cache = new Map<string, any[]>();

  constructor(private http: HttpClient, private userService: UserSearchService) {
    
    this.searchControl.valueChanges.pipe(
      filter((value: any) => value && value.length > 2),   // only if more than 2 chars 
      debounceTime(500),              // wait user to stop typing
      distinctUntilChanged(),         // ignore same value or prevent duplicate calls
      tap(() => {                     // performs side effects (loading state, caching)
        this.page = 0;
        this.loading = true;          // side effects (loading spinner)
        this.errorMsg = '';
      }),
      switchMap(query =>           //cancel previous API
        this.userService.getUsers(query, this.page, this.limit)
      ),
      takeUntil(this.destroy$)  // auto unsubscribe on component destroy (prevents memory leaks)
    ).subscribe(users => {
      this.users = users;
      this.loading = false;
    });
  }
  ngOnInit(): void { }
  loadMore() {
    this.page++;
    this.loading = true;

    const query = this.searchControl.value!;

    this.userService.getUsers(query, this.page, this.limit)
      .pipe(takeUntil(this.destroy$))
      .subscribe(users => {
        this.users = [...this.users, ...users];
        this.loading = false;
      });
  }

  ngOnDestroy() {
    console.log('Component destroyed, unsubscribed');
    this.destroy$.next();
    this.destroy$.complete();
  }
}


