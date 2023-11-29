import axios from 'axios';
import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class HttpRequestService {
  private router = inject(Router);

  private axiosInstance = axios.create();

  constructor() {
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        console.log('token interceptor: ' + token);
        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  public get(url: string) {
    return this.axiosInstance.get(url);
  }

  public post(url: string, data: any) {
    return this.axiosInstance.post(url, data);
  }
}
