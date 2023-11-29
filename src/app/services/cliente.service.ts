import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { AxiosHeaders, AxiosResponse } from 'axios';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiPath = '/cliente/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Cliente[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Cliente[]>(this.apiPath + 'list', {
      headers: header,
    });
  }

  getClienteByNome(nome: string): Promise<AxiosResponse<Cliente>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Cliente>(
      `${this.apiPath}nome/${nome}`,
      { headers: header }
    );
  }

  getClienteByCpf(cpf: string): Promise<AxiosResponse<Cliente>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Cliente>(`${this.apiPath}cpf/${cpf}`, {
      headers: header,
    });
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Cliente>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Cliente>(`${this.apiPath}?id=${id}`, {
      headers: header,
    });
  }

  create(model: Cliente): Promise<AxiosResponse<Cliente>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.post<Cliente>(this.apiPath, model, {
      headers: header,
    });
  }

  update(id: number, model: Cliente): Promise<AxiosResponse<Cliente>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.put<Cliente>(
      `${this.apiPath}${id}`,
      model,
      { headers: header }
    );
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`, {
      headers: header,
    });
  }
}
