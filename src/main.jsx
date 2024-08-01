import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import About from './pages/About.jsx';
import Photo from './pages/Photo.jsx';
import Contact from './pages/Contact.jsx';
import Video from './pages/Video.jsx';
import Sound from './pages/Sound.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Homepage/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/photo",
    element:<Photo/>
  },
  {
    path:"/video",
    element:<Video/>
  },
  {
    path:"/sound",
    element:<Sound/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
