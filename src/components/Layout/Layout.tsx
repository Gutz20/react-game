import { getCurrentUserRequest } from "@/api/auth";
import { useAuthStore } from "@/store/store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);

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
      } catch (error) {}
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
