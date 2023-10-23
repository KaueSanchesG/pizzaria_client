import { Injectable } from '@angular/core';
import { AxiosInstance } from '../axiosConfig/axios-instance.service';
import { AxiosResponse } from 'axios';
import { Login } from 'src/app/models/auth/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiPath = '/login/auth';

  constructor(private axios: AxiosInstance) {}

  verify(model: Login): Promise<AxiosResponse<Login>> {
    return this.axios.axiosInstance.post(this.apiPath, model);
  }
}
