import { Component } from '@angular/core';
import { DisableDirective } from '../highlight.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-directives-lab',
  standalone: true,
  imports: [DisableDirective, CommonModule],
  templateUrl: './directives-lab.component.html',
  styleUrl: './directives-lab.component.css'
})
export class DirectivesLabComponent {
  showList = true;
  users = ['Ravi', 'Amit', 'Neha', 'Pooja'];
  isDisabled = true;
  toggleList() {
    this.showList = !this.showList;
  }
  toggleButton() {
    this.isDisabled = !this.isDisabled;
  }
}

