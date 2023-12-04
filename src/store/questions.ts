import { getQuestionsByDificultRequest, getQuestionsRequest } from "@/api/questions";
import { QuestionSchemaInfer } from "@/models/question";
import confetti from "canvas-confetti";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  questions: QuestionSchemaInfer[];
  currentQuestion: number;
  point: number;
  incrementPoints: (quantity: number) => void;
  setCurrentQuestion: (index: number) => void;
  fetchQuestions: (limit: number, dificultId: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPreviousQuestion: () => void;
  reset: () => void;
}

export const useQuestionsStore = create<State>()(
  devtools(
    persist(
      (set, get) => {
        return {
          loading: false,
          questions: [],
          point: 0,
          currentQuestion: 0,

          fetchQuestions: async (limit: number, dificultId?: number) => {
            const response = await getQuestionsByDificultRequest(dificultId);
            const questions = response
              .sort(() => Math.random() - 0.5)
              .slice(0, limit);

            set({ questions }, false, "FETCH_QUESTIONS");
          },

          selectAnswer: (questionId: number, answerIndex: number) => {
            const { questions } = get();
            const newQuestions = structuredClone(questions);
            const questionIndex = newQuestions.findIndex(
              (q) => q.id === questionId
            );
            const questionInfo = newQuestions[questionIndex];
            const isCorrectUserAnswer =
              questionInfo.correctAnswer === answerIndex;

            if (isCorrectUserAnswer) {
              get().incrementPoints(10);
              confetti();
            }

            newQuestions[questionIndex] = {
              ...questionInfo,
              isCorrectUserAnswer,
              userSelectedAnswer: answerIndex,
            };
            set({ questions: newQuestions }, false, "SELECT_ANSWER");
          },

          setCurrentQuestion: (index: number) => {
            set({ currentQuestion: index }, false, "SET_CURRENT_QUESTION");
          },

          goNextQuestion: () => {
            const { currentQuestion, questions } = get();
            const nextQuestion = currentQuestion + 1;

            if (nextQuestion < questions.length) {
              set({ currentQuestion: nextQuestion }, false, "GO_NEXT_QUESTION");
            }
          },

          incrementPoints: (cantidad: number) => {
            set(
              (state) => ({ point: state.point + cantidad }),
              false,
              "INCREMENT_POINTS"
            );
          },

          goPreviousQuestion: () => {
            const { currentQuestion } = get();
            const previousQuestion = currentQuestion - 1;

            if (previousQuestion >= 0) {
              set(
                { currentQuestion: previousQuestion },
                false,
                "GO_PREVIOUS_QUESTION"
              );
            }
          },

          reset: () => {
            set(
              { currentQuestion: 0, questions: [], point: 0 },
              false,
              "RESET"
            );
          },
        };
      },
      {
        name: "questions",
      }
    )
  )
);
