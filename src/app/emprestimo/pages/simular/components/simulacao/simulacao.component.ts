import { Component, Input, OnInit } from '@angular/core';
import { IEmprestimoResponse } from 'src/app/core/models/IEmprestimoResponse';

import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../dialogs/confirmar/confirmar.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent {

  @Input() emprestimoResponse: IEmprestimoResponse

  constructor(public dialog: MatDialog,
              private router: Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmarComponent, 
      {
        data: this.emprestimoResponse
      });

    dialogRef.afterClosed().subscribe(result => {
      result && this.router.navigate(['/concluir'])
    });
  }
}
