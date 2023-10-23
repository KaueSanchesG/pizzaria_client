import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Pizza } from '../models/pizza';
import { AxiosResponse } from 'axios';
import { Tamanho } from '../models/enums/tamanho';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiPath = '/pizza/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Pizza[]>> {
    return this.axios.axiosInstance.get<Pizza[]>(this.apiPath + 'list');
  }

  getPizzaByNome(nome: string): Promise<AxiosResponse<Pizza[]>> {
    return this.axios.axiosInstance.get<Pizza[]>(`${this.apiPath}nome/${nome}`);
  }

  getPizzaBySabor(sabor: string): Promise<AxiosResponse<Pizza[]>> {
    return this.axios.axiosInstance.get<Pizza[]>(
      `${this.apiPath}sabor/${sabor}`
    );
  }

  getPizzaByTamanho(tamanho: Tamanho): Promise<AxiosResponse<Pizza[]>> {
    return this.axios.axiosInstance.get<Pizza[]>(
      `${this.apiPath}tamanho/${tamanho}`
    );
  }

  getById(id: number): Promise<AxiosResponse<Pizza>> {
    return this.axios.axiosInstance.get<Pizza>(`${this.apiPath}?id=${id}`);
  }

  create(dto: Pizza): Promise<AxiosResponse<Pizza>> {
    return this.axios.axiosInstance.post<Pizza>(this.apiPath, dto);
  }

  update(id: number, dto: Pizza): Promise<AxiosResponse<Pizza>> {
    return this.axios.axiosInstance.put<Pizza>(`${this.apiPath}${id}`, dto);
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
