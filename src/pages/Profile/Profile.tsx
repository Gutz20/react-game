const Profile = () => {
  return (
    <div className="bg-bgPokemonNavidad bg-cover bg-no-repeat w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 ">
        <button className="px-4 py-2 bg-orange-500 border-2 rounded-xl w-full uppercase hover:bg-orange-600 hover:transition-all">
          Cambiar Contraseña
        </button>
        <button className="px-4 py-2 bg-red-500 border-2 rounded-xl w-full uppercase hover:bg-red-600 hover:transition-all">
          Log Out
        </button>
        <button className="px-4 py-2 bg-yellow-500 border-2 rounded-xl w-full uppercase hover:bg-yellow-600 hover:transition-all">
          Historial
        </button>
      </div>
    </div>
  );
};

export default Profile;
