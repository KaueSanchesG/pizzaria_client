import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Sabor } from '../models/sabor';
import { AxiosHeaders, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SaborService {
  private apiPath = '/sabor/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Sabor[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Sabor[]>(this.apiPath + 'list', {
      headers: header,
    });
  }

  getSaborByNome(nome: string): Promise<AxiosResponse<Sabor[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Sabor[]>(
      `${this.apiPath}nome/${nome}`,
      { headers: header }
    );
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Sabor>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Sabor>(`${this.apiPath}?id=${id}`, {
      headers: header,
    });
  }

  create(dto: Sabor): Promise<AxiosResponse<Sabor>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.post<Sabor>(this.apiPath, dto, {
      headers: header,
    });
  }

  update(id: number, dto: Sabor): Promise<AxiosResponse<Sabor>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.put<Sabor>(`${this.apiPath}${id}`, dto, {
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
