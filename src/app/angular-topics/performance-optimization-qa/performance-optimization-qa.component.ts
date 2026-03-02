import { Component } from '@angular/core';

@Component({
  selector: 'app-performance-optimization-qa',
  standalone: true,
  imports: [],
  templateUrl: './performance-optimization-qa.component.html',
  styleUrl: './performance-optimization-qa.component.css'
})
export class PerformanceOptimizationQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Performance Optimization',
      question: 'What is performance optimization in Angular?',
      answer: `Improving application speed and responsiveness by reducing unnecessary change detection, minimizing DOM updates, optimizing data flow, and reducing bundle size.`
    },
    {
      category: 'Performance Optimization',
      question: 'What is Change Detection and why is it important?',
      answer: `Change detection is the process Angular uses to check if data has changed and update the UI. Too many checks can slow down the application.`
    },
    {
      category: 'Performance Optimization',
      question: 'What is OnPush change detection strategy?',
      answer: 'OnPush tells Angular to run change detection only when:- Input reference changes, Event occurs inside component, Observable emits value, This reduces unnecessary checks and improves performance. like - changeDetection: ChangeDetectionStrategy.OnPush'
    },
    {
      category: 'Performance Optimization',
      question: 'How does trackBy improve performance in *ngFor?',
      answer: `trackBy helps Angular identify items uniquely so it re-renders only changed items instead of the entire list.`
    },
    {
      category: 'Performance Optimization',
      question: 'Difference between pure and impure pipes in performance?',
      answer: `Pure pipes: Execute only when input changes (fast). Impure pipes: Execute on every change detection cycle (slow). Avoid impure pipes in large lists.`
    },
    {
      category: 'Performance Optimization',
      question: 'Why should we avoid calling methods in templates?',
      answer: `Methods execute on every change detection cycle, causing performance issues.Better to use pipes or precomputed values.`
    },
    {
      category: 'Performance Optimization',
      question: 'How does lazy loading improve performance?',
      answer: `Lazy loading loads feature modules only when needed, reducing initial bundle size and improving first load time.`
    },
    {
      category: 'Performance Optimization',
      question: 'What is tree shaking?',
      answer: `Tree shaking removes unused code during build, reducing bundle size and improving performance.`
    },
    {
      category: 'Performance Optimization',
      question: 'How do you optimize large lists in Angular?',
      answer: `Use trackBy, Use virtual scrolling, Avoid impure pipes, Use pagination`
    },
    {
      category: 'Performance Optimization',
      question: 'What is Ahead-of-Time (AOT) compilation?',
      answer: `AOT compiles templates at build time instead of runtime, resulting in:- Faster rendering, Smaller bundles, Early error detection`
    },
    {
      category: 'Performance Optimization',
      question: 'What is the role of RxJS operators in performance?',
      answer: `Operators like debounceTime, throttleTime, and distinctUntilChanged reduce unnecessary API calls and UI updates.`
    },
    {
      category: 'Performance Optimization',
      question: 'How do you reduce bundle size?',
      answer: `Lazy loading, Tree shaking, Remove unused libraries, Use AOT & production build, Use standalone components`
    },
    {
      category: 'Performance Optimization',
      question: 'How does async pipe improve performance?',
      answer: `It automatically subscribes/unsubscribes and avoids manual subscription logic, preventing memory leaks and unnecessary updates.`
    },
    {
      category: 'Performance Optimization',
      question: 'What is Zone.js and how does it affect performance?',
      answer: `Zone.js triggers change detection on async events. Excessive events can cause performance issues.
              Optimization: run heavy tasks outside Angular zone using NgZone.runOutsideAngular().`
    },
    {
      category: 'Performance Optimization',
      question: 'How do you prevent memory leaks in Angular?',
      answer: `Unsubscribe in ngOnDestroy(), Use AsyncPipe, Avoid global event listeners, Clear intervals and timers`
    },
    {
      category: 'Performance Optimization',
      question: 'Difference between server-side rendering (SSR) and client-side rendering (CSR)?',
      answer: `SSR: Faster first paint, better SEO. CSR: Faster interactions after load. Angular Universal enables SSR.`
    },
    {
      category: 'Performance Optimization',
      question: 'What is virtual scrolling?',
      answer: `Rendering only visible list items instead of the entire list to improve performance with large datasets.`
    },
    {
      category: 'Performance Optimization',
      question: 'How do you optimize forms performance?',
      answer: `Use reactive forms, Debounce valueChanges, Use OnPush, Avoid unnecessary validations`
    },
    {
      category: 'Performance Optimization',
      question: 'What are Web Workers in Angular?',
      answer: `They run heavy computations in background threads, keeping UI responsive.`
    },
    {
      category: 'Performance Optimization',
      question: 'What tools do you use to analyze Angular performance?',
      answer: `Chrome DevTools, Angular DevTools, Lighthouse, Bundle analyzer`
    },
    {
      category: 'Performance Optimization',
      question: 'Why is mutating objects bad for performance?',
      answer: `It breaks immutability and prevents Angular from detecting changes efficiently with OnPush.`
    },
    {
      category: 'Performance Optimization',
      question: 'How do selectors improve performance in state management?',
      answer: `Selectors memoize results and avoid unnecessary recalculations.`
    },
    {
      category: 'Performance Optimization',
      question: 'How do you avoid unnecessary API calls?',
      answer: `Using RxJS operators like:- debounceTime(), distinctUntilChanged()
`
    },
    {
      category: 'Performance Optimization',
      question: 'trackBy vs index in ngFor?',
      answer: `Using index causes full re-render. Unique ID with trackBy prevents it.`
    },
    {
      category: 'Performance Optimization',
      question: 'How do you handle performance in large enterprise Angular apps?',
      answer: `Lazy loading, OnPush, State management, Virtual scrolling, SSR, Code splitting`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}



