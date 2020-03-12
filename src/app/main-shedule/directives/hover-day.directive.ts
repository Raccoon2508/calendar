import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[hoverDay]'
})

export class HoverDayDirective {

    constructor( private elementRef: ElementRef, private renderer: Renderer2) {}
  


    @HostListener('mouseenter') mouseEnter(): void {
       this.setStyle('#c8cba5');
    }

    @HostListener('mouseleave') mouseOuter(): void {
        this.setStyle('#81ada0');
     }
 

    public setStyle(description: string): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', description);
    }
}