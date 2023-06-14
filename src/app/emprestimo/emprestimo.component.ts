import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.scss']
})
export class EmprestimoComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

}
