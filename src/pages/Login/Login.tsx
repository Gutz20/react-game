import { loginRequest } from "@/api/auth";
import { useAuthStore } from "@/store/store";
import { FormSchemaLogin, formLoginSchema } from "@/types/formTypes";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { RiEyeFill, RiEyeOffFill, RiLockFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaLogin>({
    resolver: zodResolver(formLoginSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormSchemaLogin> = async (data) => {
    const resLogin = await loginRequest(data);
    setToken(resLogin.data.token);

    navigate(`/menu`);
  };

  const onError: SubmitErrorHandler<FormSchemaLogin> = async (data) => {
    toast.error(`test ${data.username?.message || data.password?.message}`, {
      theme: "light",
      position: "top-center",
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-no-repeat bg-cover">
      <img
        src={"/pikachu-bg.png"}
        className="absolute left-16 top-56 bg-bgPikachu animate-[bounce_3s_ease-in-out_infinite]"
      />
      <form
        className="flex flex-col bg-neutral-950 w-[400px] p-12 rounded-xl border"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
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
          <button
            type="submit"
            className="text-white px-4 py-2 bg-red-500 rounded-lg w-fit hover:bg-red-600 hover:transition-all"
          >
            Iniciar Sesion
          </button>
          <div className="flex justify-between gap-4 mt-4">
            <span className="text-xs">¿Olvidaste tu contraseña?</span>
            <Link to={"/registro"} className="uppercase text-red-500 text-xs">
              Registrate
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />

      <DevTool control={control} />
    </div>
  );
};

export default Login;
