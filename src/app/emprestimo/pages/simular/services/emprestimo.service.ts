import { Injectable } from '@angular/core';
import { IEmprestimoRequest } from 'src/app/core/models/IEmprestimoRequest';
import { IEmprestimoResponse } from 'src/app/core/models/IEmprestimoResponse';
import { BaseService } from 'src/app/core/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService extends BaseService {

  constructor() {
    super()
  }

  postForm(body: IEmprestimoRequest){
    return this.postData<IEmprestimoResponse>(body)
  }
}
