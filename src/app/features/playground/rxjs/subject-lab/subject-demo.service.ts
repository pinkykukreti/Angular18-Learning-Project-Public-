import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectDemoService {

  messageSubject = new Subject<string>();
  behaviorMessage$ = new BehaviorSubject<string>('Initial value like - 1234');
  replayMessage$ = new ReplaySubject<string>(2);
  asyncMessage$ = new AsyncSubject<string>();

  sendMessage(msg: string) {
    this.messageSubject.next(msg);
    this.behaviorMessage$.next(msg);
    this.replayMessage$.next(msg);
    this.asyncMessage$.next(msg);
  }

  completeAsync() {
    this.asyncMessage$.complete();
  }
}


/*

✅ 1. Subject

        - No initial value

        - New subscriber gets only future values

        - Like a live TV broadcast

        - Use: button clicks, events, socket messages


✅ 2. BehaviorSubject

        - Has an initial value

        - New subscriber gets latest value immediately

        - Use: login user, theme, language, shared state


✅ 3. ReplaySubject

        - Replays previous values to new subscribers (1 or many)

        - Use: notifications, chat history, cached data


✅ 4. AsyncSubject

        - Emits only last value when complete() is called

        - Use: one-time API result, file upload finish 

*/