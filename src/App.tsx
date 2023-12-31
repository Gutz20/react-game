import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout, NotFound, ProtectedRoute } from "./components";
import {
  Characters,
  Configuration,
  Exercises,
  Login,
  MapGame,
  Menu,
  ParentalControl,
  Profile,
  Register,
} from "./pages";
import { useAuthStore } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/registro",
      element: <Register />,
      errorElement: <NotFound />,
    },
    {
      path: "/menu",
      element: (
        <ProtectedRoute isAllowed={isAuth}>
          <Layout />
        </ProtectedRoute>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Menu />,
        },
        {
          path: "/menu/personajes",
          element: <Characters />,
        },
        {
          path: "/menu/configuracion",
          element: <Configuration />,
        },
        {
          path: "/menu/exercises",
          element: <Exercises />,
        },
        {
          path: "/menu/parental",
          element: <ParentalControl />,
        },
        {
          path: "/menu/profile",
          element: <Profile />,
        },
        {
          path: "/menu/map",
          element: <MapGame />,
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
