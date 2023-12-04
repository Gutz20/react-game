import { useQuestionsData } from "@/hooks/useQuestionsData";
import { useQuestionsStore } from "@/store/questions";
import { RiLoader4Fill } from "react-icons/ri";
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
    <footer className="flex flex-col items-center justify-center mt-4">
      <div className="bg-slate-800 w-fit p-4 rounded-xl flex gap-4">
        <span className="text-blue-500 font-bold">{`✅ ${correct} correctas`}</span>
        <span className="text-red-500 font-bold">{`❌ ${incorrect} incorrectas`}</span>
        <span className="text-yellow-500 font-bold">{`❓ ${unanswered} sin responder`}</span>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-2 rounded-lg bg-blue-500 border-2 hover:bg-blue-600 uppercase hover:transition-all font-LilitaOne hover:scale-105"
          onClick={handleReset}
        >
          <span className="flex items-center">
            <RiLoader4Fill className="mr-2" /> Resetear Juego
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
