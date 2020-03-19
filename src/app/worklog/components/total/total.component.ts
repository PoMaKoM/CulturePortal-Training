import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  @Input() public tot: string;
  public total: number = 0;
  constructor() { }

  public ngOnInit(): void {
  }

  public ngAfterViewChecked(): void {
    const checkboxes: NodeListOf<HTMLElement> = document.querySelectorAll('.ch-flag');
    this.total = [].slice.call(checkboxes).reduce((acc, curr) => {
      const ch: HTMLElement = curr.querySelectorAll('.mat-checkbox-input')[0];
      if (ch.getAttribute('aria-checked') === 'true') { return acc + Number(curr.dataset.cost); }
      return acc;
     },                                           0);
  }

}
