import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignalStateService } from './signal-state.service';

@Component({
  selector: 'app-signals-lab',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signals-lab.component.html'
})
export class SignalsLabComponent {

  // using inject instead of constructor
  state = inject(SignalStateService);

  newItem = '';
}
