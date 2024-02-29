import Characters from "@src/pages/Characters";
import Home from "@src/pages/Home";
import Sejarah from "@src/pages/Sejarah";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    caseSensitive: true,
  },
  {
    path: "/sejarah",
    element: <Sejarah />,
  },
  {
    path: "/tokoh",
    element: <Characters />,
  },
]);

export default router;
