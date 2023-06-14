import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmprestimoRequest } from 'src/app/core/models/IEmprestimoRequest';
import { EmprestimoService } from '../../services/emprestimo.service';
import { IEmprestimoResponse } from 'src/app/core/models/IEmprestimoResponse';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formGroup: FormGroup = {} as FormGroup;

  @Output() onSubmit$: EventEmitter<IEmprestimoResponse> = new EventEmitter<IEmprestimoResponse>()
  
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
      this.onSubmit$.emit(data)
    })
  }
}
