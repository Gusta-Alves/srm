import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmprestimoRequest } from '../core/models/IEmprestimoRequest';
import { EmprestimoService } from './services/emprestimo.service';
import { IEmprestimoResponse } from '../core/models/IEmprestimoResponse';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.scss']
})
export class EmprestimoComponent {

  emprestimoResponse: IEmprestimoResponse | null = {
    valor: 105,
    total: "1050.00",
    parcelas: 12
  }

  onSubmit(data: IEmprestimoResponse){
    this.emprestimoResponse = data
  }

}
