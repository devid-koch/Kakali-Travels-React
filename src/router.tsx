import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error";
import RootLayout from "./layouts/root";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Home />
        ),
      },
      // {
      //   path: "success",
      //   element: (
      //     <RequireAuth fallbackPath={ "/login" }>
      //       <SuccessPage />
      //     </RequireAuth>
      //   ),
      // },
    ],
  },
  // {
  //   path: "login",
  //   element: <AuthPage />,
  // },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
