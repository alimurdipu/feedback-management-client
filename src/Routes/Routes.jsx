import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import FirstPage from '../Pages/FirstPage/FirstPage';
import Main from '../Layout/Main';
import Team from '../Pages/Team/Team';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Environment from '../Pages/Environment/Environment';
import Task from '../Pages/Task/Task';
import Login from '../Pages/Login/Login';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard/>,
        },
        {
          path: "/environment",
          element: <Environment/>
        },
        {
          path: "/task",
          element: <Task/>
        },
        {
          path: '/team',
          element: <Team/>
        },
        {
          path: '/admin',
          element: <FirstPage/>
        },
        {
          path: '/login',
          element: <Login/>
        }
      ]
    },
  ]);
