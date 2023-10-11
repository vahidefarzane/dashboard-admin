import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";
import { registerAction } from "./features/identity/components/register";
import { loginAction } from "./features/identity/components/login";
import IdentityLayout from "./layouts/identity-layout";
import Courses from "./pages/courses";
import MainLayout from "./layouts/mainLayout/main-layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        Component: Courses,
        index: true,
      },
    ],
  },
  {
    Component: IdentityLayout,
    children: [
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
    ],
  },
]);

export default router;
