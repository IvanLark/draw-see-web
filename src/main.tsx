import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./pages/app.tsx";
import Auth from "@/pages/auth/auth.tsx";
import LoginForm from "@/pages/auth/components/login-form.tsx";
import SignUpForm from "@/pages/auth/components/signup-form.tsx";
import Flow from "@/pages/flow/flow.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Flow />
      },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          {
            path: '/auth',
            element: <LoginForm />
          },
          {
            path: '/auth/login',
            element: <LoginForm />
          },
          {
            path: '/auth/signup',
            element: <SignUpForm />
          }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
