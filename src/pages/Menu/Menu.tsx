import { useQuestionsData } from "@/hooks/useQuestionsData";
import { useQuestionsStore } from "@/store/questions";
import { useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Game, Results, Start } from "..";

const Menu = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const { unanswered } = useQuestionsData();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <main>
      <div className="h-screen grid grid-cols-3">
        <div className="flex items-center justify-center">
          <img src="./charmander-home.png" alt="Charmander" />
        </div>
        <div className="flex flex-col gap-8 justify-center">
          <div>
            <h1 className="text-4xl font-bold text-center">
              ¡Prepárate para Capturar PokeProblemas!
            </h1>
          </div>

          <span className="border text-center border-red-500 uppercase text-white text-2xl rounded-lg hover:bg-red-500 hover:transition-all hover:text-black px-4 py-2">
            ¡Empezemos!
          </span>
          {questions.length === 0 && <Start />}
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="./pokemathe-logo-gris.png"
            alt="logo-pokemathe"
            className="mb-4"
          />
          <div className="flex flex-col items-center justify-center gap-4 border-2 border-red-500 rounded-lg p-4">
            <Link to="/menu/personajes" className="w-fit">
              <button className="border border-yellow-500 uppercase text-white text-2xl rounded-lg hover:bg-yellow-500 hover:transition-all hover:text-black px-4 py-2">
                <img
                  className="w-20 h-20"
                  src="./mini-pikachuv2.png"
                  alt="mini-pikachu"
                />
              </button>
            </Link>
            <button className="border border-yellow-500 uppercase text-white text-2xl rounded-lg hover:bg-yellow-500 hover:transition-all hover:text-black px-4 py-2">
              <img
                className="w-20 h-20"
                src="./estadisticas-icon.png"
                alt="estadisticas"
              />
            </button>
            <button className="border border-yellow-500 uppercase text-white text-2xl rounded-lg hover:bg-yellow-500 hover:transition-all hover:text-black px-4 py-2">
              <img
                className="w-20 h-20"
                src="./signo-de-interrogacion.png"
                alt="interrogación"
              />
            </button>
            <Link to="/menu/configuracion">
              <button className="border border-yellow-500 uppercase text-white text-2xl rounded-lg hover:bg-yellow-500 hover:transition-all hover:text-black px-4 py-2">
                <img
                  className="w-20 h-20"
                  src="./settings-icon.png"
                  alt="settings"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;
