import { Component, OnInit, Input } from '@angular/core';
import { DetailsInfoDirector } from './../../../shared/models/details-info-director.model';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {

  @Input() public director: InfoDirector;
  @Input() public detailsInfo: DetailsInfoDirector;

  constructor() { }

  public ngOnInit(): void {
  }

  public openDetailsPage(): void {
  }
}
