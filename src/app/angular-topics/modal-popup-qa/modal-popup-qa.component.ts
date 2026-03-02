import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-popup-qa',
  standalone: true,
  imports: [],
  templateUrl: './modal-popup-qa.component.html',
  styleUrl: './modal-popup-qa.component.css'
})
export class ModalPopupQaComponent {
  selectedIndex: number | null = null;
  qaList = [
    {
      category: 'Popup',
      question: 'What is a modal in Angular?',
      answer: `A modal is a popup dialog used to display content or get user input without navigating away from the current page.`
    },
    {
      category: 'Popup',
      question: 'Why do we use modals?',
      answer: `To show confirmations, forms, alerts, or details without changing routes.`
    },
    {
      category: 'Popup',
      question: 'How can you implement a modal in Angular?',
      answer: `Using Angular Material MatDialog, Using Bootstrap Modal, Creating a custom modal component with *ngIf`
    },
    {
      category: 'Popup',
      question: 'How do you open a modal using MatDialog?',
      answer: `this.dialog.open(MyDialogComponent); `
    },
    {
      category: 'Popup',
      question: 'How to pass data to a modal?',
      answer: `this.dialog.open(DialogComponent, {  data: { id: 10 }});`
    },
    {
      category: 'Popup',
      question: 'How to receive data inside modal?',
      answer: `constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}`
    },
    {
      category: 'Popup',
      question: 'How to close a modal?',
      answer: `this.dialogRef.close();`
    },
    {
      category: 'Popup',
      question: 'How to return data from modal?',
      answer: `this.dialogRef.close(result);`
    },
    {
      category: 'Popup',
      question: 'How to capture modal close event?',
      answer: `dialogRef.afterClosed().subscribe(result => { });`
    },
    {
      category: 'Popup',
      question: 'How do you show a confirmation dialog before delete?',
      answer: `Open modal → user confirms → perform delete action if result is true.`
    },
    {
      category: 'Popup',
      question: 'How to prevent modal from closing on outside click?',
      answer: `this.dialog.open(DialogComponent, { disableClose: true });`
    },
    {
      category: 'Popup',
      question: 'How to open modal with custom width/height?',
      answer: `this.dialog.open(DialogComponent, { width: '400px', height: '300px' });`
    },
    {
      category: 'Popup',
      question: 'How to open modal dynamically based on condition?',
      answer: `Using *ngIf or conditional logic in component before opening dialog.`
    },
    {
      category: 'Popup',
      question: 'Difference between modal and popup?',
      answer: `Modal blocks interaction with background; popup may not block background.`
    },
    {
      category: 'Popup',
      question: 'How to handle multiple modals at the same time?',
      answer: `Maintain stack of dialogs or restrict opening if one is already open.`
    },
    {
      category: 'Popup',
      question: 'How to improve modal performance?',
      answer: `Lazy load modal component, Lazy load modal component, Destroy modal on close`
    },
    {
      category: 'Popup',
      question: 'How to pass large data safely to modal?',
      answer: `Use shared service or fetch data inside modal instead of passing large objects.`
    },
    {
      category: 'Popup',
      question: 'How to make modal reusable?',
      answer: `Create a generic modal component and pass content/data via @Input() or MatDialog data.`
    },

    {
      category: 'Popup',
      question: 'What accessibility features should modals have?',
      answer: `Focus trapping, Keyboard close (ESC), ARIA roles, Screen reader support`
    },
    {
      category: 'Popup',
      question: 'What happens if you don’t destroy modal properly?',
      answer: `It can cause memory leaks and unexpected UI behavior.`
    },
  ];

  toggleAnswer(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}



