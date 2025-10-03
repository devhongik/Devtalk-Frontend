import axios, { type AxiosInstance } from 'axios';

export const adminInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

export const refreshInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

adminInstance.interceptors.request.use(
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

adminInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response?.status;
    const originalRequest = error.config;

    if (!status) return Promise.reject(status);

    //토큰 만료 오류
    if (status === 419 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      //refreshToken이 없는 경우 어드민 로그인 페이지로 이동
      if (!refreshToken) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/admin/login';
        return Promise.reject(error);
      }

      //refreshToken으로 새 accessToken 발급
      try {
        const { data } = await refreshInstance.post('/admin/refresh', { refreshToken });
        const newAccessToken = data?.accessToken;
        localStorage.setItem('accessToken', newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return adminInstance(originalRequest);
      } catch (error) {
        //에러 발생시 로그인 페이지으로 이동
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.replace('/admin/login');
      }
    }

    //토큰 오류
    if (status === 401) {
      //기존에 남아있던 토큰 삭제 후 어드민 로그인 페이지로 이동
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      window.location.replace('/admin/login');
      return Promise.reject(error);
    }

    //접근 권한이 없는 경우
    if (status === 403) {
      //홈으로 이동
      window.location.replace('/');
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
