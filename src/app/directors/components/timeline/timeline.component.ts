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
  @Input() public language: string;
  public dataBiography: Array<BiographyDirector>;
  public alternate: boolean = true;
  public size: number = 40;
  public side: string = 'left';

  constructor() { }

  public ngOnInit(): void {
  }
  public ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    console.log(changes);
    if (changes.language) {
      console.log(changes.language.currentValue);
      this.dataBiography = this.infoDirector[changes.language.currentValue].biography;
    }
    if (changes.infoDirector.currentValue) {
      console.log(2);
      this.dataBiography = changes.infoDirector.currentValue[this.language].biography;
    }
  }
}
