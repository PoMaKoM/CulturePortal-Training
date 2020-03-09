import { DetailsService } from './../../services/details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private detailsService: DetailsService) { }

  public ngOnInit(): void { }

}
