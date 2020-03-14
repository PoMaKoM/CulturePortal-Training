import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() public director: InfoDirector;
  @Input() public language: string;

  constructor() { }
  public ngOnInit(): void { }

  public setData(director: InfoDirector): void {
    this.director = director;
  }

  public ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    if (changes.director) {
      this.director = changes.director.currentValue;
    }
  }
}
