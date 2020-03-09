import { Component, OnInit, Input } from '@angular/core';
import { DetailsService } from './../../services/details.service';
import { InfoDirector } from '../../models/directors';
import { DetailsInfoDirector } from './../../models/directors';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {

  @Input() public director: InfoDirector;
  @Input() public detailsInfo: DetailsInfoDirector;

  constructor(private detailsService: DetailsService) { }

  public ngOnInit(): void {
  }

  public openDetailsPage(): void {
    this.detailsService.director = this.director;
    this.detailsService.detailsInfo = this.detailsInfo;
  }
}
