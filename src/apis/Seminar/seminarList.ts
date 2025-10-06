import type { SeminarListResponse } from '../../types/SeminarManage/seminarCard.api';
import { userInstance } from '../userInstance';

export const getSeminarList = async (): Promise<SeminarListResponse> => {
  const res = await userInstance.get<SeminarListResponse>('/user/seminarList/');
  return res.data;
};
