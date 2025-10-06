import type { CommonResponse } from '../common';

export interface HomeImageItem {
  imageId: string;
  url: string;
  fileName: string;
  contentType: string;
  updatedAt: string;
}

// GET: /admin/home/images 응답 구조
export interface HomeImageListResult {
  intro: HomeImageItem | null;
  previousSeminar: HomeImageItem | null;
}
export type HomeImageListResponse = CommonResponse<HomeImageListResult>;

// POST: /admin/home/images 요청
// FormData 형식
export interface PostHomeImageParams {
  type: 'INTRO' | 'PREVIOUS_SEMINAR';
  file: File;
}

export type PostHomeImageResponse = CommonResponse;

// DELETE: /admin/home/iages 요청
export interface DeleteHomeImageRequest {
  type: 'INTRO' | 'PREVIOUS_SEMINAR';
}

export type DeleteHomeImageResponse = CommonResponse;
