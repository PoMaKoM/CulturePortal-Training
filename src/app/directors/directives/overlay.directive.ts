import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOverlay]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class OverlayDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  private overlayIn(): void {
    let image: HTMLDivElement = this.element.nativeElement.querySelector('.card-image');
    let top: HTMLDivElement = this.element.nativeElement.querySelector('.card-content-top');
    let bottom: HTMLDivElement = this.element.nativeElement.querySelector('.card-content-bottom');
    this.renderer.removeClass(image, 'closed');
    this.renderer.removeClass(top, 'top-disabled');
    this.renderer.removeClass(bottom, 'bottom-disabled');
    this.renderer.addClass(image, 'opened');
    this.renderer.addClass(top, 'top-enabled');
    this.renderer.addClass(bottom, 'bottom-enabled');

  }

  private overlayOut(): void {
    let image: HTMLDivElement = this.element.nativeElement.querySelector('.card-image');
    let top: HTMLDivElement = this.element.nativeElement.querySelector('.card-content-top');
    let bottom: HTMLDivElement = this.element.nativeElement.querySelector('.card-content-bottom');
    this.renderer.removeClass(image, 'opened');
    this.renderer.removeClass(top, 'top-enabled');
    this.renderer.removeClass(bottom, 'bottom-enabled');
    this.renderer.addClass(image, 'closed');
    this.renderer.addClass(top, 'top-disabled');
    this.renderer.addClass(bottom, 'bottom-disabled');
  }

  public onMouseEnter(): void {
    this.overlayIn();
  }
  public onMouseLeave(): void {
    this.overlayOut();
  }

}
