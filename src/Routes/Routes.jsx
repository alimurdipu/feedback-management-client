import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home';
import FirstPage from '../Pages/FirstPage/FirstPage';
import Main from '../Layout/Main';
import SecondPage from '../Pages/SecondPage/SecondPage';
import ThirdPage from '../Pages/ThirdPage/ThirdPage';
import FourthPage from '../Pages/FourthPage/FourthPage';
import FifthPage from '../Pages/FifthPage/FifthPage';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: '/firstpage',
          element: <FirstPage/>
        },
        {
          path: '/secondpage',
          element: <SecondPage/>
        },
        {
          path: '/thirdpage',
          element: <ThirdPage/>
        },
        {
          path: '/fourthpage',
          element: <FourthPage/>
        },
        {
          path: '/fifthpage',
          element: <FifthPage/>
        }
      ]
    },
  ]);
