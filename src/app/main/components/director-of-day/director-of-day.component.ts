import { GetDataService } from 'src/app/core/services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Component({
  selector: 'app-director-of-day',
  templateUrl: './director-of-day.component.html',
  styleUrls: ['./director-of-day.component.scss']
})
export class DirectorOfDayComponent implements OnInit {
  private index: number;
  public infoDirector: InfoDirector;
  public photoSrc: string = '';
  public name: string = '';
  public description: string = '';

  constructor(private getDataService: GetDataService) { }

  public getRandomDirector(val: number): number {
    return Math.floor(Math.random() * val) + 1;
  }

  public ngOnInit(): void {
    const date: Date = new Date();
    this.index = date.getDay();
    this.getDataService.getDataDirectors().subscribe((directors: InfoDirector[]) => {
      this.infoDirector = directors[this.getRandomDirector(directors.length)];
      this.photoSrc = this.infoDirector.avatar;
      this.name = this.infoDirector.en.name;
      this.description = this.infoDirector.en.description;
    });
  }
}
