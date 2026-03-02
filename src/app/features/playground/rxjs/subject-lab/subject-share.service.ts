import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectShareService {

  // choose one (recommended BehaviorSubject)
  message$ = new Subject<string>();
  behaviourMessage$ = new BehaviorSubject<string>('Pass Initial value');
  replayMessage$ = new ReplaySubject<string>(2);
  asyncMessage$ = new AsyncSubject<string>();
  data$ = this.message$.asObservable();

  // sendMessage(value: string) {
  //   this.message$.next(value);
  // }
  sendMessageViaBehaviour(value: string) {
    this.behaviourMessage$.next(value);
  }
  sendMessageViaReplay(value: string) {
    this.replayMessage$.next(value);
  }
  sendMessageViaAsync(value: string) {
    this.asyncMessage$.next(value);
  }
}
