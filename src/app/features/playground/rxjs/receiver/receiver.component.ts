import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-receiver',
  template: `
    <h3>Receiver Component</h3>

    <p><b>Message:</b> {{ message }}</p>
    <p><b>Status:</b> {{ status }}</p>
  `
})
export class ReceiverComponent implements OnInit, OnDestroy {

  message = '';
  status = '';

  private destroy$ = new Subject<void>();

  constructor(private sharedService: SharedDataService) {}

  ngOnInit() {
    // Subject
    this.sharedService.message$
      .pipe(takeUntil(this.destroy$))
      .subscribe(msg => this.message = msg);

    // BehaviorSubject
    this.sharedService.status$
      .pipe(takeUntil(this.destroy$))
      .subscribe(status => this.status = status);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
