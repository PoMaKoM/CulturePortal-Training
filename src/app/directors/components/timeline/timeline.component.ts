import { BiographyDirector } from './../../../shared/models/biography-director.model';
import { Component, OnInit } from '@angular/core';
import { DetailsService } from './../../../core/services/details.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public dataBiography: Array<BiographyDirector>;
  public alternate: boolean = true;
  public size: number = 40;
  public side: string = 'left';

  constructor(private detailsService: DetailsService) { }

  public ngOnInit(): void {
    this.dataBiography = this.detailsService.detailsInfo.biography;
  }
}
