import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Sabor } from '../models/sabor';
import { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SaborService {
  private apiPath = '/sabor/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Sabor[]>> {
    return this.axios.axiosInstance.get<Sabor[]>(this.apiPath + 'list');
  }

  getSaborByNome(nome: string): Promise<AxiosResponse<Sabor[]>> {
    return this.axios.axiosInstance.get<Sabor[]>(`${this.apiPath}nome/${nome}`);
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Sabor>> {
    return this.axios.axiosInstance.get<Sabor>(`${this.apiPath}?id=${id}`);
  }

  create(dto: Sabor): Promise<AxiosResponse<Sabor>> {
    return this.axios.axiosInstance.post<Sabor>(this.apiPath, dto);
  }

  update(id: number, dto: Sabor): Promise<AxiosResponse<Sabor>> {
    return this.axios.axiosInstance.put<Sabor>(`${this.apiPath}${id}`, dto);
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
