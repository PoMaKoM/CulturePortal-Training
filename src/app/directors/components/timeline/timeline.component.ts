import { Component, OnInit } from '@angular/core';
import { DetailsService } from './../../services/details.service';
import { BiographyDirector } from '../../models/biography-director.model';
import { Directors } from '../../models/directors.model';

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
