import { Component } from '@angular/core';

@Component({
  selector: 'app-service-di-qa',
  standalone: true,
  imports: [],
  templateUrl: './service-di-qa.component.html',
  styleUrl: './service-di-qa.component.css'
})
export class ServiceDIQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Service',
      question: 'What is a Service in Angular?',
      answer: `Services are classes used to encapsulate reusable logic, such as data fetching, state management, or utility functions, which can be shared across components.`
    },
    {
      category: 'Service',
      question: 'Why do we use services?',
      answer: `To separate concerns, promote code reusability, and make components cleaner by delegating business logic to services.`
    },
    {
      category: 'Service',
      question: 'What is dependency injection (DI)?',
      answer: 'A design pattern where a class receives its dependencies (services) from an external source rather than creating them itself.'
    },
    {
      category: 'Service',
      question: 'What is the purpose of @Injectable()?',
      answer: `Marks a class as a service that can participate in the DI system. Without it, Angular cannot inject dependencies.`
    },
    {
      category: 'Service',
      question: 'How do you provide a service in Angular?',
      answer: `Using providedIn: 'root' for app-wide singleton,
              In providers array of a module for module-level,
              In providers array of a component for component-level instance`
    },
    {
      category: 'Service',
      question: 'What is the difference between providing a service in root vs module vs component?',
      answer: `root: singleton, available app-wide,
              Module: singleton within that module,
              Component: new instance for each component instance`
    },
    {
      category: 'Service',
      question: 'What is hierarchical dependency injection?',
      answer: `Angular injectors are hierarchical. Services can be scoped at different levels (app, module, component), and child injectors can override parent services.`
    },
    {
      category: 'Service',
      question: 'Can a service inject another service?',
      answer: `Yes, DI supports injecting services into other services.`
    },
    {
      category: 'Service',
      question: 'What is a singleton service?',
      answer: `A single instance shared across the app (usually provided in root).`
    },
    {
      category: 'Service',
      question: 'What are the differences between useClass, useExisting, useFactory, and useValue in providers?',
      answer: `useClass: Instantiate a class for DI,
              useExisting: Use an existing service instance,
              useFactory: Use a factory function to create the dependency,
              useValue: Provide a literal value`
    },
    {
      category: 'Service',
      question: 'How can you lazy-load a service only when needed?',
      answer: `Provide the service in a lazy-loaded module instead of root.
              Or use providedIn: SomeModule.`
    },
    {
      category: 'Service',
      question: 'Explain tree-shakable services.',
      answer: `Services provided with providedIn: 'root' are tree-shakable. If unused, they are removed during build.`
    },
    {
      category: 'Service',
      question: 'Difference between service injection in constructor vs injector.get()?',
      answer: `Constructor DI is preferred and type-safe,
              injector.get() is manual and dynamic, can be used in non-class context`
    },
    {
      category: 'Service',
      question: 'What are multi-providers in Angular?',
      answer: `When you want multiple classes/values under the same token (e.g., logging strategies),
              Use multi: true in provider.`
    },
    {
      category: 'Service',
      question: 'Explain optional dependencies and how to handle them.',
      answer: `Use @Optional() decorator to inject dependencies that may not always exist. Angular will inject null if unavailable.`
    },
    {
      category: 'Service',
      question: 'What is hierararical dependency injection?',
      answer: `Hierarchical DI in Angular organizes injectors in a tree, allowing services to be singleton at root or scoped to a component, depending on where they are provided.
              Angular resolves dependencies by searching up the injector tree.`
    },
    {
      category: 'Service',
      question: 'How do we create generic functions in service?',
      answer: `Generic functions in services use TypeScript generics (<T>) to make the function reusable for different types while maintaining type safety.`
    },
    {
      category: 'Service',
      question: 'What are decorators? different type of decorators?',
      answer: `Decorators are metadata functions in Angular/TypeScript that define how classes, properties, or methods should behave.
              Types include class decorators (@Component), property decorators (@Input, @Output), and method/parameter decorators (@HostListener, @Inject).`
    },
  {
      category: 'Service',
      question: 'What is ngZone?',
      answer: `NgZone in Angular is a service that helps Angular detect asynchronous operations and trigger change detection automatically when the application state changes.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}

