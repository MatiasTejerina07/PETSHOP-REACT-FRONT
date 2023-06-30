import React from 'react';
import ReactDOM from 'react-dom/client'
import { router } from './routers'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import { store } from "./redux/store"
import { Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
)
