import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { environment } from 'src/environments/environment';
import { DetailsInfoDirector } from 'src/app/shared/models/details-info-director.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  @Input() detailsInfoDirector: DetailsInfoDirector;
  private map: mapboxgl.Map;
  private style = 'mapbox://styles/mapbox/streets-v11';
  private lat: number;
  private lng: number;

  constructor( ) { }

  ngOnInit() {

  }

  ngOnChanges(): void {
    console.log(this.detailsInfoDirector);
    this.lat = Number(this.detailsInfoDirector.dates.birth.place.lat);
    this.lng = Number(this.detailsInfoDirector.dates.birth.place.lng);

    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
