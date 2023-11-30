import { create } from "zustand";
import confetti from "canvas-confetti";
import { persist, devtools } from "zustand/middleware";
import { Question } from "@/types/types";
import { getQuestionsRequest } from "@/api/questions";

interface State {
  questions: Question[];
  currentQuestion: number;
  setCurrentQuestion: (index: number) => void;
  fetchQuestions: (limit: number) => Promise<void>;
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
          currentQuestion: 0,

          fetchQuestions: async (limit: number) => {
            const test = await getQuestionsRequest();
            const questions = test
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

            if (isCorrectUserAnswer) confetti();

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
            set({ currentQuestion: 0, questions: [] }, false, "RESET");
          },
        };
      },
      {
        name: "questions",
      }
    )
  )
);
