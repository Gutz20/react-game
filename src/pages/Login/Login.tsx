import { FormSchemaLogin, formLoginSchema } from "@/types/formTypes";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  RiEyeFill,
  RiEyeOffFill,
  RiLockFill,
  RiMailFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaLogin>({
    resolver: zodResolver(formLoginSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormSchemaLogin> = async (data) => {};

  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src="./pikachu-bg.png"
        alt="bg-pikachu"
        className="absolute left-16 top-56"
      />
      <form className="flex flex-col bg-neutral-950 w-[400px] p-12 rounded-xl border">
        <img src="./top-login-form.png" alt="description" />
        <h2 className="uppercase text-xl">Login</h2>
        <span className="text-start">Usuario</span>
        <div className="mb-2">
          <div className="relative">
            <img
              src="./mini-pikachu.png"
              alt="pikachu"
              className="absolute top-1/2 -translate-y-1/2 left-[0.5]"
            />
            <input
              id="username"
              type="text"
              placeholder="PokeMathe"
              className="py-3 pl-8 px-4 text-white bg-transparent border-2 outline-none rounded-lg w-full"
              {...register("username")}
              autoComplete="off"
            />
          </div>
          {errors.username && (
            <p className="text-red-500 text-xs font-semibold">
              {errors.username.message}
            </p>
          )}
        </div>
        <span className="text-start mt-4">Contraseña</span>
        <div className="mb-2">
          <div className="relative">
            <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="py-3 px-8 text-white bg-transparent border-2 outline-none rounded-lg w-full"
              {...register("password")}
            />
            {showPassword ? (
              <RiEyeOffFill
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            ) : (
              <RiEyeFill
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            )}
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs font-semibold">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <Link
            to="/menu"
            className="text-white px-4 py-2 bg-red-500 rounded-lg w-fit hover:bg-red-600 hover:transition-all"
          >
            Iniciar Sesion
          </Link>
          <div className="flex justify-between gap-4 mt-4">
            <span className="text-xs">¿Olvidaste tu contraseña?</span>
            <Link to={"/registro"} className="uppercase text-red-500 text-xs">
              Registrate
            </Link>
          </div>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default Login;
