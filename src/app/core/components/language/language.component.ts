import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public languageId: number = 1;

  constructor() { }

  public ngOnInit(): void {
  }

  public setLanguage(id: number): void {
    if (this.languageId !== id) {
      this.languageId = id;
    }
  }
}
