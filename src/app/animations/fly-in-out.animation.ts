import { trigger, animate, transition, style, AnimationTriggerMetadata, state } from '@angular/animations';

export const flyInOut: AnimationTriggerMetadata = trigger('flyInOut', [
  state('*', style({ opacity: 1, transform: 'translateX(0)' })),
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    animate('900ms ease-in')
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
  ])
]);
