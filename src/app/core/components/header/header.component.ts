import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle: EventEmitter<unknown> = new EventEmitter();

  constructor() {}

  public ngOnInit(): void {}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
