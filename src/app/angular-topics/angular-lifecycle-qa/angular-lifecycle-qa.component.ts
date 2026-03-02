import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-lifecycle-qa',
  standalone: true,
  imports: [],
  templateUrl: './angular-lifecycle-qa.component.html',
  styleUrl: './angular-lifecycle-qa.component.css'
})
export class AngularLifecycleQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Lifecycle Hooks',
      question: 'What is Angular lifecycle?',
      answer: `Lifecycle refers to the sequence of events from the creation, rendering, updating, and destruction of a component or directive in Angular.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'What are Angular lifecycle hooks?',
      answer: `Special methods that Angular calls at specific moments of a component’s lifecycle (e.g., creation, changes, destruction).`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'Name some commonly used lifecycle hooks.',
      answer: 'ngOnInit(), ngOnChanges(), ngDoCheck(), ngAfterViewInit(), ngOnDestroy()'
    },
    {
      category: 'Lifecycle Hooks',
      question: 'When is ngOnInit() called?',
      answer: `Called once after the first ngOnChanges() and after Angular initializes the component’s input properties.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'What is ngOnChanges()?',
      answer: `Called every time an input property bound via @Input() changes. Receives a SimpleChanges object with previous and current values.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'What is the difference between ngOnInit() and the constructor?',
      answer: `Constructor: Initializes class, no access to inputs or DOM.
               ngOnInit(): Lifecycle hook where inputs are resolved and component is ready for logic.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'What is ngDoCheck() and when should it be used?',
      answer: `Called during every change detection cycle. Used for custom change detection when Angular’s default ngOnChanges() is insufficient.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'Explain ngAfterViewInit() and ngAfterViewChecked().',
      answer: `ngAfterViewInit(): - Called once after Angular initializes the component’s views and child views.
              ,ngAfterViewChecked(): - Called after every change detection cycle for the component’s views.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'What is ngAfterContentInit() and ngAfterContentChecked()?',
      answer: `Hooks related to content projection (<ng-content>).
      ngAfterContentInit(): - Called once after projected content is initialized.
      ngAfterContentChecked(): - Called after each change detection cycle for projected content.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'When is ngOnDestroy() used?',
      answer: `Called just before Angular destroys the component. Used to clean up subscriptions, timers, or event listeners to avoid memory leaks.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'What is the difference between ngOnChanges() and ngDoCheck()?',
      answer: `ngOnChanges(): - Angular automatically detects changes to @Input() properties.
               ngDoCheck(): - Allows custom change detection for properties Angular doesn’t track.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'How can you detect changes in a deeply nested object?',
      answer: `Angular detects object reference changes by default. For nested changes, either create a new object reference or use ngDoCheck() with KeyValueDiffers.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'What is the correct order of lifecycle hooks?',
      answer: `constructor, ngOnChanges(), ngOnInit(), ngDoCheck(), ngAfterContentInit(), ngAfterContentChecked(), ngAfterViewInit(), ngAfterViewChecked(), ngOnDestroy()`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'What is the difference between component and directive lifecycle hooks?',
      answer: `Hooks are similar, but some hooks like ngAfterViewInit() are only relevant to components with views.`
    },
    {
      category: 'Lifecycle Hooks',
      question: 'How does Angular detect changes and trigger lifecycle hooks?',
      answer: `Angular uses a change detection mechanism. Whenever a bound property changes or an event triggers, Angular checks for updates and calls appropriate hooks like ngOnChanges() and ngDoCheck().`
    },
        {
      category: 'Lifecycle Hooks',
      question: 'Can you manually trigger change detection?',
      answer: `Yes, using ChangeDetectorRef.detectChanges() or markForCheck(), useful for OnPush change detection strategy.`
    },
           {
      category: 'Lifecycle Hooks',
      question: 'What is the OnPush change detection strategy and how does it affect lifecycle hooks?',
      answer: `Components only check for changes if their inputs change by reference or if an event occurs inside the component. Hooks like ngDoCheck() may not trigger as frequently.`
    },
          {
      category: 'Lifecycle Hooks',
      question: 'How do lifecycle hooks help in optimizing performance?',
      answer: `They allow cleanup (ngOnDestroy()), defer initialization until ready (ngOnInit()), and enable selective change detection (OnPush with hooks).`
    },
           {
      category: 'Lifecycle Hooks',
      question: 'What happens if you unsubscribe from observables in ngOnDestroy()?',
      answer: `Prevents memory leaks, ensures proper cleanup, and avoids side effects after component destruction.`
    },
            {
      category: 'Lifecycle Hooks',
      question: 'Give a scenario where ngAfterViewInit() is preferred over ngOnInit().',
      answer: `When you need to access a child component or DOM element via @ViewChild(). The child is only available after ngAfterViewInit().`
    },
               {
      category: 'Lifecycle Hooks',
      question: 'Which hook is called only once?',
      answer: `ngOnInit(), ngAfterViewInit(), ngAfterContentInit()`
    },
                 {
      category: 'Lifecycle Hooks',
      question: 'Which hook is called multiple times?',
      answer: `ngOnChanges(), ngDoCheck(), ngAfterViewChecked()`
    },
                    {
      category: 'Lifecycle Hooks',
      question: 'Best place for API calls?',
      answer: `ngOnInit()`
    },
                      {
      category: 'Lifecycle Hooks',
      question: 'Where to access DOM?',
      answer: `ngAfterViewInit()`
    },
                         {
      category: 'Lifecycle Hooks',
      question: 'Why we call any function inside ngOnInIt rather than Constructor?',
      answer: `We call functions inside ngOnInit because Angular sets up inputs and bindings only after the constructor.
              Constructor is only for dependency injection and basic setup, not for data-bound logic.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}
