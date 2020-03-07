import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isVisible: boolean = false;
  constructor() {}

  public visible(): void {
    this.isVisible = !this.isVisible;
  }

  public ngOnInit(): void {}
}
