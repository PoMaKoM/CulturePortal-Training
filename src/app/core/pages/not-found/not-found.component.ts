import { BehaviorSubject } from 'rxjs';
import { Localize } from 'src/app/shared/models/localize.model';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public translations: Localize;

  get currentLanguage(): BehaviorSubject<string> {
    return this.getData.currentLanguage;
  }
  constructor(private getData: GetDataService) {}

  public ngOnInit(): void {
    this.getData.getData().subscribe((translations: Localize) => {
      this.translations = translations;
    });
  }
}
