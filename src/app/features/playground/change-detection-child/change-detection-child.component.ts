
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child-onpush',
  standalone: true,
  templateUrl: './change-detection-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionChildComponent {
  @Input() counter!: number;
  @Input() user!: { name: string };

  constructor(private cdr: ChangeDetectorRef) {}

  forceUpdate() {
    this.cdr.detectChanges(); // manual refresh
  }
}
