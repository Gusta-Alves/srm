import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimoRoutingModule } from './emprestimo-routing.module';
import { EmprestimoComponent } from './emprestimo.component';

import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [EmprestimoComponent],
  imports: [
    CommonModule,
    EmprestimoRoutingModule,
    MatCardModule
  ]
})
export class EmprestimoModule { }
