import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmprestimoRoutingModule } from './emprestimo-routing.module';
import { EmprestimoComponent } from './emprestimo.component';
import { SimulacaoComponent } from './pages/simular/components/simulacao/simulacao.component'; 

import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmarComponent } from './pages/simular/dialogs/confirmar/confirmar.component';
import { FormComponent } from './pages/simular/components/form/form.component';
import { SimularComponent } from './pages/simular/simular.component';

@NgModule({
  declarations: [EmprestimoComponent, SimulacaoComponent, ConfirmarComponent, FormComponent, SimularComponent],
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
