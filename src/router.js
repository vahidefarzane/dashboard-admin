import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login ,
  },
  {
    path: "/register",
    Component: Register ,
  },
]);

export default router;
