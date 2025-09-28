interface LiveLinkInputProps {
  link: string;
  onLinkChange: (newLink: string) => void;
}

const LiveLinkInput: React.FC<LiveLinkInputProps> = ({ link, onLinkChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLinkChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="bg-grey-900 p-6 rounded-10">
      <h2 className="heading-2-bold text-white mb-6">세미나 Live 링크</h2>
      <input
        type="url"
        className="w-full h-[66px] px-6 py-5 rounded-8 bg-grey-700 text-grey-300  
                   focus:outline-none focus:ring-2 focus:ring-green-300 border-transparent"
        placeholder="링크 URL을 입력해주세요."
        value={link}
        onChange={handleChange}
      />
    </div>
  );
};

export default LiveLinkInput;