import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmprestimoRoutingModule } from './emprestimo-routing.module';
import { EmprestimoComponent } from './emprestimo.component';
import { SimulacaoComponent } from './components/simulacao/simulacao.component'; 

import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmarComponent } from './dialogs/confirmar/confirmar.component';

@NgModule({
  declarations: [EmprestimoComponent, SimulacaoComponent, ConfirmarComponent],
  imports: [
    CommonModule,
    EmprestimoRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class EmprestimoModule { }
