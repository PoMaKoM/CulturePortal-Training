import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from './../../../core/services/get-data.service';
import { switchMap } from 'rxjs/operators';
import { InfoDirector } from 'src/app/shared/models/info-director.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public infoDirector: InfoDirector;
  constructor(private route: ActivatedRoute, private getDataService: GetDataService) { }

  public ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.getDataService.getDirectorById(params.id)))
      .subscribe((infoDirector: InfoDirector) => {
        this.infoDirector = infoDirector;
        console.log(this.infoDirector);
      });
  }
}
