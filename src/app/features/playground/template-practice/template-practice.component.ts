import { Component } from '@angular/core';

@Component({
  selector: 'app-template-practice',
  standalone: true,
  templateUrl: './template-practice.component.html',
  styles: [`
    pre { background: #f5f5f5; padding: 10px; border-radius: 5px; }
  `]
})
export class TemplatePracticeComponent {
  a = 10;
  b = 20;
  message = `My name is John`;
  items = ['Apple', 'Banana', 'Mango'];
//   multiLineMessage = '';
// //   multiLineMessage = `
// // This is a multi-line
// // template literal
// // example!
// // `;

  changeValues() {
    this.a = Math.floor(Math.random() * 100);
    this.b = Math.floor(Math.random() * 100);
    this.message = `Name changed at ${new Date().toLocaleTimeString()}`;
    this.items.push('Orange');
    // this.multiLineMessage = `Updated multi-line content at: ${new Date().toLocaleTimeString()}New items count: ${this.items.length}`;
  }
}
