import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Pedido } from '../models/pedido';
import { AxiosHeaders, AxiosResponse } from 'axios';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiPath = '/pedido/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Pedido[]>> {
    let header = new AxiosHeaders();
    header.set('authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pedido[]>(this.apiPath + 'list', {
      headers: header,
    });
  }

  listByAtivo(): Promise<AxiosResponse<Pedido[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pedido[]>(this.apiPath + 'ativo', {
      headers: header,
    });
  }

  getPedidoByNomeCliente(nome: string): Promise<AxiosResponse<Pedido[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pedido[]>(
      `${this.apiPath}cliente/${nome}`,
      { headers: header }
    );
  }

  getPedidoByNomeFuncionario(nome: string): Promise<AxiosResponse<Pedido[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pedido[]>(
      `${this.apiPath}funcionario/${nome}`,
      { headers: header }
    );
  }

  getPedidoByEntrega(): Promise<AxiosResponse<Pedido[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pedido[]>(`${this.apiPath}entrega`, {
      headers: header,
    });
  }

  getPedidoByData(data: string): Promise<AxiosResponse<Pedido[]>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pedido[]>(
      `${this.apiPath}data/${data}`,
      { headers: header }
    );
  }

  getById(id: number): Promise<AxiosResponse<Pedido>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<Pedido>(`${this.apiPath}?id=${id}`, {
      headers: header,
    });
  }

  create(dto: Pedido): Promise<AxiosResponse<Pedido>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.post<Pedido>(this.apiPath, dto, {
      headers: header,
    });
  }

  update(id: number, dto: Pedido): Promise<AxiosResponse<Pedido>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.put<Pedido>(`${this.apiPath}${id}`, dto, {
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
