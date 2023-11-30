import { Injectable } from '@angular/core';
import { AxiosInstance } from '../axiosConfig/axios-instance.service';
import { AxiosHeaders, AxiosResponse } from 'axios';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiPath = '/user/';

  constructor(private axios: AxiosInstance) {}

  getById(id: number): Promise<AxiosResponse<User>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.get<User>(`${this.apiPath}/${id}`, {
      headers: header,
    });
  }

  create(dto: User): Promise<AxiosResponse<User>> {
    let header = new AxiosHeaders();
    header.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.axios.axiosInstance.post<User>(this.apiPath, dto, {
      headers: header,
    });
  }
}
