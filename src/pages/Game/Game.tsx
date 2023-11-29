import { Footer, Question } from "@/components";
import { useQuestionsStore } from "@/store/questions";
import { Button } from "@mui/material";

export const Game = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  );

  const questionInfo = questions[currentQuestion];

  return (
    <>
      <Question info={questionInfo} />
      <div className="flex flex-row gap-2 items-center justify-center mt-4">
        <button
          onClick={goPreviousQuestion}
          className={`px-4 py-2 rounde-lg bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:transition-all hover:scale-105 active:scale-95 disabled:pointer-events-none ${
            currentQuestion === 0 ? "bg-gray-200" : "bg-blue-500"
          }`}
          disabled={currentQuestion === 0}
        >
          Anterior
        </button>
        <Button onClick={goPreviousQuestion} variant="contained">
          {/* <ArrowBackIosNew /> */}
          PISTA
        </Button>
        <Button onClick={goPreviousQuestion} variant="contained">
          {/* <ArrowBackIosNew /> */}
          NIVEL
        </Button>
        {/* {currentQuestion + 1} / {questions.length} */}
        <Button
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
          variant="contained"
        >
          {/* <ArrowForwardIos /> */}
          SIGUIENTE
        </Button>
      </div>
      <Footer />
    </>
  );
};
