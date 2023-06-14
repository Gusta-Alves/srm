import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmprestimoComponent } from './emprestimo.component';
import { SimularComponent } from './pages/simular/simular.component';


const routes: Routes = [
  { path: '', component: EmprestimoComponent, children: [
      { path: 'simular', component: SimularComponent },
      { path: '**', redirectTo: 'simular', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimoRoutingModule { }
