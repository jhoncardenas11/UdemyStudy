import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRepaso]'
})
export class RepasoDirective {

  constructor(private el: ElementRef) {

   }
   @HostListener('mouseenter') mouseEntro(){
     this.el.nativeElement.style.backgroundColor="yellow"
   }
   @HostListener('mouseout') mouseOut(){
    this.el.nativeElement.style.backgroundColor="null"
  }

}
