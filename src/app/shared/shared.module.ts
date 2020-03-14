import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './directives/parallax.directive';

@NgModule({
  declarations: [ParallaxDirective],
  imports: [CommonModule, ScrollingModule],
  exports: [ParallaxDirective]
})
export class SharedModule {}
