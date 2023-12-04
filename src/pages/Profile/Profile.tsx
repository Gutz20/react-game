import { useAuthStore } from "@/store/store";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const onChangePassword = () => {}; // TODO Cambiar contraseña

  const onLogout = () => {
    logout();
    navigate("/");
  };

  const onOpenHistorial = () => {}; //TODO Mostrar Historial

  return (
    <div className="bg-bgPokemonMapaFondo4 bg-cover bg-no-repeat w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 ">
        <button className="px-4 py-2 bg-orange-500 border-2 rounded-xl w-full uppercase hover:bg-orange-600 transition-all font-LilitaOne">
          Cambiar Contraseña
        </button>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-500 border-2 rounded-xl w-full uppercase hover:bg-red-600 transition-all font-LilitaOne"
        >
          Log Out
        </button>
        <button className="px-4 py-2 bg-blue-500 border-2 rounded-xl w-full uppercase hover:bg-blue-600 transition-all font-LilitaOne">
          Historial
        </button>
        <Link to="/menu">
          <button className="px-4 py-2 bg-yellow-500 border-2 rounded-xl w-full uppercase hover:bg-yellow-600 transition-all font-LilitaOne">
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
