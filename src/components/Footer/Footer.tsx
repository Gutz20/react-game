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
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
      <div className="mt-4">
        <Button onClick={handleReset}>Resetear juego</Button>
      </div>
    </footer>
  );
};

export default Footer;
