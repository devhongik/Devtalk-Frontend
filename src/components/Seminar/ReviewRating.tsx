import { useState } from 'react';
import ReviewStar from '../../assets/icons/components/ReviewCard/ReviewStart';

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
            className="w-50 h-50"
            onclick={() => handleStarClick(index)}
            isActive={rating > index ? true : false}
          />
        ))}
      </div>
    </>
  );
};

export default ReviewRating;
