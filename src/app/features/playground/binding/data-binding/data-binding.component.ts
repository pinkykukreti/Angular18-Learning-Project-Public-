import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildViewComponent } from '../../viewchild/child-view/child-view.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildViewComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  title = 'Hello from Interpolation Component';
  isDisabled = true;
  username = '';
  count = 0;
  increment() {
    this.count++;
  }
}
