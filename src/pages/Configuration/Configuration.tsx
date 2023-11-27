import { useSettingStore } from "@/store/settings";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Slider, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Configuration = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState<number>(30);
  const volume = useSettingStore((state) => state.volume);
  const setVolume = useSettingStore((state) => state.setVolume);

  useEffect(() => {
    setValue(volume);
  }, []);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const onRestore = () => {
    setValue(50);
    setVolume(50);
  };

  const onAppliedChanges = () => {
    setVolume(value);
    navigate("/menu");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bgCharacters gap-4">
      <h1 className="text-3xl font-bold uppercase text-black">Configuración</h1>
      <div className="grid grid-cols-2 bg-opacity-80 bg-black w-fit p-8 rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <span className="text-3xl">Volumen</span>
            <div className="w-[200px]">
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <VolumeDown />
                <Slider
                  size="medium"
                  aria-label="Volume"
                  value={value}
                  onChange={handleChange}
                />
                <VolumeUp />
              </Stack>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-3xl">Tutorial</span>
            <button className="px-4 py-2 bg-yellow-500 rounded-lg w-full uppercase hover:bg-yellow-600">
              Ir al tutorial
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/pikachu-con-sombrero.png"
            alt="Pikachu general"
            className="w-40 h-40"
          />
          <div className="flex gap-4">
            <button
              className="border border-black uppercase text-white text-2xl rounded-lg bg-red-500 hover:bg-red-600 hover:transition-all px-4 py-2"
              onClick={onRestore}
            >
              Restaurar
            </button>
            <button
              className="border border-black uppercase text-white text-2xl rounded-lg bg-red-500 hover:bg-red-600 hover:transition-all px-4 py-2"
              onClick={onAppliedChanges}
            >
              Aplicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
