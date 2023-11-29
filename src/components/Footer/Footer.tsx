import { useQuestionsData } from "@/hooks/useQuestionsData";
import { useQuestionsStore } from "@/store/questions";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const { correct, incorrect, unanswered } = useQuestionsData();
  const reset = useQuestionsStore((state) => state.reset);

  const handleReset = () => {
    reset();
    navigate("/menu");
  };

  return (
    <footer className="mt-4">
      <div className="bg-slate-800 w-fit p-4 rounded-xl flex gap-4">
        <span className="text-blue-500 font-bold">{`✅ ${correct} correctas`}</span>
        <span className="text-red-500 font-bold">{`❌ ${incorrect} incorrectas`}</span>
        <span className="text-yellow-500 font-bold">{`❓ ${incorrect} sin responder`}</span>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-2 rounded-lg bg-blue-500 border-2 hover:bg-blue-600 uppercase hover:transition-all"
          onClick={handleReset}
        >
          Resetear Juego
        </button>
      </div>
    </footer>
  );
};

export default Footer;
