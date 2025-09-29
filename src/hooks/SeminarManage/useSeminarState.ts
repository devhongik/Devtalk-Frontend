import { useState, useEffect } from 'react';
import type {
  SeminarDetails,
  SeminarState,
  FormErrors,
  Speaker,
} from '../../types/SeminarManage/seminar';

// mock data
const initialSpeakerState: Speaker = {
  profileUrl: null,
  name: '김데브',
  organization: '前 Kakao · Toss Data Scientist',
  history:
    '前 Toss Securities Data Scientist (2021)\n前 Kakao Corp Data Scientist (2020)\n성균관대학교 통계학 학사 졸업\nF사 프로젝트 멘토 / 강사 (2020~2023)\nN사 부스트 캠프 멘토/강사 (2022~2023)\nS사 부트캠프 데이터 분석 멘토/강사 (2023~2024)',
  title: 'Data Scientist가 바라보는 AI의 지난 10년과 현재',
  description:
    'ChatGPT 3년차, LLM은 더욱 어려운 문제를 해결하고 실제 작업을 수행하는 수준으로 발전했습니다.\n코딩을 비롯한 다양한 분야에서 인간의 능력을 넘어서고, 연구 보고서도 쓰고, 혼자 티켓 예약도 할 수 있다는데요.\nLLM은 어쩌다 이렇게 똑똑해졌을까요?\nLLM의 놀라운 능력의 비밀, 추론(Reasoning)과 에이전트(Agent)라는 핵심 키워드를 쉽고 명확하게 알아봅시다!',
};

// mock data
const initialData: SeminarDetails = {
  mainImageUrl: null,
  title: '제 10회 Devtalk Seminar',
  date: '2025.10.4.18:30',
  location: '홍익대학교 L0201',
  topic: 'LLM을 파헤치다',
  presentationFiles: [],
  speakers: [initialSpeakerState, initialSpeakerState],
  liveLink: 'https://www.youtube.com',
  reviews: [
    {
      reviewId: 1,
      score: 5,
      department: '컴퓨터공학과',
      grade: 3,
      content:
        '부전공생이라서 정규수업 외에는 실무적인 정보들을 얻기가 어려웠는데 이렇게 좋은 자리 마련해주셔서 정말 재미있고 유익했습니다.\n부전공생이라서 정규수업 외에는 실무적인 정보들을 얻기가 어려웠는데 이렇게 좋은 자리 마련해주셔서 정말 재미있고 유익했습니다.',
      nextTopic: '윤리적 AI를 위한 법안',
      isPublic: true,
      isFeatured: true,
      createdAt: '2025. 10. 4.(토) 오후 7:00',
    },
    {
      reviewId: 2,
      score: 4,
      department: '컴퓨터공학과',
      grade: 2,
      content: '요즘 핫한 주제로 강연을 들어서 너무 좋았습니다 !',
      nextTopic: 'AI 모델 최적화 기법',
      isPublic: false,
      createdAt: '2025. 10. 4.(토) 오후 7:00',
    },
    {
      reviewId: 3,
      score: 4,
      department: '소프트웨어학과',
      grade: 4,
      content: '궁금했던 부분들을 잘 설명해주셔서 좋았습니다. 질문 또한 잘 받아주셔서 감사했습니다',
      nextTopic: '대규모 언어 모델(LLM) 활용',
      isPublic: true,
      isFeatured: false,
      createdAt: '2025. 10. 4.(토) 오후 7:00',
    },
  ],
  seminarDate: new Date(),
  applicationDate: new Date(),
};

