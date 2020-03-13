import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseenter', ['$event'])
  public onMouseEnter(e: unknown): void {
    this.elRef.nativeElement.style.backgroundPositionY = '95%';
    this.elRef.nativeElement.style.transition = '1s';
  }

  @HostListener('mousemove', ['$event'])
  public onMouseMove(e: MouseEvent): void {
    const x: number = e.movementX;
    const y: number = e.movementY;
    if (x > 0) {
      this.elRef.nativeElement.style.backgroundPositionX = '-5%';
      this.elRef.nativeElement.style.transition = '1s';
    } else if (x < 0) {
      this.elRef.nativeElement.style.backgroundPositionX = '5%';
      this.elRef.nativeElement.style.transition = '1s';
    } else if (y > 0) {
      this.elRef.nativeElement.style.backgroundPositionY = '95%';
      this.elRef.nativeElement.style.transition = '1s';
    } else if (y < 0) {
      this.elRef.nativeElement.style.backgroundPositionY = '105%';
      this.elRef.nativeElement.style.transition = '1s';
    } else {
      this.elRef.nativeElement.style.backgroundPositionX = 'left';
      this.elRef.nativeElement.style.transition = '1s';
    }
  }

  @HostListener('mouseleave', ['$event'])
  public onMouseLeave(e: unknown): void {
    this.elRef.nativeElement.style.backgroundPositionX = 'left';
    this.elRef.nativeElement.style.backgroundPositionY = 'bottom';
    this.elRef.nativeElement.style.transition = '1s';
  }
}
