import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  // Subject (no initial value)
  private messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();

  // BehaviorSubject (has initial value)
  private statusSubject = new BehaviorSubject<string>('Offline');
  status$ = this.statusSubject.asObservable();

  sendMessage(msg: string) {
    this.messageSubject.next(msg);
  }

  updateStatus(status: string) {
    this.statusSubject.next(status);
  }
}
