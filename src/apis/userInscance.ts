import axios, { type AxiosInstance } from 'axios';

export const userInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

userInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

userInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    const originalRequest = error.config;

    if (!status) return Promise.reject(status);

    //토큰 오류
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      //홈으로 이동
      localStorage.removeItem('accessToken');
      window.location.href = '/';
      return Promise.reject(error);
    }

    //접근 권한이 없는 경우
    if (error.response.status === 403) {
      //홈으로 이동
      window.location.replace('/');
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
