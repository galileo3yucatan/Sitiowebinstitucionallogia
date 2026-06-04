import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AvisoPrivacidad from "./pages/AvisoPrivacidad";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/aviso-privacidad",
    Component: AvisoPrivacidad,
  },
]);
