import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
