import { DetailsService } from './../../../core/services/details.service';
import { GetDataService } from 'src/app/core/services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { Directors } from 'src/app/shared/models/directors.model';

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
  public id: string;

  constructor(private getDataService: GetDataService, private detailService: DetailsService) {}

  public getRandomDirector(val: number): number {
    return Math.floor(Math.random() * val) + 1;
  }

  public ngOnInit(): void {
    const date: Date = new Date();
    this.index = date.getDay();
    console.log(this.index);
    this.getDataService.getDataDirectors().subscribe((directors: Directors) => {
      this.infoDirector = directors.data[this.getRandomDirector(directors.data.length)];
      this.photoSrc = this.infoDirector.avatar;
      this.name = this.infoDirector.en.name;
      this.description = this.infoDirector.en.description;
      this.id = this.infoDirector.id;
    });
  }
}
