import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[bmRedColored]'
})
export class RedColoredDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
  @HostListener('click') doSomething() {
    alert('click');
  }

}
