import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Endereco } from '../models/endereco';
import { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  private apiPath = '/endereco/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Endereco[]>> {
    return this.axios.axiosInstance.get<Endereco[]>(this.apiPath + 'list');
  }

  getEnderecoByClienteNome(nome: string): Promise<AxiosResponse<Endereco[]>> {
    return this.axios.axiosInstance.get<Endereco[]>(
      `${this.apiPath}cliente/${nome}`
    );
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Endereco>> {
    return this.axios.axiosInstance.get<Endereco>(`${this.apiPath}?id=${id}`);
  }

  create(dto: Endereco): Promise<AxiosResponse<Endereco>> {
    return this.axios.axiosInstance.post<Endereco>(this.apiPath, dto);
  }

  update(id: number, dto: Endereco): Promise<AxiosResponse<Endereco>> {
    return this.axios.axiosInstance.put<Endereco>(`${this.apiPath}${id}`, dto);
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
