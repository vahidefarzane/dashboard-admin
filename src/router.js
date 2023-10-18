import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identity/components/login";
import Register from "./features/identity/components/register";
import { registerAction } from "./features/identity/components/register";
import { loginAction } from "./features/identity/components/login";
import IdentityLayout from "./layouts/identity-layout";
import Courses from "./pages/courses";
import MainLayout from "./layouts/mainLayout/main-layout";
import CourseCategories, { categoriesLoader } from "./pages/course-categories";
import { coursesLoader } from "./pages/courses";
import CourseDetails from "./features/courses/components/course-details";
import courseDetailsLoader from "./features/courses/components/course-details";
import { CategoryProvider } from "./features/categories/category-context";
import { CategoryProviderComponet } from "./pages/course-categories";
import NotFound from "./pages/not-found";
import UnhandledException from "./pages/unhandled-exception";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: UnhandledException,
    children: [
      {
        Component: Courses,
        index: true,
        loader: coursesLoader,
      },
      {
        path: "course-categories",
        Component: CategoryProviderComponet,
        loader: categoriesLoader,
      },
      {
        path: "courses/:id",
        Component: CourseDetails,
        loader: courseDetailsLoader,
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
  {
    path: "*",
    Component: NotFound ,
  },
]);

export default router;
