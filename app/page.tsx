import PageHeader from '@/components/PageHeader';
import ExerciseList from '@/components/ExerciseList';

const exercisesData = [
  {
    id: '1',
    imageSrc: '/ejercicio_frontal.jpeg',
    imageAlt: 'Mujer haciendo jalones al pecho',
    title: 'Puxada frontal',
    setsReps: '3 séries x 12 repetições',
    isHighlighted: false,
  },
  {
    id: '2',
    imageSrc: '/ejercicio_remada_curva.jpeg',
    imageAlt: 'Hombre haciendo remada curvada',
    title: 'Remada curvada',
    setsReps: '3 séries x 12 repetições',
    isHighlighted: false,
  },
  {
    id: '3',
    imageSrc: '/ejercicio_remada_unilateral.jpeg',
    imageAlt: 'Mujer haciendo remada unilateral',
    title: 'Remada unilateral',
    setsReps: '3 séries x 12 repetições',
    isHighlighted: true,
  },
  {
    id: '4',
    imageSrc: '/ejercicio_levantamiento_tierra.jpeg',
    imageAlt: 'Hombre haciendo levantamiento tierra',
    title: 'Levantamento terra',
    setsReps: '3 séries x 12 repetições',
    isHighlighted: false,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <PageHeader title="Exercícios" count={exercisesData.length} />
      <ExerciseList exercises={exercisesData} />
    </div>
  );
}