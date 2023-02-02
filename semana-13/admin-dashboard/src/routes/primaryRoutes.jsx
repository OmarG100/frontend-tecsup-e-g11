import { createBrowserRouter } from "react-router-dom";

export const primaryRoutes = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: 'login',
        element: <h1>Login</h1>
      }
    ]
  }
]);