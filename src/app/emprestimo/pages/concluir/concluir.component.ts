import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmprestimoResponse } from 'src/app/core/models/IEmprestimoResponse';

@Component({
  selector: 'app-concluir',
  templateUrl: './concluir.component.html',
  styleUrls: ['./concluir.component.scss']
})
export class ConcluirComponent {

  public emprestimoResponse: IEmprestimoResponse | undefined = undefined

  constructor(private router: Router) {
    this.emprestimoResponse = this.router.getCurrentNavigation()?.extras.state?.simulation as IEmprestimoResponse
    if(!this.emprestimoResponse) this.router.navigate(['/simular'])
  }

  onChangeRoute(){
    this.router.navigate(['/simular'])
  }

}
