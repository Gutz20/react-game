import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Box, IconButton, Menu, MenuItem, Slider, Stack } from "@mui/material";
import React, { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Configuration = () => {
  const [value, setValue] = React.useState<number>(30);
  const [anchorElDificult, setAnchorElDificult] = useState<null | HTMLElement>(
    null
  );
  const [anchorElProblem, setAnchorElProblem] = useState<null | HTMLElement>(
    null
  );
  const open = Boolean(anchorElDificult);
  const open2 = Boolean(anchorElProblem);

  const handleClickDificult = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElDificult(event.currentTarget);
  };

  const handleCloseDificult = () => {
    setAnchorElDificult(null);
  };

  const handleClickProblem = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProblem(event.currentTarget);
  };

  const handleCloseProblem = () => {
    setAnchorElProblem(null);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-bgCharacters gap-4">
      <h1 className="text-3xl font-bold uppercase text-black">Configuración</h1>
      <div className="grid grid-cols-2 bg-opacity-80 bg-black w-fit p-8 rounded-lg">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-3xl">Nivel de dificultad</span>
            <IconButton
              aria-label="fingerprint"
              color="primary"
              size="large"
              onClick={handleClickDificult}
            >
              <RiArrowDropRightLine />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorElDificult}
              open={open}
              onClose={handleCloseDificult}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseDificult}>De 3 a 4 años</MenuItem>
              <MenuItem onClick={handleCloseDificult}>De 4 a 5 años</MenuItem>
              <MenuItem onClick={handleCloseDificult}>De 6 a 8 años</MenuItem>
              <MenuItem onClick={handleCloseDificult}>De 9 a 12 años</MenuItem>
            </Menu>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-3xl">Tipos de problemas</span>
            <IconButton
              aria-label="fingerprint"
              color="primary"
              size="large"
              onClick={handleClickProblem}
            >
              <RiArrowDropRightLine />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorElProblem}
              open={open2}
              onClose={handleCloseProblem}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCloseProblem}>Suma</MenuItem>
              <MenuItem onClick={handleCloseProblem}>Resta</MenuItem>
              <MenuItem onClick={handleCloseProblem}>Multiplicación</MenuItem>
              <MenuItem onClick={handleCloseProblem}>División</MenuItem>
              <MenuItem onClick={handleCloseProblem}>Personales</MenuItem>
            </Menu>
          </div>
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
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="/pikachu-con-sombrero.png"
            alt="Pikachu general"
            className="w-40 h-40"
          />
          <div className="flex gap-4">
            <button className="border border-black uppercase text-white text-2xl rounded-lg bg-red-500 hover:bg-red-600 hover:transition-all px-4 py-2">
              Restaurar
            </button>
            <button className="border border-black uppercase text-white text-2xl rounded-lg bg-red-500 hover:bg-red-600 hover:transition-all px-4 py-2">
              Aplicar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
