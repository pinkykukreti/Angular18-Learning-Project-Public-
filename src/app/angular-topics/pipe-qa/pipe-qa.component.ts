import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-qa',
  standalone: true,
  imports: [],
  templateUrl: './pipe-qa.component.html',
  styleUrl: './pipe-qa.component.css'
})
export class PipeQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Pipes',
      question: 'What is a pipe in Angular?',
      answer: `A pipe is used to transform data in templates (HTML) before displaying it to the user.`
    },
    {
      category: 'Pipes',
      question: 'What are built-in pipes in Angular?',
      answer: `DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe, SlicePipe`
    },
    {
      category: 'Pipes',
      question: 'What is a custom pipe?',
      answer: `A pipe created by the developer to perform custom data transformation.`
    },
    {
      category: 'Pipes',
      question: 'Difference between pure pipe and impure pipe?',
      answer: `Pure Pipe (default): Executes only when input value changes.
               Impure Pipe: Executes on every change detection cycle`
    },
    {
      category: 'Pipes',
      question: 'What is AsyncPipe?',
      answer: `AsyncPipe automatically subscribes to an Observable/Promise and returns the latest value. It also unsubscribes automatically when the component is destroyed.`
    },
    {
      category: 'Pipes',
      question: 'Why is AsyncPipe preferred over manual subscription?',
      answer: `Avoids memory leaks, Handles subscription & unsubscription automatically, Cleaner template code`
    },
    {
      category: 'Pipes',
      question: 'Can we use multiple pipes together?',
      answer: `Yes, this is called pipe chaining. like - {{ price | currency:'USD' | lowercase }}`
    },
    {
      category: 'Pipes',
      question: 'What is PipeTransform?',
      answer: `It is an interface that a custom pipe class implements. It contains the transform() method.`
    },
    {
      category: 'Pipes',
      question: 'What is the difference between pipe and method call in template?',
      answer: `Pipe: Executes only when input changes (pure pipe),
              Method: Executes every change detection cycle (performance issue),
              So pipes are more performant.`
    },
    {
      category: 'Pipes',
      question: 'Can pipes accept parameters?',
      answer: `Yes - like {{ amount | currency:'INR' }}`
    },
    {
      category: 'Pipes',
      question: 'When should you use an impure pipe?',
      answer: `When data changes internally without reference change (like array push/pop).`
    },
    {
      category: 'Pipes',
      question: 'What is the syntax of creating a custom pipe using CLI?',
      answer: `Ang generate pipe pipe-name`
    },
    {
      category: 'Pipes',
      question: 'What is the difference between filter pipe and async pipe?',
      answer: `Filter pipe: Filters or transforms data.
              Async pipe: Handles observables and subscriptions`
    },
    {
      category: 'Pipes',
      question: 'Are pipes reusable?',
      answer: `Yes, pipes are reusable and can be used across multiple components once declared in a module or standalone pipe.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}

