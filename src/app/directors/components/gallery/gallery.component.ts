import { PhotoDirector } from './../../../shared/models/photo-director.model';
import { InfoDirector } from './../../../shared/models/info-director.model';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {
  @Input() public director: InfoDirector;
  public gallery: PhotoDirector[];

  constructor() {}

  public ngOnInit(): void {
    this.gallery = this.director.gallery;
  }

  public setData(director: InfoDirector): void {
    this.director = director;
  }

  public ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    if (changes.director) {
      this.director = changes.director.currentValue;
    }
  }
}
