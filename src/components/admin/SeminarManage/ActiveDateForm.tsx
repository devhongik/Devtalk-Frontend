import { useState, useEffect } from 'react';
import DateTimeSelector from './DateTimeSelector';

interface ActiveDateProps {
  initialSeminarDate?: Date;
  initialApplicationDate?: Date;
}

const ActiveDateForm: React.FC<ActiveDateProps> = ({ initialSeminarDate, initialApplicationDate }) => {
  const [seminarDate, setSeminarDate] = useState(initialSeminarDate || new Date());
  const [applicationDate, setApplicationDate] = useState(initialApplicationDate || new Date());
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (seminarDate < applicationDate) {
      setError('※ 현재 세미나 활성화 기간에서 벗어난 기간입니다.');
    } else {
      setError('');
    }
  }, [seminarDate, applicationDate]);

  return (
    <div className="space-y-6">
      {/* 현재 세미나 활성화 기간 */}
      <div className="bg-grey-900 p-6 rounded-10 h-[170px]">
        <h2 className="heading-2-bold text-white mb-6">현재 세미나 활성화 기간</h2>
        <DateTimeSelector date={seminarDate} onDateChange={setSeminarDate} />
      </div>

      {/* 세미나 신청 활성화 기간 */}
      <div className="bg-grey-900 p-6 rounded-10 h-[170px]">
        <h2 className="heading-2-bold text-white mb-6">세미나 신청 활성화 기간</h2>
        <DateTimeSelector date={applicationDate} onDateChange={setApplicationDate} />
        {error && <p className="text-status-error text-sm mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default ActiveDateForm;
