import { FormSchemaParental, formParentalSchema } from "@/types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RiAccountCircleLine, RiTimeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ParentalControl = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaParental>({
    resolver: zodResolver(formParentalSchema),
    mode: "onChange",
  });

  const onHandleAccept = () => {};
  const onHandleReject = () => {};

  return (
    <div>
      <div className="flex flex-col bg-bgPokemonControlParental bg-cover bg-no-repeat h-screen w-full p-20 gap-4">
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
            </form>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 h-52 w-full border-2">
            <span>Puntajes</span>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center">
            <button className="px-4 py-2 rounded-lg bg-blue-500 font-bold uppercase hover:bg-blue-600 border-2 border-black hover:transition-all">
              Aceptar
            </button>
            <button className="px-4 py-2 rounded-lg bg-red-500 font-bold uppercase hover:bg-red-600 border-2 border-black hover:transition-all">
              Rechazar
            </button>
            <Link
              to="/menu"
              className="px-4 py-2 rounded-lg bg-yellow-500 font-bold uppercase hover:bg-yellow-600 border-2 border-black hover:transition-all text-center"
            >
              Regresar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentalControl;
