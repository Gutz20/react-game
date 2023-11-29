import { getCurrentUserRequest } from "@/api/auth";
import { useSettingStore } from "@/store/settings";
import { useAuthStore } from "@/store/store";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { RiVolumeMuteLine, RiVolumeUpLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const setVolume = useSettingStore((state) => state.setVolume);
  const volume = useSettingStore((state) => state.volume);

  const [isMuted, setIsMuted] = useState(true);
  const [previousVolume, setPreviousVolume] = useState(volume);

  const onHandleVolume = () => {
    if (!isMuted) {
      setVolume(previousVolume);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
    }
    setIsMuted(!isMuted);
    playAudio(volume);
  };

  const playAudio = async (newVolume: number) => {
    try {
      const audio = document.getElementById(
        "backgroundAudio"
      ) as HTMLAudioElement;
      audio.volume = newVolume / 100;

      if (newVolume > 0) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Error al reproducir audio:", error);
    }
  };

  useEffect(() => {
    getUserInfo();

    async function getUserInfo() {
      try {
        if (
          !(user.username !== "" && user.email !== "" && user.password !== "")
        ) {
          const userInfo = await getCurrentUserRequest();
          setUser(userInfo.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [volume]);

  return (
    <div className="relative">
      <Outlet />
      <audio id="backgroundAudio" loop>
        <source src="pokemon-audio.m4a" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <div className="absolute bottom-0 right-0 m-4">
        <IconButton onClick={onHandleVolume}>
          {isMuted ? <RiVolumeMuteLine /> : <RiVolumeUpLine />}
        </IconButton>
      </div>
    </div>
  );
};

export default Layout;
