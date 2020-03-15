import { BehaviorSubject } from 'rxjs';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { Localize } from '../../../shared/models/localize.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isVisible: boolean = false;
  public translations: Localize;
  get currentLanguage(): BehaviorSubject<string> {
    return this.getDataService.currentLanguage;
  }
  constructor(private getDataService: GetDataService) { }

  public visible(): void {
    this.isVisible = !this.isVisible;
  }

  public ngOnInit(): void {

    this.getDataService.getData().subscribe((translations: Localize) => {
      this.translations = translations;
    });
  }
}
