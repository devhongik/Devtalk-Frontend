import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/Button';
import { NameSection } from './NameSection';
import { PhoneSection } from './PhoneSection';
import { StudentIdSection } from './StudentIdSection';
import { DepartmentSection } from './DepartmentSection';
import { GradeSection } from './GradeSection';
import { HowToKnowSection } from './HowToKnowSection';
import { ParticipateSection } from './ParticipateSection';
import { useApplyFormValidation } from '../../hooks/useApplyFormValidation';

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
  const { rootRef, canNext, validate } = useApplyFormValidation();

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
          if (!canNext) return;
          navigate('/seminar/apply-question');
        }}
      />
    </div>
  );
};

export default ApplyForm;
