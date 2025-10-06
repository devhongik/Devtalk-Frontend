// 신청폼 유효성 검사 함수

export const qs = {
  name: 'input[placeholder="ex. 김홍익"]',
  phone: 'input[placeholder="ex. 010-0000-0000"]',
  email: 'input[placeholder="ex. aaaa@g.hongik.ac.kr"]',
  studentId: 'input[placeholder="ex. C012345"]',
  departmentsChecked: 'input[name="department"]:checked',
  deptOtherCheckbox: '#dept-other',
  deptOtherText: 'input[data-other-for="department"]',
  gradeChecked: 'input[name="grade"]:checked',
  gradeOtherText: 'input[data-other-for="grade"]',
  howChecked: 'input[name="howtoknow"]:checked',
  howOtherText: 'input[data-other-for="howtoknow"]',
  participateChecked: 'input[name="participate"]:checked',
} as const;

export function getInputValue(root: HTMLElement, selector: string) {
  return (root.querySelector(selector) as HTMLInputElement | null)?.value?.trim() ?? '';
}
export function isChecked(root: HTMLElement, selector: string) {
  return (root.querySelector(selector) as HTMLInputElement | null)?.checked ?? false;
}

export function validateAll(root: HTMLElement) {
  const name = getInputValue(root, qs.name);
  const phone = getInputValue(root, qs.phone);
  const studentId = getInputValue(root, qs.studentId);
  const email = getInputValue(root, qs.email);
  const emailOk = !!email && /\S+@\S+\.\S+/.test(email);
  const basicOk = !!name && !!phone && !!studentId && emailOk;

  const deptCheckedCnt = root.querySelectorAll(qs.departmentsChecked).length;
  const deptOtherChecked = isChecked(root, qs.deptOtherCheckbox);
  const deptOtherValue = getInputValue(root, qs.deptOtherText);
  const deptOk = deptCheckedCnt > 0 || (deptOtherChecked && !!deptOtherValue);

  const gradeEl = root.querySelector(qs.gradeChecked) as HTMLInputElement | null;
  const gradeOk =
    !!gradeEl && (gradeEl.value !== '기타' || !!getInputValue(root, qs.gradeOtherText));

  const howEl = root.querySelector(qs.howChecked) as HTMLInputElement | null;
  const howOk = !!howEl && (howEl.value !== '기타' || !!getInputValue(root, qs.howOtherText));

  const participateOk = !!root.querySelector(qs.participateChecked);

  return {
    basicOk,
    deptOk,
    gradeOk,
    howOk,
    participateOk,
    emailOk,
    allOk: basicOk && deptOk && gradeOk && howOk && participateOk,
  };
}
