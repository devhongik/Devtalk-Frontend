import Fillstar from '../../../assets/icons/components/ReviewCard/fillstar.svg?react';
import Nostar from '../../../assets/icons/components/ReviewCard/nonestar.svg?react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index}>
          {index < rating ? (
            <Fillstar className="w-[30px] h-[30px]" />
          ) : (
            <Nostar className="w-[30px] h-[30px]" />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
