import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[color]'
})

export class ColorDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = 'red';
  }
}
