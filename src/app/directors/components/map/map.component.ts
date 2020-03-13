import { Component, OnInit, ChangeDetectorRef, Input, SimpleChange } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { environment } from 'src/environments/environment';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  private map: mapboxgl.Map;
  private style: string = 'mapbox://styles/mapbox/streets-v11';
  private lat: number = 0;
  private lng: number = 0;

  @Input() public director: InfoDirector;

  constructor() { }

  public ngOnInit(): void { }

  public ngOnChanges(changes: { [propKey: string]: SimpleChange }): void {
    if (changes.director.currentValue) {
      this.lat = changes.director.currentValue.en.dates.birth.place.lat;
      this.lng = changes.director.currentValue.en.dates.birth.place.lng;
      console.log(this.lat, this.lng);
    }
    // tslint:disable-next-line
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      center: {lng: this.lng, lat: this.lat}
    });
  }
}
