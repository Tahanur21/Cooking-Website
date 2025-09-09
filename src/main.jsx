import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react';
import Home from './Components/Home/Home.jsx';
import Recipies from './Components/Recipeis/Recipies.jsx';
import About from './Components/About/About.jsx';
import Description from './Components/Description/Description.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/recipie',
        loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`),
        element: <Recipies />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/description/:descId',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php/categories/${params.descId}`),
        element: <Description />
      }

    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
