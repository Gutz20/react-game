import { useQuestionsData } from "@/hooks/useQuestionsData";
import { useQuestionsStore } from "@/store/questions";
import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import { RiHome2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Game, Results } from "..";

const Exercises = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const { unanswered } = useQuestionsData();

  const reset = useQuestionsStore((state) => state.reset);
  const navigate = useNavigate();

  const theme = useTheme();

  const handleReset = () => {
    reset();
    navigate("/menu");
  };

  const backgroundImages = [
    "bg-bgPokemonPregunta1",
    "bg-bgPokemonPregunta2",
    "bg-bgPokemonPregunta3",
    "bg-bgPokemonPregunta4",
    "bg-bgPokemonPregunta5",
    "bg-bgPokemonPregunta6",
    "bg-bgPokemonPregunta7",
    "bg-bgPokemonPregunta8",
    "bg-bgPokemonPregunta9",
    "bg-bgPokemonPregunta10",
    "bg-bgPokemonPregunta11",
  ];

  const getBackgroundImage = () => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    return backgroundImages[randomIndex];
  };

  const backgroundImage = getBackgroundImage();

  return (
    <div className={`${backgroundImage} bg-cover bg-no-repeat h-screen p-4`}>
      <IconButton onClick={handleReset} size="large">
        <RiHome2Line />
      </IconButton>

      {questions.length > 0 && unanswered > 0 && <Game />}
      {questions.length > 0 && unanswered === 0 && <Results />}
    </div>
  );
};

export default Exercises;
