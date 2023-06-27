import React from 'react';
import ReactDOM from 'react-dom/client'
import { router } from './routers'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import UserProvider from './context/UserContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
