import { Footer, Question } from "@/components";
import { useQuestionsStore } from "@/store/questions";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
} from "@mui/material";
import { useState } from "react";
import {
  RiArrowLeftDoubleFill,
  RiArrowRightDoubleFill,
  RiLightbulbFill,
  RiOrganizationChart,
} from "react-icons/ri";

export const Game = () => {
  const [openPista, setOpenPista] = useState(false);
  const [openLevel, setOpenLevel] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(0);

  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const setCurrentQuestion = useQuestionsStore(
    (state) => state.setCurrentQuestion
  );
  const goNextQuestion = useQuestionsStore((state) => state.goNextQuestion);
  const goPreviousQuestion = useQuestionsStore(
    (state) => state.goPreviousQuestion
  );

  const questionInfo = questions[currentQuestion];

  const onPistaOpen = () => {
    setOpenPista(!openPista);
  };

  const onLevelOpen = () => {
    setOpenLevel(!openLevel);
  };

  const onLevelSelected = (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    index: number
  ) => {
    event.preventDefault();
    setCurrentQuestion(index);
  };

  return (
    <>
      <div className="flex items-center justify-center w-full ">
        <span className="text-white font-LilitaOne font-normal bg-slate-500 p-2 rounded-xl border-2">
          {currentQuestion + 1} / {questions.length}
        </span>
      </div>

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
          onClick={onPistaOpen}
          className={`px-4 py-2 rounde-lg bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:transition-all hover:scale-105 active:scale-95 uppercase font-PacificoFamily`}
        >
          <span className="flex items-center">
            <RiLightbulbFill className="mr-2 text-yellow-400" /> Pista
          </span>
          <Modal open={openPista} onClose={onPistaOpen}>
            <div className="absolute top-[50%] left-[50%] bg-slate-800 p-4 border-2 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl">
              <span>{questionInfo.track}</span>
            </div>
          </Modal>
        </button>
        <button
          onClick={onLevelOpen}
          className={`px-4 py-2 rounde-lg bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:transition-all hover:scale-105 active:scale-95 uppercase font-PacificoFamily`}
        >
          <span className="flex items-center">
            <RiOrganizationChart className="mr-2" /> Nivel
          </span>
          <Modal open={openLevel} onClose={onLevelOpen}>
            <div className="absolute top-[50%] left-[50%] bg-slate-800 p-4 border-2 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl">
              <span>Lista de Niveles</span>
              {questions.map((question, index) => (
                <List key={index} disablePadding>
                  <ListItemButton
                    selected={selectedLevel === currentQuestion}
                    onClick={(event) => onLevelSelected(event, index)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText
                      primary={`Nivel ${index + 1} ${question.id}`}
                    />
                  </ListItemButton>
                </List>
              ))}
            </div>
          </Modal>
        </button>

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
