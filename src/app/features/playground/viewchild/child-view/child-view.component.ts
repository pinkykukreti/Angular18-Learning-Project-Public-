import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <p>Message from parent: {{ message }}</p>
    <button style="margin-right: 20px" (click)="sendToParent()">Send to Parent</button>
  `
})
export class ChildViewComponent {
  // Input from parent
  @Input() message: string = '';

  // Output to parent
  @Output() notify = new EventEmitter<string>();

  sendToParent() {
    this.notify.emit('Hello Parent, I clicked!');
  }

  shout(msg: string) {
    console.log('Child shout:', msg);
  }
}
