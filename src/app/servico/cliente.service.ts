import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //Url da API
  private url:string = 'http://localhost:8080';

  //Construtor
  constructor(private http:HttpClient) { }

  //Método para selecionar todos os Clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url}/list`);
  }

  // Método para cadastrar clientes
  cadastrar(obj:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.url}/cadastrar`, obj);
  }

}
