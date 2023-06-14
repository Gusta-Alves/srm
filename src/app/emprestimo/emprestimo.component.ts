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
export class EmprestimoComponent implements OnInit {

  formGroup: FormGroup = {} as FormGroup;
  emprestimoResponse: IEmprestimoResponse | null = {
    valor: 105,
    total: "1050.00",
    parcelas: 12
  }

  constructor(private formBuilder: FormBuilder,
              private emprestimoService: EmprestimoService) { }

  ngOnInit(): void {
    this.onBuildForm()
  }

  onBuildForm(){
    this.formGroup = this.formBuilder.group({
      nome: [null, Validators.required],
      valor: [null, Validators.required],
      parcelas: [null, Validators.required]
    })
  }

  onSubmit(){
    if(this.formGroup.invalid) return

    const body: IEmprestimoRequest = Object.assign({} as IEmprestimoRequest, this.formGroup.value)
    this.emprestimoService.postForm(body).subscribe(data => {
      this.emprestimoResponse = data
    })
  }

}
