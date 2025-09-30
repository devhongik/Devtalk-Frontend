import { useEffect, useRef, useState } from 'react';
import { NameSection } from './NameSection';
import { PhoneSection } from './PhoneSection';
import { StudentIdSection } from './StudentIdSection';
import { DepartmentSection } from './DepartmentSection';
import { GradeSection } from './GradeSection';
import { HowToKnowSection } from './HowtoKnowSection';
import { ParticipateSection } from './ParticipateSection';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const DEPARTMENTS = [
  '컴퓨터공학과',
  '산업데이터공학과',
  '전자전기공학과',
  '경영학과',
  '산업디자인과',
  '자율전공',
];
const GRADES = ['1학년', '2학년', '3학년', '4학년'];
const HOWTOKNOW = [
  '지인',
  '교수님',
  '에브리타임',
  '학과 공지방',
  '학회/동아리 공지방',
  '교내 포스터 / X배너',
  '인스타그램',
];
const PARTICIPATE = ['오프라인', '온라인 Live (Q&A, 이벤트 참여 불가)'];

const ApplyForm = () => {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement>(null);
  const [canNext, setCanNext] = useState(false);

  const validate = () => {
    const root = rootRef.current;
    if (!root) return;

    // 1) 기본 텍스트 3개 (placeholder로 찾음: 섹션에서 동일 placeholder 유지)
    const name = (
      root.querySelector('input[placeholder="ex. 김홍익"]') as HTMLInputElement
    )?.value?.trim();
    const phone = (
      root.querySelector('input[placeholder="ex. 010-0000-0000"]') as HTMLInputElement
    )?.value?.trim();
    const studentId = (
      root.querySelector('input[placeholder="ex. C012345"]') as HTMLInputElement
    )?.value?.trim();
    const basicOk = !!name && !!phone && !!studentId;

    // 2) 학과: 체크박스 최소 1개 or (기타 체크 + 텍스트)
    const deptChecked = root.querySelectorAll('input[name="department"]:checked').length > 0;
    const deptOtherChecked = (root.querySelector('#dept-other') as HTMLInputElement)?.checked;
    const deptOtherValue = (
      root.querySelector('input[data-other-for="department"]') as HTMLInputElement
    )?.value?.trim();
    const deptOk = deptChecked || (deptOtherChecked && !!deptOtherValue);

    // 3) 학년: 라디오 1개 + (기타면 텍스트)
    const gradeChecked = root.querySelector(
      'input[name="grade"]:checked'
    ) as HTMLInputElement | null;
    const gradeOk =
      !!gradeChecked &&
      (gradeChecked.value !== '기타' ||
        !!(root.querySelector('input[data-other-for="grade"]') as HTMLInputElement)?.value?.trim());

    // 4) 알게 된 경로: 라디오 1개 + (기타면 텍스트)
    const howChecked = root.querySelector(
      'input[name="howtoknow"]:checked'
    ) as HTMLInputElement | null;
    const howOk =
      !!howChecked &&
      (howChecked.value !== '기타' ||
        !!(
          root.querySelector('input[data-other-for="howtoknow"]') as HTMLInputElement
        )?.value?.trim());

    // 5) 참여 방식: 라디오 1개
    const participateOk = !!root.querySelector('input[name="participate"]:checked');

    setCanNext(basicOk && deptOk && gradeOk && howOk && participateOk);
  };

  useEffect(() => {
    validate();
  }, []);

  return (
    <div ref={rootRef} onChange={validate} className="flex flex-col gap-80">
      <div className="flex flex-col gap-13">
        <div className="flex flex-col gap-11">
          <NameSection />
          <PhoneSection />
          <StudentIdSection />
        </div>

        <div className="flex flex-col gap-64">
          <DepartmentSection options={DEPARTMENTS} />
          <div className="flex flex-col gap-80">
            <GradeSection options={GRADES} />
            <HowToKnowSection options={HOWTOKNOW} />
            <ParticipateSection options={PARTICIPATE} />
          </div>
        </div>
      </div>
      <Button
        variant={canNext ? 'default' : 'disabled'}
        text="다음"
        onClick={() => {
          navigate('/seminar/apply-question');
        }}
      />
    </div>
  );
};

export default ApplyForm;
