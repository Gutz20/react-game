import { useQuestionsData } from "@/hooks/useQuestionsData";
import { usePointsStore } from "@/store/points";
import { useQuestionsStore } from "@/store/questions";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Results = () => {
  const navigate = useNavigate();
  const { correct, incorrect } = useQuestionsData();
  const point = useQuestionsStore((state) => state.point);
  const reset = useQuestionsStore((state) => state.reset);
  const { addPoint } = usePointsStore();

  const handleReset = () => {
    addPoint(point);
    reset();
    navigate("/menu");
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="bg-slate-950 rounded-xl p-4 flex flex-col items-center justify-center gap-4 border-2">
        <h1 className="font-LilitaOne">¡Tus resultados</h1>

        <strong className="font-LilitaOne font-normal">
          <p>✅ {correct} correctas</p>
          <p>❌ {incorrect} incorrectas</p>
          <p>Conseguiste {point} Pokepoints</p>
        </strong>

        <div className="mt-4">
          <Button onClick={handleReset}>¡Empezar de nuevo!</Button>
        </div>
      </div>
    </div>
  );
};
