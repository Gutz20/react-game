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
    <div className="bg-bgPokemonCiudad bg-no-repeat bg-cover grid grid-cols-6 gap-8 h-screen p-8">
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
            <h3 className="uppercase text-xl">Nivel Especial</h3>
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
          <motion.img
            onClick={() => handleClickLevel(9)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
          <RiArrowRightCircleLine className="text-4xl" />
          <motion.img
            onClick={() => handleClickLevel(8)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
          <RiArrowRightCircleLine className="text-4xl" />
          <motion.img
            onClick={() => handleClickLevel(7)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
        </div>
        <div className="flex justify-start">
          <RiArrowUpCircleFill className="text-7xl text-blue-500 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <motion.img
            onClick={() => handleClickLevel(6)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
          <RiArrowLeftCircleLine className="text-4xl" />
          <motion.img
            onClick={() => handleClickLevel(5)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
          <RiArrowLeftCircleLine className="text-4xl" />
          <motion.img
            onClick={() => handleClickLevel(4)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
        </div>
        <div className="flex justify-end">
          <RiArrowUpCircleFill className="text-7xl text-blue-500 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <motion.img
            onClick={() => handleClickLevel(0)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
          <RiArrowRightCircleLine className="text-4xl" />
          <motion.img
            onClick={() => handleClickLevel(1)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
          <RiArrowRightCircleLine className="text-4xl" />
          <motion.img
            onClick={() => handleClickLevel(2)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
          <RiArrowRightCircleLine className="text-4xl" />
          <motion.img
            onClick={() => handleClickLevel(3)}
            src="/pokebola-cat-1.png"
            className="w-20 h-20 cursor-pointer"
            style={{ rotate }}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between col-span-1 z-10">
        <motion.div
          className="flex justify-end"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <span className="underline text-xl">{formatTiempo()}</span>
        </motion.div>
        <motion.div
          className="bg-yellow-500 border-2 rounded-xl p-4 h-60 overflow-auto font-LilitaOne"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <h3 className="uppercase text-center font-normal">Historia</h3>
          <p className="text-justify font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            magnam? Assumenda cum, voluptatum porro quo asperiores quasi
            aspernatur nemo voluptate? Exercitationem fugiat, impedit quo labore
            quisquam ipsam amet corporis reiciendis. Historia (?)
          </p>
        </motion.div>
        <motion.div
          className="bg-blue-500 border-xl p-4 rounded-xl mr-12 border-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <span className="font-MarkerDisplay">Puntaje: </span>
          <span className="font-MarkerDisplay">{points}</span>
          <span className="font-MarkerDisplay text-red-500">Pokepoints</span>
        </motion.div>
      </div>
    </div>
  );
};

export default MapGame;
