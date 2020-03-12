import { Observable, Subject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { BiographyDirector } from './../../../shared/models/biography-director.model';

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

  constructor() {}

  public ngOnInit(): void {}
}
