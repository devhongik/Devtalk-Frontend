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
import { EmailSection } from './EmailSection';
import { useApplyDraft } from '../../stores/useApplyDraft';
import { DEPARTMENTS, GRADES, HOWTOKNOW, PARTICIPATE } from '../../constants/seminarApplyInfo';

const ApplyForm = () => {
  const navigate = useNavigate();
  const { rootRef, canNext } = useApplyFormValidation();
  const draft = useApplyDraft();

  return (
    <div ref={rootRef} className="flex flex-col gap-80">
      <div className="flex flex-col gap-13">
        <div className="flex flex-col gap-11">
          <NameSection value={draft.name} onChange={(v) => draft.setField('name', v)} />
          <PhoneSection value={draft.phone} onChange={(v) => draft.setField('phone', v)} />
          <EmailSection value={draft.email} onChange={(v) => draft.setField('email', v)} />
          <StudentIdSection
            value={draft.studentNum}
            onChange={(v) => draft.setField('studentNum', v)}
          />
        </div>

        <div className="flex flex-col gap-64">
          <DepartmentSection
            options={DEPARTMENTS}
            selected={draft.departments}
            etcValue={draft.departmentEtc} // string | null
            onToggle={(dept) => {
              const next = draft.departments.includes(dept)
                ? draft.departments.filter((d) => d !== dept)
                : [...draft.departments, dept];
              draft.setField('departments', next);
            }}
            onToggleEtc={(checked) => {
              draft.setField('departmentEtc', checked ? '' : null);
            }}
            onChangeEtc={(v) => {
              draft.setField('departmentEtc', v);
            }}
          />

          <div className="flex flex-col gap-80">
            <GradeSection
              options={GRADES}
              selected={
                draft.gradeEtc !== null ? '기타' : draft.grade ? `${draft.grade}학년` : null
              }
              etcValue={draft.gradeEtc}
              onSelect={(g) => {
                draft.setField('grade', parseInt(g[0])); // "1학년" → 1
                draft.setField('gradeEtc', null);
              }}
              onSelectEtc={(checked) => {
                draft.setField('grade', 0);
                draft.setField('gradeEtc', checked ? '' : null);
              }}
              onChangeEtc={(v) => draft.setField('gradeEtc', v)}
            />

            <HowToKnowSection
              options={HOWTOKNOW}
              selected={draft.inflowPathEtc !== null ? '기타' : draft.inflowPath || null}
              etcValue={draft.inflowPathEtc}
              onSelect={(opt) => {
                draft.setField('inflowPath', opt);
                draft.setField('inflowPathEtc', null);
              }}
              onSelectEtc={(checked) => {
                draft.setField('inflowPath', '');
                draft.setField('inflowPathEtc', checked ? '' : null);
              }}
              onChangeEtc={(v) => draft.setField('inflowPathEtc', v)}
            />
            <ParticipateSection
              options={PARTICIPATE}
              selected={draft.participationType || null} // '오프라인' | '온라인 Live (Q&A, 이벤트 참여 불가)'
              onSelect={(label) => draft.setField('participationType', label)}
            />
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
