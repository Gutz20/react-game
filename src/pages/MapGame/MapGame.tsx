import { useAliasStore } from "@/store/alias";
import { useQuestionsStore } from "@/store/questions";
import { useSettingStore } from "@/store/settings";
import { motion, useTime, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import {
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
  RiArrowUpCircleFill,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const MapGame = () => {
  const navigate = useNavigate();
  const setCurrentQuestion = useQuestionsStore(
    (state) => state.setCurrentQuestion
  );
  const { selectedCharacter } = useSettingStore();
  const alias = useAliasStore((state) => state.alias);
  const points = useQuestionsStore((state) => state.points);

  const [tiempo, setTiempo] = useState(0);
  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setTiempo((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTiempo = () => {
    const horas = Math.floor(tiempo / 3600)
      .toString()
      .padStart(2, "0");
    const minutos = Math.floor((tiempo % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const segundos = (tiempo % 60).toString().padStart(2, "0");
    return `${horas}:${minutos}:${segundos}`;
  };

  const handleClickLevel = (index: number) => {
    navigate("/menu/exercises");
    setCurrentQuestion(index);
  };

  return (
    <div className="bg-bgPokemonMapaFondo4 bg-no-repeat bg-cover grid grid-cols-6 gap-8 h-screen p-8">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="flex flex-col justify-between col-span-1 z-10 gap-4">
        <div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Link to="/menu">
              <motion.button
                className="px-4 py-2 uppercase font-LilitaOne border-2 rounded-xl transition-all w-fit hover:bg-red-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                Regresar
              </motion.button>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 font-LilitaOne gap-4">
            <h3 className="uppercase text-xl">Pregunta Especial</h3>
            <span className="">Adquiere más Pokepuntos</span>
            <motion.img
              src="/pokebola-cat-1.png"
              alt="Pokebola"
              className="w-20 h-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne text-xl">{alias}</span>
            <motion.img
              src={selectedCharacter?.image}
              alt={selectedCharacter?.name}
              className="w-20 h-20"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            />
          </div>
          <motion.img
            src="/pokebola-cat-1.png"
            alt="Pokebola"
            className="w-20 h-20"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
          />
        </div>
      </div>
      <div className="grid grid-rows-5 col-span-4 items-center z-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 8</span>
            <motion.img
              onClick={() => handleClickLevel(7)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
          <RiArrowRightCircleLine className="text-4xl text-yellow-500" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 9</span>
            <motion.img
              onClick={() => handleClickLevel(8)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
          <RiArrowRightCircleLine className="text-4xl text-yellow-500" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 10</span>
            <motion.img
              onClick={() => handleClickLevel(9)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
        </div>
        <div className="flex justify-start">
          <RiArrowUpCircleFill className="text-7xl text-yellow-500 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 7</span>
            <motion.img
              onClick={() => handleClickLevel(6)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
          <RiArrowLeftCircleLine className="text-4xl text-yellow-500" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 6</span>
            <motion.img
              onClick={() => handleClickLevel(5)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
          <RiArrowLeftCircleLine className="text-4xl text-yellow-500" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 5</span>
            <motion.img
              onClick={() => handleClickLevel(4)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <RiArrowUpCircleFill className="text-7xl text-yellow-500 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 1</span>
            <motion.img
              onClick={() => handleClickLevel(0)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
          <RiArrowRightCircleLine className="text-4xl text-yellow-500" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 2</span>
            <motion.img
              onClick={() => handleClickLevel(1)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
          <RiArrowRightCircleLine className="text-4xl text-yellow-500" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 3</span>
            <motion.img
              onClick={() => handleClickLevel(2)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
          <RiArrowRightCircleLine className="text-4xl text-yellow-500" />
          <div className="flex flex-col items-center justify-center">
            <span className="font-LilitaOne">Nivel 4</span>
            <motion.img
              onClick={() => handleClickLevel(3)}
              src="/pokebola-cat-1.png"
              className="w-20 h-20 cursor-pointer"
              style={{ rotate }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between col-span-1 z-10">
        <motion.div
          className="flex justify-end"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <span className="text-4xl font-MarkerDisplay">
            Time: {formatTiempo()}
          </span>
        </motion.div>
        <motion.div
          className="bg-slate-800 border-2 rounded-xl p-4 h-60 overflow-auto font-LilitaOne"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <h3 className="uppercase text-center font-normal">
            El Viaje Incesante
          </h3>
          <p className="text-justify font-normal">
            Seguimos la epopeya de Ash Ketchum, un joven entrenador Pokémon de
            Pueblo Paleta, en su búsqueda para convertirse en el Maestro Pokémon
            definitivo. Acompañado por su fiel compañero Pikachu, Ash se
            enfrenta a desafíos de gimnasios, villanos del Team Rocket y hace
            nuevos amigos mientras recorre la región de Kanto y más allá. A lo
            largo de su viaje, captura nuevos Pokémon, evoluciona sus compañeros
            y aprende valiosas lecciones sobre amistad y perseverancia, dejando
            una huella indeleble en el vasto mundo de Pokémon.
          </p>
        </motion.div>
        <motion.div
          className="bg-blue-500 border-xl p-4 rounded-xl mr-12 border-2 flex items-center gap-2 "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <img src="/pokebola.png" alt="Pokebola" className="w-8 h-8" />{" "}
          <span className="font-MarkerDisplay text-2xl"> x {points}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default MapGame;
