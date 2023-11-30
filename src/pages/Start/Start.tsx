import { useQuestionsStore } from "@/store/questions";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const LIMIT_QUESTIONS = 10;

export const Start = () => {
  const navigate = useNavigate();
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
    navigate("/menu/map");
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleClick}
        className="w-full px-4 py-2 bg-bgFondoMate rounded-lg uppercase border-2 border-black font-bold"
      >
        ¡Empezar el juego!
      </button>
    </div>
  );
};
