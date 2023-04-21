import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private http: HttpClient
  ) { }

  consultaCep(cep: string): Observable<any> {
    return this.http.get(`//viacep.com.br/ws/${cep}/json`);
  }
}
