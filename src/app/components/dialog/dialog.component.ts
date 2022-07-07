import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  data: Boolean = true //Esta variable la controla el dialogo, si se cierra solo, devuelve un undefined

  constructor(
    public dialog: MatDialog, //Dialog de material
    public dialogRef: MatDialogRef<DialogComponent>
  ) { }

  onNoClick(): void {
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

}
