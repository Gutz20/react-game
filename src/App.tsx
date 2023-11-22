import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout, NotFound } from "./components";
import { Login, Menu, Register } from "./pages";

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
