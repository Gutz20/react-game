import { FormSchemaParental, formParentalSchema } from "@/types/formTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

  return (
    <div>
      <div className="grid grid-cols-3 bg-bgPokemonesUnidos bg-cover bg-no-repeat h-screen w-full p-4 gap-4">
        <div>
          <form className="flex flex-col gap-4">
            <div className="mb-2">
              <div className="relative">
                <img
                  src="/mini-pikachu.png"
                  alt="pikachu"
                  className="absolute top-1/2 -translate-y-1/2 left-[0.5]"
                />
                <input
                  type="text"
                  placeholder="Campo 1"
                  className="py-3 pl-8 px-4 text-white bg-black border-2 outline-none rounded-lg w-full"
                  {...register("campo1")}
                  autoComplete="off"
                />
              </div>
              {errors.campo1 && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.campo1.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <div className="relative">
                <img
                  src="/mini-pikachu.png"
                  alt="pikachu"
                  className="absolute top-1/2 -translate-y-1/2 left-[0.5]"
                />
                <input
                  type="text"
                  placeholder="Campo 2"
                  className="py-3 pl-8 px-4 text-white bg-black border-2 outline-none rounded-lg w-full"
                  {...register("campo2")}
                  autoComplete="off"
                />
              </div>
              {errors.campo2 && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.campo2.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <div className="relative">
                <img
                  src="/mini-pikachu.png"
                  alt="pikachu"
                  className="absolute top-1/2 -translate-y-1/2 left-[0.5]"
                />
                <input
                  type="text"
                  placeholder="Campo 3"
                  className="py-3 pl-8 px-4 text-white bg-black border-2 outline-none rounded-lg w-full"
                  {...register("campo3")}
                  autoComplete="off"
                />
              </div>
              {errors.campo3 && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.campo3.message}
                </p>
              )}
            </div>
            <div className="mb-2">
              <div className="relative">
                <img
                  src="/mini-pikachu.png"
                  alt="pikachu"
                  className="absolute top-1/2 -translate-y-1/2 left-[0.5]"
                />
                <input
                  type="text"
                  placeholder="Campo 4"
                  className="py-3 pl-8 px-4 text-white bg-black border-2 outline-none rounded-lg w-full"
                  {...register("campo4")}
                  autoComplete="off"
                />
              </div>
              {errors.campo4 && (
                <p className="text-red-500 text-xs font-semibold">
                  {errors.campo4.message}
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="bg-slate-800 rounded-xl p-4 h-[285px] border-2">
          <span>Puntajes</span>
        </div>
        <div className="flex flex-col gap-4">
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
  );
};

export default ParentalControl;
