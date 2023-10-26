import { Injectable } from '@angular/core';
import { AxiosInstance } from './axiosConfig/axios-instance.service';
import { Pedido } from '../models/pedido';
import { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiPath = '/pedido/';

  constructor(private axios: AxiosInstance) {}

  list(): Promise<AxiosResponse<Pedido[]>> {
    return this.axios.axiosInstance.get<Pedido[]>(this.apiPath + 'list');
  }

  listByAtivo(): Promise<AxiosResponse<Pedido[]>> {
    return this.axios.axiosInstance.get<Pedido[]>(this.apiPath + 'ativo');
  }

  getPedidoByNomeCliente(nome: string): Promise<AxiosResponse<Pedido[]>> {
    return this.axios.axiosInstance.get<Pedido[]>(
      `${this.apiPath}cliente/${nome}`
    );
  }

  getPedidoByNomeFuncionario(nome: string): Promise<AxiosResponse<Pedido[]>> {
    return this.axios.axiosInstance.get<Pedido[]>(
      `${this.apiPath}funcionario/${nome}`
    );
  }

  getPedidoByEntrega(): Promise<AxiosResponse<Pedido[]>> {
    return this.axios.axiosInstance.get<Pedido[]>(`${this.apiPath}entrega/`);
  }

  getPedidoByData(data: string): Promise<AxiosResponse<Pedido[]>> {
    return this.axios.axiosInstance.get<Pedido[]>(
      `${this.apiPath}data/${data}`
    );
  }

  getById(id: number): Promise<AxiosResponse<Pedido>> {
    return this.axios.axiosInstance.get<Pedido>(`${this.apiPath}?id=${id}`);
  }

  create(dto: Pedido): Promise<AxiosResponse<Pedido>> {
    return this.axios.axiosInstance.post<Pedido>(this.apiPath, dto);
  }

  update(id: number, dto: Pedido): Promise<AxiosResponse<Pedido>> {
    return this.axios.axiosInstance.put<Pedido>(`${this.apiPath}${id}`, dto);
  }

  delete(id: number): Promise<AxiosResponse<void>> {
    return this.axios.axiosInstance.delete<void>(`${this.apiPath}${id}`);
  }
}
