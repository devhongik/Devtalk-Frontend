import { useState } from 'react';
import SingleSpeakerForm, { type Speaker } from './SingleSpeakerForm';

const initialSpeakerState: Speaker = {
  profileUrl: null,
  name: '',
  organization: '',
  history: '',
  title: '',
  description: '',
};

const SpeakerForm = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([
    initialSpeakerState, // 1부
    initialSpeakerState, // 2부
  ]);

  const handleSpeakerChange = (index: number, field: keyof Speaker, value: string | File | null) => {
    const updatedSpeakers = [...speakers];
    updatedSpeakers[index] = { ...updatedSpeakers[index], [field]: value };
    setSpeakers(updatedSpeakers);
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