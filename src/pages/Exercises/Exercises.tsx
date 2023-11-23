import { useQuestionsData } from "@/hooks/useQuestionsData";
import { useQuestionsStore } from "@/store/questions";
import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";
import { RiHome2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Game, Results } from "..";

const Exercises = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const { unanswered } = useQuestionsData();

  const reset = useQuestionsStore((state) => state.reset);
  const navigate = useNavigate();

  const theme = useTheme();

  const handleReset = () => {
    reset();
    navigate("/menu");
  };

  return (
    <div className="p-4">
      <IconButton onClick={handleReset} size="large">
        <RiHome2Line />
      </IconButton>

      {questions.length > 0 && unanswered > 0 && <Game />}
      {questions.length > 0 && unanswered === 0 && <Results />}
    </div>
  );
};

export default Exercises;
