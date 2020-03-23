import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../../shared/models/localize.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() public menu: Menu;
  constructor() { }

  public ngOnInit(): void {
  }
}
