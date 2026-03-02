import { Component } from '@angular/core';
import { ChangeDetectionChildComponent } from '../change-detection-child/change-detection-child.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-change-detection-lab',
  standalone: true,
  imports: [CommonModule, ChangeDetectionChildComponent],
  templateUrl: './change-detection-lab.component.html'
})

export class ChangeDetectionAdvancedComponent {
  counter = 0;

  user = { name: 'Amit' };

  counter$ = new BehaviorSubject<number>(0);

  increment() {
    this.counter++;
  }

  // ❌ mutation (won’t update OnPush child)
  mutateUser() {
    this.user.name = 'Mutated ' + Math.floor(Math.random() * 100);
  }

  // ✅ new object reference
  newUser() {
    this.user = { name: 'NewUser ' + Math.floor(Math.random() * 100) };
  }

  emitObservable() {
    this.counter$.next(this.counter$.value + 1);
  }

  asyncUpdateWithMarkForCheck() {
    setTimeout(() => {
      this.counter++;
    }, 2000);
  }
}

