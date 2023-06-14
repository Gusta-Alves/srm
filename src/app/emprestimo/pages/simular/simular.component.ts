import { Component, OnInit } from '@angular/core';
import { IEmprestimoResponse } from 'src/app/core/models/IEmprestimoResponse';

@Component({
  selector: 'app-simular',
  templateUrl: './simular.component.html',
  styleUrls: ['./simular.component.scss']
})
export class SimularComponent {

  emprestimoResponse: IEmprestimoResponse | null = null

  onSubmit(data: IEmprestimoResponse){
    this.emprestimoResponse = data
  }

}
