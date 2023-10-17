import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";
import { registerAction } from "./features/identity/components/register";
import { loginAction } from "./features/identity/components/login";
import IdentityLayout from "./layouts/identity-layout";
import Courses from "./pages/courses";
import MainLayout from "./layouts/mainLayout/main-layout";
import CourseCategories from "./pages/course-categories";
import { coursesLoader } from "./pages/courses";
// import categoriesLoader from './pages/course-categories'

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        Component: Courses,
        index: true,
        loader: coursesLoader,
      },
      {
        path: "course-categories",
        Component: CourseCategories,
        // <CategoryProvider>
        // </CategoryProvider>

        // loader: categoriesLoader,
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
