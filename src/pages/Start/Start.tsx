import { getDificultsRequest } from "@/api/dificults";
import { useQuestionsStore } from "@/store/questions";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { RiBoxingFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const LIMIT_QUESTIONS = 10;

export const Start = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data: dificults } = useQuery({
    queryFn: async () => await getDificultsRequest(),
    queryKey: ["dificults"],
  });

  const navigate = useNavigate();
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleClick = (indexDificultSelected: number) => {
    fetchQuestions(LIMIT_QUESTIONS, indexDificultSelected);
    navigate("/menu/map");
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleOpen}
        className="w-full px-4 py-2 bg-bgFondoMate rounded-lg uppercase border-2 border-black font-bold"
      >
        ¡Empezar el juego!
      </button>
      <Modal open={open} onClose={handleClose}>
        <div className="absolute top-1/3 left-1/2 w-[400px] rounded-lg -translate-x-1/2 flex items-center justify-center bg-slate-800 flex-col p-4">
          <span className="text-xl font-bold">
            Seleccione un nivel de dificultad
          </span>
          <List sx={{ width: "100%" }}>
            {dificults?.map((dificult, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton
                  sx={{ borderRadius: 5 }}
                  onClick={() => handleClick(dificult.id as number)}
                >
                  <ListItemIcon>
                    <RiBoxingFill
                      className={`${
                        i === 0
                          ? "text-green-500"
                          : i === 1
                          ? "text-blue-500"
                          : "text-red-500"
                      } text-2xl`}
                    />
                  </ListItemIcon>
                  <ListItemText primary={dificult.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Modal>
    </div>
  );
};
