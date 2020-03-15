import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-difficulties',
  templateUrl: './difficulties.component.html',
  styleUrls: ['./difficulties.component.scss']
})
export class DifficultiesComponent implements OnInit {
  @Input() public dif: string;
  constructor() { }

  public ngOnInit(): void {
  }

}
