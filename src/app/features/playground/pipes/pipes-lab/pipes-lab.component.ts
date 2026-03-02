import { Component } from '@angular/core';
import { CustomTextPipe } from '../../../../pipes/custom-upper.pipe';
import { ReversePipe } from '../../../../pipes/reverse-pipe';

@Component({
  selector: 'app-pipes-lab',
  standalone: true,
  imports: [CustomTextPipe, ReversePipe],
  templateUrl: './pipes-lab.component.html',
  styleUrl: './pipes-lab.component.css'
})
export class PipesLabComponent {
  message = 'Hello Angular';
}
