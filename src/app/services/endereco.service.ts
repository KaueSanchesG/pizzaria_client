import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Endereco } from '../models/endereco';
import { AxiosHeaders, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class EnderecoService {
  private apiPath = '/endereco/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Endereco[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Endereco[]>(this.apiPath + 'list', {
      headers: header,
    });
  }

  getEnderecoByClienteNome(nome: string): Promise<AxiosResponse<Endereco[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Endereco[]>(
      `${this.apiPath}cliente/${nome}`,
      { headers: header }
    );
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Endereco>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Endereco>(`${this.apiPath}?id=${id}`, {
      headers: header,
    });
  }

  create(dto: Endereco): Promise<AxiosResponse<Endereco>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.post<Endereco>(this.apiPath, dto, {
      headers: header,
    });
  }

  update(id: number, dto: Endereco): Promise<AxiosResponse<Endereco>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.put<Endereco>(`${this.apiPath}${id}`, dto, {
      headers: header,
    });
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`, {
      headers: header,
    });
  }
}
