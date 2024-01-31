"use client"
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import applyInterceptor from '../interceptor/interceptor';
import { BASE_URL } from '../environments/environment';


class HttpService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        // Add any common headers here
      },
    });

    // Apply interceptor
    applyInterceptor(this.axiosInstance);
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.get<T>(url, config).then((response) => response.data);
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.post<T>(url, data, config).then((response) => response.data);
  }

  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.put<T>(url, data, config).then((response) => response.data);
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance.delete<T>(url, config).then((response) => response.data);
  }
}

const httpService = new HttpService();
export default httpService;
