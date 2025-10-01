import { useState } from 'react';
import ReviewStar from '../../assets/icons/components/ReviewCard/ReviewStart.svg?react';

const ReviewRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <>
      <div className="w-[375px] h-[50px] px-20 flex flex-row gap-0 justify-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <ReviewStar
            key={index}
            className={`w-8 h-8 cursor-pointer ${rating > index ? 'text-gradient' : 'text-[#4B5362]'}`}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ReviewRating;
