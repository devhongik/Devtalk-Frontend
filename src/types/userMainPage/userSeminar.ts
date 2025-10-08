import type { CommonResponse } from '../common';

export interface UserSeminarResult {
  seminarId: number;
  seminarNum: number;
  topic: string;
  seminarDate: string;
  place: string;
  startDate: string;
  endDate: string;
}

export type UserSeminarResponse = CommonResponse<UserSeminarResult>;
