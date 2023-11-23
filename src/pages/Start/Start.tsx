import { useQuestionsStore } from "@/store/questions";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const LIMIT_QUESTIONS = 10;

export const Start = () => {
  const navigate = useNavigate();
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
    navigate("/menu/exercises");
  };

  return (
    <div className="mt-4">
      <Button onClick={handleClick} variant="contained" className="w-full">
        ¡Empezar el juego!
      </Button>
    </div>
  );
};
