import axios, { type AxiosInstance } from 'axios';
import { STORAGE_KEY } from '../constants/key';

export const publicInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

export const userInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

export const userRefreshInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

userInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(STORAGE_KEY.USER_ACCESS_TOKEN);
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

    //토큰 만료 오류
    if (status === 419 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem(STORAGE_KEY.USER_REFRESH_TOKEN);

      //refreshToken이 없는 경우 세미나 인증 페이지로 이동
      if (!refreshToken) {
        localStorage.removeItem(STORAGE_KEY.USER_ACCESS_TOKEN);
        window.location.href = 'seminar/live/verification';
        return Promise.reject(error);
      }

      //refreshToken으로 새 accessToken 발급
      try {
        const oldToken = localStorage.getItem(STORAGE_KEY.USER_ACCESS_TOKEN);
        const { data } = await userRefreshInstance.post('/user/live/reissue', {
          accessToken: oldToken,
          refreshToken: refreshToken,
        });

        const newAccessToken = data?.accessToken;
        const newRefreshToken = data?.refreshToken;

        localStorage.setItem(STORAGE_KEY.ADMIN_ACCESS_TOKEN, newAccessToken);
        localStorage.setItem(STORAGE_KEY.ADMIN_REFRESH_TOKEN, newRefreshToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return userInstance(originalRequest);
      } catch (error) {
        //에러 발생시 세미나 인증 페이지으로 이동
        localStorage.removeItem(STORAGE_KEY.ADMIN_ACCESS_TOKEN);
        localStorage.removeItem(STORAGE_KEY.ADMIN_REFRESH_TOKEN);
        window.location.replace('/seminar/live/verification');
      }
    }

    //토큰 오류
    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      //세미나 인증 페이지로 이동
      localStorage.removeItem(STORAGE_KEY.USER_ACCESS_TOKEN);
      window.location.href = '/seminar/live/verification';
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
