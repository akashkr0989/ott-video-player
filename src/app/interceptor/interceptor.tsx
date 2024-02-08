"use client"
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';
import { useContext } from 'react';
import { SnackbarContext } from '../shared/components/snackbar/page';

type InternalAxiosRequestConfig<T = any> = AxiosRequestConfig<T> & {
  headers?: AxiosRequestHeaders;
};

const applyInterceptor = (axiosInstance: AxiosInstance) => {
  

  // const { showSnackbar } = useContext(SnackbarContext);

  let access_token: string | null;
  if (localStorage.getItem('access_token')) {
    access_token = localStorage.getItem('access_token');
  }
  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config: any) => {
      // Add headers, authentication, or any common configurations here
      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    },
    (error: AxiosError) => {
      // showSnackbar('jhweg fieuw fhiowefj owehj fkwh')
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
