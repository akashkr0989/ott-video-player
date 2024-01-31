"use client"
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';

type InternalAxiosRequestConfig<T = any> = AxiosRequestConfig<T> & {
  headers?: AxiosRequestHeaders;
};

const applyInterceptor = (axiosInstance: AxiosInstance) => {
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config: any) => {
      // Add headers, authentication, or any common configurations here
      // Example: config.headers.Authorization = `Bearer ${YOUR_TOKEN}`;
      return config;
    },
    (error: AxiosError) => {
      // Handle request error
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      // Modify response data if needed
      return response;
    },
    (error: AxiosError) => {
      // Handle response error
      return Promise.reject(error);
    }
  );
};

export default applyInterceptor;
