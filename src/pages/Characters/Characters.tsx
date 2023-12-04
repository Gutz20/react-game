import { Character, useSettingStore } from "@/store/settings";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Characters = () => {
  const { selectCharacter, clearSelection, selectedCharacter } =
    useSettingStore();

  const characters = [
    { name: "Bulbasaur", image: "/bulbasaur.png" },
    { name: "Squirtle", image: "/Squirtle.png" },
    { name: "Charmander", image: "/Charmander-character.png" },
    { name: "Pikachu", image: "/Pikachu.png" },
  ];

  const onChangeCharacter = (character: Character) => {
    selectCharacter(character);
    toast.success(`Has seleccionado a ${character.name}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bgPokemonMapaFondo4 gap-4">
      <h1 className="text-3xl font-bold uppercase text-white font-LilitaOne">
        Selecciona tu personaje
      </h1>
      <div className="bg-opacity-80 bg-slate-900 border-2 w-fit p-8 rounded-lg">
        <div className="flex gap-4">
          {characters.map((character, index) => (
            <div
              key={index}
              className="bg-slate-300 rounded-lg p-4 hover:bg-slate-500 hover:transition-all"
            >
              <button
                onClick={() => onChangeCharacter(character)}
                className="flex flex-col items-center justify-center gap-4"
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="h-40 w-40"
                />
                <span className="text-black text-xl font-LilitaOne">
                  {character.name}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedCharacter && (
        <div className="mt-4 bg-slate-800 rounded-xl p-2 border-2">
          <h2 className="text-xl text-white font-MarkerDisplay">
            Personaje seleccionado:
          </h2>
          <div className="flex flex-col items-center">
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              className="h-40 w-40 mt-2"
            />
            <span className="text-white text-xl mt-2 font-LilitaOne font-normal">
              {selectedCharacter.name}
            </span>
          </div>
        </div>
      )}
      <div className="flex gap-4">
        {/* <button className="px-4 py-2 bg-red-500 rounded-lg text-3xl hover:transition-all hover:bg-red-600 border-2">
          Fijar
        </button> */}
        <Link to="/menu">
          <button className="px-4 py-2 bg-blue-500 rounded-lg text-3xl hover:transition-all hover:bg-blue-600 border-2 uppercase font-LilitaOne">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Characters;
