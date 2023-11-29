import { useQuestionsStore } from "@/store/questions";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Start } from "..";

const Menu = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const theme = useTheme();

  return (
    <main className="bg-bgPikachuHierba bg-cover bg-opacity-90">
      <div className="h-screen grid grid-cols-3">
        <div className="flex items-center justify-center">
          <img
            src="./charmander-home.png"
            alt="Charmander"
            className="animate-[bounce_2s_ease-in-out_infinite]"
          />
        </div>
        <div className="flex flex-col gap-[450px] justify-center">
          <div className="px-4 py-4">
            <img src="/titulo-menu.png" alt="titulo" className="w-full h-30" />
          </div>

          <div className="">
            <button className="w-full text-center bg-red-500 uppercase text-white rounded-lg hover:transition-all px-4 py-2 hover:bg-red-700 border-2 border-black font-bold">
              ¡Empecemos!
            </button>
            {questions.length === 0 && <Start />}
          </div>
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
            <Link to="/menu/parental">
              <button className="border border-yellow-500 uppercase text-white text-2xl rounded-lg hover:bg-yellow-500 hover:transition-all hover:text-black px-4 py-2">
                <img
                  className="w-20 h-20"
                  src="./estadisticas-icon.png"
                  alt="estadisticas"
                />
              </button>
            </Link>
            <Link to="/menu/profile">
              <button className="border border-yellow-500 uppercase text-white text-2xl rounded-lg hover:bg-yellow-500 hover:transition-all hover:text-black px-4 py-2">
                <img
                  className="w-20 h-20"
                  src="./signo-de-interrogacion.png"
                  alt="interrogación"
                />
              </button>
            </Link>
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
