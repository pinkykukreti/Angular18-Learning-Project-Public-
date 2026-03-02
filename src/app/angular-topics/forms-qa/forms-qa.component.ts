import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-qa',
  standalone: true,
  imports: [],
  templateUrl: './forms-qa.component.html',
  styleUrl: './forms-qa.component.css'
})
export class FormsQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Forms',
      question: 'What are forms in Angular?',
      answer: `Forms are used to collect user input and validate it. Angular provides two approaches:- Template-driven forms, Reactive forms`
    },
    {
      category: 'Forms',
      question: 'Difference between Template-driven and Reactive forms?',
      answer: `Template-driven - Logic in HTML, Uses ngModel, Two-way binding, Simple forms.
      Reactive - Logic in TypeScript, Uses FormControl, FormGroup, FormBuilder, Immutable data model, Complex & scalable forms`
    },
    {
      category: 'Forms',
      question: 'What is a FormControl?',
      answer: 'Represents a single input field and tracks its value and validation state.'
    },
    {
      category: 'Forms',
      question: 'What is a FormGroup?',
      answer: `A collection of FormControls that represents the whole form.`
    },
    {
      category: 'Forms',
      question: 'What is FormBuilder?',
      answer: `A service that simplifies creation of forms and reduces boilerplate code.`
    },
    {
      category: 'Forms',
      question: 'What are synchronous validators?',
      answer: `Validators that run immediately (required, minlength, pattern).`
    },
    {
      category: 'Forms',
      question: 'What are asynchronous validators?',
      answer: `Validators that run after API call (e.g., username availability check).`
    },
    {
      category: 'Forms',
      question: 'How do you apply validation in Reactive forms?',
      answer: `this.form = this.fb.group({
              email: ['', [Validators.required, Validators.email]]
            });`
    },
    {
      category: 'Forms',
      question: 'How do you display validation errors in template?',
      answer: `<div *ngIf="form.get('email')?.invalid && form.get('email')?.touched">
                Invalid Email </div> `
    },
    {
      category: 'Forms',
      question: 'What is custom validator?',
      answer: `A user-defined validation function.`
    },
    {
      category: 'Forms',
      question: 'What is FormArray?',
      answer: `Used to handle dynamic form fields (like multiple phone numbers).`
    },
    {
      category: 'Forms',
      question: 'What is valueChanges?',
      answer: `Observable that emits when form value changes.`
    },
    {
      category: 'Forms',
      question: 'Difference between setValue() and patchValue()?',
      answer: `setValue() → must update all fields. patchValue() → can update partial fields`
    },
    {
      category: 'Forms',
      question: 'What is dirty, touched, and pristine?',
      answer: `dirty: value changed, touched: field focused & blurred, pristine: not modified`
    },
    {
      category: 'Forms',
      question: 'What is submit handling in reactive forms?',
      answer: `<form [formGroup]="form" (ngSubmit)="onSubmit()">`
    },
    {
      category: 'Forms',
      question: 'How to build dynamic forms?',
      answer: `Use FormArray to add/remove controls dynamically.`
    },
    {
      category: 'Forms',
      question: 'How to validate password & confirm password?',
      answer: `Using custom cross-field validator at FormGroup level.`
    },
    {
      category: 'Forms',
      question: 'How to reset a form?',
      answer: `this.form.reset();`
    },
    {
      category: 'Forms',
      question: 'How do you prevent memory leaks in forms?',
      answer: `Unsubscribe from valueChanges or use AsyncPipe / takeUntil.`
    },
    {
      category: 'Forms',
      question: 'How to disable a form control?',
      answer: `this.form.get('email')?.disable();`
    },
    {
      category: 'Forms',
      question: 'Can we mix template-driven and reactive forms?',
      answer: `Not recommended. It can cause unexpected behavior.`
    },
    {
      category: 'Forms',
      question: 'What is ControlValueAccessor?',
      answer: `It allows custom components (like date picker) to work as form controls.`
    },
    {
      category: 'Forms',
      question: 'Difference between ngModel and formControlName?',
      answer: `ngModel → template-driven.formControlName → reactive`
    },
    {
      category: 'Forms',
      question: 'Difference between ngModel and [(ngModel )]?',
      answer: `[ngModel] binds data one-way from component to template, while [(ngModel)] enables two-way binding, updating the component when the user changes the input.`
    },
    {
      category: 'Forms',
      question: `What is updateOn: 'blur' or 'submit'?`,
      answer: `Controls when validation runs instead of on every keystroke.`
    },
    {
      category: 'Forms',
      question: 'What is the role of statusChanges?',
      answer: `Observable that emits when form validation status changes (VALID/INVALID).`
    },
    {
      category: 'Forms',
      question: 'How to enable the next field in a reactive form based on the previous dropdown selection?',
      answer: `You can enable the next field based on the previous dropdown selection using valueChanges and the enable() / disable() methods.`
    },
    {
      category: 'Forms',
      question: 'What is template reference variable in angular?',
      answer: `A template reference variable is a template-scoped variable (declared with #) that gives access to a DOM element or component instance for property binding or method calls.`
    },
    {
      category: 'Forms',
      question: 'In How many ways we can pass template to component?',
      answer: `Templates can be passed to a component via content projection (ng-content), TemplateRef inputs, or capturing projected templates using @ContentChild/@ContentChildren.`
    },
       {
      category: 'Forms',
      question: 'What is nested reactive form?',
      answer: `A nested reactive form is a reactive form containing FormGroup or FormArray inside another FormGroup, used to manage complex or hierarchical form data.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}



