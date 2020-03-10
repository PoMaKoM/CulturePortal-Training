import { Directors } from 'src/app/shared/models/directors.model';
import { HttpService } from 'src/app/core/services/http.service';
import { Component, OnInit } from '@angular/core';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Component({
  selector: 'app-director-of-day',
  templateUrl: './director-of-day.component.html',
  styleUrls: ['./director-of-day.component.scss']
})
export class DirectorOfDayComponent implements OnInit {
  public infoDirector: InfoDirector;
  public photoSrc: string = '';
  public name: string = '';
  public description: string = '';
  public id: string = '';
  private index: number;
  constructor(private httpService: HttpService) {}

  public ngOnInit(): void {
    const date = new Date();
    this.index = date.getDay();
    this.httpService.getDataDirectors().subscribe((res: Directors) => {
      this.infoDirector = res.data[0];
      this.photoSrc = this.infoDirector.avatar;
      this.name = this.infoDirector.en.name;
      this.description = this.infoDirector.en.description;
      this.id = this.infoDirector.id;
    });
  }
}
