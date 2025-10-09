import { useMemo } from 'react';
import type { SeminarDetailState, FormErrors } from '../../../types/SeminarManage/seminar.state';
import type { PendingFiles } from '../../../types/SeminarManage/seminarFile.api';

interface ValidationResult {
  validationErrors: FormErrors;
  activationError: { seminar: string; application: string };
  fileErrors: {
    thumbnail: string;
    speakers: Map<number, string>;
  };
  isRequiredFieldsFilled: boolean;
  hasErrors: boolean;
  getError: () => string | null;
}

export const useSeminarValidation = (
  currentState: SeminarDetailState | null,
  pendingFiles: PendingFiles,
  mode: 'add' | 'edit'
): ValidationResult => {
  // ==================== 날짜 형식 검증 ====================
  const validateDateFormat = (date: string): string | undefined => {
    const dateRegex = /^\d{4}\.\d{1,2}\.\d{1,2}\.\d{1,2}:\d{2}$/;
    if (date && !dateRegex.test(date)) {
      return '올바른 형식(YYYY.MM.DD.HH:mm)으로 입력해주세요';
    }
    return undefined;
  };

  // ==================== 활성화 날짜 검증 ====================
  const validateActivationDates = useMemo(() => {
    if (!currentState) {
      return { seminar: '', application: '' };
    }

    const { seminarStartDate, seminarEndDate, applicationStartDate, applicationEndDate } =
      currentState;
    const newErrors = { seminar: '', application: '' };
    const now = new Date();

    // 세미나 활성화 기간 검증
    if (seminarStartDate < now) {
      newErrors.seminar = '※ 과거의 날짜는 선택할 수 없습니다.';
    } else if (seminarStartDate > seminarEndDate) {
      newErrors.seminar = '※ 시작일은 종료일보다 늦을 수 없습니다.';
    } else if (seminarStartDate.getTime() === seminarEndDate.getTime()) {
      newErrors.seminar = '※ 시작일과 종료일은 같을 수 없습니다.';
    }

    // 신청 기간 검증
    if (applicationStartDate < now) {
      newErrors.application = '※ 과거의 날짜는 선택할 수 없습니다.';
    } else if (applicationStartDate > applicationEndDate) {
      newErrors.application = '※ 시작일은 종료일보다 늦을 수 없습니다.';
    } else if (applicationStartDate.getTime() === applicationEndDate.getTime()) {
      newErrors.application = '※ 시작일과 종료일은 같을 수 없습니다.';
    } else if (applicationStartDate < seminarStartDate || applicationEndDate > seminarEndDate) {
      newErrors.application = '※ 현재 세미나 활성화 기간에서 벗어난 기간입니다.';
    }

    return newErrors;
  }, [currentState]);

  // ==================== 파일 검증 ====================
  const validateFiles = useMemo(() => {
    if (!currentState) {
      return { thumbnail: '', speakers: new Map<number, string>() };
    }

    const errors = {
      thumbnail: '',
      speakers: new Map<number, string>(),
    };

    // 썸네일 검증
    if (mode === 'add' && !pendingFiles.thumbnail) {
      errors.thumbnail = '썸네일 이미지를 업로드해주세요.';
    } else if (mode === 'edit' && !currentState.thumbnailUrl && !pendingFiles.thumbnail) {
      errors.thumbnail = '썸네일 이미지를 업로드해주세요.';
    }

    // 연사 프로필 검증
    currentState.speakers.forEach((speaker, index) => {
      const key = mode === 'add' ? index : (speaker.speakerId ?? index);
      const hasExistingProfile = !!speaker.profileUrl;
      const hasPendingProfile = pendingFiles.speakerProfiles.has(key);

      // 1부 연사는 필수
      if (index === 0) {
        if (!hasExistingProfile && !hasPendingProfile) {
          errors.speakers.set(key, '1부 연사의 프로필 사진을 업로드해주세요.');
        }
      }
      // 2부 연사는 부분 입력 시 프로필 필요
      else if (index === 1) {
        const hasAnyInput =
          speaker.name.trim() ||
          speaker.organization.trim() ||
          speaker.history.trim() ||
          speaker.sessionTitle.trim() ||
          speaker.sessionContent.trim();

        if (hasAnyInput && !hasExistingProfile && !hasPendingProfile) {
          errors.speakers.set(key, '2부 연사의 프로필 사진을 업로드해주세요.');
        }
      }
    });

    return errors;
  }, [currentState, pendingFiles, mode]);

  // ==================== 필수 필드 검증 ====================
  const validateRequiredFields = useMemo(() => {
    if (!currentState) return { isValid: false, errors: [] as string[] };

    const errors: string[] = [];
    const {
      seminarNum,
      seminarDate,
      place,
      topic,
      speakers,
      seminarStartDate,
      seminarEndDate,
      applicationStartDate,
      applicationEndDate,
    } = currentState;

    // 기본 필드 검증
    if (seminarNum === null) {
      errors.push('세미나 회차를 입력해주세요.');
    }
    if (!seminarDate.trim()) {
      errors.push('세미나 날짜를 입력해주세요.');
    }
    if (!place.trim()) {
      errors.push('세미나 장소를 입력해주세요.');
    }
    if (!topic.trim()) {
      errors.push('세미나 주제를 입력해주세요.');
    }

    // 썸네일 검증
    const hasThumbnail =
      mode === 'add'
        ? !!pendingFiles.thumbnail
        : !!currentState.thumbnailUrl || !!pendingFiles.thumbnail;
    if (!hasThumbnail) {
      errors.push('썸네일 이미지를 업로드해주세요.');
    }

    // 연사 검증
    if (speakers.length === 0) {
      errors.push('최소 1명의 연사를 추가해주세요.');
    } else {
      speakers.forEach((speaker, index) => {
        const key = mode === 'add' ? index : (speaker.speakerId ?? index);
        const hasProfile = !!speaker.profileUrl || !!pendingFiles.speakerProfiles.get(key);

        // 1부 연사는 필수
        if (index === 0) {
          if (!speaker.name.trim()) {
            errors.push('1부 연사의 이름을 입력해주세요.');
          }
          if (!speaker.organization.trim()) {
            errors.push('1부 연사의 소속을 입력해주세요.');
          }
          if (!speaker.history.trim()) {
            errors.push('1부 연사의 이력을 입력해주세요.');
          }
          if (!speaker.sessionTitle.trim()) {
            errors.push('1부 연사의 세션 제목을 입력해주세요.');
          }
          if (!speaker.sessionContent.trim()) {
            errors.push('1부 연사의 세션 내용을 입력해주세요.');
          }
          if (!hasProfile) {
            errors.push('1부 연사의 프로필 사진을 업로드해주세요.');
          }
        }
        // 2부 연사는 부분 입력 시 전체 필수
        else if (index === 1) {
          const hasAnyInput =
            speaker.name.trim() ||
            speaker.organization.trim() ||
            speaker.history.trim() ||
            speaker.sessionTitle.trim() ||
            speaker.sessionContent.trim() ||
            hasProfile;

          if (hasAnyInput) {
            if (!speaker.name.trim()) {
              errors.push('2부 연사의 이름을 입력해주세요.');
            }
            if (!speaker.organization.trim()) {
              errors.push('2부 연사의 소속을 입력해주세요.');
            }
            if (!speaker.history.trim()) {
              errors.push('2부 연사의 이력을 입력해주세요.');
            }
            if (!speaker.sessionTitle.trim()) {
              errors.push('2부 연사의 세션 제목을 입력해주세요.');
            }
            if (!speaker.sessionContent.trim()) {
              errors.push('2부 연사의 세션 내용을 입력해주세요.');
            }
            if (!hasProfile) {
              errors.push('2부 연사의 프로필 사진을 업로드해주세요.');
            }
          }
        }
      });
    }

    // 날짜 검증
    if (!seminarStartDate) {
      errors.push('세미나 활성화 시작일을 선택해주세요.');
    }
    if (!seminarEndDate) {
      errors.push('세미나 활성화 종료일을 선택해주세요.');
    }
    if (!applicationStartDate) {
      errors.push('신청 기간 시작일을 선택해주세요.');
    }
    if (!applicationEndDate) {
      errors.push('신청 기간 종료일을 선택해주세요.');
    }

    return { isValid: errors.length === 0, errors };
  }, [currentState, pendingFiles, mode]);

  // ==================== 연사 프로필 파일 개수 검증 ====================
  const validateSpeakerProfileCount = useMemo(() => {
    if (!currentState || mode !== 'add') return { isValid: true, error: '' };

    // 프로필이 필요한 연사들만 카운트
    let requiredProfileCount = 0;

    currentState.speakers.forEach((speaker, index) => {
      // 1부 연사는 필수
      if (index === 0) {
        requiredProfileCount++;
      }
      // 2부 연사는 부분 입력 시 전체 필수
      else if (index === 1) {
        const hasAnyInput =
          speaker.name.trim() ||
          speaker.organization.trim() ||
          speaker.history.trim() ||
          speaker.sessionTitle.trim() ||
          speaker.sessionContent.trim();

        if (hasAnyInput) {
          requiredProfileCount++;
        }
      }
    });

    const profileCount = pendingFiles.speakerProfiles.size;

    if (requiredProfileCount !== profileCount) {
      return {
        isValid: false,
        error: `프로필이 필요한 연사 수(${requiredProfileCount}명)와 프로필 파일 수(${profileCount}개)가 일치하지 않습니다.`,
      };
    }

    // 필요한 연사들에 프로필 사진이 있는지 확인
    for (let i = 0; i < currentState.speakers.length; i++) {
      const speaker = currentState.speakers[i];

      // 1부 연사는 필수
      if (i === 0 && !pendingFiles.speakerProfiles.has(i)) {
        return {
          isValid: false,
          error: '1부 연사의 프로필 사진이 누락되었습니다.',
        };
      }
      // 2부 연사는 부분 입력 시 전체 필수
      else if (i === 1) {
        const hasAnyInput =
          speaker.name.trim() ||
          speaker.organization.trim() ||
          speaker.history.trim() ||
          speaker.sessionTitle.trim() ||
          speaker.sessionContent.trim();

        if (hasAnyInput && !pendingFiles.speakerProfiles.has(i)) {
          return {
            isValid: false,
            error: '2부 연사의 프로필 사진이 누락되었습니다.',
          };
        }
      }
    }

    return { isValid: true, error: '' };
  }, [currentState, pendingFiles, mode]);

  // ==================== 전체 검증 결과 ====================
  const validationErrors: FormErrors = {
    date: currentState?.seminarDate ? validateDateFormat(currentState.seminarDate) : undefined,
  };

  const hasErrors =
    Object.values(validationErrors).some((error) => !!error) ||
    !!validateActivationDates.seminar ||
    !!validateActivationDates.application ||
    !!validateFiles.thumbnail ||
    validateFiles.speakers.size > 0 ||
    !validateRequiredFields.isValid ||
    !validateSpeakerProfileCount.isValid;

  // ==================== 에러 메시지 반환 ====================
  const getError = (): string | null => {
    // 필수 필드 에러
    if (validateRequiredFields.errors.length > 0) {
      return validateRequiredFields.errors[0];
    }

    // 날짜 형식 에러
    if (validationErrors.date) {
      return validationErrors.date;
    }

    // 활성화 날짜 에러
    if (validateActivationDates.seminar) {
      return `세미나 활성화 기간: ${validateActivationDates.seminar}`;
    }
    if (validateActivationDates.application) {
      return `신청 기간: ${validateActivationDates.application}`;
    }

    // 파일 에러
    if (validateFiles.thumbnail) {
      return validateFiles.thumbnail;
    }
    if (validateFiles.speakers.size > 0) {
      const firstError = Array.from(validateFiles.speakers.values())[0];
      return firstError;
    }

    // 연사 프로필 개수 에러
    if (!validateSpeakerProfileCount.isValid) {
      return validateSpeakerProfileCount.error;
    }
    return null;
  };

  return {
    validationErrors,
    activationError: validateActivationDates,
    fileErrors: validateFiles,
    isRequiredFieldsFilled: validateRequiredFields.isValid,
    hasErrors,
    getError,
  };
};
