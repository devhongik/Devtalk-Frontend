import type { CommonResponse } from './common';

export interface LoginRequest {
  loginId: string;
  password: string;
}

export interface LoginResult {
  adminId: number;
  accessToken: string;
  refreshToken: string;
}

export type LoginResponse = CommonResponse<LoginResult>;
