import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Produto } from '../models/produto';
import { AxiosHeaders, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiPath = '/produto/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Produto[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Produto[]>(this.apiPath + 'list', {
      headers: header,
    });
  }

  getProdutoByNome(nome: string): Promise<AxiosResponse<Produto[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Produto[]>(
      `${this.apiPath}nome/${nome}`,
      { headers: header }
    );
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Produto>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Produto>(`${this.apiPath}?id=${id}`, {
      headers: header,
    });
  }

  create(dto: Produto): Promise<AxiosResponse<Produto>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.post<Produto>(this.apiPath, dto, {
      headers: header,
    });
  }

  update(id: number, dto: Produto): Promise<AxiosResponse<Produto>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.put<Produto>(`${this.apiPath}${id}`, dto, {
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
