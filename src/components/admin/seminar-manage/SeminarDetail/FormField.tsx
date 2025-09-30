interface FormFieldProps {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  maxLength?: number;
}

const FormField = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  maxLength,
}: FormFieldProps) => {
  return (
    <div className="mb-7">
      <label className="block subhead-1-medium text-white mb-[16px]">{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        className="w-full h-[66px] px-6 py-5 rounded-8 bg-grey-700 text-grey-300  
                   focus:outline-none focus:ring-2 focus:ring-green-300 border-transparent"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        maxLength={maxLength}
      />

      {error && <p className="text-status-error text-sm mt-[6px]">{error}</p>}
    </div>
  );
};

export default FormField;
