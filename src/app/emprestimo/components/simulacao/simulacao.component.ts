import { Component, Input, OnInit } from '@angular/core';
import { IEmprestimoResponse } from 'src/app/core/models/IEmprestimoResponse';

@Component({
  selector: 'app-simulacao',
  templateUrl: './simulacao.component.html',
  styleUrls: ['./simulacao.component.scss']
})
export class SimulacaoComponent implements OnInit {

  @Input() emprestimoResponse: IEmprestimoResponse

  constructor() { }

  ngOnInit(): void {
  }

}
