import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Funcionario } from '../models/funcionario';
import { AxiosHeaders, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiPath = '/funcionario/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Funcionario[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Funcionario[]>(this.apiPath + 'list', {
      headers: header,
    });
  }

  getFuncionarioByNome(nome: string): Promise<AxiosResponse<Funcionario>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Funcionario>(
      `${this.apiPath}nome/${nome}`,
      { headers: header }
    );
  }

  getIdByRequest(id: number): Promise<AxiosResponse<Funcionario>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Funcionario>(
      `${this.apiPath}?id=${id}`,
      { headers: header }
    );
  }

  create(model: Funcionario): Promise<AxiosResponse<Funcionario>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.post<Funcionario>(this.apiPath, model, {
      headers: header,
    });
  }

  update(id: number, model: Funcionario): Promise<AxiosResponse<Funcionario>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.put<Funcionario>(
      `${this.apiPath}${id}`,
      model,
      { headers: header }
    );
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`, {
      headers: header,
    });
  }
}
