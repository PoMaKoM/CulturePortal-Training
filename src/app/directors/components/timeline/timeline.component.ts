import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { BiographyDirector, Directors } from '../../models/directors';

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

  constructor(private httpService: HttpService) { }

  public ngOnInit(): void {
    this.httpService.getDataDirectors()
      // TODO change request based on language and selected director
    .subscribe((res: Directors) => this.dataBiography = res.data[0].be.biography);
  }
}
