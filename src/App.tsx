import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout, NotFound, ProtectedRoute } from "./components";
import {
  Characters,
  Configuration,
  Exercises,
  Login,
  Menu,
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
        // {
        //   path: "/dashboard/customers",
        //   element: <Customers />,
        // },
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
