import { trigger, animate, transition, style, AnimationTriggerMetadata, state } from '@angular/animations';

export const expand: AnimationTriggerMetadata =  trigger('expand', [
  state('*', style({ opacity: 1, transform: 'translateX(0)' })),
  transition(':enter', [
    style({ transform: 'translateY(-50%)', opacity: 0 }),
    animate('700ms ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);
