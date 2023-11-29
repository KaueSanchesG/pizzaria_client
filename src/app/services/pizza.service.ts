import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Pizza } from '../models/pizza';
import { AxiosHeaders, AxiosResponse } from 'axios';
import { Tamanho } from '../models/enums/tamanho';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiPath = '/pizza/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Pizza[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pizza[]>(this.apiPath + 'list', {
      headers: header,
    });
  }

  getPizzaByNome(nome: string): Promise<AxiosResponse<Pizza[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pizza[]>(
      `${this.apiPath}nome/${nome}`,
      { headers: header }
    );
  }

  getPizzaBySabor(sabor: string): Promise<AxiosResponse<Pizza[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pizza[]>(
      `${this.apiPath}sabor/${sabor}`,
      { headers: header }
    );
  }

  getPizzaByTamanho(tamanho: Tamanho): Promise<AxiosResponse<Pizza[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pizza[]>(
      `${this.apiPath}tamanho/${tamanho}`,
      { headers: header }
    );
  }

  getById(id: number): Promise<AxiosResponse<Pizza>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pizza>(`${this.apiPath}?id=${id}`, {
      headers: header,
    });
  }

  create(dto: Pizza): Promise<AxiosResponse<Pizza>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.post<Pizza>(this.apiPath, dto, {
      headers: header,
    });
  }

  update(id: number, dto: Pizza): Promise<AxiosResponse<Pizza>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.put<Pizza>(`${this.apiPath}${id}`, dto, {
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
