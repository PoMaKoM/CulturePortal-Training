import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  public src: string = 'assets/video/background.mp4';
  public webm: string = 'assets/video/background.webm';
  constructor() {}
}
