import { DetailsInfoDirector } from './../../../shared/models/details-info-director.model';
import { FilmsDirector } from './../../../shared/models/films-director.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { DetailsService } from '../../../core/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public directorId: string;
  public details: DetailsInfoDirector;
  public src: string;
  public name: string;
  public description: string;
  public films: FilmsDirector[];
  constructor(public route: ActivatedRoute, private detailsService: DetailsService) {}

  public ngOnInit(): void {
    this.details = this.detailsService.detailsInfo;
    this.src = this.detailsService.director.avatar;
    this.name = this.details.name;
    this.description = this.details.description;
    this.films = this.details.films;
  }
}
