import CustomSelect from './CustomSelect';

interface DateTimeSelectorProps {
  date: Date;
  onDateChange: (newDate: Date) => void;
}

const DateTimeSelector = ({ date, onDateChange }: DateTimeSelectorProps) => {
  const handleSelectChange = (
    part: 'year' | 'month' | 'day' | 'hour' | 'minute',
    value: number
  ) => {
    const newDate = new Date(date);
    if (part === 'year') newDate.setFullYear(value);
    if (part === 'month') newDate.setMonth(value - 1);
    if (part === 'day') newDate.setDate(value);
    if (part === 'hour') newDate.setHours(value);
    if (part === 'minute') newDate.setMinutes(value);
    onDateChange(newDate);
  };

  // CustomSelect에 맞는 {value, label} 형태의 배열로 변환
  const yearOptions = Array.from({ length: 3 }, (_, i) => new Date().getFullYear() + i).map(
    (y) => ({ value: y, label: String(y) })
  );
  const monthOptions = Array.from({ length: 12 }, (_, i) => i + 1).map((m) => ({
    value: m,
    label: String(m).padStart(2, '0'),
  }));
  const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1).map((d) => ({
    value: d,
    label: String(d).padStart(2, '0'),
  }));
  const hourOptions = Array.from({ length: 24 }, (_, i) => i).map((h) => ({
    value: h,
    label: String(h).padStart(2, '0'),
  }));
  const minuteOptions = [0, 15, 30, 45].map((m) => ({
    value: m,
    label: String(m).padStart(2, '0'),
  }));

  const roundedMinutes = Math.floor(date.getMinutes() / 15) * 15;

  return (
    <div className="flex items-center gap-5">
      {/* 연도 */}
      <div className="flex items-center gap-[6px]">
        <CustomSelect
          options={yearOptions}
          selectedValue={date.getFullYear()}
          onSelect={(value) => handleSelectChange('year', value as number)}
        />
        <span className="subhead-1-medium text-white">년</span>
      </div>

      {/* 월 */}
      <div className="flex items-center gap-[6px]">
        <CustomSelect
          options={monthOptions}
          selectedValue={date.getMonth() + 1}
          onSelect={(value) => handleSelectChange('month', value as number)}
        />
        <span className="subhead-1-medium text-white">월</span>
      </div>

      {/* 일 */}
      <div className="flex items-center gap-[6px]">
        <CustomSelect
          options={dayOptions}
          selectedValue={date.getDate()}
          onSelect={(value) => handleSelectChange('day', value as number)}
        />
        <span className="subhead-1-medium text-white">일</span>
      </div>

      {/* 시간 : 분 */}
      <div className="flex items-center gap-[6px]">
        <CustomSelect
          options={hourOptions}
          selectedValue={date.getHours()}
          onSelect={(value) => handleSelectChange('hour', value as number)}
        />
        <span className="heading-3-semibold text-white">:</span>
        <CustomSelect
          options={minuteOptions}
          selectedValue={roundedMinutes}
          onSelect={(value) => handleSelectChange('minute', value as number)}
        />
      </div>
    </div>
  );
};

export default DateTimeSelector;
