import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmprestimoRequest } from '../models/IEmprestimoRequest';
import { IEmprestimoResponse } from '../models/IEmprestimoResponse';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected postData<T>(body: any, headers?: { headers: HttpHeaders }): Observable<T> {
    const response: T = this.backendFunctions(body)

    return of(response)
  }

  private backendFunctions(body: IEmprestimoRequest): any {
    const juros: string = (body.valor * 1.05).toFixed(2)
    const mockResponse: IEmprestimoResponse = {
      valor: Number(juros) / body.parcelas,
      parcelas: body.parcelas,
      total: (body.valor * 1.05).toFixed(2)
    }

    return mockResponse
  }
}
