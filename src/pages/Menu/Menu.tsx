import { FormSchemaAlias, formAliasSchema } from "@/types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@mui/material";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Start } from "..";
import { DevTool } from "@hookform/devtools";
import { useAliasStore } from "@/store/alias";
import { toast } from "react-toastify";

const Menu = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaAlias>({
    resolver: zodResolver(formAliasSchema),
    mode: "onChange",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const alias = useAliasStore((state) => state.alias);
  const setAlias = useAliasStore((state) => state.setAlias);

  const onAliasSubmit: SubmitHandler<FormSchemaAlias> = async (data) => {
    setAlias(data.alias);
    handleClose();
  };

  const onErrorAliasSubmit: SubmitErrorHandler<FormSchemaAlias> = async (
    data
  ) => {
    toast.error(`Error al ingresar el alias ${data.alias}`, {
      theme: "light",
      position: "top-center",
    });
  };

  return (
    <main className="bg-bgPikachuHierba bg-cover bg-opacity-90">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="h-screen grid grid-cols-3">
        <div className="flex items-center justify-center z-10">
          <img
            src="./charmander-home.png"
            alt="Charmander"
            className="animate-[bounce_2s_ease-in-out_infinite]"
          />
        </div>
        <div className="flex flex-col gap-[450px] justify-center z-10">
          <div className="px-4 py-4">
            <img src="/titulo-menu.png" alt="titulo" className="w-full h-30" />
          </div>

          <div className="">
            {alias === "" ? (
              <>
                <button
                  onClick={handleOpen}
                  type="button"
                  className="w-full text-center bg-red-500 uppercase text-white rounded-lg hover:transition-all px-4 py-2 hover:bg-red-700 border-2 border-black font-bold"
                >
                  ¡Empecemos!
                </button>
                <Modal open={open} onClose={handleClose}>
                  <form
                    onSubmit={handleSubmit(onAliasSubmit, onErrorAliasSubmit)}
                    className="absolute top-1/3 left-1/2 w-[400px] rounded-lg -translate-x-1/2 flex items-center justify-center bg-slate-800 flex-col p-4"
                  >
                    <span className="text-xl font-LilitaOne">
                      Ingrese su alias
                    </span>
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
                    <button
                      type="submit"
                      className="px-4 py-2 bg-red-500 text-xl font-bold uppercase rounded-xl hover:bg-red-600 transition-all"
                    >
                      Aceptar
                    </button>
                  </form>
                </Modal>
              </>
            ) : (
              <Start />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center z-10">
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

      <DevTool control={control} />
    </main>
  );
};

export default Menu;
