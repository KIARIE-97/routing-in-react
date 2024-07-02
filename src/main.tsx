import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home.tsx'
import Error from './pages/Error.tsx'
import Register from './pages/Register.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Contact from './pages/Contact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "register",
    element: <Register/>,
    errorElement: <Error/>
  },
  {
    path: "dashboard",
    element: <Dashboard/>,
    errorElement: <Error/>
  },
  {
    path: "contact",
    element: <Contact/>,
    errorElement: <Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
