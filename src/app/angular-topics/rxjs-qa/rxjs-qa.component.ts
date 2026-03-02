import { Component } from '@angular/core';

@Component({
  selector: 'app-rxjs-qa',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-qa.component.html',
  styleUrl: './rxjs-qa.component.css'
})
export class RxjsQaComponent {
  selectedIndex: number | null = null;

  qaList = [
    {
      category: 'RxJS',
      question: 'What is RxJS?',
      answer: 'RxJS is a library for reactive programming using Observables to handle asynchronous data streams.'
    },
    {
      category: 'Observable',
      question: 'Why RxJS is used in Angular?',
      answer: 'Used to handle: - HTTP calls, user events, async operations'
    },
    {
      category: 'Observable',
      question: 'What is an Observable?',
      answer: 'An Observable represents a stream of values over time that can emit multiple values.'
    },
    {
      category: 'Observable',
      question: 'Difference between Observable and Promise?',
      answer: 'Observable can emit multiple values and can be cancelled, while Promise emits only one value and cannot be cancelled.'
    },
    {
      // category: 'Operators',
      question: 'What is Subscribe?',
      answer: 'Subscribe means listening to an Observable.Without subscribe(), Observable will NOT start.'
    },
    {
      category: 'Subject',
      question: 'What is a Subject?',
      answer: 'A Subject is both an Observable and an Observer. It allows multicasting to multiple subscribers.'
    },
    {
      category: 'Subject',
      question: 'What is BehaviorSubject?',
      answer: 'BehaviorSubject stores the latest value and emits it immediately to new subscribers.'
    },
    {
      category: 'Subject',
      question: 'What is ReplaySubject?',
      answer: 'Stores multiple previous values.'
    },
    {
      category: 'Subject',
      question: 'What is AsyncSubject?',
      answer: 'Emits only last value when completed.'
    },
    {
      category: 'Operators',
      question: 'What is operator?',
      answer: 'Operators are functions that change or control data from an Observable   .'
    },
    {
      category: 'Operators',
      question: 'What is map operator?',
      answer: 'map operator transforms the emitted value into another value.'
    },
    {
      category: 'Operators',
      question: 'What is filter operator?',
      answer: 'filter operator emits only those values that satisfy a condition.'
    },
    {
      category: 'Operators',
      question: 'What is switchMap?',
      answer: 'switchMap cancels the previous observable and subscribes to the latest one.'
    },
    {
      category: 'Operators',
      question: 'What is concatMap?',
      answer: 'Runs API calls one after another.'
    },
    {
      category: 'Operators',
      question: 'What is exhaustMap?',
      answer: 'Ignores new requests until current completes.'
    },
    {
      category: 'Operators',
      question: 'What is combineLatest?',
      answer: 'combineLatest is an RxJS operator used to combine multiple Observables.It emits a new value whenever any one of the Observables emits, using the latest value from all Observables.'
    },
    {
      category: 'Operators',
      question: 'What is zip()?',
      answer: 'Combines values one by one from each Observable.'
    },
    {
      category: 'Operators',
      question: 'What is withLatestFrom()?',
      answer: 'Combines source value with latest from another Observable.'
    },
    {
      category: 'Operators',
      question: 'What is delay()?',
      answer: 'Delays emission.'
    },
    {
      category: 'Operators',
      question: 'What is throttleTime()?',
      answer: 'Emits first value and ignores others for time period.'
    },
    {
      category: 'Operators',
      question: 'Difference between mergeMap and switchMap?',
      answer: 'mergeMap runs all inner observables in parallel, while switchMap cancels previous ones.'
    },
    {
      category: 'Operators',
      question: 'What is forkJoin?',
      answer: 'forkJoin Used to run multiple API calls and wait for all to complete.'
    },
    {
      category: 'Operators',
      question: 'What is distinctUntilChanged?',
      answer: 'distinctUntilChanged emits only when value changes.'
    },
    {
      category: 'Operators',
      question: 'What is tap()?',
      answer: 'Tap Used for debugging/logging. Does not change data.'
    },
    {
      category: 'Operators',
      question: 'What is take(1)?',
      answer: 'Takes only first value then completes.'
    },
    {
      category: 'Operators',
      question: 'What is first()?',
      answer: 'Similar to take(1) but with condition.'
    },
    {
      category: 'Operators',
      question: 'What is finalize()?',
      answer: 'Runs when observable completes or errors.'
    },
    {
      category: 'Operators',
      question: 'What is takeUntil()?',
      answer: 'Used to auto unsubscribe.'
    },
    {
      category: 'Operators',
      question: 'What is shareReplay()?',
      answer: 'Shares API result with multiple subscribers.Prevents multiple API calls.'
    },
    {
      category: 'Operators',
      question: 'What is retry?',
      answer: 'retry is an RxJS operator used to automatically re-execute an Observable when an error occurs.Instead of failing immediately, it tries again a specified number of times.'
    },
    {
      category: 'Operators',
      question: 'What is catchError()?',
      answer: 'Handles error in Observable.'
    },
    {
      category: 'Operators',
      question: 'What is observable lifecycle?',
      answer: '1. next() – emits value 2.error() – sends error 3. complete() – finishes'
    },
    {
      category: 'Operators',
      question: 'What is debounceTime?',
      answer: 'debounceTime emits a value only after a specified time without another emission.'
    },
    {
      category: 'Operators',
      question: 'What is pipe()?',
      answer: 'pipe() is used to apply operators.'
    },
    {
      category: 'Operators',
      question: 'What is unsubscribe and why needed?',
      answer: 'Unsubscribe stops listening to Observable.Used to prevent memory leaks.'
    },
    {
      category: 'Operators',
      question: 'What is cold and hot observable?',
      answer: `Cold Observable: - Starts when you subscribe (like API call) \n
               Hot Observable: Already running (like mouse click event)
               Subject is hot observable.`
    },
    {
      category: 'Operators',
      question: 'What is unsubscribe and why needed?',
      answer: 'Unsubscribe stops listening to Observable.Used to prevent memory leaks.'
    },
    {
      category: 'Operators',
      question: 'What is of() vs from()?',
      answer: 'of() → creates Observable from values like of(1,2,3) from() → creates Observable from array or promise like from([1,2,3])'
    },
    {
      category: 'Operators',
      question: 'What is Flattening operator?',
      answer: 'Operators like switchMap, mergeMap, concatMap.'
    },
    {
      category: 'Operators',
      question: 'What is Higher-order Observable?',
      answer: 'Observable that emits another Observable.'
    },
    {
      category: 'Operators',
      question: 'What is Multicasting?',
      answer: 'Sharing one Observable to many subscribers.'
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}
