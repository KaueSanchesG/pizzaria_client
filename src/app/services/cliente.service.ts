import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { AxiosResponse } from 'axios';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiPath = '/cliente/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Cliente[]>> {
    return this.axios.axiosInstance.get<Cliente[]>(this.apiPath + 'list');
  }

  getClienteByNome(nome: string): Promise<AxiosResponse<Cliente>> {
    return this.axios.axiosInstance.get<Cliente>(`${this.apiPath}nome/${nome}`);
  }

  getClienteByCpf(cpf: string): Promise<AxiosResponse<Cliente>> {
    return this.axios.axiosInstance.get<Cliente>(`${this.apiPath}cpf/${cpf}`);
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Cliente>> {
    return this.axios.axiosInstance.get<Cliente>(`${this.apiPath}?id=${id}`);
  }

  create(model: Cliente): Promise<AxiosResponse<Cliente>> {
    return this.axios.axiosInstance.post<Cliente>(this.apiPath, model);
  }

  update(id: number, model: Cliente): Promise<AxiosResponse<Cliente>> {
    return this.axios.axiosInstance.put<Cliente>(`${this.apiPath}${id}`, model);
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
