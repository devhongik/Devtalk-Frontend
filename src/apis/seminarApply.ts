import { userInstance } from '../apis/userInstance';
import type { SeminarApplyRequest, SeminarApplyResponse } from '../types/Applicants/seminarApply';

export const postApplySeminar = async (
  data: SeminarApplyRequest
): Promise<SeminarApplyResponse> => {
  const res = await userInstance.post<SeminarApplyResponse>('/user/seminars', data);
  return res.data;
};
