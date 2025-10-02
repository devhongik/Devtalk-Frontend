interface SeminarReviewInputProps {
  placeholder: string;
  input: string;
  onChange: (value: string) => void;
}

const SeminarReviewInput = ({ placeholder, input, onChange }: SeminarReviewInputProps) => {
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <textarea
        className="w-[335px] h-[149px] p-16 rounded-8 bg-grey-800 text-grey-300 body-1-medium outline-none resize-none required"
        placeholder={placeholder}
        value={input}
        onChange={handleReviewChange}
      />
    </>
  );
};

export default SeminarReviewInput;
