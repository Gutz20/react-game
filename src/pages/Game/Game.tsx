import { Footer, Question } from "@/components";
import { useQuestionsStore } from "@/store/questions";
import {
  RiArrowLeftDoubleFill,
  RiArrowRightDoubleFill,
  RiLightbulbFill,
  RiMenuLine,
  RiOrganizationChart,
} from "react-icons/ri";

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
          } disabled:text-black uppercase font-PacificoFamily disabled:transition-all`}
          disabled={currentQuestion === 0}
        >
          <span className="flex items-center">
            <RiArrowLeftDoubleFill className="mr-2" /> Anterior
          </span>
        </button>
        <button
          onClick={goPreviousQuestion}
          className={`px-4 py-2 rounde-lg bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:transition-all hover:scale-105 active:scale-95 uppercase font-PacificoFamily`}
        >
          <span className="flex items-center">
            <RiLightbulbFill className="mr-2 text-yellow-400" /> Pista
          </span>
        </button>
        <button
          onClick={goPreviousQuestion}
          className={`px-4 py-2 rounde-lg bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:transition-all hover:scale-105 active:scale-95 uppercase font-PacificoFamily`}
        >
          <span className="flex items-center">
            <RiOrganizationChart className="mr-2" /> Nivel
          </span>
        </button>
        {/* {currentQuestion + 1} / {questions.length} */}
        <button
          onClick={goNextQuestion}
          className={`px-4 py-2 rounde-lg bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:transition-all hover:scale-105 active:scale-95 disabled:pointer-events-none ${
            currentQuestion >= questions.length - 1
              ? "bg-gray-200"
              : "bg-blue-500"
          } disabled:text-black uppercase font-PacificoFamily`}
          disabled={currentQuestion >= questions.length - 1}
        >
          {/* <ArrowForwardIos /> */}
          <span className="flex items-center">
            Siguiente <RiArrowRightDoubleFill className="ml-2" />
          </span>
        </button>
      </div>
      <Footer />
    </>
  );
};
