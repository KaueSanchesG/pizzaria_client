import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosInstance {
  axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  constructor() {}

  setBaseURL(baseURL: string) {
    this.axiosInstance.defaults.baseURL = baseURL;
  }
}
