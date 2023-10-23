import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Produto } from '../models/produto';
import { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private apiPath = '/produto/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Produto[]>> {
    return this.axios.axiosInstance.get<Produto[]>(this.apiPath + 'list');
  }

  getProdutoByNome(nome: string): Promise<AxiosResponse<Produto[]>> {
    return this.axios.axiosInstance.get<Produto[]>(
      `${this.apiPath}nome/${nome}`
    );
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Produto>> {
    return this.axios.axiosInstance.get<Produto>(`${this.apiPath}?id=${id}`);
  }

  create(dto: Produto): Promise<AxiosResponse<Produto>> {
    return this.axios.axiosInstance.post<Produto>(this.apiPath, dto);
  }

  update(id: number, dto: Produto): Promise<AxiosResponse<Produto>> {
    return this.axios.axiosInstance.put<Produto>(`${this.apiPath}${id}`, dto);
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
