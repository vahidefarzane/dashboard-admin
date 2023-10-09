import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";
import { registerAction } from "./features/identity/components/register";
import { loginAction } from "./features/identity/components/login";

const router = createBrowserRouter([
  {
    path: "login",
    Component: Login,
    action: loginAction,
    errorElement: Login,
  },
  {
    path: "register",
    Component: Register,
    action: registerAction,
    errorElement: Register,
  },
]);

export default router;
