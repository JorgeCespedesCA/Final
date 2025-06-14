import React from 'react';
import ExerciseCard from './ExerciseCard';

interface Exercise {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  setsReps: string;
  isHighlighted?: boolean;
}

interface ExerciseListProps {
  exercises: Exercise[];
}

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises }) => {
  return (
    <div className="p-4">
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          imageSrc={exercise.imageSrc}
          imageAlt={exercise.imageAlt}
          title={exercise.title}
          setsReps={exercise.setsReps}
          isHighlighted={exercise.isHighlighted}
        />
      ))}
    </div>
  );
};

export default ExerciseList;