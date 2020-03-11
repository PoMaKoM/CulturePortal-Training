import { FilmsDirector } from './../../../shared/models/films-director.model';
import { Directors } from './../../../shared/models/directors.model';
import { HttpService } from './../../../core/services/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public directorId: string;
  public infoDirector: InfoDirector;
  public src: string;
  public name: string;
  public description: string;
  public films: FilmsDirector[];
  constructor(public route: ActivatedRoute, public searchService: HttpService) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.directorId = params.id;
      this.searchService.getDataDirectors().subscribe((res: Directors) => {
        this.infoDirector = res.data.find((item: InfoDirector) => item.id === this.directorId);
        this.src = this.infoDirector.avatar;
        this.name = this.infoDirector.en.name;
        this.description = this.infoDirector.en.description;
        this.films = this.infoDirector.en.films;
        console.log(this.infoDirector);
      });
    });
  }
}
