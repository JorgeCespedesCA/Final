import React from 'react';
import Image from 'next/image';

interface ExerciseCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  setsReps: string;
  isHighlighted?: boolean;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  setsReps,
  isHighlighted = false,
}) => {
  return (
    <div
      className={`
        flex items-center justify-between p-4 mb-3
        rounded-lg shadow-md
        bg-gray-800 text-white
        ${isHighlighted ? 'border-2 border-pink-500' : ''}
      `}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`
            relative w-20 h-20 rounded-md overflow-hidden
            ${isHighlighted ? 'border-2 border-pink-500' : ''}
          `}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-400">{setsReps}</p>
        </div>
      </div>
      <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-700 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className={`w-6 h-6 ${isHighlighted ? 'text-pink-500' : 'text-gray-400'}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default ExerciseCard;