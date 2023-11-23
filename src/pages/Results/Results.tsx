import { useQuestionsData } from "@/hooks/useQuestionsData";
import { useQuestionsStore } from "@/store/questions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Results = () => {
  const navigate = useNavigate();
  const { correct, incorrect } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);

  const handleReset = () => {
    reset();
    navigate("/menu");
  };

  return (
    <div className="mt-4">
      <h1>¡Tus resultados</h1>

      <strong>
        <p>✅ {correct} correctas</p>
        <p>❌ {incorrect} incorrectas</p>
      </strong>

      <div className="mt-4">
        <Button onClick={handleReset}>¡Empezar de nuevo!</Button>
      </div>
    </div>
  );
};
