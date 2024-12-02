import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(private httpClient: HttpClient) { }

  consultar(): Promise<any> {
    return this.httpClient.get('http://localhost:3000/cidades')
    .toPromise();
  }

  adicionar(cidade: any): Promise<any> {
    return this.httpClient.post('http://localhost:3000/cidades', cidade)
    .toPromise();
  }

  deletar(id: any): Promise<void> {
    return this.httpClient.delete(`http://localhost:3000/cidades/${id}`)
    .toPromise().then(null);
  }

  atualizar(cidade: any): Promise<any> {
    return this.httpClient.put(`http://localhost:3000/cidades/${cidade.id}`, cidade)
    .toPromise()
    .catch(erro => {
      return Promise.reject(`Erro ao alterar cidade ${cidade.id}.`);
    });
  }
}
