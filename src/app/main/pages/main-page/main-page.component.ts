import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { flyInOut } from 'src/app/animations/fly-in-out.animation';
import { expand } from 'src/app/animations/expand.animation';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { Localize } from './../../../shared/models/localize.model';

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
  public translations: Localize;
  get currentLanguage(): BehaviorSubject<string> {
    return this.getDataService.currentLanguage;
  }
  constructor(private getDataService: GetDataService) { }

  public ngOnInit(): void {
    this.getDataService.getData().subscribe((translations: Localize) => {
      this.translations = translations;
    });
  }
}
