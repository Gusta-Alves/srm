import { Component, Input, OnInit } from '@angular/core';
import { IEmprestimoResponse } from 'src/app/core/models/IEmprestimoResponse';

@Component({
  selector: 'app-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.scss']
})
export class ValorComponent {

  @Input() data: IEmprestimoResponse
  @Input() align: boolean = false 

}
