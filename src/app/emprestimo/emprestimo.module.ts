import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);
import { NgxMaskModule } from 'ngx-mask'

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
import { ConcluirComponent } from './pages/concluir/concluir.component';
import { MatDividerModule } from '@angular/material/divider';
import { ValorComponent } from './components/valor/valor.component'; 

@NgModule({
  declarations: [
    EmprestimoComponent, 
    SimulacaoComponent, 
    ConfirmarComponent, 
    FormComponent, 
    SimularComponent, 
    ConcluirComponent, ValorComponent
  ],
  imports: [
    CommonModule,
    EmprestimoRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule,
    RouterModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class EmprestimoModule { }
