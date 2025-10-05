// src/stores/useApplyDraft.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type ApplyDraftState = {
  studentNum: string;
  name: string;
  grade: number; // 사용자가 선택한 학년 (1~4)
  gradeEtc: string | null; // '기타' 입력값
  email: string;
  phone: string;
  departments: string[];
  departmentEtc: string | null;
  participationType: string; // 'ONLINE' | 'OFFLINE'
  inflowPath: string; // 'INSTAGRAM' 등
  inflowPathEtc: string | null;
  questions: Record<number, string>; // sessionId → content

  setField: <K extends keyof ApplyDraftState>(key: K, value: ApplyDraftState[K]) => void;
  setQuestion: (sessionId: number, content: string) => void;
  reset: () => void;
};

const initial: Omit<ApplyDraftState, 'setField' | 'setQuestion' | 'reset'> = {
  studentNum: '',
  name: '',
  grade: 0,
  gradeEtc: null,
  email: '',
  phone: '',
  departments: [],
  departmentEtc: null,
  participationType: '',
  inflowPath: '',
  inflowPathEtc: null,
  questions: {},
};

export const useApplyDraft = create<ApplyDraftState>()(
  persist(
    (set) => ({
      ...initial,
      setField: (key, value) => set({ [key]: value } as any),
      setQuestion: (sessionId, content) =>
        set((state) => ({
          questions: { ...state.questions, [sessionId]: content },
        })),
      reset: () => set(initial),
    }),
    {
      name: 'apply-draft',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
