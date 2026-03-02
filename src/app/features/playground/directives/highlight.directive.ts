// import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// @Directive({
//   selector: '[appHighlight]',
//   standalone: true
// })
// export class HighlightDirective {
//   @Input() appDisable = false;
//   @Input() appHighlight = 'yellow';

//   constructor(private el: ElementRef) {}

//   @HostListener('mouseenter')
//   onMouseEnter() {
//     this.el.nativeElement.style.backgroundColor = this.appHighlight;
//   }

//   @HostListener('mouseleave')
//   onMouseLeave() {
//     this.el.nativeElement.style.backgroundColor = '';
//   }
// }


import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDisable]',
  standalone: true
})
export class DisableDirective implements OnChanges {

  @Input() appDisable = false;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.disabled = this.appDisable;
  }
}
