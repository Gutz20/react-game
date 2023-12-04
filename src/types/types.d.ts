export interface Question {
  id: number;
  question: string;
  code: string;
  answers: string[];
  correctAnswer: number;
  track: string;
  isCorrectUserAnswer?: boolean;
  userSelectedAnswer?: number;
}
