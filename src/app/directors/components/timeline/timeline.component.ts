import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { InfoDirector } from 'src/app/shared/models/info-director.model';
import { BiographyDirector } from './../../../shared/models/biography-director.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() public infoDirector: InfoDirector;
  public dataBiography: Array<BiographyDirector>;
  public alternate: boolean = true;
  public size: number = 40;
  public side: string = 'left';

  constructor() { }

  public ngOnInit(): void {
  }
  public ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    if (changes.infoDirector.currentValue) {
      this.dataBiography = changes.infoDirector.currentValue.be.biography;
    }
  }
}
