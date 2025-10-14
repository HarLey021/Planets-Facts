import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Planet from "./pages/Planet.tsx";
import Planets from "./components/planets/Planets.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/planets", element: <Planets /> },
  { path: "/planets/:name", element: <Planet /> },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
