import { Component } from '@angular/core';

@Component({
  selector: 'app-state-management-qa',
  standalone: true,
  imports: [],
  templateUrl: './state-management-qa.component.html',
  styleUrl: './state-management-qa.component.css'
})
export class StateManagementQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'State Management',
      question: 'What is state management?',
      answer: `State management is the practice of managing and maintaining application data (state) in a predictable and centralized way so that components can share and update data consistently.`
    },
    {
      category: 'State Management',
      question: 'Why do we need state management?',
      answer: `Avoid prop drilling, Share data between components, Improve maintainability, Handle complex UI states, Debug easily with predictable data flow`
    },
    {
      category: 'State Management',
      question: 'What is application state?',
      answer: 'Application state is the data that determines how the UI looks and behaves (user info, cart items, form data, API responses, etc.).'
    },
    {
      category: 'State Management',
      question: 'Difference between local state and global state?',
      answer: `Local state: Component-specific (form inputs, toggle flags), Global state: Shared across app (user profile, theme, auth token)`
    },
    {
      category: 'State Management',
      question: 'What are common state management solutions in Angular?',
      answer: `Services with RxJS (BehaviorSubject), NgRx, Akita, NGXS, Component Store`
    },
    {
      category: 'State Management',
      question: 'What is Redux pattern?',
      answer: `Redux is a predictable state container based on:- Single source of truth, State is read-only, Changes happen via pure functions (reducers), Example library: Redux`
    },
    {
      category: 'State Management',
      question: 'What are the core building blocks of NgRx/Redux?',
      answer: `Store – holds state, Actions – describe what happened, Reducers – update state, Selectors – read state, Effects – handle side effects (API calls)`
    },
    {
      category: 'State Management',
      question: 'What is an action?',
      answer: `An action is an object with a type and optional payload that describes a state change.`
    },
    {
      category: 'State Management',
      question: 'What is a reducer?',
      answer: `A reducer is a pure function that takes current state and an action, and returns a new state.`
    },
    {
      category: 'State Management',
      question: 'What is a selector?',
      answer: `A selector is a function used to get specific data from the store efficiently.`
    },
    {
      category: 'State Management',
      question: 'What is immutability and why is it important?',
      answer: `State should not be modified directly. Always return a new object.Benefits:- Predictability, Easy debugging, Change detection works properly, Time-travel debugging`
    },
    {
      category: 'State Management',
      question: 'How do you handle API calls in state management?',
      answer: `Using Effects (NgRx) or middleware to handle side effects and then dispatch success/failure actions.`
    },
    {
      category: 'State Management',
      question: 'Difference between Subject and BehaviorSubject for state?',
      answer: `Subject:- No initial value. BehaviorSubject:- Has initial value and emits latest value to new subscribers (better for state)`
    },
    {
      category: 'State Management',
      question: 'What is single source of truth?',
      answer: `All application state is stored in one centralized store.`
    },
    {
      category: 'State Management',
      question: 'What are side effects in state management?',
      answer: `Operations that don’t directly update state, such as:- API calls, Logging, Navigation, Local storage access, Handled using Effects.`
    },
    {
      category: 'State Management',
      question: 'When should you use state management instead of services?',
      answer: `Use state management when:- Data is shared across many components, App is complex, You need undo/redo or debugging,,You want predictable data flow, For small apps → services are enough.`
    },
    {
      category: 'State Management',
      question: 'How do you optimize performance in state management?',
      answer: `Use selectors, Use OnPush change detection, Keep state normalized, Avoid large objects, Avoid unnecessary dispatches`
    },
    {
      category: 'State Management',
      question: 'How do you persist state on refresh?',
      answer: `Use localStorage/sessionStorage or libraries like store-persist.`
    },
    {
      category: 'State Management',
      question: 'What is normalized state?',
      answer: `State stored like a database (using IDs instead of nested objects) to avoid duplication and improve updates.`
    },
    {
      category: 'State Management',
      question: 'Difference between NgRx and using RxJS service?',
      answer: `RxJS service: simple, manual. NgRx: structured, scalable, predictable, better debugging`
    },
    {
      category: 'State Management',
      question: 'Can components directly modify store state?',
      answer: `No. Components dispatch actions; reducers update state.`
    },
    {
      category: 'State Management',
      question: 'What happens if reducer mutates state?',
      answer: `It breaks immutability → bugs, UI may not update, debugging becomes difficult.`
    },
    {
      category: 'State Management',
      question: 'How do you handle loading and error states?',
      answer: `By storing flags in state: like - loading: true, error: null`
    },
    {
      category: 'State Management',
      question: 'What is the role of RxJS in NgRx?',
      answer: `NgRx is built on RxJS for streams, actions, and effects.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}


