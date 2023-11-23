import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout, NotFound } from "./components";
import {
  Characters,
  Configuration,
  Exercises,
  Login,
  Menu,
  Register,
} from "./pages";

function App() {
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
      element: <Layout />,
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
