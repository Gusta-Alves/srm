import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IEmprestimoResponse } from 'src/app/core/models/IEmprestimoResponse';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEmprestimoResponse) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
