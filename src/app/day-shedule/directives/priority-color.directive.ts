import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[priorityColor]'
})

export class PriorityColorDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
