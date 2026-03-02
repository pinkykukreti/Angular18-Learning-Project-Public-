import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-qa',
  standalone: true,
  imports: [],
  templateUrl: './directive-qa.component.html',
  styleUrl: './directive-qa.component.css'
})
export class DirectiveQaComponent {
  selectedIndex: number | null = null;

  qaList = [
    {
      category: 'Directive',
      question: 'What is a Directive in Angular?',
      answer: `A directive is a class that allows you to manipulate the DOM and add behavior to elements.
               It helps create reusable UI logic.`
    },
    {
      category: 'Directive',
      question: 'What are the types of Directives in Angular?',
      answer: `There are 3 types of directives:
              Component Directives – A component is actually a directive with its own template and styles.

              Structural Directives – Change DOM structure (add/remove elements like *ngIf, *ngFor, *ngSwitch)

              Attribute Directives – Change appearance(look) or behavior of elements (like ngClass, ngStyle, appHighlight (custom directive))`
    },
    {
      category: 'Directive',
      question: 'What is *ngIf vs [hidden]?',
      answer: '*ngIf → removes element from DOM, [hidden] → hides element using CSS (display:none) - *ngIf is better when element not needed.'
    },
    {
      category: 'Directive',
      question: 'What is *ngFor and trackBy?',
      answer: `*ngFor loops over list items. trackBy improves performance by tracking items using unique id.`
    },
    {
      category: 'Directive',
      question: 'What is ngSwitch?',
      answer: `Used to display elements based on condition.`
    },
    {
      category: 'Directive',
      question: 'What is ElementRef in directive?',
      answer: `It gives direct access to DOM element.
              Used to modify element style or behavior.`
    },
    {
      category: 'Directive',
      question: 'What is Renderer2 and why use it?',
      answer: `Renderer2 safely manipulates DOM and supports different platforms (browser, server).
Better than direct DOM access.`
    },
    {
      category: 'Directive',
      question: 'What is HostListener in directive?',
      answer: `Listens to events on host element.
      @HostListener('mouseenter') onMouseEnter() {
      this.el.nativeElement.style.background = 'yellow';
      }
      `
    },
    {
      category: 'Directive',
      question: 'What is HostBinding?',
      answer: `Binds property of directive to host element.
      @HostBinding('style.color') color = 'red';
      `
    },
    {
      category: 'Directive',
      question: 'Can we pass values to directives?',
      answer: `Yes, using @Input.`
    },
    {
      category: 'Directive',
      question: 'Difference between Directive and Component?',
      answer: `A component controls a view with a template, while a directive changes the behavior of an existing element.`
    },
    {
      category: 'Directive',
      question: 'Why use custom directives?',
      answer: `Reusability, Cleaner code, Separation of concerns, Better maintainability`
    },
    {
      category: 'Directive',
      question: 'Can one element have multiple directives?',
      answer: `Yes, multiple directives can be applied to one element.`
    },
    {
      category: 'Directive',
      question: 'Difference between ng-template and ng-container?',
      answer: `ng-template - Defines a template fragment that is not rendered in the DOM by default.
              Can be instantiated dynamically (e.g., with *ngIf or ngTemplateOutlet).
              ng-container - Acts as a logical wrapper; it does not create an extra DOM element.
              Useful for grouping elements with structural directives like *ngIf or *ngFor.`
    },
    {
      category: 'Directive',
      question: 'What is ViewContainerRef?',
      answer: `It manages views inside a container (add/remove templates dynamically).`
    },
    {
      category: 'Directive',
      question: 'How many directives can be used on one element?',
      answer: `Multiple directives can be applied to one element.`
    },
    {
      category: 'Directive',
      question: 'Is component a directive?',
      answer: `Yes, every component is a directive with template.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}
