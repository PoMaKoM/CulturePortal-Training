import { Component, OnInit } from '@angular/core';
import { flyInOut } from 'src/app/animations/fly-in-out.animation';
import { expand } from 'src/app/animations/expand.animation';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [
    flyInOut,
    expand
  ],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  }
})
export class MainPageComponent implements OnInit {
  public src: string = 'assets/video/background.mp4';
  public webm: string = 'assets/video/background.webm';
  constructor() {}

  public ngOnInit(): void {}
}
