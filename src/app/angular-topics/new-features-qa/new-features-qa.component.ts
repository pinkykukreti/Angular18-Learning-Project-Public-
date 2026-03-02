import { Component } from '@angular/core';

@Component({
  selector: 'app-new-features-qa',
  standalone: true,
  imports: [],
  templateUrl: './new-features-qa.component.html',
  styleUrl: './new-features-qa.component.css'
})
export class NewFeaturesQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'New Features',
      question: 'What are Signals in Angular?',
      answer: `Signals are a new reactive state management system that track changes automatically and update the UI efficiently without RxJS.`
    },
    {
      category: 'New Features',
      question: 'What are Standalone Components?',
      answer: `Standalone components remove the need for NgModules by declaring dependencies directly inside the component.`
    },
    {
      category: 'New Features',
      question: 'What is the new Control Flow syntax? (@if, @for)',
      answer: `Angular introduced built-in control flow syntax to replace *ngIf and *ngFor with better performance and readability.`
    },
    {
      category: 'New Features',
      question: 'What is Deferred Loading (@defer)?',
      answer: `@defer allows lazy loading of template blocks to improve performance. Like - @defer { <app-heavy-component /> }`
    },
    {
      category: 'New Features',
      question: 'What is Zoneless Angular?',
      answer: `Angular can now run without Zone.js using Signals, improving performance and reducing unnecessary change detection.`
    },
    {
      category: 'New Features',
      question: 'What is Hydration in Angular?',
      answer: `Hydration reuses server-rendered HTML (SSR) and attaches event listeners instead of re-rendering the page.`
    },
    {
      category: 'New Features',
      question: 'What improvements came in Angular SSR?',
      answer: `Faster hydration, Partial hydration, Better SEO, Improved performance`
    },
    {
      category: 'New Features',
      question: 'What is the new inject() function?',
      answer: `It allows dependency injection outside constructors.`
    },
    {
      category: 'New Features',
      question: 'What is provideHttpClient()?',
      answer: `A modern way to configure HttpClient using standalone APIs instead of NgModules.`
    },
    {
      category: 'New Features',
      question: 'What is DestroyRef?',
      answer: `It helps manage cleanup logic when a component is destroyed (used with signals and effects).`
    },
    {
      category: 'New Features',
      question: 'What is effect() in Signals?',
      answer: `effect() runs automatically whenever dependent signals change.`
    },
    {
      category: 'New Features',
      question: 'What is computed() in Signals?',
      answer: `Creates derived reactive values from other signals.`
    },
    {
      category: 'New Features',
      question: 'What are Functional Guards & Interceptors?',
      answer: `New lightweight functions instead of class-based guards/interceptors.`
    },
    {
      category: 'New Features',
      question: 'What is the new build system (esbuild / Vite)?',
      answer: `Angular now uses faster build tools like esbuild & Vite for faster builds and HMR.`
    },
    {
      category: 'New Features',
      question: 'What is Typed Forms?',
      answer: `Forms now support strong TypeScript typing for better compile-time safety.`
    },
    {
      category: 'New Features',
      question: 'What is required inputs feature?',
      answer: `Inputs can be marked as required:- @Input({ required: true }) user!: User;`
    },
    {
      category: 'New Features',
      question: 'What is image optimization directive (NgOptimizedImage)?',
      answer: `Improves image loading performance with lazy loading and priority hints.`
    },
    {
      category: 'New Features',
      question: 'What is Partial Hydration?',
      answer: `Only critical components are hydrated on page load, improving performance.`
    },

    {
      category: 'New Features',
      question: 'What is Angular’s future direction?',
      answer: `Signals-based reactivity, Zoneless change detection, Better SSR & hydration, Standalone-first architecture`
    },
    {
      category: 'New Features',
      question: 'What happens if you don’t destroy modal properly?',
      answer: `It can cause memory leaks and unexpected UI behavior.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}




