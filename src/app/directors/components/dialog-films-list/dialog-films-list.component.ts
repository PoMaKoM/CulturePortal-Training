import { FilmsDirector } from './../../../shared/models/films-director.model';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-films-list',
  templateUrl: './dialog-films-list.component.html',
  styleUrls: ['./dialog-films-list.component.scss']
})
export class DialogFilmsListComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogFilmsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilmsDirector[]
  ) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
