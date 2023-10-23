import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Funcionario } from '../models/funcionario';
import { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiPath = '/funcionario/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Funcionario[]>> {
    return this.axios.axiosInstance.get<Funcionario[]>(this.apiPath + 'list');
  }

  getFuncionarioByNome(nome: string): Promise<AxiosResponse<Funcionario>> {
    return this.axios.axiosInstance.get<Funcionario>(
      `${this.apiPath}nome/${nome}`
    );
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Funcionario>> {
    return this.axios.axiosInstance.get<Funcionario>(
      `${this.apiPath}?id=${id}`
    );
  }

  create(model: Funcionario): Promise<AxiosResponse<Funcionario>> {
    return this.axios.axiosInstance.post<Funcionario>(this.apiPath, model);
  }

  update(id: number, model: Funcionario): Promise<AxiosResponse<Funcionario>> {
    return this.axios.axiosInstance.put<Funcionario>(
      `${this.apiPath}${id}`,
      model
    );
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
