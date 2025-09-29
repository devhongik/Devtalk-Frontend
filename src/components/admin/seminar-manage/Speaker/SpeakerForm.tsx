import SingleSpeakerForm from './SingleSpeakerForm';
import type { Speaker } from '../../../../types/SeminarManage/seminar';

interface SpeakerFormProps {
  speakers: Speaker[];
  onChange: (updatedSpeakers: Speaker[]) => void;
}

const SpeakerForm: React.FC<SpeakerFormProps> = ({ speakers, onChange }) => {
  const handleSpeakerChange = (
    index: number,
    field: keyof Speaker,
    value: string | File | null
  ) => {
    const updatedSpeakers = speakers.map((speaker, i) =>
      i === index ? { ...speaker, [field]: value } : speaker
    );
    onChange(updatedSpeakers);
  };

  return (
    <div className="bg-grey-900 p-6 rounded-10">
      <h2 className="heading-2-bold text-white mb-6">연사진 정보</h2>
      <div className="space-y-[64px]">
        {speakers.map((speaker, index) => (
          <SingleSpeakerForm
            key={index}
            partNumber={index + 1}
            speakerData={speaker}
            onChange={(field, value) => handleSpeakerChange(index, field, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeakerForm;
