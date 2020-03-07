import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public src: string = 'assets/video/background.mp4';
  public webm: string = 'assets/video/background.webm';
  constructor() {}

  public ngOnInit(): void {}
}
