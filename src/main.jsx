import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import DonateDescription from './components/DonateDescription/DonateDescription';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../categories.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('../categories.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/description/:id',
        element: <DonateDescription></DonateDescription>,
        loader: () => fetch('../categories.json'),
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

