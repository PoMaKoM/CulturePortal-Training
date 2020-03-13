import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/services/get-data.service';

const languages: { [key: number]: string } = {
  1: 'en',
  2: 'ru',
  3: 'be'
};

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public languageId: number = 1;

  constructor(private getDataService: GetDataService) { }

  public ngOnInit(): void {
  }

  public setLanguage(id: number): void {
    if (this.languageId !== id) {
      this.languageId = id;
      this.getDataService.currentLanguage.next(languages[id]);
    }
  }
}
