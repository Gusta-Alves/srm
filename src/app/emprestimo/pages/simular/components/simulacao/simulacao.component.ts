import { Component, Input, OnInit } from '@angular/core';
import { IEmprestimoResponse } from 'src/app/core/models/IEmprestimoResponse';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../dialogs/confirmar/confirmar.component';
@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit {

  @Input() emprestimoResponse: IEmprestimoResponse

  constructor(public dialog: MatDialog) { }
  

  ngOnInit(): void {
  }


  openDialog() {
    const dialogRef = this.dialog.open(ConfirmarComponent, 
      {
        data: this.emprestimoResponse
      });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
