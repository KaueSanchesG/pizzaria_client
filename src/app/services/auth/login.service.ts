import { Injectable } from '@angular/core';
import { AxiosInstance } from '../axiosConfig/axios-instance.service';
import { AxiosResponse } from 'axios';
import { Login } from './../../models/login';
import { jwtDecode } from 'jwt-decode';
import { Usuario } from 'src/app/models/auth/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiPath = '/login/';

  constructor(private axios: AxiosInstance) {}

  login(login: Login): Promise<AxiosResponse<Usuario>> {
    return this.axios.axiosInstance.post<Usuario>(this.apiPath + `auth`, login);
  }

  deslogar(): Promise<any> {
    return this.axios.axiosInstance.get<any>(this.apiPath + `deslogar`);
  }
  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  hasPermission(role: string): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);

      if (!decodedToken) {
        console.error('Erro ao decodificar o token.');
        return false;
      }
      const userRoles = decodedToken.role;
      if (userRoles == role) {
        return true;
      } else {
        console.log(`Sem permissão para a role: ${role}`);
      }
    }
    return false;
  }
}
