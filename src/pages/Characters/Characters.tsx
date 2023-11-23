import { Link } from "react-router-dom";

const Characters = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bgCharacters gap-4">
      <h1 className="text-3xl font-bold uppercase text-black">
        Selecciona tu personaje
      </h1>
      <div className="bg-opacity-80 bg-black w-fit p-8 rounded-lg">
        <div className="flex gap-4">
          <div className="bg-slate-300 rounded-lg p-4 hover:bg-slate-500 hover:transition-all">
            <button className="flex flex-col items-center justify-center gap-4">
              <img src="/bulbasaur.png" alt="Bulbasaur" className="h-40 w-40" />
              <span className="text-black text-xl font-semibold">
                Bulbasaur
              </span>
            </button>
          </div>
          <div className="bg-slate-300 rounded-lg p-4 hover:bg-slate-500 hover:transition-all">
            <button className="flex flex-col items-center justify-center gap-4">
              <img src="/Squirtle.png" alt="Squirtle" className="h-40 w-40" />
              <span className="text-black text-xl font-semibold">Squirtle</span>
            </button>
          </div>

          <div className="bg-slate-300 rounded-lg p-4 hover:bg-slate-500 hover:transition-all">
            <button className="flex flex-col items-center justify-center gap-4">
              <img
                src="/Charmander-character.png"
                alt="Charmander"
                className="h-40 w-40"
              />
              <span className="text-black text-xl font-semibold">
                Charmander
              </span>
            </button>
          </div>

          <div className="bg-slate-300 rounded-lg p-4 hover:bg-slate-500 hover:transition-all">
            <button className="flex flex-col items-center justify-center gap-4">
              <img src="/Pikachu.png" alt="Pikachu" className="h-40 w-40" />
              <span className="text-black text-xl font-semibold">Pikachu</span>
            </button>
          </div>
        </div>
      </div>
      <Link to="/menu">
        <button className="px-4 py-2 bg-red-500 rounded-lg text-3xl hover:transition-all hover:bg-red-600">
          Seleccionar
        </button>
      </Link>
    </div>
  );
};

export default Characters;
