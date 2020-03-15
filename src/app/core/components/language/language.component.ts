import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/core/services/get-data.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public languageId: number;
  public languages: { [key: number]: string } = {
    1: 'en',
    2: 'ru',
    3: 'be'
  };
  public languagesArr: string[] = Object.values(this.languages);

  constructor(private getDataService: GetDataService) { }

  public ngOnInit(): void {
    this.languageId = this.languagesArr.indexOf(localStorage.getItem('language')) + 1 || 1;
    this.getDataService.transferLanguageValue(this.languages[this.languageId]);
  }

  public setLanguage(id: number): void {
    if (this.languageId !== id) {
      this.languageId = id;
      this.getDataService.currentLanguage.next(this.languages[id]);
      localStorage.setItem('language', this.languages[id]);
      this.getDataService.transferLanguageValue(this.languages[this.languageId]);
    }
  }
}
