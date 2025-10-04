import { adminInstance } from './adminInstance';
import type { LoginRequest, LoginResponse } from '../types/auth';

export const postAdminLogin = async (data: LoginRequest): Promise<LoginResponse> => {
  const res = await adminInstance.post<LoginResponse>('/admin/login', data);
  return res.data;
};
