interface SeminarReviewInputProps {
  placeholder: string;
}

const SeminarReviewInput = ({ placeholder }: SeminarReviewInputProps) => {
  return (
    <>
      <textarea
        className="w-[335px] h-[149px] p-16 rounded-8 bg-grey-800 text-grey-300 body-1-medium outline-none resize-none"
        placeholder={placeholder}
      />
    </>
  );
};

export default SeminarReviewInput;
