import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IBusiness } from './models/IBusiness';

@Injectable({
  providedIn: 'root'
})
export class PolosItauService {

  url = 'https://antlia-mockapi.azurewebsites.net/api/v1/itau_teste'


  constructor(private http: HttpClient) {
  }

  getPolos() {
    return this.http.get<IBusiness[]>(this.url)
    
  }

  getPoloDetalhe(id: number) {
    return this.http.get<IBusiness>(`${this.url}/${id}`)
  }

}
