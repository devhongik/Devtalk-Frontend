import type { SeminarApplicantsDetailResponse } from '../../types/Applicants/seminarApplicantsDetail.api';
import { adminInstance } from '../adminInstance';

export const getSeminarApplicantsDetail = async (
  seminarId: string
): Promise<SeminarApplicantsDetailResponse> => {
  const res = await adminInstance.get<SeminarApplicantsDetailResponse>(
    `/admin/seminars/${seminarId}/applicants`
  );
  return res.data;
};
