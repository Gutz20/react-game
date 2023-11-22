import {
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Start, Game, Results } from "..";
import { useQuestionsData } from "@/hooks/useQuestionsData";
import { useQuestionsStore } from "@/store/questions";

const Menu = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const { unanswered } = useQuestionsData();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <main>
      <div className="grid grid-cols-3">
        <div className="flex items-center justify-center">
          <img src="./charmander-home.png" alt="Charmander" />
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <div>
            <h1 className="text-4xl font-bold">
              ¡Prepárate para Capturar PokeProblemas!
            </h1>
          </div>

          <button className="border border-red-500 uppercase text-white text-2xl">
            ¡Empezemos!
          </button>
          <button className="border border-yellow-500 uppercase text-white text-2xl">
            Jugar
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="./pokemathe-logo-gris.png"
            alt="logo-pokemathe"
            className="mb-4"
          />
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-red-500 rounded-lg p-4">
            <button className="w-fit">
              <img
                className="w-20 h-20"
                src="./mini-pikachuv2.png"
                alt="mini-pikachu"
              />
            </button>
            <button className="w-fit">
              <img
                className="w-20 h-20"
                src="./estadisticas-icon.png"
                alt="estadisticas"
              />
            </button>
            <button className="w-fit">
              <img
                className="w-20 h-20"
                src="./signo-de-interrogacion.png"
                alt="interrogación"
              />
            </button>
            <button className="w-fit ">
              <img
                className="w-20 h-20"
                src="./settings-icon.png"
                alt="settings"
              />
            </button>
          </div>
        </div>
      </div>

      {/* {questions.length === 0 && <Start />}
      {questions.length > 0 && unanswered > 0 && <Game />}
      {questions.length > 0 && unanswered === 0 && <Results />} */}
    </main>
  );
};

export default Menu;
