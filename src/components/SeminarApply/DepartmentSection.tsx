import { SectionHeader } from '../../components/SeminarApply/SectionHeader';
import emptybox from '../../assets/icons/components/SeminarApply/emptybox.svg';
import checkbox from '../../assets/icons/components/SeminarApply/checkbox.svg';

type DepartmentSectionProps = { options: string[] };

export const DepartmentSection = ({ options }: DepartmentSectionProps) => (
  <div className="flex flex-col gap-20">
    <SectionHeader title="학과를 선택해주세요" required helperText="복수전공의 경우 모두 선택" />
    <div className="flex flex-col gap-20">
      {options.map((dept, idx) => {
        const id = `dept-${idx}`;
        return (
          <label key={id} htmlFor={id} className="flex items-center gap-12 cursor-pointer">
            <input
              id={id}
              type="checkbox"
              name="department"
              className="sr-only peer"
              value={dept}
            />
            <img src={emptybox} alt="" className="w-6 h-6 peer-checked:hidden" />
            <img src={checkbox} alt="" className="w-6 h-6 hidden peer-checked:block" />
            <span className="body-1-medium text-white">{dept}</span>
          </label>
        );
      })}

      {/* 기타 */}
      <label htmlFor="dept-other" className="flex items-center gap-12 cursor-pointer">
        <input id="dept-other" type="checkbox" className="sr-only peer" value="기타" />
        <img src={emptybox} alt="" className="w-6 h-6 peer-checked:hidden" />
        <img src={checkbox} alt="" className="w-6 h-6 hidden peer-checked:block" />
        <span className="body-1-medium text-white shrink-0">기타:</span>
        <input
          type="text"
          className="flex-1 bg-transparent outline-none
                     body-1-medium text-white
                     border-b border-grey-900
                     opacity-0 pointer-events-none transition-opacity
                     peer-checked:opacity-100 peer-checked:pointer-events-auto
                     focus:border-grey-600"
        />
      </label>
    </div>
  </div>
);
