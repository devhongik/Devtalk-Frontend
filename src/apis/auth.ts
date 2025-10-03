import { adminInstance } from './adminInstance';

interface LoginRequest {
  loginId: string;
  password: string;
}

interface LoginResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    adminId: number;
    accessToken: string;
    refreshToken: string;
  };
  error: Record<string, any>;
}

export const postAdminLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await adminInstance.post<LoginResponse>('/admin/login', data);
  return res.data;
};
