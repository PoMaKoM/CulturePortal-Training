import { trigger, animate, transition, style, AnimationTriggerMetadata } from '@angular/animations';

export const fadeInAnimation: AnimationTriggerMetadata =
    trigger('fadeInAnimation', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('.5s', style({ opacity: 1 }))
        ]),
    ]);