export const useSeminarState = (id: string | undefined) => {
  const [state, setState] = useState<SeminarState>({
    initialState: null,
    currentState: null,
    isLoading: true,
    error: null,
    isDirty: false,
    validationErrors: {},
    activationError: '',
  });

  // 데이터 로딩
  useEffect(() => {
    if (!id) return;

    const fetchSeminarData = async () => {
      try {
        setState((prev) => ({ ...prev, isLoading: true }));

        // API 호출 시뮬레이션
        const response = await new Promise<SeminarDetails>((resolve) =>
          setTimeout(() => resolve(initialData), 1000)
        );

        setState((prev) => ({
          ...prev,
          initialState: response,
          currentState: response,
          error: null,
          isLoading: false,
        }));
      } catch (err) {
        setState((prev) => ({
          ...prev,
          error: '세미나 정보를 불러오는 데 실패했습니다.',
          isLoading: false,
        }));
        console.error(err);
      }
    };

    fetchSeminarData();
  }, [id]);

  // isDirty 상태 감지
  useEffect(() => {
    if (state.initialState && state.currentState) {
      const hasChanged = JSON.stringify(state.initialState) !== JSON.stringify(state.currentState);
      setState((prev) => ({ ...prev, isDirty: hasChanged }));
    }
  }, [state.currentState, state.initialState]);

  // 활성화 날짜 검증
  useEffect(() => {
    if (state.currentState && state.currentState.seminarDate < state.currentState.applicationDate) {
      setState((prev) => ({
        ...prev,
        activationError: '※ 신청 활성화 시간은 세미나 활성화 시간보다 나중으로 설정할 수 없습니다.',
      }));
    } else {
      setState((prev) => ({ ...prev, activationError: '' }));
    }
  }, [state.currentState]);

  // 폼 데이터 업데이트
  const updateSeminarData = (updatedData: Partial<SeminarDetails>) => {
    setState((prev) => ({
      ...prev,
      currentState: prev.currentState ? { ...prev.currentState, ...updatedData } : null,
    }));
  };

  // 유효성 검사
  const validateForm = (): FormErrors => {
    if (!state.currentState) return {};

    const newErrors: FormErrors = {};
    const dateRegex = /^\d{4}\.\d{1,2}\.\d{1,2}\.\d{1,2}:\d{2}$/;

    if (state.currentState.date && !dateRegex.test(state.currentState.date)) {
      newErrors.date = '올바른 형식(YYYY.MM.DD.HH:mm)으로 입력해주세요';
    }
    return newErrors;
  };

  // Blur 이벤트 핸들러
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const validationErrors = validateForm();
    if (e.target.name === 'date') {
      setState((prev) => ({
        ...prev,
        validationErrors: { ...prev.validationErrors, date: validationErrors.date },
      }));
    }
  };

  // 필수 필드 검증
  const validateRequiredFields = (): boolean => {
    if (!state.currentState) return false;

    const { mainImageUrl, title, date, location, topic, speakers, seminarDate, applicationDate } =
      state.currentState;

    // 기본 필드 검증
    if (!title.trim() || !date.trim() || !location.trim() || !topic.trim()) {
      return false;
    }

    // 썸네일 이미지 검증
    if (!mainImageUrl) {
      return false;
    }

    // 연사진 정보 검증 (최소 1명 이상, 모두 필수 필드 입력)
    if (speakers.length === 0) {
      return false;
    }

    for (const speaker of speakers) {
      if (
        !speaker.name.trim() ||
        !speaker.organization.trim() ||
        !speaker.history.trim() ||
        !speaker.title.trim() ||
        !speaker.description.trim() ||
        !speaker.profileUrl
      ) {
        return false;
      }
    }

    if (!seminarDate || !applicationDate) {
      return false;
    }

    return true;
  };

  // 필수 정보 기입 여부
  const isRequiredFieldsFilled = validateRequiredFields();

  // 에러 상태 확인
  const hasErrors =
    Object.values(state.validationErrors).some((error) => !!error) ||
    !!state.activationError ||
    !isRequiredFieldsFilled;

  // initialState 업데이트
  const setInitialState = (newState: SeminarDetails) => {
    setState((prev) => ({ ...prev, initialState: newState }));
  };

  return {
    ...state,
    updateSeminarData,
    handleBlur,
    hasErrors,
    isRequiredFieldsFilled,
    setInitialState,
  };
};
