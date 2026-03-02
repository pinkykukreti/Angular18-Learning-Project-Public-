import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalStateService {

  // -------------------
  // BASIC SIGNAL
  // -------------------
  count = signal(0);

  increment() {
    this.count.update(v => v + 1);
  }

  decrement() {
    this.count.update(v => v - 1);
  }

  // -------------------
  // OBJECT SIGNAL
  // -------------------
  user = signal({
    name: 'John',
    age: 25
  });

  updateUserName(name: string) {
    this.user.update(u => ({ ...u, name }));
  }

  updateAge(age: number) {
    this.user.update(u => ({ ...u, age }));
  }

  // -------------------
  // COMPUTED SIGNAL
  // -------------------
  userInfo = computed(() => {
    return `${this.user().name} - ${this.user().age} years`;
  });

  // -------------------
  // ARRAY SIGNAL
  // -------------------
  items = signal<string[]>(['Angular', 'Signals']);

  addItem(item: string) {
    if (!item) return;
    this.items.update(list => [...list, item]);
  }

  removeItem(index: number) {
    this.items.update(list => list.filter((_, i) => i !== index));
  }

  // -------------------
  // COMPUTED FROM ARRAY
  // -------------------
  totalItems = computed(() => this.items().length);

  // -------------------
  // EFFECT (SIDE EFFECT)
  // -------------------
  logEffect = effect(() => {
    console.log('Count changed:', this.count());
    console.log('User changed:', this.user());
    console.log('Items:', this.items());
  });
}
