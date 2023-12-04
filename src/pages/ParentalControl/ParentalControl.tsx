import { useAliasStore } from "@/store/alias";
import { usePointsStore } from "@/store/points";
import { useSettingStore } from "@/store/settings";
import { useAuthStore } from "@/store/store";
import {
  FormSchemaParental,
  FormSchemaTime,
  formParentalSchema,
  formTimeSchema,
} from "@/types/formTypes";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@mui/material";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import {
  RiAccountCircleLine,
  RiSupabaseFill,
  RiTimeLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ParentalControl = () => {
  const user = useAuthStore((state) => state.user);
  const alias = useAliasStore((state) => state.alias);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { points, clearPoints } = usePointsStore();

  const { time, setTime } = useSettingStore((state) => ({
    time: state.time,
    setTime: state.setTime,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaParental>({
    resolver: zodResolver(formParentalSchema),
    defaultValues: {
      usuario: user.username,
      alias: alias,
    },
    mode: "onChange",
  });

  const {
    register: registerTime,
    handleSubmit: handleSubmitModal,
    formState: { errors: errorsModal },
    control: controlModal,
  } = useForm<FormSchemaTime>({
    resolver: zodResolver(formTimeSchema),
    defaultValues: {
      time: time,
    },
    mode: "onChange",
  });

  const onSubmitModal: SubmitHandler<FormSchemaTime> = (data) => {
    setTime(data.time);
  };

  const onErrorModal: SubmitErrorHandler<FormSchemaTime> = async (data) => {
    toast.error(`Error al ingresar el tiempo ${data.time}`, {
      theme: "light",
      position: "top-center",
    });
  };

  const onHandleAccept = () => {};
  const onHandleReject = () => {};

  return (
    <div>
      <div className="flex flex-col bg-bgCharacters bg-cover bg-no-repeat h-screen w-full p-20 gap-4">
        <div className="flex items-center justify-center">
          <img
            src="/control-parental-title.png"
            alt="Control parental"
            className="w-1/3 h-20"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <form className="flex flex-col gap-4">
              <div className="mb-2">
                <div className="relative">
                  <RiAccountCircleLine className="absolute top-1/2 -translate-y-1/2 left-3" />
                  <input
                    type="text"
                    placeholder="Usuario"
                    className="py-3 pl-8 px-4 text-white bg-black border-2 outline-none rounded-lg w-80"
                    {...register("usuario")}
                    autoComplete="off"
                  />
                </div>
                {errors.usuario && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.usuario.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <div className="relative">
                  <RiAccountCircleLine className="absolute top-1/2 -translate-y-1/2 left-3" />
                  <input
                    type="text"
                    placeholder="Alias"
                    className="py-3 pl-8 px-4 text-white bg-black border-2 outline-none rounded-lg w-80"
                    {...register("alias")}
                    autoComplete="off"
                  />
                </div>
                {errors.alias && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.alias.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <div className="relative">
                  <RiAccountCircleLine className="absolute top-1/2 -translate-y-1/2 left-3" />
                  <input
                    type="text"
                    placeholder="Edad"
                    className="py-3 pl-8 px-4 text-white bg-black border-2 outline-none rounded-lg w-80"
                    {...register("edad")}
                    autoComplete="off"
                  />
                </div>
                {errors.edad && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.edad.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <div className="relative">
                  <RiTimeLine className="absolute top-1/2 -translate-y-1/2 left-3" />
                  <input
                    type="text"
                    placeholder="Tiempo: 3 minutos - 1 hora"
                    className="py-3 pl-8 px-4 text-white bg-black border-2 outline-none rounded-lg w-80"
                    {...register("tiempo")}
                    autoComplete="off"
                  />
                </div>
                {errors.tiempo && (
                  <p className="text-red-500 text-xs font-semibold">
                    {errors.tiempo.message}
                  </p>
                )}
              </div>
              <button
                type="button"
                className="px-4 py-2 rounded-lg bg-blue-500 font-bold uppercase hover:bg-blue-600 border-2 border-black hover:transition-all"
                onClick={handleOpen}
              >
                Tiempo
              </button>
            </form>
            <Modal open={open} onClose={handleClose}>
              <form
                onSubmit={handleSubmitModal(onSubmitModal, onErrorModal)}
                className="absolute top-1/3 left-1/2 w-[400px] rounded-lg -translate-x-1/2 flex items-center justify-center bg-slate-800 flex-col p-4"
              >
                <span className="text-xl font-LilitaOne">
                  Coloque el tiempo por pregunta (*seg)
                </span>
                <div className="mb-2">
                  <div className="relative">
                    <RiTimeLine className="absolute top-1/2 -translate-y-1/2 left-3" />
                    <input
                      type="text"
                      placeholder="Tiempo"
                      {...registerTime("time", { valueAsNumber: true })}
                      className="py-3 pl-8 px-4 text-white bg-black border-2 outline-none rounded-lg w-80"
                      autoComplete="off"
                    />
                    {errorsModal.time && (
                      <p className="text-red-500 text-xs font-semibold">
                        {errorsModal.time.message}
                      </p>
                    )}
                  </div>
                </div>
                <button className="px-4 py-2 bg-red-500 text-xl font-bold uppercase rounded-xl hover:bg-red-600 transition-all">
                  Aceptar
                </button>
              </form>
            </Modal>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 h-52 w-full border-2 overflow-auto">
            <span>Puntajes</span>
            <div className="flex gap-4">
              <span>Alias: {alias}</span>
              <span>Edad: 4</span>
              <span>Tiempo: 3 minutos</span>
            </div>
            <div className="">
              {points.map((point, i) => (
                <List key={i}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <RiSupabaseFill className="text-yellow-500" />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={point} secondary={`Pokepoints`} />
                  </ListItem>
                </List>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-start">
            <button className="px-4 py-2 rounded-lg bg-blue-500 font-bold uppercase hover:bg-blue-600 border-2 border-black hover:transition-all">
              Guardar
            </button>
            <button className="px-4 py-2 rounded-lg bg-red-500 font-bold uppercase hover:bg-red-600 border-2 border-black hover:transition-all">
              Limpiar
            </button>
            <Link
              to="/menu"
              className="px-4 py-2 rounded-lg bg-yellow-500 font-bold uppercase hover:bg-yellow-600 border-2 border-black hover:transition-all text-center"
            >
              Regresar
            </Link>
          </div>
        </div>
        <DevTool control={controlModal} />
      </div>
    </div>
  );
};

export default ParentalControl;
