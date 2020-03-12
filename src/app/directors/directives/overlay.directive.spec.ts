import { OverlayDirective } from './overlay.directive';
import { ElementRef, Renderer2 } from '@angular/core';
class MockElementRef implements ElementRef {
  public nativeElement: ElementRef;
}
let renderer2: Renderer2;

describe('OverlayDirective', () => {
  it('should create an instance', () => {
    const directive: OverlayDirective = new OverlayDirective(new MockElementRef(), renderer2);
    expect(directive).toBeTruthy();
  });
});
